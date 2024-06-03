import React, { useEffect, useState } from 'react'

const Client_ID = '188b8539abe7449aaf81c040ffe19451'
const Redirect_URI = 'http://localhost:5173/'
const endpoint = 'https://accounts.spotify.com/authorize'
const response_type = 'token'

const [token, setToken] = useState('')

// useEffect(() => {
//   const hash = window.location.hash
//   let token = window.localStorage.getItem('token')
// }, [third])


const Login = () => {
  return (
    <div>
        <h1>Login to spotify</h1>
        <a href={`${endpoint}?client_id=${Client_ID}&redirect_uri=${Redirect_URI}&response_type=${response_type}`}>Login</a>

    </div>
  )
}

export default Login