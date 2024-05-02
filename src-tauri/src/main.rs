// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde_json::Value;
use atmosphere::{get_curr_details, get_forecast};


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![fetch_curr_details, fetch_hourly_forecast])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
async fn fetch_curr_details(location: String) -> Value {
    return get_curr_details(location.to_string()).await;
}

#[tauri::command]
async fn fetch_hourly_forecast(location: String) -> Value   {
    return get_forecast(location.to_string()).await;
}



// TEST ONLY
// #[tokio::main]
// async fn main() {
//     println!("{}", get_forecast("ranaghat".to_string()).await)
// }