import { styled, keyframes } from '@stitches/react'

const animation = keyframes({
  'from': {
    transform: 'rotateX(90deg)'
  },
  'to': {
    transform: 'rotateX(0deg)'
  }
})

export const StyledTitle = styled('h1', {
  animation: `${animation} 2s`,
  color: '#fff',
  fontSize: '40px',
})