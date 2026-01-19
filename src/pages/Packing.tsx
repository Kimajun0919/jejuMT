import { useEffect, useState, type FormEvent } from 'react'
import { PageLayout } from '../components/PageLayout'

const backgroundImage =
  'https://images.unsplash.com/photo-1501877008226-4fca48ee50c1?auto=format&fit=crop&w=1600&q=80&sat=-10'

type ChecklistItem = {
  id: string
  label: string
  checked: boolean
}

const STORAGE_KEY = 'packing-checklist'

const defaultItems: ChecklistItem[] = [
  { id: 'tooth', label: '세면도구', checked: false },
  { id: 'clothes', label: '개인 의류 (여벌 포함)', checked: false },
  { id: 'warm', label: '두꺼운 겉옷 및 방한용품', checked: false },
  { id: 'sleep', label: '개인 침낭 또는 담요', checked: false },
  { id: 'bottle', label: '개인 물병 / 텀블러', checked: false },
  { id: 'charge', label: '충전기 / 보조배터리', checked: false },
  { id: 'med', label: '개인 상비약', checked: false },
]

export default function Packing() {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    if (typeof window === 'undefined') return defaultItems
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed: ChecklistItem[] = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          return parsed
        }
      }
    } catch (err) {
      console.error('Failed to parse checklist', err)
    }
    return defaultItems
  })
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
    )
  }

  const addItem = () => {
    const trimmed = newItem.trim()
    if (!trimmed) return
    setItems((prev) => [
      ...prev,
      { id: `${Date.now()}`, label: trimmed.slice(0, 60), checked: false },
    ])
    setNewItem('')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addItem()
  }

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
          <li key={item.id}>
            <label className="checkline">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleItem(item.id)}
                className="check-input"
              />
              <span className="check-label">{item.label}</span>
            </label>
          </li>
        ))}
      </ul>
      <form className="checklist-add" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="추가 준비물 입력"
          aria-label="준비물 추가"
        />
        <button type="submit" className="cta ghost">
          추가
        </button>
      </form>
      <div className="note-block">※ 공동 물품 및 바베큐 재료는 기획팀에서 준비합니다.</div>
    </PageLayout>
  )
}
