import { useParams } from "react-router-dom";
import { useLanguage } from "../hooks/uselanguage";



export function Persentage() {
    const paramsee = useParams();
const { languages, setLanguages } = useLanguage(
    paramsee.username!,
    paramsee.Repotab! )
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
    <div>
        { entries.map((itm,index)=>{
           return (
            <div className="border-2 solid bg-green-200 h-[1rem] w-[15rem] rounded-lg" >
                <div className="`${w-[(((itm[1]/sum)*100).toFixed(2))?"(((itm[1]/sum)*100).toFixed(2))]}` >

                </div>
               
                
            </div>
           )  
        })}
    </div>
)

}