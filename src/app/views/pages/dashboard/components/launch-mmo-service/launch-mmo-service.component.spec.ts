import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchMmoServiceComponent } from './launch-mmo-service.component';

describe('LaunchMmoServiceComponent', () => {
  let component: LaunchMmoServiceComponent;
  let fixture: ComponentFixture<LaunchMmoServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchMmoServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchMmoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
