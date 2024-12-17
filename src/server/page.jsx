const React = require('react');
const ReactDown = require('react-dom');
const Layout = require('./layout');

function Page() {
  const [props, setProps] = React.useState([]);

  React.useEffect(async () => {
    const properties = await fetch(
      "/api/get-all-properties"
    ).then(res => res.json());
    setProps(properties);
  }, []);

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
            <div style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}>
              <input
                className='searchbar'
                placeholder='Address, School, Town, City...'
              />
              <button style={{
                cursor: "pointer",
                border: "0px none",
                backgroundColor: "white",
                right: "1rem",
                top: 0,
                bottom: 0,
                position: "absolute",
                alignSelf: "center",
                fontFamily: "sans-serif",
                fontSize: "1rem",
              }}>Go</button>
            </div>
          </div>
        </div>
        <div className='properties'>
          {props.map(prop => <div className='property'>{JSON.stringify(prop, null, 2)}</div>)}
        </div>
      </div>
    </Layout>
  )
}

module.exports = Page;