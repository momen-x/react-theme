
import { useContext } from "react";
import { FirstContext } from "../../context/firstContext";
import "./page.css"
const AnotherPage = () => {
  const {theme, toggleTheme} = useContext(FirstContext);
console.log("the theme is : ",theme);

  return (
    <div className={`page ${theme}`} >AnotherPage</div>
  )
}

export default AnotherPage