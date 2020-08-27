 import React, { useState } from "react"
 import Listitem from "./Listitem"
 
 import "./index.css"
  
  const App = ()=>{
      let [Inputitem,Setinput]=useState("")
      let [items,Setitem] =useState([])
      const Set =(e)=>{
        Setinput(e.target.value)
      }
      function Listofitem(){
          if(Inputitem===""){
          return   alert("Input box is Empty ")
          }
          else{
            Setitem( olditem =>{
                return [...olditem,Inputitem]
            })
            Setinput("")
             }
          }
    
      const Delete = (id) =>{
        console.log("delete")
        Setitem( (olditem) => {
            return olditem.filter( (item,index) =>{
                return index !== id
            })
        })
       }
     
      return (
          <>
         <div className="container-fluid main">
             <div className="cnt container">
                 <h1>todo <span> list </span></h1>
                 <br />
                 <input type="text" placeholder="add a item" 
                 onChange={Set}
                value={Inputitem}   
                 />
  
                 <button onClick={Listofitem}> + </button>
                 <ol>
                     {
                         items.map( (itm,index) =>{
                           return  <Listitem 
                           text={itm}
                           key={index}
                           id={index}
                           onselect={Delete} />
                         })
                     }
                 </ol>
             </div>
             
         </div>

          </>
      )
  }



  export default App;