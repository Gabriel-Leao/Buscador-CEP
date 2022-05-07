import { styled } from '@stitches/react'

export const StyledMain = styled('main', {
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '8px',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '370px',

  '& h2': {
    fontSize: '30px',
    margin: '16px 0'
  },

  '& span': {
    fontWeight: 'bold',
    marginBottom: '16px'
  }
})