// weather.js
var defaultcity,getweather,gettemp,getwind,getpic,city,weather,temp,wind
var baseurl ='https://api.map.baidu.com/telematics/v3/weather?output=json&ak=CpD4bq1t368LKg4lEObvlKihzyyraDfH&location='
Page({
  data: {
  },
  //默认载入
  onLoad:function(e){
    var that=this;
    defaultcity = '广州'
    wx.request({
      url: baseurl+defaultcity,
      success:(res)=>{
        getweather = res.data.results[0].weather_data[0].weather
        gettemp = res.data.results[0].weather_data[0].temperature
        getwind = res.data.results[0].weather_data[0].wind
        getpic = res.data.results[0].weather_data[0].dayPictureUrl
        this.setData({
          city:defaultcity,
          weather:getweather,
          temp:gettemp,
          wind:getwind,
          pic:getpic
        })
      }
    })
  },
  //获取输入
  bindKeyInput:function(e){
    defaultcity=e.detail.value
  },
  //搜索城市
  search:function(e){
    var that = this;
    wx.request({
      url: baseurl + defaultcity,
      success: (res) => {
        getweather = res.data.results[0].weather_data[0].weather
        gettemp = res.data.results[0].weather_data[0].temperature
        getwind = res.data.results[0].weather_data[0].wind
        getpic = res.data.results[0].weather_data[0].dayPictureUrl
        this.setData({
          city: defaultcity,
          weather: getweather,
          temp: gettemp,
          wind: getwind,
          pic: getpic
        })
      }
    })
  }

})