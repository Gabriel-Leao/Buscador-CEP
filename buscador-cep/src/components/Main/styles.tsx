import { styled } from '@stitches/react'

export const StyledMain = styled('main', {
  alignItems: 'center',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '500px',

  '& h2': {
    fontSize: '30px',
    margin: '16px 0'
  },

  '& span': {
    fontWeight: 'bold',
    marginBottom: '16px'
  }
})