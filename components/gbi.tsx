"use client";
import {
  ChakraProvider,
  Box,
  Text,
  Container,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Image,
  Center,
} from "@chakra-ui/react";
import React from "react";

const GBI = () => {
  return (
    <ChakraProvider>
      <Box
        position={"absolute"}
        backgroundImage={`url(/gbi1.jpg)`}
        h={"1000px"}
        w="100%"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundSize={["cover"]}
      >
        <Box mt="50px" backgroundColor="rgba(255, 0, 0, 0.3)">
          <Box>
            <Center>
              <Image
                mt="5"
                w={["100px", "200px", "200px"]}
                h={["100px", "200px", "200px"]}
                src="/gbi2.png"
                alt="In The Metaverse"
              />
            </Center>
            <Container textAlign="center">
              <Text
                color="black"
                fontSize={["2xl", "lg", "5xl"]}
                fontWeight="semibold"
                style={{
                  animation: "fade-in 1s linear",
                  animationFillMode: "forwards",
                }}
              >
                Genomics and Bioinformatics
              </Text>
              <Text
                fontWeight={"semibold"}
                fontSize={["xs", "md", "lg"]}
                color="white"
                backgroundColor="rgba(255, 0, 0, 0.3)"
              >
                After first three Quarters this Specialization leads you to 4th
                and 5th Quarters
              </Text>
              <Text
                mt="33px"
                color="black"
                bgColor={"ButtonFace"}
                fontSize={["sm", "lg", "4xl"]}
                fontWeight="semibold"
                style={{
                  animation: "fade-in 1s linear",
                  animationFillMode: "forwards",
                }}
              >
                Quarter IV
              </Text>
              <Text
                fontWeight={"semibold"}
                fontSize={["xs", "sm", "3xl"]}
                color="black"
              >
                Bio-351: Python for Biologists
              </Text>
            </Container>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            alignItems="center"
          >
            <Accordion
              w={["80%", "80%", "60%"]}
              justifyContent="center"
              mt="20px"
              allowToggle
            >
              <AccordionItem>
                <AccordionButton>
                  <Box
                    fontSize={["md", "lg", "2xl"]}
                    fontFamily="mono"
                    color="white"
                    as="span"
                    flex="1"
                    textAlign="center"
                    fontWeight={"extrabold"}
                  >
                    Course Description
                  </Box>
                  <AccordionIcon color="white" />
                </AccordionButton>
                <AccordionPanel
                  fontSize={["sm", "md", "md"]}
                  fontWeight="bold"
                  pb={4}
                  color="black"
                  bgColor={"ButtonFace"}
                >
                  This course will focus on learning the basics of the Python
                  programming language through genomics examples. Textbook:
                  https://www.pythonforbiologists.org
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Container textAlign="center">
            <Text
              mt="33px"
              bgColor={"ButtonFace"}
              color="black"
              fontSize={["sm", "lg", "4xl"]}
              fontWeight="semibold"
              style={{
                animation: "fade-in 1s linear",
                animationFillMode: "forwards",
              }}
            >
              Quarter V
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={["xs", "sm", "3xl"]}
              color="black"
            >
              Bio-361: Bioinformatics with Python
            </Text>
          </Container>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            alignItems="center"
          >
            <Accordion
              w={["80%", "80%", "60%"]}
              justifyContent="center"
              mt="20px"
              allowToggle
            >
              <AccordionItem>
                <AccordionButton>
                  <Box
                    fontSize={["md", "lg", "2xl"]}
                    fontFamily="mono"
                    color="white"
                    as="span"
                    flex="1"
                    fontWeight={"extrabold"}
                    textAlign="center"
                  >
                    Course Description
                  </Box>
                  <AccordionIcon color="white" />
                </AccordionButton>
                <AccordionPanel
                  fontSize={["sm", "md", "md"]}
                  fontWeight="bold"
                  pb={4}
                  color="black"
                  bgColor={"ButtonFace"}
                >
                  In this course we will discover modern, next-generation
                  sequencing libraries from the powerful Python ecosystem to
                  perform cutting-edge research and analyze large amounts of
                  biological data. Textbook:
                  https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default GBI;
