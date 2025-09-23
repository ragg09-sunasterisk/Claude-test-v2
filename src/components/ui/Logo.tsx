'use client'

import { Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'text' | 'icon' | 'full'
  color?: 'primary' | 'secondary' | 'inherit'
  onClick?: () => void
}

const StyledLogo = styled(Box)<{ clickable: boolean }>(({ theme, clickable }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: clickable ? 'pointer' : 'default',
  '&:hover': clickable ? {
    opacity: 0.8,
  } : {},
}))

const LogoIcon = styled(Box)(({ theme }) => ({
  width: 32,
  height: 32,
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  fontWeight: 'bold',
}))

export default function Logo({
  size = 'medium',
  variant = 'full',
  color = 'primary',
  onClick
}: LogoProps) {
  const textVariant = {
    small: 'h6',
    medium: 'h5',
    large: 'h4'
  }[size] as 'h6' | 'h5' | 'h4'

  const iconSize = {
    small: 24,
    medium: 32,
    large: 40
  }[size]

  return (
    <StyledLogo clickable={!!onClick} onClick={onClick}>
      {(variant === 'icon' || variant === 'full') && (
        <LogoIcon sx={{ width: iconSize, height: iconSize }}>
          A
        </LogoIcon>
      )}
      {(variant === 'text' || variant === 'full') && (
        <Typography variant={textVariant} color={color} component="span">
          MyApp
        </Typography>
      )}
    </StyledLogo>
  )
}