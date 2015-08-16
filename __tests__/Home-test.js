// __tests__/Home-test.js
jest.dontMock('../src/components/pages/Home');

describe('Home page', function() {
  it("returns the string 'Hello from Browserify'", function() {
    var React = require('react/addons');
    var Home = require('../src/components/pages/Home');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var homePage = TestUtils.renderIntoDocument(
        <Home />
    );

    var heading = TestUtils.findRenderedDOMComponentWithTag(homePage, 'h1');
    expect(heading.getDOMNode().textContent).toEqual('React Tooling');

  });
});
