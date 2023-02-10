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

const WM = () => {
  return (
    <ChakraProvider>
      <Box
        position={"absolute"}
        backgroundImage={`url(/mw1.jpg)`}
        h={'cover'}
        w="100%"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundSize={["cover"]}
      >
        <Box backgroundColor="rgba(128, 128, 128, 0.3)">
        <Box >
    <Center> <Image w={['200px','400px','400px']} h={['100px','200px','200px']} src="/mw2.png" alt="In The Metaverse" /></Center>
          <Container textAlign="center">
          
            <Text
              color="white"
              fontSize={["2xl", "lg", "5xl"]}
              fontWeight="semibold"
              style={{
                animation: "fade-in 1s linear",
                animationFillMode: "forwards",
              }}
            >
              Web 3 and Metaverse Specialization
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
              bgColor={'ButtonFace'}
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
              W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
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
                  fontWeight={'extrabold'}
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
                bgColor={'ButtonFace'}
              >
                In this course you will learn how to develop Web 3.0 DApps,
                create a project, deploy it in production, write smart
                contracts, unit test them, and create user interfaces for them.
                We will also learn to develop ERC-20 and NFT tokens, DAOs,
                Oracles, etc. Please note that in order to develop Web 3
                applications you also need to build on top of Web 2.0
                technologies which we have already covered in the previous
                quarters.
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
                  fontWeight={'extrabold'}
                >
                  Course Outline
                </Box>
                <AccordionIcon  color="white" />
              </AccordionButton>
              <AccordionPanel
                fontSize={["sm", "md", "md"]}
                fontWeight="bold"
                pb={4}
                color="black"
                bgColor={'ButtonFace'}
              >
                <OrderedList>
                  <ListItem>Blockchain and Metaverse Theory</ListItem>
                  <ListItem>Smart Contract Development in Solidity </ListItem>
                  <ListItem>
                    Dapp Development using Ethers.js and Next.js 13
                  </ListItem>
                  <ListItem>Tokennomics</ListItem>
                  <ListItem>
                    Blockchain Project: Create a Token and Launch ICO/IEO/IDO
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Container textAlign="center">
          <Text
            mt="33px"
            bgColor={'ButtonFace'}
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
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
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
                  fontWeight={'extrabold'}
                  textAlign="center"
                >
                  Course Description
                </Box>
                <AccordionIcon  color="white" />
              </AccordionButton>
              <AccordionPanel
                fontSize={["sm", "md", "md"]}
                fontWeight="bold"
                pb={4}
                color="black"
                bgColor={'ButtonFace'}
              >
                The Web is the Metaverse. The metaverse requires an
                infrastructure that connects all of the metaverses so that we
                can travel between them. This is only achievable with open
                web-based metaverses. The internet and its browsers are magical.
                Federated but linked experiences connect pages, people,
                technology, businesses, standards, and nations. It is unlike
                anything else. The metaverse should replicate the best qualities
                of the web - it should just be the web. We just have to extend
                online responsive design from mobile to desktop to 3D, Augmented
                Reality, and Virtual Reality. This course will teach you how to
                build the Open Social Spatial Web with WebXR and WebGPU
                technologies.
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
                  fontWeight={'extrabold'}
                >
                  Course Outline
                </Box>
                <AccordionIcon  color="white" />
              </AccordionButton>
              <AccordionPanel
                fontSize={["sm", "md", "md"]}
                fontWeight="bold"
                pb={4}
                color="black"
                bgColor={'ButtonFace'}
              >
                <OrderedList>
                  <ListItem>Open Metaverse Web Development </ListItem>
                  <ListItem>
                    Blender 3D asset Creation for the Metaverse (Remote Zoom
                    Class){" "}
                  </ListItem>
                </OrderedList>
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
                  fontWeight={'extrabold'}
                >
                  Assignments
                </Box>
                <AccordionIcon color="white" />
              </AccordionButton>
              <AccordionPanel
                fontSize={["sm", "md", "md"]}
                fontWeight="bold"
                pb={4}
                color="black"
                bgColor={'ButtonFace'}
              >
                <OrderedList>
                  <ListItem>Build a 3D Donut using Blender 3</ListItem>
                  <ListItem>
                    Build a Viking Scene using Blender 3 as shown in chapter 2
                    of the Book [Blender by Example 2nd Edition]
                  </ListItem>
                  <ListItem>
                    Modeling a Time Machine using Blender 3 as shown in chapters
                    3 and 4 of the Book Blender by Example 2nd Edition
                  </ListItem>
                  <ListItem>
                    Build a Modern Kitchen using Blender 3 as shown in chapters
                    5, 6, and 7 of the Book Blender by Example 2nd Edition{" "}
                  </ListItem>
                  <ListItem>
                    Illustrating an Alien Hero with Grease Pencil as shown in
                    chapter 8 of the Book Blender by Example 2nd Edition
                  </ListItem>
                  <ListItem>
                    Build a 3D Sword in the Stone using Blender 3
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

export default WM;
