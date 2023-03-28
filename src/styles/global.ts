import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'body, input, textarea, button, Select': {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '1rem',
  },
  body: {
    backgroundColor: '$white',
  },
})
