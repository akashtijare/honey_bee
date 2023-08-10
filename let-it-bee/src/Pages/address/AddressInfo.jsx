import { Input,Stack,Button,Box, Heading,ButtonGroup,HStack, Flex} from "@chakra-ui/react";

const AddressInfo = () =>{
    return(
        <Box  >
           <Stack spacing='45px'> 
            <Flex>
                <Box h={"50px"} cursor={'pointer'} marginLeft="22%" ><Heading size="lg">LET IT BEE.CO</Heading></Box>
            </Flex>
           
            <Stack spacing='15px'>
            <Flex>
                <Box   marginLeft="22%">
                    <Heading size='s'>ADDRESS/CITY-NAME/POSTAL-CODE/DISTRICT/STATE</Heading>
                </Box>
            </Flex>

            <Box >
                <Box   w='60%' margin='auto'>
                <Stack spacing='120px'>
                    <Box>
                        <Stack spacing={3} p={4}>
                            <Input variant='flushed' placeholder="ADDRESS" size='md' />
                            <Input variant='flushed' placeholder="CITY NAME" size='md' />
                            <Input variant='flushed' placeholder="POSTAL CODE" size='md' />
                            <Input variant='flushed' placeholder="DISTRICT" size='md' />
                            <Input variant='flushed' placeholder="STATE" size='md' />
                            
                        </Stack>
                    </Box>
                    <Box  spacing={10} marginBottom="50px">
                    <ButtonGroup gap='10'>
                        <Button colorScheme='teal' >BACK</Button>
                        <Button colorScheme='teal' pl="14" pr="14">PROCEED</Button>
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
export default AddressInfo;