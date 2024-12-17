const React = require('react');
const ReactDown = require('react-dom');
const Layout = require('./layout');

function Page() {
  return (
    <Layout>
      <script defer src='/page.js' />
      <link rel="stylesheet" href="style.css" />
      <div style={{
        border: "1px solid black",
        flexGrow: 1
      }}>
        <div className='splash'>
          <div>
            <div className='tagline'>Find your zen...</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input
                className='searchbar'
                placeholder='Address, School, Town, City...'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

module.exports = Page;