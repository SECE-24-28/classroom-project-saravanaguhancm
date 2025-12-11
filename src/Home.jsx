import React from 'react'
const Home=({posts})=>{
  return (
    <div>
        {
        posts.map((post)=>
          <div key={post.id}>
          <h1>{post.title}</h1>
          <h3>{post.datetime}</h3>
          <p>{post.body}</p>
          <hr />
          </div>
        )
     }
    </div>
  )
}
export default Home