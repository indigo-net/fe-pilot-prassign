export const isUndefined = (value: unknown): value is undefined =>
  value === undefined

export const isNull = (value: unknown): value is null => value === null

export const isString = (value: unknown): value is string =>
  typeof value == 'string'
