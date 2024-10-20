import { isString } from './type-guard'

export const getItemFromLocalStorage = <T extends string | object>(
  key: string,
): T | null => {
  const item = localStorage.getItem(key)

  if (!item) return null

  try {
    return JSON.parse(item) as T
  } catch {
    return item as T
  }
}

export const setItemToLocalStorage = <T>(key: string, value: T) => {
  if (isString(value)) localStorage.setItem(key, value)
  else localStorage.setItem(key, JSON.stringify(value))
}

export const removeItemFromLocalStorage = (key: string) =>
  localStorage.removeItem(key)
