import './theme.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './components/Home/page';
import AnotherPage from './components/AnotherPage/page';
import { FirstContext } from './context/firstContext';
import { useEffect, useState } from 'react';

function App() {
  const [appTheme, setAppTheme] = useState('light');
  useEffect(()=>{
    const mode=localStorage.getItem("theme")??"light";
    setAppTheme(mode);
    console.log("theme is : ",mode);
    
  },[])

  const toggleTheme = (theme: string) => {
    setAppTheme(theme === 'Dark' ? 'light' : 'Dark');
    const mode=theme==="Dark"?"light":"Dark"
    localStorage.setItem("theme",mode);
  };

  return (
    <FirstContext.Provider value={{ theme: appTheme, toggleTheme }}>
      <BrowserRouter>
        <div style={{display: 'flex', width: "50vw", margin: "auto", justifyContent: "center", gap: "20px", padding: "20px"}}>
          <Link to="/">Home</Link>
          <Link to="/anotherPage">Another Page</Link>
        </div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anotherPage" element={<AnotherPage />} />
        </Routes>
      </BrowserRouter>
    </FirstContext.Provider>
  );
}

export default App;