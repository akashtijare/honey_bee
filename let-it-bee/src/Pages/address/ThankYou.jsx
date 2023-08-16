import { Box, Button, ButtonGroup, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import logo from "./ThankYou_Image.png"
import { useNavigate } from "react-router-dom";

const ThankYou = () => {

    const navigate = useNavigate();
    return (
        <Box className="mainContainer" >
            <Flex>
                <Box className="thankYouContainer" w="60%" bgGradient="linear(to-t, white, .500)">
                    <Box  >
                        <Stack spacing='45px'>
                            <Flex>
                                <Box h={"50px"} cursor={'pointer'} marginLeft="22%" ><Heading size="lg"><span style={{ color: " #185E49" }}>LET IT BEE</span>.CO</Heading></Box>
                            </Flex>

                            <Stack spacing='20px'>
                                <Flex >
                                    <Box marginLeft="22%">
                                        <Heading size="lg"> THANK YOU FOR YOUR ORDER!</Heading>

                                    </Box>
                                </Flex>
                                <Flex >
                                    <Box marginLeft="22%">
                                        <Text size="s"> CHECK YOUR MAIL</Text>
                                    </Box>
                                </Flex>
                                <Box pos="absolute" left="30%" top="40% " width="40%" ><Heading fontFamily="cursive" color="teal" size="lg"> We have started processing Your Sweet Order !!</Heading></Box>

                                <Box >
                                    <Box w='60%' margin='auto'>
                                        <Stack spacing='300px'>

                                            <Box>

                                            </Box>
                                            <Flex>
                                            <Box spacing={10} marginLeft="10px">
                                                <ButtonGroup gap='10'>
                                                <Button colorScheme='teal' pl="20" pr="20" borderRadius='20px' _hover={{ bg: '#F05A1F' }} onClick={()=> navigate("/")}>BACK TO HOME</Button>

                                                </ButtonGroup>
                                            </Box>
                                            </Flex>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>



                <Box className="imageContainer"  w="40%" h="700px"  bgGradient="linear(to-t, #96C1E4, teal.500)">
                  <div  style={{width:"80%", margin:"80px"}} >
                    <img style={{width:"100%"}} src={logo} alt="honey"/>
                  </div>
                </Box>
            </Flex>
        </Box>
    )
}
export default ThankYou;