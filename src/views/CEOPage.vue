<template>
  <div style="text-align: center">
    <v-row class="ma-0">
      <v-col style="justify-content: center" cols sm="12" lg="2">
        <v-card elevation="1" class="justify-center pa-2">
          <h2 style="" class="pa-4">CEO Page</h2>

          <v-card-text>
            <h1></h1>
          </v-card-text>
          <v-img max-height="50vh" contain src="https://cdn.frankerfacez.com/emoticon/418189/4"></v-img>
          <h2 style="margin: 15px">CK (Big Boss)</h2>
          <v-chip>Email</v-chip>
          <p>ck@ckteaching.com</p>
          <v-card-actions class="card-actions text-right">
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols sm="12" lg="10">
        <div>

          <!--User Page-->
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Users</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item :key="user.userID" v-for="(user) in usersList">
              <UserEditComponent @remove-user="removeUser" @add-user="addNewUser" @change-user="changeUser"
                                 :user="user"></UserEditComponent>
            </v-list-item>

            <v-dialog width="400" v-model="dialogAddUser">
              <v-card>
                <v-card-title class="text-h5">Adding User</v-card-title>

                <v-card-text>
                  <v-form>
                    <h4 style="color: red" v-show="missingInfo">
                      You have missing information
                    </h4>

                    <v-container>
                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedUser.firstName" label="First Name"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedUser.lastName" label="Last Name"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedUser.age" label="Age"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedUser.gender" label="Gender"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedUser.jobTitle" label="Job Tittle"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedUser.companyName" label="Company Name"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedUser.email" type="email" label="Email"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedUser.phoneNumber" label="Phone Number"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="dialogAddUser = !dialogAddUser">
                          Cancel
                        </v-btn>

                        <v-btn @click="addNewUser">
                          Save
                        </v-btn>
                      </v-card-actions>

                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-dialog>

            <v-list-item>
              <v-list-item>
                <h4>Add User</h4>
                <v-spacer></v-spacer>
                <h4>
                  <v-btn @click="dialogAddUser = !dialogAddUser" text>
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </h4>
              </v-list-item>
            </v-list-item>
          </v-list-group>


          <!--Instructor Page-->
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Instructors</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item :key="instructor.instructorID" v-for="(instructor) in instructorList">
              <InstructorEditComponent @fire-instructor="removeInstructor" @change-instructor="changeInstructor"
                                       :instructor="instructor"></InstructorEditComponent>
            </v-list-item>

            <v-list-item>
              <h4>Add Instructor</h4>
              <v-spacer></v-spacer>
              <h4>
                <v-btn @click="dialogAddInstructor = !dialogAddInstructor" text>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </h4>
            </v-list-item>

            <v-dialog width="400" v-model="dialogAddInstructor">
              <v-card>
                <v-card-title class="text-h5">Adding Instructor</v-card-title>

                <v-card-text>
                  <v-form>
                    <h4 style="color: red" v-show="missingInfo">
                      You have missing information
                    </h4>

                    <v-container>
                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedInstructor.firstName" label="First Name"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedInstructor.lastName" label="Last Name"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedInstructor.age" label="Age"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedInstructor.gender" label="Gender"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedInstructor.email" label="Email"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedInstructor.phoneNumber"
                                        label="Phone Number"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedInstructor.startDate" type="Start Date"
                                        label="Email"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="dialogAddInstructor = !dialogAddInstructor">
                          Cancel
                        </v-btn>

                        <v-btn @click="addInstructor">
                          Save
                        </v-btn>
                      </v-card-actions>

                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-dialog>

          </v-list-group>


          <!--Course Page-->
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Courses</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item :key="classItem.classID" v-for="(classItem) in classList">
              <ClassEditComponent :users="usersList" @remove-course="removeCourse" @change-course="changeCourse"
                                  :courseThing="classItem"></ClassEditComponent>
            </v-list-item>

            <v-dialog width="400" v-model="dialogAddCourse">
              <v-card>
                <v-card-title class="text-h5">Adding Class</v-card-title>

                <v-card-text>
                  <v-form>
                    <h4 style="color: red" v-show="missingInfo">
                      You have missing information
                    </h4>

                    <v-container>
                      <v-row>
                        <v-col cols sm="12">
                          <v-select required
                                    :items="instructorList.filter((c) => c.terminated !== true).map((a) => a.firstName + ' ' + a.lastName)"
                                    v-model="addedCourse.instructor" label="Instructor"></v-select>
                        </v-col>

                        <v-col cols sm="12">
                          <v-textarea required v-model="addedCourse.description" label="Description"></v-textarea>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedCourse.className" label="Class Name"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedCourse.startDate" type="date"
                                        label="Start Date"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedCourse.endDate" type="date"
                                        label="End Date"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>


                        <v-col cols sm="12">
                          <v-text-field required v-model="addedCourse.startTime" type="time"
                                        label="Start Time"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedCourse.endTime" type="time"
                                        label="End Time"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedCourse.cost" type="number" value="390"
                                        label="Cost"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedCourse.maxSize" label="Max Students"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-show="false" v-model="addedCourse.actual" disabled
                                        :value="addedCourse.maxSize" type="email" label="Actual Size"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedCourse.address" label="Location"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="dialogAddCourse = !dialogAddCourse">
                          Cancel
                        </v-btn>

                        <v-btn @click="addNewCourse">
                          Save
                        </v-btn>
                      </v-card-actions>

                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-list-item>
              <v-list-item>
                <h4>Add Course</h4>
                <v-spacer></v-spacer>
                <h4>
                  <v-btn @click="dialogAddCourse = !dialogAddCourse" text>
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </h4>
              </v-list-item>
            </v-list-item>
          </v-list-group>


          <!--Admin Page-->

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admins</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item :key="admin.adminID" v-for="(admin) in adminList">
              <AdminEditComponent @fire-admin="fireAdmin" @change-admin="changeAdmin"
                                  :admin="admin"></AdminEditComponent>
            </v-list-item>

            <v-list-item>
              <h4>Add Admin</h4>
              <v-spacer></v-spacer>
              <h4>
                <v-btn @click="dialogAddAdmin = !dialogAddAdmin" text>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </h4>
            </v-list-item>

            <v-dialog width="400" v-model="dialogAddAdmin">
              <v-card>
                <v-card-title class="text-h5">Adding New Admin</v-card-title>

                <v-card-text>
                  <v-form>
                    <h4 style="color: red" v-show="missingInfo">
                      You have missing information
                    </h4>

                    <v-container>
                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedAdmin.firstName" label="First Name"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedAdmin.lastName" label="Last Name"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedAdmin.age" label="Age"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedAdmin.gender" label="Gender"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedAdmin.email" label="Email"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols sm="12">
                          <v-text-field required v-model="addedAdmin.phoneNumber" label="Phone Number"></v-text-field>
                        </v-col>

                        <v-col cols sm="12">
                          <v-text-field required v-model="addedAdmin.startDate" type="Start Date"
                                        label="Email"></v-text-field>
                        </v-col>
                      </v-row>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="dialogAddAdmin = !dialogAddAdmin">
                          Cancel
                        </v-btn>

                        <v-btn @click="addNewAdmin">
                          Save
                        </v-btn>
                      </v-card-actions>

                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-dialog>

          </v-list-group>

        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import User from "@/Models/UserThing";
import InstructorItem from "@/Models/InstructorItem";
import ClassItem from "@/Models/ClassItem";
import UserEditComponent from "@/components/UserEditComponent";
import InstructorEditComponent from "@/components/InstructorEditComponent";
import ClassEditComponent from "@/components/ClassEditComponent";
import AdminEditComponent from "@/components/AdminEditComponent";
import classItem from "@/Models/ClassItem";
import AdminItem from "@/Models/AdminItem";

export default {
  name: "CEOPage",
  components: {UserEditComponent, InstructorEditComponent, ClassEditComponent, AdminEditComponent},

  data() {
    return {
      usersList: [
        new User(1, 'John', 'Doe', 27, 'Male', 'Software Engineer', 'johndoe@gmail.com', '14143768888', 'Google'),
        new User(2, 'Mark', 'Woe', 30, 'Male', 'Software Engineer', 'markwoe@gmail.com', '14143768889', 'Google'),
        new User(3, 'Mary', 'Foe', 25, 'Female', 'Software Engineer', 'maryfoe@gmail.com', '14143768887', 'Google')
      ],
      instructorList: [
        new InstructorItem(1, 'James', 'Johnson', '34', 'male', 'jjohnson@gmail.com', 14144558888, '1/25/2000'),
        new InstructorItem(2, 'Robert', 'Johnson', '44', 'male', 'rjohnson@gmail.com', 14144558888, '1/25/2000'),
        new InstructorItem(3, 'John', 'Johnson', '24', 'male', 'jjohnson@gmail.com', 14144558888, '1/25/2000')
      ],
      classList: [
        new ClassItem(1, 'Class 1', '9/10/2022', '9/22/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(2, 'Class 2', '9/23/2022', '10/1/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(3, 'Class 3', '10/2/2022', '10/13/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(4, 'Class 4', '10/15/2022', '10/23/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
      ],
      adminList: [
        new AdminItem(1.0, 'Billy', 'Bob', 23, 'male', 'bbob@gmail.com', 14147680000, '2/2/2022'),
        new AdminItem(2.0, 'Boh', 'Bob', 23, 'male', 'bbob@gmail.com', 14143680000, '2/2/2022')
      ],
      dialog: false,
      dialogAddUser: false,
      dialogAddInstructor: false,
      dialogAddAdmin: false,
      addedUser: new User('', '', '', '', '', '', '', '', ''),
      addedInstructor: new InstructorItem('', '', '', '', '', '', '', ''),
      addedCourse: new ClassItem('', '', '', '', '', '', '', '', '', '', ''),
      addedAdmin: new AdminItem('', '', '', '', '', '', '', ''),
      missingInfo: false,
      dialogAddCourse: false,

    }
  },
  methods: {
    changeUser(user) {

      let replacementList = this.usersList

      let index = this.usersList.findIndex((obj => obj.userID === user.userID));

      replacementList[index].changeUser(user)

      this.usersList = replacementList
    },
    changeAdmin(admin) {

      console.log(admin.adminID)
      this.adminList[this.adminList.findIndex((obj => obj.adminID === admin.adminID))].changeAdmin(admin)

    },
    addNewUser() {
      let sortedList = this.usersList.sort(function (a, b) {
        return a.userID - b.userID;
      });

      let newID = sortedList[this.usersList.length - 1].userID + 1;

      if (this.addedUser.firstName === '' || this.addedUser.lastName === '' || this.addedUser.age === '' || this.addedUser.gender === '' || this.addedUser.jobTitle === '' || this.addedUser.email === '' || this.addedUser.phoneNumber === '' || this.addedUser.companyName === '') {
        this.missingInfo = true;
        console.log(this.missingInfo)
      } else {
        console.log(this.missingInfo)
        let tempUser = new User(newID, this.addedUser.firstName, this.addedUser.lastName, this.addedUser.age, this.addedUser.gender, this.addedUser.jobTitle, this.addedUser.email, this.addedUser.phoneNumber, this.addedUser.companyName)
        this.usersList.push(tempUser)
        this.dialogAddUser = false;
      }
    },
    removeUser(user) {
      this.usersList = this.usersList.filter(c => c.userID !== user.userID)
    },

    addInstructor() {
      let sortedStuff = this.instructorList.sort(function (x, y) {
        return x.instructorID - y.instructorID;
      })

      let newID = sortedStuff[this.instructorList.length - 1].instructorID + 1;
      let tempInstructor = new InstructorItem(newID, this.addedInstructor.firstName, this.addedInstructor.lastName, this.addedInstructor.age, this.addedInstructor.gender, this.addedInstructor.email, this.addedInstructor.phoneNumber, this.addedInstructor.startDate)
      this.instructorList.push(tempInstructor)
      this.dialogAddInstructor = false;
    },

    changeInstructor(Instructor) {
      let replacementList = this.instructorList

      let index = this.instructorList.findIndex((obj => obj.instructorID === Instructor.instructorID));

      replacementList[index].changeInstructor(Instructor)

      this.instructorList = replacementList


    },
    removeInstructor(Instructor) {

      let replacementList = this.instructorList

      let index = this.instructorList.findIndex((obj => obj.instructorID === Instructor.instructorID));

      replacementList[index].fireInstructor()

      this.instructorList = replacementList
      this.dialogAddUser = false
    }
    ,
    changeCourse(course) {
      let replacementList = this.classList

      let index = this.classList.findIndex((obj => obj.classID === course.classID));

      replacementList[index].changeCourse(course)

      this.classList = replacementList


    },
    removeCourse(course) {
      this.classList = this.classList.filter(x => x.classID !== course.classID)
    },

    addNewCourse() {
      let sortedList = this.classList.sort(function (a, b) {
        return a.classID - b.classID;
      });

      let newID = sortedList[this.classList.length - 1].classID + 1;
      console.log(newID, "cringe course newid")

      console.log(this.missingInfo)
      let tempCourse = new classItem(newID, this.addedCourse.className, this.addedCourse.startDate, this.addedCourse.endDate, this.addedCourse.startTime, this.addedCourse.endTime, this.addedCourse.cost, this.addedCourse.maxSize, this.addedCourse.address, this.addedCourse.instructor, this.addedCourse.description)
      this.classList.push(tempCourse)
      this.dialogAddCourse = false;
    },

    addNewAdmin() {


      let newID = this.adminList[this.adminList.length - 1].adminID + 1

      let tempAdmin = new AdminItem(newID + 1, this.addedAdmin.firstName, this.addedAdmin.lastName, this.addedAdmin.age, this.addedAdmin.gender, this.addedAdmin.email, this.addedAdmin.phoneNumber, this.addedAdmin.startDate)
      this.adminList.push(tempAdmin)
      this.dialogAddAdmin = false;
    },

    fireAdmin(admin) {
      let index = this.adminList.findIndex((obj => obj.adminID === admin.adminID))
      console.log(index)
      this.adminList[index].fireAdmin()

      this.dialogAddAdmin = false
    }

  }
}
</script>

<style scoped>

</style>