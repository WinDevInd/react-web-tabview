import React from 'react';
import { render } from 'react-dom';
import tabs from 'react-web-tabview'

class App extends React.Component {
   render() {
      return <div>
      <tabs/>
      <p> Hello React!</p>
      </div>;
   }
}

render(<App />, document.getElementById('app'));