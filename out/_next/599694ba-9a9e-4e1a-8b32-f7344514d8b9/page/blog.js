module.exports=__NEXT_REGISTER_PAGE("/blog",function(){return{page:webpackJsonp([0],{126:function(t,e,r){t.exports=r(282)},127:function(t,e,r){"use strict";var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=r(284),o=encodeURIComponent,a="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see "+i("block-content-image-materializing");t.exports=function(t){var e=t.node,r=t.options,i=e.asset;if(!i)throw new Error("Image does not have required `asset` property");var s=function(t){var e=t.imageOptions,r=Object.keys(e);return r.length?"?"+r.map(function(t){return o(t)+"="+o(e[t])}).join("&"):""}(r);if(i.url)return i.url+s;var l=i._ref;if(!l)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");var u=r.projectId,c=r.dataset;if(!u||!c)throw new Error(a);var f=l.split("-"),h=n(f,4);return"https://cdn.sanity.io/"+h[0]+"s/"+u+"/"+c+"/"+h[1]+"-"+h[2]+"."+h[3]+s}},128:function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(1);t.exports=function(t,e){return Object.keys(t).reduce(function(r,o){var a=n(t[o]);return r[o]="function"===a?void 0!==e[o]?e[o]:t[o]:"object"===a?i({},t[o],e[o]):void 0===e[o]?t[o]:e[o],r},{})}},276:function(t,e,r){t.exports=r(277)},277:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(28),i=r.n(n),o=r(7),a=r.n(o),s=r(278),l=r.n(s),u=r(290),c=r.n(u),f=r(129),h=r.n(f),p=r(135),d=(r.n(p),r(171)),m=r.n(d);var y=c()(m.a);var v=function(t){var e=t.list,r=void 0===e?[]:e,n=t.conjuction,i=void 0===n?"and":n,s=t.separator,l=void 0===s?",":s;return a.a.createElement(o.Fragment,null,r.map(function(t,e){return a.a.createElement("span",{key:t},t,1===r.length?".":e+2===r.length?" ".concat(i," "):e+1===r.length?".":"".concat(l," "))}))},g=function(t){var e,r=t.title,n=void 0===r?"No title":r,i=t.name,o=void 0===i?"No name":i,s=t.categories,u=void 0===s?[]:s,c=t.authorImage,f=void 0===c?{}:c,d=t.body,g=void 0===d?[]:d,k=t._updatedAt,b=void 0===k?"":k;return a.a.createElement("div",null,a.a.createElement("h1",null,n),"By ",o,". Updated ",Object(p.format)(b,"DD. MMMM, YYYY"),". ",u.length&&a.a.createElement("span",null,"Posted in ",a.a.createElement(v,{list:u})),a.a.createElement("div",null,a.a.createElement("img",{src:(e=f,y.image(e)).width(50).url()})),a.a.createElement(l.a,{blocks:g,imageOptions:{w:320,h:240,fit:"max"},projectId:m.a.clientConfig.projectId,dataset:m.a.clientConfig.dataset}),a.a.createElement(h.a,{href:"/"},a.a.createElement("a",null,"Back to home")))};g.getInitialProps=function(){var t,e=(t=i.a.mark(function t(e){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.query.slug,t.next=3,m.a.fetch('*[slug.current == $slug][0]{\n      title,\n      "name": author->name,\n      "categories": categories[]->title,\n      "authorImage": author->image,\n      body,\n      _updatedAt\n    }',{slug:r});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}),function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(t,e){try{var r=o[t](e),a=r.value}catch(t){return void i(t)}r.done?n(a):Promise.resolve(a).then(s,l)}function s(t){a("next",t)}function l(t){a("throw",t)}s()})});return function(t){return e.apply(this,arguments)}}(),e.default=g},278:function(t,e,r){"use strict";var n=r(7),i=r(279),o=r(126),a=r(289),s=a.serializers,l=a.serializeSpan,u=a.renderProps,c=o.getImageUrl,f=o.blocksToNodes,h=o.mergeSerializers,p=n.createElement,d=function t(e){var r=h(t.defaultSerializers,e.serializers),n=Object.assign({},u,e,{serializers:r,blocks:e.blocks||[]});return f(p,n,s,l)};d.defaultSerializers=s,d.getImageUrl=c,d.propTypes={className:i.string,projectId:i.string,dataset:i.string,imageOptions:i.object,serializers:i.shape({types:i.object,marks:i.object,list:i.func,listItem:i.func,block:i.func,span:i.func}),blocks:i.oneOfType([i.arrayOf(i.shape({_type:i.string.isRequired})),i.shape({_type:i.string.isRequired})]).isRequired},d.defaultProps={serializers:{},imageOptions:{}},t.exports=d},279:function(t,e,r){t.exports=r(280)()},280:function(t,e,r){"use strict";var n=r(56),i=r(55),o=r(281);t.exports=function(){function t(t,e,r,n,a,s){s!==o&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return r.checkPropTypes=n,r.PropTypes=r,r}},281:function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},282:function(t,e,r){"use strict";var n=r(283),i=r(285),o=r(127),a=r(128);t.exports={blocksToNodes:function(t,e,r,o){if(r)return i(t,e,r,o);var a=n(t);return i(t,e,a.defaultSerializers,a.serializeSpan)},getSerializers:n,getImageUrl:o,mergeSerializers:a}},283:function(t,e,r){"use strict";var n=r(1),i=r(127);t.exports=function(t){function e(e,r){return t(e,null,r.children)}return{defaultSerializers:{types:{block:function(e){var r=e.node.style||"normal";return/^h\d/.test(r)?t(r,null,e.children):t("blockquote"===r?"blockquote":"p",null,e.children)},image:function(e){var r=t("img",{src:i(e)});return e.isInline?r:t("figure",null,r)}},marks:{strong:e.bind(null,"strong"),em:e.bind(null,"em"),code:e.bind(null,"code"),underline:function(e){return t("span",{style:{textDecoration:"underline"}},e.children)},"strike-through":function(e){return t("del",null,e.children)},link:function(e){return t("a",{href:e.mark.href},e.children)}},list:function(e){var r="bullet"===e.type?"ul":"ol";return t(r,null,e.children)},listItem:function(e){return t("li",null,e.children)},block:function(e){var r=e.node,n=e.serializers,i=e.options,o=e.isInline,a=e.children,s=r._type,l=n.types[s];if(!l)throw new Error('Unknown block type "'+s+'", please specify a serializer for it in the `serializers.types` prop');return t(l,{node:r,options:i,isInline:o},a)},span:function(e){var r=e.node,n=r.mark,i=r.children,o="string"==typeof n?n:n._type,a=e.serializers.marks[o];return a?t(a,e.node,i):(console.warn('Unknown mark type "'+o+'", please specify a serializer for it in the `serializers.marks` prop'),t(e.serializers.markFallback,null,i))},hardBreak:function(){return t("br")},container:"div",markFallback:"span",text:void 0,empty:""},serializeSpan:function(e,r,i,o){if("\n"===e&&r.hardBreak)return t(r.hardBreak,{key:"hb-"+i});if("string"==typeof e)return r.text?t(r.text,{key:"text-"+i},e):e;var a=void 0;e.children&&(a={children:e.children.map(function(t,r){return o.serializeNode(t,r,e.children,!0)})});var s=n({},e,a);return t(r.span,{key:e._key||"span-"+i,node:s,serializers:r})}}}},284:function(t,e){t.exports=function(t){return"https://docs.sanity.io/help/"+t}},285:function(t,e,r){"use strict";var n=r(1),i=r(286),o=r(287),a=r(288),s=r(128),l=["projectId","dataset","imageOptions"],u=function(t){return void 0!==t},c={imageOptions:{}};function f(t){return"block"===t._type&&t.listItem}t.exports=function(t,e,r,h){var p=n({},c,e),d=Array.isArray(p.blocks)?p.blocks:[p.blocks],m=a(d),y=o(m,p.listNestMode),v=s(r,p.serializers||{}),g=l.reduce(function(t,e){var r=p[e];return u(r)&&(t[e]=r),t},{});function k(e,r,n,o){return"list"===(p=e)._type&&p.listItem?(s=(a=e).listItem,l=a.level,u=a._key,c=a.children.map(k),t(v.list,{key:u,level:l,type:s,options:g},c)):f(e)?function(e,r){var n=e._key,o=i(e).map(k);return t(v.listItem,{node:e,index:r,key:n,options:g},o)}(e,function(t,e){for(var r=0,n=0;n<e.length;n++){if(e[n]===t)return r;f(e[n])&&r++}return r}(e,n)):function(t){return"string"==typeof t||t.marks||"span"===t._type}(e)?h(e,v,r,{serializeNode:k}):function(e,r,n){var o=i(e).map(function(t,e,r){return k(t,e,r,!0)}),a={key:e._key||"block-"+r,node:e,isInline:n,serializers:v,options:g};return t(v.block,a,o)}(e,r,o);var a,s,l,u,c,p}var b=y.map(k);if(b.length>1){var w=p.className?{className:p.className}:{};return t(v.container,w,b)}return b[0]?b[0]:"function"==typeof v.empty?t(v.empty):v.empty}},286:function(t,e,r){"use strict";var n=["strong","em","code","underline","strike-through"];function i(t,e,r){if(!t.marks||0===t.marks.length)return t.marks||[];var i=t.marks.reduce(function(t,n){t[n]=t[n]?t[n]+1:1;for(var i=e+1;i<r.length;i++){var o=r[i];if(!(o.marks&&Array.isArray(o.marks)&&o.marks.includes(n)))break;t[n]++}return t},{}),o=function(t,e,r){var i=t[e]||0,o=t[r]||0;if(i!==o)return o-i;var a=n.indexOf(e),s=n.indexOf(r);if(a!==s)return a-s;if(e<r)return-1;if(e>r)return 1;return 0}.bind(null,i);return t.marks.slice().sort(o)}t.exports=function(t){var e=t.children,r=t.markDefs;if(!e||!e.length)return[];var n=e.map(i),o={_type:"span",children:[]},a=[o];return e.forEach(function(t,e){var i=n[e];if(i){var o=1;if(a.length>1)for(;o<a.length;o++){var s=a[o].markKey;if(!i.includes(s))break;var l=i.indexOf(s);i.splice(l,1)}var u,c=function(t){for(var e=t.length-1;e>=0;e--){var r=t[e];if("span"===r._type&&r.children)return r}}(a=a.slice(0,o));if(i.forEach(function(e){var n={_type:"span",_key:t._key,children:[],mark:r.find(function(t){return t._key===e})||e,markKey:e};c.children.push(n),a.push(n),c=n}),"string"==typeof(u=t).text&&Array.isArray(u.marks)){for(var f=t.text.split("\n"),h=f.length;h-- >1;)f.splice(h,0,"\n");c.children=c.children.concat(f)}else c.children=c.children.concat(t)}else a[a.length-1].children.push(t)}),o.children}},287:function(t,e,r){"use strict";var n=r(1);function i(t){return Boolean(t.listItem)}function o(t,e){return t.level===e.level&&t.listItem===e.listItem}function a(t){return{_type:"list",_key:t._key+"-parent",level:t.level,listItem:t.listItem,children:[t]}}function s(t){return t.children&&t.children[t.children.length-1]}function l(t,e){var r="string"==typeof e.listItem;if("list"===t._type&&t.level===e.level&&r&&t.listItem===e.listItem)return t;var n=s(t);return!!n&&l(n,e)}t.exports=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",r=[],u=void 0,c=0;c<t.length;c++){var f=t[c];if(i(f))if(u)if(o(f,u))u.children.push(f);else if(f.level>u.level){var h=a(f);if("html"===e){var p=s(u),d=n({},p,{children:p.children.concat(h)});u.children[u.children.length-1]=d}else u.children.push(h);u=h}else if(f.level<u.level){var m=l(r[r.length-1],f);if(m){(u=m).children.push(f);continue}u=a(f),r.push(u)}else if(f.listItem===u.listItem)console.warn("Unknown state encountered for block",f),r.push(f);else{var y=l(r[r.length-1],{level:f.level});if(y&&y.listItem===f.listItem){(u=y).children.push(f);continue}u=a(f),r.push(u)}else u=a(f),r.push(u);else r.push(f),u=null}return r}},288:function(t,e,r){"use strict";var n=r(1);t.exports=function(t){return t.map(function(t){return t._key?t:n({_key:(e=t,function(t){var e=0,r=t.length;if(0===r)return e;for(var n=0;n<r;n++)e=(e<<5)-e+t.charCodeAt(n),e&=e;return e}(JSON.stringify(e)).toString(36).replace(/[^A-Za-z0-9]/g,""))},t);var e})}},289:function(t,e,r){"use strict";var n=r(7),i=(0,r(126).getSerializers)(n.createElement),o=i.defaultSerializers,a=i.serializeSpan;t.exports={serializeSpan:a,serializers:o,renderProps:{nestMarks:!0}}},290:function(t,e,r){t.exports=r(291).default},291:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();e.default=function(t){if(t&&"object"===n(t.clientConfig))return new c(null,{baseUrl:t.clientConfig.apiHost.replace(/^https:\/\/api\./,"https://cdn."),projectId:t.clientConfig.projectId,dataset:t.clientConfig.dataset});return new c(null,t)};var o,a=r(292),s=(o=a)&&o.__esModule?o:{default:o};var l=["clip","crop","fill","fillmax","max","scale","min"],u=["top","bottom","left","right","center","focalpoint","entropy"],c=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e?Object.assign({},e.options,r||{}):r||{}}return i(t,[{key:"_withOptions",value:function(e){return new t(this,e)}},{key:"image",value:function(t){return this._withOptions({source:t})}},{key:"dataset",value:function(t){return this._withOptions({dataset:t})}},{key:"projectId",value:function(t){return this._withOptions({projectId:t})}},{key:"width",value:function(t){return this._withOptions({width:t})}},{key:"height",value:function(t){return this._withOptions({height:t})}},{key:"focalPoint",value:function(t,e){return this._withOptions({focalPoint:{x:t,y:e}})}},{key:"maxWidth",value:function(t){return this._withOptions({maxWidth:t})}},{key:"minWidth",value:function(t){return this._withOptions({minWidth:t})}},{key:"maxHeight",value:function(t){return this._withOptions({maxHeight:t})}},{key:"minHeight",value:function(t){return this._withOptions({minHeight:t})}},{key:"size",value:function(t,e){return this._withOptions({width:t,height:e})}},{key:"blur",value:function(t){return this._withOptions({blur:t})}},{key:"sharpen",value:function(t){return this._withOptions({sharpen:t})}},{key:"rect",value:function(t,e,r,n){return this._withOptions({rect:{left:t,top:e,width:r,height:n}})}},{key:"format",value:function(t){return this._withOptions({format:t})}},{key:"invert",value:function(t){return this._withOptions({invert:t})}},{key:"orientation",value:function(t){return this._withOptions({orientation:t})}},{key:"quality",value:function(t){return this._withOptions({quality:t})}},{key:"forceDownload",value:function(t){return this._withOptions({download:t})}},{key:"flipHorizontal",value:function(){return this._withOptions({flipHorizontal:!0})}},{key:"flipVertical",value:function(){return this._withOptions({flipVertical:!0})}},{key:"ignoreImageParams",value:function(){return this._withOptions({ignoreImageParams:!0})}},{key:"fit",value:function(t){if(-1===l.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this._withOptions({fit:t})}},{key:"crop",value:function(t){if(-1===u.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this._withOptions({crop:t})}},{key:"url",value:function(){return(0,s.default)(this.options)}},{key:"toString",value:function(){return this.url()}}]),t}()},292:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(t){var e=Object.assign({},t||{}),r=e.source;delete e.source;var i=a(r);if(!i)return null;var s=function(t){var e=t.split("-"),r=n(e,4),i=r[1],o=r[2],a=r[3];if("string"!=typeof o)throw new Error("Malformed asset _ref '"+t+"'. Expected an id on the form \"image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg.");var s=o.split("x"),l=n(s,2),u=l[0],c=l[1],f=+u,h=+c;if("string"!=typeof i||"string"!=typeof a||!Number.isFinite(f)||!Number.isFinite(h))throw new Error("Malformed asset _ref '"+t+"'. Expected an id on the form \"image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg.");return{id:i,width:f,height:h,format:a}}(i.asset._ref),l={left:Math.round(i.crop.left*s.width),top:Math.round(i.crop.top*s.height)};l.width=Math.round(s.width-i.crop.right*s.width-l.left),l.height=Math.round(s.height-i.crop.bottom*s.height-l.top);var u=i.hotspot.height*s.height/2,c=i.hotspot.width*s.width/2,f=i.hotspot.x*s.width,h=i.hotspot.y*s.height,p={left:f-c,top:h-u,right:f+c,bottom:h+c};e.asset=s,e.rect||e.focalPoint||e.ignoreImageParams||e.crop||(e=Object.assign(e,function(t,e){var r={width:e.width,height:e.height};if(!e.width||!e.height)return r.rect=t.crop,r;var n=t.crop,i=t.hotspot,o=e.width/e.height;if(n.width/n.height>o){var a=n.height,s=a*o,l=n.top,u=(i.right-i.left)/2+i.left,c=u-s/2;return c<n.left?c=n.left:c+s>n.left+n.width&&(c=n.left+n.width-s),r.rect={left:Math.round(c),top:Math.round(l),width:Math.round(s),height:Math.round(a)},r}var f=n.width,h=f/o,p=n.left,d=(i.bottom-i.top)/2+i.top-h/2;d<n.top?d=n.top:d+h>n.top+n.height&&(d=n.top+n.height-h);return r.rect={left:Math.floor(p),top:Math.floor(d),width:Math.round(f),height:Math.round(h)},r}({crop:l,hotspot:p},e)));return function(t){var e=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,i=e+"/images/"+t.projectId+"/"+t.dataset+"/"+r,a=[];if(t.rect){var s=0!=t.rect.left||0!=t.rect.top||t.rect.height!=t.asset.height||t.rect.width!=t.asset.width;s&&a.push("rect="+t.rect.left+","+t.rect.top+","+t.rect.width+","+t.rect.height)}t.focalPoint&&(a.push("fp-x="+t.focalPoint.x),a.push("fp-x="+t.focalPoint.y));(t.flipHorizontal||t.flipVertical)&&a.push("flip="+(t.flipHorizontal?"h":"")+(t.flipVertical?"v":""));if(o.forEach(function(e){var r=n(e,2),i=r[0],o=r[1];void 0!==t[i]&&a.push(o+"="+encodeURIComponent(t[i]))}),0===a.length)return i;return i+"?"+a.join("&")}(e)},e.parseSource=a;var o=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"]];function a(t){var e=void 0;if("string"==typeof t)e={asset:{_ref:t}};else if("sanity.imageAsset"===t._type||"object"===(void 0===t?"undefined":i(t))&&"string"==typeof t._ref)e={asset:t};else{if("object"!==(void 0===t?"undefined":i(t))||"object"!==i(t.asset))return null;e=t}return e.crop&&e.hotspot||(e=Object.assign({crop:{left:0,top:0,bottom:0,right:0},hotspot:{x:.5,y:.5,height:1,width:1}},e)),e}}},[276]).default}});