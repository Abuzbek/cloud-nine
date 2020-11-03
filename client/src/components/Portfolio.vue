<template>
    <section class="portfolio" id="portfolio">
        <div class="container-fluid p-0">
            <div class="row m-0">
              <div class="col-12">
                <h1>
                  Portfolio
                </h1>
              </div>
            </div>
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(n, i) in card" :key="n._id">
                  <a :href="n.link" class="wrapper">
                    <div class="box">
                      <img :src="n.img" :alt="i">
                      <div class="box-in">
                        <h4>{{ n.item }}</h4>
                        <p>{{ n.title }}</p>
                      </div>
                    </div>
                    
                  </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </section>
</template>

<script>
  import swiperCore, {Pagination, Autoplay} from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import '../assets/css/swiper.css'
  import { mapGetters } from 'vuex'
  swiperCore.use([Pagination,Autoplay])
  export default {
    name: 'Portfolio',
    components: {
      Swiper,
      SwiperSlide
    },
    computed: mapGetters(['card']),
    mounted () {
      this.$store.dispatch('fetchCard')
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          slidesPerColumn: 3,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
              slidesPerColumn: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            768: {
              slidesPerView: 2,
              slidesPerColumn: 2
            },
            640: {
              slidesPerView: 2,
              slidesPerColumn: 2
            },
            320: {
              slidesPerView: 1,
              slidesPerColumn: 2
            }
          }
        }
      }
    }
  }
</script>

<style>
section.portfolio{
    padding: 100px 0;
}
section h1{
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
}
  .swiper {
    height: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
      height: 270px;
      background: #eee;
   }
   .swiper-slide .wrapper img{
     width: 100%;
     height: 100%;
     object-fit: cover;
     transition: .3s ease-in-out;
   }
   .swiper-slide .wrapper{
     display: block;
     width: 100%;
     height: 100%;
     overflow: hidden;
   }
   .swiper-pagination{
       align-items: center;
   }
   .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{
       transition: 0.3s;
       width: 20px !important;
       height: 20px !important;
       background: #2824EA;
   }
   .swiper-pagination .swiper-pagination-bullet{
       width: 60px !important;
       opacity: 1;
       height: 20px !important;
       border-radius: 10em !important;
       transition: 0.3s;
       border: 2px solid #2824EA;
       background: transparent;
   }
   .wrapper{
     overflow: hidden;
   }
   .wrapper .box{
     position:relative;
     height: 100%;
   }
   .wrapper .box::after{
     content: '';
     position: absolute;
     display: block;
     background:rgba(42, 42, 42, 0.7);
     z-index: 5;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     transform: translateY(1000px);
     transition: 0.7s;
   }
   .wrapper .box-in{
     position: absolute;
      z-index: 6;
     bottom: 0%;
     width: 100%;
     left: -600px;
     padding-right: 15px;
     transition: 0.3s;
   }
   .wrapper .box-in h4{
     color: white;
   }
   .wrapper .box-in p{
     color: white;
   }
   .wrapper:hover .box-in{
     left: 15px;
   }
   .wrapper:hover .box::after{
     transform: translateY(0px);
   }
   @media (max-width:500px){
      .swiper-pagination .swiper-pagination-bullet{
        width: 20px !important;
        height: 20px !important;
      }
      section.portfolio{
          padding: 30px 0;
      }
   }
</style>