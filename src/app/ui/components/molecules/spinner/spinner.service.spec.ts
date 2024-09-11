import { TestBed } from '@angular/core/testing';
import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerService],
    });
    service = TestBed.inject(SpinnerService);
  });

  it('Should to create service', () => {
    expect(service).toBeTruthy();
  });

  it('Should to set isLoading to true', (done: DoneFn) => {
    service.isLoading$.subscribe((value) => {
      expect(value).toBeTrue();

      done();
    });

    service.show();
  });

  it('Should to set isLoading to false', (done: DoneFn) => {
    service.isLoading$.subscribe((value) => {
      expect(value).toBeFalse();

      done();
    });

    service.hide();
  });
});
