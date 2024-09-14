import React from "react";
import users from "../Users";
import { useParams } from "react-router-dom";
import Feed from "../components/Feed";
const UserDetails = () => {
  let { userName } = useParams();
  let user = users.find((user) => user.username == userName);
  return (
    <><div className="flex w-[450px]  p-3 gap-5 mt-20 mx-auto items-center">
          <div>
              <img
                  className="w-[150px] h-[150px] rounded-full object-cover "
                  src={user.profilePicture}
                  alt="img" />
          </div>
          <div className="">
              <h2 className=" font-sans font-bold">{user.fullName}</h2>
              <h3 className="from-neutral-100">{user.bio}</h3>
              <div className="flex gap-5 mt-3">
                  <h4 className="border p-1 bg-slate-400 rounded-md text-red-200">
                      {" "}
                      {user.following} Following
                  </h4>
                  <h4 className="border p-1 bg-slate-400 rounded-md text-red-200">
                      {user.followers} Followers
                  </h4>
              </div>
          </div>
      </div>
      <div className="w-[800px] mx-auto mt-7">
       
    <div className="flex flex-wrap gap-4">
    {
            user.posts.map(user=><Feed img={user.mediaUrl}  id={user.postId} likes={user.likes} comments ={user.comments} caption={user.caption}/>)
         }
    </div>
       
         
         
         
    </div></>
  );
};

export default UserDetails;
