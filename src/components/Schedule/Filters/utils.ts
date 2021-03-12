const GROUP_BIRTH_YEAR = 2003

export const getYears = (order: 'asc' | 'desc' = 'asc') => {
  const years = []

  const startYear = GROUP_BIRTH_YEAR
  const endYear = new Date().getFullYear()

  let counter = startYear

  for (let i = startYear; i <= endYear; i++) {
    years.push(counter)

    counter += 1
  }

  return order === 'asc' ? years : years.sort((a, b) => (a < b ? 1 : -1))
}
