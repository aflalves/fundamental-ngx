(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{bv2q:function(e,i,t){"use strict";t.r(i),t.d(i,"PanelDocsModule",(function(){return j}));var a={};t.r(a),t.d(a,"default",(function(){return v}));var n={};t.r(n),t.d(n,"default",(function(){return x}));var s={};t.r(s),t.d(s,"default",(function(){return h}));var u={};t.r(u),t.d(u,"default",(function(){return N}));var o=t("sEIs"),l=t("eCHz"),r=t("MOJJ"),c=t("uYCi"),d=t("EM62"),m=t("P+xO"),p=t("Zn6N"),b=t("7o9V"),f=t("h8DJ"),g=function(){function e(){}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["app-panel-docs-header"]],decls:26,vars:0,consts:[["module","PanelModule"]],template:function(e,i){1&e&&(d.Sb(0,"header"),d.Tc(1,"Panel"),d.Rb(),d.Sb(2,"description"),d.Tc(3,"\nThe panel is a container for grouping and displaying information. It can be collapsed to save space on the screen.\n"),d.Nb(4,"br"),d.Nb(5,"br"),d.Sb(6,"b"),d.Tc(7,"Use the panel if:"),d.Rb(),d.Nb(8,"br"),d.Nb(9,"br"),d.Tc(10,"\n- You need to group or display information."),d.Nb(11,"br"),d.Tc(12,"\n- You want to give users the option of hiding this information."),d.Nb(13,"br"),d.Tc(14,"\n- You want to show additional information on demand (for example, a panel could show optional input fields for an advanced search).\n"),d.Nb(15,"br"),d.Nb(16,"br"),d.Nb(17,"br"),d.Sb(18,"b"),d.Tc(19,"Do not use the panel if:"),d.Rb(),d.Nb(20,"br"),d.Nb(21,"br"),d.Tc(22,"\n- You are designing an object page. Never use panels in the object page content area.\n"),d.Rb(),d.Nb(23,"import",0),d.Nb(24,"fd-header-tabs"),d.Nb(25,"router-outlet"))},directives:[m.a,p.a,b.a,f.a,o.g],styles:[""]}),e}(),v='<button class="docs-button" fd-button label="Toggle Expand" [attr.aria-pressed]="expanded"\n        (click)="expanded = !expanded"></button>\n<br><br>\nExpanded value is: {{expanded}}\n<br><br><br>\n\n<fd-panel [(expanded)]="expanded" [expandId]="\'panel-expand-1\'" [expandAriaLabel]="\'Panel Expand\'">\n    <h5 fd-panel-title>Panel Header</h5>\n    <div fd-panel-content [ariaLabel]="\'Panel Content\'" [id]="\'panel-content-1\'">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus\n        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.\n        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.\n        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.\n        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.\n        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.\n        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.\n    </div>\n</fd-panel>\n',x='<fd-panel [fixed]="true">\n    <h5 fd-panel-title>Panel Header</h5>\n    <div fd-panel-content [ariaLabel]="\'Panel Content\'" [id]="\'panel-content-2\'">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus \n        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. \n        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. \n        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. \n        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. \n        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. \n        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.\n    </div>\n</fd-panel>',h='<fd-panel [compact]="true" [expandAriaLabel]="\'Panel Expand\'">\n    <h5 fd-panel-title>Panel Header</h5>\n    <div fd-panel-content [ariaLabel]="\'Panel Content\'" [id]="\'panel-content-3\'">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus \n        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. \n        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. \n        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. \n        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. \n        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. \n        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.\n    </div>\n</fd-panel>\n',N='<fd-panel [fixed]="true">\n    <h5 fd-panel-title>Panel Header</h5>\n    <div fd-panel-content [height]="\'100px\'" [ariaLabel]="\'Panel Content\'" [id]="\'panel-content-4\'">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus \n        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. \n        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. \n        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. \n        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. \n        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. \n        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus \n        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. \n        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. \n        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. \n        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. \n        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. \n        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.\n    </div>\n</fd-panel>',S=t("9Cr2"),V=t("dB5E"),q=t("0b/r"),T=t("66i+"),R=t("1KGE"),A=t("kFOu"),P=function(){function e(){this.expanded=!0}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["fd-panel-expandable-example"]],decls:12,vars:7,consts:[["fd-button","","label","Toggle Expand",1,"docs-button",3,"click"],[3,"expanded","expandId","expandAriaLabel","expandedChange"],["fd-panel-title",""],["fd-panel-content","",3,"ariaLabel","id"]],template:function(e,i){1&e&&(d.Sb(0,"button",0),d.gc("click",(function(){return i.expanded=!i.expanded})),d.Rb(),d.Nb(1,"br"),d.Nb(2,"br"),d.Tc(3),d.Nb(4,"br"),d.Nb(5,"br"),d.Nb(6,"br"),d.Sb(7,"fd-panel",1),d.gc("expandedChange",(function(e){return i.expanded=e})),d.Sb(8,"h5",2),d.Tc(9,"Panel Header"),d.Rb(),d.Sb(10,"div",3),d.Tc(11," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),d.Rb(),d.Rb()),2&e&&(d.Bb("aria-pressed",i.expanded),d.Ab(3),d.Vc("\nExpanded value is: ",i.expanded,"\n"),d.Ab(4),d.sc("expanded",i.expanded)("expandId","panel-expand-1")("expandAriaLabel","Panel Expand"),d.Ab(3),d.sc("ariaLabel","Panel Content")("id","panel-content-1"))},directives:[q.a,T.a,R.a,A.a],encapsulation:2}),e}(),C=t("gJWE"),L=t("ekBi"),M=function(){function e(){}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["fd-panel-fixed-example"]],decls:5,vars:3,consts:[[3,"fixed"],["fd-panel-title",""],["fd-panel-content","",3,"ariaLabel","id"]],template:function(e,i){1&e&&(d.Sb(0,"fd-panel",0),d.Sb(1,"h5",1),d.Tc(2,"Panel Header"),d.Rb(),d.Sb(3,"div",2),d.Tc(4," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),d.Rb(),d.Rb()),2&e&&(d.sc("fixed",!0),d.Ab(3),d.sc("ariaLabel","Panel Content")("id","panel-content-2"))},directives:[T.a,R.a,A.a],encapsulation:2}),e}(),E=function(){function e(){}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["fd-panel-compact-example"]],decls:5,vars:4,consts:[[3,"compact","expandAriaLabel"],["fd-panel-title",""],["fd-panel-content","",3,"ariaLabel","id"]],template:function(e,i){1&e&&(d.Sb(0,"fd-panel",0),d.Sb(1,"h5",1),d.Tc(2,"Panel Header"),d.Rb(),d.Sb(3,"div",2),d.Tc(4," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),d.Rb(),d.Rb()),2&e&&(d.sc("compact",!0)("expandAriaLabel","Panel Expand"),d.Ab(3),d.sc("ariaLabel","Panel Content")("id","panel-content-3"))},directives:[T.a,R.a,A.a],encapsulation:2}),e}(),w=function(){function e(){}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["fd-panel-fixed-height-example"]],decls:5,vars:4,consts:[[3,"fixed"],["fd-panel-title",""],["fd-panel-content","",3,"height","ariaLabel","id"]],template:function(e,i){1&e&&(d.Sb(0,"fd-panel",0),d.Sb(1,"h5",1),d.Tc(2,"Panel Header"),d.Rb(),d.Sb(3,"div",2),d.Tc(4," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),d.Rb(),d.Rb()),2&e&&(d.sc("fixed",!0),d.Ab(3),d.sc("height","100px")("ariaLabel","Panel Content")("id","panel-content-4"))},directives:[T.a,R.a,A.a],encapsulation:2}),e}(),F=function(){function e(){this.panelExpandable=[{language:"html",fileName:"panel-expandable-example",code:a}],this.panelFixed=[{language:"html",fileName:"panel-fixed-example",code:n}],this.panelCompact=[{language:"html",fileName:"panel-compact-example",code:s}],this.panelFixedHeight=[{language:"html",fileName:"panel-fixed-height-example",code:u}]}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["app-panel"]],decls:52,vars:12,consts:[[3,"id","componentName"],[3,"exampleFiles"]],template:function(e,i){1&e&&(d.Sb(0,"fd-docs-section-title",0),d.Tc(1," Expandable Panel\n"),d.Rb(),d.Sb(2,"description"),d.Tc(3," Expandable panels are much like fixed panels, except their content can be expanded and collapsed (including the info toolbar, if available).\n"),d.Rb(),d.Sb(4,"component-example"),d.Nb(5,"fd-panel-expandable-example"),d.Rb(),d.Nb(6,"code-example",1),d.Nb(7,"separator"),d.Sb(8,"fd-docs-section-title",0),d.Tc(9," Fixed Panel\n"),d.Rb(),d.Sb(10,"description"),d.Tc(11," Fixed panels are useful for grouping custom content. They include headers and info toolbars. To create a fixed panel, add "),d.Sb(12,"code"),d.Tc(13,'[fixed]="true"'),d.Rb(),d.Tc(14," to the Panel.\n"),d.Rb(),d.Sb(15,"component-example"),d.Nb(16,"fd-panel-fixed-example"),d.Rb(),d.Nb(17,"code-example",1),d.Nb(18,"separator"),d.Sb(19,"fd-docs-section-title",0),d.Tc(20," Compact Panel\n"),d.Rb(),d.Sb(21,"description"),d.Tc(22," For a compact panel, set the "),d.Sb(23,"code"),d.Tc(24,"compact"),d.Rb(),d.Tc(25," property to "),d.Sb(26,"code"),d.Tc(27,"true"),d.Rb(),d.Tc(28,".\n"),d.Rb(),d.Sb(29,"component-example"),d.Nb(30,"fd-panel-compact-example"),d.Rb(),d.Nb(31,"code-example",1),d.Nb(32,"separator"),d.Sb(33,"fd-docs-section-title",0),d.Tc(34," Fixed Height Content Panel\n"),d.Rb(),d.Sb(35,"description"),d.Tc(36," When the height of the panel\u2019s content is set to a fixed size, the content area can be scrolled through. To set the height of the panel's content use the "),d.Sb(37,"code"),d.Tc(38,"height"),d.Rb(),d.Tc(39," property. Available options are: "),d.Sb(40,"code"),d.Tc(41,"height"),d.Rb(),d.Tc(42,", "),d.Sb(43,"code"),d.Tc(44,"minHeight"),d.Rb(),d.Tc(45," and "),d.Sb(46,"code"),d.Tc(47,"maxHeight"),d.Rb(),d.Tc(48,".\n"),d.Rb(),d.Sb(49,"component-example"),d.Nb(50,"fd-panel-fixed-height-example"),d.Rb(),d.Nb(51,"code-example",1)),2&e&&(d.sc("id","panelExpandable")("componentName","panel"),d.Ab(6),d.sc("exampleFiles",i.panelExpandable),d.Ab(2),d.sc("id","panelFixed")("componentName","panel"),d.Ab(9),d.sc("exampleFiles",i.panelFixed),d.Ab(2),d.sc("id","panelCompact")("componentName","panel"),d.Ab(12),d.sc("exampleFiles",i.panelCompact),d.Ab(2),d.sc("id","panelFixedHeight")("componentName","panel"),d.Ab(18),d.sc("exampleFiles",i.panelFixedHeight))},directives:[S.a,p.a,V.a,P,C.a,L.a,M,E,w],encapsulation:2}),e}(),H=t("LTOS"),y=[{path:"",component:g,children:[{path:"",component:F},{path:"api",component:l.a,data:{content:c.a.panel}}]}],j=function(){function e(){}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(i){return new(i||e)},imports:[[o.f.forChild(y),r.a,H.PanelModule],o.f]}),e}()}}]);