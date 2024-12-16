const React = require('react');
const ReactDown = require('react-dom');

export async function Lazy() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  // const [incrememnt, setIncrement] = React.useState(0);

  return (
    <div>
      test
      {/* {incrememnt}
      <button
        onClick={() => setIncrement(incrememnt + 1)}
      /> */}
    </div>
  )
}