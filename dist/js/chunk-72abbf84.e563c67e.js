(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72abbf84"],{"11d9":function(t,a,s){t.exports=s.p+"img/3.306afd2c.jpg"},"152a":function(t,a,s){},"405a":function(t,a,s){t.exports=s.p+"img/2.bff0584e.jpg"},8554:function(t,a,s){t.exports=s.p+"img/1.c5848331.jpg"},bb51:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"home"},[i("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white",height:128}},[i("van-swipe-item",{on:{click:function(a){return t.btn()}}},[i("img",{attrs:{src:s("8554"),alt:""}})]),i("van-swipe-item",{on:{click:function(a){return t.btn1()}}},[i("img",{attrs:{src:s("405a"),alt:""}})]),i("van-swipe-item",{on:{click:function(a){return t.btn2()}}},[i("img",{attrs:{src:s("11d9"),alt:""}})])],1),t._m(0),i("div",[i("van-tabs",{attrs:{animated:"","title-active-color":"red",ellipsis:!1,swipeable:!0},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[i("van-tab",{attrs:{title:"宗申摩托"}},[i("van-grid",{attrs:{"column-num":2}},t._l(t.list,function(a,s){return i("van-grid-item",{key:s,attrs:{to:"/detail?id="+a._id}},[i("van-image",{attrs:{src:a.pimg}}),i("p",{staticClass:"pnames"},[t._v(t._s(a.pname))]),i("p",{staticClass:"pnames1"},[i("span",[i("van-icon",{attrs:{name:"like-o"}})],1),t._v(t._s(a.pfollow))]),i("p",{staticClass:"pnames2"},[t._v("￥"+t._s(a.pprice))])],1)}),1)],1),i("van-tab",{attrs:{title:"街跑系列(p)"}},[i("van-grid",{attrs:{"column-num":2}},t._l(t.list1,function(a,s){return i("van-grid-item",{key:s,attrs:{to:"/detail?id="+a._id}},[i("van-image",{attrs:{src:a.pimg}}),i("p",{staticClass:"pnames"},[t._v(t._s(a.pname))]),i("p",{staticClass:"pnames1"},[i("span",[i("van-icon",{attrs:{name:"like-o"}})],1),t._v(t._s(a.pfollow))]),i("p",{staticClass:"pnames2"},[t._v("￥"+t._s(a.pprice))])],1)}),1)],1),i("van-tab",{attrs:{title:"宗申文化用品"}},[i("van-grid",{attrs:{"column-num":2}},t._l(t.list2,function(a,s){return i("van-grid-item",{key:s,attrs:{to:"/detail?id="+a._id}},[i("van-image",{attrs:{src:a.pimg}}),i("p",{staticClass:"pnames"},[t._v(t._s(a.pname))]),i("p",{staticClass:"pnames1"},[i("span",[i("van-icon",{attrs:{name:"like-o"}})],1),t._v(t._s(a.pfollow))]),i("p",{staticClass:"pnames2"},[t._v("￥"+t._s(a.pprice))])],1)}),1)],1),i("van-tab",{staticClass:"footer",attrs:{title:"赛科龙摩托"}},[i("van-grid",{attrs:{"column-num":2}},t._l(t.list3,function(a,s){return i("van-grid-item",{key:s,attrs:{to:"/detail?id="+a._id}},[i("van-image",{attrs:{src:a.pimg}}),i("p",{staticClass:"pnames"},[t._v(t._s(a.pname))]),i("p",{staticClass:"pnames1"},[i("span",[i("van-icon",{attrs:{name:"like-o"}})],1),t._v(t._s(a.pfollow))]),i("p",{staticClass:"pnames2"},[t._v("￥"+t._s(a.pprice))])],1)}),1)],1)],1)],1),i("div",{staticClass:"bottom-swipe"},[i("van-swipe",{attrs:{"show-indicators":!1}},t._l(t.list4,function(t,a){return i("van-swipe-item",{key:a},[i("van-card",{attrs:{price:t.pprice,desc:t.pdesc,title:t.pname,thumb:t.pimg}})],1)}),1)],1)],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("p",{staticClass:"home_p"},[t._v("推荐购买")])])}],e=s("c24f"),c={name:"home",data:function(){return{active:0,list:[],list1:[],list2:[],list3:[],list4:[]}},methods:{onClick:function(t,a){},btn:function(){this.$router.push("/detail?id=5d664ad151f33e0d50985784")},btn1:function(){this.$router.push("/detail?id=5d6671a5948adf0774c0522b")},btn2:function(){this.$router.push("/detail?id=5d66746b948adf0774c0522e")},detail:function(t){this.$router.push({path:"/detail",query:{id:t}})}},mounted:function(){var t=this,a={pclass1:"宗申摩托车"};e["a"].postPclass1Product(a).then(function(a){t.list=a.data});var s={pclass2:"街跑"};e["a"].postPclass2Product(s).then(function(a){console.log(a),t.list1=a.data});var i={pclass1:"宗申文化用品"};e["a"].postPclass1Product(i).then(function(a){t.list2=a.data});var n={pclass1:"赛科龙摩托"};e["a"].postPclass1Product(n).then(function(a){t.list3=a.data}),e["a"].getProduct().then(function(a){t.list4=a.data.data,console.log(t.list4[0])})}},r=c,l=(s("bc4e"),s("2877")),o=Object(l["a"])(r,i,n,!1,null,"46b64902",null);a["default"]=o.exports},bc4e:function(t,a,s){"use strict";var i=s("152a"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-72abbf84.e563c67e.js.map