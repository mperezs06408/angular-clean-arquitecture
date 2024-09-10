import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MainLayout } from './main-layout.component';
import { RouterLink, RouterModule } from '@angular/router';

describe('MainLayoutComponent', () => {
  let component: MainLayout;
  let fixture: ComponentFixture<MainLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), RouterLink, MainLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should to create service', () => {
    expect(component).toBeTruthy();
  });
});
