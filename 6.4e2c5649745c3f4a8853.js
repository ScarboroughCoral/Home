(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{iydT:function(t,o,n){"use strict";n.r(o),n.d(o,"HomeModule",(function(){return f}));var r=n("PCNd"),e=n("ofXK"),c=n("fXoL");let l=(()=>{class t{constructor(){this.fillColor="rgb(255, 0, 0)"}ngOnInit(){}changeColor(){const t=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());this.fillColor=`rgb(${t}, ${o}, ${n})`}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Cb({type:t,selectors:[["app-svg"]],decls:5,vars:1,consts:[["x","0","y","0","width","100","height","100",3,"click"],["x","120","y","50"]],template:function(t,o){1&t&&(c.Wb(),c.Nb(0,"svg"),c.Nb(1,"g"),c.Nb(2,"rect",0),c.Ub("click",(function(){return o.changeColor()})),c.Mb(),c.Nb(3,"text",1),c.lc(4,"click the rectangle to change the fill color"),c.Mb(),c.Mb(),c.Mb()),2&t&&(c.yb(2),c.zb("fill",o.fillColor))},styles:[""]}),t})(),s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Cb({type:t,selectors:[["app-home"]],decls:3,vars:0,template:function(t,o){1&t&&(c.Nb(0,"p"),c.lc(1,"home works!"),c.Mb(),c.Jb(2,"app-svg"))},directives:[l],styles:[""]}),t})();var a=n("tyNb");const i=[{path:"",component:s}];let b=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(o){return new(o||t)},imports:[[a.e.forChild(i)],a.e]}),t})(),f=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(o){return new(o||t)},imports:[[e.b,b,r.a]]}),t})()}}]);