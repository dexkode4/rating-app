import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../dummyData";

export const ProductList = () => {
  return (
    <Box bg="#FAFAFA" h="100vh" w="100vw" p="10">
      <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)", "repeat(4, 1fr)","repeat(5, 1fr)"]} flexWrap="wrap" gap={6}>
        {
          products.map((product, index) => (
            {
              ...product,
              img: `https://picsm.photos/200/300?random=${index+1}`
            }
          )).map((product) => (
            <ProductCard key={product.img} data={product} />
          ))
        }
       
      </Grid>
    </Box>
  );
};
