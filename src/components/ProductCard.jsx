export default function ProductCard({ product }) {
  return (
    <div className="card">
      <p className="category">{product.category}</p>
      <h3>{product.name}</h3>
      <p className="price">{product.price.toLocaleString('ko-KR')}원</p>
    </div>
  )
}