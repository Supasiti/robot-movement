const {validateType} = require('../src/validation');

const facings = ['north', 'east', 'south', 'west'];


// ---------------------------------
// validation 
const validatePosition = (pos) => {
  if (validateType(pos, 'position', 'number')){
    const integer = parseInt(pos);
    if ( (integer - 0) * (4 - integer ) < 0){
      console.error('position must be between 0 and 4');
      return false;
    }
    return true;
  };
  return false;
}

const validateFacing = (facing) => {
  if (validateType(facing, 'facing', 'string')){
    if (facings.includes(facing)) return true;
    console.error(`facing must be any string in this list [${facings.join(', ')}]`);
    return false;
  }
  return false;
}

const validateArg = (posX, posY, facing) => {
  return validatePosition(posX) && 
    validatePosition(posY) && 
    validateFacing(facing)
}

// ----------------------------------------------
// move

const move = (posX, posY, facing) => {
  if (facing === 'north') return robotFactory(posX, Math.min(4, posY + 1), facing)
  if (facing === 'east')  return robotFactory(Math.min(4, posX + 1), posY, facing)
  if (facing === 'south') return robotFactory(posX, Math.max(0, posY - 1), facing)
  if (facing === 'west')  return robotFactory(Math.max(0, posX - 1), posY, facing)

  console.error(`facing must be any string in this list [${facings.join(', ')}]`);
  return ; 
}


// ----------------------------------------------
// robot factory 
const robotFactory = (posX, posY,facing) => {
  if (validateArg(posX,posY,facing)) {
    return {   
      position: () => {return {x: parseInt(posX), y: parseInt(posY), facing: facing}},
      move: () => move(posX, posY,facing)
    }
  }
  return undefined;
}


// const robot = robotFactory(1,2,'north');
// console.log(robot.position().facing);

module.exports = robotFactory;