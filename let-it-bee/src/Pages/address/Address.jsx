
import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import AddressInfo from "./AddressInfo";
import CheckOut from "./CheckOut";
import Payment from "./Payment";
import PersonalInfo from "./PersonalInfo";
import Confirmation from "./Confimation";


const initialData = {
    address: "",
    city: "",
    potsal: "",
    district: "",
    state: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
    alternate: ""
}
const Address = () => {
    const [formData, setFormData] = useState(initialData);

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = (data) => {
        setFormData(data);

    };


    return (
        <Box className="mainContainer" >
            <Flex>
                <Box className="addressContainer"
                    w="60%"
                    bgGradient="linear(to-t, white, .500)"

                >
                    {step === 1 && (
                        <AddressInfo
                            onNext={handleNext}
                            formData={formData}
                            setFormData={setFormData}
                        />
                    )}
                    {step === 2 && (
                        <PersonalInfo
                            onNext={handleNext}
                            onPrevious={handlePrevious}
                            formData={formData}
                            setFormData={setFormData}
                            handleSubmit={handleSubmit}
                        />
                    )}
                    {step === 3 && (
                        <Confirmation
                            onNext={handleNext}
                            onPrevious={handlePrevious}
                            formData={formData}
                        />
                    )}
                    {step === 4 && (
                        <Payment
                            onPrevious={handlePrevious}
                        />
                    )}
                </Box>
                <Box className="checkoutContainer"
                    bgGradient="linear(to-t, #185E49, teal.500)"
                    color="white"
                    w="40%"
                    // width={[100, 1 / 2, 1 / 4]}
                    width={[
                        '0%', // 0-30em
                        '0%', // 30em-48em
                        '0%', // 48em-62em
                        '40%', // 62em+
                    ]}
                >
                    <CheckOut />
                </Box>
            </Flex>
        </Box>
    )
}
export default Address;
