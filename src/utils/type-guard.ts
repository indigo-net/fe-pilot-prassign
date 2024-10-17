import type { StatusCodeType } from '../types/status-code.type'

export const isUndefined = (value: unknown): value is undefined =>
  value === undefined

export const isNull = (value: unknown): value is null => value === null

export function isStatusCodeType(value: unknown): value is StatusCodeType {
  return value === 0 || value === 1 || value === 2
}
