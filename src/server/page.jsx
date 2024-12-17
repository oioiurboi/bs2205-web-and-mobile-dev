const React = require('react');
const ReactDown = require('react-dom');
const Layout = require('./layout');

function Page() {
  const [increment, setIncrement] = React.useState(0);

  return (
    <Layout>
      <script
        defer
        src='/page.js'
      />
      <button
        onClick={() => setIncrement(increment + 1)}
      >{increment}</button>
    </Layout>
  )
}

module.exports = Page;