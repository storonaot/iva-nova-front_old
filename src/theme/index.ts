type Colors =
  | 'accent'
  | 'text'
  | 'lightGray'
  | 'accent2'
  | 'lines'
  | 'label'
  | 'gray'
  | 'grayDark'
  | 'light'
type ColorsMap = { [key in Colors]: string }

type Fonts = 'primary' | 'secondary'
type FontsMap = { [key in Fonts]: string }

type BorderRadius = 'xSmall' | 'small' | 'regular' | 'big'
type BorderRadiusMap = { [key in BorderRadius]: string }

type CustomSizes =
  | 'headerHeight'
  | 'conteinerMaxWidth'
  | 'buttonHeight'
  | 'heroCardTopOffset'
  | 'heroTopOffset'
type CustomSizesMap = { [key in CustomSizes]: string }
interface Spasing {
  units: number
}

export interface Theme {
  colors: ColorsMap
  spacing: Spasing
  customSizes: CustomSizesMap
  fonts: FontsMap
  borderRadius: BorderRadiusMap
}

interface ThemeRoot {
  theme: Theme
}

const themeSettings: Theme = {
  colors: {
    accent: '#C44A16',
    text: '#404040',
    light: '#F7F7F7',
    lightGray: '#E1E1E1',
    accent2: '#E88852',
    lines: '#E3E3E3',
    label: '#9C6D6D',
    gray: '#C3C3C3',
    grayDark: '#565656',
  },
  spacing: {
    units: 8,
  },
  customSizes: {
    headerHeight: '64px',
    conteinerMaxWidth: '1184px',
    buttonHeight: '40px',
    heroCardTopOffset: '56px',
    heroTopOffset: '-32px',
  },
  borderRadius: {
    xSmall: '4px',
    small: '8px',
    regular: '12px',
    big: '20px',
  },
  fonts: {
    primary: 'ProximaNova',
    secondary: 'Podkova',
  },
}

export const selectBorderRadius = (type: BorderRadius) => ({
  theme: { borderRadius },
}: ThemeRoot) => borderRadius[type]

export const selectSpacingUnits = (div?: number) => ({ theme: { spacing } }: ThemeRoot) =>
  div ? `${spacing.units * div}px` : `${spacing.units}px`

export const selectColor = (color: Colors) => ({ theme: { colors } }: ThemeRoot) => colors[color]

export const selectFont = (font: Fonts) => ({ theme: { fonts } }: ThemeRoot) => fonts[font]

export const selectCustomSize = (customSize: CustomSizes) => ({
  theme: { customSizes },
}: ThemeRoot) => customSizes[customSize]

export default themeSettings
// {
//   huge: '1440px',
//   large: '1170px',
//   medium: '768px',
//   small: '450px',
// }

// const Box = styled.div`
//   background: black;

//   ${media.lessThan('medium')`
//     /* screen width is less than 768px (medium) */
//     background: red;
//   `}

//   ${media.between('medium', 'large')`
//     /* screen width is between 768px (medium) and 1170px (large) */
//     background: green;
//   `}

//   ${media.greaterThan('large')`
//     /* screen width is greater than 1170px (large) */
//     background: blue;
//   `}
// `;
