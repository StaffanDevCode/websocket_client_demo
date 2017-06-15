const React = require('react');
const Nav = require('./Nav');

const Main = React.createClass({
  render: ()=>{
    return (
      <div>
        <Nav />
        <h1>Main component</h1>
      </div>
    )
  }
});
module.exports = Main;