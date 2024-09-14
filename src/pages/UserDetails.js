import React from 'react'
import users from '../Users';
import { useParams } from 'react-router-dom'
const UserDetails = () => {
    let  {userName} = useParams();
    let user = users.find(user=>user.username == userName)
  return (
    <div className="flex w-[370px]  border rounded-md p-3 gap-5 mt-20 mx-auto items-center">
                <div>
                    <img className="h-16 w-16 rounded-full object-cover " src={user.profilePicture} alt="img" />
                </div>
                <div>
                    <h2>{user.fullName}</h2>
                    <h3>{user.bio}</h3>
                    <div className='flex gap-5'>
                    <h4 className='border p-1 bg-slate-400 rounded-md text-red-200'> {user.following} Following</h4>
                    <h4 className='border p-1 bg-slate-400 rounded-md text-red-200'>{user.followers} Followers</h4>
                </div>
                    </div>
                   
            </div>
  )
}

export default UserDetails