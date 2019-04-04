App({
  globalData: {
    fund:[],
    random_int:[],
    fund_ramdom:[],
    fund_random_copy:[]
  },
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
  
  getFundinfo(){
    let that=this;
    wx.request({
      url:"https://api.shenjian.io/?appid=3019f2bed4bdc39da07345996c4e163b",
      success(res){
        console.log(res);
        if(res.data.error_code===0){
       
          that.globalData.fund=res.data.data
          
          // console.log(that.globalData.fund);
          for(let i=1;i<+1000;i++){
            if(that.globalData.random_int.indexOf(i)!=-1){
              that.globalData.fund_ramdom.push(that.globalData.fund[i]);
            }
          }
       
          that.globalData.fund_random_copy=that.globalData.fund_ramdom
       
          console.log(that.globalData.fund_random_copy);
          console.log(that.globalData.fund);
        }
      }
    });
    for(let x=0;x<=19;x++){
      that.globalData.random_int.push(that.getRandomInt(1500));
    }
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    this.getFundinfo();
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
