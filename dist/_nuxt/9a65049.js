(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,5],{289:function(t,e,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(122).default)("b2e75622",content,!0,{sourceMap:!1})},291:function(t,e,r){"use strict";r(289)},292:function(t,e,r){var n=r(121)(!1);n.push([t.i,'body{font-family:sans-serif}.header__header-container{background-color:#fff;color:#000;height:60px;display:flex;justify-content:center;align-items:center;z-index:2;position:fixed;width:100%;top:0;box-shadow:3px 3px 10px grey}.header__header-container .header_nav-container{display:flex;flex-direction:row;z-index:2}@media(max-width:923px){.header__header-container .header_nav-container{position:absolute;flex-direction:column;top:60px;background-color:#000;right:0;margin:0;grid-gap:20px;gap:20px;height:0;width:100%;overflow:hidden;position:fixed;padding-left:3%}}.header__header-container h1{border:2px solid #000;border-radius:50%;padding:5px;width:40px;display:flex;justify-content:center;margin-right:20px;font-size:20px}.header__header-container div{margin:0 18px}.header__header-container a{font-size:14px;position:relative;color:#000;text-decoration:none;font-weight:800}.header__header-container a:after{content:"";position:absolute;top:-6px;right:0;width:0;height:2px;background-color:#000;transition:.4s}.header__header-container a:hover:after{width:100%;transition:.4s}.header__header-container a:before{content:"";position:absolute;bottom:-6px;left:0;width:0;height:2px;background-color:#000;transition:.4s}.header__header-container a:hover:before{width:100%;transition:.4s}.header__header-container a:hover{cursor:pointer}@media(max-width:923px){.header__header-container a{font-size:20px;top:30px;display:block;color:#fff}.header__header-container a:hover{background-color:#626262}.header__header-container a:before{content:"";position:absolute;bottom:-6px;right:0;width:100%;height:2px;background-color:#707070;transition:.4s}.header__header-container a:hover:after{content:"";width:0}}.header__header-container .header-hamburger__container{width:40px;height:21px;position:absolute;top:18px;left:-13px;justify-content:space-around;flex-direction:column;display:none;z-index:3;overflow:hidden}.header__header-container .header-hamburger__container:hover{cursor:pointer}@media(max-width:923px){.header__header-container .header-hamburger__container{display:flex}}.header__header-container .header-hamburger__container div{height:2px;background-color:#000;width:100%;z-index:2;margin-right:20px;transition:.4s;opacity:1}.header__header-container .header-hamburger_bar.menuOpened:first-child{transform:rotate(45deg);position:absolute;top:80%;transition:.4s}.header__header-container .header-hamburger_bar.menuOpened:nth-child(2){opacity:0}.header__header-container .header-hamburger_bar.menuOpened:last-child{transform:rotate(-45deg);position:absolute;bottom:70%;transition:.4s}.header__header-container #header__checkout-btn{background-color:#000;font-weight:800;font-size:18px;color:#fff;padding:8px 15px;border-radius:50px;right:10px;transition:.4s}.header__cart-container{position:relative}.header__cart-container div{background-color:#d63636;position:absolute;width:20px;height:20px;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:7px;right:-22px;top:-4px}.header__cart-position{position:absolute;top:10px;right:0}@media(max-width:923px){.header__cart-position{top:-18px}}',""]),t.exports=n},293:function(t,e,r){"use strict";r.r(e);r(35),r(32),r(37),r(9),r(53),r(33),r(54);var n=r(23),o=r(80),d=["Smartphones","Laptops","Fragrances","Skincare","Groceries","Home-Decoration"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={name:"Header",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({productData:"getProductData",cartArray:"getCartArray"})),data:function(){return{categories:d,isMenuOpen:!1}},methods:{hamburgerHandler:function(){this.isMenuOpen=!this.isMenuOpen,this.isMenuOpen?(this.$refs.navMenu.style.transition=".5s",this.$refs.navMenu.style.height="100%"):this.$refs.navMenu.style.height="0"}},mounted:function(){this.$store.dispatch("setProductData")}},l=h,f=(r(291),r(61)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"header__header-container"},[e("div",{staticClass:"header-hamburger__container",on:{click:t.hamburgerHandler}},[e("div",{class:"header-hamburger_bar ".concat(t.isMenuOpen&&"menuOpened")}),t._v(" "),e("div",{class:"header-hamburger_bar ".concat(t.isMenuOpen&&"menuOpened")}),t._v(" "),e("div",{class:"header-hamburger_bar ".concat(t.isMenuOpen&&"menuOpened")})]),t._v(" "),e("h1",[t._v("Z")]),t._v(" "),e("div",{ref:"navMenu",staticClass:"header_nav-container"},t._l(t.categories,(function(r,n){return e("div",{key:n},[e("NuxtLink",{attrs:{to:"/".concat(r.toLowerCase())}},[e("button",{on:{click:function(e){return t.setBrand(r)}}},[t._v("\n            "+t._s(r)+"\n          ")])])],1)})),0),t._v(" "),e("div",{staticClass:"header__cart-position"},[e("NuxtLink",{attrs:{to:"/cart"}},[e("div",{staticClass:"header__cart-container"},[e("div",[e("h5",[t._v(t._s(t.cartArray.length))])]),t._v(" "),e("button",{attrs:{id:"header__checkout-btn"}},[t._v("Cart")])])])],1)])])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(122).default)("eb4b6108",content,!0,{sourceMap:!1})},295:function(t,e,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(122).default)("f6b87428",content,!0,{sourceMap:!1})},302:function(t,e,r){"use strict";r(294)},303:function(t,e,r){var n=r(121)(!1);n.push([t.i,".cart-header__container[data-v-7c26e524]{height:90px;background-color:#f5f5f5;padding:0 10%;margin-top:60px;display:flex;justify-content:space-between;align-items:center}.cart-header__container button[data-v-7c26e524]{background-color:#2f2ff8;color:#fff;font-size:16px;font-weight:700;padding:10px;border-radius:8px;transition:.6s}.cart-header__container button[data-v-7c26e524]:hover{cursor:pointer;background-color:#4f4ffb;transition:.6s}",""]),t.exports=n},304:function(t,e,r){"use strict";r(295)},305:function(t,e,r){var n=r(121)(!1);n.push([t.i,"table[data-v-f7a8e5b0]{font-family:arial,sans-serif;border-collapse:collapse;width:800px;margin:60px auto}@media(max-width:892px){table[data-v-f7a8e5b0]{width:70%;margin:0 auto}}@media(max-width:750px){table tr[data-v-f7a8e5b0]{display:flex;flex-direction:column}table tr[data-v-f7a8e5b0]:first-child{display:none}}table tr td[data-v-f7a8e5b0]{border-right:1px solid #e4e4e4;height:70px}@media(max-width:750px){table tr td[data-v-f7a8e5b0]{display:flex;flex-direction:column;height:auto}table tr td[data-v-f7a8e5b0]:nth-child(2),table tr td[data-v-f7a8e5b0] :nth-child(3){display:none}}table tr td img[data-v-f7a8e5b0]{width:auto;height:100%}@media(max-width:750px){table tr td img[data-v-f7a8e5b0]{width:80px;height:auto}}td[data-v-f7a8e5b0],th[data-v-f7a8e5b0]{border:1px solid #ddd;text-align:left;padding:8px}tr[data-v-f7a8e5b0]:nth-child(2n){background-color:#ddd}tr:nth-child(2n) td[data-v-f7a8e5b0]{border-right:1px solid #fff}tr:nth-child(2n) tr:nth-child(odd) td[data-v-f7a8e5b0]{border-right:1px solid}button[data-v-f7a8e5b0]{background-color:#2f2ff8;color:#fff;font-size:16px;font-weight:700;padding:10px;border-radius:8px;transition:.6s;margin-top:20px}button[data-v-f7a8e5b0]:hover{cursor:pointer;background-color:#4f4ffb;transition:.6s}.cart-table__price[data-v-f7a8e5b0]{position:relative}.cart-table__price span[data-v-f7a8e5b0]{position:absolute;top:50%;transform:translateY(-50%);right:-40px;color:#fff;background-color:#d15656;padding:6px;font-size:15px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:5px}.cart-table__price span[data-v-f7a8e5b0]:hover{cursor:pointer}.cart-table__empty[data-v-f7a8e5b0]{margin:40px}.cart-table__empty h1[data-v-f7a8e5b0]{text-align:center}",""]),t.exports=n},315:function(t,e,r){"use strict";r.r(e);var n={name:"CartHeader"},o=(r(302),r(61)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart-header__container"},[e("h1",[t._v("Cart")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[e("button",[t._v("Back To Home")])])],1)}),[],!1,null,"7c26e524",null);e.default=component.exports},316:function(t,e,r){"use strict";r.r(e);r(35),r(32),r(37),r(9),r(53),r(33),r(54);var n=r(23),o=r(80);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"CartTable",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({cartArray:"getCartArray",cartNumber:"getCartNumber"})),data:function(){return{totalCost:0}},methods:{removeItem:function(t){var e=0;this.$store.commit("setCardNumber",this.cartNumber-=1),this.$store.commit("removeCartItem",t);for(var i=0;i<this.cartArray.length;i++)this.totalCost=e+=this.cartArray[i].price;0===this.cartArray.length&&(this.totalCost=0)}},mounted:function(){for(var i=0;i<this.cartArray.length;i++)this.totalCost+=this.cartArray[i].price}},h=c,l=(r(304),r(61)),component=Object(l.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"cart-table__table-container"},[t.cartArray.length>0?e("table",[t._m(0),t._v(" "),t._l(t.cartArray,(function(r,n){return e("tr",{key:n},[e("td",[e("img",{attrs:{src:r.images[0]}})]),t._v(" "),e("td",[t._v("\n          "+t._s(r.brand)+"\n        ")]),t._v(" "),e("td",[t._v(t._s(r.title))]),t._v(" "),e("td",{staticClass:"cart-table__price"},[t._v("\n          $"+t._s(r.price)),e("span",[e("h1",{on:{click:function(e){return t.removeItem(n)}}},[t._v("X")])])])])})),t._v(" "),e("div",[e("button",[t._v("Checkout $"+t._s(t.totalCost))])])],2):e("div",{staticClass:"cart-table__empty"},[e("h1",[t._v("Your Cart is Empty :(")])])])])}),[function(){var t=this,e=t._self._c;return e("tr",[e("th",[t._v("Logo")]),t._v(" "),e("th",[t._v("Brand")]),t._v(" "),e("th",[t._v("Product")]),t._v(" "),e("th",[t._v("Price")])])}],!1,null,"f7a8e5b0",null);e.default=component.exports},323:function(t,e,r){"use strict";r.r(e);var n={name:"cart"},o=r(61),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("Header"),t._v(" "),e("CartHeader"),t._v(" "),e("CartTable")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(293).default,CartHeader:r(315).default,CartTable:r(316).default})}}]);