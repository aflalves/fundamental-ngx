(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"3kIa":function(e,t,n){"use strict";n.r(t),n.d(t,"SelectDocsModules",(function(){return Ze}));var o={};n.r(o),n.d(o,"default",(function(){return P}));var l={};n.r(l),n.d(l,"default",(function(){return G}));var c={};n.r(c),n.d(c,"default",(function(){return I}));var a={};n.r(a),n.d(a,"default",(function(){return $}));var s={};n.r(s),n.d(s,"default",(function(){return B}));var i={};n.r(i),n.d(i,"default",(function(){return _}));var r={};n.r(r),n.d(r,"default",(function(){return H}));var p={};n.r(p),n.d(p,"default",(function(){return D}));var d={};n.r(d),n.d(d,"default",(function(){return j}));var u={};n.r(u),n.d(u,"default",(function(){return L}));var m={};n.r(m),n.d(m,"default",(function(){return J}));var f={};n.r(f),n.d(f,"default",(function(){return W}));var b={};n.r(b),n.d(b,"default",(function(){return q}));var g={};n.r(g),n.d(g,"default",(function(){return z}));var h={};n.r(h),n.d(h,"default",(function(){return Y}));var v={};n.r(v),n.d(v,"default",(function(){return Z}));var S={};n.r(S),n.d(S,"default",(function(){return K}));var y={};n.r(y),n.d(y,"default",(function(){return Q}));var C={};n.r(C),n.d(C,"default",(function(){return X}));var x={};n.r(x),n.d(x,"default",(function(){return ee}));var R={};n.r(R),n.d(R,"default",(function(){return te}));var T={};n.r(T),n.d(T,"default",(function(){return ne}));var V=n("sEIs"),A=n("eCHz"),F=n("MOJJ"),k=n("uYCi"),O=n("EM62"),w=n("P+xO"),N=n("Zn6N"),M=n("7o9V"),E=n("h8DJ"),U=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-header"]],decls:7,vars:0,consts:[["module","SelectModule"]],template:function(e,t){1&e&&(O.Sb(0,"header"),O.Tc(1,"Select"),O.Rb(),O.Sb(2,"description"),O.Tc(3," This component combines the Select and the Option components. It was created to emulate the native Select element as closely as possible while also providing more extended styling options.\n"),O.Rb(),O.Nb(4,"import",0),O.Nb(5,"fd-header-tabs"),O.Nb(6,"router-outlet"))},directives:[w.a,N.a,M.a,E.a,V.g],encapsulation:2}),e}(),P='<h4>Default select</h4>\n<fd-select placeholder="Select an option" [(value)]="selectedValue1">\n    <fd-option *ngFor="let option of options" [value]="option">{{ option }}</fd-option>\n</fd-select>\n<small style="display: block;">Selected value: {{selectedValue1}}</small>\n\n<h4>Compact select</h4>\n<fd-select placeholder="Select an option" [compact]="true" [(value)]="selectedValue2">\n    <fd-option *ngFor="let option of options" [value]="option">{{ option }}</fd-option>\n</fd-select>\n<small style="display: block;">Selected value: {{selectedValue2}}</small>\n\n<h4>Select in disabled mode</h4>\n<fd-select placeholder="Select an option" [disabled]="true" [(value)]="selectedValue4">\n    <fd-option *ngFor="let option of options" [value]="option">{{ option }}</fd-option>\n</fd-select>\n<small style="display: block;">Selected value: {{selectedValue4}}</small>\n\n<h4>Select in read-only mode</h4>\n<fd-select placeholder="Select an option" [readonly]="true" [(value)]="selectedValue5">\n    <fd-option *ngFor="let option of options" [value]="option">{{ option }}</fd-option>\n</fd-select>\n<small style="display: block;">Selected value: {{selectedValue5}}</small>\n',G="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-select-mode-example',\n    templateUrl: './select-mode-example.component.html'\n})\nexport class SelectModeExampleComponent {\n    options: string[] = ['Apple', 'Pineapple', 'Tomato', 'Strawberry'];\n    selectedValue1: string;\n    selectedValue2: string;\n    selectedValue3: string;\n    selectedValue4: string;\n    selectedValue5: string = this.options[0];\n}\n",I='<div class="example-btn-holder">\n    <button fd-button label="Change Value" (click)="changeValue()"></button>\n    <button fd-button label="Open" (click)="select.open()"></button>\n    <button fd-button label="Close" (click)="select.close()"></button>\n</div>\n\n<fd-select placeholder="Select value" #select [(value)]="selectedValue" [closeOnOutsideClick]="false">\n    <fd-option *ngFor="let option of options" [value]="option">{{option}}</fd-option>\n</fd-select>\n<small style="display: block;">Selected value: {{selectedValue}}</small>\n',$=".fd-button {\n    margin-right: 12px;\n}\n\n.example-btn-holder {\n    margin-bottom: 16px;\n}\n",B="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-select-programmatic-example',\n    templateUrl: './select-programmatic-example.component.html',\n    styleUrls: ['./select-programmatic-example.component.scss']\n})\nexport class SelectProgrammaticExampleComponent {\n\n    options: string[] = ['Apple', 'Pineapple', 'Tomato', 'Strawberry'];\n\n    selectedValue: string = this.options[0];\n\n    changeValue(): void {\n        this.selectedValue = this.getNewValue();\n    }\n\n    getNewValue(): string {\n        const newValue = this.options[Date.now() % this.options.length];\n        return this.selectedValue === newValue\n            ? this.getNewValue()\n            : newValue;\n    }\n}\n",_='<fd-select placeholder="Select an option"\n           stateMessage="Select your favourite fruit"\n           state="information"\n           [(value)]="selectedValue"\n           [mobile]="true"\n           [mobileConfig]="mobileConfig">\n\n    <fd-option *ngFor="let option of options" [value]="option">{{option}}</fd-option>\n\n</fd-select>\n<small style="display: block;">Selected value: {{selectedValue}}</small>\n',H="import { Component } from '@angular/core';\nimport { MobileModeConfig } from '@fundamental-ngx/core';\n\n@Component({\n    selector: 'fd-select-mobile-example',\n    templateUrl: './select-mobile-example.component.html'\n})\nexport class SelectMobileExampleComponent {\n    options: string[] = ['Apple', 'Pineapple', 'Tomato', 'Strawberry'];\n    mobileConfig: MobileModeConfig = { hasCloseButton: true, title: 'Select your favourite fruit' };\n    selectedValue: string;\n}\n",D='<fd-select [(value)]="selectedValue"\n           [extendedBodyTemplate]="true"\n           [controlTemplate]="customSelectTemplate">\n\n    <li fd-list-group-header>Fruits</li>\n    <fd-option *ngFor="let option of fruits" [value]="option">\n        <i fd-list-icon [glyph]="\'add\'"></i>\n        <span fd-list-title>{{option.name}}</span>\n        <span fd-list-secondary>{{option.kCal}} kcal</span>\n    </fd-option>\n\n    <li fd-list-group-header>Vegetables</li>\n    <fd-option *ngFor="let option of vegetables" [value]="option">\n        <i fd-list-icon [glyph]="\'add\'"></i>\n        <span fd-list-title>{{option.name}}</span>\n        <span fd-list-secondary>{{option.kCal}} kcal</span>\n    </fd-option>\n\n    <ng-template #customSelectTemplate let-selected="selected">\n        {{selected?.value.name || \'Select an option\'}}\n    </ng-template>\n\n</fd-select>\n<small style="display: block;">Selected value: {{selectedValue | json}}</small>\n',j="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-select-nested-options',\n    templateUrl: './select-nested-options.component.html',\n    styleUrls: ['select-nested-options.component.scss']\n})\nexport class SelectNestedOptionsComponent {\n\n    selectedValue: string;\n\n    fruits: { name: string, kCal: string }[] = [\n        {name: 'Apple', kCal: '49.05'},\n        {name: 'Pineapple', kCal: '50'},\n        {name: 'Strawberry', kCal: '32'}\n    ];\n\n    vegetables: { name: string, kCal: string }[] = [\n        {name: 'Cabbage', kCal: '23'},\n        {name: 'Carrot', kCal: '35'},\n        {name: 'Leek', kCal: '31'},\n    ];\n}\n",L=".fd-menu__title {\n    background-color: #e7e7e7;\n}\n",J='<fd-select placeholder="Select an option" [(value)]="selectedValue" [controlTemplate]="customSelectTemplate">\n    <fd-option *ngFor="let option of options" [value]="option">{{option}}</fd-option>\n</fd-select>\n\n<ng-template #customSelectTemplate let-textValue let-selected="selected">\n    <div class="custom-select-trigger-styling">\n        <fd-icon glyph="action-settings"></fd-icon>\n        {{textValue}}\n        <span *ngIf="selected">{{selected.id}}</span>\n    </div>\n</ng-template>\n',W="import { Component, ViewEncapsulation } from '@angular/core';\n\n@Component({\n    selector: 'fd-select-custom-trigger',\n    templateUrl: './select-custom-trigger.component.html',\n    styleUrls: ['./select-custom-trigger.component.scss'],\n    encapsulation: ViewEncapsulation.None\n})\nexport class SelectCustomTriggerComponent {\n    options: string[] = ['Apple', 'Pineapple', 'Tomato', 'Strawberry'];\n\n    selectedValue: string;\n}\n",q='.custom-select-trigger-styling {\n    display: flex;\n    align-items: center;\n\n    span {\n        color: darkgrey;\n        padding-left: 0.5rem;\n    }\n\n    fd-icon {\n        display: flex;\n        padding-right: 0.5rem;\n    }\n}\n\n[dir="rtl"] span {\n        padding-right: 0.5rem;\n}\n\n[dir="rtl"] fd-icon {\n        padding-left: 0.5rem;\n    \n}',z='<div class="example-btn-holder">\n    <button fd-button label="Add Option" (click)="addOption()"></button>\n    <button fd-button label="Remove Option" (click)="removeOption()"></button>\n</div>\n\n<fd-select placeholder="Select an option" [(value)]="selectedValue" [closeOnOutsideClick]="false">\n    <fd-option *ngFor="let option of options" [value]="option">{{option}}</fd-option>\n</fd-select>\n<small style="display: block;">Selected value: {{selectedValue}}</small>\n',Y=".fd-button {\n    margin-right: 12px;\n}\n\n.example-btn-holder {\n    margin-bottom: 16px;\n}\n",Z="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-select-adding-example',\n    templateUrl: './select-adding-example.component.html',\n    styleUrls: ['./select-adding-example.component.scss']\n})\nexport class SelectAddingExampleComponent {\n    options: string[] = ['Apple', 'Pineapple', 'Tomato', 'Strawberry'];\n\n    selectedValue: string;\n\n    addedOptions = 1;\n\n    addOption(): void {\n        this.options.push(`New option ${this.addedOptions++}`);\n    }\n\n    removeOption(): void {\n        if (this.options.length > 1) {\n            this.options.pop();\n        }\n    }\n}\n",K='<form [formGroup]="customForm">\n    <fd-select formControlName="selectControl">\n        <fd-option *ngFor="let option of options" [value]="option">{{option}}</fd-option>\n    </fd-select>\n</form>\n<small style="display: block">Value: {{customForm.controls.selectControl.value}}</small>\n<small style="display: block">Touched: {{customForm.touched}}</small>\n<small style="display: block">Dirty: {{customForm.dirty}}</small>\n<small style="display: block">Status: {{customForm.status}}</small>\n',Q="import { Component } from '@angular/core';\nimport { FormControl, FormGroup, Validators } from '@angular/forms';\n\n@Component({\n    selector: 'fd-select-forms',\n    templateUrl: './select-forms.component.html',\n    styleUrls: ['select-forms.component.scss']\n})\nexport class SelectFormsComponent {\n\n    options: string[] = ['Apple', 'Pineapple', 'Tomato', 'Strawberry'];\n\n    customForm = new FormGroup({\n        selectControl: new FormControl(this.options[0], Validators.required),\n    });\n}\n",X='<fd-select placeholder="Select an option" [(value)]="selectedValue" [maxHeight]="\'250px\'">\n    <fd-option *ngFor="let option of options" [value]="option">{{option}}</fd-option>\n</fd-select>\n<small style="display: block;">Selected value: {{selectedValue}}</small>\n',ee="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-select-max-height-example',\n    templateUrl: './select-max-height-example.component.html'\n})\nexport class SelectMaxHeightExampleComponent {\n    selectedValue: string;\n\n    options: string[] = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Blueberry', 'Bing Cherry', 'Mango', 'Mandarin', 'Melon'];\n}\n",te='<h4>Success state</h4>\n<fd-select placeholder="Select value"\n           stateMessage="Success message"\n           [(value)]="selectedValue1"\n           [state]="\'success\'">\n    <fd-option *ngFor="let option of options" [value]="option">{{option}}</fd-option>\n</fd-select>\n<fd-form-message [static]="true" [type]="\'success\'">Success message</fd-form-message>\n\n<h4>Warning state</h4>\n<fd-select placeholder="Select value"\n           stateMessage="Warning message"\n           [(value)]="selectedValue2"\n           [state]="\'warning\'">\n    <fd-option *ngFor="let option of options" [value]="option">{{option}}</fd-option>\n</fd-select>\n<fd-form-message [static]="true" [type]="\'warning\'">Warning message</fd-form-message>\n\n<h4>Error state</h4>\n<fd-select placeholder="Select value"\n           stateMessage="Error message"\n           [(value)]="selectedValue3"\n           [state]="\'error\'">\n    <fd-option *ngFor="let option of options" [value]="option">{{option}}</fd-option>\n</fd-select>\n<fd-form-message [static]="true" [type]="\'error\'">Error message</fd-form-message>\n\n<h4>Information state</h4>\n<fd-select placeholder="Select value"\n           stateMessage="Information message"\n           [(value)]="selectedValue4"\n           [state]="\'information\'">\n    <fd-option *ngFor="let option of options" [value]="option">{{option}}</fd-option>\n</fd-select>\n<fd-form-message [static]="true" [type]="\'information\'">Information message</fd-form-message>\n',ne="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-select-semantic-state-example',\n    templateUrl: './select-semantic-state-example.component.html'\n})\nexport class SelectSemanticStateExampleComponent {\n    options: string[] = ['Apple', 'Pineapple', 'Tomato', 'Strawberry'];\n    selectedValue1: string;\n    selectedValue2: string;\n    selectedValue3: string;\n    selectedValue4: string;\n}\n",oe=n("9Cr2"),le=n("dB5E"),ce=n("zms7"),ae=n("2kYt"),se=n("LWoR");function ie(e,t){if(1&e&&(O.Sb(0,"fd-option",6),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}function re(e,t){if(1&e&&(O.Sb(0,"fd-option",6),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}function pe(e,t){if(1&e&&(O.Sb(0,"fd-option",6),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}function de(e,t){if(1&e&&(O.Sb(0,"fd-option",6),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}var ue=function(){function e(){this.options=["Apple","Pineapple","Tomato","Strawberry"],this.selectedValue5=this.options[0]}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-mode-example"]],decls:24,vars:15,consts:[["placeholder","Select an option",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[2,"display","block"],["placeholder","Select an option",3,"compact","value","valueChange"],["placeholder","Select an option",3,"disabled","value","valueChange"],["placeholder","Select an option",3,"readonly","value","valueChange"],[3,"value"]],template:function(e,t){1&e&&(O.Sb(0,"h4"),O.Tc(1,"Default select"),O.Rb(),O.Sb(2,"fd-select",0),O.gc("valueChange",(function(e){return t.selectedValue1=e})),O.Rc(3,ie,2,2,"fd-option",1),O.Rb(),O.Sb(4,"small",2),O.Tc(5),O.Rb(),O.Sb(6,"h4"),O.Tc(7,"Compact select"),O.Rb(),O.Sb(8,"fd-select",3),O.gc("valueChange",(function(e){return t.selectedValue2=e})),O.Rc(9,re,2,2,"fd-option",1),O.Rb(),O.Sb(10,"small",2),O.Tc(11),O.Rb(),O.Sb(12,"h4"),O.Tc(13,"Select in disabled mode"),O.Rb(),O.Sb(14,"fd-select",4),O.gc("valueChange",(function(e){return t.selectedValue4=e})),O.Rc(15,pe,2,2,"fd-option",1),O.Rb(),O.Sb(16,"small",2),O.Tc(17),O.Rb(),O.Sb(18,"h4"),O.Tc(19,"Select in read-only mode"),O.Rb(),O.Sb(20,"fd-select",5),O.gc("valueChange",(function(e){return t.selectedValue5=e})),O.Rc(21,de,2,2,"fd-option",1),O.Rb(),O.Sb(22,"small",2),O.Tc(23),O.Rb()),2&e&&(O.Ab(2),O.sc("value",t.selectedValue1),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(2),O.Vc("Selected value: ",t.selectedValue1,""),O.Ab(3),O.sc("compact",!0)("value",t.selectedValue2),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(2),O.Vc("Selected value: ",t.selectedValue2,""),O.Ab(3),O.sc("disabled",!0)("value",t.selectedValue4),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(2),O.Vc("Selected value: ",t.selectedValue4,""),O.Ab(3),O.sc("readonly",!0)("value",t.selectedValue5),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(2),O.Vc("Selected value: ",t.selectedValue5,""))},directives:[ce.a,ae.s,se.a],encapsulation:2}),e}(),me=n("gJWE"),fe=n("ekBi"),be=n("Heni");function ge(e,t){if(1&e&&(O.Sb(0,"fd-option",6),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}function he(e,t){if(1&e&&(O.Sb(0,"fd-option",6),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}function ve(e,t){if(1&e&&(O.Sb(0,"fd-option",6),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}function Se(e,t){if(1&e&&(O.Sb(0,"fd-option",6),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}var ye=function(){function e(){this.options=["Apple","Pineapple","Tomato","Strawberry"]}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-semantic-state-example"]],decls:24,vars:20,consts:[["placeholder","Select value","stateMessage","Success message",3,"value","state","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"static","type"],["placeholder","Select value","stateMessage","Warning message",3,"value","state","valueChange"],["placeholder","Select value","stateMessage","Error message",3,"value","state","valueChange"],["placeholder","Select value","stateMessage","Information message",3,"value","state","valueChange"],[3,"value"]],template:function(e,t){1&e&&(O.Sb(0,"h4"),O.Tc(1,"Success state"),O.Rb(),O.Sb(2,"fd-select",0),O.gc("valueChange",(function(e){return t.selectedValue1=e})),O.Rc(3,ge,2,2,"fd-option",1),O.Rb(),O.Sb(4,"fd-form-message",2),O.Tc(5,"Success message"),O.Rb(),O.Sb(6,"h4"),O.Tc(7,"Warning state"),O.Rb(),O.Sb(8,"fd-select",3),O.gc("valueChange",(function(e){return t.selectedValue2=e})),O.Rc(9,he,2,2,"fd-option",1),O.Rb(),O.Sb(10,"fd-form-message",2),O.Tc(11,"Warning message"),O.Rb(),O.Sb(12,"h4"),O.Tc(13,"Error state"),O.Rb(),O.Sb(14,"fd-select",4),O.gc("valueChange",(function(e){return t.selectedValue3=e})),O.Rc(15,ve,2,2,"fd-option",1),O.Rb(),O.Sb(16,"fd-form-message",2),O.Tc(17,"Error message"),O.Rb(),O.Sb(18,"h4"),O.Tc(19,"Information state"),O.Rb(),O.Sb(20,"fd-select",5),O.gc("valueChange",(function(e){return t.selectedValue4=e})),O.Rc(21,Se,2,2,"fd-option",1),O.Rb(),O.Sb(22,"fd-form-message",2),O.Tc(23,"Information message"),O.Rb()),2&e&&(O.Ab(2),O.sc("value",t.selectedValue1)("state","success"),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(1),O.sc("static",!0)("type","success"),O.Ab(4),O.sc("value",t.selectedValue2)("state","warning"),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(1),O.sc("static",!0)("type","warning"),O.Ab(4),O.sc("value",t.selectedValue3)("state","error"),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(1),O.sc("static",!0)("type","error"),O.Ab(4),O.sc("value",t.selectedValue4)("state","information"),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(1),O.sc("static",!0)("type","information"))},directives:[ce.a,ae.s,be.a,se.a],encapsulation:2}),e}(),Ce=n("GqZa");function xe(e,t){if(1&e&&(O.Sb(0,"fd-option",3),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}function Re(e,t){if(1&e&&(O.Sb(0,"span"),O.Tc(1),O.Rb()),2&e){var n=O.kc().selected;O.Ab(1),O.Uc(n.id)}}function Te(e,t){if(1&e&&(O.Sb(0,"div",4),O.Nb(1,"fd-icon",5),O.Tc(2),O.Rc(3,Re,2,1,"span",6),O.Rb()),2&e){var n=t.$implicit,o=t.selected;O.Ab(2),O.Vc(" ",n," "),O.Ab(1),O.sc("ngIf",o)}}var Ve=function(){function e(){this.options=["Apple","Pineapple","Tomato","Strawberry"]}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-custom-trigger"]],decls:4,vars:3,consts:[["placeholder","Select an option",3,"value","controlTemplate","valueChange"],[3,"value",4,"ngFor","ngForOf"],["customSelectTemplate",""],[3,"value"],[1,"custom-select-trigger-styling"],["glyph","action-settings"],[4,"ngIf"]],template:function(e,t){if(1&e&&(O.Sb(0,"fd-select",0),O.gc("valueChange",(function(e){return t.selectedValue=e})),O.Rc(1,xe,2,2,"fd-option",1),O.Rb(),O.Rc(2,Te,4,2,"ng-template",null,2,O.Sc)),2&e){var n=O.Ec(3);O.sc("value",t.selectedValue)("controlTemplate",n),O.Ab(1),O.sc("ngForOf",t.options)}},directives:[ce.a,ae.s,se.a,Ce.a,ae.t],styles:[".custom-select-trigger-styling{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.custom-select-trigger-styling span{color:#a9a9a9;padding-left:.5rem}.custom-select-trigger-styling fd-icon{display:-ms-flexbox;display:flex;padding-right:.5rem}[dir=rtl] span{padding-right:.5rem}[dir=rtl] fd-icon{padding-left:.5rem}"],encapsulation:2}),e}(),Ae=n("dAMx"),Fe=n("RbsF"),ke=n("nCrf"),Oe=n("+mO0");function we(e,t){if(1&e&&(O.Sb(0,"fd-option",5),O.Nb(1,"i",6),O.Sb(2,"span",7),O.Tc(3),O.Rb(),O.Sb(4,"span",8),O.Tc(5),O.Rb(),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.sc("glyph","add"),O.Ab(2),O.Uc(n.name),O.Ab(2),O.Vc("",n.kCal," kcal")}}function Ne(e,t){if(1&e&&(O.Sb(0,"fd-option",5),O.Nb(1,"i",6),O.Sb(2,"span",7),O.Tc(3),O.Rb(),O.Sb(4,"span",8),O.Tc(5),O.Rb(),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.sc("glyph","add"),O.Ab(2),O.Uc(n.name),O.Ab(2),O.Vc("",n.kCal," kcal")}}function Me(e,t){if(1&e&&O.Tc(0),2&e){var n=t.selected;O.Vc(" ",(null==n?null:n.value.name)||"Select an option"," ")}}var Ee=function(){function e(){this.fruits=[{name:"Apple",kCal:"49.05"},{name:"Pineapple",kCal:"50"},{name:"Strawberry",kCal:"32"}],this.vegetables=[{name:"Cabbage",kCal:"23"},{name:"Carrot",kCal:"35"},{name:"Leek",kCal:"31"}]}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-nested-options"]],decls:12,vars:8,consts:[[3,"value","extendedBodyTemplate","controlTemplate","valueChange"],["fd-list-group-header",""],[3,"value",4,"ngFor","ngForOf"],["customSelectTemplate",""],[2,"display","block"],[3,"value"],["fd-list-icon","",3,"glyph"],["fd-list-title",""],["fd-list-secondary",""]],template:function(e,t){if(1&e&&(O.Sb(0,"fd-select",0),O.gc("valueChange",(function(e){return t.selectedValue=e})),O.Sb(1,"li",1),O.Tc(2,"Fruits"),O.Rb(),O.Rc(3,we,6,4,"fd-option",2),O.Sb(4,"li",1),O.Tc(5,"Vegetables"),O.Rb(),O.Rc(6,Ne,6,4,"fd-option",2),O.Rc(7,Me,1,1,"ng-template",null,3,O.Sc),O.Rb(),O.Sb(9,"small",4),O.Tc(10),O.lc(11,"json"),O.Rb()),2&e){var n=O.Ec(8);O.sc("value",t.selectedValue)("extendedBodyTemplate",!0)("controlTemplate",n),O.Ab(3),O.sc("ngForOf",t.fruits),O.Ab(3),O.sc("ngForOf",t.vegetables),O.Ab(4),O.Vc("Selected value: ",O.mc(11,6,t.selectedValue),"")}},directives:[ce.a,Ae.a,ae.s,se.a,Fe.a,ke.a,Oe.a],pipes:[ae.k],styles:[".fd-menu__title[_ngcontent-%COMP%]{background-color:#e7e7e7}"]}),e}();function Ue(e,t){if(1&e&&(O.Sb(0,"fd-option",3),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}var Pe=function(){function e(){this.options=["Apple","Pineapple","Tomato","Strawberry"],this.mobileConfig={hasCloseButton:!0,title:"Select your favourite fruit"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-mobile-example"]],decls:4,vars:5,consts:[["placeholder","Select an option","stateMessage","Select your favourite fruit","state","information",3,"value","mobile","mobileConfig","valueChange"],[3,"value",4,"ngFor","ngForOf"],[2,"display","block"],[3,"value"]],template:function(e,t){1&e&&(O.Sb(0,"fd-select",0),O.gc("valueChange",(function(e){return t.selectedValue=e})),O.Rc(1,Ue,2,2,"fd-option",1),O.Rb(),O.Sb(2,"small",2),O.Tc(3),O.Rb()),2&e&&(O.sc("value",t.selectedValue)("mobile",!0)("mobileConfig",t.mobileConfig),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(2),O.Vc("Selected value: ",t.selectedValue,""))},directives:[ce.a,ae.s,se.a],encapsulation:2}),e}();function Ge(e,t){if(1&e&&(O.Sb(0,"fd-option",3),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}var Ie=function(){function e(){this.options=["Apple","Apricot","Avocado","Banana","Blueberry","Bing Cherry","Mango","Mandarin","Melon"]}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-max-height-example"]],decls:4,vars:4,consts:[["placeholder","Select an option",3,"value","maxHeight","valueChange"],[3,"value",4,"ngFor","ngForOf"],[2,"display","block"],[3,"value"]],template:function(e,t){1&e&&(O.Sb(0,"fd-select",0),O.gc("valueChange",(function(e){return t.selectedValue=e})),O.Rc(1,Ge,2,2,"fd-option",1),O.Rb(),O.Sb(2,"small",2),O.Tc(3),O.Rb()),2&e&&(O.sc("value",t.selectedValue)("maxHeight","250px"),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(2),O.Vc("Selected value: ",t.selectedValue,""))},directives:[ce.a,ae.s,se.a],encapsulation:2}),e}(),$e=n("0b/r");function Be(e,t){if(1&e&&(O.Sb(0,"fd-option",6),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}var _e=function(){function e(){this.options=["Apple","Pineapple","Tomato","Strawberry"],this.addedOptions=1}return e.prototype.addOption=function(){this.options.push("New option "+this.addedOptions++)},e.prototype.removeOption=function(){this.options.length>1&&this.options.pop()},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-adding-example"]],decls:7,vars:4,consts:[[1,"example-btn-holder"],["fd-button","","label","Add Option",3,"click"],["fd-button","","label","Remove Option",3,"click"],["placeholder","Select an option",3,"value","closeOnOutsideClick","valueChange"],[3,"value",4,"ngFor","ngForOf"],[2,"display","block"],[3,"value"]],template:function(e,t){1&e&&(O.Sb(0,"div",0),O.Sb(1,"button",1),O.gc("click",(function(){return t.addOption()})),O.Rb(),O.Sb(2,"button",2),O.gc("click",(function(){return t.removeOption()})),O.Rb(),O.Rb(),O.Sb(3,"fd-select",3),O.gc("valueChange",(function(e){return t.selectedValue=e})),O.Rc(4,Be,2,2,"fd-option",4),O.Rb(),O.Sb(5,"small",5),O.Tc(6),O.Rb()),2&e&&(O.Ab(3),O.sc("value",t.selectedValue)("closeOnOutsideClick",!1),O.Ab(1),O.sc("ngForOf",t.options),O.Ab(2),O.Vc("Selected value: ",t.selectedValue,""))},directives:[$e.a,ce.a,ae.s,se.a],styles:[".fd-button[_ngcontent-%COMP%]{margin-right:12px}.example-btn-holder[_ngcontent-%COMP%]{margin-bottom:16px}"]}),e}();function He(e,t){if(1&e&&(O.Sb(0,"fd-option",8),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}var De=function(){function e(){this.options=["Apple","Pineapple","Tomato","Strawberry"],this.selectedValue=this.options[0]}return e.prototype.changeValue=function(){this.selectedValue=this.getNewValue()},e.prototype.getNewValue=function(){var e=this.options[Date.now()%this.options.length];return this.selectedValue===e?this.getNewValue():e},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-programmatic-example"]],decls:9,vars:4,consts:[[1,"example-btn-holder"],["fd-button","","label","Change Value",3,"click"],["fd-button","","label","Open",3,"click"],["fd-button","","label","Close",3,"click"],["placeholder","Select value",3,"value","closeOnOutsideClick","valueChange"],["select",""],[3,"value",4,"ngFor","ngForOf"],[2,"display","block"],[3,"value"]],template:function(e,t){if(1&e){var n=O.Tb();O.Sb(0,"div",0),O.Sb(1,"button",1),O.gc("click",(function(){return t.changeValue()})),O.Rb(),O.Sb(2,"button",2),O.gc("click",(function(){return O.Gc(n),O.Ec(5).open()})),O.Rb(),O.Sb(3,"button",3),O.gc("click",(function(){return O.Gc(n),O.Ec(5).close()})),O.Rb(),O.Rb(),O.Sb(4,"fd-select",4,5),O.gc("valueChange",(function(e){return t.selectedValue=e})),O.Rc(6,He,2,2,"fd-option",6),O.Rb(),O.Sb(7,"small",7),O.Tc(8),O.Rb()}2&e&&(O.Ab(4),O.sc("value",t.selectedValue)("closeOnOutsideClick",!1),O.Ab(2),O.sc("ngForOf",t.options),O.Ab(2),O.Vc("Selected value: ",t.selectedValue,""))},directives:[$e.a,ce.a,ae.s,se.a],styles:[".fd-button[_ngcontent-%COMP%]{margin-right:12px}.example-btn-holder[_ngcontent-%COMP%]{margin-bottom:16px}"]}),e}(),je=n("nIj0");function Le(e,t){if(1&e&&(O.Sb(0,"fd-option",4),O.Tc(1),O.Rb()),2&e){var n=t.$implicit;O.sc("value",n),O.Ab(1),O.Uc(n)}}var Je=function(){function e(){this.options=["Apple","Pineapple","Tomato","Strawberry"],this.customForm=new je.k({selectControl:new je.h(this.options[0],je.H.required)})}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-forms"]],decls:11,vars:6,consts:[[3,"formGroup"],["formControlName","selectControl"],[3,"value",4,"ngFor","ngForOf"],[2,"display","block"],[3,"value"]],template:function(e,t){1&e&&(O.Sb(0,"form",0),O.Sb(1,"fd-select",1),O.Rc(2,Le,2,2,"fd-option",2),O.Rb(),O.Rb(),O.Sb(3,"small",3),O.Tc(4),O.Rb(),O.Sb(5,"small",3),O.Tc(6),O.Rb(),O.Sb(7,"small",3),O.Tc(8),O.Rb(),O.Sb(9,"small",3),O.Tc(10),O.Rb()),2&e&&(O.sc("formGroup",t.customForm),O.Ab(2),O.sc("ngForOf",t.options),O.Ab(2),O.Vc("Value: ",t.customForm.controls.selectControl.value,""),O.Ab(2),O.Vc("Touched: ",t.customForm.touched,""),O.Ab(2),O.Vc("Dirty: ",t.customForm.dirty,""),O.Ab(2),O.Vc("Status: ",t.customForm.status,""))},directives:[je.J,je.u,je.l,ce.a,je.t,je.j,ae.s,se.a],styles:[".flex-form-set[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}"]}),e}(),We=function(){return["/core/global-config"]},qe=function(){function e(){this.selectMode=[{language:"html",code:o,fileName:"select-mode-example",typescriptFileCode:l,component:"SelectModeExampleComponent"}],this.selectMobile=[{language:"html",code:i,fileName:"select-mobile-example"},{language:"typescript",component:"SelectMobileExampleComponent",code:r,fileName:"select-mobile-example"}],this.selectProgrammatic=[{language:"html",code:c,fileName:"select-programmatic-example",scssFileCode:a},{language:"typescript",component:"SelectProgrammaticExampleComponent",code:s,fileName:"select-programmatic-example"}],this.selectExtendedOptions=[{language:"html",code:p,fileName:"select-nested-options",typescriptFileCode:d,component:"SelectNestedOptionsComponent",scssFileCode:u}],this.customSelectTemplate=[{language:"html",code:m,fileName:"select-custom-trigger",typescriptFileCode:f,component:"SelectCustomTriggerComponent",scssFileCode:b}],this.selectAdding=[{language:"html",code:g,fileName:"select-adding-example",scssFileCode:h},{language:"typescript",component:"SelectAddingExampleComponent",code:v,fileName:"select-adding-example"}],this.selectForm=[{language:"html",code:S,fileName:"select-forms"},{language:"typescript",component:"SelectFormsComponent",code:y,fileName:"select-forms"}],this.selectMaxHeight=[{language:"html",code:C,fileName:"select-max-height-example",typescriptFileCode:x,component:"SelectMaxHeightExampleComponent"}],this.selectSemantic=[{language:"html",code:R,fileName:"select-types-example",typescriptFileCode:T,component:"SelectTypesExampleComponent"}]}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=O.Gb({type:e,selectors:[["fd-select-docs"]],decls:121,vars:29,consts:[[3,"id","componentName"],[3,"exampleFiles"],["fragment","mobile-mode-config",3,"routerLink"]],template:function(e,t){1&e&&(O.Sb(0,"fd-docs-section-title",0),O.Tc(1," Select Modes\n"),O.Rb(),O.Sb(2,"description"),O.Tc(3," Following examples presents different modes of the Select control.\n"),O.Rb(),O.Sb(4,"component-example"),O.Nb(5,"fd-select-mode-example"),O.Rb(),O.Nb(6,"code-example",1),O.Nb(7,"separator"),O.Sb(8,"fd-docs-section-title",0),O.Tc(9," Select Semantic States\n"),O.Rb(),O.Sb(10,"description"),O.Tc(11," Use semantic states to visually highlight current state of the Select.\n"),O.Rb(),O.Sb(12,"component-example"),O.Nb(13,"fd-select-semantic-state-example"),O.Rb(),O.Nb(14,"code-example",1),O.Nb(15,"separator"),O.Sb(16,"fd-docs-section-title",0),O.Tc(17," Custom Control Content\n"),O.Rb(),O.Sb(18,"description"),O.Tc(19," The content of the Select control can be customized using a custom template which needs to be referenced in the "),O.Sb(20,"code"),O.Tc(21,"[controlTemplate]"),O.Rb(),O.Tc(22," input. Select provides the following context values to the template: "),O.Sb(23,"ul"),O.Sb(24,"li"),O.Tc(25,"Text value of selected option - "),O.Sb(26,"code"),O.Tc(27,"implicit"),O.Rb(),O.Rb(),O.Sb(28,"li"),O.Tc(29,"Reference to selected option - "),O.Sb(30,"code"),O.Tc(31,"selected"),O.Rb(),O.Rb(),O.Rb(),O.Tc(32," Selected option as a context to custom template.\n"),O.Rb(),O.Sb(33,"component-example"),O.Nb(34,"fd-select-custom-trigger"),O.Rb(),O.Nb(35,"code-example",1),O.Nb(36,"separator"),O.Sb(37,"fd-docs-section-title",0),O.Tc(38," Extended Options\n"),O.Rb(),O.Sb(39,"description"),O.Tc(40," ListComponent features such as headers, titles and icons are supported inside the OptionComponent. This example also shows how to handle complex option types like "),O.Sb(41,"code"),O.Tc(42,"Object"),O.Rb(),O.Tc(43,".\n"),O.Rb(),O.Sb(44,"component-example"),O.Nb(45,"fd-select-nested-options"),O.Rb(),O.Nb(46,"code-example",1),O.Nb(47,"separator"),O.Sb(48,"fd-docs-section-title",0),O.Tc(49," Select In Mobile Mode\n"),O.Rb(),O.Sb(50,"description"),O.Tc(51," To use Select in mobile mode: "),O.Sb(52,"ul"),O.Sb(53,"li"),O.Tc(54,"import "),O.Sb(55,"code"),O.Tc(56,"SelectMobileModule"),O.Rb(),O.Rb(),O.Sb(57,"li"),O.Tc(58,"Set "),O.Sb(59,"code"),O.Tc(60,"[mobile]"),O.Rb(),O.Tc(61," property to true"),O.Rb(),O.Sb(62,"li"),O.Tc(63,"Set "),O.Sb(64,"code"),O.Tc(65,"[mobileConfig]"),O.Rb(),O.Tc(66," with "),O.Sb(67,"code"),O.Tc(68,"MobileModeConfig"),O.Rb(),O.Tc(69," configuration object to customize the look of the control "),O.Rb(),O.Rb(),O.Tc(70," Select Mobile Mode can be configured "),O.Sb(71,"strong"),O.Tc(72,"globally"),O.Rb(),O.Tc(73," by providing "),O.Sb(74,"code"),O.Tc(75,"MOBILE_MODE_CONFIG"),O.Rb(),O.Tc(76," token. Check "),O.Sb(77,"a",2),O.Tc(78,"Global Configuration page"),O.Rb(),O.Tc(79," for more information.\n"),O.Rb(),O.Sb(80,"component-example"),O.Nb(81,"fd-select-mobile-example"),O.Rb(),O.Nb(82,"code-example",1),O.Nb(83,"separator"),O.Sb(84,"fd-docs-section-title",0),O.Tc(85," Select Max Height\n"),O.Rb(),O.Sb(86,"description"),O.Tc(87," The Select component allows you to define the "),O.Sb(88,"code"),O.Tc(89,"[maxHeight]"),O.Rb(),O.Tc(90,". It can be useful when there are a lot of options given that the select body is be scrollable. By default the maximum height of the Select body is 45% of the browser's inner window height.\n"),O.Rb(),O.Sb(91,"component-example"),O.Nb(92,"fd-select-max-height-example"),O.Rb(),O.Nb(93,"code-example",1),O.Nb(94,"separator"),O.Sb(95,"fd-docs-section-title",0),O.Tc(96," Adding and Removing Options\n"),O.Rb(),O.Sb(97,"description"),O.Tc(98," Adding and removing options dynamically is supported seamlessly with very little extra work required from the developer. By design, if the user removes the option that is currently selected, the value will become undefined. This was implemented to prevent a user from keeping the active value of a previously removed option. This behavior can be automatically prevented by setting "),O.Sb(99,"code"),O.Tc(100,'[unselectMissingOption]="false"'),O.Rb(),O.Tc(101,".\n"),O.Rb(),O.Sb(102,"component-example"),O.Nb(103,"fd-select-adding-example"),O.Rb(),O.Nb(104,"code-example",1),O.Nb(105,"separator"),O.Sb(106,"fd-docs-section-title",0),O.Tc(107," Programmatic Control\n"),O.Rb(),O.Sb(108,"description"),O.Tc(109," Controlling Select through programmatic methods is possible by calling the Select component instance directly. Note that this can be done through ViewChild as well.\n"),O.Rb(),O.Sb(110,"component-example"),O.Nb(111,"fd-select-programmatic-example"),O.Rb(),O.Nb(112,"code-example",1),O.Nb(113,"separator"),O.Sb(114,"fd-docs-section-title",0),O.Tc(115," Select In A Reactive Form\n"),O.Rb(),O.Sb(116,"description"),O.Tc(117," The Select component can be used inside Angular reactive forms.\n"),O.Rb(),O.Sb(118,"component-example"),O.Nb(119,"fd-select-forms"),O.Rb(),O.Nb(120,"code-example",1)),2&e&&(O.sc("id","mode")("componentName","select"),O.Ab(6),O.sc("exampleFiles",t.selectMode),O.Ab(2),O.sc("id","semantic")("componentName","select"),O.Ab(6),O.sc("exampleFiles",t.selectSemantic),O.Ab(2),O.sc("id","custom-select-template")("componentName","select"),O.Ab(19),O.sc("exampleFiles",t.customSelectTemplate),O.Ab(2),O.sc("id","nested-options")("componentName","select"),O.Ab(9),O.sc("exampleFiles",t.selectExtendedOptions),O.Ab(2),O.sc("id","select-mobile")("componentName","select"),O.Ab(29),O.sc("routerLink",O.wc(28,We)),O.Ab(5),O.sc("exampleFiles",t.selectMobile),O.Ab(2),O.sc("id","select-max-height")("componentName","select"),O.Ab(9),O.sc("exampleFiles",t.selectMaxHeight),O.Ab(2),O.sc("id","adding-removing-options")("componentName","select"),O.Ab(9),O.sc("exampleFiles",t.selectAdding),O.Ab(2),O.sc("id","programmatic-control")("componentName","select"),O.Ab(6),O.sc("exampleFiles",t.selectProgrammatic),O.Ab(2),O.sc("id","reactive-form")("componentName","select"),O.Ab(6),O.sc("exampleFiles",t.selectForm))},directives:[oe.a,N.a,le.a,ue,me.a,fe.a,ye,Ve,Ee,V.e,Pe,Ie,_e,De,Je],styles:["ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(:last-child) { margin-bottom: 0.5rem }"]}),e}(),ze=n("LTOS"),Ye=[{path:"",component:U,children:[{path:"",component:qe},{path:"api",component:A.a,data:{content:k.a.select}}]}],Ze=function(){function e(){}return e.\u0275mod=O.Kb({type:e}),e.\u0275inj=O.Jb({factory:function(t){return new(t||e)},imports:[[V.f.forChild(Ye),F.a,ze.SelectMobileModule,ze.SelectModule,ze.DialogModule,ze.ListModule,ze.FormModule],V.f]}),e}()}}]);