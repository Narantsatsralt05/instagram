import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

interface Props {}

interface PostTypes {
  caption: string;
  createdAt: string;
  photoPath: string;
  _id: string;
}

export const Home: FC = (props: Props) => {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/posts')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="center container ">
      {posts.map((post: PostTypes) => (
        <div>
          <h2>{post?.caption}</h2>
          <img src={post?.photoPath} alt="animatedpic" />
          <h3>{post?.createdAt}</h3>
          <h1>{post?._id}</h1>
        </div>
      ))}
    </div>
  );
};
