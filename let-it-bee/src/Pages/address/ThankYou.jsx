import { Box, Button, ButtonGroup, Flex, Heading, Image, Img, Stack, Text } from "@chakra-ui/react";

const ThankYou = () => {
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
                                <Box pos="absolute" left="35%" top="30% " width="40%" ><Heading fontFamily="cursive" color="#185E49"> We have started processing Your Sweet Order !!</Heading></Box>

                                <Box >
                                    <Box w='60%' margin='auto'>
                                        <Stack spacing='300px'>

                                            <Box>

                                            </Box>
                                            <Flex>
                                            <Box spacing={10} marginLeft="10px">
                                                <ButtonGroup gap='10'>
                                                    <Button colorScheme='teal' pl="12" pr="12" borderRadius='20px' variant='outline' >BACK TO HOME</Button>

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



                <Box className="imageContainer"  w="40%">
                <Image
                    src='https://th.bing.com/th/id/OIP.iHX1jb5vvLj7pScdLh1lWgAAAA?pid=ImgDet&rs=1'
                    alt='honey'
                    width="100%"
                    height="70%"
                />
                </Box>
            </Flex>
        </Box>
    )
}
export default ThankYou;