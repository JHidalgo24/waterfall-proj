<template>

  <v-app>

    <v-app-bar
        app
        color="orange"
        dark
    >


      <router-link style="text-underline: none; text-decoration: none; color: inherit" to="/" text color="black"
                   elevation="0">
        <div class="d-inline-flex">
        <v-img contain width="25" src="../src/assets/owl.png"></v-img>
        &nbsp;
          <h3>CK Teaching</h3>
      </div>
      </router-link>
      &nbsp;

      <v-spacer></v-spacer>
      <v-btn text to="/account">
        <v-icon>mdi-account</v-icon>

      </v-btn>
      <v-btn text to="/register">
        <v-icon>mdi-account-plus</v-icon>

      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer right app v-model="drawer" temporary>
      <v-list-item-group>
        <v-list-item to="/classes">
          Classes
        </v-list-item>
        <v-list-item to="/user-courses">
          My Schedule
        </v-list-item>
        <v-list-item to="/review-courses">
          Review Past Classes
        </v-list-item>
        <v-list-item to="/instructor">
          Instructor Page
        </v-list-item>
        <v-list-item to="/admins">
          Admin Page
        </v-list-item>
        <v-list-item to="/CEO">
          CEO Page
        </v-list-item>
        <v-list-item to="/money-thingy">
          Money Breakdown
        </v-list-item>
        <v-list-item to="/about-us">
          About Us
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-main class="mb-16">
      <router-view/>
    </v-main>

    <v-footer color="gray">
      <v-row class="ma-0">
        <v-col class="text-center align-center"  cols sm="12" lg="4">
          <h3 class="text-center ma-7">CK Teaching</h3>
        </v-col>
        <v-col cols sm="12" lg="4">
          <h3 class=" mb-3 text-center">Social Media Links</h3>

              <v-btn  depressed ><v-icon>mdi-facebook</v-icon> Facebook</v-btn>

              <v-btn  depressed ><v-icon>mdi-twitter</v-icon> Twitter</v-btn>

              <v-btn  depressed><v-icon>mdi-youtube</v-icon> Youtube</v-btn>


              <v-btn  depressed><v-icon>mdi-linkedin</v-icon> Linkedin</v-btn>


        </v-col>
        <v-col cols sm="12" lg="4">
          <h3 class="mb-3 text-center">Contact Info</h3>
          <v-divider></v-divider>
          <v-btn width="100%" text depressed to="">Email: CKSupport@CKTeach.com </v-btn>
          <br>
          <v-btn width="100%" text depressed  to="">Number: +1 262-691-5566  </v-btn>
        </v-col>



      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false
  }),
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

</style>