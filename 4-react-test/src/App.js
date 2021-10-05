import { useState } from 'react';
import './App.css';

function App() {

  const [show, setShow] = useState( false )

  const handleToggle = () => {
    setShow( !show )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 onClick={ handleToggle } >Testing like hell</h2>
        { show && <div>Secret message</div> }
      </header>
    </div>
  );
}

export default App;
