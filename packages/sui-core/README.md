# @seona/sui-core

Seona UI Component Library - React 컴포넌트 라이브러리

## 설치

```bash
npm install @seona/sui-core
```

## 사용법

```tsx
import { Button, Input, Select } from '@seona/sui-core'

function App() {
  return (
    <div>
      <Button variant="contained" size="lg">
        Click me
      </Button>
      <Input placeholder="Enter text..." />
      <Select options={['Option 1', 'Option 2']} />
    </div>
  )
}
```

## 사용 가능한 컴포넌트

- **Button** - 다양한 스타일과 크기의 버튼
- **Input** - 텍스트 입력 필드
- **Select** - 드롭다운 선택 컴포넌트
- **Checkbox** - 체크박스 컴포넌트
- **Radio** - 라디오 버튼 컴포넌트
- **Textarea** - 다중 라인 텍스트 입력
- **StarRating** - 별점 평가 컴포넌트
- **CodeContainer** - 코드 표시 컨테이너

## 요구사항

- React 18.0.0 이상
- React DOM 18.0.0 이상

## 라이선스

MIT 