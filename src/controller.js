const robotFactory = require('../lib/robot');

const validCommands = {
  place: (robot, params) => {
    const result = robotFactory(params.x, params.y, params.facing);
    console.log(`PLACE ${params.x}, ${params.y}, ${params.facing}`)
    return result; 
  },
  move: (robot) => {
    const result = robot.move();
    console.log('MOVE');
    return result;
  },
  left: (robot) => {
    const result = robot.turnLeft();
    console.log('LEFT');
    return result;
  },
  right: (robot) => {
    const result = robot.turnRight();
    console.log('RIGHT');
    return result;
  }, 
  report: (robot) => {
    const pos = robot.position();
    console.log(`REPORT: ${pos.x}, ${pos.y}, ${pos.facing}`);
    return robot;
  }
};

//  validate place command 
const validatePlaceCommand = (command) => {
  if (command.command && command.command.toLowerCase() === 'place') {
    const {x, y, facing} = command.params;
    const robot = robotFactory(x, y, facing);
    return robot != undefined;
  }
  return false;
}

// find the first valid place command and return the a subset of commands from it
const getValidCommands = (commands) => {
  const firstValidPlace = commands.find(command => validatePlaceCommand(command));
  if (firstValidPlace) {
    const index = commands.indexOf(firstValidPlace);
    const subset = commands.slice(index);
    return subset.filter((command) => command.command in validCommands);
  }
  return [];
}

// run valid command
const runValidCommand = (robot, command) => {
  const robotCommand = validCommands[command.command];
  return robotCommand(robot, command.params)
};

// run all valid commands
const runValidCommands = (commands) => {
  commands.reduce(runValidCommand, robotFactory(0, 0, 'north'));
}

// from a list of commands - run them
// will first look for a valid 'place' command before executing anything else
// will ignore any command not in the list
// expected command to be an object :
// {
//   command: "string";
//   params: {x: 'number', y : 'number', facing: 'string'} if command is place else undefined
// }
const controller = {
  run: (commands) => { 
    const validCommands = getValidCommands(commands);
    if (validCommands) runValidCommands(validCommands);
    console.log('Completed all valid commands!')
    return;
  }
};


module.exports = controller;