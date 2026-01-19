import { PageLayout } from '../components/PageLayout'

const backgroundImage =
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80&sat=-10'

const notices = [
  '야외 캠핑 일정으로 매우 춥습니다.',
  '체감온도가 많이 낮을 수 있습니다.',
  '두꺼운 외투, 내복, 목도리, 장갑, 모자 필수',
  '핫팩 강력 추천',
]

export default function Notice() {
  return (
    <PageLayout
      title="❄️ 중요 안내 (꼭 확인!)"
      subtitle="추위 대비만 확실히 하면, 무조건 즐거워집니다."
      background={backgroundImage}
      accent="#38bdf8"
      badge="Notice"
      ctaLabel="준비물 체크"
      ctaTo="/packing"
    >
      <ul className="notice-list">
        {notices.map((notice) => (
          <li key={notice}>
            <div className="notice-dot" />
            <span>{notice}</span>
          </li>
        ))}
      </ul>
      <p className="warm-tip">공포감보다는 배려 톤으로, 서로를 따뜻하게 챙겨요.</p>
    </PageLayout>
  )
}
