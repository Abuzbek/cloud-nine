<template>
  <div class="mainWrapper">
    <div class="mapWrapper">
      <div id="map"></div>
    </div>
    <div class="infoBlock pb-3">
      <div class="phone py-3">
        <img :src="require('../assets/cardSvg/telephone.png')" alt="" />
        <span>+998 98 765 43 21</span>
      </div>
      <div class="location py-3">
        <img :src="require('../assets/cardSvg/Group.png')" alt="" />
        <span>Mo`ljal Huvaydo restorani</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Loader } from "google-maps";
// import phoneIcon from '../assets/MapIcons/telephone.png';
// import locationIcon from '../assets/MapIcons/Group.png';

const loader = new Loader("AIzaSyA87hHCCB5xPl-8ZnSYm8UBr0COGtNKPOs");

export default {
  name: "Map",
  data() {
    return {
      map: null,
      office: { lat: 41.340097, lng: 69.204063 },
      marker: null,
      // phoneIcon,
      // locationIcon,
    };
  },
  async created() {
    const google = await loader.load();
    this.map = await new google.maps.Map(document.getElementById("map"), {
      center: this.office,
      zoom: 18,
    });
    this.marker = await new google.maps.Marker({
      position: this.office,
      map: this.map,
    });
  },
};
</script>

<style scoped>
#map {
  min-height: 400px;
  outline: none;
}

.mainWrapper {
  height: 100%;
}

.infoBlock {
  padding: 1% 10%;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  height: 11%;
  align-items: center;
  justify-content: space-between;
}

.phone,
.location {
  display: flex;
  align-items: center;
}
.phone span,
.location span {
  margin-left: 15px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
}
</style>