import React from 'react';
import './App.css';
import route from '@/route'

class App extends React.Component {
   render() {
       return (
         <div className="App">
            {route}
        </div>
       )
   }
}

export default App;
