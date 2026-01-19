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
    >
      <div className="ending-card">
        <p>
          작은 모닥불, 귤 한 박스, 우리 이야기가 만나면 밤공기가 달라질 거예요. 필요한 건 따뜻한
          마음과 단단한 방한준비 뿐!
        </p>
        <div className="pill-row">
          <span className="pill ghost">캠프파이어</span>
          <span className="pill ghost">하이라이트 사진</span>
          <span className="pill ghost">좋은 밤</span>
        </div>
      </div>
    </PageLayout>
  )
}
