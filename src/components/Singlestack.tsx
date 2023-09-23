import { useState, useEffect } from "react"
import { Cardtype } from "../types/card"
import { shuffleArray } from "../services/services"
import { Singlecard } from "./Singlecard";

type Cardstacksprops = {
    cards: Cardtype[]
    name?: string,
    clickhandler: (card: Cardtype) => void
 }
 

export const Singlestack = ({cards, name, clickhandler}: Cardstacksprops) => {

    const [stack, setStack] = useState<Cardtype[]>(cards);


    return (
        <div className="container d-block h-auto">
            <div className="stack">
            {
                
                cards.map((card) => {
                    return (
                        <Singlecard card={card} key={card.id} clickhandler={clickhandler} />
                    )
                })
            }
            </div>
        </div>
    )

}