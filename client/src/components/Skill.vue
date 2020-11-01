<template>
    <section id="cards">
        <div class="container">
            <div class="row">
                <div class="col-12">
                   <h1>Sizning loyihangizni noyob va yuqori sifatda bajarib beramiz!
                       <h3 class="mt-4">Xizmatlarimiz:</h3> 
                        </h1> 
                </div>
                <div class="col-lg-3 col-md-6 d-flex align-items-center" v-for="(n, i) in card" :key="n._id" :name="i">
                    <div class="card text-center mb-4">
                        <div class="card-top">
                            <h3>{{ n.heading }}</h3>
                        </div>
                        <div class="card-img">
                            <img :src="n.img" alt="">
                        </div>
                        <div class="card-body">
                            <p>{{ n.title }}</p>
                            <a v-ripple class="btn btn-outline-primary nav-link d-inline-block" href="#contact">Buyurtma berish</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import $ from 'jquery'
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin);
 
const card = [
  {
    _id:'1',
    img: require('../assets/cardSvg/card2.svg'),
    heading:'Veb saytlar',
    title: "Veb sayt yaratuvchi - Web ilovalar ishlab chiqarish va uni sizning faoliyatingiz haqida turli hildagi murakkab sayt tuzish bilan shug'ullanadi",
    price: 'от 1000 $'
  },
  {
    _id:'2',
    img: require('../assets/cardSvg/card3.svg'),
    heading:'Android',
    title: "Android dasturchi - Android operatsion sistemasiga tushuvchi dasturlarni dasturlarni tuzish va uni mukammal qilib beramiz",
    price: 'от 1000 $'
  },
  {
    _id:'3',
    img: require('../assets/cardSvg/card1.svg'),
    heading:'Telegram botlar',
    title: "Telegram bot yaratuvchi -  Telegramdagi xabar almashinuv ishlaringizni avtomatlashtirib berish uning vazifasi",
    price: 'от 1000 $'
  },
  {
    _id:'4',
    img: require('../assets/cardSvg/Vector.svg'),
    heading:'Grafik Dizayn',
    title: "Grafik Dizayner - Turli hildagi smm postlar, logotiplar, creative rasmlar, maxsulot qadoqlari dizayni, shunga oxshash maxsulotlar tayyorlaydi ",
    price: 'от 1000 $'
  },
] 

export default {
  name: 'Skill',
  data(){
      return{
        card: card,
      }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
    width: 100%;
    background: linear-gradient(180deg, rgba(224, 223, 255, 0.8) 0%, rgba(236, 236, 255,
     0.5) 100%);
     padding: 100px 0;
}
section h1{
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
}
.card{
    border-radius: 10px;
    padding: 15px 10px;
    transition: 0.5s;
}
.card:hover{
    transform: scale(1.05);
    transition: 0.5s;

}
.card .btn {
    border-radius: 10em !important;
    padding: 10px 30px;
    font-size: 14px;
    color: #007bff;
}
.card .btn:hover {
    color: #fff;
}
.card .btn:focus {
    box-shadow:none !important;
}
.card h3{
    font-size: 24px;
    margin-bottom: 25px;
    font-weight: 600;
}
.card img{
    margin-bottom: 25px;
}
.card p{
    margin-bottom:25px;
}
@media (max-width:500px){
   section{
       padding: 30px 0;
   }
}
</style>

