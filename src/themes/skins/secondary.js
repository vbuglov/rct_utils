import { lighten, darken } from 'polished'

const primaryColor = '#A89074'
const bgColor = '#F7F4EE'
const logoColor = '#a3bbbd'
const fontColor = primaryColor
const primaryMate = 'orange'

const secondary = {
  name: 'secondary',
  logoText: logoColor,
  font: fontColor,
  bodyBg: bgColor,
  cover: primaryColor,
  shadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  coverIndex: primaryMate,
  button: {
    primary: primaryColor,
    bg: lighten(0.4, primaryColor),
    hover: lighten(0.1, primaryColor),
    active: darken(0.01, primaryColor),
    clicked: primaryColor,
  },
  sidebar: {
    bg: 'white'
  },
  header: {
    bg: 'white'
  },
  footer: {
    bg: 'transparent'
  },
  logoColor: 'gray',
  logoTextColor: 'blue',
}

export default secondary
