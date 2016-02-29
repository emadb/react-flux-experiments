jest.dontMock('../src/react/foods/FoodList.jsx');

describe('Foods', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var Foods;

  beforeEach(function() {
    Foods = require('../src/react/foods/FoodList');
    console.log('REQUIRED Foods');
  });

  it('should exists', function() {
    console.log('START Foods');
    var foods = TestUtils.renderIntoDocument( <Foods /> );
    console.log('CREATED Foods');
    expect(TestUtils.isCompositeComponent(foods)).toBeTruthy();
  });
});