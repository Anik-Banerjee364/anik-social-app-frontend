  import React, { useEffect, useState } from 'react'
  import "./feed.css";
  import Share from '../share/Share';
  import Post from '../post/Post';
  // import {Posts} from "../../dummyData"
  import axios from "axios";
  import { useContext } from 'react';
  import { AuthContext } from '../../context/AuthContext';


  export default function Feed({userName}) {  
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
      const fetchPosts = async () => {
        try {
        let res;
        if (userName) {
          res = await axios.get('/posts/profile/' + userName);
        } else if (user && user._id) {
          res = await axios.get('posts/timeline/' + user._id);
        }
        if (res) {
          setPosts(
            res.data.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt))
          );
        }
      } catch (error) {
        console.log(error);
      }
      };
      fetchPosts();
    },[userName, user])
    return (
      <div className='feed'>
          <div className="feedWrapper">
            {(!userName || user && userName === user.userName) && <Share/>}
            {posts.map((post) => (
              <Post key={post._id} post = {post}/>
            ))}

          </div>
          
      </div>
    )
  }
