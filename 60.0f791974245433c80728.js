(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"3skf":function(e,i,a){"use strict";a.r(i),a.d(i,"QuickViewDocsModule",(function(){return Me}));var n={};a.r(n),a.d(n,"default",(function(){return s}));var t={};a.r(t),a.d(t,"default",(function(){return m}));var l={};a.r(l),a.d(l,"default",(function(){return v}));var o={};a.r(o),a.d(o,"default",(function(){return g}));var c={};a.r(c),a.d(c,"default",(function(){return w}));var u={};a.r(u),a.d(u,"default",(function(){return k}));var r=a("sEIs"),d=a("eCHz"),b=a("MOJJ"),p=a("uYCi"),f=a("LTOS"),s='<div class="example-wrapper">\n    <fd-quick-view [id]="data.id">\n        <fd-quick-view-subheader>\n            <fd-avatar [image]="data.subHeader.avatar" size="s"></fd-avatar>\n            <fd-quick-view-subheader-title>\n                {{ data.subHeader.title }}\n            </fd-quick-view-subheader-title>\n            <fd-quick-view-subheader-subtitle>\n                {{ data.subHeader.subtitle }}\n            </fd-quick-view-subheader-subtitle>\n        </fd-quick-view-subheader>\n\n        <fd-quick-view-group *ngFor="let group of data.groups">\n            <fd-quick-view-group-title>\n                {{ group.title }}\n            </fd-quick-view-group-title>\n            <fd-quick-view-group-item *ngFor="let item of group.items">\n                <fd-quick-view-group-item-label>\n                    {{ item.label }}\n                </fd-quick-view-group-item-label>\n                <fd-quick-view-group-item-content>\n                    <ng-container [ngSwitch]="item.label">\n                        <a *ngSwitchCase="item.label === \'Mobile\' || item.label === \'Phone\' ? item.label : \'\'"\n                           [href]="\'tel:\' + item.value"\n                           [innerText]="item.value"\n                           fd-link\n                        ></a>\n                        <a *ngSwitchCase="\'Email\'" [href]="\'mailto:\' + item.value" [innerText]="item.value" fd-link></a>\n                        <div *ngSwitchDefault [innerText]="item.value"></div>\n                    </ng-container>\n                </fd-quick-view-group-item-content>\n            </fd-quick-view-group-item>\n        </fd-quick-view-group>\n    </fd-quick-view>\n</div>\n',m="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-quick-view-base-example',\n    styles: ['.example-wrapper { background-color: #fff; }'],\n    templateUrl: './quick-view-base-example.component.html'\n})\nexport class QuickViewBaseExampleComponent {\n    data = {\n        id: 'employee-base',\n        title: 'Employee',\n        subHeader: {\n            title: 'Michael Adams',\n            subtitle: 'Account Manager',\n            avatar: 'http://placeimg.com/500/500/people'\n        },\n        groups: [{\n            title: 'Contact Details',\n            items: [{\n                label: 'Mobile',\n                value: '+1 605 555 5555'\n            }, {\n                label: 'Phone',\n                value: '+1 316 555 5555'\n            }, {\n                label: 'Email',\n                value: 'michael_adams@example.com'\n            }]\n        }, {\n            title: 'Company',\n            items: [{\n                label: 'Name',\n                value: 'Company A'\n            }, {\n                label: 'Address',\n                value: '718 Main Street, Anytown, SD 57401, USA'\n            }]\n        }]\n    };\n}\n",v='<div class="fd-docs-flex-display-helper">\n    <fd-popover placement="right-start" [noArrow]="false">\n        <fd-popover-control>\n            <button fd-button label="Open Popover"></button>\n        </fd-popover-control>\n\n        <fd-popover-body>\n            <fd-quick-view [id]="data.id">\n                <fd-quick-view-title align="middle">{{ data.title }}</fd-quick-view-title>\n\n                <fd-quick-view-subheader>\n                    <fd-avatar [image]="data.subHeader.avatar" size="s"></fd-avatar>\n                    <fd-quick-view-subheader-title>\n                        {{ data.subHeader.title }}\n                    </fd-quick-view-subheader-title>\n                    <fd-quick-view-subheader-subtitle>\n                        {{ data.subHeader.subtitle }}\n                    </fd-quick-view-subheader-subtitle>\n                </fd-quick-view-subheader>\n\n                <fd-quick-view-group *ngFor="let group of data.groups">\n                    <fd-quick-view-group-title>\n                        {{ group.title }}\n                    </fd-quick-view-group-title>\n                    <fd-quick-view-group-item *ngFor="let item of group.items">\n                        <fd-quick-view-group-item-label>\n                            {{ item.label }}\n                        </fd-quick-view-group-item-label>\n                        <fd-quick-view-group-item-content>\n                            <ng-container [ngSwitch]="item.label">\n                                <a *ngSwitchCase="item.label === \'Mobile\' || item.label === \'Phone\' ? item.label : \'\'"\n                                   [href]="\'tel:\' + item.value"\n                                   [innerText]="item.value"\n                                   fd-link\n                                ></a>\n                                <a *ngSwitchCase="\'Email\'" [href]="\'mailto:\' + item.value" [innerText]="item.value" fd-link></a>\n                                <div *ngSwitchDefault [innerText]="item.value"></div>\n                            </ng-container>\n                        </fd-quick-view-group-item-content>\n                    </fd-quick-view-group-item>\n                </fd-quick-view-group>\n            </fd-quick-view>\n        </fd-popover-body>\n    </fd-popover>\n\n    <fd-popover placement="right-start" [noArrow]="false">\n        <fd-popover-control>\n            <button fd-button label="Open Popover Without Heading"></button>\n        </fd-popover-control>\n\n        <fd-popover-body>\n            <fd-quick-view [id]="data.id+\'-without-heading\'">\n                <fd-quick-view-subheader>\n                    <fd-avatar [image]="data.subHeader.avatar" size="s"></fd-avatar>\n                    <fd-quick-view-subheader-title>\n                        {{ data.subHeader.title }}\n                    </fd-quick-view-subheader-title>\n                    <fd-quick-view-subheader-subtitle>\n                        {{ data.subHeader.subtitle }}\n                    </fd-quick-view-subheader-subtitle>\n                </fd-quick-view-subheader>\n\n                <fd-quick-view-group *ngFor="let group of data.groups">\n                    <fd-quick-view-group-title>\n                        {{ group.title }}\n                    </fd-quick-view-group-title>\n                    <fd-quick-view-group-item *ngFor="let item of group.items">\n                        <fd-quick-view-group-item-label>\n                            {{ item.label }}\n                        </fd-quick-view-group-item-label>\n                        <fd-quick-view-group-item-content>\n                            <ng-container [ngSwitch]="item.label">\n                                <a *ngSwitchCase="item.label === \'Mobile\' || item.label === \'Phone\' ? item.label : \'\'"\n                                   [href]="\'tel:\' + item.value"\n                                   [innerText]="item.value"\n                                   fd-link\n                                ></a>\n                                <a *ngSwitchCase="\'Email\'" [href]="\'mailto:\' + item.value" [innerText]="item.value" fd-link></a>\n                                <div *ngSwitchDefault [innerText]="item.value"></div>\n                            </ng-container>\n                        </fd-quick-view-group-item-content>\n                    </fd-quick-view-group-item>\n                </fd-quick-view-group>\n            </fd-quick-view>\n        </fd-popover-body>\n    </fd-popover>\n</div>\n',g="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-quick-view-popover-example',\n    templateUrl: './quick-view-popover-example.component.html',\n    styles: [`.fd-docs-flex-display-helper {\n                display: flex;\n                align-items: center;\n                justify-content: space-around;\n                flex-flow: row wrap;\n                width: 100%;\n            }\n    `]\n})\nexport class QuickViewPopoverExampleComponent {\n    data = {\n        id: 'employee-popover',\n        title: 'Employee',\n        subHeader: {\n            title: 'Michael Adams',\n            subtitle: 'Account Manager',\n            avatar: 'http://placeimg.com/500/500/people'\n        },\n        groups: [{\n            title: 'Contact Details',\n            items: [{\n                label: 'Mobile',\n                value: '+1 605 555 5555'\n            }, {\n                label: 'Phone',\n                value: '+1 316 555 5555'\n            }, {\n                label: 'Email',\n                value: 'michael_adams@example.com'\n            }]\n        }, {\n            title: 'Company',\n            items: [{\n                label: 'Name',\n                value: 'Company A'\n            }, {\n                label: 'Address',\n                value: '718 Main Street, Anytown, SD 57401, USA'\n            }]\n        }]\n    };\n}\n",w='<ng-template let-dialog let-dialogConfig="dialogConfig" #quickViewDialog>\n    <fd-dialog [dialogConfig]="dialogConfig" [dialogRef]="dialog">\n        <fd-dialog-header>\n            <ng-template fdTemplate="header">\n                <div fd-bar-middle>\n                    <fd-bar-element>\n                        <h1 fd-title>Details</h1>\n                    </fd-bar-element>\n                </div>\n            </ng-template>\n        </fd-dialog-header>\n\n        <fd-dialog-body>\n            <fd-quick-view [id]="data.id">\n                <fd-quick-view-subheader>\n                    <fd-avatar [image]="data.subHeader.avatar" size="s"></fd-avatar>\n                    <fd-quick-view-subheader-title>\n                        {{ data.subHeader.title }}\n                    </fd-quick-view-subheader-title>\n                    <fd-quick-view-subheader-subtitle>\n                        {{ data.subHeader.subtitle }}\n                    </fd-quick-view-subheader-subtitle>\n                </fd-quick-view-subheader>\n\n                <fd-quick-view-group *ngFor="let group of data.groups">\n                    <fd-quick-view-group-title>\n                        {{ group.title }}\n                    </fd-quick-view-group-title>\n                    <fd-quick-view-group-item *ngFor="let item of group.items">\n                        <fd-quick-view-group-item-label>\n                            {{ item.label }}\n                        </fd-quick-view-group-item-label>\n                        <fd-quick-view-group-item-content>\n                            <ng-container [ngSwitch]="item.label">\n                                <a *ngSwitchCase="item.label === \'Mobile\' || item.label === \'Phone\' ? item.label : \'\'"\n                                   [href]="\'tel:\' + item.value"\n                                   [innerText]="item.value"\n                                   fd-link\n                                ></a>\n                                <a *ngSwitchCase="\'Email\'" [href]="\'mailto:\' + item.value" [innerText]="item.value" fd-link></a>\n                                <div *ngSwitchDefault [innerText]="item.value"></div>\n                            </ng-container>\n                        </fd-quick-view-group-item-content>\n                    </fd-quick-view-group-item>\n                </fd-quick-view-group>\n            </fd-quick-view>\n        </fd-dialog-body>\n\n        <fd-dialog-footer>\n            <fd-button-bar\n                fdType="emphasized"\n                label="Send reminder"\n                [compact]="true"\n                (click)="dialog.close(\'Continue\')">\n            </fd-button-bar>\n\n            <fd-button-bar\n                fd-initial-focus\n                fdType="transparent"\n                label="Cancel"\n                [compact]="true"\n                (click)="dialog.dismiss(\'backdrop\')">\n            </fd-button-bar>\n        </fd-dialog-footer>\n    </fd-dialog>\n</ng-template>\n\n<button fd-button\n        label="Open Dialog"\n        (click)="openDialog(quickViewDialog)">\n</button>\n',k="import { Component, TemplateRef } from '@angular/core';\nimport { DialogService } from '@fundamental-ngx/core';\n\n@Component({\n    selector: 'fd-quick-view-dialog-example',\n    templateUrl: './quick-view-dialog-example.component.html'\n})\nexport class QuickViewDialogExampleComponent {\n    data = {\n        id: 'employee-dialog',\n        title: 'Employee',\n        subHeader: {\n            title: 'Michael Adams',\n            subtitle: 'Account Manager',\n            avatar: 'http://placeimg.com/500/500/people'\n        },\n        groups: [{\n            title: 'Contact Details',\n            items: [{\n                label: 'Mobile',\n                value: '+1 605 555 5555'\n            }, {\n                label: 'Phone',\n                value: '+1 316 555 5555'\n            }, {\n                label: 'Email',\n                value: 'michael_adams@example.com'\n            }]\n        }, {\n            title: 'Company',\n            items: [{\n                label: 'Name',\n                value: 'Company A'\n            }, {\n                label: 'Address',\n                value: '718 Main Street, Anytown, SD 57401, USA'\n            }]\n        }]\n    };\n\n    constructor(private readonly dialogService: DialogService) {}\n\n    openDialog(dialog: TemplateRef<any>): void {\n        this.dialogService.open(dialog);\n    }\n}\n",h=a("EM62"),q=a("9Cr2"),S=a("Zn6N"),x=a("dB5E"),A=a("p/j4"),R=a("fTqs"),T=a("DRZ/"),y=a("p3WU"),C=a("F5pq"),M=a("2kYt"),N=a("tdCh"),V=a("o7K1"),D=a("bG/o"),E=a("XTTl"),H=a("ecRa"),P=a("GjSX");function F(e,i){if(1&e&&h.Nb(0,"a",7),2&e){var a=h.kc().$implicit;h.sc("href","tel:"+a.value,h.Jc)("innerText",a.value)}}function O(e,i){if(1&e&&h.Nb(0,"a",7),2&e){var a=h.kc().$implicit;h.sc("href","mailto:"+a.value,h.Jc)("innerText",a.value)}}function $(e,i){if(1&e&&h.Nb(0,"div",8),2&e){var a=h.kc().$implicit;h.sc("innerText",a.value)}}function Q(e,i){if(1&e&&(h.Sb(0,"fd-quick-view-group-item"),h.Sb(1,"fd-quick-view-group-item-label"),h.Tc(2),h.Rb(),h.Sb(3,"fd-quick-view-group-item-content"),h.Qb(4,4),h.Rc(5,F,1,2,"a",5),h.Rc(6,O,1,2,"a",5),h.Rc(7,$,1,1,"div",6),h.Pb(),h.Rb(),h.Rb()),2&e){var a=i.$implicit;h.Ab(2),h.Vc(" ",a.label," "),h.Ab(2),h.sc("ngSwitch",a.label),h.Ab(1),h.sc("ngSwitchCase","Mobile"===a.label||"Phone"===a.label?a.label:""),h.Ab(1),h.sc("ngSwitchCase","Email")}}function J(e,i){if(1&e&&(h.Sb(0,"fd-quick-view-group"),h.Sb(1,"fd-quick-view-group-title"),h.Tc(2),h.Rb(),h.Rc(3,Q,8,4,"fd-quick-view-group-item",3),h.Rb()),2&e){var a=i.$implicit;h.Ab(2),h.Vc(" ",a.title," "),h.Ab(1),h.sc("ngForOf",a.items)}}var z=function(){function e(){this.data={id:"employee-base",title:"Employee",subHeader:{title:"Michael Adams",subtitle:"Account Manager",avatar:"http://placeimg.com/500/500/people"},groups:[{title:"Contact Details",items:[{label:"Mobile",value:"+1 605 555 5555"},{label:"Phone",value:"+1 316 555 5555"},{label:"Email",value:"michael_adams@example.com"}]},{title:"Company",items:[{label:"Name",value:"Company A"},{label:"Address",value:"718 Main Street, Anytown, SD 57401, USA"}]}]}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h.Gb({type:e,selectors:[["fd-quick-view-base-example"]],decls:9,vars:5,consts:[[1,"example-wrapper"],[3,"id"],["size","s",3,"image"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],["fd-link","",3,"href","innerText",4,"ngSwitchCase"],[3,"innerText",4,"ngSwitchDefault"],["fd-link","",3,"href","innerText"],[3,"innerText"]],template:function(e,i){1&e&&(h.Sb(0,"div",0),h.Sb(1,"fd-quick-view",1),h.Sb(2,"fd-quick-view-subheader"),h.Nb(3,"fd-avatar",2),h.Sb(4,"fd-quick-view-subheader-title"),h.Tc(5),h.Rb(),h.Sb(6,"fd-quick-view-subheader-subtitle"),h.Tc(7),h.Rb(),h.Rb(),h.Rc(8,J,4,2,"fd-quick-view-group",3),h.Rb(),h.Rb()),2&e&&(h.Ab(1),h.sc("id",i.data.id),h.Ab(2),h.sc("image",i.data.subHeader.avatar),h.Ab(2),h.Vc(" ",i.data.subHeader.title," "),h.Ab(2),h.Vc(" ",i.data.subHeader.subtitle," "),h.Ab(1),h.sc("ngForOf",i.data.groups))},directives:[A.a,R.a,T.a,y.a,C.a,M.s,N.a,V.a,D.a,E.a,H.a,M.x,M.y,M.z,P.a],styles:[".example-wrapper[_ngcontent-%COMP%] { background-color: #fff; }"]}),e}(),U=a("gJWE"),j=a("ekBi"),G=a("GM5q"),_=a("dwsI"),B=a("0b/r"),I=a("l+lg"),W=a("w59S");function X(e,i){if(1&e&&h.Nb(0,"a",11),2&e){var a=h.kc().$implicit;h.sc("href","tel:"+a.value,h.Jc)("innerText",a.value)}}function K(e,i){if(1&e&&h.Nb(0,"a",11),2&e){var a=h.kc().$implicit;h.sc("href","mailto:"+a.value,h.Jc)("innerText",a.value)}}function L(e,i){if(1&e&&h.Nb(0,"div",12),2&e){var a=h.kc().$implicit;h.sc("innerText",a.value)}}function Y(e,i){if(1&e&&(h.Sb(0,"fd-quick-view-group-item"),h.Sb(1,"fd-quick-view-group-item-label"),h.Tc(2),h.Rb(),h.Sb(3,"fd-quick-view-group-item-content"),h.Qb(4,8),h.Rc(5,X,1,2,"a",9),h.Rc(6,K,1,2,"a",9),h.Rc(7,L,1,1,"div",10),h.Pb(),h.Rb(),h.Rb()),2&e){var a=i.$implicit;h.Ab(2),h.Vc(" ",a.label," "),h.Ab(2),h.sc("ngSwitch",a.label),h.Ab(1),h.sc("ngSwitchCase","Mobile"===a.label||"Phone"===a.label?a.label:""),h.Ab(1),h.sc("ngSwitchCase","Email")}}function Z(e,i){if(1&e&&(h.Sb(0,"fd-quick-view-group"),h.Sb(1,"fd-quick-view-group-title"),h.Tc(2),h.Rb(),h.Rc(3,Y,8,4,"fd-quick-view-group-item",6),h.Rb()),2&e){var a=i.$implicit;h.Ab(2),h.Vc(" ",a.title," "),h.Ab(1),h.sc("ngForOf",a.items)}}function ee(e,i){if(1&e&&h.Nb(0,"a",11),2&e){var a=h.kc().$implicit;h.sc("href","tel:"+a.value,h.Jc)("innerText",a.value)}}function ie(e,i){if(1&e&&h.Nb(0,"a",11),2&e){var a=h.kc().$implicit;h.sc("href","mailto:"+a.value,h.Jc)("innerText",a.value)}}function ae(e,i){if(1&e&&h.Nb(0,"div",12),2&e){var a=h.kc().$implicit;h.sc("innerText",a.value)}}function ne(e,i){if(1&e&&(h.Sb(0,"fd-quick-view-group-item"),h.Sb(1,"fd-quick-view-group-item-label"),h.Tc(2),h.Rb(),h.Sb(3,"fd-quick-view-group-item-content"),h.Qb(4,8),h.Rc(5,ee,1,2,"a",9),h.Rc(6,ie,1,2,"a",9),h.Rc(7,ae,1,1,"div",10),h.Pb(),h.Rb(),h.Rb()),2&e){var a=i.$implicit;h.Ab(2),h.Vc(" ",a.label," "),h.Ab(2),h.sc("ngSwitch",a.label),h.Ab(1),h.sc("ngSwitchCase","Mobile"===a.label||"Phone"===a.label?a.label:""),h.Ab(1),h.sc("ngSwitchCase","Email")}}function te(e,i){if(1&e&&(h.Sb(0,"fd-quick-view-group"),h.Sb(1,"fd-quick-view-group-title"),h.Tc(2),h.Rb(),h.Rc(3,ne,8,4,"fd-quick-view-group-item",6),h.Rb()),2&e){var a=i.$implicit;h.Ab(2),h.Vc(" ",a.title," "),h.Ab(1),h.sc("ngForOf",a.items)}}var le=function(){function e(){this.data={id:"employee-popover",title:"Employee",subHeader:{title:"Michael Adams",subtitle:"Account Manager",avatar:"http://placeimg.com/500/500/people"},groups:[{title:"Contact Details",items:[{label:"Mobile",value:"+1 605 555 5555"},{label:"Phone",value:"+1 316 555 5555"},{label:"Email",value:"michael_adams@example.com"}]},{title:"Company",items:[{label:"Name",value:"Company A"},{label:"Address",value:"718 Main Street, Anytown, SD 57401, USA"}]}]}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h.Gb({type:e,selectors:[["fd-quick-view-popover-example"]],decls:27,vars:13,consts:[[1,"fd-docs-flex-display-helper"],["placement","right-start",3,"noArrow"],["fd-button","","label","Open Popover"],[3,"id"],["align","middle"],["size","s",3,"image"],[4,"ngFor","ngForOf"],["fd-button","","label","Open Popover Without Heading"],[3,"ngSwitch"],["fd-link","",3,"href","innerText",4,"ngSwitchCase"],[3,"innerText",4,"ngSwitchDefault"],["fd-link","",3,"href","innerText"],[3,"innerText"]],template:function(e,i){1&e&&(h.Sb(0,"div",0),h.Sb(1,"fd-popover",1),h.Sb(2,"fd-popover-control"),h.Nb(3,"button",2),h.Rb(),h.Sb(4,"fd-popover-body"),h.Sb(5,"fd-quick-view",3),h.Sb(6,"fd-quick-view-title",4),h.Tc(7),h.Rb(),h.Sb(8,"fd-quick-view-subheader"),h.Nb(9,"fd-avatar",5),h.Sb(10,"fd-quick-view-subheader-title"),h.Tc(11),h.Rb(),h.Sb(12,"fd-quick-view-subheader-subtitle"),h.Tc(13),h.Rb(),h.Rb(),h.Rc(14,Z,4,2,"fd-quick-view-group",6),h.Rb(),h.Rb(),h.Rb(),h.Sb(15,"fd-popover",1),h.Sb(16,"fd-popover-control"),h.Nb(17,"button",7),h.Rb(),h.Sb(18,"fd-popover-body"),h.Sb(19,"fd-quick-view",3),h.Sb(20,"fd-quick-view-subheader"),h.Nb(21,"fd-avatar",5),h.Sb(22,"fd-quick-view-subheader-title"),h.Tc(23),h.Rb(),h.Sb(24,"fd-quick-view-subheader-subtitle"),h.Tc(25),h.Rb(),h.Rb(),h.Rc(26,te,4,2,"fd-quick-view-group",6),h.Rb(),h.Rb(),h.Rb(),h.Rb()),2&e&&(h.Ab(1),h.sc("noArrow",!1),h.Ab(4),h.sc("id",i.data.id),h.Ab(2),h.Uc(i.data.title),h.Ab(2),h.sc("image",i.data.subHeader.avatar),h.Ab(2),h.Vc(" ",i.data.subHeader.title," "),h.Ab(2),h.Vc(" ",i.data.subHeader.subtitle," "),h.Ab(1),h.sc("ngForOf",i.data.groups),h.Ab(1),h.sc("noArrow",!1),h.Ab(4),h.sc("id",i.data.id+"-without-heading"),h.Ab(2),h.sc("image",i.data.subHeader.avatar),h.Ab(2),h.Vc(" ",i.data.subHeader.title," "),h.Ab(2),h.Vc(" ",i.data.subHeader.subtitle," "),h.Ab(1),h.sc("ngForOf",i.data.groups))},directives:[G.a,_.a,B.a,I.a,A.a,W.a,R.a,T.a,y.a,C.a,M.s,N.a,V.a,D.a,E.a,H.a,M.x,M.y,M.z,P.a],styles:[".fd-docs-flex-display-helper[_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                justify-content: space-around;\n                flex-flow: row wrap;\n                width: 100%;\n            }"]}),e}(),oe=a("X71w"),ce=a("RmA4"),ue=a("JNeC"),re=a("umEU"),de=a("+ca1"),be=a("xtTQ"),pe=a("i/i2"),fe=a("L3eP"),se=a("azFz"),me=a("o1CV");function ve(e,i){1&e&&(h.Sb(0,"div",9),h.Sb(1,"fd-bar-element"),h.Sb(2,"h1",10),h.Tc(3,"Details"),h.Rb(),h.Rb(),h.Rb())}function ge(e,i){if(1&e&&h.Nb(0,"a",14),2&e){var a=h.kc().$implicit;h.sc("href","tel:"+a.value,h.Jc)("innerText",a.value)}}function we(e,i){if(1&e&&h.Nb(0,"a",14),2&e){var a=h.kc().$implicit;h.sc("href","mailto:"+a.value,h.Jc)("innerText",a.value)}}function ke(e,i){if(1&e&&h.Nb(0,"div",15),2&e){var a=h.kc().$implicit;h.sc("innerText",a.value)}}function he(e,i){if(1&e&&(h.Sb(0,"fd-quick-view-group-item"),h.Sb(1,"fd-quick-view-group-item-label"),h.Tc(2),h.Rb(),h.Sb(3,"fd-quick-view-group-item-content"),h.Qb(4,11),h.Rc(5,ge,1,2,"a",12),h.Rc(6,we,1,2,"a",12),h.Rc(7,ke,1,1,"div",13),h.Pb(),h.Rb(),h.Rb()),2&e){var a=i.$implicit;h.Ab(2),h.Vc(" ",a.label," "),h.Ab(2),h.sc("ngSwitch",a.label),h.Ab(1),h.sc("ngSwitchCase","Mobile"===a.label||"Phone"===a.label?a.label:""),h.Ab(1),h.sc("ngSwitchCase","Email")}}function qe(e,i){if(1&e&&(h.Sb(0,"fd-quick-view-group"),h.Sb(1,"fd-quick-view-group-title"),h.Tc(2),h.Rb(),h.Rc(3,he,8,4,"fd-quick-view-group-item",6),h.Rb()),2&e){var a=i.$implicit;h.Ab(2),h.Vc(" ",a.title," "),h.Ab(1),h.sc("ngForOf",a.items)}}function Se(e,i){if(1&e&&(h.Sb(0,"fd-dialog",2),h.Sb(1,"fd-dialog-header"),h.Rc(2,ve,4,0,"ng-template",3),h.Rb(),h.Sb(3,"fd-dialog-body"),h.Sb(4,"fd-quick-view",4),h.Sb(5,"fd-quick-view-subheader"),h.Nb(6,"fd-avatar",5),h.Sb(7,"fd-quick-view-subheader-title"),h.Tc(8),h.Rb(),h.Sb(9,"fd-quick-view-subheader-subtitle"),h.Tc(10),h.Rb(),h.Rb(),h.Rc(11,qe,4,2,"fd-quick-view-group",6),h.Rb(),h.Rb(),h.Sb(12,"fd-dialog-footer"),h.Sb(13,"fd-button-bar",7),h.gc("click",(function(){return i.$implicit.close("Continue")})),h.Rb(),h.Sb(14,"fd-button-bar",8),h.gc("click",(function(){return i.$implicit.dismiss("backdrop")})),h.Rb(),h.Rb(),h.Rb()),2&e){var a=i.$implicit,n=i.dialogConfig,t=h.kc();h.sc("dialogConfig",n)("dialogRef",a),h.Ab(4),h.sc("id",t.data.id),h.Ab(2),h.sc("image",t.data.subHeader.avatar),h.Ab(2),h.Vc(" ",t.data.subHeader.title," "),h.Ab(2),h.Vc(" ",t.data.subHeader.subtitle," "),h.Ab(1),h.sc("ngForOf",t.data.groups),h.Ab(2),h.sc("compact",!0),h.Ab(1),h.sc("compact",!0)}}var xe=function(){function e(e){this.dialogService=e,this.data={id:"employee-dialog",title:"Employee",subHeader:{title:"Michael Adams",subtitle:"Account Manager",avatar:"http://placeimg.com/500/500/people"},groups:[{title:"Contact Details",items:[{label:"Mobile",value:"+1 605 555 5555"},{label:"Phone",value:"+1 316 555 5555"},{label:"Email",value:"michael_adams@example.com"}]},{title:"Company",items:[{label:"Name",value:"Company A"},{label:"Address",value:"718 Main Street, Anytown, SD 57401, USA"}]}]}}return e.prototype.openDialog=function(e){this.dialogService.open(e)},e.\u0275fac=function(i){return new(i||e)(h.Mb(f.DialogService))},e.\u0275cmp=h.Gb({type:e,selectors:[["fd-quick-view-dialog-example"]],decls:3,vars:0,consts:[["quickViewDialog",""],["fd-button","","label","Open Dialog",3,"click"],[3,"dialogConfig","dialogRef"],["fdTemplate","header"],[3,"id"],["size","s",3,"image"],[4,"ngFor","ngForOf"],["fdType","emphasized","label","Send reminder",3,"compact","click"],["fd-initial-focus","","fdType","transparent","label","Cancel",3,"compact","click"],["fd-bar-middle",""],["fd-title",""],[3,"ngSwitch"],["fd-link","",3,"href","innerText",4,"ngSwitchCase"],[3,"innerText",4,"ngSwitchDefault"],["fd-link","",3,"href","innerText"],[3,"innerText"]],template:function(e,i){if(1&e){var a=h.Tb();h.Rc(0,Se,15,9,"ng-template",null,0,h.Sc),h.Sb(2,"button",1),h.gc("click",(function(){h.Gc(a);var e=h.Ec(1);return i.openDialog(e)})),h.Rb()}},directives:[B.a,oe.a,ce.a,ue.a,re.a,A.a,R.a,T.a,y.a,C.a,M.s,de.a,be.a,pe.a,fe.a,se.a,me.a,N.a,V.a,D.a,E.a,H.a,M.x,M.y,M.z,P.a],encapsulation:2}),e}(),Ae=function(){function e(){this.quickViewBaseExample=[{language:"html",code:n,fileName:"quick-view-base-example"},{language:"typescript",code:t,fileName:"quick-view-base-example",component:"QuickViewBaseExampleComponent"}],this.quickViewPopoverExample=[{language:"html",code:l,fileName:"quick-view-popover-example"},{language:"typescript",code:o,fileName:"quick-view-popover-example",component:"QuickViewPopoverExampleComponent"}],this.quickViewDialogExample=[{language:"html",code:c,fileName:"quick-view-dialog-example"},{language:"typescript",code:u,fileName:"quick-view-dialog-example",component:"QuickViewDialogExampleComponent"}]}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h.Gb({type:e,selectors:[["app-quick-view"]],decls:19,vars:3,consts:[["id","basic","componentName","quick-view"],[3,"exampleFiles"],["id","in-popover","componentName","quick-view"],["id","in-dialog","componentName","quick-view"]],template:function(e,i){1&e&&(h.Sb(0,"fd-docs-section-title",0),h.Tc(1," Basic Quick View\n"),h.Rb(),h.Sb(2,"description"),h.Tc(3," Example of a Quick View as a standalone component.\n"),h.Rb(),h.Sb(4,"component-example"),h.Nb(5,"fd-quick-view-base-example"),h.Rb(),h.Nb(6,"code-example",1),h.Nb(7,"separator"),h.Sb(8,"fd-docs-section-title",2),h.Tc(9," Quick View in Popover\n"),h.Rb(),h.Sb(10,"component-example"),h.Nb(11,"fd-quick-view-popover-example"),h.Rb(),h.Nb(12,"code-example",1),h.Nb(13,"separator"),h.Sb(14,"fd-docs-section-title",3),h.Tc(15," Quick View in Dialog\n"),h.Rb(),h.Sb(16,"component-example"),h.Nb(17,"fd-quick-view-dialog-example"),h.Rb(),h.Nb(18,"code-example",1)),2&e&&(h.Ab(6),h.sc("exampleFiles",i.quickViewBaseExample),h.Ab(6),h.sc("exampleFiles",i.quickViewPopoverExample),h.Ab(6),h.sc("exampleFiles",i.quickViewDialogExample))},directives:[q.a,S.a,x.a,z,U.a,j.a,le,xe],encapsulation:2}),e}(),Re=a("P+xO"),Te=a("7o9V"),ye=a("h8DJ"),Ce=[{path:"",component:function(){function e(){}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h.Gb({type:e,selectors:[["app-quick-view-docs-header"]],decls:10,vars:0,consts:[["module","QuickViewModule"]],template:function(e,i){1&e&&(h.Sb(0,"header"),h.Tc(1,"Quick View"),h.Rb(),h.Sb(2,"description"),h.Sb(3,"p"),h.Tc(4,"Quick View is a responsive block that displays information on an object in a business-card format."),h.Rb(),h.Sb(5,"p"),h.Tc(6," The quick view is used to show business information on either a person or an entity (e.g. a company). It uses a set of pre-defined controls. Objects can be linked together and you can navigate between several objects. An unlimited number of objects can be linked. "),h.Rb(),h.Rb(),h.Nb(7,"import",0),h.Nb(8,"fd-header-tabs"),h.Nb(9,"router-outlet"))},directives:[Re.a,S.a,Te.a,ye.a,r.g],styles:[""]}),e}(),children:[{path:"",component:Ae},{path:"api",component:d.a,data:{content:p.a.quickView}}]}],Me=function(){function e(){}return e.\u0275mod=h.Kb({type:e}),e.\u0275inj=h.Jb({factory:function(i){return new(i||e)},imports:[[r.f.forChild(Ce),b.a,f.QuickViewModule,f.AvatarModule,f.IconModule,f.PopoverModule,f.DialogModule,f.TitleModule],r.f]}),e}()}}]);