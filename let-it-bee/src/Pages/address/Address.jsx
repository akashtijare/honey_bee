import { Box, Flex } from "@chakra-ui/react";
import AddressInfo from "./AddressInfo";
import CheckOut from "./CheckOut";
import Payment from "./Payment";
import PersonalInfo from "./PersonalInfo";

const { useState } = require("react");

const Address = () => {

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    return (
        <Box className="mainContainer">
            <Flex>
                <Box className="addressContainer"
                  w="50%"
                  bgGradient="linear(to-t, white, .500)" 

                >
                    {step === 1 && (
                    <AddressInfo
                        onNext={handleNext}
                    />
                    )}
                    {step === 2 && (
                    <PersonalInfo
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                    )}
                    {step === 3 && (
                    <Payment
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                    )}
                </Box>
                <Box className="checkoutContainer"
                  bgGradient="linear(to-t, #185E49, teal.500)" 
                    color="white"
                    w="50%"
                >
                    <h1>akash</h1>
                </Box>
            </Flex>
        </Box>
    )
}
export default Address;
