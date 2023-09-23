import { useEffect, useState } from "react";
import { Cardtype } from "../types/card";
import { setCardElements } from "../services/services";
import { Cardstacks } from "./Cardstacks";
import { shuffleArray } from "../services/services";
type CanvasProps = {
    cardcount: number;
}

let stackState: Cardtype[] = [];
//stackState['stack1'] = 'stack1';




export const Canvas = ({cardcount}: CanvasProps) => {

    const [cards, setCards] = useState<any>([]);
    const [isLoading, setLoading] = useState<Boolean>(false);
    const [currentCard, setCurrentCard] = useState<Number>(0);
    const [played, setPlayed] = useState({
        stack1: [],
        stack2: [],
    });

    useEffect(() => {
    
       setCardElements(cardcount).
       then(
        cards => 
        { 
          
          !isLoading && setCards(cards); 
          !isLoading && console.log('cards', cards);
           // console.log('cards', cards);
          setLoading(true);
        }
       );
    },[cards]);

    /*handle click
     - 
     
     */


   if(!isLoading && cards.length === 0) {
         return <div>loading</div>
   }

   const handleClick = (card: Cardtype) => {
    console.log('card', card);

    if(currentCard != 0){
      console.log('currentCard', currentCard);
      //compare cards
      if(currentCard === card.id){
        alert('Match!');      
        setCurrentCard(0);
      } else {
        alert('No match!');
        setCurrentCard(0);
      }
    } else {
      setCurrentCard(card.id);
    }
   }
   
   return  (
    <div>
        <Cardstacks clickhandler={handleClick} cards={cards} />   
   </div> 
   )

};