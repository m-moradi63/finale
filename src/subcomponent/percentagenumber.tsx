import { useParams } from "react-router-dom";
import { useLanguage } from "../hooks/uselanguage";
import { Profilecontext } from "../context.ts";
import { useContext } from "react";



export function PersentageNUM() {
    const contex = useContext(Profilecontext)
    const paramsee = useParams();
const { languages, setLanguages } = useLanguage(
    paramsee.username!,
    paramsee.Repotab! ,
    contex.token )
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
    <div className=" mt-[2rem]">
        { entries.map((itm,index)=>{
            /* console.log("itmm" , itm[0])
           console.log("itmmee" , itm[1])
           console.log("itmmii" , entries[0][1])
           console.log("itmmii" , entries[1][1])
           console.log("suuuum" , (((itm[1]/sum)*100).toFixed(2)))  */
           /* `${w-[(((itm[1]/sum)*100).toFixed(2))%]}  ` */
           return (
       <>
               {entries[0][0]===itm[0]? <div key = {index} className="text-[#4338ca]" >
               {itm[0]}:{(((itm[1]/sum)*100).toFixed(0))+"%"}
               </div>:undefined}
               {entries[1] && entries[1][0]===itm[0]? <div key = {index} className="text-[#6b21a8]" >
               {itm[0]}:{(((itm[1]/sum)*100).toFixed(0))+"%"}
               </div>:undefined}
               {entries[2] && entries[2][0]===itm[0]?<div key = {index} className="text-[#e11d48]" >
               {itm[0]}:{(((itm[1]/sum)*100).toFixed(0))+"%"}
               </div>:undefined}
      </>
     
            
           )
           })} 
              
    </div>
    
        
)}