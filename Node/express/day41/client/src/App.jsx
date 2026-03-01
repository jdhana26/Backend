import React from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {


  const [formData, setformData] = useState({ name: "", email: "", password: "" })

  const [showdata, setShowdata] = useState({})



  const handleChnage = (e) => {

    const data = e.target.value

    const addData = e.target.name

    setformData({ ...formData, [addData]: data })


  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const res = await axios.post("http://localhost:5000/api/hash/pwHash", formData)

      console.log(res);

      alert(res.data.msg)

      setformData({ name: "", email: "", password: "" })

      setShowdata(res.data.addData)

    } catch (error) {

      console.log(error.response.data);


    }

  }


  return (
    <>
      <h1>From Register</h1>

      <form onSubmit={handleSubmit}>

        <input type="text" name='name' placeholder='enter the name here' onChange={handleChnage} />
        <input type="email" name='email' placeholder='enter the email here' onChange={handleChnage} />
        <input type="password" name='password' placeholder='enter the password here' onChange={handleChnage} />
        <input type="submit" value="register" />

      </form>


      <div>

        <h2>Name:{showdata.name}</h2>
        <h2>Email:{showdata.email}</h2>
        <h2>Password:{showdata.password}</h2>

      </div>
    </>
  )
}

export default App