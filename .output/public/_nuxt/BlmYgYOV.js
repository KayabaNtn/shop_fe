import{u as r}from"./DmfvTtO6.js";import{s as e}from"./B-QqIqCZ.js";import{O as a,P as n,x as s,y as i,a4 as u,a6 as p}from"./DxBD9uze.js";import"./CCtnwMF8.js";var d=a`
    .p-radiobutton-group {
        display: inline-flex;
    }
`,m={root:"p-radiobutton-group p-component"},c=n.extend({name:"radiobuttongroup",style:d,classes:m}),l={name:"BaseRadioButtonGroup",extends:e,style:c,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},f={name:"RadioButtonGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||r("radiobutton-group-")}};function g(t,o,h,$,v,B){return i(),s("div",p({class:t.cx("root")},t.ptmi("root")),[u(t.$slots,"default")],16)}f.render=g;export{f as default};
