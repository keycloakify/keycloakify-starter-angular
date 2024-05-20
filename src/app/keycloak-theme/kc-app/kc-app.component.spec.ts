import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcAppComponent } from './kc-app.component';

describe('KcAppComponent', () => {
  let component: KcAppComponent;
  let fixture: ComponentFixture<KcAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KcAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KcAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
