const TOKEN_LOCAL_KEY = "ACCESS_TOKEN";

// gestion token
export function readStoredAuthToken(): string | undefined {
  return localStorage.getItem(TOKEN_LOCAL_KEY) || undefined;
}
export function setStoredAuthToken(value: string) {
  localStorage.setItem(TOKEN_LOCAL_KEY, value);
}
export function clearStoredAuthToken() {
  localStorage.removeItem(TOKEN_LOCAL_KEY);
}








