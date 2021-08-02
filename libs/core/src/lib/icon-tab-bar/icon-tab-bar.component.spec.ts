import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTabBarComponent } from './icon-tab-bar.component';
import { TabConfig, TabType } from './types';
import { ContentDensityService, RtlService } from '@fundamental-ngx/core/utils';
import { PopoverModule } from '@fundamental-ngx/core/popover';
import { IconModule } from '@fundamental-ngx/core/icon';
import { IconTabBarTextTypeComponent } from './components/icon-tab-bar-text-type/icon-tab-bar-text-type.component';
import { ExtraButtonDirective } from './directives/extra-button/extra-button.directive';
import { IconTabBarIconTypeComponent } from './components/icon-tab-bar-icon-type/icon-tab-bar-icon-type.component';
import { IconTabBarProcessTypeComponent } from './components/icon-tab-bar-process-type/icon-tab-bar-process-type.component';
import { IconTabBarFilterTypeComponent } from './components/icon-tab-bar-filter-type/icon-tab-bar-filter-type.component';
import { IconTabBarPopoverComponent } from './components/popovers/icon-tab-bar-popover/icon-tab-bar-popover.component';
import { TextTypePopoverComponent } from './components/popovers/text-type-popover/text-type-popover.component';
import { IconBarDndListDirective } from './directives/dnd/icon-bar-dnd-list.directive';
import { IconBarDndItemDirective } from './directives/dnd/icon-bar-dnd-item.directive';
import { IconBarDndContainerDirective } from './directives/dnd/icon-bar-dnd-container.directive';
import { OverflowItemsModule } from '../utils/directives/overflow-items/overflow-items.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { generateTestItems, getGetCenterCoordsOfElement } from './tests-helper';

@Component({
    template: `
        <fd-icon-tab-bar
            [tabsConfig]="items"
            [enableTabReordering]="enableTabReordering"
            [showTabAll]="showTabAll"
            [iconTabType]="iconTabType"
            (iconTabSelected)="selected()"
            (iconTabReordered)="reordered()"
        ></fd-icon-tab-bar>`
})
class HostComponent {

    enableTabReordering = false;
    showTabAll = false;
    iconTabType: TabType = 'text';
    items: TabConfig[] = [];

    selected(): void {
    }

    reordered(): void {
    }
}

let component: HostComponent;
let fixture: ComponentFixture<HostComponent>;

describe('IconTabBarComponent', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                HostComponent,
                IconTabBarComponent,
                IconTabBarTextTypeComponent,
                ExtraButtonDirective,
                IconTabBarIconTypeComponent,
                IconTabBarProcessTypeComponent,
                IconTabBarFilterTypeComponent,
                IconTabBarPopoverComponent,
                TextTypePopoverComponent,
                IconBarDndListDirective,
                IconBarDndItemDirective,
                IconBarDndContainerDirective
            ],
            providers: [ContentDensityService, RtlService],
            imports: [
                IconModule,
                PopoverModule,
                OverflowItemsModule,
                DragDropModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HostComponent);
        component = fixture.componentInstance;
        component.items = generateTestItems(6);
        fixture.detectChanges();
    });
    it('should create tabs', () => {
        const hostEl: HTMLElement = fixture.debugElement.nativeElement;
        const tabs = hostEl.querySelectorAll('.fd-icon-tab-bar__item');
        expect(tabs.length).toBeGreaterThan(0);
    });

    it('should create tabs with subtabs', () => {
        component.items = generateTestItems(6, true);
        fixture.detectChanges();
        const hostEl: HTMLElement = fixture.debugElement.nativeElement;
        const subItemBtn = hostEl.querySelector('.fd-icon-tab-bar__arrow');
        expect(subItemBtn).toBeTruthy();
    });

    it('should create all products tab for filter.', () => {
        component.iconTabType = 'filter';
        component.showTabAll = true;
        fixture.detectChanges();
        const hostEl: HTMLElement = fixture.debugElement.nativeElement;
        const tabAllEl = hostEl.querySelector('.fd-icon-tab-bar__container--filter');
        expect(tabAllEl).toBeTruthy();
    });

    it('should reordering feature available', () => {
        component.enableTabReordering = true;
        fixture.detectChanges();
        const hostEl: HTMLElement = fixture.debugElement.nativeElement;
        const tabs = hostEl.querySelectorAll<HTMLElement>('.fd-icon-tab-bar__item');
        const draggableItem = tabs[0];
        const target = tabs[1];
        const targetCoords = getGetCenterCoordsOfElement(target);
        const initialTabsLength = tabs.length;

        emulateDnD(draggableItem, targetCoords);
        const updateTabsList = hostEl.querySelectorAll<HTMLElement>('.fd-icon-tab-bar__item');

        expect(updateTabsList.length).toBeLessThan(initialTabsLength);
    });

    it('should remove badge on click', () => {
        component.items[0].badge = true;
        component.items = [...component.items];
        fixture.detectChanges();

        const hostEl: HTMLElement = fixture.debugElement.nativeElement;
        const tabsWithBadge = hostEl.querySelector<HTMLElement>('.fd-icon-tab-bar__badge');
        tabsWithBadge.click();
        fixture.detectChanges();
        const emptyResult = hostEl.querySelector<HTMLElement>('.fd-icon-tab-bar__badge');

        expect(emptyResult).not.toBeTruthy();
    });

    it('should emit selected event.', () => {
        const hostEl: HTMLElement = fixture.debugElement.nativeElement;
        const someTab = hostEl.querySelector<HTMLElement>('.fd-icon-tab-bar__tab');

        spyOn(component, 'selected');
        someTab.click();
        fixture.detectChanges();

        expect(component.selected).toHaveBeenCalled();
    });

    it('should emit reordered event.', () => {
        component.enableTabReordering = true;
        fixture.detectChanges();

        const hostEl: HTMLElement = fixture.debugElement.nativeElement;
        const tabs = hostEl.querySelectorAll<HTMLElement>('.fd-icon-tab-bar__item');
        const draggableItem = tabs[0];
        const target = tabs[1];
        const targetCoords = getGetCenterCoordsOfElement(target);

        spyOn(component, 'reordered');
        emulateDnD(draggableItem, targetCoords);

        expect(component.reordered).toHaveBeenCalled();
    });
});

// tslint:disable-next-line:max-line-length
function emulateDnD(draggableItem: HTMLElement, targetCoords: { clientX: number, clientY: number }): void {
    const mousedown = new MouseEvent('mousedown');
    draggableItem.dispatchEvent(mousedown);
    fixture.detectChanges();

    // Need to move two times because cdk skip first moving
    const firstMove = new MouseEvent('mousemove', { clientX: targetCoords.clientX - 50, clientY: targetCoords.clientY - 50 });
    draggableItem.dispatchEvent(firstMove);
    fixture.detectChanges();
    const finalMove = new MouseEvent('mousemove', targetCoords);
    draggableItem.dispatchEvent(finalMove);
    fixture.detectChanges();

    const mouseup = new MouseEvent('mouseup');
    draggableItem.dispatchEvent(mouseup);
    fixture.detectChanges();
}
