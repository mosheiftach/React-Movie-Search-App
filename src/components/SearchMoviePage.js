import React,{useState,useEffect }from "react"
import {SearchBar} from "./SearchBar";
import {MovieList} from "./MovieList";
import'../style/searchMoviePage.css'

export const SearchMoviePage =()=>{
    const [query,setQuery]= useState('')
    const [movieList,setMovieList]= useState([])
    const apiKey = 'bf81e6ebf1e137b6765a98844d3c18bf';

    const fetchMovies = () =>{
        if(query !== ''){
            fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`)
                .then((res)=> res.json())
                .then((data)=>{
                    if (!data){
                        setMovieList([])
                    }else{
                        setMovieList(data.results)
                    }
                })
        }else{
            setMovieList([])
        }
    }

    useEffect(fetchMovies,[query])



    return(
        <div className='main-container'>
            <h1 className='main-header'>MOVIE Search Application</h1>
            <div className='search-bar-wrapper'>
                <SearchBar query={query} setQuery={setQuery}/>
            </div>
            <div className='movie-list-bar-wrapper'>
                <MovieList movieList={movieList}/>
            </div>
       </div>
    )

}