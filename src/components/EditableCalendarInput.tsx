import React, {FC} from 'react'
import {Text} from '@react-pdf/renderer'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import compose from '../styles/compose'

interface Props {
    className?: string
    value?: string
    selected?: Date
    onChange?: (date: Date | [Date, Date] | null) => void
    pdfMode?: boolean
    labelText?: string
    labelFlexDirection?: 'row' | 'column'
}

const EditableCalendarInput: FC<Props> = ({className, value, selected, onChange, pdfMode, labelText = '', labelFlexDirection = 'row' }) => {

    const InputBox = () => {
        return (
            <DatePicker
                className={'input ' + (className ? className : '')}
                selected={selected}
                // @ts-ignore
                onChange={onChange ? (date) => onChange(date) : (date) => null}
                dateFormat="MMM dd, yyyy"
            />
        )
    }

    const InputBoxWithLabel = () => {
        const alignment = labelFlexDirection === 'row' ? 'center' : 'flex-start'

        return (
            <div className="input-box-with-label"
                 style={{display: "flex", flexDirection: labelFlexDirection, alignItems: alignment}}>
                <div style={{marginRight: 10}}>{labelText}</div>
                <InputBox/>
            </div>
        )
    }

    const EditableInputDraft = () => {
        return (
            <div>
                {labelText ? (
                    <InputBoxWithLabel/>
                ) : (
                    <InputBox/>
                )}
            </div>
        )
    }

    return (
        <>
            {pdfMode ? (
                <Text style={compose('span ' + (className ? className : ''))}>{value}</Text>
            ) : (
                <EditableInputDraft/>
            )}
        </>
    )
}

export default EditableCalendarInput
