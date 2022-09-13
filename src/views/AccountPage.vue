<template>
  <div style="text-align: center">
    <v-row class="ma-0">
      <v-col cols sm="12" lg="4">

      </v-col>
      <v-col style="justify-content: center" cols sm="12" lg="4">
        <v-card class="justify-center pa-2">
          <h2 style="" class="pa-4">Account info</h2>
          <v-img src="https://c.tenor.com/wGHHJopBxjsAAAAC/pepe-sadge-cry.gif"></v-img>
          <v-card-text>
            <h1>Willy Junior</h1>
            <h2>Classes Taken: 305</h2>
            <h2 style="color: red">Non-Payments: 2 Orders</h2>
            <h4 style="color: orange">Warning: One more non-payment and your account will be locked, and you will have to appeal it with customer support</h4>
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions class="card-actions text-right">
            <v-spacer></v-spacer>
            <v-btn text >
              Log-Out
              <v-icon>mdi-exit-run</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols sm="12" lg="4">

      </v-col>
    </v-row>


  </div>
</template>

<script>


export default {

  name: "AccountPage",
  props: {

  },
  methods: {


  }
}
</script>

<style scoped>

</style>