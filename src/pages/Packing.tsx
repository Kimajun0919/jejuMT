import { PageLayout } from '../components/PageLayout'

const backgroundImage =
  'https://images.unsplash.com/photo-1501877008226-4fca48ee50c1?auto=format&fit=crop&w=1600&q=80&sat=-10'

const items = [
  '세면도구',
  '개인 의류 (여벌 포함)',
  '두꺼운 겉옷 및 방한용품',
  '개인 침낭 또는 담요',
  '개인 물병 / 텀블러',
  '충전기 / 보조배터리',
  '개인 상비약',
]

export default function Packing() {
  return (
    <PageLayout
      title="준비물 체크리스트"
      subtitle="바로 저장해서 챙길 수 있게 만들었어요."
      background={backgroundImage}
      accent="#84cc16"
      badge="Packing"
      ctaLabel="마무리 보기"
      ctaTo="/ending"
      className="page--packing"
    >
      <ul className="checklist">
        {items.map((item) => (
          <li key={item}>
            <span className="check-icon">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="note-block">※ 공동 물품 및 바베큐 재료는 기획팀에서 준비합니다.</div>
    </PageLayout>
  )
}
