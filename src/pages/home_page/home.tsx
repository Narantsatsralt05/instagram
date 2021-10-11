import axios from 'axios';
import { url } from 'inspector';
import React, { FC, useEffect, useState } from 'react';
import { Header } from '../../components';

interface Props {}

interface PostTypes {
  caption: string;
  createdAt: string;
  photoPath: string;
  _id: string;
}

const mockPosts = [
  {
    photo_url: 'https://picsum.photos/500/540?img=1',
    caption: 'sartai shono naraa code bichin suuna ...',
    profile_pic: 'https://i.pravatar.cc/40?img=1',
  },
  {
    photo_url: 'https://picsum.photos/500/540?img=2',
    caption: 'sartai shono naraa code bichin suuna ...',
    profile_pic: 'https://i.pravatar.cc/40?img=2',
  },
  {
    photo_url: 'https://picsum.photos/500/540?img=3',
    caption: 'sartai shono naraa code bichin suuna ...',
    profile_pic: 'https://i.pravatar.cc/40?img=3',
  },
  {
    photo_url: 'https://picsum.photos/500/540?img=4',
    caption: 'sartai shono naraa code bichin suuna ...',
    profile_pic: 'https://i.pravatar.cc/40?img=4',
  },
  {
    photo_url: 'https://picsum.photos/500/540?img=5',
    caption: 'sartai shono naraa code bichin suuna ...',
    profile_pic: 'https://i.pravatar.cc/40?img=5',
  },
];

const stories = [
  { profile_pic: 'https://i.pravatar.cc/60?img=1' },
  { profile_pic: 'https://i.pravatar.cc/60?img=2' },
  { profile_pic: 'https://i.pravatar.cc/60?img=3' },
  { profile_pic: 'https://i.pravatar.cc/60?img=4' },
  { profile_pic: 'https://i.pravatar.cc/60?img=5' },
  { profile_pic: 'https://i.pravatar.cc/60?img=6' },
];

export const Home: FC = (props: Props) => {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  useEffect(() => {
    document.title = 'Instagram';
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
    <>
      <Header />
      <div className="flex justify-center">
        <div>
          <div className="flex flex-row border-solid border border-gray-300 rounded p-2 mt-16">
            {stories.map((story: any) => (
              <div className="ml-2 border-2 rounded-full border-pink-500">
                <img
                  className="rounded-full m-1"
                  src={story.profile_pic}
                  alt="profile"
                />
              </div>
            ))}
          </div>
          {mockPosts.map((post: any) => (
            <div className="border-solid border border-gray-300 rounded mt-8">
              <div className="flex justify-between px-6 py-4">
                <div className="flex flex-row items-center">
                  <img
                    className="rounded-full m-1"
                    src={post.profile_pic}
                    alt="profile"
                  />
                  <div className="font-semibold text-sm ml-2">
                    trader.erkhemee
                  </div>
                </div>
                <div>* * *</div>
              </div>
              <div>
                <img src={post.photo_url} alt="animatedpic" />
              </div>
              <div>
                <h2>{post.caption}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
