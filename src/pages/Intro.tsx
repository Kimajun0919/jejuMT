import { PageLayout } from '../components/PageLayout'

const heroImage =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'

export default function Intro() {
  return (
    <PageLayout
      title="제주 M-MT + 캠핑 🍊"
      subtitle="이번주 토요일, 진짜 모입니다!"
      background={heroImage}
      accent="#f97316"
      badge="Warm Up"
      ctaLabel="일정 보기 →"
      ctaTo="/info"
      className="page--intro"
      cardClassName="card--intro"
    >
      <p className="lead center">
        포토카드 한 장처럼, 한 페이지에 하나의 기분만 담았습니다. 천천히 넘겨보세요.
      </p>
      <div className="pill-row center">
        <span className="pill">노을·밤 감성</span>
        <span className="pill">제주의 추억</span>
        <span className="pill">정보 + 감성 밸런스</span>
      </div>
    </PageLayout>
  )
}
