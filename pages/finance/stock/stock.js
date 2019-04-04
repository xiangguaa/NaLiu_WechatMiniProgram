// pages/finance/stock/stock.js
let apis=require('../../../libs/apis.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {name: '深沪', value: 'sh', checked: 'true'},
      {name: '香港', value: 'hk'},
      {name: '美国', value: 'usa'}
      ],
    check:'b',
    stock:[],
    ischeck:'a',


  },



  choseStock(e){
    let that=this;
    // console.log(e);
    // console.log(e.detail.value)
    console.log('check: '+that.data.check);
    console.log('value: '+e.detail.value);
    if(that.data.check!=e.detail.value){
      that.setData({
        ischeck:false
      });
    }
    else{
      that.setData({
        ischeck:true
      });
    }
    console.log('ischeck: '+that.data.ischeck);
    
    that.setData({
      check:e.detail.value,
    });
    // console.log(that.data.check);
    console.log('\n');
  },

  getStockcode(e){
    console.log(e.detail.value);
    let that=this;
    if(that.data.check=="sh"){
      wx.request({
        url:"https://web.juhe.cn:8080/finance/stock/hs?gid="+e.detail.value+"&key=a86ce29a1e13577c771149836086cacb",
        success(res){
          console.log(res);
          that.setData({
            stock:res.data.result[0]
          });
          console.log(that.data.stock)
        }
      })
    }
    else if(that.data.check=="hk"){
      wx.request({
        url:"https://web.juhe.cn:8080/finance/stock/hk?num="+e.detail.value+"&key=a86ce29a1e13577c771149836086cacb",
        success(res){
          console.log(res);
          that.setData({
            stock:res.data.result[0]
          });
          console.log(that.data.stock);
        }
      })
    }
    else if(that.data.check=="usa"){
      wx.request({
        url:"https://web.juhe.cn:8080/finance/stock/usa?gid="+e.detail.value+"&key=a86ce29a1e13577c771149836086cacb",
        success(res){
          console.log(res.data);
          that.setData({
            stock:res.data.result[0]
          });
          console.log(that.data.stock);
        }
      })
    }


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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