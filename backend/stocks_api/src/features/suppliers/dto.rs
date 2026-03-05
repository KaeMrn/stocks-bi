use serde::{Deserialize, Serialize};
use validator::Validate;
use utoipa::ToSchema;

#[derive(Serialize, Deserialize, ToSchema)]
pub struct SupplierResponse {
    pub id: i32,
    pub name_sup: String,
    pub email_sup: String,
    pub phone_sup: String,
    pub address_sup: String,
    pub created_at: Option<chrono::NaiveDateTime>,
    pub updated_at: Option<chrono::NaiveDateTime>,
}

#[derive(Deserialize, Validate, ToSchema)]
pub struct CreateSupplierRequest {
    #[validate(length(min = 1, max = 255))]
    pub name_sup: String,
    #[validate(email)]
    pub email_sup: String,
    #[validate(length(min = 1, max = 20))]
    pub phone_sup: String,
    #[validate(length(min = 1, max = 500))]
    pub address_sup: String,
}

#[derive(Deserialize, Validate, ToSchema)]
pub struct UpdateSupplierRequest {
    #[validate(length(min = 1, max = 255))]
    pub name_sup: Option<String>,
    #[validate(email)]
    pub email_sup: Option<String>,
    #[validate(length(min = 1, max = 20))]
    pub phone_sup: Option<String>,
    #[validate(length(min = 1, max = 500))]
    pub address_sup: Option<String>,
}
