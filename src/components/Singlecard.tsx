import { useEffect } from "react";

import { Card } from "react-bootstrap"
import { Cardtype } from "../types/card";

type Cardprops = {
   card: Cardtype
}


export const Singlecard = ({card}:Cardprops): JSX.Element => {

    useEffect(() => {
        console.log('Card', card);
    },[card])

    if(!card) {
        return <div>loading</div>
    }

    return (   
       <div className="singlecard shadow-lg"> 
        <div className="turnaround">   
            <div className="front">
                <Card className="card cardfront">
                    <Card.Body> 
                        <Card.Title>{card.front}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <div className="back">
                <Card className="card cardback">
                    <Card.Body> 
                        <Card.Title>{card.back}</Card.Title>
                    </Card.Body>
                </Card>
            </div>           
        </div> 
        </div>  
    );

}
