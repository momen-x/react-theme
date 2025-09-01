import { useState } from 'react'
import './theme.css'


const thems=[
  "Dark",
  "Pink",
  "Gray",
  "light"
]

function App() {
  const [theme,setTheme]=useState("");
  const [count, setCount] = useState(0)
  const [field,setField]=useState("front end");

  return (
 <div className={`App ${theme}`}>
  <div style={{display:"flex",gap:"2px",justifyContent:"center",alignItems:"start",height:"200px"}}>
    {thems.map((item)=>{
      return <div key={item} style={{display:"flex ",width:"300px"}}> 
      <button onClick={()=>setTheme(item)} style={{border:"1px solid blue"}}>{item}</button>
       </div>
    })}
  </div>
  <div>

    <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
  </div>
  <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
<input type="text" style={{padding:"15px",borderRadius:'5px'}} readOnly value={`your field is ${field}`} />
    <button onClick={() => setField(field==="front end"?"back end":"front end")}>
        ubdate your field to :{field==="front end"?"back end":"front end"}
        </button>
  </div>
 </div>
  )
}

export default App
