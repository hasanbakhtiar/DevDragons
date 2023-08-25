// const text:any = document.querySelector('h1') as HTMLHeadingElement;
const text:any = document.querySelector<HTMLHeadingElement>('h1');
text.textContent = "Hello TS";