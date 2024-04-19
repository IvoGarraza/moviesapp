'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardHome from '../components/cardHome/CardHome'
import ButtonRouter from '../components/buttonRouter/ButtonRouter'



export default function Home() {

  const [movies, setMovies] = useState([])

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/all/day',
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODViMDBkYTJkOTUxZDM1NmNiZGU0YzcwZTZmMjgzMyIsInN1YiI6IjY2MWNiZTcyNGNhNjc2MDE4NzFjNTdlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1llk-vFfem6Y1tJAW0O0TWEukgIQl1tpPGF-YIC62qc'
    }
  };
  
  
  async function fetchData() {
    try {
      const infoMovies = await axios.request(options)
      console.log(infoMovies.data.results)
      setMovies(infoMovies.data.results)
      return infoMovies.data.results
    } catch (error) {
      console.log(error)
      return error
    }

  }
  
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 text-black">
      <div className="w-full flex items-center justify-center">
        <h1 className="font-bold text-2xl">Aplicacion de peliculas</h1>
      </div>
      <div className='flex w-full justify-around'>
        <ButtonRouter link='movies' name='Movies'></ButtonRouter>
        <ButtonRouter link='series' name='Series'></ButtonRouter>
        <ButtonRouter link='people' name='Peoples'></ButtonRouter>
      </div>
      <div className='border-yellow-400 border-[1px] rounded-lg w-full py-12 bg-uno text-white'>
        <div className='w-full justify-center flex mb-12'>
          <span className='font-bold text-xl'>Populares de momento</span>
        </div>
        <div className='w-full flex flex-row justify-around'>
          {!movies ? (<span>Cargando</span>):
          (
            movies.slice(0,5).map((movie) => (
              <CardHome pelicula={movie}></CardHome> 
            ))
          )}
        </div>
      </div>
    </main>
  );
}
