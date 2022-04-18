import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import classes from '../utils/classes';
import db from '../utils/db';
import Product from '../models/Product';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import { useSnackbar } from 'notistack';
// import { useContext } from 'react';
// import { Store } from '../utils/Store';
import dynamic from 'next/dynamic';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Home(props) {
  // const router = useRouter();
  // const { state, dispatch } = useContext(Store);
  const { products } = props;
  // const { enqueueSnackbar } = useSnackbar();

  // const addToCartHandler = async (product) => {
  //   const existItem = state.cart.cartItems.find((x) => x._id === product._id);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;
  //   const { data } = await axios.get(`/api/products/${product._id}`);
  //   if (data.stock < quantity) {
  //     enqueueSnackbar('Sorry . Product is out of stock', { variant: 'error' });
  //     return;
  //   }
  //   enqueueSnackbar(`${product.name} added to cart`, { variant: 'success' });
  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  //   router.push('/cart');
  // };

  return (
    <Layout>
      <Box>
        <Typography component='h1' variant='h1'>สินค้า</Typography>
        <Grid container spacing={1} sx={classes.productList}>
          {products.map((product) => (
            <Grid item md={4} xs={6} key={product.name}>
              <Card variant="outlined" sx={{borderRadius: 2}}>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <Link>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={product.image}
                        title={product.name}
                      ></CardMedia>
                      <CardContent sx={classes.productMargin}>
                        <Typography sx={classes.productName}>
                          {product.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </NextLink>
                <CardActions sx={classes.productMargin}>
                  <Typography sx={classes.price}>฿ {product.price}</Typography>
                  <IconButton aria-label="add to cart" color='primary'>
          <FavoriteBorderIcon />
        </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
