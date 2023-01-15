import React from "react"
import "../style/movieCard.css"

export const MovieCard =(props)=>{

    return (
        <div className="card">
            <img className='movie-poster' src={`http://image.tmdb.org/t/p/w185${props.posterPath}`} alt={'-'}/>
            <div className="container">
                <h4><b>{props.title}</b></h4>
                <h5>{props.releaseDate}</h5>
                <p>{props.overview}</p>
            </div>

        </div>
    );
}