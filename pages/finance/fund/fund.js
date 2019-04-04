// pages/finance/fund/fund.js
let apis=require('../../../libs/apis.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showorhide:true,
    code:null,
    input_value:"",
    fund_search:[], 
    fund_random_new:null,
    fund_new:[]
  },


  getClear(e){
    let that=this;
  
    that.setData({  
      code:null,
      fund_search:[],
      showorhide:true,
      input_value:""
    });
  },

  getCode:function(e){
    let that=this;
    that.setData({
      code:e.detail.value
    });
    console.log('code = '+that.data.code);
    if(that.data.code!==null){
      that.setData({
        showorhide:false
      });
    }

    for(let x=1;x<=3600;x++){
      if(e.detail.value==that.data.fund_new[x].code){
        that.setData({
          fund_search:that.data.fund_new[x]
        });
        break;
      }
    }

    
  },

  



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    apis.setNavBar(200,"基金信息");
    var tmp01=app.globalData.fund_random_copy;
    var tmp02=app.globalData.fund;
    this.setData({
      fund_random_new:tmp01,
      fund_new:tmp02
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