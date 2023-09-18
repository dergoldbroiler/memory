import { Cardtype } from "../types/card";
export  const setCardElements= (cardcount: number) => {
    return new Promise<Cardtype[]>((resolve, reject) => {
        let cardElements:Cardtype[] = [];

        for(let i = 0; i < cardcount; i++) {
            let singleCard:Cardtype = {
                id: i,
                front: `Karte ${i}`,
                back: `Rückseite ${i}`,
                played: false,
            }
            cardElements.push(singleCard);
        }

        if(cardElements.length === cardcount) {
            resolve(cardElements);
        } else {
            reject('Something went wrong on card creation');
        }
    });  
};
