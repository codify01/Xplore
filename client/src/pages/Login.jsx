import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Client_ID = '188b8539abe7449aaf81c040ffe19451'
const Redirect_URI = 'http://localhost:5173/'
const endpoint = 'https://accounts.spotify.com/authorize'
const response_type = 'token'


const Login = () => {
  const [token, setToken] = useState('')
  
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');
    if (!token && hash) {
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
      window.location.hash = ''
      window.localStorage.setItem('token', token)
      setToken(token)
    }
  }, []);

  const logout = ()=>{
    setToken('')
      window.localStorage.removeItem('token')
  }

  return (
    <div>
        <h1 className='text-2xl font-extrabold text-center my-5'>Login to spotify</h1>

        {
          !token ?

          <a href={`${endpoint}?client_id=${Client_ID}&redirect_uri=${Redirect_URI}&response_type=${response_type}`}>Login</a>

          : <button onClick={logout} className='bg-lime-300 px-5 py-2 font-semibold rounded mx-auto'>log out</button>
        }
    </div>
  )
}

export default Login