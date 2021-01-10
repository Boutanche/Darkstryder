import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtagonistsComponent } from './protagonists.component';

describe('ProtagonistsComponent', () => {
  let component: ProtagonistsComponent;
  let fixture: ComponentFixture<ProtagonistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtagonistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtagonistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
