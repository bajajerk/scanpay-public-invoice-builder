import React, {FC} from 'react'
import {Text} from '@react-pdf/renderer'
import compose from '../styles/compose'

interface Props {
    className?: string
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    pdfMode?: boolean
    labelText?: string
    labelFlexDirection?: 'row' | 'column'
}

const EditableInput: FC<Props> = ({
                                      className, placeholder, value, onChange, pdfMode, labelText = '',
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
                            <div style={{marginRight: 10, fontWeight: 600}}>
                                {labelText}
                            </div>
                            <input
                                type="text"
                                className={'input ' + (className ? className : '')}
                                placeholder={placeholder || ''}
                                value={value || ''}
                                onChange={onChange ? (e) => onChange(e.target.value) : undefined}
                            />
                        </div>
                    ) : (
                        <input
                            type="text"
                            className={'input ' + (className ? className : '')}
                            placeholder={placeholder || ''}
                            value={value || ''}
                            onChange={onChange ? (e) => onChange(e.target.value) : undefined}
                        />
                    )}
                </div>
            )}
        </>
    )
}

export default EditableInput
