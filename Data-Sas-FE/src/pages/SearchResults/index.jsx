import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function SearchResults() {

    const { filterSearchResults } = useSelector(
        (state) => state.filter
      );

      console.log({filterSearchResults})
  return (
    <div>Search Results Page</div>
  )
}
