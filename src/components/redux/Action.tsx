import { Auth_val } from "./Constant";

interface actionprops{

}

export const Authentication=(item:actionprops)=>{
    return{
        type:Auth_val,
        data:item
    }
}