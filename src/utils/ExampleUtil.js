export default class ExampleUtils {
  constructor(paramOne, paramTwo, paramFunctionOne, paramFunctionTwo) {
    this.functionOne = number => paramFunctionOne(number);
    this.functionTwo = number => paramFunctionTwo(number);
    this.normalFunction = this.normalFunction.bind(this);
    this.one = paramOne;
    this.two = paramTwo;
  }
  normalFunction() {
    this.one = {};
    this.two = {};
  }
}
