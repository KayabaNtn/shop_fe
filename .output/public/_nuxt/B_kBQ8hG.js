import t from"./BKbVMWL1.js";import{O as o,P as s,g as n,x as l,y as i,a4 as d,B as p,a6 as a}from"./DxBD9uze.js";import"./Be1fzYNM.js";import"./CCtnwMF8.js";var v=o`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,g={root:"p-overlaybadge"},c=s.extend({name:"overlaybadge",style:v,classes:g}),m={name:"OverlayBadge",extends:t,style:c,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},y={name:"OverlayBadge",extends:m,inheritAttrs:!1,components:{Badge:t}};function u(e,B,b,f,$,h){var r=n("Badge");return i(),l("div",a({class:e.cx("root")},e.ptmi("root")),[d(e.$slots,"default"),p(r,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}y.render=u;export{y as default};
