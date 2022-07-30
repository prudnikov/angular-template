import { TestBed } from '@angular/core/testing';

import { IdChildResolver } from './id-child.resolver';

describe('IdChildResolver', () => {
  let resolver: IdChildResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IdChildResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
