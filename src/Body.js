import React,{useState} from "react";
import { ReactDOM } from "react-dom/client";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Body =()=>{
    const [name,setName] = useState("");
    const [cardNumber,setCardNumber] = useState("");
    const [month,setMonth] = useState("");
    const [year,setYear] = useState("");
    const [cvc,setCvc] = useState("");
    const [validationError,setValidationError] = useState(false);

    const [sendName,setSendName] = useState("");
    const [sendNumber,setSendNumber] = useState("");
    const [sendMonth,setSendMonth] = useState("");
    const [sendYear,setSendYear] = useState("");
    const [sendCvc,setSendCvc] = useState("");

    const [errors,setErrors] = useState({
      name:"",
      cardNumber: "",
      date:"",
      cvc:"",
    });
    let newErrors = {};
    let flag= false;
    const handleSubmit = (e)=>{
        let pattern = /[a-zA-Z]/;
        e.preventDefault();
        
        
        //validation for name
        if(name.trim() ===""){
          newErrors.name = 'Card holder name required';
          setValidationError(true);
        } else if(/\d/.test(name)){
          newErrors.name = 'Card holder name cannot take numbers';
          setValidationError(true);
        }
        //validation for number
        if(cardNumber.trim() ===""){
          newErrors.cardNumber="Card number required";
          setValidationError(true);
        } else if(pattern.test(cardNumber)){
          newErrors.cardNumber = "Card number should be numeric";
          setValidationError(true);
        }
        //validation for month
        if(month.trim() ===""){
          newErrors.date="Month required";
        } else if(year.trim()==""){
          newErrors.date="Year required";
        }
        else if(pattern.test(month)){
            newErrors.date ="Month must be numeric";
        }
        else if(pattern.test(year)){
            newErrors.date = "Year must be numeric";
        }
        else if(year<23 || (month >12 && month<1)){
          newErrors.date ="Invalid year or month";
        }
        //validation for cvc
        if(cvc.trim() === ""){
          newErrors.cvc = "CVC required";
        }
        else if(pattern.test(cvc)){
          newErrors.cvc ="CVC must be numeric";
        } 
        else if(cvc.length > 3){
          newErrors.cvc="CVC must be 3 digit";
        }
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0){
        setSendName(name.toUpperCase());
        setSendNumber(cardNumber.replace(/(\d{4})/g, '$1 ').trim());
        setSendMonth(month);
        setSendYear(year);
        setSendCvc(cvc);
        }
    }
  return(
    <div  className="container">
      <div className="left"></div>
      <div className="right">
        <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="card-details">
          <label for="name" className="title">CARD HOLDER NAME</label>
          <input
          type="text" className="inputName" placeholder="e.g. Jane Appleseed" value={name} onChange={(e)=>{setName(e.target.value)}}>
          </input> <br/>
          <div className="error">{errors.name}</div>
          <label for="cc-number" className="title">CARD NUMBER</label>
          <input 
          type="numeric" className="inputNumber" placeholder="e.g. 1234 5678 9123 0000"  value={cardNumber} onChange={(e)=>{setCardNumber(e.target.value)}}></input> <br/>
          <div className="error">{errors.cardNumber}</div>
          </div>
          <div className="grouped">
          <div className="exp-date">
          <label className="title">EXP. DATE (MM/YY)</label>
          <input 
          type="numeric" className="inputMonth" placeholder="MM" value={month} onChange={(e)=>{setMonth(e.target.value)}}></input>
          <input 
          type="numeric" className="inputYear" placeholder="YY" value={year} onChange={(e)=>{setYear(e.target.value)}}></input>
          <div className="error">{errors.date}</div>
          </div> 
          <div className="cvc">
          <label className="title">CVC</label>
          <input 
          type="numeric" className="inputCvc" placeholder="e.g. 123" value={cvc} onChange={(e)=>{setCvc(e.target.value)}}></input>
          <div className="error">{errors.cvc}</div>
          </div>
          </div>
          <button type="submit" className="buttonConfirm">Confirm</button>
          <CardFront 
          name = {sendName} number ={sendNumber} month={sendMonth} year={sendYear}/>
          <CardBack cvc={sendCvc}/>
        </form>
        </div>
      </div>
    </div>
    )
};

export default Body;