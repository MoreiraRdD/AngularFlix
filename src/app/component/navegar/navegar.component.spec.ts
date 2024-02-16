import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegarComponent } from './navegar.component';

describe('NavegarComponent', () => {
  let component: NavegarComponent;
  let fixture: ComponentFixture<NavegarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
