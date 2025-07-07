import { ReactNode, MouseEvent } from 'react';

/**
 * Button Proptypes
 */
export interface ButtonProps {
  /** 버튼 내부 콘텐츠 (텍스트, 아이콘 등) */
  children: ReactNode;
  /** 커스텀 클래스명 */
  className?: string;
  /** 모양 */
  variant?: 'solid' | 'outline' | 'text';
  /** 클릭시 어떻게 동작할지 */
  type?: 'button' | 'submit' | 'reset' | 'link';
  /** (type: link 일 경우) 이동할 URL */
  href?: string;
  /** (type: link 일 경우) 새창 또는 현재창 */
  target?: '_blank' | '_self';
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 사이즈 */
  size?: 'sm' | 'md' | 'lg';
  /** 풀사이즈 너비 */
  fullWidth?: boolean;
  /** 로딩 표시 여부 */
  loading?: boolean;
  /** 버튼 설명(접근성) */
  ariaLabel?: string;
  /** 버튼 설명(hover시 노출) */
  toolTip?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * input, TextArea  Proptypes
 */
export interface TextInputProps {
  /** 입력값 */
  value: string;
  /** 커스텀 클래스명 */
  className?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 에러 발생 여부 */
  error?: boolean;
  /** 사이즈 */
  size?: 'sm' | 'md' | 'lg';
  /** 타입 */
  type: 'text' | 'password';
  /** 풀사이즈 너비 */
  fullWidth?: boolean;
}

/**
 * Input Type File , Date
 */

/**
 * CheckBox Proptypes
 */

/**
 * Radio Proptypes
 */

/**
 * Select Proptypes
 */

/**
 * Switch Proptypes
 */

/**
 * Modal Proptypes
 */

/**
 * ToolTip Proptypes
 */

/**
 * Dropdown Proptypes
 */

/**
 * Pagenation Proptypes
 */

/**
 * Table Proptypes
 */

/**
 * Tabs Proptypes
 */

/**
 * Alert Proptypes
 */

/**
 * Badge Proptypes
 */

/**
 * Card Proptypes
 */

/**
 * Collapse Proptypes
 */

/**
 * Carousel Proptypes
 */