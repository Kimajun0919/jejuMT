import { PageLayout } from '../components/PageLayout'

const backgroundImage =
  'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?auto=format&fit=crop&w=1600&q=80&sat=-10'

export default function Ending() {
  return (
    <PageLayout
      title={
        <>
          추울 수는 있지만,
          <br />
          마음은 꽤 따뜻할 거예요 🍊
        </>
      }
      subtitle="몸만 잘 챙겨서 편하게 오세요!"
      background={backgroundImage}
      accent="#fbbf24"
      badge="Ending"
      ctaLabel="처음으로 돌아가기"
      ctaTo="/"
      className="page--ending"
      cardClassName="card--ending"
    >
      <div className="ending-card">
        <p>
          모닥불이랑 귤, <br />그리고 수다 준비해둘게요.
          <br />
          옷만 따뜻하게 입고 오면 충분해요 🙂
        </p>

        <div className="pill-row">
          <span className="pill ghost">캠프파이어</span>
          <span className="pill ghost">사진 잔뜩</span>
          <span className="pill ghost">잘 쉬는 밤</span>
        </div>
      </div>
    </PageLayout>
  )
}
