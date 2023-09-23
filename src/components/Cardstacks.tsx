import { Singlestack } from "./Singlestack"
import { Cardtype } from "../types/card"
import { useEffect } from "react"

type Cardstacksprops = {
    cards: Array<Cardtype[]>,
    clickhandler: (card: Cardtype) => void
 }
 

export const Cardstacks = ({cards, clickhandler}: Cardstacksprops) => {

   useEffect(() => {
         console.log('cardssss', cards);
    },[cards])
    if(!cards) {
        return <div>loading</div>
    }
    return (
        <>
            <Singlestack clickhandler={clickhandler} cards={cards[0]} name="Reihe 1"/>
            <Singlestack clickhandler={clickhandler} cards={cards[1]} name="Reihe 2"/>
        </>
    )
}