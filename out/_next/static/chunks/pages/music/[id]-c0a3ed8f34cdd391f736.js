_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{VSri:function(n,t,e){"use strict";var r=e("h4VS"),i=e("q1tI"),a=e.n(i),o=e("YFqc"),c=e.n(o),u=e("vOnD"),l=e("aNv/"),f=a.a.createElement;function s(){var n=Object(r.a)(["\n  font-family: ",";\n  font-size: 1.2em;\n  margin-right: ",";\n  cursor: pointer;\n  text-decoration: underline;\n  color: ",";\n"]);return s=function(){return n},n}var d=u.c.span(s(),l.h,l.l,l.g);t.a=function(n){var t=n.href,e=n.children;return f(c.a,{href:t},f(d,null,e))}},YFqc:function(n,t,e){n.exports=e("cTJO")},Zqqe:function(n,t,e){"use strict";var r=e("q1tI"),i=e.n(r),a=e("YFqc"),o=e.n(a),c=e("uGSd"),u=e("tOvx"),l=e("h4VS"),f=e("vOnD"),s=e("aNv/");function d(){var n=Object(l.a)(["\n  cursor: pointer;\n  &:hover {\n    "," {\n      top: 0;\n      transition: top 0.5s ease-out;\n    }\n    "," {\n      text-decoration: underline;\n    }\n  }\n"]);return d=function(){return n},n}function p(){var n=Object(l.a)(["\n  font-weight: ",";\n  & + & {\n    margin-top: ",";\n  }\n"]);return p=function(){return n},n}function v(){var n=Object(l.a)(["\n  display: flex;\n  text-align: center;\n  display: flex;\n  white-space: pre-wrap;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return v=function(){return n},n}function m(){var n=Object(l.a)(["\n  position: absolute;\n  top: 1000px;\n  background-color: ",";\n  width: 100%;\n  height: 100%;\n  opacity: 0.95;\n  color: #fff;\n  font-size: 0.9em;\n  padding: ",";\n  transition: top 0.5s ease-in;\n"]);return m=function(){return n},n}function g(){var n=Object(l.a)(["\n  text-align: center;\n  margin-bottom: ",";\n"]);return g=function(){return n},n}function b(){var n=Object(l.a)(["\n  font-size: 1.2em;\n"]);return b=function(){return n},n}function h(){var n=Object(l.a)(["\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 1.5em;\n  font-family: ",";\n  margin-bottom: ",";\n"]);return h=function(){return n},n}function y(){var n=Object(l.a)(["\n  width: 100%;\n  height: auto;\n  position: relative;\n  border: 1px solid ",";\n  border-radius: ",";\n  overflow: hidden;\n  margin-bottom: ",";\n"]);return y=function(){return n},n}var O=f.c.div(y(),s.d,s.f,s.l),w=f.c.p(h(),s.h,s.j),j=f.c.p(b()),x=f.c.div(g(),s.m),_=f.c.div(m(),s.g,s.n),E=f.c.div(v()),k=f.c.p(p(),(function(n){return n.isBold?"600":"regular"}),s.j),M=f.c.div(d(),_,w),R=e("woEc"),q=i.a.createElement;t.a=function(n){var t=n.album;return q(o.a,{href:"".concat(c.c,"/").concat(t.id)},q(M,null,q(O,null,q(u.b,{imageUrl:Object(R.a)(t.cover.url),aspectRatio:u.a["1:1"]}),q(_,null,q(E,null,q(k,{isBold:!0},t.title),q(k,null,t.short_description)))),q(x,null,q(w,null,t.title),q(j,null,new Date(t.date).getFullYear()))))}},cTJO:function(n,t,e){"use strict";var r=e("J4zp"),i=e("284h");t.__esModule=!0,t.default=void 0;var a=i(e("q1tI")),o=e("elyg"),c=e("nOHt"),u=e("vNVm"),l={};function f(n,t,e,r){if(n&&(0,o.isLocalURL)(t)){n.prefetch(t,e,r).catch((function(n){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:n&&n.locale;l[t+"%"+e+(i?"%"+i:"")]=!0}}var s=function(n){var t=!1!==n.prefetch,e=(0,c.useRouter)(),i=e&&e.pathname||"/",s=a.default.useMemo((function(){var t=(0,o.resolveHref)(i,n.href,!0),e=r(t,2),a=e[0],c=e[1];return{href:a,as:n.as?(0,o.resolveHref)(i,n.as):c||a}}),[i,n.href,n.as]),d=s.href,p=s.as,v=n.children,m=n.replace,g=n.shallow,b=n.scroll,h=n.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=a.Children.only(v),O=y&&"object"===typeof y&&y.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),j=r(w,2),x=j[0],_=j[1],E=a.default.useCallback((function(n){x(n),O&&("function"===typeof O?O(n):"object"===typeof O&&(O.current=n))}),[O,x]);(0,a.useEffect)((function(){var n=_&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof h?h:e&&e.locale,i=l[d+"%"+p+(r?"%"+r:"")];n&&!i&&f(e,d,p,{locale:r})}),[p,d,_,h,t,e]);var k={ref:E,onClick:function(n){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(n),n.defaultPrevented||function(n,t,e,r,i,a,c,u){("A"!==n.currentTarget.nodeName||!function(n){var t=n.currentTarget.target;return t&&"_self"!==t||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.nativeEvent&&2===n.nativeEvent.which}(n)&&(0,o.isLocalURL)(e))&&(n.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[i?"replace":"push"](e,r,{shallow:a,locale:u,scroll:c}).then((function(n){n&&c&&document.body.focus()})))}(n,e,d,p,m,g,b,h)},onMouseEnter:function(n){(0,o.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(n),f(e,d,p,{priority:!0}))}};if(n.passHref||"a"===y.type&&!("href"in y.props)){var M="undefined"!==typeof h?h:e&&e.locale,R=(0,o.getDomainLocale)(p,M,e&&e.locales,e&&e.domainLocales);k.href=R||(0,o.addBasePath)((0,o.addLocale)(p,M,e&&e.defaultLocale))}return a.default.cloneElement(y,k)};t.default=s},fYCT:function(n,t,e){"use strict";e.r(t),e.d(t,"getStatisProps",(function(){return W}));var r=e("o0o1"),i=e.n(r),a=e("HaE+"),o=e("q1tI"),c=e.n(o),u=e("yPXA"),l=e("MJ9r"),f=e("VSri"),s=e("VRjG"),d=e("tOvx"),p=e("T+es"),v=e("1sKu"),m=e.n(v),g=e("xchM"),b=e("uGSd"),h=e("K7Tq"),y=e("h4VS"),O=e("vOnD"),w=e("aNv/");function j(){var n=Object(y.a)(["\n  margin-bottom: ",";\n"]);return j=function(){return n},n}function x(){var n=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ",";\n"]);return x=function(){return n},n}function _(){var n=Object(y.a)(["\n  display: flex;\n  margin-bottom: ",";\n"]);return _=function(){return n},n}function E(){var n=Object(y.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  & > *:nth-child(odd) {\n    margin-right: ",";\n  }\n  & > *:nth-child(even) {\n    margin-left: ",";\n  }\n"]);return E=function(){return n},n}function k(){var n=Object(y.a)(["\n  margin-left: ",";\n"]);return k=function(){return n},n}function M(){var n=Object(y.a)(["\n  display: list-item;\n  line-height: 2em;\n  font-size: 0.9em;\n"]);return M=function(){return n},n}function R(){var n=Object(y.a)(["\n  list-style-type: decimal;\n  list-style-position: outside;\n  padding: 0 0 0 ",";\n"]);return R=function(){return n},n}function q(){var n=Object(y.a)(["\n  max-width: 544px;\n  width: 50%;\n  border: 1px solid ",";\n"]);return q=function(){return n},n}function I(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ",";\n"]);return I=function(){return n},n}var S=O.c.div(I(),w.n),N=O.c.div(q(),w.d),U=O.c.ol(R(),w.m),L=O.c.li(M()),z=O.c.div(k(),w.n),T=O.c.div(E(),w.l,w.l),V=O.c.div(_(),w.n),C=O.c.div(x(),w.n),D=O.c.div(j(),w.k),J=e("woEc"),Y=c.a.createElement,P=function(n){var t=n.item,e=t.ya_music_src||t.itunes_src;return Y(g.a,{bgImage:m.a,bgRepeat:"x"},Y(u.b,null,Y(S,null,Y(l.a,{isUpCase:!0},t.title," / ",new Date(t.date).getFullYear()),Y(f.a,{href:"".concat(b.c)},"\u0412\u0441\u0435 \u0430\u043b\u044c\u0431\u043e\u043c\u044b")),Y(V,null,Y(N,null,Y(d.b,{imageUrl:Object(J.a)(t.cover.url),aspectRatio:d.a["1:1"]})),Y(z,null,Y(h.b,null,"\u0422\u0440\u0435\u043a\u043b\u0438\u0441\u0442"),Y(U,null,t.tracks.map((function(n){return Y(L,{key:n.id},n.title)}))))),e&&Y(C,null,Y(h.b,{withMargin:!1},"\u041f\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c \u0438 \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0430\u043b\u044c\u0431\u043e\u043c:"),Y(h.c,null,t.ya_music_src&&Y(h.d,{href:t.ya_music_src}),t.itunes_src&&Y(h.a,{href:t.itunes_src}))),Y(D,null,Y(s.a,{inputString:t.description})),Y(T,null,t.tracks.map((function(n){return Y(p.a,{key:n.id,track:n})})))))},F=e("2PRl"),K=e("+pfY"),H=e("Zqqe");function G(){var n=Object(y.a)(["\n  margin-bottom: ",";\n"]);return G=function(){return n},n}var B=O.c.div(G(),w.o),X=c.a.createElement,A=function(n){var t=n.title,e=void 0===t?"\u0414\u0440\u0443\u0433\u0438\u0435 \u0430\u043b\u044c\u0431\u043e\u043c\u044b":t,r=n.list;return X(u.b,null,X(u.a,null,X(F.a,{title:e,withMargin:!0}),X(B,null,X(K.a,null,r.map((function(n){return X(H.a,{key:n.id,album:n})}))))))},Z=e("efbE"),Q=c.a.createElement,W=function(){var n=Object(a.a)(i.a.mark((function n(t){var e,r,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query.id,n.next=3,Object(Z.b)(e);case 3:return r=n.sent,n.next=6,Object(Z.c)();case 6:return a=n.sent,n.abrupt("return",{props:{item:r,list:a.filter((function(n){return n.id.toString()!==e})).slice(0,3)}});case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();t.default=function(n){var t=n.item,e=n.list;return t&&e&&Q(c.a.Fragment,null,Q(P,{item:t}),Q(A,{list:e}))}},ibjS:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/music/[id]",function(){return e("fYCT")}])},tOvx:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r,i=e("h4VS"),a=e("q1tI"),o=e.n(a),c=e("vOnD"),u=e("zVdJ"),l=o.a.createElement;function f(){var n=Object(i.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(","),\n    url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n"]);return f=function(){return n},n}function s(){var n=Object(i.a)(["\n  height: 0;\n  overflow: hidden;\n  position: relative;\n  padding-top: ",";\n  width: 100%;\n"]);return s=function(){return n},n}!function(n){n["16:9"]="16:9",n["9:16"]="9:16",n["4:3"]="4:3",n["3:4"]="3:4",n["3:2"]="3:2",n["8:5"]="8:5",n["1:1"]="1:1"}(r||(r={}));var d={"16:9":"56.25%","9:16":"177.77%","4:3":"75%","3:4":"133.33%","3:2":"66.66%","8:5":"62.5%","1:1":"100%"},p=c.c.div(s(),(function(n){var t=n.aspectRatio,e=void 0===t?r["16:9"]:t;return d[e]})),v=c.c.div(f(),(function(n){return n.imageUrl}),(function(n){return n.defaultImageUrl}));t.b=function(n){var t=n.aspectRatio,e=void 0===t?r["16:9"]:t,i=n.imageUrl,a=n.defaultImageUrl,o=void 0===a?u.b:a,c=n.children;return l(p,{aspectRatio:e},l(v,{imageUrl:i,defaultImageUrl:o}),c)}},vNVm:function(n,t,e){"use strict";var r=e("J4zp"),i=e("TqRt");t.__esModule=!0,t.useIntersection=function(n){var t=n.rootMargin,e=n.disabled||!c,i=(0,a.useRef)(),l=(0,a.useState)(!1),f=r(l,2),s=f[0],d=f[1],p=(0,a.useCallback)((function(n){i.current&&(i.current(),i.current=void 0),e||s||n&&n.tagName&&(i.current=function(n,t,e){var r=function(n){var t=n.rootMargin||"",e=u.get(t);if(e)return e;var r=new Map,i=new IntersectionObserver((function(n){n.forEach((function(n){var t=r.get(n.target),e=n.isIntersecting||n.intersectionRatio>0;t&&e&&t(e)}))}),n);return u.set(t,e={id:t,observer:i,elements:r}),e}(e),i=r.id,a=r.observer,o=r.elements;return o.set(n,t),a.observe(n),function(){o.delete(n),a.unobserve(n),0===o.size&&(a.disconnect(),u.delete(i))}}(n,(function(n){return n&&d(n)}),{rootMargin:t}))}),[e,t,s]);return(0,a.useEffect)((function(){c||s||(0,o.default)((function(){return d(!0)}))}),[s]),[p,s]};var a=e("q1tI"),o=i(e("0G5g")),c="undefined"!==typeof IntersectionObserver;var u=new Map},xchM:function(n,t,e){"use strict";var r=e("h4VS"),i=e("vOnD"),a=e("aNv/");function o(){var n=Object(r.a)(["\n  padding: "," 0 "," 0;\n  position: relative;\n  &::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    opacity: ",";\n    top: 0;\n    background-color: #fff;\n    background-image: url(",");\n    background-repeat: ",";\n  }\n"]);return o=function(){return n},n}var c=i.c.div(o(),a.p,a.o,(function(n){var t=n.opacity;return void 0===t?1:t}),(function(n){return n.bgImage||null}),(function(n){var t=n.bgRepeat,e=void 0===t?"xy":t;return"xy"===e?"repeat":"x"===e?"repeat-x":"y"===e?"repeat-y":"no-repeat"}));t.a=c}},[["ibjS",0,1,2,4,3,5,7,9]]]);