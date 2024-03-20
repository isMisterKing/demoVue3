export function getType(value) {
  return Object.prototype.toString.call(value).match(/(?<= ).*?(?=]$)/)[0]?.toLowerCase() ?? '';
}