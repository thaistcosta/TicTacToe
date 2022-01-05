import { 
    horizontalWin, 
} from '../src/application';

describe('Application', function () {
  it('should know if a row is completed by the same player', () => {
    const row = horizontalWin([['X','O','X'],['O','',''],['O','O','O']])    
    expect(JSON.stringify(row) === JSON.stringify(['O'])).toBe(true);     // Should I make a test for each player ('X' and 'O')? or I should include the logical OR here
  });
});

