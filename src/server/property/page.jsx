const React = require('react');
const ReactDom = require('react-dom');
const Layout = require('../layout');

function Page() {

  // Id-From-Query Hook
  const [id, setId] = React.useState();
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setId(query.get('id'));
  }, []);

  // Fetch-Property-By-Id Hook
  const [details, setDetails] = React.useState();
  React.useEffect(() => {
    
  })

  return (
    <Layout>
      <script defer src="/property/page.js" />
      {id}
    </Layout>
  )
}

module.exports = Page;