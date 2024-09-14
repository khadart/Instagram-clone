import React from 'react'
import { Link } from 'react-router-dom'
const Feed = ({img,id}) => {
  return (
    <><Link to={`/post/${id}`}>
    <div>
          <img className="w-[260px] h-[260px] flex-grow object-cover" src={img} alt="img" />

      </div></Link></>
  )
}

export default Feed