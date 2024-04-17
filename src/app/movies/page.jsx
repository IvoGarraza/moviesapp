'use client'
import axios from "axios";
import { useEffect, useState } from "react";

/* const [movies, setMovies] = useState(false)
const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/countries',
  headers: {
    'X-RapidAPI-Key': '3770ea9b83msh93951a46685c297p194306jsn6029bc0a4fd9',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.results)
    setMovies(response.data.results)
    console.log('movieeeeeeeeees',movies)
    return response.data
} catch (error) {
	console.error(error);
    return error
}

export default function Page(){
    return <div className="w-full flex flex-col">
        <div className="h-12 w-full flex flex-col">Todas las peliculas
            <div className="w-full">
                <div>Filtros</div>
            </div>
        </div>
        <div className="w-full">
            {movies.map((movie,index)=>(
                <div>
                    <h2>{movie}</h2>
                    {movie}
                </div>
            ))}
        </div>
    </div>
} */

const Page = () => {

const [movies, setMovies] = useState([])

const options = {
    method: 'GET',
    url: 'https://imdb146.p.rapidapi.com/v1/find/',
    params: {query: 'brad'},
    headers: {
      'X-RapidAPI-Key': '3770ea9b83msh93951a46685c297p194306jsn6029bc0a4fd9',
      'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
    }
  };

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
    <div className="w-full flex flex-col">
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