import React from 'react'
import { useParams } from 'react-router-dom';

const SearchData = (filteredData) => {

    const {dataStores}=useParams();

    console.log(filteredData);
    
    return (
        <>
        <h1>Hello </h1>
        </>
    )
}

export default SearchData;
