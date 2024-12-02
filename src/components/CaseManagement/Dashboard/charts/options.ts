import { ApexOptions } from 'apexcharts';

export const careJourneyChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    stacked: true,
    toolbar: { show: false },
    background: 'transparent',
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 8,
      columnWidth: '55%',
    },
  },
  dataLabels: { enabled: false },
  stroke: {
    width: 0,
    colors: ['transparent']
  },
  grid: {
    show: true,
    borderColor: 'rgba(57, 204, 204, 0.05)',
    strokeDashArray: 5,
    position: 'back',
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  colors: ['rgba(57, 204, 204, 0.8)', 'rgba(0, 255, 127, 0.7)', 'rgba(255, 77, 77, 0.7)'],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels: {
      style: {
        colors: Array(9).fill('rgba(255, 255, 255, 0.5)'),
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px'
      }
    },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      style: {
        colors: 'rgba(255, 255, 255, 0.5)',
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px'
      }
    }
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: (val) => `${val} cases`
    },
    style: {
      fontSize: '12px',
      fontFamily: 'Inter, sans-serif',
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5,
    labels: {
      colors: 'rgba(255, 255, 255, 0.7)'
    }
  },
  fill: {
    opacity: 1,
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.9,
      opacityTo: 0.6,
      stops: [0, 90, 100]
    }
  }
};