// pages/weather/weather.js
let apis=require('../../libs/apis.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather:[],
    city:"tianjin",
    pic_set:[],
    weather_realtime:[]
  },


  getLocal(){
    var that=this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/?ak=MwDt97aamZwo0GOef5FPTMOGkWH0REPp&location=' + res.latitude + ',' + res.longitude + '&output=json&pois=1',
          success(ras) {
            if (ras.data.status === 0) {
              that.setData({
                city: ras.data.result.addressComponent.city
              });
              wx.request({
                url: "https://apis.juhe.cn/simpleWeather/query?city=" + that.data.city.substr(0, 2)+"&key=51f9f81c3d3bd86d844a32455908e93b",
                success(res) {
    
                  if (res.data.error_code === 0) {               
                    that.setData({
                      weather: res.data.result.future
                    });
                    // 将获取到的中文天气信息赋予对应的字母代码，便于不同的天气图片显示
                    for(let i=0;i<that.data.weather.length;i++){
                      let tmp=String(that.data.weather[i].weather);
                      let rel=tmp.replace(/多云/g,'a').replace(/晴/g,'b').replace(/小雨/g,'c').replace(/阵雨/g,'d').replace(/阴/g,'e');
                      that.data.weather[i]['wea_copy']=rel;
                    }
                    that.setData({
                      weather_realtime:that.data.weather
                    });
                    console.log(that.data.weather_realtime);

                  }
                }
              });              
            }
          }
        });

      }
    });
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    apis.setNavBar(500,"天气预测");
    
    
    
    this.getLocal();
    // this.strPr();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})