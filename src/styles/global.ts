import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: '0rem',
    padding: '0rem',
    boxSizing: 'border-box',
  },
  'body, input, textarea, button, select': {
    fontFamily: 'Inter, sans-serif',
  },
  body: {
    backgroundColor: '$white',
  },
})
