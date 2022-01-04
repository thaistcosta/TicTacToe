import { 
    horizontalWin, 
} from '../src/application';

describe('Application', function () {
  it('should know if a row is completed by the same player', () => {
    expect(horizontalWin(['X','X','X'])).toBe(true);
  });
});

