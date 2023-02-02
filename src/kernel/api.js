import axios from "axios";

export function questionPost(data: string | Object): Promise<Object> {
  const requestBody = JSON.stringify({ text: data });
  return api
    .post("api/chat/answer", requestBody)
    .then((response) => {
      return response.data;
    })
    .catch(console.error);
}

export function networkCheck(): Promise<boolean> {
  return true;
}

const api = axios.create({
  baseURL: getDomain(),
  headers: {
    "Content-Type": "application/json",
  },
});

function getDomain(): string {
  const devDomain = "http://localhost:8000";
  const prodDomain = "kek"; //todo: set-up prod

  return isProd() ? prodDomain : devDomain;
}

function isProd(): boolean {
  return false;
}
