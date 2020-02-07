// 通用模板，用于每个页面的动态加载显示

let setNavBar = (time,title) =>{
    let that=this;
    wx.setNavigationBarTitle({
      title:title
    });
    wx.showNavigationBarLoading({
      success(e){
      }
    });
    for(var t = Date.now();Date.now() - t <= time;);
    wx.hideNavigationBarLoading({
      success(e){
      }
    })
  }

module.exports={
    setNavBar
   }