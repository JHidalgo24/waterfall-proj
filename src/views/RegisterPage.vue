<template>
  <v-row class="ma-0 pa-0">
    <v-col cols sm="12" xl="4" lg="4">

    </v-col>
    <v-col cols sm="12" xl="4" lg="4">
      <v-card  class="mt-12" style="text-align: center">
        <h1>Customer Sign-up</h1>
        <v-card-text>
          <v-form>
            <v-text-field  rounded label="Email" autocomplete="false" type="email"
                          placeholder="Email">
            </v-text-field>
            <v-text-field label="Password" rounded autocomplete="password" placeholder="password"
                          type="Password">
            </v-text-field>
            <v-btn class="ma-2" text color="">
              Register
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <h5 style="color: red"></h5>
            <v-divider></v-divider>

            <v-btn class="ma-2" text color="#de5246">
              Use Google
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols sm="12" xl="4" lg="4"></v-col>
  </v-row>
</template>

<script>
export default {
  name: "Signup-Page",
  data() {
    return {
      image: 1,
      email: '',
      password: '',
    }
  }
}
</script>

<style scoped>

</style>