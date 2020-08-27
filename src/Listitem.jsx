import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./index.css"

let Listitem =(props)=>{

    
    return (
        <>
     <li> 
     <span id="crs"
      onClick={ ()=>{
          props.onselect(props.id)
      }}> <DeleteOutlineIcon /></span> 
      {props.text}
     </li>
     </>
    )
    }


 
export default Listitem;