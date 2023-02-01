import exampleBackendResponse from "../examples/exampleBackendResponse.json";

export function questionPost(data: string | Object): Promise<Object> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(exampleBackendResponse), 1000)
  );
}

export function networkCheck(): Promise<boolean> {
  return new Promise((resolve) => setTimeout(() => resolve(true), 500));
}
