import { useRouter } from 'next/navigation'
import React from 'react'
const baseImg = 'https://image.tmdb.org/t/p/w500'
import axios from 'axios'


const CardHome = ({pelicula}) => {
    const router = useRouter();
    console.log('peliculaaaaaaaaaa',pelicula)
    function Redireccionar(id){
        const url = `movies`
        const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: {language: 'en-US'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODViMDBkYTJkOTUxZDM1NmNiZGU0YzcwZTZmMjgzMyIsInN1YiI6IjY2MWNiZTcyNGNhNjc2MDE4NzFjNTdlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1llk-vFfem6Y1tJAW0O0TWEukgIQl1tpPGF-YIC62qc'
        }
        };
        router.push(url);
    }
  return (
    <div className='group relative w-1/6 flex flex-col items-center justify-between rounded-xl overflow-hidden bg-orange-500'>
        <img src={baseImg+pelicula.poster_path}></img>
        <div className='absolute w-12 h-12 right-2 top-2 bg-yellow-400 rounded-full flex items-center justify-center'><span className='font-bold '>{pelicula.vote_average.toFixed(1)}</span></div>
        <div className='flex flex-col bottom-0 bg-[#ff8512ce] group-hover:bg-[#ff8512] group-hover:h-full transition-all w-full text-center justify-around text-white items-center h-[20%] absolute'>
            <span className='font-bold'>{pelicula.name ? pelicula.name : pelicula.title}</span>
            <div className='hidden group-hover:flex flex-col'>
                <span>Cantidad de votos:{pelicula.vote_count}</span>
                <span>Popularidad:{pelicula.popularity}</span>
                <div className='w-full mt-4'>
                    <a className='bg-yellow-400 p-2 rounded-md cursor-pointer text-black' onClick={()=>Redireccionar(pelicula.id)}>Ver mas</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardHome