import React, {FC} from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import {Text} from '@react-pdf/renderer'
import compose from '../styles/compose'

interface Props {
    className?: string
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    pdfMode?: boolean
    rows?: number
    labelText?: string
    labelFlexDirection?: 'row' | 'column'
}

const EditableTextarea: FC<Props> = ({
                                         className,
                                         placeholder,
                                         value,
                                         onChange,
                                         pdfMode,
                                         rows,
                                         labelText = '',
                                         labelFlexDirection = 'row'
                                     }) => {
    const alignment = labelFlexDirection === 'row' ? 'center' : 'flex-start'

    return (
        <>
            {pdfMode ? (
                <Text style={compose('span ' + (className ? className : ''))}>{value}</Text>
            ) : (

                <div className="editable-input">
                    {labelText ? (
                        <div className="input-box-with-label"
                             style={{display: "flex", flexDirection: labelFlexDirection, alignItems: alignment}}>
                            <div style={{marginRight: 10, fontWeight: 600, marginBottom: 6}}>
                                {labelText}
                            </div>
                            <TextareaAutosize
                                minRows={rows || 1}
                                className={'input ' + (className ? className : '')}
                                placeholder={placeholder || ''}
                                value={value || ''}
                                onChange={onChange ? (e: { target: { value: string } }) => onChange(e.target.value) : undefined}
                            />
                        </div>
                    ) : (
                        <TextareaAutosize
                            minRows={rows || 1}
                            className={'input ' + (className ? className : '')}
                            placeholder={placeholder || ''}
                            value={value || ''}
                            onChange={onChange ? (e: { target: { value: string } }) => onChange(e.target.value) : undefined}
                        />
                    )}
                </div>
            )}
        </>
    )
}

export default EditableTextarea
