<template>
  <v-app>
    <v-app-bar
      app
      color="orange"
      dark
    >


      <router-link style="text-underline: none; text-decoration: none; color: inherit" to="/"  text color="black" elevation="0">
        <span>
        <v-icon>mdi-book</v-icon>
        CK Training
      </span>
      </router-link>
      &nbsp;

      <v-spacer></v-spacer>
      <v-btn text to="/account"><v-icon>mdi-account</v-icon> Sign-in </v-btn>
      <v-btn text to="/register" ><v-icon>mdi-account-plus</v-icon>Register </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer  right app v-model="drawer" temporary >
      <v-list-item-group>
        <v-list-item to="/classes">
          Classes
        </v-list-item>
        <v-list-item>
          Instructors
        </v-list-item>
        <v-list-item to="/admins">
          Admin Page
        </v-list-item>
        <v-list-item to="/moneythingy">
          Money Breakdown
        </v-list-item>
        <v-list-item>
          About Us
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer:false
  }),
};
</script>


