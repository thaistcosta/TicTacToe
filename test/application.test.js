import { 
    isDivisibleByThree, 
} from '../src/application';

describe('Application', function () {
  it('should know if a number is divisible by three', () => {
    expect(isDivisibleByThree(3)).toBe(true);
  });
});

