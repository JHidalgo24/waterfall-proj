<template>
  <v-list-item>
    <p>{{ courseThing.className }}</p>
    <v-spacer></v-spacer>
    <v-btn @click="dialog = !dialog" text id="editBtn">Edit</v-btn>
    <v-btn @click="emitRemoveCourse" text id="destroyBtn">Destroy</v-btn>

    <v-dialog width="400" v-model="dialog">
      <v-card>
        <v-card-title class="text-h5">{{ courseThing.className }}</v-card-title>

        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="courseData.className" :value="courseThing.className" label="Class Name"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="courseData.instructor" :value="courseThing.instructor" label="Instructor"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="courseData.startDate" :value="courseThing.startDate" label="Start Date"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="courseData.endDate" :value="courseThing.endDate" label="End Date"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="courseData.startTime" :value="courseThing.startTime" label="Start Time"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="courseData.endTime" :value="courseThing.endTime" label="End Time"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols sm="12">
                  <v-text-field v-model="courseData.maxSize" :value="courseThing.maxSize" label="Max Size"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="courseData.actual" :value="courseThing.actual" label="Spots Left"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-text-field v-model="courseData.address" :value="courseThing.address" label="Address"></v-text-field>
                </v-col>

                <v-col cols sm="12">
                  <v-textarea outlined v-model="courseData.description" :value="courseThing.description" label="Course Description"></v-textarea>
                </v-col>

                <v-col>
                  <v-select v-model="courseData.users" multiple :items="users.map((a) => a.firstName + ' ' + a.lastName)"></v-select>
                </v-col>

                <v-card-text :key="user.userID" v-for="user in courseData.users">
                  <p>{{user}}</p>
                </v-card-text>
              </v-row>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = !dialog">
                  Cancel
                </v-btn>

                <v-btn @click="changeCourseData">
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
  name: "ClassEditComponent",
  props: {
    courseThing: {
      type: Object,
      required: true
    },
    users:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      dialog: false,
      courseData: Object.assign({}, this.courseThing),
      usersInClass:[]
    }
  },
  methods: {
    changeCourseData() {

      this.$emit('change-course', this.courseData)

      this.dialog = !this.dialog
    },
    emitRemoveCourse(){
      this.$emit('remove-course',this.courseThing)
    }
  }
}
</script>

<style scoped>

</style>