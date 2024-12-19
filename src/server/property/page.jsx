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
  const [property, setProperty] = React.useState();
  React.useEffect(() => {
    if (!id) { return }
    const p = fetch(`/api/get-property-by-id?id=${id}`)
      .then(res => res.json())
      /*Have to do this because the minifier
      was having some weird issue with the
      async function, so I couldn't just
      await `fetch`.*/
      .then(res => { setProperty(res) });
  }, [id]);

  return (
    <Layout>
      <script defer src="/property/page.js" />
      {!property ? id : JSON.stringify(property, null, 2)}
    </Layout>
  )
}

module.exports = Page;