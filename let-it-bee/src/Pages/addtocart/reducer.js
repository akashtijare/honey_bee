export const reducer=(state,action)=>{
    if(action.type==="REMOVE_ITEM"){
        return {
            ...state,
            items:state.items.filter((curEle)=>{
                return curEle.id !== action.payload;
            }),
        };
    }
    if(action.type==="CLEAR_CART"){
        return {
            ...state,items:[]
           
        };
    }
    if(action.type==="INCREMENT"){
        let updatedcart=state.items.map((curEle)=>{
            if(curEle.id===action.payload){
                return {...curEle, quantity: curEle.quantity + 1}
            }
            return curEle;
        });
        return {...state,items:updatedcart}
    }
    if(action.type==="DECREMENT"){
        const updatecart=state.items.map((curEle)=>{
            if(curEle.id===action.payload){
                return {...curEle, quantity: curEle.quantity - 1}
            }
            return curEle;
        })
        .filter((curEle)=>{
            return curEle.quantity !==0;
        });
        return {...state,items:updatecart}
    }
    if(action.type  === "GET_TOTAL"){
        let {totalItem,totalAmount}=state.items.reduce((accum,curVal)=>{
            let {cost,quantity}=curVal;
            let updatetotalamount= cost * quantity;
            accum.totalAmount += updatetotalamount;

            accum.totalItem += quantity;
            return accum;
        },
        {
            totalItem:0,
            totalAmount:0,
        }
        );
        return {...state,totalItem,totalAmount};
    }
    
    return state;
}