import { useParams } from "react-router-dom";
import { useLanguage } from "../hooks/uselanguage";
import { Profilecontext } from "../context.ts";
import { useContext } from "react";



export function Persentage() {
    const contex = useContext(Profilecontext)
    const paramsee = useParams();
const { languages, setLanguages } = useLanguage(
    paramsee.username!,
    paramsee.Repotab! ,
    contex.token)
    const entries = Object.entries(languages)
    console.log("langggg" , entries)
   /*  interface languages{
        entries : "entries",
        map : "map"
    } */
 let sum = 0  
const Sum =  entries.map((itm)=>{
 

 sum +=itm[1]
 console.log("summmm" , sum)
 return sum

 
})  
    


return (
    <div className="flex gap-[0.2px] border-2 solid  h-[0.7rem] w-[15.5rem] rounded-xl mt-[2rem]">
        { entries.map((itm,index)=>{
            /* console.log("itmm" , itm[0])
           console.log("itmmee" , itm[1])
           console.log("itmmii" , entries[0][1])
           console.log("itmmii" , entries[1][1])
           console.log("suuuum" , (((itm[1]/sum)*100).toFixed(2)))  */
           /* `${w-[(((itm[1]/sum)*100).toFixed(2))%]}  ` */
           return (
       <>
               {entries[0][0]===itm[0]? <div key = {index} className={`w-[${(((itm[1]/sum)*100).toFixed(2))+"%"}] bg-[#4338ca] border-2  solid h-[0.7rem] rounded-s-xl`} >
               
               </div>:undefined}
               {entries[1] && entries[1][0]===itm[0]? <div key = {index} className={`w-[${(((itm[1]/sum)*100).toFixed(2))+"%"}] bg-[#6b21a8] border-2  solid h-[0.7rem] `} >
               
               </div>:""}
               {entries[2] && entries[2][0]===itm[0]? <div key = {index} className={`w-[${(((itm[1]/sum)*100).toFixed(2))+"%"}] bg-[#e11d48] border-2  solid h-[0.7rem] rounded-e-xl`} >
               
               </div>:""}
      </>
     
            
           )
           })} 
              
    </div>
    
        
)}