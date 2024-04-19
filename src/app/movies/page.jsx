'use client'
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {

const [movies, setMovies] = useState([])


const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc'
    },
    headers: {accept: 'application/json'}
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(response.data)
        setMovies(response.data)
        console.log('movieeeeeeeeees',movies)
        return response.data
    } catch (error) {
        console.error(error);
        return error
    }
}

useEffect(()=>{
    fetchData()
},[])

  return (
    <div className="w-full flex flex-col text-black">
        <div className="h-12 w-full flex flex-col">Todas las peliculas
            <div className="w-full">
                <div>Filtros</div>
            </div>
        </div>
        <div className="w-full">
            {!movies ?(
                <div>Cargando</div>
            ):(
                movies.map((movie,index)=>(
                    <div>
                        <h2>{movie}</h2>
                        {movie}
                    </div>
                ))
            )}

        </div>
    </div>
  )
}

export default Page