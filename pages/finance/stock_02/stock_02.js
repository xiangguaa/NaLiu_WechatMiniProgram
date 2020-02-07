// pages/finance/fund/fund.js
let apis=require('../../../libs/apis.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showorhide:true,    // 控制显示随机股票列表或用户查询股票
    code:null,    // 用户输入股票代码
    input_value:"",   // 用户输入代码
    fund_search:[],     //  用户查询的股票信息
    fund_random_new:null,   // 上级页面随机推送的股票
    fund_new:[],    // 从上级页面获取的预先接收到的全部股票列表
    isshow:true,    // 控制是否显示股票信息未完成加载信息
    messgn:''   // 数据未加载成功时的提示信息
  },

  // 一键删除之前的所有输入
  getClear(e){
    let that=this;
    that.setData({  
      code:null,
      fund_search:[],
      showorhide:true,
      input_value:""
    });
  },

  // 获取并查询用户输入股票代码
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

    // 遍历查询用户输入的股票代码
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
    apis.setNavBar(200,"股票实时");
    var tmp01=app.globalData.fund_random_copy;
    var tmp02=app.globalData.fund;
    this.setData({
      fund_random_new:tmp01,
      fund_new:tmp02
    });
    if(this.data.fund_random_new.length!=0){
      this.setData({isshow:true,messgn:''});
    }
    else{
      this.setData({isshow:false,messgn:'未完成数据加载，请退出当前页面，等待5-10秒后，尝试重新打开。'});
    }
    console.log(this.data.isshow)
    
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