"use client";
import {
  ChakraProvider,
  Box,
  Text,
  ListItem,
  OrderedList,
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

const IOT = () => {
  return (
    <ChakraProvider>
      <Box
        position={"absolute"}
        backgroundImage={`url(/iot1.jpg)`}
        h={"cover"}
        w="100%"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundSize={["cover"]}
      >
        <Box backgroundColor="rgba(128, 128, 128, 0.3)">
          <Box>
            <Center>
              {" "}
              <Image
                w={["150px", "250px", "500px"]}
                h={["100px", "200px", "200px"]}
                src="/iot2.png"
                alt="In The Metaverse"
              />
            </Center>
            <Container textAlign="center">
              <Text
                color="black"
                fontSize={["2xl", "lg", "3xl"]}
                fontWeight="semibold"
                style={{
                  animation: "fade-in 1s linear",
                  animationFillMode: "forwards",
                }}
              >
                Ambient Computing and IoT
              </Text>
              <Text
                fontWeight={"semibold"}
                fontSize={["xs", "sm", "md"]}
                color="black"
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
                fontSize={["xs", "sm", "2xl"]}
                color="black"
              >
                AC-351: Ambient Computing with Voice Assistants and Matter
                Devices
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
                    color="black"
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
                  Ambient computing, also commonly referred to as ubiquitous
                  computing, is the concept of blending computing power into our
                  everyday lives in a way that is embedded into our surroundings
                  - invisible but useful. In a multi-device world, people do not
                  want to spend their life fussing with technology. An ambient
                  approach gets the tech out of your way so you can live your
                  life while getting the help you need. It does not matter what
                  device you are using, what context you are in, whether you are
                  talking, typing, or tapping. The technology in your life works
                  together seamlessly. Ambient computing uses all aspects of
                  modern-day technology, including voice assistants, artificial
                  intelligence, sensors, connectivity, cloud computing and more.
                  If you were thinking that the IoT and ambient computing sound
                  a lot alike, you are not wrong; the two concepts are
                  intertwined. IoT refers to the vast array of devices that
                  connect to the internet to optimize their functionality, like
                  smart sensors and smart speakers: ambient computing builds on
                  that. Ambient computing focuses on the interaction between
                  these devices once they are connected. Matter, the
                  next-generation smart home standard, solves many smart home
                  pain points while bringing all our IoT devices together. Some
                  of the biggest tech companies are working together to make
                  Matter a unified protocol for future smart homes. These
                  companies include Apple, Amazon, and Google. This means Apple
                  HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and
                  Samsung SmartThings will support the Matter standard by
                  default for all new devices. In this course we will learn to
                  build smart homes with Amazon Alexa and Matter protocol.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    fontSize={["md", "lg", "2xl"]}
                    fontFamily="mono"
                    color="black"
                    as="span"
                    flex="1"
                    textAlign="center"
                    fontWeight={"extrabold"}
                  >
                    Course Outline
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
                  <OrderedList>
                    <ListItem>Alexa Skill Developement</ListItem>
                    <ListItem>Alexa with Matter Protocol </ListItem>
                  </OrderedList>
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
              fontSize={["xs", "sm", "2xl"]}
              color="black"
            >
              AC-361: Embedded Programming using C and Rust
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
                    color="black"
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
                  <Text>
                   This is an introductory course about using the C and Rust
                  Programming Languages on Bare Metal embedded systems, such
                  as Microcontrollers. We will start by introducing embedded
                  systems and move on to learn the C++ and Rust programming
                  languages. We will learn about basic programming concepts using
                  C and Rust, then we will explore key concepts in electronics,
                  microcontrollers, and embedded programming. It is a
                  fast-paced, thorough introduction to programming with C and
                  Rust that will have you writing programs, solving problems,
                  burning your code on microcontrollers, playing with GPIOs, and
                  making things that work in no time.
                  </Text>

                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    fontSize={["md", "lg", "2xl"]}
                    fontFamily="mono"
                    color="black"
                    as="span"
                    flex="1"
                    textAlign="center"
                    fontWeight={"extrabold"}
                  >
                    Course Outline
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
                  <OrderedList>
                    <ListItem>
                      Introduction to the Internet of Things and Embedded
                      Systems (Weeks 1 and 2){" "}
                    </ListItem>
                    <ListItem>
                      The C Reference Book: The C programming language Embedded
                      Programming book: Internet of things with ESP8266
                    </ListItem>
                    <ListItem>
                      Introduction to C Part 1 (Weeks 3B, 4, and 5){" "}
                    </ListItem>
                    <ListItem>C Programming Part 2 (Weeks 6 and 7) </ListItem>
                    <ListItem>
                      {" "}
                      Introduction to Embedded systems Part 1 (Weeks 8){" "}
                    </ListItem>
                    <ListItem>
                      Introduction to Embedded systems Part 2 (Weeks 9-12){" "}
                    </ListItem>
                    <ListItem>
                      Embedded Programming using Rust (Extra Weeks in the
                      Course)
                    </ListItem>
                    <ListItem>Hardware Requirements</ListItem>
                  </OrderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default IOT;
