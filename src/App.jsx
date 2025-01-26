import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <div>
        <Navbar title="TextUtils1" /> {/* title is a variable used as props to Navbar */}
      </div>
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element={<About />} />
        < Route
          path="/"
          element={
            < div className='container my-3' >
              <TextForm showalert={showalert} />
            </div >
          }
        />
      </Routes >
    </Router >
  );
}

export default App;
