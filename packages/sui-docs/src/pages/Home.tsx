import { Link } from 'react-router-dom'
import './home.scss'

const Home = () => {
  const mainFeatures = [
    {
      title: "Button",
      description: "다양한 스타일과 상태를 지원하는 버튼 컴포넌트",
      icon: "🔘"
    },
    {
      title: "Input",
      description: "유연하고 접근성을 고려한 입력 컴포넌트",
      icon: "📝"
    },
    {
      title: "Select",
      description: "사용하기 쉬운 드롭다운 선택 컴포넌트",
      icon: "📋"
    },
    {
      title: "Form Controls",
      description: "Checkbox, Radio, Textarea 등 폼 요소들",
      icon: "✅"
    }
  ];

  const plannedTools = [
    { name: "RGB to HEX 변환기", description: "색상 코드 변환 도구" },
    { name: "PSD Drop Shadow 변환기", description: "PSD 그림자를 CSS Box Shadow로" },
    { name: "SVG 압축기", description: "SVG 파일 최적화 도구" },
    { name: "이미지 압축기", description: "웹 최적화 이미지 압축" }
  ];

  return (
    <div className="sui-page-wrapper">
      <main className="home">
        {/* Hero Section */}
        <section className="home__hero">
          <div className="home__hero-content">
            <h1 className="home__title">
              <span className="home__title-main">Sen UI</span>
              <span className="home__title-sub">React UI 컴포넌트 라이브러리</span>
            </h1>
            <p className="home__description">
              모던하고 접근성을 고려한 React UI 컴포넌트들과 
              개발에 유용한 도구들을 제공합니다.
            </p>
            <div className="home__actions">
              <Link to="/guide" className="home__cta-button">
                컴포넌트 가이드 보기
              </Link>
              <a 
                href="https://github.com" 
                className="home__github-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="home__features">
          <h2 className="home__section-title">주요 컴포넌트</h2>
          <div className="home__features-grid">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="home__feature-card">
                <div className="home__feature-icon">{feature.icon}</div>
                <h3 className="home__feature-title">{feature.title}</h3>
                <p className="home__feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="home__tech-stack">
          <h2 className="home__section-title">기술 스택</h2>
          <div className="home__tech-badges">
            <span className="home__tech-badge">React 19</span>
            <span className="home__tech-badge">TypeScript</span>
            <span className="home__tech-badge">Vite</span>
            <span className="home__tech-badge">SASS/SCSS</span>
            <span className="home__tech-badge">Pretendard</span>
          </div>
        </section>

        {/* Planned Tools Section */}
        <section className="home__planned-tools">
          <h2 className="home__section-title">계획된 개발 도구</h2>
          <div className="home__tools-grid">
            {plannedTools.map((tool, index) => (
              <div key={index} className="home__tool-card">
                <h3 className="home__tool-title">{tool.name}</h3>
                <p className="home__tool-description">{tool.description}</p>
                <span className="home__tool-status">개발 예정</span>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="home__getting-started">
          <h2 className="home__section-title">시작하기</h2>
          <div className="home__steps">
            <div className="home__step">
              <div className="home__step-number">1</div>
              <div className="home__step-content">
                <h3>컴포넌트 탐색</h3>
                <p>가이드 페이지에서 다양한 UI 컴포넌트들을 확인해보세요</p>
              </div>
            </div>
            <div className="home__step">
              <div className="home__step-number">2</div>
              <div className="home__step-content">
                <h3>예제 코드 복사</h3>
                <p>각 컴포넌트의 사용 예제와 Props를 확인하고 복사하세요</p>
              </div>
            </div>
            <div className="home__step">
              <div className="home__step-number">3</div>
              <div className="home__step-content">
                <h3>프로젝트에 적용</h3>
                <p>복사한 컴포넌트를 프로젝트에 바로 적용해보세요</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home