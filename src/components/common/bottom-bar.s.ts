import type { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { COLOR } from '../../styles/color'
import { FONT_SIZE } from '../../styles/font-size'
import { FONT_WEIGHT } from '../../styles/font-weight'

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  gap: 2rem;
  width: 100%;
  height: 80px;
  background-color: ${COLOR.grayscale[100]};
  border-top: 1px solid ${COLOR.grayscale[200]};
  padding: 10px;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`

export const NAVIGATION_ITEM_COLOR = {
  skyBlue: css`
    background-color: ${COLOR.skyBlue.light};
    border-color: ${COLOR.skyBlue.base};
    &:active {
      background-color: ${COLOR.skyBlue.base};
      border-color: ${COLOR.skyBlue.deep};
    }
  `,
  violet: css`
    background-color: ${COLOR.violet.light};
    border-color: ${COLOR.violet.base};
    &:active {
      background-color: ${COLOR.violet.base};
      border-color: ${COLOR.violet.deep};
    }
  `,
  purple: css`
    background-color: ${COLOR.purple.light};
    border-color: ${COLOR.purple.base};
    &:active {
      background-color: ${COLOR.purple.base};
      border-color: ${COLOR.purple.deep};
    }
  `,
  pink: css`
    background-color: ${COLOR.pink.light};
    border-color: ${COLOR.pink.base};
    &:active {
      background-color: ${COLOR.pink.base};
      border-color: ${COLOR.pink.deep};
    }
  `,
  alert: css`
    background-color: ${COLOR.alert.light};
    border-color: ${COLOR.alert.base};
    &:active {
      background-color: ${COLOR.alert.base};
      border-color: ${COLOR.alert.deep};
    }
  `,
} as const

type ItemWrapperProps = HTMLAttributes<HTMLButtonElement> & {
  $color: keyof typeof NAVIGATION_ITEM_COLOR
}

const ItemWrapper = styled.button<ItemWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  aspect-ratio: 1/1;
  border-radius: 8px;
  white-space: nowrap;
  ${({ $color }) => NAVIGATION_ITEM_COLOR[$color]}
`
const ItemText = styled.p`
  font-size: ${FONT_SIZE.tiny};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${COLOR.white};
`

export const S = {
  ListContainer,
  ItemWrapper,
  ItemText,
}
