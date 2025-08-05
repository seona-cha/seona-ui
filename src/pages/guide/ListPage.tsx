import React from 'react'
import { Link } from "react-router-dom"
import './listPage.scss'

const ListPage = () => {
  const components = [
    {
      title: "Button",
      description: "다양한 스타일과 상태를 지원하는 버튼 컴포넌트입니다. Primary, Secondary, Danger 등의 스타일과 크기 옵션을 제공합니다.",
      icon: "🔘",
      path: "/guide/button",
      features: ["다양한 스타일", "크기 옵션", "상태 관리"]
    },
    {
      title: "Input",
      description: "유연하고 접근성을 고려한 입력 컴포넌트입니다. 유효성 검사, 라벨, 헬퍼 텍스트 등을 지원합니다.",
      icon: "📝",
      path: "/guide/input",
      features: ["유효성 검사", "라벨 지원", "접근성"]
    },
    {
      title: "Textarea",
      description: "여러 줄 텍스트 입력을 위한 컴포넌트입니다. 자동 높이 조절과 최대 길이 제한 기능을 제공합니다.",
      icon: "📄",
      path: "/guide/textarea",
      features: ["자동 크기 조절", "최대 길이 제한", "리사이즈 제어"]
    },
    {
      title: "Checkbox",
      description: "단일 또는 다중 선택을 위한 체크박스 컴포넌트입니다. 그룹 선택과 중간 상태를 지원합니다.",
      icon: "✅",
      path: "/guide/checkbox",
      features: ["그룹 선택", "중간 상태", "커스텀 스타일"]
    },
    {
      title: "Radio",
      description: "단일 선택을 위한 라디오 버튼 컴포넌트입니다. 그룹 관리와 커스텀 스타일링을 제공합니다.",
      icon: "🔘",
      path: "/guide/radio",
      features: ["그룹 관리", "커스텀 스타일", "키보드 탐색"]
    },
    {
      title: "Select",
      description: "드롭다운 선택 컴포넌트입니다. 검색, 다중 선택, 그룹화 등의 고급 기능을 지원합니다.",
      icon: "📋",
      path: "/guide/select",
      features: ["검색 기능", "다중 선택", "옵션 그룹화"]
    }
  ];

  return (
    <div className="sui-page-wrapper">
      <main className="guide-list">
        {/* Hero Section */}
        <section className="guide-list__hero">
          <div className="guide-list__hero-content">
            <h1 className="guide-list__title">
              <span className="guide-list__title-main">컴포넌트 가이드</span>
              <span className="guide-list__title-sub">React UI 컴포넌트 라이브러리</span>
            </h1>
            <p className="guide-list__description">
              모던하고 접근성을 고려한 UI 컴포넌트들을 확인해보세요.
              각 컴포넌트의 사용법과 예제를 제공합니다.
            </p>
          </div>
        </section>

        {/* Components Grid */}
        <section className="guide-list__components">
          <h2 className="guide-list__section-title">사용 가능한 컴포넌트</h2>
          <div className="guide-list__grid">
            {components.map((component, index) => (
              <Link 
                key={index} 
                to={component.path} 
                className="guide-list__card"
                aria-label={`${component.title} 컴포넌트 가이드 보기`}
              >
                <div className="guide-list__card-icon">{component.icon}</div>
                <h3 className="guide-list__card-title">{component.title}</h3>
                <p className="guide-list__card-description">{component.description}</p>
                <div className="guide-list__card-features">
                  {component.features.map((feature, idx) => (
                    <span key={idx} className="guide-list__card-feature">{feature}</span>
                  ))}
                </div>
                <div className="guide-list__card-arrow">→</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Start */}
        <section className="guide-list__quick-start">
          <h2 className="guide-list__section-title">빠른 시작</h2>
          <div className="guide-list__steps">
            <div className="guide-list__step">
              <div className="guide-list__step-number">1</div>
              <div className="guide-list__step-content">
                <h3>컴포넌트 선택</h3>
                <p>위의 카드에서 원하는 컴포넌트를 클릭하여 가이드 페이지로 이동하세요</p>
              </div>
            </div>
            <div className="guide-list__step">
              <div className="guide-list__step-number">2</div>
              <div className="guide-list__step-content">
                <h3>예제 확인</h3>
                <p>각 컴포넌트의 다양한 사용 예제와 Props 정보를 확인하세요</p>
              </div>
            </div>
            <div className="guide-list__step">
              <div className="guide-list__step-number">3</div>
              <div className="guide-list__step-content">
                <h3>코드 복사</h3>
                <p>마음에 드는 예제의 코드를 복사하여 프로젝트에 적용하세요</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ListPage