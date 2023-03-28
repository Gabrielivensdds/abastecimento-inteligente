import React from 'react'

interface SubTitleProps {
  text: string
}

export const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return <h4>{text}</h4>
}
