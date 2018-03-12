<template>  
  <v-app>
    <v-toolbar dark color="deep-purple darken-1">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">TESTING</router-link>
      </v-toolbar-title>
    </v-toolbar>

    <!-- This is where other components will be loaded -->
    <main>
      <router-view></router-view>
    </main>
    <!-- -->

  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
</style>