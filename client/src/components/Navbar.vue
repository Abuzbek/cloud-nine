<template>
  <nav id="nav" class=" navbar-expand-lg navbar fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#"><img width="80px" :src="require('../assets/logo.png')" alt=""></a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="black-text text-black">
        <i class="fas fa-bars"></i>
      </span>
    </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav" style="margin:0;">
          <li class="nav-item">
            <a href="#cards" class="nav-link">Xizmatlarimiz</a>
          </li>
          <li class="nav-item">
            <a href="#portfolio" class="nav-link">Portfolio</a>
          </li>
          <li class="nav-item">
            <a href="#team" class="nav-link">Jamoamiz</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Aloqa</a>
          </li>
        </ul>
      </div>
      <div class="navbarSupportedContent">
         <ul class="navbar-nav" style="margin:0;">
          <li class="nav-item">
            <a href="#cards" class="nav-link">Xizmatlarimiz</a>
          </li>
          <li class="nav-item">
            <a href="#portfolio" class="nav-link">Portfolio</a>
          </li>
          <li class="nav-item">
            <a href="#team" class="nav-link">Jamoamiz</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Aloqa</a>
          </li>
        </ul>
      </div>
      <div class="overlay_button navbar-toggler navbarSupportedContent"  data-target=".navbarSupportedContent"></div>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery'
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin);
export default {
  name: 'Navbar',
  mounted () {
    let links = ('.nav-link');
    $(links).on('click', function (e) {
        e.preventDefault();
        let id = $(this).attr('href');
        let target = $(id).offset().top;
        $('html, body').animate({
            scrollTop: target,
        }, 1000);
    });
    $(window).scroll(function () {
      let $scroll = $(this).scrollTop();
        console.log($scroll);
        if ($scroll >= 100) {
            $('#nav').addClass('active');
        }
        else {
            $('#nav').removeClass('active');
        }
       let $links = $('.nav-link')
       console.log($links);
        $links.each(function () {
            let $id = $(this).attr('href');
            let $target = $($id).offset().top-100;
            console.log($target);
            if ($scroll >= $target) {
                $links.removeClass('active')
                $(this).addClass('active')
            }
        })  
    });
    $('.navbar-toggler').click(function(){
      let attrib = $(this).attr('data-target')
      console.log(attrib);
      $(attrib).toggleClass('active')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fixed-top{
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  transition: 1s;
  z-index: 1000 !important;
}
.fixed-top.active{
  background: rgba(255, 255, 255);
  transition: 1s;
}
.navbarSupportedContent{
  position: fixed;
  left: -100%;
  top: 0px;
  bottom: 0;
  height: 100%;
  width: 60%;
  background: rgba(255, 255, 255);
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 2;
}
.navbarSupportedContent.active{
  left: 0%;
}
.navbarSupportedContent .navbar-nav{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column !important;
  padding-top:70px;
  padding-left: 40px;
}
.navbarSupportedContent .navbar-nav .nav-link{
  width: 100%;
  padding: 20px !important;
}
.overlay_button{
  position: fixed;
  background: rgba(0, 186, 243, 0.356);
  width: 100%;
  height: 100%;
  top: -100%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s, top 0s;
}
.overlay_button.active{
  top: 0;
  opacity: 1;
}
</style>
