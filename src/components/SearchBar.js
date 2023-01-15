import React from "react"
import"../style/searchBar.css"
export const SearchBar =(props)=>{

    return(
        <input value={props.query}
    placeholder='Search Movie...'
    onChange={(result) => props.setQuery(result.target.value)}/>
    )

}