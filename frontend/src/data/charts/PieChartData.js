export const getPieChartData = (themes) => ({
  labels: ['Vivienda Particular', 'Vivienda Colectiva', 'Transeuntes'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [themes.primary, themes.warning, themes.danger],
    data: [2478, 5267, 734],
  }],
  }
)
