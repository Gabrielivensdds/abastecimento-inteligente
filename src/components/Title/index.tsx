import React from 'react'

interface TitleProps {
  text: string
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1>{text}</h1>
}
