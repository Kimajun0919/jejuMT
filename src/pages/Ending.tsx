import { PageLayout } from '../components/PageLayout'

const backgroundImage =
  'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?auto=format&fit=crop&w=1600&q=80&sat=-10'

export default function Ending() {
  return (
    <PageLayout
      title="추위만 잘 준비하면, 정말 따뜻한 시간 될 거예요 🍊"
      subtitle="모두 건강하게 만나요!"
      background={backgroundImage}
      accent="#fbbf24"
      badge="Ending"
      ctaLabel="인트로로 돌아가기"
      ctaTo="/"
      className="page--ending"
      cardClassName="card--ending"
    >
      <div className="ending-card">
        <p>모닥불, 귤, 이야기만 준비해요. 단단한 방한만 챙기면 돼요.</p>
        <div className="pill-row">
          <span className="pill ghost">캠프파이어</span>
          <span className="pill ghost">하이라이트 사진</span>
          <span className="pill ghost">좋은 밤</span>
        </div>
      </div>
    </PageLayout>
  )
}
