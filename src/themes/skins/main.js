import { lighten, darken } from 'polished'

const primaryColor = '#2196F3'
// eslint-disable-next-line no-unused-vars
const bgColor = '#e2e2e2'
const logoColor = 'white'
const fontColor = primaryColor
const primaryMate = '#B84E20'
const secondaryColor = '#262628'

const main = {
  name: 'main',
  logoText: logoColor,
  font: fontColor,
  bodyBg: '#FFFFFF',
  cover: primaryColor,
  shadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  coverIndex: primaryMate,
  sreenWidth: {
    desktop: '1440px',
    tablet: '1024px',
    mobileHD: '630px',
    mobile: '480px'
  },
  primaryColor: {
    color1: '#E6F7FF',
    color2: '#BAE7FF',
    color3: '#91D5FF',
    color4: '#69C0FF',
    color5: '#40A9FF',
    color6: '#1890FF',
    color7: '#096DD9',
    color8: '#0050B3',
    color9: '#003A8C',
    color10: '#002766'
  },
  neitralColors: {
    neutral1: '#FFFFFF',
    neutral2: '#FAFAFA',
    neutral3: '#F5F5F5',
    neutral4: '#F0F0F0',
    neutral5: '#D9D9D9',
    neutral6: '#BFBFBF',
    neutral7: '#8C8C8C',
    neutral8: '#595959',
    neutral9: '#434343',
    neutral10: '#262626',
    neutral11: '#1F1F1F',
    neutral12: '#141414',
    neutral13: '#000000'
  },
  button: {
    primary: primaryColor,
    secondary: secondaryColor,
    bg: 'white',
    hover: lighten(0.1, primaryColor),
    active: darken(0.01, primaryColor),
    clicked: primaryColor,
  },
  sidebar: {
    bg: 'white',
    pinActive: 'black',
    widthBigBar: '240px',
    widthSmallBar: '60px',
    borderColor: primaryColor,
    menuItem: {
      hoverLight: '#F0F5FF',
      hoverDark: '#061178'
    }
  },
  header: {
    bg: primaryColor
  },
  footer: {
    bg: 'transparent'
  },
  logo: {
    color: logoColor,
    textColor: logoColor,
    pathColor: '#e57373'
  },
  modal: {
    bg: 'white',
    border: '#e2e2e2',
    button: '#2196F3',
    headers: {
      color: '#2196F3'
    }
  }
}

export default main
