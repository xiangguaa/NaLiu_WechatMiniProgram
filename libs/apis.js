

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