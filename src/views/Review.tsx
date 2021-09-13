import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Rating } from "../components/Rating";

const dummyData = {
  title: "The Minimalist Entrepreneur",
  id: "1",
  reviews: [
    {
      description: "good product",
      rating: 4.5,
    },
    {
      description: "awesome",
      rating: 5,
    },
  ],
};

export const Review = () => {
  const [state, setState] = useState(dummyData);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const averageReview =
    state.reviews.reduce((acc, curr) => acc + curr.rating, 0) /
    state.reviews.length;

  return (
    <>
      <Flex
        bg="#FAFAFA"
        h="100vh"
        w="100vw"
        p={["0", "5", "10"]}
        justifyContent="center"
      >
        <Box px="24" py="16" bg="white" w={["100%", "100%", "70%"]} shadow="md">
          <Heading>{state.title}</Heading>
          <Spacer h={10} />
          <Flex
            w="100%"
            borderBottomWidth="1px"
            paddingBottom="7"
            borderColor="#B9B9B9"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Text mr="2" fontWeight="medium" fontSize="2xl">
                {averageReview}
              </Text>
              <chakra.span mb="1">
                <Rating
                  size={14}
                  scale={5}
                  fillColor="gold"
                  strokeColor="grey"
                  value={averageReview}
                  disableEdit
                />
              </chakra.span>
            </Flex>
            <Button
              fontSize="sm"
              shadow="md"
              variant="ghost"
              borderWidth="1px"
              borderColor="#B9B9B9"
              onClick={onOpen}
            >
              Add Review
            </Button>
          </Flex>
          <Box mt="7">
            <Heading size="md">Reviews</Heading>
            <Stack mt="5">
              {state.reviews.map((review) => (
                <Flex alignItems="center">
                  <chakra.span mr="3">
                    <Rating
                      size={11}
                      scale={5}
                      fillColor="gold"
                      strokeColor="grey"
                      value={review.rating}
                      disableEdit
                    />
                  </chakra.span>
                  <Text mr="1" fontWeight="semibold">
                    {review.rating},
                  </Text>
                  <Text>{review.description}</Text>
                </Flex>
              ))}
            </Stack>
          </Box>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent px="2" pb="5">
          <ModalHeader>What is your rating</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="4">
              <Text>Rating</Text>

              <ReactStars name="rating" />

              <Input
                fontSize="sm"
                variant="unstyled"
                placeholder="Start typing..."
                _placeholder={{
                  color: "#929292",
                }}
              />

              <Button
                fontSize="sm"
                shadow="md"
                variant="ghost"
                borderWidth="1px"
                borderColor="#B9B9B9"
                w="max-content"
              >
                Submit Review
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
