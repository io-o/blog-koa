webpackJsonp([3],{"/mu0":function(t,e){},"0yCz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){var t=this;return{loading:!0,columns7:[{title:"标题",align:"center",key:"title"},{title:"分类",align:"center",key:"tag",render:function(t,e){return t("Tag",{props:{type:"dot",color:"blue"}},e.row.tag)}},{title:"日期",key:"time",align:"center"},{title:"操作",key:"action",width:150,align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(a.row)}}},"编辑"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(a.row._id,a.index)}}},"删除")])}}],data6:[],rem:!1,adminForm:{page:0,size:10},total:null}},methods:{initData:function(){var t=this;this.$http.post("/fetchArticle",this.adminForm).then(function(e){var a=e.data;a.success?(t.data6=a.data,t.total=a.total,t.loading=!1):t.$Message.error("请求失败， 请刷新重新查询！")})},show:function(t){this.$router.push({name:"edit",params:{data:t}})},remove:function(t,e){var a=this;this.$Modal.confirm({title:"删除",content:"<p>是否删除</p>",onOk:function(){a.$http.post("/removeArticle",{id:t}).then(function(t){var n=t.data;n.success?(a.$Message.success("删除成功!"),a.data6.splice(e,1)):a.$Message.error("删除失败！")})}})},onChange:function(t){this.adminForm.page=t-1,this.initData()}},created:function(){this.initData()}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[a("Table",{attrs:{loading:t.loading,border:"",columns:t.columns7,data:t.data6}}),a("p",{staticClass:"admin-p"},[a("Page",{attrs:{total:t.total,size:"small","page-size":10},on:{"on-change":t.onChange}})],1)],1)},o=[],r=a("XyMi");function s(t){a("/mu0")}var c=!1,l=s,u="data-v-25645180",d=null,p=Object(r["a"])(n,i,o,c,l,u,d);e["default"]=p.exports}});