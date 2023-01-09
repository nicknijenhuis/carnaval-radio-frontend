import React from 'react'
import Link from 'next/link'

const PostCard = ({posts}) => {
  return (
    <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
       gap-3 md:gap-6 p-2 md:p-6 max-w-[1280px] m-auto px-5 md:px-0"
      >
        {posts.map((post, i) => (
          <Link key={i} href={`/articles/${post.attributes.Slug}`}>
            <div className=" group cursor-pointer overflow-hidden bg-white">
              <img
                className="h-60 w-full object-cover"
                src={post.attributes.coverPhoto.data.attributes.url}
                alt=""
              />
              <div className="flex justify-between pt-5 px-2 pb-2">
                <div>
                  <p className="text-lg font-bold">{post.attributes.title}</p>
                  <p className="text-sm">
                    {post.attributes.title} by {post.attributes.title}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
  )
}

export default PostCard