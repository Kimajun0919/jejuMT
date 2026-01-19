import { PageLayout } from '../components/PageLayout'

const backgroundImage =
  'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1600&q=80&sat=-18'

const scheduleItems = [
  { time: '15:00', title: '캠핑장 집결 & 세팅', detail: '짐 풀고 텐트 세팅, 역할 분배' },
  { time: '16:00', title: '캠핑 레크리에이션', detail: '몸 풀기 게임, 귤 깎기 챌린지' },
  { time: '18:00', title: '바베큐 🍖', detail: '불 앞에서 따뜻하게, 고기 + 귤' },
  { time: '19:30', title: '미니미니 불꽃놀이 ✨', detail: '작지만 반짝이는 순간 기록' },
  { time: '20:30', title: '딥톡 찐톡 (캠프파이어 🔥)', detail: '랜턴 불빛 아래 깊은 이야기' },
  { time: '24:00', title: '기도제목 나누기', detail: '마무리하며 마음 모으기' },
]

export default function Schedule() {
  return (
    <PageLayout
      title="하루의 흐름"
      subtitle="무드가 변하는 순간순간을 따라가요."
      background={backgroundImage}
      accent="#f59e0b"
      badge="Schedule"
      ctaLabel="중요 안내"
      ctaTo="/notice"
    >
      <div className="timeline">
        {scheduleItems.map((item) => (
          <div key={item.time} className="timeline-item">
            <span className="timeline-time">{item.time}</span>
            <div className="timeline-content">
              <p className="timeline-title">{item.title}</p>
              <p className="timeline-trace">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
