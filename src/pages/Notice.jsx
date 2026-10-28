import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Notice() {
  const [notices, setNotices] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        setNotices(response.data)
      } catch (err) {
        setError('공지사항을 불러오지 못했습니다.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchNotices()
  }, [])


  const filteredNotices = notices.filter((notice) => notice.title.includes(search))

  return (
    <section className="notices">
      <h2>공지 사항</h2>
      <input
        className="search"
        type="text"
        placeholder="제목 검색"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {loading ? <p>불러오는 중...</p> : error ? <p role="alert">{error}</p> : (
        <>
          <p>{filteredNotices.length}건</p>
          <ul className="notice-list">
            {filteredNotices.map((notice) => (
              <li key={notice.id}>
                <span className="notice-id">{notice.id}.</span>
                {notice.title}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
