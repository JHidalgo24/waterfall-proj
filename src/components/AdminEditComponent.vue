<template>
  <v-list-item>
    <p>{{ admin.firstName }} {{ admin.lastName }} <b v-show="admin.terminated === true" style="color: red">
      <br>Terminated on: {{ admin.endDate }}</b> </p>
    <v-spacer></v-spacer>
    <v-btn @click="overlay = true" v-show="admin.terminated === true" text style="background-color:indianred; ">
      <span style="color: white">Cause of Termination</span>
    </v-btn>

    <v-btn @click="dialog = !dialog" text id="editBtn">
      Edit
    </v-btn>

    <v-btn v-show="admin.terminated === false" text @click="firePrompt" id="destroyBtn">
      Fire
    </v-btn>

    <v-dialog persistent width="650" v-model="dialogFireUser">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to fire {{ admin.firstName }}?
        </v-card-title>
        <v-card-text>
          <h3 style="color: red"> ⚠ You can't undo this change</h3>

          <span class="d-inline-flex">
            <h5 style="color: orangered">All classes under this instructor will be assigned TBD and an Admin will have to reassign instructor</h5>
          </span>
          <v-divider class="my-5"></v-divider>
          <h4>
            <b>General Information</b>
            <br>
            <b>Full Name</b>: {{ admin.firstName }} {{ admin.lastName }}
            <br>
            <b>Started</b>: {{ admin.startDate }}
            <br>
            <b>Age</b>: {{ admin.age }}
            <br>
            <v-divider class="my-5"/>
            <b>Contact Information</b>
            <br>
            <b>Email</b>:{{ admin.email }}
            <br>
            <b>Phone Number</b>:{{ admin.phoneNumber }}
          </h4>

          <div>
            <v-textarea v-model="adminData.terminationCause" :value="admin.terminationCause"
                        label="Termination">
            </v-textarea>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn outlined @click="dialogFireUser = !dialogFireUser" color="green">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined color="rgb(205,92,92)" @click="fireAdmin">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-dialog width="400" v-model="dialog">
      <v-card>
        <v-card-title class="text-h5">{{ admin.firstName }} {{ admin.lastName }}</v-card-title>

        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="adminData.firstName" :value="admin.firstName"
                                label="First Name"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="adminData.lastName" :value="admin.lastName"
                                label="Last Name"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="adminData.age" :value="admin.age" label="Age"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="adminData.gender" :value="admin.gender"
                                label="Gender"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="adminData.email" :value="admin.email"
                                label="Email"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="adminData.phoneNumber" :value="admin.phoneNumber"
                                label="Phone Number"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="adminData.startDate" :value="admin.startDate"
                                label="Start Date"></v-text-field>
                </v-col>
              </v-row>

              <v-card-actions>
                <v-btn @click="dialog = !dialog" outlined>
                  Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn outlined @click="changeAdminData">
                  Save
                </v-btn>
              </v-card-actions>

            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-bottom-sheet v-model="overlay">
      <v-card>
        <v-card-title>Cause of Termination</v-card-title>

        <v-card-text>
          <p>{{admin.terminationCause}}</p>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </v-list-item>

</template>

<script>
export default {
  name: "AdminEditComponent",
  props: {
    admin: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      dialogFireUser: false,
      adminData: Object.assign({}, this.admin),
      absolute: true,
      overlay: false,
      switch1:false
    }
  },
  methods: {
    changeAdminData() {
      if (this.adminData.terminationCause === ''){
        this.adminData.terminationCause = "No reason was listed. Contact admin J Wheezy or CK for more details"
      }

      this.$emit('change-admin', this.adminData)

      this.dialog = false
    },
    firePrompt() {
      this.dialogFireUser = true;
    }
    ,
    fireAdmin() {

      this.changeAdminData()

      this.$emit('fire-admin', this.adminData)

      this.dialogFireUser = false;
    }
  }
}
</script>

<style scoped>

</style>