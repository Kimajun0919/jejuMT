import { Route, Routes } from 'react-router-dom'
import Ending from './pages/Ending'
import Info from './pages/Info'
import Intro from './pages/Intro'
import Notice from './pages/Notice'
import Packing from './pages/Packing'
import Schedule from './pages/Schedule'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/info" element={<Info />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/packing" element={<Packing />} />
        <Route path="/ending" element={<Ending />} />
        <Route path="*" element={<Intro />} />
      </Routes>
    </div>
  )
}

export default App
