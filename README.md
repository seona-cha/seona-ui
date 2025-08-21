# Seona UI Monorepo

Seona UI 컴포넌트 라이브러리와 문서 사이트를 포함한 Monorepo 프로젝트입니다.

## 📁 프로젝트 구조

```
seona-ui/
├── packages/
│   ├── sui-core/          # React 컴포넌트 라이브러리 (npm 배포용)
│   └── sui-docs/          # 문서 사이트 (로컬 개발용)
├── package.json           # 루트 설정
└── pnpm-workspace.yaml    # 워크스페이스 설정
```

## 🚀 시작하기

### 의존성 설치

```bash
npm install
```

### 문서 사이트 개발 서버 실행

```bash
npm run dev:docs
```

### 컴포넌트 라이브러리 빌드

```bash
npm run build:core
```

### 문서 사이트 빌드

```bash
npm run build:docs
```

## 📦 패키지별 설명

### @seona/sui-core

React 컴포넌트 라이브러리로, 다음과 같은 컴포넌트들을 제공합니다:

- Button
- Input
- Select
- Checkbox
- Radio
- Textarea
- StarRating
- CodeContainer

**설치:**
```bash
npm install @seona/sui-core
```

**사용법:**
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

### @seona/sui-docs

컴포넌트 라이브러리의 문서 사이트입니다. 각 컴포넌트의 사용법과 예제를 제공합니다.

## 🔧 개발 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev:docs` | 문서 사이트 개발 서버 실행 |
| `npm run build:core` | 컴포넌트 라이브러리 빌드 |
| `npm run build:docs` | 문서 사이트 빌드 |
| `npm run lint` | 모든 패키지 린트 실행 |
| `npm run publish:core` | 컴포넌트 라이브러리 npm 배포 |

## 📋 요구사항

- Node.js 18.0.0 이상
- React 18.0.0 이상
- React DOM 18.0.0 이상

## 📄 라이선스

MIT
