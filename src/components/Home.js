import React from 'react';
// import { useLocation } from 'react-router-dom';
import Msg from "./Msg";

const Home = () => {

  // const [bg,setBg]=useState();//for alert

  // const location=useLocation();
  // useEffect(()=>{
  //   // location.state.msg
  //   // console.log( location.state.msg);
  //   if(location.state.msg){
  //     setBg(location.state.msg);

  //   }else{
  //     setBg("Return To Home")
  //   }
  //   setTimeout(() => {
  //     setBg( )
  //   }, 3000);
  // },[location])
  return (
    <>
    <div className='home_page'>
      <div className="home_txt">
        <h1>EAT OUR GRILLED POTATO CHIPS</h1>
        <h3>Satisfying savory Bhartiya sauce chips without any hard-to-find ingredients</h3>
        <button>
            <img src="./pics/food-trolley.gif" alt="" />
            <h3>ADD TO CART</h3>
        </button>
      </div>

      
      <div className="home_img">
        <img src="./pics/lays.png" alt="" />
      </div>


      <div className="home_specs">
        <div className="specs">
        <img src="./pics/bowling.gif" alt="" />
            <div className="specs_des">
                <h3>EXTRA CHILLI</h3>
                <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, aspernatur!</h5>
            </div>
        </div>
        <div className="specs">
        <img src="./pics/french-fries.gif" alt="" />
            <div className="specs_des">
                <h3>CRISPY FLAVOUR</h3>
                <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, aspernatur!</h5>
            </div>
        </div>
        <div className="specs">
        <img src="./pics/dollar.gif" alt="" />
            <div className="specs_des">
                <h3>BEST PRIZE</h3>
                <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, aspernatur!</h5>
            </div>
        </div>
      </div>
    </div>
    <Msg />
    </>
  )
}

export default Home
