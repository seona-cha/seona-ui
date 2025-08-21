import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header'
import Home from './pages/Home' 
import ListPage from './pages/guide/ListPage'
import GuideButton from './pages/guide/Button'
import GuideInput from './pages/guide/Input'
import GuideTextarea from './pages/guide/Textarea'
import GuideCheckbox from './pages/guide/Checkbox'
import GuideRadio from './pages/guide/Radio'
import GuideSelect from './pages/guide/Select'
import GuideStarRating from './pages/guide/StarRating'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<ListPage />} />
          <Route path="/guide/button" element={<GuideButton />} />
          <Route path="/guide/input" element={<GuideInput />} />
          <Route path="/guide/textarea" element={<GuideTextarea />} />
          <Route path="/guide/checkbox" element={<GuideCheckbox />} />
          <Route path="/guide/radio" element={<GuideRadio />} />
          <Route path="/guide/select" element={<GuideSelect />} />
          <Route path="/guide/star-rating" element={<GuideStarRating />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

/*
  각 컴포넌트 구현 후 가이드 페이지 제작
  갤러리 형태로 6개씩 나열, 페이지네이션으로 페이지 이동
  각 컴포넌트 클릭 시 상단 하이라이트 표시(컴포넌트 이름, ui, 코드 예시-복사가능하도록), 
  하단 아코디언 열면 props 예시 보여주기
  더보기 버튼 클릭시 모달창 표시: 컴포넌트 예시, props 예시, 토글 형태로 컴포넌트 예시 보여주기

  + 가이드 페이지 추가 기능 +
  RGB to HEX 변환 기능 추가
  PSD Drop Shadow -> CSS Box Shadow 변환 기능 추가
  SVG 압축 기능 추가
  이미지 압축 기능 추가
*/
