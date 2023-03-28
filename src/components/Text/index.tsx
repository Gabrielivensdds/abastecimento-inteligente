import React from 'react'

interface TextProps {
  text: string
}

export const Text: React.FC<TextProps> = ({ text }) => {
  return <p>{text}</p>
}
