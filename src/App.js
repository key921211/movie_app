import React from 'react';
import PropTypes from "prop-types"

const foodILike = [
  {
    id:1,
    name: "kimchi",
    img: "https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg",
    rating: 5
  },
  {
    id:2,
    name: "samgyeopsal",
    img: "https://w.namu.la/s/cb69adb56d05e243ad090736320dae4a32711295e3c83c6311498f7397008fb5e5f810911f02b5f2611e5399424eb672d0366f47453943b318420caf00e3617daf70c76524ea8038e2f13d34fabdab0f4025474e36f286d90fbac41833625d05832ef3d758b150c5162d457e911792f0",
    rating: 4.8
  },
  {
    id:3,
    name: "Bibimbap",
    img: "https://homecuisine.co.kr/files/attach/images/140/037/082/732750e89f4e634c7b98766c50c395f7.jpg",
    rating: 4.9
  },
  {
    id:4,
    name: "Doncasu",
    img: "http://image.gsshop.com/image/61/79/61795659_L1.jpg",
    rating: 4.7
  },
  {
    id:5,
    name: "Kimpap",
    img: "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
    rating: 4.6
  }
];

function Food({ name, img, rating }){
  return <div>
    <h2>I Like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={img} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
  <div> 
    {foodILike.map(dish => 
    <Food key={dish.id} name= {dish.name} img={dish.img} rating={dish.rating}/>)}
  </div>
  )
}

export default App;
