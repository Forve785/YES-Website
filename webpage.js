var layout = {
  xaxis: {
    title: {
      text: 'Color',
      font: {
        family: 'Courier New, monospace',
        size: 16,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: '% Reflectance',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  [
    {
      x: ['Blue', 'Cyan', 'Green', 'Yellow', 'Orange', 'Red', 'Deep Red', 'IR1', 'IR2', 'IR3', 'IR4'],
      y: [25.41133455, 32.09076175, 24.62809917, 15.01766784, 13.03571429, 21.4, 32.94346979, 27.86516854, 67.43295019, 101.6032064, 110.952381]
    }
  ],
  layout
);

//document.querySelector("h1").addEventListener("click");