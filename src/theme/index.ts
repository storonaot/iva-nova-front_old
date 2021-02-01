import { COLORS } from '../constants/ui'

type Colors =
  | 'primary'
  | 'text'
  | 'lightGray'
  | 'secondary'
  | 'lines'
  | 'label'
  | 'gray'
  | 'grayDark'
  | 'light'
  | 'primaryActive'
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
  | 'heroTopOffsetNegative'
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

const HERO_TOP_OFFSET = 32

export const themeSettings: Theme = {
  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    text: COLORS.text,
    light: COLORS.light,
    lightGray: COLORS.lightGray,
    lines: COLORS.lines,
    label: COLORS.label,
    gray: COLORS.gray,
    grayDark: COLORS.grayDark,
    primaryActive: COLORS.primaryActive,
  },
  spacing: {
    units: 8,
  },
  customSizes: {
    headerHeight: '64px',
    conteinerMaxWidth: '1100px',
    buttonHeight: '40px',
    heroCardTopOffset: '56px',
    heroTopOffsetNegative: `-${HERO_TOP_OFFSET}px`,
    heroTopOffset: `${HERO_TOP_OFFSET}px`,
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

export const selectSpacing = (div?: number) => ({ theme: { spacing } }: ThemeRoot) =>
  div ? `${spacing.units * div}px` : `${spacing.units}px`

export const selectColor = (color: Colors) => ({ theme: { colors } }: ThemeRoot) => colors[color]

export const selectFont = (font: Fonts) => ({ theme: { fonts } }: ThemeRoot) => fonts[font]

export const selectCustomSize = (customSize: CustomSizes) => ({
  theme: { customSizes },
}: ThemeRoot) => customSizes[customSize]

export const X_SMALL_RADIUS = selectBorderRadius('xSmall')
export const SMALL_RADIUS = selectBorderRadius('small')
export const BIG_RADIUS = selectBorderRadius('big')
export const REGULAR_RADIUS = selectBorderRadius('regular')
export const GRAY_COLOR = selectColor('gray')
export const GRAY_DARK_COLOR = selectColor('grayDark')
export const LINES_COLOR = selectColor('lines')
export const LIGHT_COLOR = selectColor('light')
export const PRIMARY_COLOR = selectColor('primary')
export const SECONDARY_COLOR = selectColor('secondary')
export const PRIMARY_ACTIVE_COLOR = selectColor('primaryActive')
export const TEXT_COLOR = selectColor('text')
export const SPACE_1 = selectSpacing()
export const SPACE_2 = selectSpacing(2)
export const SPACE_3 = selectSpacing(3)
export const SPACE_4 = selectSpacing(4)
export const SPACE_5 = selectSpacing(5)
export const SPACE_6 = selectSpacing(6)
export const SPACE_9 = selectSpacing(9)
export const SPACE_10 = selectSpacing(10)
export const SECONDARY_FONT = selectFont('secondary')

export default themeSettings
