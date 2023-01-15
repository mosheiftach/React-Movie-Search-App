import React from "react"
import {MovieCard} from "./MovieCard";

export const MovieList =(props)=>{
    console.log(props.movieList)
    return(<div className='movie-list-wrapper'>
            {props.movieList.length>0 ? props.movieList.map((list)=>
                (<ul key={list.id}><MovieCard
                    title={list.title}
                    releaseDate={list.release_date}
                    overview={list.overview}
                    posterPath = {list.poster_path}/>
                </ul>)):<div/>}
        </div>
    )
}