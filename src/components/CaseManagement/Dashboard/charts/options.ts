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
      borderRadius: 6,
      columnWidth: '45%',
    },
  },
  dataLabels: { enabled: false },
  stroke: {
    width: 1,
    colors: ['transparent']
  },
  grid: {
    show: true,
    borderColor: 'rgba(57, 204, 204, 0.1)',
    strokeDashArray: 3,
    position: 'back',
  },
  colors: ['#39CCCC', '#00FF7F', '#FF4D4D'],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels: {
      style: {
        colors: Array(9).fill('rgba(255, 255, 255, 0.6)'),
        fontFamily: 'Inter, sans-serif',
      }
    },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      style: {
        colors: 'rgba(255, 255, 255, 0.6)',
        fontFamily: 'Inter, sans-serif',
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
      colors: 'rgba(255, 255, 255, 0.8)'
    }
  },
  fill: {
    opacity: 1,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: "vertical",
      gradientToColors: ['#39CCCC80', '#00FF7F80', '#FF4D4D80'],
      stops: [0, 90, 100]
    }
  }
};