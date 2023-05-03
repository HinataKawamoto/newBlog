

const TokenKey = 'token'

export function getToken() {

  return localStorage.token
}
export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.remove(TokenKey)
}
