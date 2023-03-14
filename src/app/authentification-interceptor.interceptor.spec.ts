import { TestBed } from '@angular/core/testing';

import { AuthentificationInterceptor } from './authentification-interceptor.interceptor';

describe('AuthentificationInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthentificationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthentificationInterceptor = TestBed.inject(AuthentificationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
