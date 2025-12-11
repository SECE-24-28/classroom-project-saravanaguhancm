import { useEffect, useState } from 'react'
import './App.css'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import { format } from 'date-fns'

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/feedback")
      setPosts(res.data)
    }
    fetchData()
  }, [])

  // Filter search results
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.body.toLowerCase().includes(search.toLowerCase())
  )

  // Submit new post
  const handleSubmit = async (e) => {
    e.preventDefault()

    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1
    const datetime = format(new Date(), "MMMM dd, yyyy pp")

    const newObj = { id, title, datetime, body }

    await api.post("/feedback", newObj)

    setPosts([...posts, newObj])
    setTitle("")
    setBody("")
  }

  return (
    <>
      <Search search={search} setSearch={setSearch} />

      <hr />

      <AddPost
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        handleSubmit={handleSubmit}
      />

      <Home posts={filteredPosts} />
    </>
  )
}

export default App
