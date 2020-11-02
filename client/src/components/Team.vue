<template>
    <section id="team">
        <div class="container">
          <div class="row">
               <div class="col-12">
                <h1>
                  Bizning jamoamiz
                  <h4 class="mt-4">Kuchli jamoa va halol mehnat: <span class="text-primary">Cloud9</span>  siz bilan!</h4>
                </h1>
              </div>
            </div>
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide  v-for="(n, i) in team" :key="n.teamName">
                      <div class="card" :id="`team`+i">
                          <div class="card-img">
                            <div class="card-wrap">
                              <img :src="n.img" alt="" class="image-fluid">
                            </div>
                          </div>
                          <div class="card-body">
                            <h3>{{ n.teamName }}</h3>
                            <p>{{ n.work }}</p>
                          </div>
                      </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </section>
</template>
<script>
  import '../assets/css/bootstrap.min.css'
  import swiperCore, {Pagination, Autoplay} from 'swiper'
  swiperCore.use([Pagination,Autoplay])
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  const team = [
    {
      img:'https://i.ibb.co/BKR9W2D/1-2.jpg',
      teamName: 'Sardorbek Ahmadaliyev',
      work: 'Company Director'
    },
    {
      img:'https://i.ibb.co/4FN1Tkn/1-03.png',
      teamName: 'Abdumannon Tojiboev',
      work: 'Full stack developer'
    },
    {
      img:'https://i.ibb.co/G5D5r0K/photo-2020-10-31-21-07-19.jpg',
      teamName: 'Sardor Abduganiyev',
      work: 'Front-end Developer'
    },
    {
      img:'https://i.ibb.co/9yn97JZ/4-2.jpg',
      teamName: 'Savriev Javokhir',
      work: 'Backend Developer'
    }
  ]
  export default {
    name: 'Header',
    components: {
      Swiper,
      SwiperSlide
    },
    data () {
      return {
        team:team,
        swiperOption: {
          slidesPerView: 3,
                    autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            }
          }
        }
      }
    },
    mounted () {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section#team{
    padding: 70px 0;
    background: linear-gradient(180deg, rgba(224, 223, 255, 0.8) 0%, rgba(236, 236, 255,
    0.5) 100%);
  }
  section h1{
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
  }
  section#team .card{
    background: transparent;
    box-shadow: none;
    border: none;
    text-align: center;
  }
  section#team h3{
    font-weight: 300;
    font-size: 20px;
  }
  section#team .card-wrap{
    width: 80%;
    height: 80%;
    margin:10% auto;
    border-radius: 50%;
    overflow:hidden;
    border: 15px solid #DBDBDB;
  }
  section#team  .card-img .card-wrap img{
    max-width: 100%;
    height: auto;
  }
  .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33%;
      height: auto !important;
      transition: 0.3s ease-in-out;
      background: transparent !important;
      border: none !important;
    }

   .swiper-pagination .swiper-pagination-bullet{
       width: 80px !important;
   }
   @media (max-width:768px) {
     .swiper-slide {
      width: 50%;
      transform: scale(1);
    }
      section#team{
          padding: 30px 0;
      }
   }
</style>
