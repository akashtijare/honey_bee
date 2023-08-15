import { Box, Center, Flex, Image, Text, Heading, Button, HStack, VStack } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  })
  const carouselItems = [
    {
      id: 1,
      imageSrc: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_7k1YvwQn-htpJrLr4_jTIq6GDoSMq99dJU99SCRanspyOcnu9QYLspitWZYX84pMWHHhNENcSkBffJZvFkvAWshLX54eybOWhnqz-OBXyE8-5W2Cyca6jJA0_JST_q1hdlCBUOEsms0blqR4USCqcey3NE_enmSWz6yen7u6BMAu9sI4dpQH9XtJHs8/s16000/1.jpg',
      altText: 'Image 1',
    },
    {
      id: 2,
      imageSrc: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgniqDDDqI2JZNwGYOKVYGJinrbazcdr2y42odCJZ1fZ14o8GCGqqRZ9PApiRhqO19OEpIApFYFAk_NI5_9SIDyOsOmbkb0kwF_v-FrQi_XdGYn43GtOtRvIJAYby9JgV8fwkJhep3MtPC13PcrJnnMWhBaJ7WJxOCp_taOzFTbNte1ETBA_5INHVk-spE/s16000/2.jpg',
      altText: 'Image 2',
    },
    {
      id: 3,
      imageSrc: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnJCbuDumOnaarfeYM_nbRIZq0x39Jgwi5-NU-py1K4YtveLmIThc5TvfXWUcLU4mAibg57rtkenNbcX0QEdkmOi96Nq4y4qnBXdVxWo_ysJLEX4hapjqiskgTLfdCYwi_LBFhboFqUuPPWHbFflf2eSODG6AkQkAtUwmgcVztWPeCfk1dd5FGQjxmNJ0/s16000/3.jpg',
      altText: 'Image 3',
    },
  ];

  return (
    <>
      <Flex
        flexDir={'column'}
        h={['10rem', '10rem', '35rem', '35rem']}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={false}
        >
          {carouselItems.map(item => (
            <Box key={item.id} h={['10rem', '10rem', '35rem', '35rem']} w="100%" textAlign="center">
              <Image src={item.imageSrc} alt={item.altText} objectFit="cover" h="100%" w="100%" />
            </Box>
          ))}
        </Carousel>

        {/* <Center fontSize={['6rem','6rem','18rem','18rem']} color={'white'}>HONEY</Center> */}
      </Flex>

      {/* // <Box fontSize={["5rem","5rem","18rem","18rem"]} color={'white'} bg={'tomato'} >HONEY</Box> */}
      <Box h={['2vh', '2vh', '6vh', '6vh']} bg={'#F05A1F'} w={'100%'} textAlign={'center'} ><Text fontSize={['7px', '6px', '25px', '25px']} >UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: HONEY, GRANOLA, CHOCOLATE AND BARS</Text></Box>
      {/* large screen About us */}
      <Box h={"100vh"}
        style={{ scrollSnapAlign: "start" }}
        bgColor={"rgb(255,250,244)"}
        className="main_body2"

        id="aboutUs"
        // ref={aboutUsRef}
        display={['none', 'none', 'grid', 'grid']}
      >
        <Box w={"90%"}
          margin={"auto"}
          h={"100vh"}
          p={" 20px 20px 150px 20px"}
          borderLeft={"2px solid rgb(164,164,164)"}
          borderRight={"2px solid rgb(164,164,164)"}>
          <Heading size={"lg"}>
            ABOUT THE REGION OF HONEY: THE WARMIAN-MASURIAN VOIVODESHIP
          </Heading>
          <br></br>
          <Heading size={"sm"}>
            OUR IDEA IS TO DISCOVER NATURAL, VALUABLE PRODUCTS AND HELP IT
            REACH A WIDER RANGE OF GOURMETS
          </Heading>
          <br></br>
          <br></br>
          <Flex>
            <Flex direction="column" w={"50%"} gap={"50px"}>
              <Text>
                Honey and organic products that you Will find in our store
                come from the Warmian—Masurian Voivodeship — one Of the
                cleanest regions in Poland.
              </Text>
              <Text>
                It is thanks to this that they are distinguished by their
                unique taste and aroma, as well as invaluable healing
                properties, We offer you a wide range
              </Text>
              <Text>
                Of nectar and honeydew honey — here you will find both your
                favorite types and types that are hard to find on the regular
                market. Our priority is to provide products Of the highest
                quality, which in our understanding means, first Of all.
                naturalness and respect for nature and its inhabitants.
              </Text>
            </Flex>
            <Box w={"40%"} overflow={"hidden"}>
              <Image
                width={"100%"}
                mt={"-50px"}
                src="https://media.discordapp.net/attachments/1100180350879154326/1111264153663963176/image.png?width=808&height=662"
              ></Image>
            </Box>
          </Flex>
          <Flex>
            {/* about us button */}
            <Button

              zIndex={"100"}
              position={"relative"}
              border={"1px solid black"}
              borderRadius={"30px"}
              variant="outline"
            >
              LEARN MORE
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <hr
              style={{
                width: "80%",
                marginTop: "20px",
                border: "2px solid rgb(161,160,158)",
              }}
            ></hr>
          </Flex>


        </Box>
      </Box>
      {/* small screen About us */}
      <Box h={"100vh"}
        style={{ scrollSnapAlign: "start" }}
        bgColor={"rgb(255,250,244)"}
        className="main_body2"

        id="aboutUs"
        // ref={aboutUsRef}
        display={['grid', 'grid', 'none', 'none']}
      >
        <Box w={"90%"}
          margin={"auto"}
          h={"100vh"}
          p={" 20px 20px 150px 20px"}
          borderLeft={"2px solid rgb(164,164,164)"}
          borderRight={"2px solid rgb(164,164,164)"}>
          <Heading size={"lg"}>
            ABOUT THE REGION OF HONEY: THE WARMIAN-MASURIAN VOIVODESHIP
          </Heading>
          <br></br>
          <Heading size={"sm"}>
            OUR IDEA IS TO DISCOVER NATURAL, VALUABLE PRODUCTS AND HELP IT
            REACH A WIDER RANGE OF GOURMETS
          </Heading>
          <br></br>
          <br></br>
          <Image
            width={"100%"}
            mt={"-50px"}
            src="https://media.discordapp.net/attachments/1100180350879154326/1111264153663963176/image.png?width=808&height=662"
          ></Image>
          <Text>
            Honey and organic products that you Will find in our store
            come from the Warmian—Masurian Voivodeship — one Of the
            cleanest regions in Poland.
            It is thanks to this that they are distinguished by their
            unique taste and aroma, as well as invaluable healing
            properties, We offer you a wide range
            Of nectar and honeydew honey — here you will find both your
            favorite types and types that are hard to find on the regular
            market. Our priority is to provide products Of the highest
            quality, which in our understanding means, first Of all.
            naturalness and respect for nature and its inhabitants.
          </Text>
          <Flex>
            {/* about us button */}
            <Button

              zIndex={"100"}
              position={"relative"}
              border={"1px solid black"}
              borderRadius={"30px"}
              variant="outline"
            >
              LEARN MORE
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <hr
              style={{
                width: "80%",
                marginTop: "20px",
                border: "2px solid rgb(161,160,158)",
              }}
            ></hr>
          </Flex>


        </Box>
      </Box>
      {/* Why chhose Us Big Screen */}
      <Box
        display={['none', 'none', 'grid', 'grid']}
        // h={"100vh"}
        className="main_body3"
        bgColor={"rgb(255,250,244)"}>
        <Box
          w={"90%"}
          margin={"auto"}
          h={"70vh"}
          p={"70px 20px"}
          borderLeft={"2px solid rgb(164,164,164)"}
          borderRight={"2px solid rgb(164,164,164)"}
        >
          <Center><Heading >WHY CHOOSE US?</Heading></Center>
          <Flex justifyContent={"space-evenly"}
            gap={"40px"}
            w={"100%"}
            p={"0 30px"}>
            <Flex direction={"column"}
              w={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"10px"}>
              <Box width={'68%'}>
                <Image
                  mt='50px'
                  width={"100%"}
                  src="https://cdn.discordapp.com/attachments/1100180350879154326/1111318183555633282/image.png"
                ></Image>
                <Text
                  fontSize={"16px"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  ALL PRODUCTS ARE ORGANIC
                </Text>
                <Text fontSize={"15px"} textAlign={"center"}>
                  All products are produced in a small private apiary
                </Text>
              </Box>
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              w={"100%"}
              gap={"10px"}
            >
              <Box w={"70%"}>
                <Image
                  mt='15px'

                  width={"100%"}
                  src="https://cdn.discordapp.com/attachments/1100180350879154326/1111287271816183809/image.png"
                ></Image>
              </Box>
              <Text
                fontSize={"16px"}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                100% NATURAL RAW HONEY
              </Text>
              <Text fontSize={"15px"} textAlign={"center"}>
                Harvested and packed in the Poland
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              w={"100%"}
              gap={"10px"}
            >
              <Box w={"70%"}>
                <Image
                  width={"100%"}
                  mt='15px'

                  src="https://cdn.discordapp.com/attachments/1100180350879154326/1111287333598265407/image.png"
                ></Image>
              </Box>
              <Text
                fontSize={"16px"}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                ECOLOGICAL BEEKEEPING
              </Text>
              <Text fontSize={"15px"} textAlign={"center"}>
                Encorage organic ways of sustainable beekeeping
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              w={"100%"}
              gap={"10px"}
            >
              <Box w={"70%"}>
                <Image
                  width={"100%"}
                  mt='15px'
                  src="https://cdn.discordapp.com/attachments/1100180350879154326/1111287410010103879/image.png"
                ></Image>
              </Box>
              <Text
                fontSize={"16px"}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                HOME FOR BEES
              </Text>
              <Text fontSize={"15px"} textAlign={"center"}>
                providing homes for our splendid polinators
              </Text>
            </Flex>
          </Flex>
          <hr
            style={{
              width: "90%",
              marginTop: "5%",
              marginLeft: "5%",
              border: "2px solid rgb(161,160,158)",
              bgColor: "rgb(255,250,244)"
            }}
          ></hr>
        </Box>
      </Box>
      {/* Why Choose us small Screen  */}
      <Box
        display={['grid', 'grid', 'none', 'none']}
        // h={"100vh"}
        className="main_body3"
        bgColor={"rgb(255,250,244)"}>
        <Box
          w={"90%"}
          margin={"auto"}
          // h={"100vh"}
          p={"70px 20px"}
          borderLeft={"2px solid rgb(164,164,164)"}
          borderRight={"2px solid rgb(164,164,164)"}
        >
          <Center><Heading >WHY CHOOSE US?</Heading></Center>

          <Flex direction={"column"}
            w={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}>
            <Box width={'68%'}>
              <Image
                mt='50px'
                width={"80%"}
                src="https://cdn.discordapp.com/attachments/1100180350879154326/1111318183555633282/image.png"
              ></Image>
              <Text
                fontSize={"16px"}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                ALL PRODUCTS ARE ORGANIC
              </Text>
              <Text fontSize={"15px"} textAlign={"center"}>
                All products are produced in a small private apiary
              </Text>
            </Box>
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"100%"}
            gap={"10px"}
          >
            <Box w={"70%"}>
              <Image
                mt='15px'

                width={"100%"}
                src="https://cdn.discordapp.com/attachments/1100180350879154326/1111287271816183809/image.png"
              ></Image>
            </Box>
            <Text
              fontSize={"16px"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              100% NATURAL RAW HONEY
            </Text>
            <Text fontSize={"15px"} textAlign={"center"}>
              Harvested and packed in the Poland
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"100%"}
            gap={"10px"}
          >
            <Box w={"70%"}>
              <Image
                width={"100%"}
                mt='15px'

                src="https://cdn.discordapp.com/attachments/1100180350879154326/1111287333598265407/image.png"
              ></Image>
            </Box>
            <Text
              fontSize={"16px"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              ECOLOGICAL BEEKEEPING
            </Text>
            <Text fontSize={"15px"} textAlign={"center"}>
              Encorage organic ways of sustainable beekeeping
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"100%"}
            gap={"10px"}
          >
            <Box w={"70%"}>
              <Image
                width={"100%"}
                mt='15px'
                src="https://cdn.discordapp.com/attachments/1100180350879154326/1111287410010103879/image.png"
              ></Image>
            </Box>
            <Text
              fontSize={"16px"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              HOME FOR BEES
            </Text>
            <Text fontSize={"15px"} textAlign={"center"}>
              providing homes for our splendid polinators
            </Text>
          </Flex>
          <hr
            style={{
              width: "90%",
              marginTop: "5%",
              marginLeft: "5%",
              border: "2px solid rgb(161,160,158)",
              bgColor: "rgb(255,250,244)"
            }}
          ></hr>
        </Box>
      </Box>

      {/* Chheckout All Products */}
      <Box
        style={{ scrollSnapAlign: "start" }}
        bgColor={"rgb(255,250,244)"}
        // h={"100vh"}
        className="main_body4"
      >
        <Box
          w={"90%"}
          margin={"auto"}
          h={"100vh"}
          paddingTop={'50px'}
          paddingLeft={'50px'}
          borderLeft={"2px solid rgb(164,164,164)"}
          borderRight={"2px solid rgb(164,164,164)"}
        >
          <Flex
          justifyContent={'space-between'}
          gap={'10%'}
          paddingLeft={'20px'}
          >
            <Flex
            flexDir={'column'}
            >
            <Box width={"100%"}>
                                    <VStack>
                                       <Heading size={"xl"}  >
                                            CHECKOUT<br></br> <span style={{color:"#185E49"}} >All</span> PRODUCTS
                                        </Heading>
                                        <br></br>
                                        <Text fontSize={"md"} fontWeight={"bold"}>
                                            CHOOSE WHAT IS RIGHT FOR YOU<br></br>
                                            FROM OUR LINE OF ORGANIC<br></br>
                                            AND HONEY PRODUCTS
                                        </Text>
                                    </VStack>
                                </Box>
                                <Box
                                marginTop={'20px'}
                                >
                                <Flex
                                    direction={"column"}
                                    fontSize={"14px"}
                                    fontWeight={"bold"}
                                    gap={"5px"}
                                >
                                    <hr
                                        style={{
                                            border: "1px solid rgb(128,127,125)",
                                            width: "75%",
                                        }}
                                    ></hr>
                                    <HStack> <Box>HONEY</Box></HStack>
                                    <hr
                                        style={{
                                            border: "1px solid rgb(128,127,125)",
                                            width: "75%",
                                        }}
                                    ></hr>
                                    <HStack><Box> GRANOLA</Box></HStack>
                                    <hr
                                        style={{
                                            border: "1px solid rgb(128,127,125)",
                                            width: "75%",
                                        }}
                                    ></hr>
                                    <HStack>  <Box>HONEY BARS</Box></HStack>
                                    <hr
                                        style={{
                                            border: "1px solid rgb(128,127,125)",
                                            width: "75%",
                                        }}
                                    ></hr>
                                    <HStack>   <Box>CHOCOLATE WITH HONEY</Box></HStack>
                                    <hr
                                        style={{
                                            border: "1px solid rgb(128,127,125)",
                                            width: "75%",
                                        }}
                                    ></hr>
                                    <HStack> <Box>HONEY DESSERTS</Box></HStack>
                                    <hr
                                        style={{
                                            border: "1px solid rgb(128,127,125)",
                                            width: "75%",
                                        }}
                                    ></hr>
                                </Flex>
                            </Box>
            </Flex>
            <Flex>
            <Image
                                    w={"100%"}
                                    h={'50%'}
                                    src="https://cdn.discordapp.com/attachments/1100180350879154326/1111557552384262164/image.png"
                                ></Image>
            </Flex>
            
            <Flex>
            <Image
                                w={"60%"}
                                src="https://cdn.discordapp.com/attachments/1100180350879154326/1111557842302935112/image.png"
                            ></Image>
            </Flex>
          </Flex>
          <Flex mt={"50px"} gap={"20px"} margin={"auto"}>
            <hr
              style={{
                width: "80%",
                marginTop: "20px",
                border: "2px solid rgb(161,160,158)",
              }}
            ></hr>
            <Button
              zIndex={"100"}
              onClick={() => {
                navigate("/product");
              }}
              position={"relative"}
              border={"1px solid black"}
              borderRadius={"30px"}
              variant="outline"
            >
              ALL PRODUCTS
            </Button>
          </Flex>
        </Box>
      </Box>

    </>
  )
}
