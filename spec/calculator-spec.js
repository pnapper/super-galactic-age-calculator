import { Calc } from './../js/calculator.js';

describe('Calc', function () {

  it('should take a person’s age in years and convert it into seconds.', function () {
    let calc = new Calc();
    expect(calc.AgeToSeconds(1)).toEqual(31556952);
  });

  it('should take a person’s birthdate and convert it to seconds.', function () {
    let calc = new Calc();
    expect(calc.DateToSeconds("2015-08-25")).toEqual(63113904);
  });

  // it('should take 2 dates and convert the difference into seconds.', function () {
  //   let calc = new Calc();
  //   expect(calc.DatesDifference("2015-08-25", "2016-08-25")).toEqual(31556952);
  // });

  it('should take a person’s birthdate and calculate their age on Earth.', function () {
    let calc = new Calc();
    expect(calc.EarthAge("1968-08-08")).toEqual(49);
  });

  it('should take a person’s birthdate and calculate their age on Mercury.', function () {
    let calc = new Calc();
    expect(calc.MercuryAge("1968-08-08")).toEqual(204);
  });

  it('should take a person’s birthdate and calculate their age on Venus.', function () {
    let calc = new Calc();
    expect(calc.VenusAge("1968-08-08")).toEqual(79);
  });

  it('should take a person’s birthdate and calculate their age on Mars.', function () {
    let calc = new Calc();
    expect(calc.MarsAge("1968-08-08")).toEqual(26);
  });

  it('should take a person’s birthdate and calculate their age on Jupiter.', function () {
    let calc = new Calc();
    expect(calc.JupiterAge("1968-08-08")).toEqual(4);
  });

  it('should take a person’s gender and calculate their life expectancy.', function () {
    let calc = new Calc();
    expect(calc.LifeExpectancy("male")).toEqual(76);
  });

  it('should give a user their life expectancy on Mercury', function() {
    let calc = new Calc();
    expect(calc.LifeMercury("male", "08/08/1968")).toEqual(113)
  });

  it('should give a user their life expectancy on Venus', function() {
    let calc = new Calc();
    expect(calc.LifeVenus("male", "08/08/1968")).toEqual(44)
  });

  it('should give a user their life expectancy on Mars', function() {
    let calc = new Calc();
    expect(calc.LifeMars("male", "08/08/1968")).toEqual(14)
  });

  it('should give a user their life expectancy on Jupiter', function() {
    let calc = new Calc();
    expect(calc.LifeJupiter("male", "08/08/1968")).toEqual(2)
  });

  it('should tell if a user has outlived the life expectancy of a planet', function() {
    let calc = new Calc();
    expect(calc.LifeJupiter("male", "08/08/1937")).toEqual("outlived your life expectancy and have 0")
  });
});
