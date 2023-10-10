import React, { useEffect, useState } from "react";
import Msg from "./Msg";
const host = "http://localhost:5000";
const ExpenseCard = () => {

  const [txt, settxt] = useState({
    product: "",
    category: "",
    prize: "",
    location: "",
  });
  const [allcards, setallcard] = useState([]);
  const [bg,setBg]=useState();
  // const Fooddata={allcard}
  // const arr=["drink","snack","pizza","drink","fastfood","ice-cream","colddrink","burger"];
// const handleBg= async()=>{
//   //  const elem=  arr[Math.round(Math.random()*arr.length)];
//   //  const bgg= `./pics/${elem}.png`;
//   //  setBg(bgg);
//   //  console.log(bg)
//   let letters = "0123456789ABCDEF";
// let color = '#';
// for (let i = 0; i < 6; i++)
//     color += letters[(Math.floor(Math.random() * 16))];
// console.log(color);
// setBg(color);
// }
  const handlechange = (e) => {
    e.preventDefault();
    settxt({
      ...txt,
      [e.target.name]: e.target.value,
    });
  };

  const handlecard = async (e) => {
    e.preventDefault();
    const token=localStorage.getItem("token");
    const savecard = await fetch(`${host}/item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authtoken":`${token}`
      },
      body: JSON.stringify({ ...txt }),
    });

    settxt({
      product: " ",
      category: " ",
      prize: " ",
      location: " ",
    });
    const res = await savecard.json();
    setallcard(res.allcards);
    setBg(res.message);
    setTimeout(() => {
      setBg();
    }, 2000);
  };

  const fetchcard = async () => {
    const token=localStorage.getItem("token");
    const allcard1 = await fetch(`${host}/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authtoken":`${token}`
      },
    });
    const result = await allcard1.json();
    setallcard(result.allcards);
  
    // console.log(allcards);
  };

  const handleDlt=async(id)=>{
    const token=localStorage.getItem("token");
    const res=await fetch(`${host}/delete/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authtoken":`${token}`
      },
    })
    const response=await res.json();
    setallcard(response.allcards);
    setBg(response.message);
    setTimeout(() => {
      setBg();
    }, 2000);
    // console.log(response.allcards);
  }

  // // const handleBg=()=>{
  // //   allcards.map((card)=>{
  // //     return <>
  // //      console.log(card)
  // //      setBg(card.category)
  //     {/* if(card.category=="Cakes and Biscuits"){
  //       setBg("./pics/lays.png")
  //     }else if(card.category=="Fast Food(such as Burger and Pizza)"){
  //       setBg("./pics/lays3.png")

  //     }else if(card.category==="Chocolate and Sweets"){
  //       setBg("./pics/ice-cream.png")

  //     }else if(card.category==="Snacks(such as chips)"){
  //       setBg("./pics/lays2.png")
  //     }else if(card.category==="Alcoholic drinks"){
  //       setBg("./pics/lays.png")
  //     }
  //     else if(card.category==="Cold drinks"){
  //       setBg("./pics/lays2.png")
  //     }
  //     setBg("./pics/lays3.png") */}

  // //     </>
  // //   })
  // // }

  useEffect(() => {
    fetchcard();
    // handleBg();
    // eslint-disable-next-line
    // handleBg();
  },[]);
  return (
    <>
      <div className="expensepage">
        <h1>Enter your Expenses</h1>
        <div className="expenseform">
          <div className="product">
            <label htmlFor="product">Enter Item Name : </label>
            <input
              type="text"
              name="product"
              id="product"
              value={txt.product}
              onChange={handlechange}
              required
            />
          </div>
          <div className="product">
            <label htmlFor="category">Enter Category : </label>
            <input
              list="Category"
              name="category"
              id="category"
              required
              value={txt.category}
              onChange={handlechange}
            />
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
            <input
              type="number"
              name="prize"
              id="prize"
              value={txt.prize}
              onChange={handlechange}
              required
            />
          </div>
          <div className="product">
            <label htmlFor="product">Enter Location : </label>
            <input
              type="text"
              name="location"
              id="location"
              value={txt.location}
              onChange={handlechange}
              required
            />
          </div>
          <button onClick={handlecard} disabled={txt.product.length<3 ||txt.prize<1 || txt.location<2 ||txt.category<3}>Make your card</button>
          {/* <button onClick={fetchcard}>Make your card</button> */}
        </div>
      </div>
      <div className="cardpage">
        {allcards.map((card) => {
          return (
            <div
              className="expenseCard"
              key={card._id}
             
            >
              <h2>product : {card.product}</h2>
              <h3>prize : {card.prize}</h3>
              <p>location : {card.location}</p>
              <h4>People who love to eat are always the best people</h4>
              <button>{card.category}</button>
              <img  src="https://img.icons8.com/3d-fluency/94/trash.png" alt="trash" onClick={()=>{return handleDlt(card._id)}}/>
              {/* <img src={bg} alt="" /> */}
            </div>
          );
        })}
      </div>
      <Msg msg={bg}/>
    </>
  );
};

export default ExpenseCard;
