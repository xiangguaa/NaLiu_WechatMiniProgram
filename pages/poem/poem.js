// pages/poem/poem.js
let apis=require('../../libs/apis.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    p_title:null,
    p_author:null,
    p_content:[],
    p_content_real:[]

  },


  setFormat(){
    let that=this;  
    console.log(that.data.p_content.length);
    var tmp=that.data.p_content;
    var ke = tmp.replace(/。,/g, '。\n').replace(/！,/g, '。\n').replace(/？,/g, '。\n').replace(/。/g,'。\n')
    // .replace(/。/g, '。\n').replace(/？/g, '。\n').replace(/！/g, '。\n');
        console.log(ke);
    that.setData({
      p_content_real:ke
    });
    // console.log(that.data.p_content_real+'nsjfal');
      
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      p_title:options.title,
      p_author:options.author,
      p_content:options.content

    });
    this.setFormat();

 


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    apis.setNavBar(400,"诗词");

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