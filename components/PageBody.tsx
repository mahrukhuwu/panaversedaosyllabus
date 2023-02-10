"use client";
import Link from "next/link";
import Router from "next/router";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Box,
  Grid,
  GridItem,
  ChakraProvider,
  Center,
  Text,
  Image,
  Flex,
  HStack,
  Container,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  BsFillFileEarmarkCodeFill,
  BsBookHalf,
  BsFillArrowRightSquareFill,
  BsGithub,
  BsYoutube,
  BsTwitter,
  BsFacebook,
  BsDiscord,
} from "react-icons/bs";
import { FiChevronsRight } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { GiProgression } from "react-icons/gi";
import { useState } from "react";
import "./styles.css";

function PageBody() {
  const [isProgramNutshellOpen, setIsProgramNutshellOpen] = useState(false);
  const [isProgramStudiesOpen, setIsProgramStudiesOpen] = useState(false);
  const [isOutComeOpen, setIsOutComeOpen] = useState(false);
  return (
    <ChakraProvider>
      <Box
        position={"absolute"}
        backgroundImage={`url(/bgg.jfif)`}
        w="100%"
        h="100%"
        maxH={["200px", "200px", "400px"]}
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundSize={["auto", "auto", "cover"]}
      >
        <Box
          h={["200px", "300px", "400px"]}
          w="100%"
          maxW={["150px", "330px", "500px"]}
          ml={["3%", "5%", "10%"]}
        >
          <Text
            mt={["15px", "50px", "120px"]}
            color="#cc112c"
            fontSize={["sm", "lg", "3xl"]}
            fontWeight="semibold"
            style={{
              animation: "fade-in 1s linear",
              animationFillMode: "forwards",
            }}
          >
            Become a Certified Developer with Panaverse
            <br />A One and Quarter Years Panaverse DAO Earn as you Learn
            Program
          </Text>
          <Text
            fontWeight={"semibold"}
            fontSize={["2xs", "2xs", "md"]}
            color={"black"}
          >
            Getting Ready for the Next Generation of the Internet
          </Text>
        </Box>
        <Box display="flex" mt={["-170px", "-290px", "-360px"]} ml="70%">
          <Image
          alt="an image"
            boxSize={["70px", "80px", "130px"]}
            src="/logo.png"
            style={{
              animation: "move-left 0.5s linear",
              animationFillMode: "forwards",
            }}
          />
        </Box>
      </Box>
      <Grid
        px="2"
        m="auto"
        maxW={"1200px"}
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={["0", "4", "4"]}
      >
        <GridItem
          className="grid-item"
          borderRadius={"base"}
          bgColor="red.50"
          py="5"
          px="2"
          mt={["250px", "250px", "450px"]}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <BsFillFileEarmarkCodeFill color="#cc112c" size={"60px"} />
            <Text
              className="shake"
              fontWeight={"700"}
              fontFamily="revert"
              as="span"
              variant="outline"
              aria-label="BsFillFileEarmarkCodeFill Icon"
              onClick={() => setIsProgramNutshellOpen(!isProgramNutshellOpen)}
              textAlign="center"
              px="2"
              py="5"
              fontSize={["xs", "sm", "sm"]}
              bgClip="border-box"
              w={["90px", "100px", "125px"]}
              cursor="pointer"
            >
              The Program in a Nutshell
            </Text>
            <Modal
              size={["xs", "sm", "md"]}
              isOpen={isProgramNutshellOpen}
              onClose={() => setIsProgramNutshellOpen(false)}
            >
              <ModalOverlay />
              <ModalContent
                bgGradient={["linear(to-tr, red.300, red.100)"]}
                p={6}
              >
                <ModalHeader>The Program in a Nutshell</ModalHeader>
                <ModalBody fontSize={["x-small", "sm", "md"]}>
                  <Text>
                    Earn While You Learn In this brand-new type of curriculum,
                    students will learn how to make money and boost exports in
                    the classroom and will begin doing so within six months of
                    the programs beginning. It resembles a cross between a
                    corporate venture and an educational project.
                  </Text>
                  <Box display="flex" justifyContent="center">
                    <Image
                    alt="an image"
                      boxSize={["40px", "50px", "100px"]}
                      src="/logo.png"
                    />
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button
                    bgColor={"red.200"}
                    onClick={() => setIsProgramNutshellOpen(false)}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </GridItem>
        <GridItem
          className="grid-item"
          borderRadius={"base"}
          bgColor="red.50"
          py="5"
          px="2"
          mt={["30px", "250px", "450px"]}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <BsBookHalf color="#cc112c" size={"60px"} />
            <Text
              className="shake"
              fontWeight={"700"}
              fontFamily="revert"
              as="span"
              variant="outline"
              aria-label="BsBookHalf Icon"
              onClick={() => setIsProgramStudiesOpen(!isProgramStudiesOpen)}
              textAlign="center"
              px="2"
              py="5"
              fontSize={["xs", "sm", "sm"]}
              bgClip="border-box"
              w={["90px", "100px", "125px"]}
              cursor="pointer"
            >
              Program of Studies
            </Text>
            <Modal
              size={["xs", "sm", "md"]}
              isOpen={isProgramStudiesOpen}
              onClose={() => setIsProgramStudiesOpen(false)}
            >
              <ModalOverlay />
              <ModalContent
                bgGradient={["linear(to-tr, red.300, red.100)"]}
                p={6}
              >
                <ModalHeader
                  textAlign="center"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  Program of Studies
                </ModalHeader>
                <ModalBody fontSize={["x-small", "sm", "md"]}>
                  <Text>
                    This curriculum is intended for beginners who want to learn
                    software development from the ground up. The first three
                    quarters are shared by all specialties and are dedicated to
                    studying Object-Oriented Programming and cutting-edge
                    Full-Stack Web 2.0 development. It is going to be a
                    fifteen-month-long hybrid program that includes both onsite
                    and online classes and is divided into five quarters of 13
                    weeks each. The emphasis will be on hands-on learning by
                    educating students to produce projects. To accommodate
                    everyone, courses will be held primarily on weekends or
                    after 6:00 p.m. (Pakistan Time) on weekdays. It employs a
                    hybrid teaching format, with core onsite classes
                    complemented by online Zoom laboratories and recorded
                    videos. project.
                  </Text>
                  <Box display="flex" justifyContent="center">
                    <Image
                    alt="an image"
                      boxSize={["40px", "50px", "100px"]}
                      src="/logo.png"
                    />
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button
                    bgColor={"red.200"}
                    onClick={() => setIsProgramStudiesOpen(false)}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </GridItem>
        <GridItem
          className="grid-item"
          borderRadius={"base"}
          bgColor="red.50"
          py="5"
          px="2"
          mt={["30px", "250px", "450px"]}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <GiProgression color="#cc112c" size={"60px"} />
            <Text
              className="shake"
              fontWeight={"700"}
              fontFamily="revert"
              as="span"
              variant="outline"
              aria-label="GiProgression Icon"
              onClick={() => setIsOutComeOpen(!isOutComeOpen)}
              textAlign="center"
              px="2"
              py="5"
              fontSize={["xs", "sm", "sm"]}
              bgClip="border-box"
              w={["90px", "100px", "125px"]}
              cursor="pointer"
            >
              Outcome of This Program
            </Text>
            <Modal
              size={["xs", "sm", "md"]}
              isOpen={isOutComeOpen}
              onClose={() => setIsOutComeOpen(false)}
            >
              <ModalOverlay />
              <ModalContent
                bgGradient={["linear(to-tr, red.300, red.100)"]}
                p={6}
              >
                <ModalHeader>Outcome of This Program</ModalHeader>
                <ModalBody fontSize={["x-small", "sm", "md"]}>
                  <Text>
                    The graduates of this program will own products (Full-Stack
                    App Templates, AR and VR Experiences, and APIs) that are
                    marketed globally by the Panaverse DAO and, if they like,
                    will also be able to start off by offering services at a
                    rate of $50 per hour ($96,000 per year). This would give
                    Pakistani professionals and students a fantastic opportunity
                    to better their financial situation while also giving the
                    economy a much-needed boost by expanding software exports.
                  </Text>
                  <Box display="flex" justifyContent="center">
                    <Image
                    alt="an image"
                      boxSize={["40px", "50px", "100px"]}
                      src="/logo.png"
                    />
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button
                    bgColor={"red.200"}
                    onClick={() => setIsOutComeOpen(false)}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </GridItem>
      </Grid>
      <Grid
        m="auto"
        px="2"
        maxW={"800px"}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={4}
      >
        <GridItem
          className="grid-item"
          borderRadius={"base"}
          bgColor="red.50"
          py="5"
          px="2"
          maxH={"200px"}
          mt={["30px", "30px", "20px"]}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <FiChevronsRight color="#cc112c" size={"60px"} />

            <Text
              className="shake"
              fontWeight={"700"}
              fontFamily="revert"
              as="span"
              variant="outline"
              aria-label="FiChevronsRight Icon"
              textAlign="center"
              px="2"
              py="5"
              fontSize={["xs", "sm", "sm"]}
              bgClip="border-box"
              w={["90px", "100px", "255px"]}
              cursor="pointer"
            >
              <Link href={"https://www.piaic.org/"}>Apply Now</Link>
            </Text>
          </Box>
        </GridItem>
        <GridItem
          className="grid-item"
          borderRadius={"base"}
          bgColor="red.50"
          py="5"
          px="2"
          maxH={"250px"}
          mt={["30px", "30px", "20px"]}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <AiOutlineFileSearch color="#cc112c" size={"60px"} />
            <Text
              className="shake"
              fontWeight={"700"}
              fontFamily="revert"
              as="span"
              variant="outline"
              aria-label="AiOutlineFileSearch Icon"
              textAlign="center"
              px="2"
              py="5"
              fontSize={["xs", "sm", "sm"]}
              bgClip="border-box"
              w={["90px", "100px", "255px"]}
              cursor="pointer"
            >
              <Link href="/Syllabus">Explore The Syllabus</Link>
            </Text>
          </Box>
        </GridItem>
      </Grid>
      <Box
        pt={["100px", "40px", "39px"]}
        pb="20"
        textAlign={"center"}
        justifyContent="center"
      >
        <Text
          textAlign={"center"}
          justifyContent="center"
          fontFamily={"cursive"}
          fontWeight="bold"
        >
          Contact Us
        </Text>
        <Box>
          <Box display={"flex"} justifyContent="center" pt="2">
            <a href="tel:+92-308-2220203">
              <Box>
                <IoMdCall color="#cc112c" size="20px" />
              </Box>
            </a>
            <a href="https://github.com/panaverse">
              <Box pl="2">
                <BsGithub color="#cc112c" size="20px" />
              </Box>
            </a>
            <a href="https://www.youtube.com/channel/UCu8v7dLyAix44NXjKCNNgRA">
              <Box pl="2">
                <BsYoutube color="#cc112c" size="20px" />
              </Box>
            </a>
            <a href="https://www.facebook.com/groups/panaverse/?ref=share">
              <Box pl="2">
                <BsFacebook color="#cc112c" size="20px" />
              </Box>
            </a>
            <a href="https://twitter.com/Panaverse_edu">
              <Box pl="2">
                <BsTwitter color="#cc112c" size="20px" />
              </Box>
            </a>
            <a href="https://discord.com/channels/790484092772548613/790484092772548616">
              <Box pl="2">
                <BsDiscord color="#cc112c" size="20px" />
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default PageBody;
