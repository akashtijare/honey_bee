import { Stack, Button, Box, Heading, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";



const Confirmation = ({ formData, onNext, onPrevious }) => {
    console.log(formData)
    return (
        <Box  >
            <Stack spacing='45px'>
                <Flex>
                    <Box h={"50px"} cursor={'pointer'} marginLeft="22%" ><Heading size="lg"><span style={{ color: " #185E49" }}>LET IT BEE</span>.CO</Heading></Box>
                </Flex>

                <Stack spacing='45px'>
                    <Flex>
                        <Box marginLeft="22%">
                            <Heading size='s'> <span>DILIVERY </span>/ <span>DETAILS  </span>/<span style={{ color: " #185E49" }}> CONFIRMATION & PAYMENT </span></Heading>
                        </Box>
                    </Flex>

                    <Box >
                        <Box w='60%' marginLeft='21.5%'>
                            <Stack spacing='140px'>
                                <Flex alignItems="right">
                                    <Box>
                                        <Stack spacing={4} >
                                            <Flex >
                                                <Text color="grey">NAME :</Text>
                                                {/* <Flex> */}
                                                <Box marginLeft="180px">
                                                    <Text color="teal">{`${formData.name}  ${formData.lastname}`}</Text>
                                                </Box>
                                            </Flex>
                                            <hr />
                                            <Flex>
                                                <Text color="grey">EMAIL :</Text>
                                                <Box marginLeft="180px">
                                                    <Text color="teal">{`${formData.email}`}</Text>
                                                </Box>
                                            </Flex>
                                            <hr />
                                            <Flex gap="40px">
                                                <Text color="grey">PHONE NO :</Text>
                                                <Box marginLeft="105px">
                                                    <Text color="teal">{`${formData.phone}`}</Text>
                                                </Box>
                                            </Flex>

                                            <hr />
                                            <Flex gap="40px">
                                                <Text color="grey">ADDRESS :</Text>
                                                <Box marginLeft="120px">
                                                    <Text color="teal">{`${formData.address} ${formData.city} ${formData.postal}`}</Text>
                                                </Box>
                                            </Flex>
                                            <hr />
                                            <Flex gap="40px">
                                                <Text color="grey">STATE :</Text>
                                                <Box marginLeft="145px">
                                                    <Text color="teal">{`${formData.state}`}</Text>
                                                </Box>
                                            </Flex>
                                            <hr />

                                        </Stack>

                                    </Box>
                                </Flex>

                                <Box spacing={10} marginBottom="50px">
                                    <ButtonGroup gap='10'>
                                        <Button colorScheme='teal' pl="7" pr="7" borderRadius='20px' leftIcon={< BsArrowLeft />} variant='outline' onClick={() => onPrevious()} >BACK</Button>
                                        <Button colorScheme='teal' pl="20" pr="20" borderRadius='20px' _hover={{ bg: '#F05A1F' }} onClick={() => onNext()}> PROCEED </Button >
                                    </ButtonGroup>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}
export default Confirmation;