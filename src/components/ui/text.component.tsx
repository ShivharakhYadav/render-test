import { Text as ChakraText, TextProps } from '@chakra-ui/react'
import React from 'react'
import { TEXT_COLOR } from '../../utils/constant.utils'

/**
 * @component Text
 * @description
 * A reusable Text component built on top of Chakra UI's `Text`.
 * This wrapper applies a consistent font style and color used across the client project.
 *
 * Helps maintain design consistency for all textual content throughout the application.
 *
 * @param {React.ReactNode} children - The text or elements to be displayed inside the component.
 * @param {TextProps} props - Additional Chakra UI `TextProps` for further customization.
 *
 * @example
 * <Text fontWeight="bold">
 *   Welcome to the Dashboard
 * </Text>
 *
 * @notes
 * - Uses the "Montserrat " font family and predefined `TEXT_COLOR` from project constants.
 * - Default font size is 18px with a line height of 22px.
 */

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <ChakraText color={TEXT_COLOR} fontSize='18px' lineHeight='22px' {...props}>
      {children}
    </ChakraText>
  )
}
