use axum::http::StatusCode;
use std::fmt::{Display, Formatter};

#[derive(Debug)]
pub enum ServiceError {
    DatabaseError(String),
    NotFound(String),
    Unauthorized(String),
    ValidationError(String),
    InternalError(String),
}

pub fn status_code_from_error(error: &ServiceError) -> StatusCode {
    match error {
        ServiceError::DatabaseError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        ServiceError::NotFound(_) => StatusCode::NOT_FOUND,
        ServiceError::Unauthorized(_) => StatusCode::UNAUTHORIZED,
        ServiceError::ValidationError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        ServiceError::InternalError(_) => StatusCode::INTERNAL_SERVER_ERROR,
    }
}

impl Display for ServiceError {
    fn fmt(&self, f: &mut Formatter<'_>) -> core::fmt::Result {
        match self {
            ServiceError::DatabaseError(msg) => write!(f, "Database error: {}", msg),
            ServiceError::NotFound(msg) => write!(f, "Not found: {}", msg),
            ServiceError::Unauthorized(msg) => write!(f, "Unauthorized: {}", msg),
            ServiceError::ValidationError(msg) => write!(f, "Validation error: {}", msg),
            ServiceError::InternalError(msg) => write!(f, "Internal error: {}", msg),
        }
    }
}
