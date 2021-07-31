const {validateType} = require('../src/validation');

describe('validateType', () => {

  // test default
  describe('validateDefault', () => {
    it ('should log an error if the type of an object is not the right one', () => {
      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation(() => {});
      
      const result = validateType(1, "hello", "string"); 

      expect(mock).toBeCalledWith('hello must be of type string')
      expect(result).toEqual(false);
      mock.mockRestore();
    });

    it ('should return true if the type of an object is correct', () => {
      const result = validateType("hello", "hello", "string"); 
      
      expect(result).toEqual(true);
    });
  });

  // test number
  describe('validateNumber', () => { 
    it ('should log an error it is not a number', () => {
      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation(() => {});
      
      const result = validateType("hello", "hello", "number"); 

      expect(mock).toBeCalledWith('hello must be a number')
      expect(result).toEqual(false);
      mock.mockRestore();
    });

    it ('should return true it is a number', () => {
      const result = validateType(239, "hello", "number"); 

      expect(result).toEqual(true);
    });
  });
});