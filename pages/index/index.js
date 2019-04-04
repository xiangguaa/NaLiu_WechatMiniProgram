const jinrishici = require('../../utils/jinrishici.js')
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    onePoem:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    jinrishici.load(result => {
      // 下面是处理逻辑示例
      console.log(result)
      this.setData({onePoem: result});
      console.log(this.data.onePoem.data.content);
    });
    
    
    
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

    jinrishici.load(result => {
      console.log(result)
      this.setData({onePoem: result});
      console.log(this.data.onePoem.data.content);
    });
    console.log("更新诗词");
    for(var t = Date.now();Date.now() - t <= 300;);
    wx.stopPullDownRefresh();
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