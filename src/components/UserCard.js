import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ img, bio, name, userName }) => {
    return (
    <><Link to={`/${userName}`} className="hover:cursor-pointer" >
            <div className="flex w-[370px]  p-3 gap-5 mt-5">
                <div>
                    <img className="h-14 w-14 rounded-full  object-cover" src={img} alt="img" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <h3>{bio}</h3>
                    <h4>{userName}</h4>
                </div>
            </div>
            </Link></>
            );
};

            export default UserCard;
