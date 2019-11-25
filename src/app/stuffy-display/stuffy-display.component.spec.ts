import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffyDisplayComponent } from './stuffy-display.component';

describe('StuffyDisplayComponent', () => {
  let component: StuffyDisplayComponent;
  let fixture: ComponentFixture<StuffyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffyDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
