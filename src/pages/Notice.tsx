import { PageLayout } from '../components/PageLayout'

const backgroundImage =
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80&sat=-10'

const notices = [
  '야외 바베큐로 인해 날씨가 꽤 춥게 느껴질 수 있어요.',
  '바람이 불면 체감온도가 더 낮아질 수 있습니다.',
  '두꺼운 외투와 내복, 목도리·장갑·모자 등 방한용품을 꼭 준비해 주세요.',
  '핫팩이 있으면 훨씬 편하게 지낼 수 있어요.',
]

export default function Notice() {
  return (
    <PageLayout
      title="❄️ 안내 사항"
      subtitle="추위 대비만 잘 해주시면 됩니다."
      background={backgroundImage}
      accent="#38bdf8"
      badge="Notice"
      ctaLabel="준비물 확인하기 →"
      ctaTo="/packing"
      className="page--notice"
    >
      <div className="notice-alert">
        <strong>날씨가 많이 춥습니다.</strong>
        <br />
        방한 준비를 꼭!! 잘 해주세요!
      </div>

      <ul className="notice-list">
        {notices.map((notice) => (
          <li key={notice}>
            <div className="notice-dot" />
            <span>{notice}</span>
          </li>
        ))}
      </ul>

      <p className="warm-tip">
        모두가 편안하고 안전하게 시간을 보낼 수 있도록
        <br />
        서로 배려하는 마음으로 준비해 주세요.
      </p>
    </PageLayout>
  )
}
