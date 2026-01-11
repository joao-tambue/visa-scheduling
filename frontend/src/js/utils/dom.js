export function createElement(tag, content) {
  const el = document.createElement(tag);
  el.textContent = content;
  return el;
}