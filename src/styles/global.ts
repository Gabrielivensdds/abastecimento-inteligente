import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'body, input, textarea, button, select': {
    fontFamily: 'Inter, sans-serif',
  },
  body: {
    backgroundColor: 'white',
  },
})
