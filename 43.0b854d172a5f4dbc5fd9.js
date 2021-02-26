(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{ouac:function(n,e,t){"use strict";t.r(e),t.d(e,"LinkDocsModule",(function(){return T}));var i={};t.r(i),t.d(i,"default",(function(){return f}));var r={};t.r(r),t.d(r,"default",(function(){return m}));var a=t("sEIs"),o=t("eCHz"),c=t("uYCi"),l=t("EM62"),s=t("P+xO"),b=t("Zn6N"),d=t("7o9V"),u=t("h8DJ"),p=function(){function n(){}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Gb({type:n,selectors:[["app-link-header"]],decls:7,vars:0,consts:[["module","LinkModule"]],template:function(n,e){1&n&&(l.Sb(0,"header"),l.Tc(1,"Link"),l.Rb(),l.Sb(2,"description"),l.Tc(3,"A link (short for hyperlink) is an object, that allows you to jump to a new location when you click or tap it."),l.Rb(),l.Nb(4,"import",0),l.Nb(5,"fd-header-tabs"),l.Nb(6,"router-outlet"))},directives:[s.a,b.a,d.a,u.a,a.g],encapsulation:2}),n}(),f='<a [routerLink]="[\'./\']" fd-link>Standard Link</a> <br /><br />\n<a [routerLink]="[\'./\']" fd-link [emphasized]="true">Emphasized Link</a>\n<br /><br />\n<a fd-link [disabled]="true" aria-disabled="true">Disabled Link</a>\n<br /><br />\n<a [routerLink]="[\'./\']" fd-link>\n    Icon Right Link\n    <fd-icon [glyph]="arrowRight$ | async"></fd-icon>\n</a>\n<br /><br />\n<a [routerLink]="[\'./\']" fd-link>\n    <fd-icon [glyph]="arrowLeft$ | async"></fd-icon>\n    Icon Left Link\n</a>\n<br /><br />\n<div style="background-color:#314a5e;padding:10px">\n    <a fd-link [routerLink]="[\'./\']" fragment="inverted" [inverted]="true">Inverted Link</a>\n</div>',m="import { Component, OnInit } from '@angular/core';\nimport { BehaviorSubject } from 'rxjs';\nimport { RtlService } from '@fundamental-ngx/core';\n\n@Component({\n    selector: 'fd-link-example',\n    templateUrl: './link-example.component.html'\n})\nexport class LinkExampleComponent implements OnInit {\n    arrowRight$: BehaviorSubject<string> = new BehaviorSubject<string>('slim-arrow-right');\n    arrowLeft$: BehaviorSubject<string> = new BehaviorSubject<string>('slim-arrow-left');\n\n    constructor(private rtlService: RtlService) {}\n\n    ngOnInit(): void {\n        if (this.rtlService) {\n            this.rtlService.rtl.subscribe((value) => {\n                this.arrowRight$.next(value ? 'slim-arrow-left' : 'slim-arrow-right');\n                this.arrowLeft$.next(value ? 'slim-arrow-right' : 'slim-arrow-left');\n            });\n        }\n    }\n}\n",k=t("9Cr2"),h=t("dB5E"),w=t("C05f"),L=t("LTOS"),g=t("GjSX"),v=t("GqZa"),S=t("2kYt"),R=function(){return["./"]},x=function(){function n(n){this.rtlService=n,this.arrowRight$=new w.a("slim-arrow-right"),this.arrowLeft$=new w.a("slim-arrow-left")}return n.prototype.ngOnInit=function(){var n=this;this.rtlService&&this.rtlService.rtl.subscribe((function(e){n.arrowRight$.next(e?"slim-arrow-left":"slim-arrow-right"),n.arrowLeft$.next(e?"slim-arrow-right":"slim-arrow-left")}))},n.\u0275fac=function(e){return new(e||n)(l.Mb(L.RtlService))},n.\u0275cmp=l.Gb({type:n,selectors:[["fd-link-example"]],decls:27,vars:19,consts:[["fd-link","",3,"routerLink"],["fd-link","",3,"routerLink","emphasized"],["fd-link","","aria-disabled","true",3,"disabled"],[3,"glyph"],[2,"background-color","#314a5e","padding","10px"],["fd-link","","fragment","inverted",3,"routerLink","inverted"]],template:function(n,e){1&n&&(l.Sb(0,"a",0),l.Tc(1,"Standard Link"),l.Rb(),l.Nb(2,"br"),l.Nb(3,"br"),l.Sb(4,"a",1),l.Tc(5,"Emphasized Link"),l.Rb(),l.Nb(6,"br"),l.Nb(7,"br"),l.Sb(8,"a",2),l.Tc(9,"Disabled Link"),l.Rb(),l.Nb(10,"br"),l.Nb(11,"br"),l.Sb(12,"a",0),l.Tc(13," Icon Right Link "),l.Nb(14,"fd-icon",3),l.lc(15,"async"),l.Rb(),l.Nb(16,"br"),l.Nb(17,"br"),l.Sb(18,"a",0),l.Nb(19,"fd-icon",3),l.lc(20,"async"),l.Tc(21," Icon Left Link\n"),l.Rb(),l.Nb(22,"br"),l.Nb(23,"br"),l.Sb(24,"div",4),l.Sb(25,"a",5),l.Tc(26,"Inverted Link"),l.Rb(),l.Rb()),2&n&&(l.sc("routerLink",l.wc(14,R)),l.Ab(4),l.sc("routerLink",l.wc(15,R))("emphasized",!0),l.Ab(4),l.sc("disabled",!0),l.Ab(4),l.sc("routerLink",l.wc(16,R)),l.Ab(2),l.sc("glyph",l.mc(15,10,e.arrowRight$)),l.Ab(4),l.sc("routerLink",l.wc(17,R)),l.Ab(1),l.sc("glyph",l.mc(20,12,e.arrowLeft$)),l.Ab(6),l.sc("routerLink",l.wc(18,R))("inverted",!0))},directives:[a.e,g.a,v.a],pipes:[S.b],encapsulation:2}),n}(),y=t("gJWE"),N=function(){function n(){this.link=[{language:"html",code:i,fileName:"link-example"},{language:"typescript",code:r,fileName:"link-example",component:"LinkExampleComponent"}]}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Gb({type:n,selectors:[["app-icon"]],decls:7,vars:3,consts:[[3,"id","componentName"],[3,"exampleFiles"]],template:function(n,e){1&n&&(l.Sb(0,"fd-docs-section-title",0),l.Tc(1," Links\n"),l.Rb(),l.Sb(2,"description"),l.Tc(3," Links can have multiple modifiers, to change the way how it looks. Also it deal with `is-visited` flag. Current implementation allows to put any content inside `fd-link` component.\n"),l.Rb(),l.Sb(4,"component-example"),l.Nb(5,"fd-link-example"),l.Rb(),l.Nb(6,"code-example",1)),2&n&&(l.sc("id","basic")("componentName","link"),l.Ab(6),l.sc("exampleFiles",e.link))},directives:[k.a,b.a,h.a,x,y.a],encapsulation:2}),n}(),$=t("MOJJ"),I=[{path:"",component:p,children:[{path:"",component:N},{path:"api",component:o.a,data:{content:c.a.link}}]}],T=function(){function n(){}return n.\u0275mod=l.Kb({type:n}),n.\u0275inj=l.Jb({factory:function(e){return new(e||n)},imports:[[a.f.forChild(I),$.a,L.LinkModule],a.f]}),n}()}}]);