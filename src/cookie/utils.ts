export function setCookie(
  name: string,
  value: string,
  expirationDays: number
): void {
  const date = new Date()
  date.setDate(date.getDate() + expirationDays)

  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value}; ${expires}; path=/`
}

export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(";")

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()

    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1)
    }
  }

  return null
}

export function deleteCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}
