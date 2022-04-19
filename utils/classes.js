const classes = {
  main: {
    marginTop: 2,
    minHeight: '80vh',
    // backgroundColor: '#F5F5F5',
  },
  footer: {
    marginTop: 2,
    textAlign: 'center',
    fontFamily: 'Urbanist',
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
    justifyContent: 'space-around',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    fontFamily:'Varela Round',
    textAlign: 'center',
  },
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  productName: {
    fontColor: 'black',
    fontFamily: 'Urbanist',
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
    fontFamily: 'Urbanist',
  },
productList: {
  padding:0
},
productMargin:{
  padding: 0,
  marginLeft: 1,
  justifyContent: 'space-between'
},
cart:{
  justifyContent: 'center',
  textAlign:'center',
  paddingTop: 20,
},
cartButton:{
  paddingTop:3,
  justifyContent: 'center',
  textAlign:'center',
  boxShadow: 'none',
},
cartFont:{
  fontWeight:'bold',
  fontFamily: 'Mitr',
  fontSize:'16px'
},
bag:{
  justifyContent: 'center',
  textAlign:'center',
},
bagEmpty:{
  fontWeight:'bold',
  fontFamily: 'Mitr',
  fontSize:'24px',
},
description:{
  fontFamily: 'Mitr',
  fontWeight: 300,
}
};

export default classes;
