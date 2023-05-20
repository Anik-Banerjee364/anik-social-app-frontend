import React, { useState, useEffect } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import "./profile.css"
import axios from "axios"
import { useParams } from 'react-router';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const userName = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      try {
      const res = await axios.get(`/users?userName=${userName}`);
      setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  },[userName])

  return (
    <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src={user.coverPicture? user.coverPicture|| PF+user.coverPicture : PF + "person/noCover.png"} alt="" className="profileCoverImg" />
                <img src={user.profilePicture? user.profilePicture|| PF+user.profilePicture  : PF + "person/noAvatar.png"} alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>{user.userName}</h4>
                    <span className='profileInfoDesc'>{user.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed userName={userName}/>
            <Rightbar user = {user}/>
            </div>

        </div>
        </div>
    </>
  )
}
