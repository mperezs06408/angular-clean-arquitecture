import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerService } from './spinner.service';
import { SpinnerComponent } from './spinner.component';
import { By } from '@angular/platform-browser';

describe('UserSessionGatewayService', () => {
  let component: SpinnerComponent;
  let service: SpinnerService;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SpinnerService],
      imports: [SpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerComponent);
    service = TestBed.inject(SpinnerService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should to create service', () => {
    expect(component).toBeTruthy();
  });

  it('Should to render component when isLoading is activated', (done: DoneFn) => {
    service.isLoading$.subscribe(() => {
      done();
    });

    service.show();
    fixture.detectChanges();

    const spinner = fixture.debugElement.query(By.css('div[class=overlay]'));
    const animation = fixture.debugElement.query(By.css('div[class=loader]'));

    expect(spinner).toBeTruthy();
    expect(animation).toBeTruthy();
  });

  it('Should not to render component when isLoading is deactivated', (done: DoneFn) => {
    service.isLoading$.subscribe(() => {
      done();
    });

    service.hide();
    fixture.detectChanges();

    const spinner = fixture.debugElement.query(By.css('div[class=overlay]'));

    expect(spinner).not.toBeTruthy();
  });
});
