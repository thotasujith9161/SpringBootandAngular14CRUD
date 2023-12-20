import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialPriceComponent } from './tutorial-price.component';

describe('TutorialPriceComponent', () => {
  let component: TutorialPriceComponent;
  let fixture: ComponentFixture<TutorialPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
