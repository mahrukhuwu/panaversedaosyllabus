"use client";
import {
  ChakraProvider,
  Box,
  Text,
  List,
  ListItem,
  OrderedList,
  Container,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Q1 = () => {
  return (
    <ChakraProvider>
      <Box
        position={"absolute"}
        backgroundImage={`url(/bgg.jfif)`}
        h={["400px", "400px", "400px"]}
        w="100%"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundSize={["auto", "auto", "cover"]}
      >
        <Box>
          <Container justifyContent={"cneter"} textAlign="center">
            <Text
              mt={["25px", "30px", "80px"]}
              color="#cc112c"
              fontSize={["2xl", "lg", "5xl"]}
              fontWeight="semibold"
              style={{
                animation: "fade-in 1s linear",
                animationFillMode: "forwards",
              }}
            >
              Quarter I (Core)
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={["xs", "sm", "md"]}
              color={"black"}
            >
              CS-101: Object-Oriented Programming using TypeScript
            </Text>
            <Text
              color="#cc112c"
              fontSize={["sm", "lg", "lg"]}
              fontWeight="semibold"
              style={{
                animation: "fade-in 1s linear",
                animationFillMode: "forwards",
              }}
            >
              Duration: 13 Weeks
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
                  textColor={"#cc112c"}
                  as="span"
                  flex="1"
                  textAlign="center"
                >
                  Course Description
                </Box>
                <AccordionIcon color="#cc112c" />
              </AccordionButton>
              <AccordionPanel
                textAlign={"center"}
                fontSize={["sm", "md", "md"]}
                fontWeight="bold"
                pb={4}
              >
                We will start the program by learning the fundamentals of
                Object-Oriented programming using JavaScript and TypeScript. We
                will also understand the latest Web trends i.e. Web 3.0 and
                Metaverse concepts and try to understand their working from the
                perspective of the users.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box
                  fontSize={["md", "lg", "2xl"]}
                  fontFamily="mono"
                  textColor={"#cc112c"}
                  as="span"
                  flex="1"
                  textAlign="center"
                >
                  Course Outline
                </Box>
                <AccordionIcon color="#cc112c" />
              </AccordionButton>
              <AccordionPanel
                fontSize={["sm", "md", "md"]}
                fontWeight="bold"
                pb={4}
              >
                <OrderedList>
                  <ListItem>HTML and CSS (Homework)</ListItem>
                  <ListItem>Web 3.0 and Metaverse Theory</ListItem>
                  <ListItem>Fundamentals of Typescript</ListItem>
                  <ListItem>
                    Object-Oriented Programming with TypeScript
                  </ListItem>
                  <ListItem>TypeScript for React</ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box
                  fontSize={["md", "lg", "2xl"]}
                  fontFamily="mono"
                  textColor={"#cc112c"}
                  as="span"
                  flex="1"
                  textAlign="center"
                >
                  Quarter Break Assignments
                </Box>
                <AccordionIcon color="#cc112c" />
              </AccordionButton>
              <AccordionPanel
                fontSize={["sm", "md", "md"]}
                fontWeight="bold"
                pb={4}
              >
                During the Quarter Break, we do the following Assignments:{" "}
                <br />
                1.{" "}
                <Link href=" https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge">
                  <Text as="u">
                    https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge
                  </Text>
                </Link>
                <br />
                2.{" "}
                <Link href="  https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app ">
                  <Text as="u">
                    {" "}
                    https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app{" "}
                  </Text>
                </Link>
                <br />
                3.{" "}
                <Link href="  https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui">
                  <Text as="u">
                    {" "}
                    https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui
                  </Text>
                </Link>
                <br />
                4.{" "}
                <Link href="  https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing">
                  <Text as="u">
                    {" "}
                    Build a Panaverse DAO Syllabus Website using Next.js 13
                    given the content from the this document
                  </Text>
                </Link>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box
                  fontSize={["md", "lg", "2xl"]}
                  fontFamily="mono"
                  textColor={"#cc112c"}
                  as="span"
                  flex="1"
                  textAlign="center"
                >
                  Quizzes
                </Box>
                <AccordionIcon color="#cc112c" />
              </AccordionButton>
              <AccordionPanel
                fontSize={["sm", "md", "md"]}
                fontWeight="bold"
                pb={4}
              >
                <OrderedList>
                  <ListItem>
                    Fundamentals of Version Control with Git Quiz
                  </ListItem>
                  <ListItem>TypeScript Proficiency Quiz</ListItem>
                  <ListItem>Fundamentals of Typescript</ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Q1;
