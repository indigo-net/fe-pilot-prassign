import type { StatusCodeType, StatusValueType } from '../types/status-code.type'

export const STATUS = {
  REST: {
    label: '휴식',
    value: 'REST' as StatusValueType,
    code: 0 as StatusCodeType,
  },
  READY: {
    label: '준비',
    value: 'READY' as StatusValueType,
    code: 1 as StatusCodeType,
  },
  GAME: {
    label: '게임 중',
    value: 'GAME' as StatusValueType,
    code: 2 as StatusCodeType,
  },
} as const
