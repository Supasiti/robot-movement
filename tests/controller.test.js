const controller = require('../src/controller');

const mockError = jest.spyOn(console, 'error');
mockError.mockImplementation(() => {});

describe('controller.run()', () => {

  //  no valid place command
  it ('should not run anything if there is no valid place command', ()=> {
    const commands = [ 
      {
        command: 'place',
        params: { x: 5, y: 2, facing: 'north'}
      },
      {
        command: 'left'
      },
      {
        command: 'place',
        params: { x: 5, y: 2, facing: 'nor'}
      },
    ]
    
    const mockLog = jest.spyOn(console, 'log');
    mockLog.mockImplementation(() => {});

    controller.run(commands);

    expect(mockLog).toHaveBeenCalledTimes(1);
    mockLog.mockRestore();
  });


  //  no valid command after first valid place
  it ('should not run anything if there is no valid command after the first valid place command',
    ()=> {
    const commands = [ 
      {
        command: 'place',
        params: { x: 0, y: 0, facing: 'north'}
      },
      {
        command: 'let'
      }
    ];
    
    const mockLog = jest.spyOn(console, 'log');
    mockLog.mockImplementation(() => {});

    controller.run(commands);

    expect(mockLog).toHaveBeenCalledTimes(1);
    mockLog.mockRestore();
  });

  //  work perfectly 
  it ('should log a position of robot when correct commands are entered',
    ()=> {
    const commands = [ 
      {
        command: 'place',
        params: { x: 0, y: 0, facing: 'north'}
      },
      {command: 'move'},
      {command: 'report'}
    ];
    
    const mockLog = jest.spyOn(console, 'log');
    mockLog.mockImplementation(() => {});

    controller.run(commands);

    expect(mockLog).toHaveBeenCalledTimes(2);
    expect(mockLog).toHaveBeenNthCalledWith(1, '0, 1, north');
    mockLog.mockRestore();
  });


  //  work perfectly 
  it ('should log a position of robot when correct commands are entered',
    ()=> {
    const commands = [ 
      {
        command: 'place',
        params: { x: 0, y: 0, facing: 'north'}
      },
      {command: 'move'},
      {command: 'report'},
      {
        command: 'place',
        params: { x: 0, y: 0, facing: 'north'}
      },
      {command: 'left'},
      {command: 'report'},
      {
        command: 'place',
        params: { x: 1, y: 2, facing: 'east'}
      },
      {command: 'move'},
      {command: 'move'},
      {command: 'left'},
      {command: 'move'},  
      {command: 'report'}
    ];
    
    const mockLog = jest.spyOn(console, 'log');
    mockLog.mockImplementation(() => {});

    controller.run(commands);

    expect(mockLog).toHaveBeenCalledTimes(4);
    expect(mockLog).toHaveBeenNthCalledWith(1, '0, 1, north');
    expect(mockLog).toHaveBeenNthCalledWith(2, '0, 0, west');
    expect(mockLog).toHaveBeenNthCalledWith(3, '3, 3, north');
    mockLog.mockRestore();
  });
});
