// pages/history/history.js
let apis=require('../../libs/apis.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year:null,
    month:null,
    day:null,
    detail:[]

  },



  /**
   * 获取当前日期
   *  */
  getDate(){  
    let that=this;
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y =date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); 
    
    that.setData({
      year:Y,
      month:M,
      day:D
    });
    console.log("当前时间：" + that.data.year + '年'  + that.data.month+ '月' + that.data.day+ '日' );
  },  

  getEvent(){
    let that=this;
    console.log(parseInt(that.data.month));
    console.log(that.data.day);
    wx.request({
      url:'https://api.shenjian.io/todayOnhistory/queryEvent/?appid=27a9675522585d5cf472387771245e66&date='+parseInt(that.data.month)+'%2F'+parseInt(that.data.day),
      success(res){
        // console.log(res);
        that.setData({
          detail:res.data.data
        });
        console.log(that.data.detail);
      }
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    apis.setNavBar(400,"历史上的今天");
    this.getDate();
    this.getEvent();

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