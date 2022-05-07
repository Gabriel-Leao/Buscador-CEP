import { styled } from '@stitches/react'

export const InputDiv = styled('div', {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '8px',
  boxShadow: '1px 3px 8px rgba(0, 0, 0, 0.5)',
  display: 'flex',
  margin: '34px 0',
  padding: '15px',
})

export const StyledInput = styled('input', {
  backgroundColor: 'transparent',
  border: '0',
  color: '#fff',
  fontSize: '20px',
  marginRight: '8px',
  outline: 'none',

  '&::placeholder': {
    color: 'rgba(255, 255, 255, 0.3)'
  }
})

export const StyledButton = styled('button', {
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: '0',
  color: '#ccc',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '18px',
  justifyContent: 'center',
  transition: 'transform 0.5s',

  '&:hover': {
    transform: 'scale(1.2)'
  }
})