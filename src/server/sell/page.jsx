const React = require('react');
const ReactDown = require('react-dom');
const Layout = require('../layout');

function Page() {
  return (
    <Layout>
      <script defer src='sell/page.js' />
      <link rel="stylesheet" href="sell/style.css" />
      <div style={{
        flexGrow: 1
      }}>
        <div className='splash'>
          <div>
            <div className='tagline'>Get a quote</div>
            <div className='form'>
              <div className='field'>
                <label>1st Line Address</label>
                <input />
              </div>

              <div className='field'>
                <label>City</label>
                <input />
              </div>

              <div className='field'>
                <label>Postcode</label>
                <input />
              </div>

              <div className='field'>
                <label>Sqrft</label>
                <input />
              </div>

              <div className='field'>
                <label>Acres</label>
                <input />
              </div>

              <div className='field'>
                <label>Beds</label>
                <input />
              </div>

              <div className='field'>
                <label>Baths</label>
                <input />
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

module.exports = Page;