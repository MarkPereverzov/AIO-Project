export function daysBetween(first: Date, second: Date) {
  return Math.ceil(Math.abs(first.getTime() - second.getTime()) / (1000 * 3600 * 24));
}