(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00d32cd0"],{"63b7":function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"O-nama"},[i("v-carousel",{attrs:{cycle:"","show-arrows-on-hover":"",interval:"3000"}},t._l(t.items,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1),i("p",{staticClass:"pt-9 text-center"},[t._v("Pa onda nesto o samoj klini i osoblju ko sve radi")]),i("p",{staticClass:"mb-10 text-center"},[t._v("Sve sto zelite")]),i("p",{staticClass:"mb-10 text-center"},[t._v("ds")]),i("p",{staticClass:"mb-10 text-center"},[t._v("ds")]),i("p",{staticClass:"mb-10 text-center"},[t._v("ds")])],1)},s=[],o={data:function(){return{items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]}}},r=o,a=i("2877"),l=i("6544"),c=i.n(l),u=(i("a9e3"),i("5530")),h=(i("63b7"),i("f665")),d=i("afdd"),m=i("9d26"),p=i("37c6"),f=i("604c"),v=f["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return f["a"].options.computed.classes.call(this)}},methods:{genData:f["a"].options.methods.genData}}),g=i("80d2"),w=i("d9bd"),T=h["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(u["a"])({},h["a"].options.computed.classes.call(this),{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(w["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:h["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(d["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(m["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(v,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(p["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=h["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(g["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),b=i("9d65"),C=i("4e82"),y=i("c3f0"),j=i("58df"),$=Object(j["a"])(b["a"],Object(C["a"])("windowGroup","v-window-item","v-window")),_=$.extend().extend().extend({name:"v-window-item",directives:{Touch:y["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(g["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(g["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),D=i("adda"),k=i("1c87"),x=Object(j["a"])(_,k["a"]),B=x.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(D["a"],{staticClass:"v-carousel__item",props:Object(u["a"])({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(g["k"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),G=Object(a["a"])(r,n,s,!1,null,null,null);e["default"]=G.exports;c()(G,{VCarousel:T,VCarouselItem:B})}}]);
//# sourceMappingURL=chunk-00d32cd0.c8523b07.js.map