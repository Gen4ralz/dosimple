const classes = {
  main: {
    marginTop: 2,
    minHeight: '80vh',
    // backgroundColor: '#F5F5F5',
  },
  footer: {
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Open Sans',
    marginBottom: 1,
    // backgroundColor: '#F5F5F5',
  },
  appbar: {
    backgroundColor: '#000000',
    '& a': {
      color: '#ffffff',
      marginLeft: 1,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    fontFamily:'Varela Round',
  },
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  productName: {
    fontColor: 'black',
    fontFamily: 'Open Sans',
    fontSize: '1rem',
  },
  smallText: {
    fontSize: '15px',
  },
  grow: {
    flexGrow: 1,
  },
  form: {
    margin: '0 auto',
  },
  navbarButton: {
    color: '#FFD15C',
    textTransform: 'initial',
  },
  box: {
    boxshadow: 'none',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullwidth: {
    width: '100%',
  },
  price: {
    fontWeight:'bold',
    fontFamily: 'Open Sans',
  },
  outStock:{
    opacity: 0.25,
  },
  inStock:{
    opacity: 1,
  }
};

export default classes;
