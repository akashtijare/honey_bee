import { Text, Box, Heading, Flex, Badge, Stack, Center } from "@chakra-ui/react"
import { BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { HamburgerIcon } from "@chakra-ui/icons"
import React, { useState } from 'react';
import { ScrollToAboutUs } from "../Pages/Home"
import { ScrollToBlog } from "../Pages/Home"

const Navbar = () => {

    const navigate=useNavigate()
    const {cartItems}=useSelector((store)=>store.cart)

    const breakpoints = createBreakpoints({
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
    })
    const [open ,setOpen ] = React.useState(false);

    return <>
        <Box display={['none', 'none', 'grid', 'grid']} border={"2px solid black"} style={{ width: "100%" }} >

            <Text style={{ textAlign: "center", background: "#185E49", color: "white", width: "100%" }}>Free shipping on orders over 500 rupees</Text>

            <Flex style={{ justifyContent: "space-evenly", width: "80%", margin: "0px auto" }}>
                <Box borderLeft={"2px solid black"} borderRight={"2px solid black"} paddingLeft={"10"} paddingRight={"10"} h={"50px"} cursor={'pointer'} onClick={() => navigate("/")} ><Heading>LET IT <span style={{ color: "#185E49" }} >BEE.CO</span></Heading></Box>
                <Box ></Box>

                <Flex gap="50px" alignItems={"center"} justifyContent={"center"}>
                    <Box pt={"13px"} borderLeft={"2px solid black"} borderRight={"2px solid black"} paddingLeft={"10"} paddingRight={"10"} h={"50px"} cursor={'pointer'} onClick={() => navigate("/product")} ><BsSearch style={{ fontSize: "25px" }} /></Box>
                    <Box pt='13px' h={"50px"} cursor={'pointer'} onClick={() => navigate("/login")}>
                        <VscAccount fontSize={'25px'} />
                    </Box>
                    <Stack direction={'row'} ><Box pt='13px' borderLeft={"2px solid black"} borderRight={"2px solid black"} px={"10"} h={"50px"} cursor={'pointer'}
                        onClick={() => navigate("/addtocart")}
                    ><BsCart2 style={{ fontSize: "25px" }} />
                        <Box ml="22px " mt={'-30px'} mb={'30px'} size={'xm'} px='-5px'

                        ><Badge px='10px' py='5px' fontSize="5px" color='white' borderRadius={"full"} background={"#F05A1F"}><Text fontSize={'10px'}>{cartItems.length}</Text></Badge></Box> </Box></Stack>
                </Flex>


            </Flex>
        </Box>
        <Box display={['grid', 'grid', 'none', 'none']}>
            <Text style={{ textAlign: "center", background: "#185E49", color: "white", width: "100%" }}>Free shipping on orders over 500 rupees</Text>
            <Flex alignItems={"center"} justifyContent={"space-between"} padding={'2'} border={"2px solid black"}>
                <Box onClick={() => { setOpen(!open) }} ><HamburgerIcon /></Box>
                <Box onClick={() => navigate("/")} ><Heading>LET IT <span style={{ color: "#185E49" }} >BEE.CO</span></Heading></Box>
                <Box onClick={() => navigate("/addtocart")}><BsCart2 /></Box>
            </Flex>

        </Box>
        {open ? (<Box
            w={"100vw"}
            bgColor={"grey.50"}
            zIndex={"20"}
            h={"65vh"}
        >
            <Flex
                flexDir={"column"}
                align={"center"}
            >
                <Box border={"2px solid black"}
                    w={'100%'}
                    padding={"20px"}
                    onClick={() => { navigate("/product"); setOpen(!open) }}
                    _hover={{ background: "#185E49", h: "11vh", fontSize: "30px", padding: "10px" }}
                >
                    <Text>PRODUCTS</Text>
                </Box>
                <Box border={"2px solid black"}
                    w={'100%'}
                    onClick={() => { navigate('/'); setOpen(!open) }}
                    _hover={{ background: "#F05A1F", h: "11vh", fontSize: "30px", padding: "10px" }}
                    padding={"20px"} ><Text>ABOUT US</Text>
                </Box>
                <Box border={"2px solid black"}
                    w={'100%'}
                    onClick={() => { navigate('/'); setOpen(!open) }}
                    _hover={{ background: "#F9AE05", h: "11vh", fontSize: "30px", padding: "10px" }}
                    padding={"20px"} ><Text>OUR BLOG</Text>
                </Box>
                <Box border={"2px solid black"}
                    w={'100%'}
                    onClick={() => { navigate("/"); setOpen(!open) }}
                    _hover={{ background: "#96C1E4", h: "11vh", fontSize: "30px", padding: "10px" }}
                    padding={"20px"} ><Text>CONTACTS</Text>
                </Box>
                <Box border={"2px solid black"}
                    w={'100%'}
                    onClick={() => { navigate("/login"); setOpen(!open) }}
                    _hover={{ background: "#185E49", h: "11vh", fontSize: "30px", padding: "10px" }}
                    padding={"20px"} ><Text>MY ACCOUNT</Text>
                </Box>
                <Box border={"2px solid black"}
                    w={'100%'}
                    onClick={() => { navigate("/product"); setOpen(!open) }}
                    _hover={{ background: "#F05A1F", h: "11vh", fontSize: "30px", padding: "10px" }}
                    padding={"20px"} ><Text>SEARCH</Text>
                </Box>

            </Flex>
        </Box>) : (<></>)}
    </>
}
export default Navbar;
