module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([3],{494:function(e,t,n){e.exports=n(495)},495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),a=n.n(r),o=n(7),u=n.n(o),c=n(132),i=n.n(c),l=n(138),s=(n.n(l),n(174)),p=n.n(s),d=n(88),f=n.n(d);var m=function(e){var t=e.posts,n=void 0===t?[]:t;return u.a.createElement("div",null,u.a.createElement(f.a,{config:{title:"My Website",description:"Updated description as well"}}),u.a.createElement("h1",{className:"example"},"Welcome to a blog!"),u.a.createElement("h2",null,"Posts"),u.a.createElement("ul",null,n.map(function(e){var t=e._id,n=e.title,r=void 0===n?"":n,a=e.slug,o=void 0===a?"":a,c=e._updatedAt,s=void 0===c?"":c;return o&&u.a.createElement("li",{key:t},u.a.createElement(i.a,{prefetch:!0,href:"/blog/".concat(o)},u.a.createElement("a",null,r))," (",Object(l.format)(s,"DD. MMMM, YYYY"),")")})))};m.getInitialProps=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function u(e,t){try{var n=o[e](t),u=n.value}catch(e){return void a(e)}n.done?r(u):Promise.resolve(u).then(c,i)}function c(e){u("next",e)}function i(e){u("throw",e)}c()})}}(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.fetch('*[_type == "post"][0..1000]{\n      _id,\n      title,\n      "slug": slug.current,\n      _updatedAt\n    }');case 2:return e.t0=e.sent,e.abrupt("return",{posts:e.t0});case 4:case"end":return e.stop()}},e,this)})),t.default=m}},[494]).default}});