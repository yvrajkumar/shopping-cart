import React, {useState} from "react";
import './App.css';

function App() {
  const [tacoqty, setTacoqty] = useState(1);
  const [pantoqty, setPantoqty] = useState(1);
  const [sourqty, setSourqty] = useState(1);
  const [tacoprice, setTacoprice] = useState(2.25);
  const [pantoprice, setPantoprice] = useState(1.99);
  const [sourprice, setSourprice] = useState(3.5);
  const [tacototal, setTacototal] = useState(2.25);
  const [pantototal, setPantototal] = useState(1.99);
  const [sourtotal, setSourtotal] = useState(3.5);
  const [grandtotal, setGrandtotal] = useState(7.74);

  function cal(num){
    num = num.toString(); 
    num = num.slice(0, (num.indexOf("."))+3); 
    num = Number(num);
    return num;    
  }

  const pantosub = () =>{
    const qty = pantoqty-1;
    setPantoqty(qty);
    setPantototal(cal(pantototal-pantoprice));
    setGrandtotal(cal(grandtotal-pantoprice));
  }
  const pantoadd = () =>{
    const qty = pantoqty+1;
    setPantoqty(qty);
    setPantototal(cal(pantototal+pantoprice));
    setGrandtotal(cal(grandtotal+pantoprice));
  }

  const tacosub = () =>{
    const qty = tacoqty-1;
    setTacoqty(qty);
    setTacototal(cal(tacototal-tacoprice));
    setGrandtotal(cal(grandtotal-tacoprice));
  }
  const tacoadd = () =>{
    const qty = tacoqty+1;
    setTacoqty(qty);
    setTacototal(cal(tacototal+tacoprice));
    setGrandtotal(cal(grandtotal+tacoprice));
  }

  const soursub = () =>{
    const qty = sourqty-1;
    setSourqty(qty);
    setSourtotal(cal(sourtotal-sourprice));
    setGrandtotal(cal(grandtotal-sourprice));
  }
  const souradd = () =>{
    const qty = sourqty+1;
    setSourqty(qty);
    setSourtotal(cal(sourtotal+sourprice));
    setGrandtotal(cal(grandtotal+sourprice));
  }

  return (
    <div className="App">
      <div style={{background:"white",width:"70%"}}>
        <h2 style={{padding:"10px"}}>Shopping Cart</h2>
        <hr style={{marginLeft:"10px",marginRight:"10px"}}></hr>
        <table align="center" style={{borderSpacing:"20px", width:"100%"}}>
          <tr>
            <td>Taco Seasoning</td>
            <td>${tacoprice}</td>
            <td style={{display:"flex"}}>
              <button onClick={tacosub} disabled={tacoqty===1?true:false}>-</button>
              <p>&nbsp;{tacoqty}&nbsp;</p>
              <button onClick={tacoadd}>+</button>
            </td>
            <td>Total: ${tacototal}</td>
          </tr>
          <tr>
            <td>Panto Beans</td>
            <td>${pantoprice}</td>
            <td style={{display:"flex"}}>
              <button onClick={pantosub} disabled={pantoqty===1?true:false}>-</button>
              <p>&nbsp;{pantoqty}&nbsp;</p>
              <button onClick={pantoadd}>+</button>
            </td>
            <td>Total: ${pantototal}</td>
          </tr>
          <tr>
            <td>Sour Cream</td>
            <td>${sourprice}</td>
            <td style={{display:"flex"}}>
              <button onClick={soursub} disabled={sourqty===1?true:false}>-</button>
              <p>&nbsp;{sourqty}&nbsp;</p>
              <button onClick={souradd}>+</button>
            </td>
            <td>Total: ${sourtotal}</td>
          </tr>
        </table>
        <h2 style={{paddingLeft:"15px",paddingBottom:"10px"}}>Grand Total: ${grandtotal}</h2>
      </div>
    </div>
  );
}

export default App;
