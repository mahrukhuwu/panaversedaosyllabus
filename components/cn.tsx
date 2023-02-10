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

const CN = () => {
  return (
    <ChakraProvider>
      <Box
        position={"absolute"}
        backgroundImage={`url(/cn1.png)`}
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
                mt="5"
                w={["100px", "250px", "250px"]}
                h={["50px", "100px", "100px"]}
                src="/cn2.png"
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
                Cloud-Native Computing Specialization
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
                CN-351: Certified Kubernetes Application Developer (CKAD)
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
                  Cloud-native architecture and technologies are an approach to
                  designing, constructing, and operating workloads that are
                  built in the cloud and take full advantage of the cloud
                  computing model. Cloud-native technologies empower
                  organizations to build and run scalable applications in
                  modern, dynamic environments such as public, private, and
                  hybrid clouds. Containers, service meshes, microservices,
                  immutable infrastructure, and declarative APIs exemplify this
                  approach. These techniques enable loosely coupled systems that
                  are resilient, manageable, and observable. Combined with
                  robust automation, they allow engineers to make high-impact
                  changes frequently and predictably with minimal toil.
                  Kubernetes is an open-source system for automating the
                  deployment, scaling, and management of containerized
                  applications. In this course, you will learn how to develop
                  cloud applications using cloud-native technologies like
                  Containers, Kubernetes, and CDK for Kubernetes.
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
                      Kubernetes: Up and Running: Dive into the Future of
                      Infrastructure 3rd Edition
                    </ListItem>
                    <ListItem>Cloud Development Kit for Kubernetes</ListItem>
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
              CN-361: Developing Multi-Cloud Apps using CDK for Terraform
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
                  Terraform lets you use the same workflow to manage multiple
                  providers and handle cross-cloud dependencies. This simplifies
                  management and orchestration for large-scale, multi-cloud
                  infrastructures. Cloud Development Kit for Terraform (CDKTF)
                  allows you to use familiar programming languages to define and
                  provision infrastructure. This gives you access to the entire
                  Terraform ecosystem without learning HashiCorp Configuration
                  Language (HCL) and lets you leverage the power of your
                  existing toolchain for testing, dependency management, etc.
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
                    <ListItem>CDK for Terraform</ListItem>
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

export default CN;
