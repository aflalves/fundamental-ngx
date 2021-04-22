import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotificationActionsComponent } from './notification-actions.component';

describe('NotificationActionsComponent', () => {
    let component: NotificationActionsComponent;
    let fixture: ComponentFixture<NotificationActionsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationActionsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotificationActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});