/**
 * CSS Module 타입 설정
 */
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

/**
 * SCSS Module 타입 설정
 */
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
