import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonComponentComponent } from './json-component.component';

describe('JsonComponentComponent', () => {
  let component: JsonComponentComponent;
  let fixture: ComponentFixture<JsonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
