import type { StatusType } from '../types/status-code.type'

export const ARRAY_STATUS: Array<StatusType> = [
  'REST',
  'READY',
  'GAME',
] as const
export const MAP_STATUS_TO_LABEL: Record<StatusType, string> = {
  REST: '휴식',
  READY: '준비',
  GAME: '게임 중',
} as const
