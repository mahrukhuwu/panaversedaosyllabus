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

const AI = () => {
  return (
    <ChakraProvider>
      <Box
        position={"absolute"}
        backgroundImage={`url(/ai1.jpeg)`}
        h={"cover"}
        w="100%"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundSize={["cover"]}
      >
        <Box backgroundColor="rgba(255, 0, 0, 0.3)">
          <Box>
            <Center>
              {" "}
              <Image
                w={["120px", "250px", "250px"]}
                h={["100px", "200px", "200px"]}
                src="/ai2.png"
                alt="In The Metaverse"
              />
            </Center>
            <Container textAlign="center">
              <Text
                color="white"
                fontSize={["2xl", "lg", "3xl"]}
                fontWeight="semibold"
                style={{
                  animation: "fade-in 1s linear",
                  animationFillMode: "forwards",
                }}
              >
                Artificial Intelligence (AI) and Deep Learning
              </Text>
              <Text
                fontWeight={"semibold"}
                fontSize={["xs", "sm", "md"]}
                color="white"
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
                color="white"
              >
                AI-351: Developing Planet-Scale Intelligent APIs and Python
                Programming
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
                  <Text>
                  Artificial intelligence is the simulation of human
                  intelligence processes by machines, especially computer
                  systems. The AI and Deep Learning Specialization is a
                  foundational program that will aid in your comprehension of
                  deep learning potential, difficulties, and effects as well
                  as equip you to take part in the creation of cutting-edge AI
                  technology. We will start this course by understanding the
                  fundamentals and use cases for AI and move on to building
                  next-gen intelligent apps using OpenAI powerful models and
                  Next.js 13. We will conclude the course by learning about basic
                  programming concepts using Python, such as lists,
                  dictionaries, classes, functions, and loops, and practice
                  writing clean and readable code with exercises for each topic.
                  We will also learn how to make your programs interactive and how
                  to test your code safely before adding it to a project. It is
                  a fast-paced, thorough introduction to programming with Python
                  3.10+ that will have you writing programs, solving problems,
                  and making things that work in no time. In this quarter we
                  will also learn Git, the distributed version control system.
                  We will also review Git-based GitHub services.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
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
                      Introduction to Machine Learning, Data Science, and AI
                    </ListItem>
                    <ListItem>Smart Contract Development in Solidity </ListItem>
                    <ListItem>
                      <Text>Building Next-Gen Intelligent Apps with OpenAIs Powerful
                      Models We will cover GPT-4, ChatGPT, etc. and Next.js 13</Text>
                    </ListItem>

                    <ListItem>
                      Python Crash Course for TypeScript Developers
                    </ListItem>
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
              color="white"
            >
              AI-361: Deep Learning and MLOps
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
                  This course will help you understand the capabilities,
                  challenges, and consequences of deep learning and prepare you
                  to participate in the development of leading-edge AI
                  technology. We will finish the program by learning how to
                  envision, create, and maintain integrated systems that run
                  constantly in production. Production systems must manage
                  constantly changing data, in stark contrast to typical machine
                  learning modeling. The production system must also operate
                  continuously at the lowest possible cost while delivering the
                  highest possible performance.
                </AccordionPanel>
              </AccordionItem>
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
                    <ListItem>Deep Learning with Tensorflow </ListItem>
                    <ListItem>
                    Machine Learning Engineering for Production (MLOps) using Terraform for CDK
                    </ListItem>
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

export default AI;
