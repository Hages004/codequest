import Allroutes from "./Pages/Allroutes.jsx";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchallusers } from "./action/users.js";
import { fetchallquestion } from "./action/question.js";
import { useDispatch } from "react-redux";

function App() {
  const [Slidein, setSlidein] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallusers());
    dispatch(fetchallquestion());
  }, [dispatch])


  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSlidein(false);
    }
  }, []);

  const handleslidein = () => {
    if (window.innerWidth <= 768) {
      setSlidein((state) => !state);
    }
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar handleslidein={handleslidein} />
        <Allroutes Slidein={Slidein} handleslidein={handleslidein} />
      </BrowserRouter>
    </div>
  );
}

export default App;
