<template>
  <v-list-item>
    <p>{{user.firstName}} {{user.lastName}}</p>
    <v-spacer></v-spacer>
    <v-btn @click="dialog = !dialog" text id="editBtn">Edit </v-btn>
    <v-btn @click="emitDeleteUser" text id="destroyBtn">Destroy</v-btn>

    <v-dialog width="400" v-model="dialog">
      <v-card>
        <v-card-title class="text-h5">{{user.firstName}} {{user.lastName}}</v-card-title>

        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="userData.firstName" :value="user.firstName" label="First Name"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="userData.lastName" :value="user.lastName" label="Last Name"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="userData.age" :value="user.age" label="Age"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="userData.gender"  :value="user.gender" label="Gender"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="userData.jobTitle"  :value="user.jobTitle" label="Job Tittle"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="userData.companyName"  :value="user.companyName" label="Company Name"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="userData.email"  :value="user.email" label="Email"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="userData.phoneNumber"  :value="user.phoneNumber" label="Phone Number"></v-text-field>
                </v-col>
              </v-row>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = !dialog" >
                  Cancel
                </v-btn>

                <v-btn @click="changeUserData">
                  Save
                </v-btn>
              </v-card-actions>

            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script>


export default {
  name: "UserEditComponent",
  props:{
    user:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
      dialog:false,
      dialogAddUser: false,
      userData:Object.assign({}, this.user)
    }
  },
  methods:{
    changeUserData(){
      this.$emit('change-user',this.userData)

      this.dialog = !this.dialog
    },
    emitDeleteUser(){
      this.$emit('remove-user',this.user)
    }

  }
}
</script>

<style scoped>

</style>