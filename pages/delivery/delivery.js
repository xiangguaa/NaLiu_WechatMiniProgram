// pages/delivery/delivery.js
let apis=require('../../libs/apis.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    del_num:null,
    detail:[],
    i_value:'',
    isshow_detail:true
    

  },

  get_input(e){
    let that=this;
    that.setData({
      del_num:e.detail.value
    });
    // console.log('delnum='+that.data.del_num);
    wx.request({
      url:'https://api.apiopen.top/EmailSearch?number='+e.detail.value,
      success(res){
        console.log(res);
        that.setData({
          detail:res.data.result.data
        });
        
      }
    })
  },
  // 删除之前所有的输入内容
  get_cancel(e){
    console.log(e)
    let that=this;
    that.setData({i_value:'',isshow_detail:false});
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    apis.setNavBar(200,"快递信息");

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