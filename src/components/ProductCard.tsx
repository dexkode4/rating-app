import React from "react";
import ReactStars from "react-rating-stars-component";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { IProduct } from "../types/interface";

interface ProductCardProps {
  data: IProduct
}
export const ProductCard = ({ data }: ProductCardProps) => {
  const ratingChanged = (newRating: number) => {
    console.log("newRating", newRating);
  };

  const averageReview = data.reviews.reduce((acc, curr) => acc + curr.rating,0 ) / data.reviews.length;
  
  return (
    <Box
      borderWidth={2}
      borderColor="transparent"
      cursor="pointer"
      bg="white"
      minH="200px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{
        borderColor: "gray.200",
      }}
    >
      <Box h="200px" overflow="hidden">
        <Image w="100%" src={data.img} alt="product"/>
      </Box>
      <Box p="2">
        <Text>{data.title}</Text>
      </Box>
    </Box>
  );
};
