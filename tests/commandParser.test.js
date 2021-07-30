const parseCommands = require('../src/commandParser');

describe('parseCommands', () => {

  it ('should parse a set of commands when given a correct string', () => {
    const filePath = './tests/testCommands.txt';   // path relative to where it is called
    const expected = [
      { command: 'place', params: { x: 0, y: 0, facing: 'north' } },
      { command: 'move' },
      { command: 'report' },
      { command: 'place', params: { x: 0, y: 0, facing: 'north' } },
      { command: 'left' },
      { command: 'report' },
      { command: 'place', params: { x: 1, y: 2, facing: 'east' } },
      { command: 'move' },
      { command: 'move' },
      { command: 'left' },
      { command: 'move' },
      { command: 'report' }
    ];

    expect(parseCommands(filePath)).resolves.toEqual(expected);
  });
});
