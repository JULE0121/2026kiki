import { Link, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function Placeholder({ title }) {
  return (
    <section className="page-placeholder">
      <p className="eyebrow">COMING SOON</p>
      <h1>{title}</h1>
      <p>다음 작업에서 이 페이지를 채워갈 예정입니다.</p>
      <Link to="/">홈으로 돌아가기</Link>
    </section>
  );
}

function Home() {
  return (
    <section className="page-placeholder">
      <p className="eyebrow">EARRING SHOP</p>
      <h1>귀걸이 쇼핑몰</h1>
      <p>프론트엔드만으로 만드는 React 쇼핑몰 프로젝트입니다.</p>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Placeholder title="상품 목록" />} />
        <Route path="/cart" element={<Placeholder title="장바구니" />} />
        <Route path="/wishlist" element={<Placeholder title="찜 목록" />} />
        <Route path="*" element={<Placeholder title="페이지를 찾을 수 없습니다." />} />
      </Route>
    </Routes>
  );
}
