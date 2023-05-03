import React, { FC } from 'react'
import { View as PdfView } from '@react-pdf/renderer'
import compose from '../styles/compose'

interface Props {
  className?: string
  pdfMode?: boolean
  style?: any
  children?: any
}

const View: FC<Props> = ({ className, pdfMode, children, style: customStyle = {} }) => {
  return (
    <>
      {pdfMode ? (
        <PdfView style={compose('view ' + (className ? className : ''))}>{children}</PdfView>
      ) : (
        <div className={'view ' + (className ? className : '')} style={customStyle}>{children}</div>
      )}
    </>
  )
}

export default View
