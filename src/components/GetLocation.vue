<script setup lang="ts">
import {ref, onMounted} from "vue";
import type {Ref} from "vue";
import WeatherReport from "./WeatherReport.vue";

type Geolocation = {
  latitude: number;
  longitude: number;
};
const coords: Ref<Geolocation | undefined> = ref();
const geolocationBlockedByUser: Ref<boolean> = ref(false);
const getGeolocation = async (): Promise<void> => {
  navigator.geolocation.getCurrentPosition(
      async (position: { coords: Geolocation; }) => {
        coords.value = position.coords;
      },
      (error: { message: string; }) => {
        geolocationBlockedByUser.value = true;
        console.error(error.message);
      }
  );
};
onMounted(async () => {
  await getGeolocation();
});
</script>

<template>
  <div v-if="coords && !geolocationBlockedByUser">
    {{ coords.latitude }} {{ coords.longitude }}
  </div>
  <div v-if="geolocationBlockedByUser">User denied access</div>
  <WeatherReport v-if="coords && !geolocationBlockedByUser" :coords="coords"/>
  <div v-if="geolocationBlockedByUser">User denied access</div>
</template>

<style scoped>

</style>
