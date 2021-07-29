// default
const validateDefault = (obj, name, type) => {
  if (typeof obj !== type) {
    console.error(`${name} must be of type ${type}`);
    return false;
  }
  return true;
}

// number 
const validateNumber = (obj, name) => {
  if (isNaN(obj)) {
    console.error(`${name} must be a number`);
    return false;
  }
  return true;
}

// final
validateType = (obj, name, type) => {
  if (type === 'number') return validateNumber(obj, name);
  return validateDefault(obj, name, type);
};

module.exports = {validateType};