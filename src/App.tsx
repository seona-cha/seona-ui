import './App.css'
import Button from './components/Button'

function App() {

  const onClickEvent = () => {
    console.log('클릭')
  }

  return (
    <>
      <h1> UI</h1>
      <ol>
        <li>button</li>
        <li>input</li>
        <li>textarea</li>
        <li>checkbox</li>
        <li>radio</li>
        <li>select</li>
        <li>switch</li>
        <li>modal</li>
        <li>tooltip</li>
        <li>dropdown</li>
        <li>pagination</li>
        <li>table</li>
        <li>tabs</li>
        <li>alert</li>
        <li>badge</li>
        <li>card</li>
        <li>collapse</li>
        <li>carousel</li>
      </ol>
      <hr />
      <Button onClick={onClickEvent} variant={"solid"} disabled={false}>button</Button>
    </>
  )
}

export default App

/*
  각 컴포넌트 구현 후 가이드 페이지 제작
  갤러리 형태로 10개씩 나열, 페이지네이션으로 페이지 이동
  각 컴포넌트 클릭 시 상단 하이라이트 표시(컴포넌트 이름, ui, 코드 예시-복사가능하도록), 
  하단 아코디언 열면 props 예시 보여주기
  더보기 버튼 클릭시 모달창 표시: 컴포넌트 예시, props 예시, 토글 형태로 컴포넌트 예시 보여주기

  + 가이드 페이지 추가 기능 +
  RGB to HEX 변환 기능 추가
  PSD Drop Shadow -> CSS Box Shadow 변환 기능 추가
  SVG 압축 기능 추가
  이미지 압축 기능 추가
*/
