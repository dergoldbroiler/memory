import { Cardtype } from "../types/card";
export  const setCardElements = (cardcount: number) => {
    return new Promise<Array<Cardtype[]>>((resolve, reject) => {
        let cardElements:Cardtype[] = [];
        let cardElements2:Cardtype[] = [];

        for(let i = 1; i <= cardcount; i++) {
            let singleCard:Cardtype = {
                id: i,
                front: `Karte ${i}`,
                back: `Rückseite ${i}`,
                played: false,
            }
            cardElements.push(singleCard);
        }
        for(let i = 1; i <= cardcount; i++) {
            let singleCard:Cardtype = {
                id: i,
                front: `Karte ${i}`,
                back: `Rückseite ${i}`,
                played: false,
            }
            cardElements2.push(singleCard);
        }
        if(cardElements.length === cardcount) {
            
            let array1 = cardElements;
            let array2 = shuffleArray(cardElements2.reverse());
            
            resolve([array1, array2]);
            
        } else {
            reject('Something went wrong on card creation');
        }
    });  
};


export const  shuffleArray = (array:any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  export const  shuffleArray2 = (array:any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

