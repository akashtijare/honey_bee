import { Input,Stack,Button,Box, Heading,ButtonGroup,Flex, useToast} from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";




const AddressInfo = ({onNext , formData ,setFormData}) =>{

    const toast=useToast();

    const handleNext = () =>{
        if (formData.address.length === 0 ||
            formData.city.length === 0 ||
            formData.postal.length ===0 ||
            formData.district.length === 0 ||
            formData.state.length === 0 
            )
            {
              toast({
                title: 'PLEASE ENTER ALL THE FIELDS.',
                status: 'error',
                position:'top',
                duration: 3000,
                isClosable: true,
              })

            }
            else{
                onNext();

            }
       
        console.log("hii")
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    

    return(
        <Box  >
           <Stack spacing='45px'> 
            <Flex>
                <Box h={"50px"} cursor={'pointer'} marginLeft="22%" ><Heading size="lg"><span style={{color:" #185E49"}}>LET IT BEE</span>.CO</Heading></Box>
            </Flex>
           
            <Stack spacing='15px'>
            <Flex>
                <Box   marginLeft="22%">
                    <Heading size='s'> <span style={{color:" #185E49"}}>DILIVERY </span>/ <span>DETAILS  </span>/<span> CONFIRMATION & PAYMENT </span></Heading>
                </Box>
            </Flex>

            <Box >
                <Box   w='60%' margin='auto'>
                <Stack spacing='120px'>
                    
                    <Box>
                        <Stack spacing={3} p={4}>
                            <Input variant='flushed' placeholder="ADDRESS" size='md' marginTop="8px"  name="address" onChange={handleChange} value={formData.address || ""} />
                            <Input variant='flushed' placeholder="CITY NAME" size='md'  marginTop="8px" name="city"onChange={handleChange} value={formData.city || ""}/>
                            <Input variant='flushed' placeholder="POSTAL CODE" size='md'marginTop="8px" name="postal" onChange={handleChange} value={formData.postal || ""} />
                            <Input variant='flushed' placeholder="DISTRICT" size='md'marginTop="8px" name="district" onChange={handleChange} value={formData.district || ""} />
                            <Input variant='flushed' placeholder="STATE" size='md'marginTop="8px" name="state" onChange={handleChange} value={formData.state || ""}  />
                            
                        </Stack>
                    </Box>
                    <Box  spacing={10} marginBottom="50px">
                        <ButtonGroup gap='10'>
                            <Button colorScheme='teal' pl="7" pr="7"   borderRadius='20px' leftIcon={< BsArrowLeft/>}  variant='outline' >BACK</Button>
                            <Button colorScheme='teal' pl="20" pr="20"  borderRadius='20px'  _hover={{ bg: '#F05A1F' }} onClick={handleNext}>PROCEED</Button>
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