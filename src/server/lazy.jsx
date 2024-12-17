const React = require('react');
const ReactDown = require('react-dom');

function Lazy() {
  const [increment, setIncrement] = React.useState(0);

  return (
    <button
      onClick={() => setIncrement(increment + 1)}
    >{increment}</button>
  )
}

module.exports = Lazy;