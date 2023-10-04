import {useState,useEffect} from 'react';

const CardFront = (props)=>{
    const {name,number,month,year} = props;
    const [personName,setPersonName] = useState(name || "sumit");
    const [cardNumber,setCardNumber] = useState(number || "0000 0000 0000 0000");
    const [expMonth,setExpMonth] = useState(month ||"00");
    const [expYear,setExpYear] = useState(year || "00");

    useEffect(()=>{
        setPersonName(name ||"Jane Appleseed");
    },[name]);
    useEffect(()=>{
        setCardNumber(number || "0000 0000 0000 0000");
    },[number])
    useEffect(()=>{
        setExpMonth(month || "00");
    },[month])
    useEffect(()=>{
        setExpYear(year || "00");
    },[year])
    return(
        <div className="card-container-front">
            <div className="circle"></div>
            <div className="circle-small"></div>
            <div className="card-number-container">
                <div className="card-number">{cardNumber}</div>
            </div>
            <div className="div-name">{personName}</div>
            {console.log(name)};
            <div className="div-date"><div className="div-month">{expMonth}</div>
            /
            <div className="div-year">{expYear}</div>
            </div>
            <div className="ellipse"></div>
            <div className="ellipseOne"></div>
            <div className="ellipseTwo"></div>
            <div className="ellipseThree"></div>
        </div>
    )
}

export default CardFront; 