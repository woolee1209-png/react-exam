import { products } from '../datas/products.js'
import ProductCard from '../components/ProductCard.jsx'
import LikeButton from '../components/LikeButton.jsx'
import LiveInput from '../components/LiveInput.jsx'
import Page from '../components/Page.jsx'

export default function ProductList() {
  return (
    <>
      <h2>상품 목록</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <section className="hooks-section">

        <h3>1. 좋아요 버튼</h3>
        <LikeButton />
        <h3>2. 실시간 입력</h3>
        <LiveInput />
        <h3>3. useEffect</h3>
        <Page />
      </section>
    </>
  )
}
