const styles = {
  shimmer: {
    background: '#f2f2f2',
    display: 'inline-block',
    backgroundImage: 'linear-gradient(to right,#eeeeee 40%,#dddddd 50%,#eeeeee 60%)',
    backgroundSize: '800px 104px',
    backgroundRepeat: 'no-repeat',
    animation: 'shimmerAnim 2s infinite linear',
  },
  '@keyframes shimmerAnim': {
    '0%': {
      backgroundPosition: '-468px 0',
    },
    '100%': {
      backgroundPosition: '468px 0',
    },
  },
};

export default styles;
