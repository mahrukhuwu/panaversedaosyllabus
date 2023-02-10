"use client";
import {
  ChakraProvider,
  Box,
  Image,
  Text,
  Flex,
  Button,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import "./styles.css";
import Link from "next/link";

function PageHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Flex
        position={"relative"}
        textAlign={"center"}
        h={["100%"]}
        w={"100%"}
        maxH="100px"
        display="flex"
        justifyContent="center"
        justifyItems={"center"}
        shadow="dark-lg"
        bgGradient="linear(to-r, buttonface , red.100)"
      >
        <Box pt={"2"}>
          <Image alt="an image" boxSize={["50", "50", "70"]} src="/logo.png" />
        </Box>
        <Box flex={"1"}>
          <Text
            pt={["3", "5", "5"]}
            textAlign={["center", "center", "center"]}
            fontSize={["sm", "lg", "3xl"]}
            fontWeight="semibold"
            fontFamily="sans-serif"
            color={"gray.600"}
          >
            Panaverse DAO by PIAIC
          </Text>
        </Box>
        <div>
          <Box
            boxSize={["sm", "sm", "sm"]}
            maxW={["12", "16", "20"]}
            maxH="50px"
            px={["1", "", "2"]}
            py={["2", "1", "2"]}
          >
            <Image
            alt="an image"
              boxShadow="base"
              borderRadius="full"
              onClick={onOpen}
              py="2"
              px="2"
              w={["40px", "50px", "60px"]}
              h={["40px", "50px", "60px"]}
              src="/infoo.png"
            />
          </Box>
        </div>

        <Modal size={["xs", "sm", "md"]} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgGradient={["linear(to-tr, red.300, red.100)"]}>
            <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold">
              About Us
            </ModalHeader>
            <ModalBody fontSize={["xs", "sm", "md"]}>
              Panaverse DAO is a movement to spread Web 3.0, Metaverse,
              Artificial Intelligence (AI), Cloud, Edge, and Ambient
              Computing/IoT Technologies globally. It is a community of
              developers, designers, trainers, startup founders and service
              providers.
              <br /> It is a Nationwide Program in Karachi, Lahore, Islamabad,
              Peshawar and soon will be in your city
              <br />
              <br />
              <Link
                href="https://www.piaic.org/"
                style={{ textDecoration: "underline" }}
              >
                Admission Website
              </Link>
              <br />
              <Link
                href="https://www.facebook.com/groups/panaverse"
                style={{ textDecoration: "underline" }}
              >
                Panaverse on Facebook
              </Link>
              <br />
              <Link
                href="https://www.youtube.com/@panaverse/streams "
                style={{ textDecoration: "underline" }}
              >
                YouTube Live Channel
              </Link>
              <br />
              <Link
                href="https://github.com/panaverse"
                style={{ textDecoration: "underline" }}
              >
                Github Repos
              </Link>
              <br />
              <Link
                href="https://twitter.com/Panaverse_edu "
                style={{ textDecoration: "underline" }}
              >
                Twitter
              </Link>
              <br />
              <Box display="flex" justifyContent="center">
                <Image alt="an image" boxSize={["40px", "50px", "100px"]} src="/logo.png" />
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button
                size={["sm", "md", "lg"]}
                colorScheme="red"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
}

export default PageHeader;
