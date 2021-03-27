<template>
  <l-map
    :center="center"
    :zoom="zoom"
    class="map"
    ref="map"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
  >
    <l-tile-layer :url="url"> </l-tile-layer>
    <!-- <l-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.coordinates"> </l-marker>-->
  </l-map>
</template>

<script>
/** Import */
import { mapState } from 'vuex'
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  name: 'yfRestaurantDetailsMap',
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [0, 0],
      zoom: 12,
      //  markers: [{ id: 1, coordinates: [49.11491, 6.17881] }],
    }
  },
  computed: {
    ...mapState(['params']),
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom
      console.log(this.markers)
    },
    centerUpdated(center) {
      this.center = center
    },
  },
  created() {
    this.center = [parseFloat(this.params.latitude), parseFloat(this.params.longitude)]
  },
}
</script>

<style scoped>
.map {
  position: absolute;
  width: 50%;
  height: 50%;
  overflow: hidden;
}
</style>
