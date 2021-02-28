const GROUP_BIRTH_YEAR = 2003

export const getYears = () => {
  const years = []

  const startYear = GROUP_BIRTH_YEAR
  const endYear = new Date().getFullYear()

  let counter = startYear

  for (let i = startYear; i <= endYear; i++) {
    years.push(counter)

    counter += 1
  }

  return years
}
