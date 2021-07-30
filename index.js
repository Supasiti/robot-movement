const parseCommands = require('./src/commandParser');
const controller =  require('./src/controller');

const inputPath = process.argv[2]

const init = (filePath) => {
  return parseCommands(filePath).then(controller.run);
}

init(inputPath);