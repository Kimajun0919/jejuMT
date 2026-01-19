import { PageLayout } from '../components/PageLayout'

const heroImage =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'

export default function Intro() {
  return (
    <PageLayout
      title="제주 M-MT + 캠핑 🍊"
      subtitle="이번 주 토요일, 드디어 모입니다!"
      background={heroImage}
      accent="#f97316"
      badge="Warm Up"
      ctaLabel="일정 보러가기 →"
      ctaTo="/info"
      className="page--intro"
      cardClassName="card--intro"
    >
      <p className="lead center">
        포토카드 넘기듯이,<br />
        이번 MT 준비 한번 쓱 보고 가세요 🙂
      </p>

      <div className="pill-row center">
        <span className="pill">노을 & 밤 감성</span>
        <span className="pill">제주 추억</span>
        <span className="pill">캠프파이어</span>
        <span className="pill">불꽃놀이</span>
        <span className="pill">캠핑</span>
      </div>
    </PageLayout>
  )
}
