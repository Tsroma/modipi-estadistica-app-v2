export const getVerticalBarChartData = (themes) => ({
  labels: ['Total', 'Vivienda Particular', 'Vivienda Colectiva', 'Transeuntes'],
  datasets: [
    {
      label: 'Chuquisaca',
      backgroundColor: themes.primary,
      borderColor: 'transparent',
      data: [179578, 200450, 200450, 111851],
    },
    {
      label: 'La Paz',
      backgroundColor: themes.danger,
      borderColor: 'transparent',
      data: [340948, 130457, 244350, 279578],
    },
    {
      label: 'Cochabamba',
      backgroundColor: themes.success,
      borderColor: 'transparent',
      data: [279578, 244350, 130457, 340948],
    },
    {
      label: 'Oruro',
      backgroundColor: themes.info,
      borderColor: 'transparent',
      data: [340948, 230457, 265150, 179578],
    },
    {
      label: 'Potosí',
      backgroundColor: themes.secondary,
      borderColor: 'transparent',
      data: [179578, 265150, 230457, 340948],
    },
    {
      label: 'Tarija',
      backgroundColor: themes.warning,
      borderColor: 'transparent',
      data: [240948, 130457, 236450, 279578],
    },
    {
      label: 'Santa Cruz',
      backgroundColor: themes.gray,
      borderColor: 'transparent',
      data: [479578, 236450, 130457, 240948],
    },
    {
      label: 'Beni',
      backgroundColor: themes.dark,
      borderColor: 'transparent',
      data: [240948, 330457, 207415, 280296],
    },
    {
      label: 'Pando',
      backgroundColor: themes.primary,
      borderColor: 'transparent',
      data: [280296, 207415, 330457, 240948],
    },
  ],
})
