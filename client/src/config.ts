export const API_BASE =
  import.meta.env.VITE_API_BASE ?? "http://localhost:5000";

export function api(path: string, init?: RequestInit) {
  const url = path.startsWith("http")
    ? path
    : `${API_BASE.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  return fetch(url, init);
}

export async function apiJson<T = any>(path: string, init?: RequestInit): Promise<T> {
  const res = await api(path, init);
  if (!res.ok) {
    throw new Error(`Request failed ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}