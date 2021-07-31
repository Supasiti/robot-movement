const fs = require('fs');

// parse command from string
const parseCommand = (string) => {
  const data = string
    .split(' ')
    .map((string) => string.split(','))
    .reduce((acc, curVal) => acc.concat(curVal), [])
    .filter((string) => {return string !== ''})
  
  if (data.length > 1) { // place command
    return { 
      command: data[0].toLowerCase(),
      params : {
        x : parseInt(data[1]),
        y : parseInt(data[2]),
        facing : data[3].toLowerCase()
      }
    };
  };
  return  { command: data[0].toLowerCase()}
}

// parse commands from a string
const parse = (data) => {
  const commands =  data
    .split('\n')
    .map((string) => string.trim())
    .filter((string) => {return string !== ''})
    .map((string) => parseCommand(string))
  return commands;
};

// readFile promise
const readFilePromise = (filePath) => {
  return new Promise( (resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// final add read file
const parseCommands = (filePath) => {
  return readFilePromise(filePath)
    .then(parse)
    .catch(console.error)
};


module.exports = parseCommands;