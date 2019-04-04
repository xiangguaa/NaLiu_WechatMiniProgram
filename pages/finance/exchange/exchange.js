// pages/finance/exchange/exchange.js
let apis=require('../../../libs/apis.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exchange:[]

  },

  getExchangeinfo(){
    let that=this;
    wx.request({
      url:"https://op.juhe.cn/onebox/exchange/query?key=877fd1ee0114c69cbbd08ffa05eb4809",
      success(res){
        if(res.data.error_code===0){
          that.setData({
            exchange:res.data.result
          });
          console.log(that.data.exchange);
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    apis.setNavBar(500,"汇率信息");
    this.getExchangeinfo();

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