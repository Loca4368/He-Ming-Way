import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { NavigatorComponent } from './navigator.component';

describe('Navigator Component', function () {

    let component: NavigatorComponent;
    let fixture: ComponentFixture<NavigatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavigatorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    // it('Should return true', function () {

    // });


});