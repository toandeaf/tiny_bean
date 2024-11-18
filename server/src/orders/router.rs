use crate::orders::controller::OrderControllerImpl;
use crate::orders::{OrderController, OrderRouter};
use axum::routing::post;
use axum::Router;

pub struct OrderRouterImpl;

impl OrderRouter for OrderRouterImpl {
    type OrderController = OrderControllerImpl;

    fn get_order_router() -> Router {
        Router::new().route("/", post(Self::OrderController::create_order))
    }
}
