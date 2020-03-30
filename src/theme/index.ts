interface Colors {
  [key: string]: string
}

interface Spasing {
  units: number
}

interface CustomSizes {
  headerHeight: string
  conteinerMaxWidth: string
  buttonHeight: string
}

interface Fonts {
  fonts: string[]
}

export interface Theme {
  colors: Colors
  spacing: Spasing
  customSizes: CustomSizes
  fonts: Fonts
  borderRadius: string
}

export default {
  colors: {
    accent: '#C44A16',
    text: '#404040',
    lightGray: '#E1E1E1',
    accent2: '#E88852',
    lines: '#E3E3E3',
    label: '#9C6D6D',
    gray: '#C3C3C3',
  },
  spacing: {
    units: 8,
  },
  customSizes: {
    headerHeight: '64px',
    conteinerMaxWidth: '1184px',
    buttonHeight: '40px',
  },
  borderRadius: '4px',
  fonts: ['ProximaNova', 'Podkova'],
}

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
