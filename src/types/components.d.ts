import { ReactNode, MouseEvent } from 'react';

/**
 * Button Proptypes
 */
export interface ButtonProps {
  /** 버튼 내부 콘텐츠 (텍스트, 아이콘 등) */
  children?: ReactNode;
  /** 커스텀 클래스명 */
  className?: string;
  /** 모양 */
  variant?: 'contained' | 'outlined' | 'text';
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
  /** 버튼 설명(접근성) */
  ariaLabel?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** 버튼 색상 (contained: 배경, outlined: 테두리 & 텍스트, text: 텍스트) */
  btnColor?: string;
  /** 버튼 호버 색상 */
  hoverColor?: string;
  /** contained 버튼 텍스트 색상 */
  containedTextColor?: string;
  /** border-radius */
  radius?: `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`;
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
  /** 풀사이즈 너비 */
  fullWidth?: boolean;
  /** 이름 */
  name: string;
  /** id */
  id: string;
  /** 레이블 */
  hiddenLabel?: string;
  /** placeholder */
  placeholder?: string;
  /** 입력 영역 모양 */
  variant?: 'filled' | 'outlined' | 'underline';
  /** 타입 */
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color' | 'file' | 'hidden' | 'image' | 'range' | 'textarea';
  /** border-radius */
  radius?: `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`;
  /** 입력 이벤트 핸들러 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
/** 입력 영역 크기 조절 여부(textarea) */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

/**
 * CheckBox Proptypes
 */
export interface CheckBoxProps {
  /** 입력값 */
  value: string;
  /** 커스텀 클래스명 */
  className?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 체크 여부 */
  checked?: boolean;
  /** 체크 이벤트 핸들러 */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Radio Proptypes
 */
export interface RadioProps {
  /** 입력값 */
  value: string;
  /** 커스텀 클래스명 */
  className?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 선택 여부 */
  checked?: boolean;
  /** 선택 이벤트 핸들러 */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
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