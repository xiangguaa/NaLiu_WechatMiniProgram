// pages/news/detail/detail.js
let apis=require('../../../libs/apis.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[],
    haha:[]

  },

  getDetail(tid){
    let that=this;
    that.setData({
      haha:tid
    });
    // console.log(that.data.haha.id);
    
    // wx.request({
    //   url:"http://mini.eastday.com/mobile/190324101222216.html",
    //   success(res){
    //     // console.log(tid);
    //     console.log(res);
    //     if(res.data.error_code===0){
    //       that.setData({
    //         detail:res.data.result[0]
    //       });
    //       console.log(that.data.detail);
          

    //     }
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    apis.setNavBar(400,"详情");
    let tid=options;
    this.getDetail(tid);

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