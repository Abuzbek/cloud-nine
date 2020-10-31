<template>
  <div id="app">
    <Navbar  :title="navItem"/>
    <Header/>
    <Skill/>
    <Portfolio/>
    <Team/>
    <Contact/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Skill from './components/Skill.vue'
import Portfolio from './components/Portfolio.vue'
import Team from './components/Team.vue'
import Contact from './components/contact.vue'


export default {
  name: 'App',
  components: {
    Navbar,Header,Skill,Portfolio,Team,Contact
  },
  data () {
    return {
      // 
    }
  }
}
</script>

<style>
/*  =======================  components  ===============  */
.navbar-collapse{
  flex-basis: 0% !important;
}
.navbar-nav{
  flex-direction: row !important;
}
.nav-link {
    display: block;
    padding: .5rem 1rem !important;
    color: #2a2a2a;
}
.collapse.navbar-collapse{
  transition: 1s !important;
}
.nav-link.active {
    font-weight: 700;
}
/*  =======================  components  ===============  */
body{
  font-family: 'Montserrat', sans-serif;
}
</style>
