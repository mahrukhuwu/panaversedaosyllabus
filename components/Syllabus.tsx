"use client";
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SyllabusPage = () => {
  return (
    <ChakraProvider>
      <Box
        position={"absolute"}
        backgroundImage={`url(/bgg.jfif)`}
        h={["400px", "400px", "1100"]}
        w="100%"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundSize={["auto", "auto", "cover"]}
      >
        <Box>
          <Container textAlign={"center"}>
            <Text
              mt={["25px", "30px", "80px"]}
              color="#cc112c"
              fontSize={["sm", "lg", "3xl"]}
              fontWeight="semibold"
              style={{
                animation: "fade-in 1s linear",
                animationFillMode: "forwards",
              }}
            >
              Every participant of the program will start by completing the
              following three core courses
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={["xs", "sm", "md"]}
              color={"black"}
            >
              Core Courses (Common in All Specializations)
            </Text>
          </Container>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Grid
            m="auto"
            px="2"
            templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
            gap={4}
          >
            <GridItem
              w={["100%", "100%", "240px"]}
              className="grid-item"
              borderRadius={"base"}
              bgColor="red.50"
              px="2"
              py="2"
              h={["130px", "133px", "133px"]}
              mt={["30px", "30px", "20px"]}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text
                  className="shake"
                  fontWeight={"700"}
                  fontFamily="revert"
                  as="span"
                  variant="outline"
                  aria-label="FiChevronsRight Icon"
                  textAlign="center"
                  px="2"
                  py="2"
                  fontSize={["xs", "sm", "md"]}
                  bgClip="border-box"
                  w={["90px", "100px", "255px"]}
                >
                  Quater 1
                </Text>
                <Text
                  textAlign={"center"}
                  px="5"
                  py="2"
                  color="#cc112c"
                  fontSize={["xs", "sm", "md"]}
                  fontWeight="500"
                >
                  CS-101
                </Text>
                <Link href="/Q1">
                  <Text as="u" fontSize={"sm"}>
                    Click to Learn more
                  </Text>
                </Link>
              </Box>
            </GridItem>
            <GridItem
              w={["100%", "100%", "240px"]}
              h={["130px", "133px", "133px"]}
              className="grid-item"
              borderRadius={"base"}
              bgColor="red.50"
              py="5"
              px="2"
              mt={["30px", "30px", "20px"]}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text
                  className="shake"
                  fontWeight={"700"}
                  fontFamily="revert"
                  as="span"
                  variant="outline"
                  aria-label="FiChevronsRight Icon"
                  textAlign="center"
                  px="2"
                  fontSize={["xs", "sm", "md"]}
                  bgClip="border-box"
                  w={["130px", "100px", "255px"]}
                >
                  Quater 2
                </Text>
                <Text
                  textAlign={"center"}
                  px="2"
                  py="2"
                  color="#cc112c"
                  fontSize={["xs", "xs", "md"]}
                  fontWeight="500"
                >
                  W2-201
                  </Text>
                <Link href="/Q2">
                  <Text as="u" fontSize={["xs", "xs", "sm"]}>
                    Click to Learn more
                  </Text>
                </Link>
              
              </Box>
            </GridItem>
            <GridItem
              w={["100%", "100%", "240px"]}
              h={["130px", "133px", "133px"]}
              className="grid-item"
              borderRadius={"base"}
              bgColor="red.50"
              py="5"
              px="2"
              mt={["30px", "30px", "20px"]}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text
                  className="shake"
                  fontWeight={"700"}
                  fontFamily="revert"
                  as="span"
                  variant="outline"
                  aria-label="FiChevronsRight Icon"
                  textAlign="center"
                  px="2"
                  fontSize={["xs", "sm", "md"]}
                  bgClip="border-box"
                  w={["90px", "100px", "255px"]}
                >
                  Quater 3
                </Text>
                <Text
                  textAlign={"center"}
                  px="2"
                  py="2"
                  color="#cc112c"
                  fontSize={["xs", "xs", "md"]}
                  fontWeight="500"
                >
                  $-101
                </Text>
                <Link href="/Q3">
                  <Text as="u" fontSize={["sm", "xs", "sm"]}>
                    Click to Learn more
                  </Text>
                </Link>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <Container textAlign={"center"}>
            <Text
              mt={["25px", "30px", "50px"]}
              color="#cc112c"
              fontSize={["sm", "lg", "3xl"]}
              fontWeight="semibold"
              style={{
                animation: "fade-in 1s linear",
                animationFillMode: "forwards",
              }}
            >
              Specialized Tracks
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={["xs", "sm", "md"]}
              color={"black"}
            >
              After completing the first three quarters the participants will
              select one or more specializations consisting of 2 Quater courses
              each
            </Text>
          </Container>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Grid
            m="auto"
            px="2"
            templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
            gap={4}
          >
            <GridItem
              w={["100%", "100%", "240px"]}
              h={["120px", "180px", "150px"]}
              className="grid-item"
              borderRadius={"base"}
              bgColor="red.50"
              py="5"
              px="2"
              mt={["30px", "30px", "20px"]}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text
                  className="shake"
                  fontWeight={"700"}
                  fontFamily="revert"
                  as="span"
                  variant="outline"
                  aria-label="FiChevronsRight Icon"
                  textAlign="center"
                  px="2"
                  fontSize={["xs", "sm", "md"]}
                  bgClip="border-box"
                  w={["130px", "100px", "255px"]}
                >
                  Specialization In
                </Text>
                <Text
                  textAlign={"center"}
                  px="2"
                  py="2"
                  color="#cc112c"
                  fontSize={["xs", "xs", "md"]}
                  fontWeight="500"
                >
                  Web 3.0 (Blockchain) and Metaverse
                </Text>
                <Link href="/WM">
                  <Text as="u" fontSize={["xs", "xs", "sm"]}>
                    Click to Learn more
                  </Text>
                </Link>
              </Box>
            </GridItem>
            <GridItem
              w={["100%", "100%", "240px"]}
              h={["120px", "180px", "150px"]}
              className="grid-item"
              borderRadius={"base"}
              bgColor="red.50"
              py="2"
              px="2"
              mt={["30px", "30px", "20px"]}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text
                  className="shake"
                  fontWeight={"700"}
                  fontFamily="revert"
                  as="span"
                  variant="outline"
                  aria-label="FiChevronsRight Icon"
                  textAlign="center"
                  px="2"
                  fontSize={["xs", "sm", "md"]}
                  bgClip="border-box"
                  w={["130px", "100px", "255px"]}
                >
                  Specialization In
                </Text>
                <Text
                  textAlign={"center"}
                  px="2"
                  py="2"
                  color="#cc112c"
                  fontSize={["xs", "xs", "md"]}
                  fontWeight="500"
                >
                  Artificial Intelligence (AI) and Deep Learning
                </Text>
                <Link href="/AI">
                  <Text as="u" fontSize={["xs", "xs", "sm"]}>
                    Click to Learn more
                  </Text>
                </Link>
              </Box>
            </GridItem>
            <GridItem
              w={["100%", "100%", "240px"]}
              h={["120px", "180px", "150px"]}
              className="grid-item"
              borderRadius={"base"}
              bgColor="red.50"
              py="2"
              px="2"
              mt={["30px", "30px", "20px"]}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text
                  className="shake"
                  fontWeight={"700"}
                  fontFamily="revert"
                  as="span"
                  variant="outline"
                  aria-label="FiChevronsRight Icon"
                  textAlign="center"
                  px="2"
                  fontSize={["xs", "sm", "md"]}
                  bgClip="border-box"
                  w={["130px", "100px", "255px"]}
                >
                  Specialization In
                </Text>
                <Text
                  textAlign={"center"}
                  px="2"
                  py="2"
                  color="#cc112c"
                  fontSize={["xs", "xs", "md"]}
                  fontWeight="500"
                >
                  Cloud-Native Computing
                </Text>
                <Link href="/CN">
                  <Text as="u" fontSize={["xs", "xs", "sm"]}>
                    Click to Learn more
                  </Text>
                </Link>
              </Box>
            </GridItem>
            <GridItem
              w={["100%", "100%", "240px"]}
              h={["120px", "180px", "150px"]}
              className="grid-item"
              borderRadius={"base"}
              bgColor="red.50"
              py="2"
              px="2"
              mt={["30px", "30px", "20px"]}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text
                  className="shake"
                  fontWeight={"700"}
                  fontFamily="revert"
                  as="span"
                  variant="outline"
                  aria-label="FiChevronsRight Icon"
                  textAlign="center"
                  px="2"
                  fontSize={["xs", "sm", "md"]}
                  bgClip="border-box"
                  w={["130px", "100px", "255px"]}
                >
                  Specialization In
                </Text>
                <Text
                  textAlign={"center"}
                  px="2"
                  py="2"
                  color="#cc112c"
                  fontSize={["xs", "xs", "md"]}
                  fontWeight="500"
                >
                  Ambient Computing and IoT
                </Text>
                <Link href="/IOT">
                  <Text as="u" fontSize={["xs", "xs", "sm"]}>
                    Click to Learn more
                  </Text>
                </Link>
              </Box>
            </GridItem>
            <GridItem
              w={["100%", "100%", "240px"]}
              h={["120px", "180px", "150px"]}
              className="grid-item"
              borderRadius={"base"}
              bgColor="red.50"
              py="2"
              px="2"
              mt={["30px", "30px", "20px"]}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text
                  className="shake"
                  fontWeight={"700"}
                  fontFamily="revert"
                  as="span"
                  variant="outline"
                  aria-label="FiChevronsRight Icon"
                  textAlign="center"
                  px="2"
                  fontSize={["xs", "sm", "md"]}
                  bgClip="border-box"
                  w={["130px", "100px", "255px"]}
                >
                  Specialization In
                </Text>
                <Text
                  textAlign={"center"}
                  px="2"
                  py="2"
                  color="#cc112c"
                  fontSize={["xs", "xs", "md"]}
                  fontWeight="500"
                >
                  Genomics and Bioinformatics
                </Text>
                <Link href="/GBI">
                  <Text as="u" fontSize={["xs", "xs", "sm"]}>
                    Click to Learn more
                  </Text>
                </Link>
              </Box>
            </GridItem>
            <GridItem
              w={["100%", "100%", "240px"]}
              h={["120px", "180px", "150px"]}
              className="grid-item"
              borderRadius={"base"}
              bgColor="red.50"
              py="2"
              px="2"
              mt={["30px", "30px", "20px"]}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text
                  className="shake"
                  fontWeight={"700"}
                  fontFamily="revert"
                  as="span"
                  variant="outline"
                  aria-label="FiChevronsRight Icon"
                  textAlign="center"
                  px="2"
                  fontSize={["xs", "sm", "md"]}
                  bgClip="border-box"
                  w={["130px", "100px", "255px"]}
                >
                  Specialization In
                </Text>
                <Text
                  textAlign={"center"}
                  px="2"
                  py="2"
                  color="#cc112c"
                  fontSize={["xs", "xs", "md"]}
                  fontWeight="500"
                >
                  Network Programmability and Automation
                </Text>
                <Link href="/NA">
                  <Text as="u" fontSize={["xs", "xs", "sm"]}>
                    Click to Learn more
                  </Text>
                </Link>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default SyllabusPage;
