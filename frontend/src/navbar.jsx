import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/1">User 1</Link>
      </nav>
    </div>
  )
}

export default navbar
