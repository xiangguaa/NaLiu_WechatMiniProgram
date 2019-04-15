// pages/finance/gold/gold.js
let apis=require('../../../libs/apis.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dapan:[]

  },


  getGoldinfo(){
    let that=this;
    wx.request({
      url:"https://api.shenjian.io/?appid=ad11185681ad3dfdd18b13269c92f219",
      success(res){
        console.log(res);
        
        if(res.data.error_code===0){
          that.setData({
            dapan:res.data.data
          });
          // console.log(that.data.dapan)
        }
        var dapan_copy = that.data.dapan;
        for (var i = 0;i < dapan_copy.length;i++){
          if(dapan_copy[i].code.length!=8){
            dapan_copy[i].code = String(dapan_copy[i].code).substring(1,9)
            // console.log(dapan_copy[i].code)
          }
        }
        that.setData({dapan:dapan_copy});
        console.log(that.data.dapan);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    apis.setNavBar(500,"大盘信息");
    this.getGoldinfo(); 

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