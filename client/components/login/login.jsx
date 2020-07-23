import React, {useState} from 'react'
import Link from 'next/link';


function Login() {
    const initialValues = { 
      email: "", 
      password: "", 
    };
    const [inputs, setInputs] = useState(initialValues)
    const [error, setError] = useState('')

    const handleSubmit = async(e,name, password) => {
      e.preventDefault();
      // if(!name && !password){
      //   setError('Please fill the inputs')
      // }
      console.log(`${JSON.stringify(inputs)}`)
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