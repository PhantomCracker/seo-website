<template>
  <div>
    <div>
      <h2>Enter your location:</h2>
      <label>
        <gmap-autocomplete ref="gmapAutocomplete" @place_changed="initMarker" :options="{fields:['geometry']}"></gmap-autocomplete>
        <button @click="addLocationMarker">Add</button>
      </label>
      <br/>
    </div>
    <br>
<!--    <gmap-map-->
<!--        :zoom="14"-->
<!--        :center="center"-->
<!--        style="width:100%;  height: 600px;"-->
<!--    >-->
<!--      <gmap-marker-->
<!--          :key="index"-->
<!--          v-for="(m, index) in locationMarkers"-->
<!--          :position="m.position"-->
<!--          @click="center=m.position"-->
<!--      ></gmap-marker>-->
<!--    </gmap-map>-->
  </div>
</template>

<script>
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: {
        lat: 29.7837304,
        lng: -100.4458825
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null
    };
  },
  mounted() {
    this.locateGeoLocation();
  },
  methods: {
    initMarker(loc) {
      this.existingPlace = loc;
    },
    async addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
      });
    },
  }
};
</script>

<style scoped lang="scss">

</style>