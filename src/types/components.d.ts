import { ReactNode, MouseEvent, ChangeEvent, FocusEvent } from 'react';

/**
 * Button Proptypes
 */
export interface ButtonProps {
  /** 버튼 내부 콘텐츠 (텍스트, 아이콘 등) */
  children?: ReactNode;
  /** 커스텀 클래스명 */
  className?: string;
  /** 클릭시 어떻게 동작할지 */
  type?: 'button' | 'submit' | 'reset' | 'link';
  /** 모양 */
  variant?: 'contained' | 'outlined' | 'text';
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
  textColor?: string;
  /** hover 효과 여부 */
  hoverEffect?: boolean;
  /** border-radius */
  radius?: `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`;
}

/**
 * input, TextArea  Proptypes
 */
export interface InputProps {
  /** 이름 */
  name: string;
  /** id */
  id: string;
  /** 타입 */
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color' | 'file' | 'hidden' | 'image' | 'range' | 'textarea';
  /** 입력값 */
  value?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 사이즈 */
  size?: 'sm' | 'md' | 'lg';
  /** 입력 영역 모양 */
  variant?: 'filled' | 'outlined' | 'underline';
  /** 풀사이즈 너비 */
  fullWidth?: boolean;
  /** 숨김 레이블 */
  hiddenLabel?: string;
  /** placeholder */
  placeholder?: string;
  /** border-radius */
  radius?: `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`;
  /** 입력 이벤트 핸들러 */
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  /** 입력 영역 포커스 이벤트 핸들러 */
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /** 커스텀 클래스명 */
  className?: string;
  /** 에러 발생 여부 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 입력 영역 크기 조절 여부(textarea) */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

/**
 * CheckBox Proptypes
 */
export interface CheckBoxProps {
  /** 레이블 */
  label: string;
  /** 사이즈 */
  size?: 'sm' | 'md' | 'lg';
  /** 레이블 숨김 여부 */
  hiddenLabel?: boolean;
  /** 커스텀 클래스명 */
  className?: string;
  /** 모양 */
  variant?: 'square' | 'circle' | 'line';
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 체크 여부 */
  checked?: boolean;
  /** 색상 */
  color?: string;
  /** 체크 이벤트 핸들러 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Radio Proptypes
 */
export interface RadioProps {
  /** name */
  name: string;
  /** 사이즈 */
  size?: 'sm' | 'md' | 'lg';
  /** 레이블 숨김 여부 */
  hiddenLabel?: boolean;
  /** 커스텀 클래스명 */
  className?: string;
  /** 모양 */
  variant?: 'square' | 'circle';
  /** 색상 */
  color?: string;
  /** 옵션 */
  options: {
    label: string;
    value: string;
    disabled?: boolean;
  }[];
  /** 방향 */
  direction?: 'horizontal' | 'vertical';
  /** 풀사이즈 너비 */
  fullWidth?: boolean;
  /** 선택 이벤트 핸들러 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Select Proptypes
 */
export interface SelectProps {
  /** 커스텀 클래스명 */
  className?: string;
  /** 옵션 */
  options: {
    label: string;
    value: string;
    disabled?: boolean;
  }[];
  /** 선택된 값 */
  value?: string;
  /** 선택된 값 설정 */
  setValue?: (value: string) => void;
  /** placeholder */
  placeholder?: string;
  /** 사이즈 */
  size?: 'sm' | 'md' | 'lg';
  /** 너비 지정 */
  width?: string;
  /** 모양 */
  variant?: 'filled' | 'outlined' | 'underline';
  /** 색상 타입 */
  color?: string;
  /** 풀사이즈 너비 */
  fullWidth?: boolean;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 선택 이벤트 핸들러 */
  onChange?: () => void;
}

/**
 * StarRating Proptypes
 */
export interface StarRatingProps {
  /** 커스텀 클래스명 */
  className?: string;
  /** 별점 (제어 가능) */
  rating?: number;
  /** 별점 최대값 */
  maxRating?: number;
  /** 별점 제어 여부 (true: 제어 불가, false: 제어 가능) */
  readOnly?: boolean;
  /** 별점 색상 */
  starColor?: string;
  /** 별점 배경 색상 */
  backgroundColor?: string;
  /** 사이즈 */
  size?: 'sm' | 'md' | 'lg';
  /** 커스텀 아이콘 */
  customIcon?: React.ReactNode;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 텍스트 노출 여부 */
  showLabel?: boolean;
  /** 텍스트 위치 */
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** 별점 선택 이벤트 핸들러 */
  onChange?: (rating: number) => void;
}

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