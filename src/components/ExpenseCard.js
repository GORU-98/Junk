import React, { useEffect, useState } from "react";
const host="http://localhost:5000";
const ExpenseCard = () => {
    const [txt,settxt]=useState({
        product:"",
        category:"",
        prize:"",
        location:""
    })
    const [allcards,setallcard]=useState([]);
    const [bg,setBg]=useState();
    // const Fooddata={allcard}


    const handlechange=(e)=>{
      e.preventDefault();
        settxt({
            ...txt,[e.target.name]:e.target.value
        })
    }
    
    const  handlecard= async (e)=>{
      e.preventDefault();
      const savecard= await fetch(`${host}/item`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",

        },
        body:JSON.stringify({...txt})

      })
      
      settxt({ 
              product:" ",
              category:" ",
            prize:" ",
            location:" "
          })
          const res=await savecard.json();
        
            console.log(res);
        }

        const  fetchcard= async ()=>{
          const allcard1= await fetch(`${host}/get`,{
            method:"GET",
            headers:{
              "Content-Type":"application/json",
            }
          })
          const result=await allcard1.json();
          setallcard(result.allcards)
          console.log(allcards);
        }
        const handleBg=(t)=>{
          console.log([t])
          if(t=="Cakes and Biscuits"){
            setBg("./pics/ice-cream.png")
          }else if(t==="Fast Food(such as Burger and Pizza)"){
            setBg("../pics/ice-cream.png")
            
          }else if(t==="Chocolate and Sweets"){
            setBg("../pics/ice-cream.png")

          }else if(t==="Snacks(such as chips)"){
            
          }else if(t==="Alcoholic drinks"){
            
          }
          else if(t==="Cold drinks"){

          }
        }
        useEffect(()=>{
          fetchcard();
          handleBg(allcards.category);
           // eslint-disable-next-line
        },[])
  return (
    <>
    <div className="expensepage">
      <h1>Enter your Expenses</h1>
      <div className="expenseform">

      <div className="product">
        <label htmlFor="product">Enter Item Name : </label>
        <input type="text" name="product" id="product" value={txt.product} onChange={handlechange} required />
      </div>
      <div className="product">
        <label htmlFor="category">Enter Category Name : </label>
        <input list="Category" name="category" id="category" required value={txt.category} onChange={handlechange} />
        <datalist id="Category">
          <option value="Cakes and Biscuits" />
          <option value="Fast Food(such as Burger and Pizza)" />
          <option value="Chocolate and Sweets" />
          <option value="Snacks(such as chips)" />
          <option value="Cold drinks" />
          <option value="Alcoholic drinks" />
        </datalist>
      </div>
      <div className="product">
        <label htmlFor="prize">Enter Prize : </label>
        <input type="number" name="prize" id="prize" value={txt.prize} onChange={handlechange} required />
      </div>
      <div className="product">
        <label htmlFor="product">Enter Item Name : </label>
        <input type="text" name="location" id="location" value={txt.location} onChange={handlechange}  required />
      </div>
      <button onClick={handlecard}>Make your card</button>
      {/* <button onClick={fetchcard}>Make your card</button> */}
      </div>

    </div>
    <div className="cardpage">
      {allcards.map((card)=>{
          return <div className="expenseCard" key={card._id} style={{backgroundImage:`url(./pics/burger.png)`}}>
          <h2>product : {card.product}</h2>
          <h3>prize : {card.prize}</h3>
          <p>location : {card.location}</p>
          <h4>People who love to eat are always the best people</h4>
          <button>{card.category}</button>
      </div>
        })
      }

    </div>
    </>
  );
};

export default ExpenseCard;
