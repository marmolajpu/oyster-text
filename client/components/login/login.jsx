import React, {useState} from 'react'
import Link from 'next/link';
import debounce from 'lodash.debounce';
import router from 'next/router'


function Login() {
    const initialValues = { 
      email: "", 
      password: "", 
    };
    const [inputs, setInputs] = useState(initialValues)
    const [error, setError] = useState('')

    const sendData = debounce(async (inputs) => {
      try {
        const {status} = await fetch('http://localhost:5000/users/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
      })

      if (status == 500 || status == 400){
        setError('Incorrect Email or Password')
        return
      }
      
      if (status == 200){
        router.push('/dashboard')
      }
     

      } catch (e) {
      console.log(e.message)
      }
      

    })

    const handleSubmit = async(e,name, password) => {
      e.preventDefault();
      // if(!name && !password){
      //   setError('Please fill the inputs')
      // }
      sendData(inputs)
    }

    const handleChange = (e)=>{
      e.persist();
      setInputs({...inputs,[e.target.name]:e.target.value})
    }

    return (
      <>
       <div className="Ocontainer">
         <div className="Icontainer">
            <h1 className="titleContainer">Log in</h1>
            <div><input placeholder="Email" className="mt-20" type="text" name="email" value={inputs.email} onChange={(e) => handleChange(e)} /></div>             
            <div><input placeholder="Password" className="mt-20" type="password" name="password" value={inputs.password} onChange={(e) => handleChange(e)} /></div>    
            <Link href={{ pathname: '/dashboard'}}>
              <button onClick={(e)=>handleSubmit(e) } className="mt-20" type="submit">Ingresa</button>
            </Link> 
            <div>{error}</div>             
         </div>
       </div>
        
      </>
    );
  }
  
export default Login;