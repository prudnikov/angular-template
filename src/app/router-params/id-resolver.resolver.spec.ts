import { TestBed } from '@angular/core/testing';

import { IdResolverResolver } from './id-resolver.resolver';

describe('IdResolverResolver', () => {
  let resolver: IdResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IdResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
