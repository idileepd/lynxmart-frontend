export function delay(sec: number) {
  const ms = sec * 1000;

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
