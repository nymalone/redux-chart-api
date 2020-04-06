export const data = {
  datasets: [
    {
      borderWidth: 0,
      backgroundColor: ["#2C82BE", "#32B88B", "#ABE1FA"],
    },
  ],
};

export const options = {
  legend: {
    textDirection: "ltr",
    display: true,
    rtl: false,
    position: "top",
    align: "end",
    offset: true,
    labels: {
      usePointStyle: true,
      boxWidth: 8,
      padding: 8,
    },
  },
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 0,
      bottom: 40,
    },
  },
  tooltips: {
    backgroundColor: "rgba(72,84,101,0.9)",
    titleFontColor: "rgba(155,155,155,1)",
    bodyFontColor: "rgba(239,244,253, 1)",
    bodyFontStyle: "bold",
    borderWidth: 0,
    xPadding: 12,
    yPadding: 12,
    caretSize: 8,
  },
};
