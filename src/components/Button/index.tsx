import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  children: ReactNode
  typeButton: 'button' | 'submit' | 'reset'
  backgroundColor?: string
}

export function Button({
  children,
  typeButton,
  backgroundColor = '#D47F56',
}: ButtonProps) {
  return (
    <ButtonContainer type={typeButton} style={{ backgroundColor }}>
      {children}
    </ButtonContainer>
  )
}
