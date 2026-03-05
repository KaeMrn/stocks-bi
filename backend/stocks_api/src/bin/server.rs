use anyhow::Result;
use axum::{middleware::from_fn, routing::get, Router};
use dotenvy::dotenv;
use sqlx::postgres::PgPoolOptions;
use std::env;
use tokio::net::TcpListener;
use stocks_api::{common::security, features};
use stocks_api::openapi::ApiDoc;
use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;
use tower_http::cors::{CorsLayer, Any};

#[tokio::main]
async fn main() -> Result<()> {
    dotenv().ok();
    let db_url = env::var("DATABASE_URL")?;
    let jwt_secret = env::var("JWT_SECRET")?;
    
    let pool = PgPoolOptions::new()
        .max_connections(10)
        .connect(&db_url)
        .await?;

    // Initialise le JWT secret au démarrage
    security::init_jwt_secret(jwt_secret)?;

    async fn health() -> &'static str { "OK" }

    // Routes protégées (nécessitent un token JWT valide)
    let protected_routes = Router::new()
        .nest("/products", features::products::router::product_routes(pool.clone()))
        .nest("/orders", features::orders::router::order_routes(pool.clone()))
        .nest("/users", features::users::router::user_routes(pool.clone()))
        .nest("/stocks", features::stocks::router::stock_routes(pool.clone()))
        .nest("/sales", features::sales::router::sales_routes(pool.clone()))
        .nest("/suppliers", features::suppliers::router::suppliers_routes(pool.clone()))
        .nest("/restocks", features::restocks::router::restock_routes(pool.clone()))
        .nest("/kpis", features::global_kpis::router::global_kpis_routes(pool.clone()))
        .layer(from_fn(features::auth::middleware::require_auth)); // Applique le middleware d'auth

    // Configuration CORS
    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    // Application principale
    let app = Router::new()
        .route("/health", get(health))
        .merge(SwaggerUi::new("/swagger-ui").url("/api-docs/openapi.json", ApiDoc::openapi()))
        .nest("/auth", features::auth::router::auth_routes(pool)) // Routes login/register (publiques)
        .merge(protected_routes) // Ajoute toutes les routes protégées
        .layer(cors);

    let listener = TcpListener::bind("0.0.0.0:8080").await?;
    println!("🌐 API disponible sur http://0.0.0.0:8080 (dans le conteneur)");
    println!("📚 Swagger UI disponible sur http://0.0.0.0:8080/swagger-ui");
    axum::serve(listener, app).await?;

    Ok(())
}