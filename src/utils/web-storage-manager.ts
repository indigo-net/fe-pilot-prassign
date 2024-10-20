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

export const setItemToLocalStorage = <T extends string | object>(
  key: string,
  value: T,
) => {
  if (typeof value == 'string') localStorage.setItem(key, value)
  else localStorage.setItem(key, JSON.stringify(value))
}
