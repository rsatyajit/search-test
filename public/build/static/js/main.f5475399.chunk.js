(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),c=a.n(l),s=a(6),o=a(5),i=a(7),u=a(9),h=a(8),d=a(10),m=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",isLoggedIn:!1},a.handleCLick=function(){localStorage.clear(),a.setState({isLoggedIn:!1}),s.d.push("".concat("/build","/"))},a.handleInfo=function(){if(localStorage.getItem("user")){var e=JSON.parse(localStorage.getItem("user"));a.setState({name:"".concat(e.fname),isLoggedIn:!0})}},a.dashboardHandler=function(){s.d.push("".concat("/build","/"))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.handleInfo(),s.d.listen(function(t){e.handleInfo()})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("p",{style:{cursor:"pointer"},className:"header_text",onClick:this.dashboardHandler},"Git search")))),this.props.children)}}]),t}(r.a.Component),p=a(14),g=a(20),f=a.n(g),b="http://localhost:8000/api",E=function e(){Object(o.a)(this,e),this.fetchGitrepos=function(e){var t=e.language,a=e.page,n=e.limit;return f.a.get("https://api.github.com/search/repositories?q=language:".concat(t,"&page=").concat(a,"&per_page=").concat(n)).then(function(e){return e}).catch(function(e){return null})},this.setSearchResults=function(e){var t={totalitems:e.totalItems,search:e.search};return f.a.post("".concat(b,"/user/search"),t).then(function(e){console.log(e)}).catch(function(e){return null})},this.fetchSearchResults=function(e){var t=e.language,a=e.page,n=e.limit;return f.a.get("".concat(b,"/admin/search?page=").concat(a,"&limit=").concat(n,"&query=").concat(t)).then(function(e){return e}).catch(function(e){return null})}},v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.index+1),r.a.createElement("td",{style:{cursor:"pointer"},onClick:function(){return window.open(e.props.item.html_url,"_blank")}},this.props.item.id),r.a.createElement("td",{style:{cursor:"pointer"},onClick:function(){return window.open(e.props.item.html_url,"_blank")}},this.props.item.full_name),r.a.createElement("td",null,this.props.item.description))}}]),t}(r.a.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],search:"",page:1,limit:10,totalItems:0},a.dropDownHandler=function(e){console.log(e.target.value),a.setState({limit:e.target.value},function(){return a.bindingData()})},a.searchHandler=function(){a.setState({data:[],page:1},function(){return a.bindingData()})},a.paginateHandler=function(e){a.setState({page:e},function(){return a.bindingData()})},a.bindingData=function(){var e={language:a.state.search,page:a.state.page,limit:a.state.limit};(new E).fetchGitrepos(e).then(function(e){console.log(e),e&&200===e.status?(a.setState(function(t){return{data:[].concat(Object(p.a)(t.data),Object(p.a)(e.data.items))}}),a.setState({totalItems:e.data.total_count}),a.state.search&&1===a.state.page&&a.storeSearchResults()):(a.setState({data:[],totalItems:0}),a.state.search&&1===a.state.page&&a.storeSearchResults())})},a.storeSearchResults=function(){(new E).setSearchResults(a.state)},a.inputHandler=function(e){a.setState({search:e.target.value})},a.loadMoreHandler=function(){a.setState(function(e){return{page:e.page+1}},function(){return a.bindingData()})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.bindingData()}},{key:"render",value:function(){var e;return e=this.state.data.length>0?this.state.data.map(function(e,t){return r.a.createElement(v,{key:e.id,item:e,index:t})}):r.a.createElement("tr",null,"No records found"),r.a.createElement("div",{className:"sections_all_listing"},r.a.createElement("div",{className:"table_header"},r.a.createElement("div",{className:"contents_search"},"Search by language :",r.a.createElement("input",{type:"text",className:"search_field",name:"search",value:this.state.search,onChange:this.inputHandler}),r.a.createElement("button",{onClick:this.searchHandler},"search"))),r.a.createElement("div",{className:"form_section "},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Sl"),r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,e)))),this.state.data.length>0?r.a.createElement("div",null,r.a.createElement("span",{className:"lower"},"  ",r.a.createElement("button",{onClick:this.loadMoreHandler},"load more")," ",this.state.totalItems-this.state.data.length,"  more records left")):"")}}]),t}(r.a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.index+1),r.a.createElement("td",null,this.props.item.search),r.a.createElement("td",null,this.props.item.totalitems),r.a.createElement("td",null,new Date(this.props.item.created).toLocaleDateString()))}}]),t}(r.a.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],search:"",page:1,limit:10,totalItems:0},a.dropDownHandler=function(e){console.log(e.target.value),a.setState({limit:e.target.value},function(){return a.bindingData()})},a.searchHandler=function(){a.setState({data:[],page:1},function(){return a.bindingData()})},a.paginateHandler=function(e){a.setState({page:e},function(){return a.bindingData()})},a.bindingData=function(){var e={language:a.state.search,page:a.state.page,limit:a.state.limit};(new E).fetchSearchResults(e).then(function(e){console.log(e),e&&201===e.status?(a.setState(function(t){return{data:[].concat(Object(p.a)(t.data),Object(p.a)(e.data.result.items))}}),a.setState({totalItems:e.data.result.total_count})):a.setState({data:[],totalItems:0})})},a.storeSearchResults=function(){(new E).setSearchResults(a.state)},a.inputHandler=function(e){a.setState({search:e.target.value})},a.loadMoreHandler=function(){a.setState(function(e){return{page:e.page+1}},function(){return a.bindingData()})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.bindingData()}},{key:"render",value:function(){var e;return e=this.state.data.length>0?this.state.data.map(function(e,t){return r.a.createElement(y,{key:e.id,item:e,index:t})}):r.a.createElement("tr",null,"No records found"),r.a.createElement("div",{className:"sections_all_listing"},r.a.createElement("div",{className:"table_header"},r.a.createElement("div",{className:"contents_search"},"Search by language :",r.a.createElement("input",{type:"text",className:"search_field",name:"search",value:this.state.search,onChange:this.inputHandler}),r.a.createElement("button",{onClick:this.searchHandler},"search"))),r.a.createElement("div",{className:"form_section "},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Sl"),r.a.createElement("th",null,"language"),r.a.createElement("th",null,"repos"),r.a.createElement("th",null,"searched on"))),r.a.createElement("tbody",null,e)))),this.state.data.length>0&&this.state.totalItems!==this.state.data.length?r.a.createElement("span",{className:"lower"},"  ",r.a.createElement("button",{onClick:this.loadMoreHandler},"load more")," ",this.state.totalItems-this.state.data.length,"  more records left"):"")}}]),t}(r.a.Component);var j=function(){return console.log("/build"),r.a.createElement("div",null,r.a.createElement(s.c,{basename:"/build",history:s.d},r.a.createElement(s.b,{path:"".concat("/build","/"),component:m},r.a.createElement(s.a,{component:S}),r.a.createElement(s.b,{path:"".concat("/build","/list"),component:S}),r.a.createElement(s.b,{path:"".concat("/build","/admin"),component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.f5475399.chunk.js.map