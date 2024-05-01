use reqwest::get;

pub async fn get_data(query: String)   {
    let api_key = "7ea3eb6e80840b421b1d17ca7919f6d3";
    let res =  get(format!("https://api.openweathermap.org/data/2.5/weather?q={}&APPID={}", query, api_key)).await.unwrap();
    println!("{:?}", res);

}