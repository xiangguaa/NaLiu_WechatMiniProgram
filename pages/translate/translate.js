// pages/translate/translate.js
let apis=require('../../libs/apis.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s_words:null,
    d_words:""
  },

  getInput:function(e){
    let that=this;
    that.setData({
      s_words:e.detail.value
    });
    console.log('Input:'+that.data.s_words)
  },

  startTrans:function(e){
    let that=this;
    console.log(e);
    console.log(that.data.s_words);

    if(that.data.s_words!=null){
      wx.request({
        url:"https://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i="+that.data.s_words,
        success(res){
          // console.log(res.data.translateResult[0][0].tgt);
          if(res.data.errorCode===0){
            that.setData({d_words:res.data.translateResult[0][0].tgt});
            console.log(that.data.d_words);
          }
        }
      });
    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    apis.setNavBar(400,"翻译");

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