'use client'

import { InputBase, Box, IconButton } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material'
import { useState, ChangeEvent } from 'react'

interface SearchInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  size?: 'small' | 'medium'
  fullWidth?: boolean
}

const SearchContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)<{ inputSize: 'small' | 'medium' }>(
  ({ theme, inputSize }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(inputSize === 'small' ? 0.75 : 1, 1, inputSize === 'small' ? 0.75 : 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })
)

const ClearButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  height: '100%',
  padding: theme.spacing(0, 1),
}))

export default function SearchInput({
  placeholder = 'Search...',
  value: controlledValue,
  onChange,
  onSearch,
  size = 'medium',
  fullWidth = false,
}: SearchInputProps) {
  const [internalValue, setInternalValue] = useState('')
  const value = controlledValue !== undefined ? controlledValue : internalValue

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    if (controlledValue === undefined) {
      setInternalValue(newValue)
    }

    onChange?.(newValue)
  }

  const handleClear = () => {
    const newValue = ''

    if (controlledValue === undefined) {
      setInternalValue(newValue)
    }

    onChange?.(newValue)
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch?.(value)
    }
  }

  return (
    <SearchContainer sx={{ width: fullWidth ? '100%' : 'auto' }}>
      <SearchIconWrapper>
        <SearchIcon fontSize={size} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        inputSize={size}
      />
      {value && (
        <ClearButton size={size} onClick={handleClear} aria-label="clear search">
          <ClearIcon fontSize={size} />
        </ClearButton>
      )}
    </SearchContainer>
  )
}