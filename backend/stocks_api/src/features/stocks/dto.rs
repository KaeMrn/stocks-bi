use serde::{Deserialize, Serialize};
use utoipa::{ToSchema, IntoParams};
use rust_decimal::Decimal;

#[derive(Debug, Serialize, ToSchema)]
pub struct StockResponse {
    pub id: i32,
    pub name: String,
    pub category: String,
    pub reference: String,
    pub supplier_id: i32,
    pub stock_quantity: i32,
    pub buying_price: Decimal,
    pub date_last_reassor: chrono::DateTime<chrono::Utc>,
    pub stock_status: String,
}

#[derive(Debug, Serialize, ToSchema)]
pub struct StockAlert {
    pub product: StockResponse,
    pub alert_type: String,
    pub severity: String,
    pub message: String,
}

#[derive(Debug, Serialize, ToSchema)]
pub struct StockSummary {
    pub total_products: i64,
    pub out_of_stock_count: i64,
    pub low_stock_count: i64,
    pub overstock_count: i64,
    pub total_stock_value: Decimal,
    pub categories_affected: Vec<String>,
}

#[derive(Debug, Deserialize, IntoParams)]
pub struct StockParams {
    pub limit: Option<i32>,
    pub threshold: Option<i32>,
}

#[derive(Debug, Deserialize, IntoParams)]
pub struct OverstockParams {
    pub limit: Option<i32>,
    pub multiplier: Option<f64>,
}