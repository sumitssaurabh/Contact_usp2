import { useState } from "react"
import React  from 'react'

const Form = () => {
      let [name , setName] = useState("");
          

      let [email , setEmail] = useState("");
      let [text , setText] = useState("");
      function nchange(e){
            console.log(e.target.value)
             setName(e.target.value);
            //  setEmail(e.target.value);
            //  setText(e.target.value);
            
           }

           function echange(e){
            console.log(e.target.value)
             setEmail(e.target.value);
           }
      

           function tchange(e){
            console.log(e.target.value)
             setText(e.target.value);
           }

           function onSubmit()
            {
                  console.log("submit")
            }
             
           

  
  return (
    
        <form className='form' >
       <div className='control'>
     <label htmlFor="name">Name</label>
     <input  onChange= {nchange} value={name}  type="text" name="name" />
     <br />
     <label htmlFor="email">Email</label>
     <input   onChange=  {echange}  value={email}  type="text" name="email" />
     <br /> <label htmlFor="text">Text</label>
     <input   onChange=  {tchange}  value={text} className="text" type="text" name="test" />
      <button onSubmit={onSubmit} className='submit'>Submit</button>
</div>
        </form>
      
  
  )
}

export default Form