'use client'

import {
  Select as ChakraSelect,
  createListCollection,
  Portal,
  SelectRootProps,
  SelectValueChangeDetails,
} from '@chakra-ui/react'
import { useMemo } from 'react'
import { SELECT_FONT_SIZE } from '../../utils/constant.utils'

type Option = {
  label: string
  value: string
}

type SelectInputProps = {
  label?: string
  name: string
  placeholder?: string
  options: Option[]
  size?: 'sm' | 'md' | 'lg'
  width?: string
  defaultValue?: SelectRootProps['defaultValue']
  onChange?: (details: SelectValueChangeDetails<Option>) => void
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  placeholder = 'Select an option',
  options,
  size = 'sm',
  width = '100%',
  defaultValue,
  onChange,
}) => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: options,
      }),
    [options]
  )

  return (
    <ChakraSelect.Root
      name={name}
      collection={collection}
      defaultValue={defaultValue}
      onValueChange={onChange}
      size={size}
      width={width}
    >
      {label && (
        <ChakraSelect.Label
          fontWeight='medium'
          fontSize='sm'
          mb='1'
          display='block'
        >
          {label}
        </ChakraSelect.Label>
      )}

      <ChakraSelect.Control>
        <ChakraSelect.Trigger
          fontSize={SELECT_FONT_SIZE}
          fontWeight={300}
          borderRadius='12px'
          px='8px'
          height='34px'
        >
          <ChakraSelect.ValueText placeholder={placeholder} />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>

      <Portal>
        <ChakraSelect.Positioner zIndex={1000}>
          <ChakraSelect.Content>
            {collection.items.map((item) => (
              <ChakraSelect.Item item={item} key={item.value}>
                {item.label}
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </ChakraSelect.Content>
        </ChakraSelect.Positioner>
      </Portal>
    </ChakraSelect.Root>
  )
}

export default SelectInput
