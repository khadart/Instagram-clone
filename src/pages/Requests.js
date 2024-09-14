import React from 'react'
import users from '../Users'
import UserCard from '../components/UserCard'

const Requests = () => {
  return (
    <div className='mx-auto w-[330px]'>
        <h1 className='text-2xl mt-20'>Manage your requests!!</h1>
         {
            users.map(user=><UserCard  img={user.profilePicture}  name={user.fullName} bio={user.bio} userName={user.username}/>)
         }
    </div>
  )
}

export default Requests