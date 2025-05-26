'use client'
import { Box } from '@chakra-ui/react'
import React, { forwardRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { DATE_FORMAT, SELECT_FONT_SIZE } from '../../utils/constant.utils'

type DateInputProps = {
  name: string
  onChange?: (value: Date | null) => void
}

const CustomInput = forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>((props, ref) => (
  <input
    ref={ref}
    {...props}
    style={{
      height: '34px',
      padding: '0 8px',
      borderRadius: '12px',
      fontSize: SELECT_FONT_SIZE,
      fontWeight: 300,
      width: '100%',
    }}
  />
))
CustomInput.displayName = 'CustomInput'

const DateInput: React.FC<DateInputProps> = ({ name, onChange }) => {
  const [date, setDate] = useState<null | Date>(null)

  return (
    <Box>
      <DatePicker
        id={name}
        selected={date}
        onChange={(date) => {
          setDate(date)
          onChange?.(date)
        }}
        dateFormat={DATE_FORMAT}
        placeholderText='YYYY-MM-DD'
        popperClassName='date-picker-popper'
        className='date-picker'
        // customInput={<CustomInput />}
      />
    </Box>
  )
}

export default DateInput
