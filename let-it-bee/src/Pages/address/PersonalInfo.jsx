import { Input,Stack,Button,Box, Heading,ButtonGroup , Flex, useToast} from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";


const PersonalInfo = ({onNext,onPrevious,formData,setFormData,handleSubmit}) =>{

    const toast=useToast();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleNext = () =>{
        if (formData.name.length === 0 ||
            formData.lastname.length === 0 ||
            formData.email.length ===0 ||
            formData.phone.length === 0 
            // formData.alternate.length === 0 
            )
            {
              toast({
                title: 'PLEASE ENTER ALL THE FIELDS.',
                status: 'error',
                duration: 3000,
                isClosable: true,
              })

            }
            else{
                onNext();
                handleSubmit(formData)
            }
       
       
        console.log("hii")
    }

    return(
        <Box  >
           <Stack spacing='45px'> 
            <Flex>
                <Box h={"50px"} cursor={'pointer'} marginLeft="22%" ><Heading size="lg"><span style={{color:" #185E49"}}>LET IT BEE</span>.CO</Heading></Box>
            </Flex>
           
            <Stack spacing='15px'>
            <Flex>
                <Box   marginLeft="22%">
                    <Heading size='s'> <span>DILIVERY </span>/ <span style={{color:" #185E49"}}>DETAILS  </span>/<span> CONFIRMATION & PAYMENT </span></Heading>
                </Box>
            </Flex>

            <Box >
                <Box   w='60%' margin='auto'>
                <Stack spacing='120px'>
                    <Box>
                        <Stack spacing={3} p={4}>
                            <Input variant='flushed' placeholder="NAME" size='md' marginTop="8px"   name="name" onChange={handleChange} value={formData.name || ""}/>
                            <Input variant='flushed' placeholder="LAST NAME" size='md'marginTop="8px" name="lastname" onChange={handleChange} value={formData.lastname || ""} />
                            <Input variant='flushed' placeholder="E-MAIL" size='md'  marginTop="8px" name="email" onChange={handleChange} value={formData.email || ""}/>
                            <Input variant='flushed' placeholder="PHONE NO" size='md'marginTop="8px" name="phone" onChange={handleChange} value={formData.phone || ""} />   
                            <Input variant='flushed' placeholder="ALTERNATE PHONE NO" size='md'marginTop="8px" name="alternate"  onChange={handleChange} value={formData.alternate || ""}/> 
                        </Stack>
                    </Box>
                    <Box  spacing={10} marginBottom="50px">
                        <ButtonGroup gap='10'>
                            <Button colorScheme='teal' pl="7" pr="7"   borderRadius='20px' leftIcon={< BsArrowLeft/>}  variant='outline'onClick={()=>onPrevious()} >BACK</Button>
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
export default PersonalInfo;
