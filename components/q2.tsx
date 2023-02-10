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
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Q2 = () => {
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
              Quarter II (Core)
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={["xs", "sm", "md"]}
              color={"black"}
            >
              W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and
              APIs using Next.js 13 and Cloud Development Kit (CDK) for
              Terraform
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
                The objective of this course is to teach participants to develop
                customer-facing planet-scale Websites, Full-Stack Apps and
                templates, Dashboards, and Muti-Cloud Serverless APIs. By the
                end of the quarter, the participants will be able to develop and
                deploy web platforms like Facebook, Shopify, etc. The
                technologies covered in this course will include Next.js 13,
                Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma,
                Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
                Technologies, and Cloud Development Kit for Terraform (CDKTF).
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
                  <ListItem>Next.js 13 Web Development </ListItem>
                  <ListItem>
                    Next.js 13 using Chakra UI (Remote Zoom Class)
                  </ListItem>
                  <ListItem>
                    UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote
                    Zoom Class)
                  </ListItem>
                  <ListItem>
                    API Routes with Next.js (Remote Zoom Class)
                  </ListItem>
                  <ListItem>
                    APIs with Next.js and tRPC (Remote Zoom Class)
                  </ListItem>
                  <ListItem>SQL and Prisma</ListItem>
                  <ListItem>
                    Next.js 13 using TailwindCSS (Remote Zoom Class)
                  </ListItem>
                  <ListItem>
                    AWS Application Composer (Remote Zoom Class)
                  </ListItem>
                  <ListItem>
                    Multi-Cloud GraphQL Serverless API Development with Cloud
                    Development Kit for Terraform (CDKTF) (Remote Zoom Class)
                  </ListItem>
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
                  Projects
                </Box>
                <AccordionIcon color="#cc112c" />
              </AccordionButton>
              <AccordionPanel
                fontSize={["sm", "md", "md"]}
                fontWeight="bold"
                pb={4}
              >
                <OrderedList>
                  <ListItem>Next.js Projects</ListItem>
                  <ListItem>
                    Styling Next.js Projects using TailwindCSS and Chakra UI
                  </ListItem>
                  <ListItem>Todo Full-Stack App</ListItem>
                  <ListItem>Build a Twitter Clone</ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </ChakraProvider>
  );
  
};

export default Q2;
