import { Input as ChakraInput, InputProps } from '@chakra-ui/react'
import React from 'react'

/**
 * @component Input
 * @description
 * A reusable input field component built on top of Chakra UI's `Input`.
 * This custom wrapper ensures consistent styling across the application
 * and applies theme-specific background and text colors.
 *
 * @param {string} value - The current value of the input.
 * @param {function} onChange - Callback function to handle input value changes.
 * @param {string} placeholder - Placeholder text for the input field.
 * @param {InputProps} rest - Additional Chakra UI InputProps for customization.
 *
 * @example
 * <Input
 *   value={formData.name}
 *   onChange={handleChange}
 *   placeholder="Enter your name"
 * />
 *
 * @notes
 * - Styled with custom padding, border radius, and font settings.
 * - Focus state removes default box shadow and outline for cleaner UI.
 */
export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  ...rest
}) => {
  return (
    <ChakraInput
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      height='38px'
      p='0px 8px'
      borderRadius='12px'
      outline='none'
      fontSize='14px'
      fontWeight={300}
      lineHeight={38}
      _focus={{
        boxShadow: 'none',
        outline: 'none',
      }}
      {...rest}
    />
  )
}
