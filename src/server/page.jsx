const React = require('react');
const ReactDom = require('react-dom');
const Layout = require('./layout');
const Searchbar = require('./_components/searchbar/searchbar');

function Page() {

  // Get-Properties Hook
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

      <div id="container">
        <div className='splash-container'>
          <div className='splash-content'>
            <div className='tagline'>Find your zen...</div>
            <Searchbar/>
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