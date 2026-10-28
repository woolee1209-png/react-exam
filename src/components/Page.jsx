import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    console.log('페이지 로딩...')
  }, [])

  return <div className="exercise">페이지</div>
}
