// pages/recipe/recipe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipe:[],    // 查询到的食谱列表
    isshow:[],    // 控制是否展开显示某一食谱的详细信息
    isshow_arrow:true,    // 控制菜谱详细信息的展开和闭合按钮显示切换
    isshow_suggest:true,    // 是否显示建议，当用户查询成功后，隐藏建议，显示菜谱列表
    isshow_detail:false,    // 控制是否显示查询到的食谱列表
    isshow_intro:true,    // 控制是否显示健康建议信息
    i_value:'',   // 用于用户输入数据清空
    suggest:['1、不吸烟：吸烟会使寿命平均减少10年。根据医学调查显示，有30%的人是因患与吸烟有关的疾病而致命。','2、少喝酒：对某些人来说，酒有着危险。酒对食道与胃部有不好的影响，还会妨碍钙质和维他命的吸收。','3、控脂肪：每天脂肪摄入量不得超过总热量的30%，高脂肪饮食可导致肥胖症、心脏病和高血脂症。','4、多果菜：维生素A、维生素C和维生素E有保护身体健康的作用，每天至少应食用400克水果和蔬菜。']

  },

  getRecipe(e){
    var that=this;
    that.setData({isshow:[],isshow_suggest:false,isshow_detail:true})
    wx.request({
      url:"https://way.jd.com/jisuapi/search?keyword="+e.detail.value+"&num=7&appkey=de0c34ea873c2f03503696703f9be906",
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
  // 用户取消之前所有输入
  get_cancel(e){
    let that=this;
    that.setData({i_value:'',isshow_detail:false,isshow_suggest:true});
  },


  // 用户展开查询列表中的某一菜谱，同一时刻只能展开一个菜谱，其他的会自动关闭
  // 若查询到数目为n个菜谱，则通过一个n长数组控制整个列表显示
  getSpread(e){
    let that=this;
    var showorhide=[];
    
    for(var i=0;i<=that.data.recipe.length;i++){
      if(e.currentTarget.id==i) {showorhide.push(1);}
      else {showorhide.push(0);}
    }
    
    that.setData({isshow:showorhide,isshow_intro:false});
    console.log("isshow:"+that.data.isshow);

  },

  // 用户关闭展开的菜谱
  getClose(e){
    let that=this;
    var showorhide=[];
    showorhide=that.data.isshow;
    for(var i=0;i<=that.data.recipe.length;i++){
      if(e.currentTarget.id==i) {showorhide[i]=0}
      else {;}
    }
    that.setData({isshow:showorhide,isshow_intro:true});
    console.log("isclose:"+that.data.isshow);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.suggest)

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