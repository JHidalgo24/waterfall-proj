<template>
  <v-list-item>
    <p>{{ instructor.firstName }} {{ instructor.lastName }} <b v-show="instructor.endDate !== null" style="color: red">
      <br>Terminated on: {{ instructor.endDate }}</b> </p>
    <v-spacer></v-spacer>
    <v-btn @click="overlay = true" v-show="instructor.endDate !== null" text style="background-color:indianred; ">
      <span style="color: white">Cause of Termination</span>
    </v-btn>

    <v-btn @click="dialog = !dialog" text id="editBtn">
      Edit
    </v-btn>

    <v-btn v-show="instructor.endDate === null" text @click="firePrompt" id="destroyBtn">
      Fire
    </v-btn>

    <v-dialog persistent width="650" v-model="dialogFireUser">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to fire {{ instructor.firstName }}?
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
            <b>Full Name</b>: {{ instructor.firstName }} {{ instructor.lastName }}
            <br>
            <b>Started</b>: {{ instructor.startDate }}
            <br>
            <b>Age</b>: {{ instructor.age }}
            <br>
            <v-divider class="my-5"/>
            <b>Contact Information</b>
            <br>
            <b>Email</b>:{{ instructor.email }}
            <br>
            <b>Phone Number</b>:{{ instructor.phoneNumber }}
          </h4>

          <div>
            <v-textarea v-model="instructorData.terminationCause" :value="instructor.terminationCause"
                        label="Termination">
            </v-textarea>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn outlined @click="dialogFireUser = !dialogFireUser" color="green">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined color="rgb(205,92,92)" @click="fireInstructor">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-dialog width="400" v-model="dialog">
      <v-card>
        <v-card-title class="text-h5">{{ instructor.firstName }} {{ instructor.lastName }}</v-card-title>

        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="instructorData.firstName" :value="instructor.firstName"
                                label="First Name"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="instructorData.lastName" :value="instructor.lastName"
                                label="Last Name"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="instructorData.age" :value="instructor.age" label="Age"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="instructorData.gender" :value="instructor.gender"
                                label="Gender"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="instructorData.email" :value="instructor.email"
                                label="Email"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="instructorData.phoneNumber" :value="instructor.phoneNumber"
                                label="Phone Number"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="instructorData.startDate" :value="instructor.startDate"
                                label="Start Date"></v-text-field>
                </v-col>
              </v-row>

              <v-card-actions>
                <v-btn @click="dialog = !dialog" outlined>
                  Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn outlined @click="changeInstructorData">
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
          <p>{{instructor.terminationCause}}</p>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </v-list-item>

</template>

<script>
export default {
  name: "InstructorEditComponent",
  props: {
    instructor: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      dialogFireUser: false,
      instructorData: Object.assign({}, this.instructor),
      absolute: true,
      overlay: false,
      switch1:false
    }
  },
  methods: {
    async changeInstructorData() {

      if (this.instructorData.terminationCause === ''){
        this.instructorData.terminationCause = "No reason was listed. Contact admin J Wheezy or CK for more details"
      }

      await this.$emit('change-instructor', this.instructorData)

      this.dialog = false
    },
    firePrompt() {
      this.dialogFireUser = true;
    }
    ,
    async fireInstructor() {

      await this.changeInstructorData()

      this.$emit('fire-instructor', this.instructorData)

      this.dialogFireUser = false;
    }
  }
}
</script>

<style scoped>

</style>