const robotFactory = require('../lib/robot');


describe('robot', () => {
  
  //  init
  describe ('init', () => {

    // correct implementation
    it('should return an object when right arguments are passed', () => {
      const robot = robotFactory(1,2,'north');
      const expectedX = 1;
      const expectedY = 2;
      const expectedFacing = 'north';

      expect(robot.position().x).toEqual(expectedX);
      expect(robot.position().y).toEqual(expectedY);
      expect(robot.position().facing).toEqual(expectedFacing);
    })

    // when one of the position is outside 0 to 4
    it('should log an error when input position is below 0', () => {
      const posX = -1;
      const posY = 2;
      const facing = 'north';
      const expected = undefined;

      const mock  = jest.spyOn(console, 'error');
      mock.mockImplementation(() => {});

      const robot = robotFactory(posX, posY, facing);
      
      expect(mock).toHaveBeenLastCalledWith('position must be between 0 and 4');
      expect(robot).toEqual(expected);
    })

    it('should log an error when input position is above 4', () => {
      const posX = 5;
      const posY = 2;
      const facing = 'north';
      const expected = undefined;

      const mock  = jest.spyOn(console, 'error');
      mock.mockImplementation(() => {});

      const robot = robotFactory(posX, posY, facing);
      
      expect(mock).toHaveBeenLastCalledWith('position must be between 0 and 4');
      expect(robot).toEqual(expected);
    })

    // when one of the position is outside 0 to 4
    it('should log an error when input facing is not on the list', () => {
      const posX = 1;
      const posY = 2;
      const facing = 'noh';
      const expected = undefined;

      const mock  = jest.spyOn(console, 'error');
      mock.mockImplementation(() => {});

      const robot = robotFactory(posX, posY, facing);
      
      expect(mock).toHaveBeenLastCalledWith('facing must be any string in this list [north, east, south, west]');
      expect(robot).toEqual(expected);
    });

  });

  // move 
  describe('move', () => {
    const testConditions = [
      [[1, 0, 'south'], [1, 0, 'south']],
      [[0, 1, 'west'],  [0, 1, 'west']],
      [[4, 3, 'east'],  [4, 3, 'east']],
      [[0, 4, 'north'], [0, 4, 'north']],
      [[2, 2, 'north'], [2, 3, 'north']],
      [[2, 2, 'east'],  [3, 2, 'east']],
      [[2, 2, 'south'], [2, 1, 'south']],
      [[2, 2, 'west'],  [1, 2, 'west']],
    ];
    test.each(testConditions)('robotFactory(%o).move()', (input, expected) => {
      const robot = robotFactory(...input);
      const moved = robot.move();

      expect(moved.position().x).toEqual(expected[0]);
      expect(moved.position().y).toEqual(expected[1]);
      expect(moved.position().facing).toEqual(expected[2]);
    })

  });

});