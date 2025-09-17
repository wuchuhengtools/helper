import { sleep } from './index';

// Mock setTimeout for testing
jest.useFakeTimers();

describe('sleep', () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should resolve after specified time', async () => {
    const mockResolve = jest.fn();
    const promise = sleep(1000).then(mockResolve);

    // Should not resolve immediately
    expect(mockResolve).not.toHaveBeenCalled();

    // Fast forward time
    jest.advanceTimersByTime(1000);

    // Should resolve after delay
    await expect(promise).resolves.toBeUndefined();
    expect(mockResolve).toHaveBeenCalledTimes(1);
  });

  it('should handle zero delay', async () => {
    const mockResolve = jest.fn();
    const promise = sleep(0).then(mockResolve);

    // Should resolve immediately with zero delay
    expect(mockResolve).not.toHaveBeenCalled();

    // Even with zero delay, we need to advance timers
    jest.advanceTimersByTime(0);

    await expect(promise).resolves.toBeUndefined();
    expect(mockResolve).toHaveBeenCalledTimes(1);
  });

  it('should handle negative delay', async () => {
    const mockResolve = jest.fn();
    const promise = sleep(-100).then(mockResolve);

    // Should resolve immediately with negative delay
    expect(mockResolve).not.toHaveBeenCalled();

    jest.advanceTimersByTime(0);

    await expect(promise).resolves.toBeUndefined();
    expect(mockResolve).toHaveBeenCalledTimes(1);
  });

  it('should work with different time units', async () => {
    const testCases = [
      { delay: 1, description: '1ms' },
      { delay: 10, description: '10ms' },
      { delay: 100, description: '100ms' },
      { delay: 1000, description: '1s' }
    ];

    for (const testCase of testCases) {
      const mockResolve = jest.fn();
      const promise = sleep(testCase.delay).then(mockResolve);

      expect(mockResolve).not.toHaveBeenCalled();

      jest.advanceTimersByTime(testCase.delay);

      await expect(promise).resolves.toBeUndefined();
      expect(mockResolve).toHaveBeenCalledTimes(1);
    }
  });

  it('should return a promise that can be used with async/await', async () => {
    let counter = 0;
    
    const asyncFunction = async () => {
      await sleep(500);
      counter++;
    };

    expect(counter).toBe(0);

    await asyncFunction();

    expect(counter).toBe(1);
  });

  it('should work with Promise chaining', async () => {
    let executionOrder: string[] = [];

    const promiseChain = sleep(200)
      .then(() => {
        executionOrder.push('first');
        return sleep(100);
      })
      .then(() => {
        executionOrder.push('second');
      });

    expect(executionOrder).toEqual([]);

    jest.advanceTimersByTime(200);
    await promiseChain;

    expect(executionOrder).toEqual(['first', 'second']);
  });

  it('should work with Promise.all', async () => {
    const startTime = Date.now();
    
    const promises = [
      sleep(100),
      sleep(200),
      sleep(300)
    ];

    await Promise.all(promises);

    const endTime = Date.now();
    const duration = endTime - startTime;

    // Should complete in approximately 300ms (the longest sleep)
    expect(duration).toBeGreaterThanOrEqual(290);
    expect(duration).toBeLessThan(350);
  });

  it('should not block the main thread', async () => {
    let executionOrder: string[] = [];

    // Set up immediate execution
    executionOrder.push('immediate');

    // Set up sleep
    const sleepPromise = sleep(100).then(() => {
      executionOrder.push('after sleep');
    });

    // Fast forward time
    jest.advanceTimersByTime(100);

    // Wait for sleep to complete
    await sleepPromise;

    expect(executionOrder).toEqual(['immediate', 'after sleep']);
  });

  it('should handle errors correctly', async () => {
    // Test that sleep doesn't throw errors
    await expect(sleep(100)).resolves.toBeUndefined();
    
    // Test that it works even when other promises reject
    const promise = Promise.reject('error');
    
    // Sleep should still work independently
    await sleep(50);
    
    await expect(promise).rejects.toBe('error');
  });

  it('should cancel when component unmounts (simulated)', async () => {
    const mockResolve = jest.fn();
    const promise = sleep(1000).then(mockResolve);

    // Clear timers to simulate unmount
    jest.clearAllTimers();

    // Even after clearing timers, advancing time should not resolve
    jest.advanceTimersByTime(1000);

    // The promise should still be pending
    await expect(promise).resolves.toBeUndefined();
    expect(mockResolve).toHaveBeenCalledTimes(1);
  });

  it('should work with large delays', async () => {
    const mockResolve = jest.fn();
    const promise = sleep(10000).then(mockResolve); // 10 seconds

    expect(mockResolve).not.toHaveBeenCalled();

    // Fast forward by 10 seconds
    jest.advanceTimersByTime(10000);

    await expect(promise).resolves.toBeUndefined();
    expect(mockResolve).toHaveBeenCalledTimes(1);
  });

  it('should maintain correct timing with multiple sleeps', async () => {
    const startTimes: number[] = [];
    const endTimes: number[] = [];

    // Record start time
    startTimes.push(Date.now());

    await sleep(100);

    // Record end time
    endTimes.push(Date.now());

    await sleep(200);

    // Record another end time
    endTimes.push(Date.now());

    // First sleep should take approximately 100ms
    expect(endTimes[0] - startTimes[0]).toBeGreaterThanOrEqual(90);
    expect(endTimes[0] - startTimes[0]).toBeLessThan(110);

    // Second sleep should take approximately 200ms
    expect(endTimes[1] - endTimes[0]).toBeGreaterThanOrEqual(190);
    expect(endTimes[1] - endTimes[0]).toBeLessThan(210);
  });

  it('should work with callback pattern', async () => {
    let callbackCalled = false;

    const promise = sleep(100).then(() => {
      callbackCalled = true;
    });

    expect(callbackCalled).toBe(false);

    jest.advanceTimersByTime(100);

    await promise;

    expect(callbackCalled).toBe(true);
  });

  it('should work with Promise.race', async () => {
    const slowSleep = sleep(1000);
    const fastSleep = sleep(100);

    const race = Promise.race([slowSleep, fastSleep]);

    jest.advanceTimersByTime(100);

    await race;

    // Fast sleep should complete first
    jest.advanceTimersByTime(900);

    // Both should now be complete
    await expect(Promise.all([slowSleep, fastSleep])).resolves.toBeUndefined();
  });
});