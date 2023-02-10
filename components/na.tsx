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

const NA = () => {
  return (
    <ChakraProvider>
      <Box
        position={"absolute"}
        backgroundImage={`url(/na1.jpg)`}
        h={"1100px"}
        w="100%"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundSize={["cover"]}
      >
        <Box mt='30px' backgroundColor="rgba(255, 0, 0, 0.3)">
          <Box>
            <Center>
              <Image
                 mt='30px'
                w={["150px", "250px", "250px"]}
                h={["150px", "200px", "200px"]}
                src="/na2.png"
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
                Network Programmability and Automation
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
                NPA-351: CCNA 200-301 Certification
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
                  This course will focus on learning the basics of the
                  networking and preparing for the new Cisco Certified Network
                  Associate (CCNA) exam. This comprehensive course focuses on
                  the solutions and technologies needed to implement and
                  administer a broad range of modern networking and IT
                  infrastructure. Textbook:
                  https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1
                  </Text>
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
              NPA-361: Network Programmability and Automation
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
                  <Text>
                                      Traditional network management techniques can not be effectively
                  automated and don not scale well. By implementing network
                  programmability based on Application Programming Interfaces,
                  this course will assist in overcoming issues of the future and
                  help you develop the skills required for the Next-Generation
                  Network Engineer. Textbook:
                  https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3
                  </Text>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default NA;
