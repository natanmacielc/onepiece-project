import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureDialogComponent } from './picture-dialog.component';

describe('PictureDialogComponent', () => {
  let component: PictureDialogComponent;
  let fixture: ComponentFixture<PictureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
