// __tests__/main-test.js
jest.dontMock('../src/main');

describe('App', function() {
  it("returns the string 'Hello from Browserify'", function() {
    var App = require('../src/main');
    expect(App).toBe('Hello from Browserify');
  });
});
