// pages/transport/p_trn/p_trn.js
let apis=require('../../libs/apis.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trn:[],
    bus_name:null,
    city:null,
    start:null,
    destination:null,
    s_latitude:0,
    s_longitude:0,
    d_latitude:0,
    d_longitude:0,
    route:[],
    isshowroute:true
  },

  

  get_start(e){
    let that=this;
    that.setData({
      start:e.detail.value
    });
    // console.log(that.data.start);
    wx.request({
      url:"https://api.map.baidu.com/geocoder/v2/?address="+that.data.city+""+e.detail.value+"&output=json&ak=GjIDlN80K3FHakBEn8hMyYofw4bpGXCE",
      success(res){
        if(res.data.status===0){
          that.setData({
            s_latitude:res.data.result.location.lat,
            s_longitude:res.data.result.location.lng
          })
        }
        // console.log(that.data.s_latitude);
        // console.log(that.data.s_longitude);

      }
    })
  },

  get_destination(e){
    let that=this;
    that.setData({
      destination:e.detail.value
    });
    wx.request({
      url:"https://api.map.baidu.com/geocoder/v2/?address="+that.data.city+""+e.detail.value+"&output=json&ak=GjIDlN80K3FHakBEn8hMyYofw4bpGXCE",
      success(res){
        if(res.data.status===0){
          that.setData({
            d_latitude:res.data.result.location.lat,
            d_longitude:res.data.result.location.lng
          })
        } 
      }
    });
    if(that.data.s_latitude!=0&&that.data.d_latitude!=0){
      wx.request({
        url:"https://api.map.baidu.com/direction/v2/transit?origin="+that.data.s_latitude+","+that.data.s_longitude+"&destination="+that.data.d_latitude+","+that.data.d_longitude+"&ak=GjIDlN80K3FHakBEn8hMyYofw4bpGXCE",
        success(res){
          console.log(res);
          that.setData({
            route:res.data.result.routes
          });
          console.log(that.data.route)
        }
      })
    }


  },


  get_route:function(e){
    console.log(e);
    let that=this;
    console.log(that.data.s_longitude);
    
    if(that.data.s_latitude!=0&&that.data.d_latitude!=0){
      wx.request({
        url:"https://api.map.baidu.com/direction/v2/transit?origin="+that.data.s_latitude+","+that.data.s_longitude+"&destination="+that.data.d_latitude+","+that.data.d_longitude+"&ak=GjIDlN80K3FHakBEn8hMyYofw4bpGXCE",
        success(res){
          console.log(res);
          that.setData({
            route:res.data.result.routes
          });
          console.log(that.data.route)
        }
      })
    }

  },


  get_businput:function(e){
    let that=this;
    that.setData({
      bus_name:e.detail.value,
    });
    console.log(that.data.bus_name);
    console.log(that.data.city.substr(0,2));
    if(that.data.bus_name!=null){
      wx.request({
        url: 'https://way.jd.com/jisuapi/transitLine?city='+that.data.city.substr(0,2)+'&transitno='+that.data.bus_name+'&appkey=de0c34ea873c2f03503696703f9be906',
        success(res){
          console.log(res);
          if(res.data.code==="10000"){
            that.setData({
              trn:res.data.result.result[0].list
            });
            console.log(that.data.trn);  
          }
          else{
            console.log("未查询到信息！");
            
          }
        }
      })
    }

  },

  getLocal() {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/?ak=MwDt97aamZwo0GOef5FPTMOGkWH0REPp&location=' + res.latitude + ',' + res.longitude + '&output=json&pois=1',
          success(ras) {
            if (ras.data.status === 0) {
              that.setData({
                city: ras.data.result.addressComponent.city
              }); 
            }
          }
        });
      }
    });
  },
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    apis.setNavBar(400,"交通");
    this.getLocal();



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