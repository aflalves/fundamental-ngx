(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{TUcW:function(e,n,t){"use strict";t.r(n),t.d(n,"FlexibleColumnLayoutDocsModule",(function(){return D}));var o={};t.r(o),t.d(o,"default",(function(){return r}));var l={};t.r(l),t.d(l,"default",(function(){return b}));var c={};t.r(c),t.d(c,"default",(function(){return m}));var i=t("sEIs"),a=t("LTOS"),u=t("MOJJ"),d=t("eCHz"),s=t("uYCi"),r='<button fd-button (click)="enterFullscreenExample()">Click to open full screen</button>\n\n<div cdkScrollable class="docs-fcl-example-overlay" #overlay>\n    <ng-container *ngIf="fullscreen">\n        <div class="docs-fcl-example-overlay-content">\n            <div class="docs-fcl-example-button">\n                <button fd-button (click)="exitFullscreenExample($event)">Exit Example</button>\n            </div>\n            \n            \x3c!-- Flexible Column Layout --\x3e\n            <fd-flexible-column-layout [(layout)]="localLayout">\n                <ng-template #startColumn>\n                    <div class="docs-fcl-example-section">\n                        <h2>Start Column</h2>\n                        <div>\n                            <button class="fd-button" (click)="changeLayout(\'TwoColumnsStartExpanded\')">\n                                Open Column 2\n                            </button>\n                        </div>\n                    </div>\n                </ng-template>\n                <ng-template #midColumn>\n                    <div class="docs-fcl-example-section">\n                        <h2>Mid Column</h2>\n                        <div>\n                            <button class="fd-button" (click)="changeLayout(\'ThreeColumnsMidExpanded\')">\n                                Open Column 3\n                            </button>\n                        </div>\n                    </div>\n                </ng-template>\n                <ng-template #endColumn>\n                    <div class="docs-fcl-example-section">\n                        <h2>End Column</h2>\n                        <div>\n                            <button \n                                *ngIf="localLayout !== \'OneColumnEndFullScreen\'"\n                                class="fd-button" \n                                (click)="changeLayout(\'OneColumnEndFullScreen\')">Expand Column 3</button>\n                            <button \n                                *ngIf="localLayout !== \'OneColumnEndFullScreen\'"\n                                class="fd-button" \n                                (click)="changeLayout(\'TwoColumnsMidExpanded\')">Close Column 3</button>\n                            <button \n                                class="fd-button" \n                                *ngIf="localLayout === \'OneColumnEndFullScreen\'"\n                                (click)="changeLayout(\'ThreeColumnsMidExpanded\')">Exit Full Screen Column 3</button>\n                        </div>\n                    </div>\n                </ng-template>\n            </fd-flexible-column-layout>\n        </div>\n    </ng-container>\n</div>\n  ',b="import { Component, ElementRef, ViewChild } from '@angular/core';\n\n@Component({\n    selector: 'fd-flexible-column-layout-example',\n    templateUrl: './flexible-column-layout-example.component.html',\n    styleUrls: ['flexible-column-layout-example.component.scss']\n})\nexport class FlexibleColumnLayoutExampleComponent {\n    /**\n     * documentation related property\n     * provides access to the HTML element with \"overlay\" reference\n     */\n    @ViewChild('overlay')\n    overlay: ElementRef<HTMLElement>;\n\n    /**\n     * documentation related property\n     * specifies if the doc example is rendered in fullscreen or not\n     */\n    fullscreen = false;\n\n    /**\n     * documentation related property\n     * sets the initial layout of the component to 'OneColumnStartFullScreen'\n     * sets a new layout for the component \n     */\n    localLayout = 'OneColumnStartFullScreen';\n\n    /**\n     * this function is reacting to events (button clicks) and \n     * updates the local property which sets a new layout for the component.\n     * Available values for the layouts include:\n     * 'OneColumnStartFullScreen' | 'OneColumnMidFullScreen' | 'OneColumnEndFullScreen' |\n     * 'TwoColumnsStartExpanded' | 'TwoColumnsMidExpanded' | 'TwoColumnsEndExpanded' | \n     * 'ThreeColumnsMidExpanded' | 'ThreeColumnsEndExpanded' | 'ThreeColumnsStartMinimized' | \n     * 'ThreeColumnsEndMinimized';\n     */\n    changeLayout(newValue: string): void {\n        this.localLayout = newValue;\n    }\n\n    /**\n     * documentation related function\n     * opens the example in full screen\n     */\n    enterFullscreenExample(): void {\n        this.fullscreen = true;\n        this.overlay.nativeElement.style.width = '100%';\n    }\n    \n    /**\n     * documentation related function\n     * exits the full screen mode of the example\n     */\n    exitFullscreenExample(event: Event): void {\n        event.stopPropagation();\n        this.fullscreen = false;\n        this.overlay.nativeElement.style.width = '0%';\n    }\n}\n",m=".docs-fcl-example-overlay {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    background-color: rgb(255, 255, 255);\n    overflow-x: hidden;\n}\n\n.docs-fcl-example-overlay-content {\n    position: relative;\n    width: 100%;\n}\n\n.docs-fcl-example-button {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0.5rem 2rem;\n    background: #394a5d;\n}\n\n.docs-fcl-example-section {\n    height: 100vh;\n\n    h2 {\n        font-size: 30px;\n        text-align: center;\n    }\n\n    div {\n        display: flex;\n        justify-content: space-around;\n        margin: 20px;\n    }\n}\n",p=t("EM62"),f=t("9Cr2"),h=t("dB5E"),x=t("0b/r"),S=t("2kYt"),y=t("eH/q"),T=["overlay"];function C(e,n){if(1&e){var t=p.Tb();p.Sb(0,"div",10),p.Sb(1,"h2"),p.Tc(2,"Start Column"),p.Rb(),p.Sb(3,"div"),p.Sb(4,"button",11),p.gc("click",(function(){return p.Gc(t),p.kc(2).changeLayout("TwoColumnsStartExpanded")})),p.Tc(5," Open Column 2 "),p.Rb(),p.Rb(),p.Rb()}}function g(e,n){if(1&e){var t=p.Tb();p.Sb(0,"div",10),p.Sb(1,"h2"),p.Tc(2,"Mid Column"),p.Rb(),p.Sb(3,"div"),p.Sb(4,"button",11),p.gc("click",(function(){return p.Gc(t),p.kc(2).changeLayout("ThreeColumnsMidExpanded")})),p.Tc(5," Open Column 3 "),p.Rb(),p.Rb(),p.Rb()}}function v(e,n){if(1&e){var t=p.Tb();p.Sb(0,"button",11),p.gc("click",(function(){return p.Gc(t),p.kc(3).changeLayout("OneColumnEndFullScreen")})),p.Tc(1,"Expand Column 3"),p.Rb()}}function R(e,n){if(1&e){var t=p.Tb();p.Sb(0,"button",11),p.gc("click",(function(){return p.Gc(t),p.kc(3).changeLayout("TwoColumnsMidExpanded")})),p.Tc(1,"Close Column 3"),p.Rb()}}function E(e,n){if(1&e){var t=p.Tb();p.Sb(0,"button",11),p.gc("click",(function(){return p.Gc(t),p.kc(3).changeLayout("ThreeColumnsMidExpanded")})),p.Tc(1,"Exit Full Screen Column 3"),p.Rb()}}function w(e,n){if(1&e&&(p.Sb(0,"div",10),p.Sb(1,"h2"),p.Tc(2,"End Column"),p.Rb(),p.Sb(3,"div"),p.Rc(4,v,2,0,"button",12),p.Rc(5,R,2,0,"button",12),p.Rc(6,E,2,0,"button",12),p.Rb(),p.Rb()),2&e){var t=p.kc(2);p.Ab(4),p.sc("ngIf","OneColumnEndFullScreen"!==t.localLayout),p.Ab(1),p.sc("ngIf","OneColumnEndFullScreen"!==t.localLayout),p.Ab(1),p.sc("ngIf","OneColumnEndFullScreen"===t.localLayout)}}function F(e,n){if(1&e){var t=p.Tb();p.Qb(0),p.Sb(1,"div",4),p.Sb(2,"div",5),p.Sb(3,"button",0),p.gc("click",(function(e){return p.Gc(t),p.kc().exitFullscreenExample(e)})),p.Tc(4,"Exit Example"),p.Rb(),p.Rb(),p.Sb(5,"fd-flexible-column-layout",6),p.gc("layoutChange",(function(e){return p.Gc(t),p.kc().localLayout=e})),p.Rc(6,C,6,0,"ng-template",null,7,p.Sc),p.Rc(8,g,6,0,"ng-template",null,8,p.Sc),p.Rc(10,w,7,3,"ng-template",null,9,p.Sc),p.Rb(),p.Rb(),p.Pb()}if(2&e){var o=p.kc();p.Ab(5),p.sc("layout",o.localLayout)}}var M=function(){function e(){this.fullscreen=!1,this.localLayout="OneColumnStartFullScreen"}return e.prototype.changeLayout=function(e){this.localLayout=e},e.prototype.enterFullscreenExample=function(){this.fullscreen=!0,this.overlay.nativeElement.style.width="100%"},e.prototype.exitFullscreenExample=function(e){e.stopPropagation(),this.fullscreen=!1,this.overlay.nativeElement.style.width="0%"},e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p.Gb({type:e,selectors:[["fd-flexible-column-layout-example"]],viewQuery:function(e,n){var t;1&e&&p.Yc(T,!0),2&e&&p.Dc(t=p.hc())&&(n.overlay=t.first)},decls:5,vars:1,consts:[["fd-button","",3,"click"],["cdkScrollable","",1,"docs-fcl-example-overlay"],["overlay",""],[4,"ngIf"],[1,"docs-fcl-example-overlay-content"],[1,"docs-fcl-example-button"],[3,"layout","layoutChange"],["startColumn",""],["midColumn",""],["endColumn",""],[1,"docs-fcl-example-section"],[1,"fd-button",3,"click"],["class","fd-button",3,"click",4,"ngIf"]],template:function(e,n){1&e&&(p.Sb(0,"button",0),p.gc("click",(function(){return n.enterFullscreenExample()})),p.Tc(1,"Click to open full screen"),p.Rb(),p.Sb(2,"div",1,2),p.Rc(4,F,12,1,"ng-container",3),p.Rb()),2&e&&(p.Ab(4),p.sc("ngIf",n.fullscreen))},directives:[x.a,S.t,y.a],styles:[".docs-fcl-example-overlay[_ngcontent-%COMP%]{height:100%;width:0;position:fixed;z-index:10;top:0;left:0;background-color:#fff;overflow-x:hidden}.docs-fcl-example-overlay-content[_ngcontent-%COMP%]{position:relative;width:100%}.docs-fcl-example-button[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding:.5rem 2rem;background:#394a5d}.docs-fcl-example-section[_ngcontent-%COMP%]{height:100vh}.docs-fcl-example-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;text-align:center}.docs-fcl-example-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;margin:20px}"]}),e}(),k=t("gJWE"),L=function(){function e(){this.defaultFlexibleColumnLayout=[{language:"html",code:o,fileName:"flexible-column-layout-example",scssFileCode:c},{language:"typescript",component:"FlexibleColumnLayoutExampleComponent",code:l,fileName:"flexible-column-layout-example"}]}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p.Gb({type:e,selectors:[["fd-flexible-column-layout-docs"]],decls:5,vars:1,consts:[["id","default","componentName","FlexibleColumnLayoutComponent"],[3,"exampleFiles"]],template:function(e,n){1&e&&(p.Sb(0,"fd-docs-section-title",0),p.Tc(1," Flexible Column Layout\n"),p.Rb(),p.Sb(2,"component-example"),p.Nb(3,"fd-flexible-column-layout-example"),p.Rb(),p.Nb(4,"code-example",1)),2&e&&(p.Ab(4),p.sc("exampleFiles",n.defaultFlexibleColumnLayout))},directives:[f.a,h.a,M,k.a],encapsulation:2}),e}(),O=t("P+xO"),z=t("Zn6N"),P=t("7o9V"),G=t("h8DJ"),I=[{path:"",component:function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p.Gb({type:e,selectors:[["fd-flexible-column-layout-docs-header"]],decls:163,vars:0,consts:[["module","FlexibleColumnLayoutModule"],[2,"color","green"],[2,"color","red"],["target","_blank","href","https://experience.sap.com/fiori-design-web/flexible-column-layout/#possible-layouts"],["target","_blank","href","https://experience.sap.com/fiori-design-web/flexible-column-layout/#components"],["target","_blank","href","https://experience.sap.com/fiori-design-web/flexible-column-layout/#responsiveness"]],template:function(e,n){1&e&&(p.Sb(0,"header"),p.Tc(1,"Flexible Column Layout"),p.Rb(),p.Sb(2,"description"),p.Tc(3," The flexible column layout is a layout control that displays multiple floorplans on a single page. This allows faster and more fluid navigation between multiple floorplans than the usual page-by-page navigation. The flexible column layout offers different layouts with up to three columns. Users can expand the column they want to focus on, switch between different layouts, and view the rightmost column in full screen mode.\n"),p.Rb(),p.Nb(4,"import",0),p.Sb(5,"description"),p.Sb(6,"p"),p.Tc(7,"Depending on the current layout and display size, the flexible column layout consists of one, two, or three horizontally-aligned columns. Each column contains content that is not provided by the flexible column layout itself. This content is passed to the component through "),p.Sb(8,"code"),p.Tc(9,"ng-template"),p.Rb(),p.Tc(10," and using the template references "),p.Sb(11,"code"),p.Tc(12,"#startColumn"),p.Rb(),p.Tc(13,", "),p.Sb(14,"code"),p.Tc(15,"#midColumn"),p.Rb(),p.Tc(16," and "),p.Sb(17,"code"),p.Tc(18,"#endColumn"),p.Rb(),p.Tc(19,"."),p.Rb(),p.Sb(20,"h2"),p.Tc(21,"Possible Layouts"),p.Rb(),p.Sb(22,"ul"),p.Sb(23,"li"),p.Sb(24,"b"),p.Tc(25,"full screen layouts"),p.Rb(),p.Sb(26,"ul"),p.Sb(27,"li"),p.Tc(28,"start column in full screen - (start: 100%, mid: 0, end: 0) - "),p.Sb(29,"code"),p.Tc(30,"'OneColumnStartFullScreen'"),p.Rb(),p.Rb(),p.Sb(31,"li"),p.Tc(32,"middle column in full screen - (start: 0, mid: 100%, end: 0) - "),p.Sb(33,"code"),p.Tc(34,"'OneColumnMidFullScreen'"),p.Rb(),p.Rb(),p.Sb(35,"li"),p.Tc(36,"end column in full screen - (start: 0, mid: 0, end: 100%) - "),p.Sb(37,"code"),p.Tc(38,"'OneColumnEndFullScreen'"),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(39,"li"),p.Sb(40,"b"),p.Tc(41,"2-column layouts"),p.Rb(),p.Sb(42,"ul"),p.Sb(43,"li"),p.Tc(44,"start column expanded - (start: 67%, mid: 33%, end: 0) - "),p.Sb(45,"code"),p.Tc(46,"'TwoColumnsStartExpanded'"),p.Rb(),p.Rb(),p.Sb(47,"li"),p.Tc(48,"middle column expanded - (start: 33%, mid: 67%, end: 0) - "),p.Sb(49,"code"),p.Tc(50,"'TwoColumnsMidExpanded'"),p.Rb(),p.Rb(),p.Sb(51,"li"),p.Tc(52,"end column expanded - (start: 0, mid: 33%, end: 67%) - "),p.Sb(53,"code"),p.Tc(54,"'TwoColumnsEndExpanded'"),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(55,"li"),p.Sb(56,"b"),p.Tc(57,"3-column layouts"),p.Rb(),p.Sb(58,"ul"),p.Sb(59,"li"),p.Tc(60,"middle column expanded - (start: 25%, mid: 50%, end: 25%) - "),p.Sb(61,"code"),p.Tc(62,"'ThreeColumnsMidExpanded'"),p.Rb(),p.Rb(),p.Sb(63,"li"),p.Tc(64,"end column expanded - (start: 25%, mid: 25%, end: 50%) - "),p.Sb(65,"code"),p.Tc(66,"'ThreeColumnsEndExpanded'"),p.Rb(),p.Rb(),p.Sb(67,"li"),p.Tc(68,"start column minimized - (start: 0, mid: 67%, end: 33%) - "),p.Sb(69,"code"),p.Tc(70,"'ThreeColumnsStartMinimized'"),p.Rb(),p.Rb(),p.Sb(71,"li"),p.Tc(72,"end column minimized - (start: 33%, mid: 67%, end: 0) - "),p.Sb(73,"code"),p.Tc(74,"'ThreeColumnsEndMinimized'"),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(75,"h4"),p.Tc(76,"Size LG and XL (Desktop)"),p.Rb(),p.Sb(77,"p"),p.Sb(78,"b",1),p.Tc(79,"Possible variations"),p.Rb(),p.Tc(80," - 'OneColumnStartFullScreen', 'OneColumnMidFullScreen', 'OneColumnEndFullScreen', 'TwoColumnsStartExpanded', 'TwoColumnsMidExpanded', 'ThreeColumnsMidExpanded', 'ThreeColumnsEndExpanded', 'ThreeColumnsStartMinimized' and 'ThreeColumnsEndMinimized'."),p.Rb(),p.Sb(81,"h4"),p.Tc(82,"Size MD (Tablet)"),p.Rb(),p.Sb(83,"p"),p.Tc(84,"There is no 3-column layout due to the limited width. However, you can still load 3 pages in size MD. Instead of showing them all side-by-side, the user can switch between columns 1/2 and 2/3 using 'ThreeColumnsStartMinimized' and 'ThreeColumnsEndMinimized'. "),p.Rb(),p.Sb(85,"p"),p.Sb(86,"b",1),p.Tc(87,"Possible variations"),p.Rb(),p.Tc(88," - 'OneColumnStartFullScreen', 'OneColumnMidFullScreen', 'OneColumnEndFullScreen', 'TwoColumnsStartExpanded', 'TwoColumnsMidExpanded', 'TwoColumnsEndExpanded', 'ThreeColumnsStartMinimized' and 'ThreeColumnsEndMinimized'."),p.Rb(),p.Sb(89,"h4"),p.Tc(90,"Size SM (Phone)"),p.Rb(),p.Sb(91,"p"),p.Tc(92,"Because of the limited width, there is no multi-column layout for size SM. Instead, the rightmost column is shown in full screen mode."),p.Rb(),p.Sb(93,"p"),p.Sb(94,"b",1),p.Tc(95,"Possible variations"),p.Rb(),p.Tc(96," - 'OneColumnStartFullScreen', 'OneColumnMidFullScreen' and 'OneColumnEndFullScreen'."),p.Rb(),p.Sb(97,"p"),p.Sb(98,"b",2),p.Tc(99,"Note:"),p.Rb(),p.Tc(100," The column separators cannot be used to expand a column to full screen mode. The layout arrow is located next to the divider and points in the direction in which a column can be expanded. If a column cannot be expanded any further, the action is hidden."),p.Rb(),p.Sb(101,"p"),p.Sb(102,"b"),p.Tc(103,"The user cannot change the size of a column freely (for example, (start: 15%, mid: 85%, end: 0))."),p.Rb(),p.Rb(),p.Tc(104," For more information about Layouts visit the "),p.Sb(105,"a",3),p.Tc(106,"Fiori Design Guidelines."),p.Rb(),p.Sb(107,"p"),p.Tc(108," The navigation through the flexible column layout (forward and backwards), as well as the actions for entering and exiting full screen mode and closing columns are not provided automatically by the flexible column layout control, and need to be implemented manually. This can be done by reacting to events, such as button click, and updating the "),p.Sb(109,"code"),p.Tc(110,"[layout]"),p.Rb(),p.Tc(111," property of the "),p.Sb(112,"code"),p.Tc(113,"fd-flexible-column-layout"),p.Rb(),p.Tc(114," with the desired value. The same "),p.Sb(115,"code"),p.Tc(116,"[layout]"),p.Rb(),p.Tc(117," property is used to specify the inital layout of the component. "),p.Rb(),p.Sb(118,"p"),p.Tc(119,"For example, setting "),p.Sb(120,"code"),p.Tc(121,"[layout]=\"'TwoColumnsMidExpanded'\""),p.Rb(),p.Tc(122," will render a 2-column layout with middle column expanded. "),p.Rb(),p.Sb(123,"p"),p.Tc(124," For available navigation and close sequences visit the "),p.Sb(125,"a",4),p.Tc(126,"Fiori Design Guidelines."),p.Rb(),p.Rb(),p.Sb(127,"h2"),p.Tc(128,"Responsiveness"),p.Rb(),p.Sb(129,"p"),p.Tc(130,"The flexible column layout changes its behavior for sizes LG, MD and SM in real time whenever the user resizes the screen. For more information visit the "),p.Sb(131,"a",5),p.Tc(132,"Responsiveness"),p.Rb(),p.Tc(133," section of Fiori Design Guidelines. "),p.Rb(),p.Sb(134,"p"),p.Tc(135,"By default, the Flexible Column Layout applies the Fiori 3 break points: "),p.Rb(),p.Sb(136,"ul"),p.Sb(137,"li"),p.Tc(138,"Size SM: max-width: 960px"),p.Rb(),p.Sb(139,"li"),p.Tc(140,"Size MD: min-width: 961px and max-width: 1280px"),p.Rb(),p.Sb(141,"li"),p.Tc(142,"Size LG/Size XL: min-width: 1281px"),p.Rb(),p.Rb(),p.Sb(143,"p"),p.Tc(144,"The component also provides a default behaviour for managing the screen resizing. "),p.Nb(145,"br"),p.Tc(146," To overwrite the default breakpoints use the "),p.Sb(147,"code"),p.Tc(148,"smBreakPoint"),p.Rb(),p.Tc(149," and "),p.Sb(150,"code"),p.Tc(151,"lgBreakPoint"),p.Rb(),p.Tc(152," properties. It's also possible to provide a custom function that will handle the resizing of the screen. Use the "),p.Sb(153,"code"),p.Tc(154,"customOnResizeFunction"),p.Rb(),p.Tc(155," property to overwrite the default behaviour. "),p.Rb(),p.Sb(156,"p"),p.Tc(157,"The "),p.Sb(158,"code"),p.Tc(159,"backgroundDesign"),p.Rb(),p.Tc(160,' property specifies the background design of the column layout. The default is set to "solid". The other two options include "translucent" and "transparent".'),p.Rb(),p.Rb(),p.Nb(161,"fd-header-tabs"),p.Nb(162,"router-outlet"))},directives:[O.a,z.a,P.a,G.a,i.g],styles:["code[_ngcontent-%COMP%] {\n            color: red;\n        }"]}),e}(),children:[{path:"",component:L},{path:"api",component:d.a,data:{content:s.a.flexibleColumnLayout}}]}],D=function(){function e(){}return e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({factory:function(n){return new(n||e)},imports:[[i.f.forChild(I),u.a,a.FlexibleColumnLayoutModule],i.f]}),e}()}}]);