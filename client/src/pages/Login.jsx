import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import image from '../assets/image_holder.png'

const Client_ID = '188b8539abe7449aaf81c040ffe19451';
const Redirect_URI = 'http://localhost:5173/';
const endpoint = 'https://accounts.spotify.com/authorize';
const response_type = 'token';

const api_endpoint = "https://api.spotify.com/v1/search";

const Login = () => {
  const [token, setToken] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [artist, setArtist] = useState([])
  
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');
    if (!token && hash) {
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }
    setToken(token);
    console.log(token);
  }, []);

  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  }

  const searchArtist = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(api_endpoint, {
        headers: { 
          Authorization: `Bearer ${token}`
        },
        params: {
          q: searchKey,
          type: 'artist',
        }
      });
      setArtist(data.artists.items)
      console.log(data.artists.items);
      setArtist(data.artists.items)
      console.log(artist);
    } catch (err) {
      console.error(err);
    }


    // const showArtist = ()=>{
    //   return artist.map((artist, index) => {
    //     <Card key={index} image={artist.images.lenght? artist.images[0].url: ''} name={artist.name} />

    // })
   
  }

  return (
    <div>
      <h1 className='text-2xl font-extrabold text-center my-5'>Login to Spotify</h1>

      {
        !token ?
        <a className='bg-lime-400 py-2 px-8 font-semibold rounded' href={`${endpoint}?client_id=${Client_ID}&redirect_uri=${Redirect_URI}&response_type=${response_type}`}>Login</a>
        : <button onClick={logout} className='bg-lime-300 px-5 py-2 font-semibold rounded mx-auto'>Log Out</button>
      }

      {
        !token ?
        <h2>Please login</h2>
        :
        <form onSubmit={searchArtist}>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
          <button type='submit'>Search Artist</button>
        </form>
      }
      <div className='grid grid-cols-8 px-8 '>
        {
          artist.map((result)=>(
            // console.log(result),
            // console.log(result.images[0].url)
            <>
              {/* <h1>{result.images[0].url}</h1> */}
              <Card  image={result.images.length ? result.images[0].url : null} title={result.name} description={result.genres.length ? result.genres[0] : 'NIL'}/>
            </>
          ))
        }
      </div>
    </div>
  );
}

export default Login;
