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
import React from "react";

const Q3 = () => {
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
              Quarter III (Core)
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={["xs", "sm", "md"]}
              color={"black"}
            >
              $-101: Dollar Making Bootcamp - Full-Stack Template and API
              Product Development
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
                  Earn While You Learn Projects
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
                    Build Full-Stack Next.js 13 Jamstack Templates
                  </ListItem>
                  <ListItem>Build QraphQL APIs </ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Q3;
