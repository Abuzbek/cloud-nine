<template>
<section id="contact">
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-lg-6 p-0">
        <WriteUs/>
      </div>
      <div class="col-lg-6 p-0">
        <Map/>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import '../assets/css/bootstrap.min.css'
import Map from './Map.vue'
import WriteUs from './WriteUs.vue'

export default {
  name: 'Contact',
  components: { Map,WriteUs }
};
</script>

<style scoped>

</style>