import React from 'react'
import { db } from '../firebase/firebase'

const SearchName = (props) => {
    const searchName = db.collection("Profile").get().then((querySnapshot) => {
        let search = querySnapshot.docs.map(doc => doc.data().Name)        
        // {
        //     name.map((post) => (
        //         <div key={post.name}>
        //             <p>{`post.name{props.search}`}</p>
        //         </div>
        //     ));
        // }
    })
    const result = `searchName${props.sname}`
    return (
        <>
        {console.log(result)}
        </>
    )
}

export default SearchName;
