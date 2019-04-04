// pages/recipe/recipe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipe:[],
    isshow:[],
    isshow_arrow:true,
    // test:[0,22,334,2,1,2,0]

  },

  getRecipe(e){
    var that=this;
    wx.request({
      url:"https://way.jd.com/jisuapi/search?keyword="+e.detail.value+"&num=5&appkey=de0c34ea873c2f03503696703f9be906",
      success(res){
        // console.log(res);
        if(res.data.code==='10000'){
          for(var i = 0;i<res.data.result.result.list.length;i++){
            res.data.result.result.list[i].content=res.data.result.result.list[i].content.replace(/<br \/>/g,' ');
            for(var j=0;j<res.data.result.result.list[i].process.length;j++){
              res.data.result.result.list[i].process[j].pcontent=res.data.result.result.list[i].process[j].pcontent.replace(/<br \/>/g,' ');
            }
          }
          that.setData({
            recipe:res.data.result.result.list
          });
          console.log(that.data.recipe)
        }
      }
    })

  },


  getSpread(e){
    let that=this;
    var showorhide=[];
    // console.log(e);
    // console.log(e.currentTarget.id);
 
    for(var i=0;i<=that.data.recipe.length;i++){
      if(e.currentTarget.id==i) {showorhide.push(1);}
      else {showorhide.push(0);}
    }
    
    that.setData({isshow:showorhide});
    console.log("isshow:"+that.data.isshow);

  },



  getClose(e){
    let that=this;
    var showorhide=[];
    showorhide=that.data.isshow;
 
    
    for(var i=0;i<=that.data.recipe.length;i++){
      if(e.currentTarget.id==i) {showorhide[i]=0}
      else {;}
    }
    that.setData({isshow:showorhide});
    console.log("isclose:"+that.data.isshow);
    



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