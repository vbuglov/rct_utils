import { css } from 'styled-components'

const flexRuleMaker = (rule) => {
  switch (rule) {
    case 'justify-center' || 'jcc':
      return 'justify-content: center'
    default: {
      return ''
    }
  }
}
const flexOpts = (opt1, opt2) => {
  return `${flexRuleMaker(opt1)}${flexRuleMaker(opt2)}`
}

export const mediaBreakPoints = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  laptopM: 1280,
  laptopL: 1440,
  maxContent: 1520,
  desktop: 1600,
  desktopL: 1920,
}

const media = Object.keys(mediaBreakPoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${mediaBreakPoints[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

const zIndex = {
  header: 1998,
  popover: 3000,
  modalOverlay: 2500,
  previewOverlay: 2000,
  preview: 2001,
  doraemonOverlay: 2600,
  modalCloseBtn: 2000,

  sidebar: 1997,
}

const flexColumn = (rule1, rule2 = '') => `
  ${flex(rule1, rule2)};
  flex-direction: column;
`

const flex = (opt1, opt2 = '') => `
  display: flex;
  ${flexOpts(opt1, opt2)}
`;

const circle = (width = '25px') => `
  width: ${width};
  height: ${width};
  border-radius: 100%;
`
export const MAX_CONTENT_WIDTH = '1980px'
export const GLOBAL_MAX_WIDTH = '1980px'

const customStyles = {
  flex,
  circle,
  flexColumn,
  media,
  mediaBreakPoints,
  zIndex,
  MAX_CONTENT_WIDTH,
  GLOBAL_MAX_WIDTH
}

export default customStyles;
