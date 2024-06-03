import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Client_ID = '188b8539abe7449aaf81c040ffe19451'
const Redirect_URI = 'http://localhost:5173/'
const endpoint = 'https://accounts.spotify.com/authorize'
const response_type = 'token'

const api_endpoint = "https://api.spotify.com/v1/"

const Login = () => {
  const [token, setToken] = useState('')
  const [searchKey, setSearchKey] = useState('')
  
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

  const searchArtist = async (e)=>{
    const data = await axios.get(api_endpoint, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        q: searchKey,
        type: 'artist',
      }
    })
  }
  return (
    <div>
        <h1 className='text-2xl font-extrabold text-center my-5'>Login to spotify</h1>

        {
          !token ?

          <a href={`${endpoint}?client_id=${Client_ID}&redirect_uri=${Redirect_URI}&response_type=${response_type}`}>Login</a>

          : <button onClick={logout} className='bg-lime-300 px-5 py-2 font-semibold rounded mx-auto'>log out</button>
        }

        {
          token?
            <form onSubmit={searchArtists}>
              <input type="text" onChange={(e)=>setSearchKey(e.target.value)} />
              <button type={'submit'}>Search</button>
            </form>
            : <h2>Please login</h2>
        }


    </div>
  )
}

export default Login