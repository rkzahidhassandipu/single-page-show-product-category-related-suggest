import React from 'react'
import { useParams } from 'react-router-dom'

const SearchItems = () => {
  console.log(useParams)
  const {term} = useParams();
  return (
    <div>SearchItems {term}</div>
  )
}

export default SearchItems