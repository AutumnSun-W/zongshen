(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22f29a2d"],{b289:function(t,a,s){"use strict";var n=s("e8d4"),i=s.n(n);i.a},c84b:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("header",[n("van-row",{attrs:{justify:"center"}},[n("van-col",{attrs:{span:"4"}},[n("img",{staticClass:"logo",attrs:{src:s("cf05"),alt:"宗申"}})]),n("van-col",{attrs:{span:"16"}},[n("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":"","left-icon":"",background:"#fafafa"},on:{search:t.onSearch},model:{value:t.val,callback:function(a){t.val=a},expression:"val"}},[n("div",{staticClass:"top-search",attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[n("van-icon",{staticClass:"top-search-icon",attrs:{name:"search"}})],1)])],1),n("van-col",{attrs:{span:"4"}},[n("van-icon",{staticClass:"search-cart",attrs:{name:"http://shop.zongshenmotor.com/views/new_zs/javascript/mobile/images/cart_icocc.png",size:"35px"},on:{click:t.tocart}})],1)],1)],1),n("nav",[n("van-tabs",{attrs:{background:"#f5f5f5"},on:{click:t.onClick},model:{value:t.active_nav,callback:function(a){t.active_nav=a},expression:"active_nav"}},[n("van-tab",{attrs:{title:"首页",name:"/home"}}),n("van-tab",{attrs:{title:"宗申摩托车",name:"/listfile/宗申摩托车"}}),n("van-tab",{attrs:{title:"赛科龙摩托",name:"/listfile/赛科龙摩托"}}),n("van-tab",{attrs:{title:"文化用品",name:"/listfile/文化用品"}}),n("van-tab",{attrs:{title:"配件直营",name:"/listfile/配件直营"}}),n("van-tab",{attrs:{title:"改装配件",name:"/listfile/改装配件"}}),n("van-tab",{attrs:{title:"宗申原厂机油",name:"/listfile/宗申原厂机油"}}),n("van-tab",{attrs:{title:"淘宝店铺(配件)",name:"/home"}}),n("van-tab",{attrs:{title:"天猫店铺",name:"/home"}}),n("van-tab",{attrs:{title:"京东店铺",name:"/home"}})],1)],1),n("van-swipe",{staticStyle:{height:"278px"},attrs:{autoplay:3e3,"indicator-color":"red"}},t._l(t.pro.pimgl,function(t,a){return n("van-swipe-item",{key:a},[n("img",{attrs:{src:t.pimg,alt:""}})])}),1),n("div",{staticClass:"detail_price"},[n("div",{staticClass:"price"},[t._v("\n      销售价:\n      "),n("span",{attrs:{id:"ture_price"}},[t._v("￥"+t._s(t.pro.pprice))])]),n("div",{staticClass:"price"},[t._v("\n      预付订金:\n      "),n("span",[t._v("￥"+t._s(t.pro.pprice/8))])])]),n("van-row",[n("van-col",{staticClass:"pdesc",attrs:{span:"14",offset:"1"}},[n("p",[t._v(t._s(t.pro.pname))])]),n("van-col",{staticClass:"pdesc",attrs:{span:"6",offset:"2"}},[n("van-stepper",{model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)],1),n("van-row",[n("van-col",{staticClass:"pdesc1",attrs:{span:"14",offset:"1"}},[n("p",[t._v("品牌: "+t._s(t.pro.pclass3))])])],1),n("van-row",[n("van-col",{staticClass:"pdesc1",attrs:{span:"14",offset:"1"}},[n("p",[t._v("库存: 现货 ("+t._s(t.pro.pnum)+")")])])],1),n("div",{staticClass:"gray"},[n("div",[t._v("\n      关注度：已有\n      "),n("span",{staticClass:"color_red"},[t._v(t._s(t.pro.pfollow))]),t._v("关注\n    ")]),n("div",[t._v("\n      收藏人气：已有\n      "),n("span",{staticClass:"color_red"},[t._v(t._s(t.pro.Popularity))]),t._v("人收藏\n    ")])]),n("div",{staticClass:"rate"},[t._v("\n    顾客评分：(已有\n    "),n("span",{staticClass:"color_red"},[t._v(t._s(t.pro.pbbs.length))]),t._v("人评价)\n  ")]),n("div",{staticClass:"choice"},[n("van-row",{staticClass:"flex"},[n("van-col",{staticClass:"choice_title",attrs:{span:"4"}},[t._v("WEEK8:")]),n("van-col",{attrs:{offset:"2"}},[n("ul",{staticClass:"guige"},[n("li",{class:{on:t.isActive},on:{click:function(a){return t.toggle(a)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.pro.pdesc))]),n("span",{class:"duigou"})])])])],1),n("van-row",{staticClass:"flex"},[n("van-col",{staticClass:"choice_title",attrs:{span:"4"}},[t._v("WEEK8FI颜色:")]),n("van-col",{attrs:{offset:"2"}},[n("ul",{staticClass:"guige"},t._l(t.pro.pother,function(a,s){return n("li",{key:s,class:{on:s==t.xiangqingSpan},attrs:{value:a.other},on:{click:function(a){return t.xiangqing(s)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v(t._s(a.other))]),n("span",{class:{duigou:s==t.xiangqingSpan}})])}),0)])],1)],1),n("div",{staticStyle:{display:"none"}},[n("vshare",{attrs:{vshareConfig:t.vshareConfig}})],1),n("div",{staticClass:"choiced"},[t._v("\n    已选择：\n    "),n("span",{class:{block:t.isActive}},[t._v("“"+t._s(t.pro.pdesc)+"”")]),t._l(t.pro.pother,function(a,s){return n("span",{key:s,class:{block:s==t.xiangqingSpan}},[t._v("“"+t._s(a.other)+"”")])})],2),n("nav",{staticClass:"footer1"},[n("van-tabs",{attrs:{background:"#fff"}},[n("van-tab",{attrs:{title:"商品详情"}},[n("van-panel",{attrs:{title:"商品详情"}},t._l(t.pro.pimgd,function(t,a){return n("div",{key:a},[n("img",{attrs:{src:t.pimg,alt:""}})])}),0)],1),n("van-tab",{attrs:{title:"规格参数"}},[n("van-panel",{attrs:{title:"规格参数"}},[n("div",[t._v("内容")])])],1),n("van-tab",{attrs:{title:"购买记录"}},[n("van-panel",{attrs:{title:"购买记录"}},[n("div",[t._v("内容")])])],1),n("van-tab",{attrs:{title:"售后服务"}},[n("van-panel",{attrs:{title:"售后服务"}},[n("div",[t._v("内容")])])],1),n("van-tab",{attrs:{title:"顾客评价"}},[n("van-panel",{attrs:{title:"顾客评价"}},[n("div",[t._v("内容")])])],1),n("van-tab",{attrs:{title:"购买前咨询"}},[n("van-panel",{attrs:{title:"购买前咨询"}},[n("div",[t._v("内容")])])],1)],1)],1),n("div",{staticClass:"footer"},[n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"like",text:"收藏"},on:{click:t.addlove}}),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addcart}}),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.buy}})],1)],1)],1)},i=[],e=s("c24f"),o=s("2241"),r={name:"Detail",data:function(){return{active_nav:0,value1:"",value:1,val:"",pro:{},checkedArr:[],isActive:!0,xiangqingSpan:"-1",id:this.$route.query.id,vshareConfig:{shareList:["more","qzone","tsina","tqq","renren","weixin"],common:{},share:[{}],slide:[],selectShare:[]}}},mounted:function(){var t=this,a={pid:this.$route.query.id};e["a"].postDetail(a).then(function(a){t.pro=a.data[0]})},methods:{onClick:function(t,a){this.$router.push(t)},onSearch:function(){this.$router.push("/listfile/".concat(this.value))},addlove:function(){this.$store.state.token?this.$router.push("/individual"):this.$router.push("/login")},addcart:function(){if(this.$store.state.token)if(this.isActive&&"-1"!==this.xiangqingSpan){var t={username:this.$store.state.username,pid:this.$route.query.id,num:this.value,pname:this.pro.pname,pimg:this.pro.pimg,pprice:this.pro.pprice,pdesc:this.pro.pdesc};e["a"].postAddCart(t).then(function(t){o["a"].alert({message:"加入购物车成功"})})}else o["a"].alert({title:"错误",message:"请先选择商品的规格"}).then(function(){});else this.$router.push("/login")},buy:function(){this.$store.state.token?this.isActive&&"-1"!==this.xiangqingSpan?this.$router.push("/payment?id="+this.$route.query.id):o["a"].alert({title:"错误",message:"请先选择商品的规格"}).then(function(){}):this.$router.push("/login")},intocart:function(){},xiangqing:function(t){this.xiangqingSpan==t?this.xiangqingSpan="-1":this.xiangqingSpan=t},toggle:function(t){this.isActive=!this.isActive},tocart:function(){this.$router.push("/cart")}}},c=r,l=(s("b289"),s("2877")),v=Object(l["a"])(c,n,i,!1,null,"41e91504",null);a["default"]=v.exports},cf05:function(t,a,s){t.exports=s.p+"img/logo.3b831849.png"},e8d4:function(t,a,s){}}]);
//# sourceMappingURL=chunk-22f29a2d.56c0eaf5.js.map