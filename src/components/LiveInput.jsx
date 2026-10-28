import { useState } from 'react'

export default function LiveInput() {
  const [value, setValue] = useState('')
  return (
    <div className="exercise">
      <input
        type="text"
        placeholder="텍스트를 입력하세요"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p>입력값: {value}</p>
    </div>
  )
}
