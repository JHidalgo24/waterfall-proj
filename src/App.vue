<template>
  <v-app>
    <v-app-bar
      app
      color="red"
      dark
    >
      <v-icon>mdi-book</v-icon>
      &nbsp;
      <h2>CK Training</h2>
      <v-spacer></v-spacer>
      <v-btn text><v-icon>mdi-account</v-icon> Sign-in </v-btn>
      <v-btn text><v-icon>mdi-account-plus</v-icon>Register </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer  right app v-model="drawer" temporary >
      <v-list-item-group>
        <v-list-item>
          Classes
        </v-list-item>
        <v-list-item>
          Instructors
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
    drawer:true
  }),
};
</script>
