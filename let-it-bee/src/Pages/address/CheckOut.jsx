import { Box ,Flex,Spacer,Text} from "@chakra-ui/react"
const CheckOut = () =>{

    let products =[
        {
          "id": 1,
          "image": "https://drive.google.com/uc?export=view&id=1RLonM1c5hYI3-K3r8Zr_9OXNFNPwCQeC",
          "name": "Bee Bread",
          "weight": "80 Gram",
          "description": "Bee bread is a small pellet containing pollen, along with nectar or honey. The exact bee bread composition varies depending on the plants the bees have foraged from. Often confused with bee pollen, bee bread is a fermented version, which is regarded as having a higher nutritional value. It is the bee’s saliva, containing a vast range of probiotic bacteria and yeast, which kicks off the fermentation process and increases the bioavailability of the super food.",
          "reviews": "f",
          "cost": "₹249.00",
          "category": "bars"
        },
        {
          "id": 2,
          "image": "https://drive.google.com/uc?export=view&id=1xgZGblXFw0CydohBWO6K_ZAASG7eixBh",
          "name": "Bee Propolis",
          "weight": "900 Grams",
          "description": "Bees produce a compound called propolis from the sap on needle-leaved trees or evergreens. It is used as a sealant for unwanted open spaces in the hive.",
          "reviews": "f",
          "cost": "₹2,400.00",
          "category": "pollen"
        },
        {
          "id": 3,
          "image": "https://drive.google.com/uc?export=view&id=1g4szzB0e1QSTBtzqXvTj-j8dgLNqlt-s",
          "name": "Honey Bee Wax",
          "weight": "900 Grams",
          "description": "Natural Beeswax is Produced by the noble worker bee, beeswax is the substance you’ll find lining the structure of the honeycomb. Bees are vital to the health of our ecosystem, as they are responsible for sustaining one-third of the food we eat. An added bonus Beeswax has amazing skin health properties!",
          "reviews": "f",
          "cost": "₹550.00",
          "category": "bars"
        },
    ]
    return(
        // <Box border="1px solid white" margin={1} w={"100%"} h={"100%"}>
            <div style={{display:"flex", flexDirection:"column" , justifyContent:"space-between" , height:"100%"}}>
                <div >
                <Box  margin={2}>
                    <Flex>
                        <Box margin={4} >
                            <Text >{`YOUR ORDER ${products.length}`}</Text>
                        </Box>
                    
                    </Flex>
                    <hr />
                    <Box  margin={6}>
                        {products.map((ele)=>
                        <div>
                            <div  style={{display:"flex" ,gap:"40px"}}>
                                <div  style={{width:"20%" , padding:"8px"}}>
                                    <img src={ele.image} alt={ele.name} style={{width:"100%"}}/>
                                </div>
                                
                                <div style={{display:"flex",flexDirection:"column",gap:"30px",padding:"8px",width:"180px"}}>
                                    <div style={{display:"flex"}}>
                                        <h2>{ele.name}</h2>
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <h3>{ele.cost}</h3>
                                    </div>
                                </div>
                                    
                                <div style={{padding:"8px", marginLeft:"80px"}}> 
                                    <h3>PCS</h3>
                                </div>
                            </div>
                            <hr />
                        </div>
                        )}
                    </Box>
                </Box>
                </div>
                
                <div >
                <hr />
                    <Box margin={2}>
                        <Flex>
                            <Box margin={4}>
                                <Text>SUBTOTAL</Text>
                            </Box>
                            <Spacer/>
                            <Box margin={4}>
                                <Text>{`₹`}</Text>
                            </Box>
                        </Flex>
                        <hr />
                        <Flex >
                            <Box margin={4}>
                                <Text>DILIVERY</Text>
                            </Box>
                            <Spacer/>
                            <Box margin={4}>
                                 <Text>{`₹ 0`}</Text>
                            </Box>
                        </Flex>
                        <hr />
                        <Flex>
                            <Box margin={2}>
                                <Text  fontSize='5xl'>TOTAL</Text>
                            </Box>
                            <Spacer/>
                            <Box margin={2}>
                                <Text  fontSize='5xl'>{`₹`}</Text>
                            </Box>
                        </Flex>
                    </Box>
                </div>
            </div>
        // </Box>
    )
}
export default CheckOut