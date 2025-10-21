/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */
function getWeather(cityCode){
  myAxios({
    url:'https://hmajax.itheima.net/api/weather',
    params:{
      city: cityCode
    }
  }).then(result =>{
    // console.log(result.data)
    const cityStr = result.data
    //渲染时间数据
    document.querySelector('.title').innerHTML = `
      <span class="dateShort">${cityStr.dateShort}</span>
      <span class="calendar">农历&nbsp;
        <span class="dateLunar">${cityStr.dateLunar}</span>
      </span>
    `
    //渲染城市数据
    document.querySelector('.area').innerHTML = cityStr.area
    //渲染当天天气数据
    document.querySelector('.weather-box').innerHTML = `
      <div class="tem-box">
        <span class="temp">
          <span class="temperature">${cityStr.temperature}</span>
          <span>°</span>
        </span>
      </div>
      <div class="climate-box">
        <div class="air">
          <span class="psPm25">${cityStr.psPm25}</span>
          <span class="psPm25Level">${cityStr.psPm25Level}</span>
        </div>
        <ul class="weather-list">
          <li>
            <img src=${cityStr.weatherImg} class="weatherImg" alt="">
            <span class="weather">${cityStr.weather}</span>
          </li>
          <li class="windDirection">${cityStr.windDirection}</li>
          <li class="windPower">${cityStr.windPower}</li>
        </ul>
      </div>
    `
    const todayWeather = cityStr.todayWeather
    document.querySelector('.today-weather').innerHTML = `
      <div class="range-box">
        <span>今天：</span>
        <span class="range">
          <span class="weather">${todayWeather.weather}</span>
          <span class="temNight">${todayWeather.temNight}</span>
          <span>-</span>
          <span class="temDay">${todayWeather.temDay}</span>
          <span>℃</span>
        </span>
      </div>
      <ul class="sun-list">
        <li>
          <span>紫外线</span>
          <span class="ultraviolet">${todayWeather.ultraviolet}</span>
        </li>
        <li>
          <span>湿度</span>
          <span class="humidity">${todayWeather.humidity}</span>%
        </li>
        <li>
          <span>日出</span>
          <span class="sunriseTime">${todayWeather.sunriseTime}</span>
        </li>
        <li>
          <span>日落</span>
          <span class="sunsetTime">${todayWeather.sunsetTime}</span>
        </li>
      </ul>
    `
    //渲染未来七天天气简报
    document.querySelector('.week-wrap').innerHTML = cityStr.dayForecast.map(day =>{
      return `
        <li class="item">
          <div class="date-box">
            <span class="dateFormat">${day.dateFormat}</span>
            <span class="date">${day.date}</span>
          </div>
          <img src=${day.weatherImg} alt="" class="weatherImg">
          <span class="weather">${day.weather}</span>
          <div class="temp">
            <span class="temNight">${day.temNight}</span>-
            <span class="temDay">${day.temDay}</span>
            <span>℃</span>
          </div>
          <div class="wind">
            <span class="windDirection">${day.windDirection}</span>
            <span class="windPower">${day.windPower}</span>
          </div>
        </li>
      `
    })
  })
}
//刷新就渲染
localStorage.getItem('cityCode') ? getWeather(localStorage.getItem('cityCode')) : getWeather('110100')
//渲染搜索列表
document.querySelector('.search-city').addEventListener('input',(e)=> {
  // console.log(e.target.value)
  myAxios({
    url:'https://hmajax.itheima.net/api/weather/city',
    params:{
      city: e.target.value
    }
  }).then(result =>{
    console.log(result.data)
    document.querySelector('.search-list').innerHTML = result.data.map(city=>{
      return `
        <li class="city-item" data-code=${city.code}>${city.name}</li>
      `
    }).join('')
  })
})

//点击搜索列表数据，获取对应城市天气数据，并渲染
document.querySelector('.search-list').addEventListener('click',(e)=>{
  if(e.target.classList.contains('city-item')){
    const cityCode = e.target.dataset.code
    getWeather(cityCode)
    //本地存储
    localStorage.setItem('cityCode',cityCode)
  }
})