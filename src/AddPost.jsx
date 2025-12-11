import React from 'react'

const AddPost = ({ title, setTitle, body, setBody, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <button type="submit">Save</button>
    </form>
  )
}

export default AddPost
