import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      yellow100: '#D3AB3C',
      yellow600: '#C39D43',
      blue50: '#5CC8FF',
      blue100: '#21425F',
      blue500: '#122137',
      gray100: '#9D9D9D',
      gray300: '#9F9999',
      gray400: '#797777',
      gray500: '#2B2B2B',
      white: '#FFFFFF',
    },
  },
})
