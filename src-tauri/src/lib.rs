use reqwest::get;
use reqwest::Error;
use serde_json::{json, Value};
use std::env;
use dotenv::dotenv;
use reqwest::header::{HeaderMap, HeaderValue};

pub async fn get_curr_details(query: String) -> Value  {
    dotenv().ok();
    let api_key = env::var("TOMORROW_API").unwrap();

    // let mut headers = HeaderMap::new();
    // headers.insert("location", HeaderValue::from_static(format!("{}", query)));


    // let res =  get(format!("https://api.openweathermap.org/data/2.5/weather?q={}&APPID={}&unit=imperial", query, api_key)).await.unwrap();
    let res = get(format!("https://api.tomorrow.io/v4/weather/forecast?apikey={}&location={}&units=metric", api_key, query)).await.unwrap();
    let data: Value = res.json().await.unwrap();
    let json: Value = json!({
        "time": data["timelines"]["minutely"][0]["time"],
        "humidity": data["timelines"]["minutely"][0]["values"]["humidity"],
        "precipitationProbability": data["timelines"]["minutely"][0]["values"]["precipitationProbability"],
        "rainIntensity": data["timelines"]["minutely"][0]["values"]["rainIntensity"],
        "temperature": data["timelines"]["minutely"][0]["values"]["temperature"],
        "temperatureApparent": data["timelines"]["minutely"][0]["values"]["temperatureApparent"],
        "uvIndex": data["timelines"]["minutely"][0]["values"]["uvIndex"],
        "visibility": data["timelines"]["minutely"][0]["values"]["visibility"],
        "windDirection": data["timelines"]["minutely"][0]["values"]["windDirection"],
        "windGust": data["timelines"]["minutely"][0]["values"]["windGust"],
        "windSpeed": data["timelines"]["minutely"][0]["values"]["windSpeed"]
    });
    return json
}

pub async fn get_forecast(location: String) -> Value {
    dotenv().ok();
    let api_key = env::var("TOMORROW_API_2ND").unwrap();

    let res = get(format!("https://api.tomorrow.io/v4/timelines?apikey={}&location={}&fields=temperature&units=metric&timesteps=1h&startTime=now&endTime=nowPlus12h&timezone=Asia/Kolkata", api_key, location)).await.unwrap();
    let data: Value = res.json().await.unwrap();
    let json: Value = json!({
        "startTime": data["data"]["timelines"][0]["endTime"],
        "endTime": data["data"]["timelines"][0]["endTime"],
        "intervals": data["data"]["timelines"][0]["intervals"]
    });
    return json
}