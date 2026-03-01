 import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
 
 const App = () => {

const deptSchema ={district_name:"",departments_name:""}



  const [data,setData]=useState(deptSchema)

  const [msg,setMsg]=useState([])

  useEffect(()=>{
   setData({district_name:"Mayiladuth",
    departments_name:"Food De"})




  },[])



const handleClick = async()=>{

    try {
        const fetchdata = await axios.post("http://localhost:5000/api/dept/add",data)

        console.log(fetchdata);
        
         setMsg([fetchdata.data.adddata])

         


    } catch (error) {
        console.log("error",error);
        
    }




}


   return (
    <>
    
     <div>
       <h1>API Fetch data</h1>





       <button onClick={handleClick}>Click to fetch</button>


       {msg.map((e,i)=>(

        <div key={i}>
            <p> dept name:{e.departments_name}</p>
            <p> dis name:{e.district_name}</p>
        </div>
       ))
       }


       {/* {data.departments_name} */}

     </div>
    </>
   )
 }
 
 export default App
 