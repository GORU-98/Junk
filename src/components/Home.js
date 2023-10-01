import React from 'react'

const Home = () => {
  return (
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
  )
}

export default Home