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
      'text-color': '#f5f3f4',
      'background-color': '#000814',
      'card-color': '#001d3d75',
      'gray-100': '#f5f3f4',
      'blue-700': '#001d3d',
      'blue-400': '#003566',
      'yellow-500': '#ffc300',

      'switch-text': '#f5f3f4',
      'switch-background': '#003566',
      'switch-thumb': '#f5f3f4',
    },
  },
})

export const lightTheme = createTheme('light-theme', {
  colors: {
    'text-color': '#f5f3f4',
    'background-color': '#D8D8D8',
    'card-color': '#001d3d75',
    'gray-100': '#f5f3f4',
    'blue-700': '#001d3d',
    'blue-400': '#003566',
    'yellow-500': '#ffc300',

    'switch-text': '#000814',
    'switch-background': '#003566',
    'switch-thumb': '#f5f3f4',
  },
})
