export const styles = {
  common: {
    stroke: {
      color: '#000000',
      width: 0.2,
    },
    shadowBlur: {
      width: 5
    }
  },
  bySize: {
    large: {
      width: 100,
      height: 100,
    },
    small: {
      width: 80,
      height: 80,
    }
  },
  byColor: {
    cyan: {
      color: '#AED6F1'
    },
    green: {
      color: '#58D68D'
    },
    grey: {
      color: '#AAAAAA'
    },
    red : {
      color: '#E74C3C',
    },
    yellow: {
      color: '#F4D03F'
    }
  },
  byType: {
    door: {
      color: '#707B7C',
      byPosition: {
        bottom: {
          height: 5,
          width: 20,
          position: {
            x: 40,
            y: 95
          }
        },
        left: {
          height: 20,
          width: 5,
          position: {
            x: 0,
            y: 40
          }
        },
        right: {
          height: 20,
          width: 5,
          position: {
            x: 95,
            y: 40
          }
        },
        top: {
          height: 5,
          width: 20,
          position: {
            x: 40,
            y: 0
          }
        },
      }
    },
  }
}