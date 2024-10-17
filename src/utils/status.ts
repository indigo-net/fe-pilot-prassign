import { STATUS } from '../constants/status'
import { isStatusCodeType } from './type-guard'

export const mapCodeToLabel = (statusCode: number) => {
  if (!isStatusCodeType(statusCode)) return null

  for (const { code, label } of Object.values(STATUS))
    if (code === statusCode) return label
  return null
}
