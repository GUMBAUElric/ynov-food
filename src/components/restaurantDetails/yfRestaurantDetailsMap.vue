<template>
  <div class="d-flex flex-column container-map">
    <div class="title">
      <h1>Map</h1>
    </div>
    <div class="d-flex justify-content-center content">
      <l-map
        :center="map.center"
        :zoom="map.zoom"
        class="map"
        ref="map"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
      >
        <l-tile-layer
          :url="map.tileProvider.url"
          :name="map.tileProvider.name"
          :attribution="map.tileProvider.attribution"
        ></l-tile-layer>
        <l-marker :lat-lng="map.marker">
          <l-tooltip>{{ restaurant_details.name }}</l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
/** Import */
import { mapState } from 'vuex'
import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet'

export default {
  name: 'yfRestaurantDetailsMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  data() {
    return {
      map: {
        center: [0, 0],
        zoom: 14,
        marker: [0, 0],
        tileProvider: {
          name: 'Stadia',
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          url: 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
        },
      },
    }
  },
  computed: {
    ...mapState(['params', 'restaurant_details']),
  },
  methods: {
    /**
     * @function zoomUpdated
     * @desc Update zoom
     * @param {any} zoom
     */
    zoomUpdated(zoom) {
      this.map.zoom = zoom
    },
    /**
     * @function centerUpdated
     * @desc Update map center
     * @param {any} center
     */
    centerUpdated(center) {
      this.map.center = center
    },
  },
  created() {
    this.map.center = [parseFloat(this.params.latitude), parseFloat(this.params.longitude)]
    this.map.marker = [
      parseFloat(this.restaurant_details.coordinates.latitude),
      parseFloat(this.restaurant_details.coordinates.longitude),
    ]
  },
}
</script>

<style scoped>
.container-map {
  width: 100%;
}

.container-map .title {
  margin: 0;
  margin-bottom: 60px;
}

.container-map .content {
  width: 100%;
}

.container-map .content .map {
  width: 70%;
  height: 450px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 300ms ease;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-map .content .map:hover {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

@media screen and (max-width: 1100px) {
  .container-map .content .map {
    width: 100%;
  }
}

@media screen and (min-width: 1600px) {
  .container-map .content .map {
    width: 70%;
    height: 580px;
  }
}
</style>
