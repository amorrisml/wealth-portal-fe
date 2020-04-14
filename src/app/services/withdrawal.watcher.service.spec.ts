import { TestBed } from '@angular/core/testing';

import { Withdrawal.WatcherService } from './withdrawal.watcher.service';

describe('Withdrawal.WatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Withdrawal.WatcherService = TestBed.get(Withdrawal.WatcherService);
    expect(service).toBeTruthy();
  });
});
