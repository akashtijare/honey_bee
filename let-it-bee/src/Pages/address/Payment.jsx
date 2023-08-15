import {Input, Stack,Button,Box, Heading,ButtonGroup,Flex, ModalOverlay, useDisclosure, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text,useToast} from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {RingLoader} from "react-spinners"



const Payment = ({onPrevious}) =>{

    const navigate = useNavigate();

    const toast=useToast();

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)

      const handleConfirm = () =>{
        setOverlay(<OverlayOne />)
        onOpen();
        setTimeout(() => {
            onClose();
            toast({
                title: 'PAYMENT DONE',
                status: 'success',
                position:'top',
                duration: 3000,
                isClosable: true,
              })

             navigate("./thankyou")
            // window.open("./thankyou",'_self')

        }, 3000);
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
                 <Heading size='s'> <span >DILIVERY </span>/ <span>DETAILS  </span>/<span style={{color:" #185E49"}}> CONFIRMATION & PAYMENT </span></Heading>
             </Box>
         </Flex>

         <Box >
             <Box   w='60%' margin='auto'>
             <Stack spacing='240px'>
                 
                 <Box>
                     <Stack spacing={3} p={4}>
                         <Input variant='flushed' placeholder="ENTER CARD NUMBER" size='md' marginTop="8px"  />
                         <Flex gap={4}>
                         <Input variant='flushed' placeholder="EXPIRY DATE" size='md'  marginTop="8px" />
                         <Input variant='flushed' placeholder="CVV" size='md'marginTop="8px" />
                         </Flex>
                         <Input variant='flushed' placeholder="ACCOUNT HOLDER NAME" size='md'marginTop="8px" />
                     </Stack>
                 </Box>
                 <Box  spacing={10} marginBottom="50px">
                     <ButtonGroup gap='10'>
                         <Button colorScheme='teal' pl="7" pr="7"   borderRadius='20px' leftIcon={< BsArrowLeft/>}  variant='outline'onClick={()=>onPrevious()} >BACK</Button>
                         <Button colorScheme='teal' pl="20" pr="20"  borderRadius='20px'  _hover={{ bg: '#F05A1F' }} 
                           onClick={handleConfirm}>
                                        CONFIRM
                        </Button>
                        <Modal isCentered isOpen={isOpen} onClose={onClose}>
                            {overlay}
                            <ModalContent>
                            <ModalHeader>YOUR TRANSCATION BEING PROCEED</ModalHeader>
                            <ModalCloseButton />
                            <Box marginLeft="37%">
                                <ModalBody >
                                    <Text>WAIT...</Text>
                                    <br></br>
                                    <br></br>
                                    <RingLoader color="blue" />
                                </ModalBody>
                            </Box>
                            <ModalFooter>
                                <Text>Thank You !! </Text>
                                 {/* <Button onClick={onClose}>Close</Button> */}
                            </ModalFooter>
                            </ModalContent>
                        </Modal>

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
export default Payment;