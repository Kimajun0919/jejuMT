import { PageLayout } from '../components/PageLayout'

const backgroundImage =
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80'

export default function Info() {
  return (
    <PageLayout
      title="언제 · 어디서 만날까요?"
      subtitle="핵심 정보만 선명하게 남겼어요."
      background={backgroundImage}
      accent="#fb923c"
      badge="Info"
      ctaLabel="다음 · 일정"
      ctaTo="/schedule"
      className="page--info"
    >
      <div className="info-grid">
        <div className="info-row">
          <span className="info-label">📅</span>
          <div>
            <p className="info-title">1월 24일(금) 오후 3시 집결</p>
            <p className="info-meta">시간 약속! 꼭 지켜주세요!</p>
          </div>
        </div>
        <div className="info-row">
          <span className="info-label">📍</span>
          <div>
            <p className="info-title">지원이 아지트 (송포대성농장)</p>
            <p className="info-meta address-block">경기 고양시 일산서구 송산로374번길 20</p>
          </div>
        </div>
        <div className="info-row highlight">
          <span className="info-label">🗺️</span>
          <div className="info-meta">
            <p className="info-title">지도 열기</p>
            <a
              className="cta ghost full"
              href="https://maps.google.com/?q=%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EC%9D%BC%EC%82%B0%EC%84%9C%EA%B5%AC%20%EC%86%A1%EC%82%B0%EB%A1%9C374%EB%B2%88%EA%B8%B8%2020"
              target="_blank"
              rel="noreferrer"
            >
              구글맵으로 길찾기
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
