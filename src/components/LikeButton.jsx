import { useState } from 'react'

export default function LikeButton() {
  const [likes, setLikes] = useState(2)
  return (
    <div className="exercise">
      <p>좋아요 {likes}</p>
      <button type="button" onClick={() => 
        setLikes(likes + 1)}>👍</button>
    </div>
  )
}
