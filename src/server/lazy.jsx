const React = require('react');
const ReactDown = require('react-dom');

async function Lazy() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <div>test</div>
  )
}

module.exports = { Lazy }