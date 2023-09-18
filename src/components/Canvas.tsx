import { useEffect, useState } from "react";
import { Cardtype } from "../types/card";
import { setCardElements } from "../services/services";

import { Singlecard } from "./Singlecard";


type CanvasProps = {
    cardcount: number;
}

let stackState: Cardtype[] = [];
//stackState['stack1'] = 'stack1';




export const Canvas = ({cardcount}: CanvasProps) => {

    const [cards, setCards] = useState<Cardtype[]>([]);
    const [isLoading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
       setCardElements(cardcount).
       then(
        cards => 
        { setCards(cards); console.log(cards); setLoading(true);}
       );
    }, [isLoading]);

    /*handle click
     - 
     
     */


   if(!isLoading && cards.length === 0) {
         return <div>loading</div>
   }
   
   return  <div>

    <Singlecard card={cards[0]}/>
   </div> ;

};