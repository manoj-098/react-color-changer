import React,{useState} from 'react'
import './Color.css'

function Color() {

    const[color,setColor]=useState('EMPTY')
    const[toggletext,setToggletext]=useState('black')
    function toggleText(event)
    {
        event.preventDefault()
        if(toggletext=="black") setToggletext("white")
        else setToggletext("black")
        
    }

  return (
    <div className="body">
        <div className="Square" style={{backgroundColor:color}}>
            <h2 style={{color:toggletext}}>{color}</h2>
        </div>
        <div className='input-box'>
            <input className='input' type='text' placeholder='Enter Color Name' onChange={(event)=>setColor(event.target.value)}></input>
        </div>
        <button className="toggleButton" onClick={event=>toggleText(event)}>Toggle Text</button>
      
    </div>
  )
}
export default Color
