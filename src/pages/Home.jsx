import { Link } from "react-router-dom";

const collections = [
  { number: "01", title: "Daily Earrings", text: "매일 부담 없이 착용할 수 있는 기본 디자인" },
  { number: "02", title: "Point Earrings", text: "작은 포인트가 필요한 날을 위한 디자인" },
  { number: "03", title: "Special Moment", text: "특별한 순간을 조금 더 반짝이게" },
];

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">NEW COLLECTION · 2026</p>
          <h1>작은 반짝임으로<br />오늘을 완성해요.</h1>
          <p className="hero-description">매일의 스타일에 자연스럽게 어울리는<br />심플하고 오래 착용하고 싶은 귀걸이를 만나보세요.</p>
          <Link className="hero-button" to="/products">SHOP COLLECTION <span>→</span></Link>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="earring-orbit orbit-one" />
          <div className="earring-orbit orbit-two" />
          <div className="earring-stud stud-one" />
          <div className="earring-stud stud-two" />
          <p>EVERYDAY<br />SHINE</p>
        </div>
      </section>

      <section className="home-intro">
        <p className="eyebrow">ABOUT EARRING</p>
        <h2>가볍게 고르고,<br />오래 함께하는 주얼리.</h2>
        <p>유행을 따라가기보다 나만의 일상에 자연스럽게 스며드는 디자인을 제안합니다. 아직 상품을 준비하는 단계부터 하나씩 완성해가는 작은 쇼핑몰입니다.</p>
      </section>

      <section className="home-collections">
        <div className="section-heading">
          <div><p className="eyebrow">OUR COLLECTION</p><h2>취향에 맞는 반짝임</h2></div>
          <Link to="/products">VIEW ALL →</Link>
        </div>
        <div className="collection-grid">
          {collections.map((item) => (
            <article className="collection-card" key={item.number}>
              <span>{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <b>+</b>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <p className="eyebrow">FIND YOUR EVERYDAY PIECE</p>
        <h2>오늘의 나에게 어울리는<br />귀걸이를 찾아보세요.</h2>
        <Link className="text-link" to="/products">SHOP NOW →</Link>
      </section>
    </div>
  );
}