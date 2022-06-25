import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatererDetailComponent } from './caterer-detail.component';

describe('CatererDetailComponent', () => {
  let component: CatererDetailComponent;
  let fixture: ComponentFixture<CatererDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatererDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatererDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
