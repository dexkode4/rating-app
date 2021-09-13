import React from "react";
import ReactStars from "react-rating-stars-component";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FiPackage } from "react-icons/fi";
import { IProduct } from "../types/interface";
import { useHistory, useRouteMatch } from "react-router-dom";

interface ProductCardProps {
  data: IProduct;
}
export const ProductCard = ({ data }: ProductCardProps) => {
  const history = useHistory();
  const match = useRouteMatch();
  const ratingChanged = (newRating: number) => {
    console.log("newRating", newRating);
  };

  const averageReview =
    data.reviews.reduce((acc, curr) => acc + curr.rating, 0) /
    data.reviews.length;

  const navigateToReview = (id: string) => {
    history.push(`${match.url}/${id}`);
  };
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
      onClick={() => navigateToReview(data.id)}
    >
      <Box h="200px" overflow="hidden">
        <Image
          w="100%"
          src={data.img}
          alt="product"
          fallback={
            <Flex bg="#F0F0EF" w="100%" h="100%" justifyContent="center" alignItems="center">
              <Icon color="#CACACA" as={FiPackage} h={20} w={20} />
            </Flex>
          }
        />
      </Box>
      <Box p="2">
        <Text>{data.title}</Text>
      </Box>
    </Box>
  );
};
