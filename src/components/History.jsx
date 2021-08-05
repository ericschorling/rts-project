//Component that will create a history of previous searches
//User will be able to click on list item to return to that search
//Calls the API to reset search data when returning to search 

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearch } from '../features/history/historySlice'
import { getPosts } from '../routes/getAPI'


export const History =()=> {
    const dispatch = useDispatch();
    const history = useSelector((state) => state.history.history)
    
    //Recalls the API with the history item clicked
    const _handleClick = async (e, value) => {
        const newPosts = await getPosts(value)
        dispatch(setSearch(newPosts))
    }

    //getelement looks at the list element to utilize the value to recall the API.
    return (
        <>
            <h1>Search History</h1>
            {history.length ?  null : <h2>No search history.</h2>}
            <div className="search-history" >
                {history ? history.map((search, index)=>(
                    <div key={index}>
                        <Link 
                            to="/search"
                            className={`search${index}`}
                            onClick={(e)=>_handleClick(e, document.getElementsByClassName(`search${index}`)[0].innerHTML)}
                            >
                                {search}
                        </Link>
                    </div>
                )):'null'}
            </div>
        </>
    )
}