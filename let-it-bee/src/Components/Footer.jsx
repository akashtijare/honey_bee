import {Text,Box,Flex,Input,Heading,Checkbox,Button} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const Footer = ()=>{
    const premjeet = 'SIGN UP FOR NEWS, UPDATES AND SPECIAL OFFERS! LET IT BEE :)'
    const breakpoints = createBreakpoints({
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
      })
    return (<>
    

    <Box
          display={['none','none','grid','grid']}
          w={"100%"}
          bgColor={"rgb(25,94,73)"}
          h={"70vh"}
          className="main_body4"
          id="footer"
        >
          <Box w={"100%"} margin={"auto"} h={"100vh"}>
          
            <Flex
              zIndex={"1000"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"50px 20px"}
              gap={"20px"}
            >
              <Heading fontSize={"30px"} color={"white"}>
                SUBSCRIBE TO OUR NEWSLETTER
              </Heading>
              <Text color={"white"} fontSize={"13px"}>
                {premjeet}
              </Text>
              <Flex
                w={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <Input
                  color={"white"}
                  border={"none"}
                  borderBottom={"1px solid white"}
                  placeholder="YOUR EMAIL"
                  w={"30%"}
                  borderRadius={"0"}
                />
                <Button
                  borderRadius={"30px"}
                  w={"10%"}
                  color={"white"}
                  variant="outline"
                >
                  SUBSCRIBE
                </Button>
              </Flex>
              <Box>
                <Flex gap={"10px"}>
                  <Checkbox />
                  <Text color={"rgb(82,146,126)"}>
                    By pressing the button you agree to our terms and conditions
                  </Text>
                </Flex>
              </Box>
            </Flex>

            <Box
              background={"white"}
              height={"30vh"}
              p={"30px"}
              w={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              margin={"auto"}
            >
              <Flex justifyContent={"space-around"} w={"100%"}>
                <Flex direction={"column"} w={"50%"}>
                  <Heading size={"md"}>LET IT BEE.CO</Heading>
                  <Heading size={"md"} mt={"10px"}>
                    DISCOVER THE REAL TASTE
                  </Heading>
                  <Heading size={"md"}>
                    OF HONEY AND ORGANIC FOOD{" "}
                    <span
                      style={{
                        fontFamily: "Brush Script MT",
                        fontSize: "30px",
                      }}
                    >
                      with love
                    </span>
                  </Heading>
                  <Text
                    mt={"30px"}
                    color={"rgb(184,182,181)"}
                    fontSize={"12px"}
                  >
                    © 2023 Name Company. All rights reserved.
                  </Text>
                </Flex>

                <Flex w={"50%"} justifyContent={"space-evenly"}>
                  <Flex direction={"column"} gap={"10px"}>
                    <Heading fontSize={"sm"}>SHOP</Heading>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Products
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      About Us
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Our Blog
                    </Text>
                  </Flex>
                  <Flex direction={"column"} gap={"10px"}>
                    <Heading fontSize={"sm"}>INFO</Heading>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Orders and shipping
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      FAQ
                    </Text>
                  </Flex>
                  <Flex direction={"column"} gap={"10px"}>
                    <Heading fontSize={"sm"}>CONTACTS</Heading>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Instagram
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Facebook
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>


        {/* small screen  */}
        <Box
          display={['grid','grid','none','none']}
          w={"100%"}
          bgColor={"rgb(25,94,73)"}
          h={"50vh"}
          className="main_body4"
          id="footer"
        >
          <Box w={"100%"} margin={"auto"} h={"100vh"}>
          
            <Flex
              zIndex={"1000"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"50px 20px"}
              gap={"20px"}
            >
              <Heading fontSize={"30px"} color={"white"}>
                SUBSCRIBE TO OUR NEWSLETTER
              </Heading>
              <Text color={"white"} fontSize={"13px"}>
                {premjeet}
              </Text>
                <Input
                  color={"white"}
                  border={"none"}
                  borderBottom={"1px solid white"}
                  placeholder="YOUR EMAIL"
                  w={"100%"}
                  borderRadius={"0"}
                />
                <Button
                  borderRadius={"40px"}
                  w={"100%"}
                  color={"white"}
                  variant="outline"
                >
                  SUBSCRIBE
                </Button>
              <Box>
                <Flex gap={"10px"}>
                  <Checkbox />
                  <Text color={"rgb(82,146,126)"}>
                    By pressing the button you agree to our terms and conditions
                  </Text>
                </Flex>
              </Box>
            </Flex>

            <Box
              background={"white"}
              height={"10vh"}
              paddingLeft={'30px'}
              paddingRight={'30px'}
              w={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              margin={"auto"}
            >
                <Heading size={"xl"}>LET IT BEE.CO</Heading>

                <Flex w={"100%"} justifyContent={"space-between"}
                paddingTop={'10px'}
                >
                  <Flex direction={"column"} gap={"10px"}>
                    <Heading fontSize={"md"}>SHOP</Heading>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Products
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      About Us
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Our Blog
                    </Text>
                  </Flex>
                  <Flex direction={"column"} gap={"10px"}>
                    <Heading fontSize={"md"}>INFO</Heading>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Orders and shipping
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      FAQ
                    </Text>
                  </Flex>
                  <Flex direction={"column"} gap={"10px"}>
                    <Heading fontSize={"md"}>CONTACTS</Heading>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Instagram
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Facebook
                    </Text>
                  </Flex>
                </Flex>
              
            </Box>
          </Box>
        </Box>
    
    
    </>
    )
}
export default Footer