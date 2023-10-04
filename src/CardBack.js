import {useState,useEffect} from 'react';
const CardBack =(props)=>{
    const {cvc} = props;
    const [cardCvc,setCardCvc] = useState(cvc || "00");
    useEffect(()=>{
        setCardCvc(cvc || "00");
    },[cvc])
    return(
        <div className="card-container-back">
            <div className="black-tape"></div>
            <div className="cvc-div"><div className='cvc-number'>{cvc ||"000"}</div></div>
            <div className="shimmer">
                <div className="line-one"></div>
                <div className="line-two"></div>
                <div className="line-three"></div>
                <div className="line-four"></div>
                <div className="line-five"></div>
                <div className="line-six"></div>
                <div className="line-seven"></div>
                <div className="line-eight"></div>
                <div className="line-nine"></div>
                <div className="line-ten"></div>
                <div className="line-eleven"></div>
                <div className="line-twelve"></div>
            </div>
        </div>
    )
}

export default CardBack;