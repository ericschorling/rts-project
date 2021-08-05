//Search component that allows user to look up articles from the api
//Handles the search field and the submit button

import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHistory, setSearch } from '../features/history/historySlice'
import { getPosts } from '../routes/getAPI'


export const Search = () => {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.history.search);
    const [subject, setSubject] = useState('');
    

    //Calls API and returns the search information and adds search to history
    const _handleClick = async (e) => {
        e.preventDefault()
        const newPosts = await getPosts(subject)
        dispatch(addHistory(subject))
        dispatch(setSearch(newPosts))
        //clears the search field
        setSubject('')
    }

    return (
        <>
            <h1>Search for Articles</h1>
            <form>
                <input className="searchinput" type="text" onChange={(e)=>setSubject(e.target.value)} value={subject}></input>
                <input className="submitbtn" type="submit" onClick={(e)=>_handleClick(e)}></input>
            </form>
            {search.length ? <h3>Search for: {search[0]._highlightResult.title.matchedWords.join(" ")}</h3> :null}
            <div className="card-holder">
                {search.length ? search.map((post, index)=>(
                    <div className="card" key={index}>
                        <h3>{post.title}</h3>
                        <p>Author: {post.author}</p>
                        <p>Date: {post.created_at.split("T")[0]}</p>
                        <a href={post.url} target="blank">Check it out</a>
                    </div>
                )):null}
            </div>
        </>
    )
}