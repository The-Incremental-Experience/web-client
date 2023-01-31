export function questionPost(data: string | Object): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Answer"), 1000));
}

export function networkCheck(): Promise<boolean> {
  return new Promise((resolve) => setTimeout(() => resolve(true), 500));
}
