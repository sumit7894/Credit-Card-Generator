import React,{useState} from "react";
import ReactDOM from "react-dom/client";


const Container =()=>{
  const [name,setName] = useState("");
  const [cardNumber,setCardNumber] = useState("");
  const [month,setMonth] = useState("");
  const [year,setYear] = useState("");
  const [cvc,setCvc] = useState("");
  const [errors,setErrors] = useState({
    name:"",
    cardNumber: "",
    date:"",
    cvc:"",
  });
  const handleSubmit = (e)=>{
    let pattern = /[a-zA-Z]/;
    e.preventDefault();
    let newErrors = {};
    //validation for name
    if(name.trim() ===""){
      newErrors.name = 'Card holder name required';
    } else if(/\d/.test(name)){
      newErrors.name = 'Card holder name cannot take numbers';
    }
    //validation for number
    if(cardNumber.trim() ===""){
      newErrors.cardNumber="Card number required";
    } else if(pattern.test(cardNumber)){
      newErrors.cardNumber = "Card number should be numeric";
    }
    //validation for month
    if(month.trim() ===""){
      newErrors.date="Month required";
    } else if(year.trim()==""){
      newErrors.date="Year required";
    }
    else if(month>12 && month<1){
      newErrors.date ="Invalid month";
    } 
    else if(year<23){
      newErrors.date ="Invalid year";
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
          type="text" className="inputName" placeholder="e.g. Jane Appleseed" value={name} onChange={(e)=>{setName(e.target.value)}}
           ></input> <br/>
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
        </form>
        </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);