import React from 'react'
import list from './list'

export default ({match}) => {

  console.log(list, match.params.id);
  const result = list.find(one => one.id == match.params.id);
  return(
    <div>
      <h1>{result.title}</h1>
    </div>
    )
  }