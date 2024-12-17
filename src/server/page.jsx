const React = require('react');
const ReactDown = require('react-dom');
const Layout = require('./layout');

function Page() {
  const [increment, setIncrement] = React.useState(0);

  return (
    <Layout>
      <script defer src='/page.js'/>
      <div style={{
        border: "1px solid black",
        flexGrow: 1
      }}>
        <button
          onClick={() => setIncrement(increment + 1)}
        >{increment}</button>
      </div>
    </Layout>
  )
}

module.exports = Page;