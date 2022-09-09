<template>
  <div style="text-align: center">
    <v-row>

      <v-col style="justify-content: center" cols sm="12" lg="4">
        <v-card elevation="1" class="justify-center pa-2">
          <h2 style="" class="pa-4">Admin Page</h2>

          <v-card-text>
            <h1></h1>
          </v-card-text>
          <v-img max-height="20vw" contain src="https://cdn.frankerfacez.com/emoticon/349369/4"></v-img>
          <h2 style="margin: 15px">J Weezy</h2>
          <p>The Temple Guardian</p>
          <v-btn>Edit</v-btn>
          <v-card-actions class="card-actions text-right">
            <v-spacer></v-spacer>
            <v-btn text>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols sm="12" lg="8">

        <div>
          <v-list-group  >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Users </v-list-item-title>

              </v-list-item-content>
            </template>
            <v-list-item :key="n" v-for="(user,n) in usersList">
             <UserEditComponent :user="user"></UserEditComponent>
            </v-list-item>
            <v-list-item>
              <v-list-item>
                <h4>Add User</h4>
                <v-spacer></v-spacer>
                <h4>
                  <v-btn text><v-icon>mdi-plus</v-icon></v-btn>
                </h4>
              </v-list-item>
            </v-list-item>

          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Instructors</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item :key="y" v-for="(instructor, y) in instructorList">
              <p>{{ instructor.firstName }} {{instructor.lastName}}</p>
              <v-spacer></v-spacer>
              <v-btn text id="editBtn">Edit</v-btn>
              <v-btn text id="destroyBtn">Destroy</v-btn>
            </v-list-item>
          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Courses</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item :key="nn" v-for="(classItem, nn) in classList">
              <p>{{classItem.className}}</p>
              <v-spacer></v-spacer>
              <v-btn text id="editBtn">Edit</v-btn>
              <v-btn text id="destroyBtn">Destroy</v-btn>
            </v-list-item>

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

export default {
  name: "AdminPage",
  components: {UserEditComponent},

  data(){
    return{
      usersList:[
        new User(1, 'John', 'Doe', 27, 'Male', 'Software Engineer', 'johndoe@gmail.com', '14143768888', 'Google'),
        new User(2, 'Mark', 'Woe', 30, 'Male', 'Software Engineer', 'markwoe@gmail.com', '14143768889', 'Google'),
        new User(3, 'Mary', 'Foe', 25, 'Female', 'Software Engineer', 'maryfoe@gmail.com', '14143768887', 'Google')
      ],
      instructorList:[
          new InstructorItem(1, 'James', 'Johnson', 'jjohnson@gmail.com', 14144558888, '1/25/2000'),
          new InstructorItem(2, 'Robert', 'Johnson', 'rjohnson@gmail.com', 14144558888, '1/25/2000'),
          new InstructorItem(3, 'John', 'Johnson', 'jjohnson@gmail.com', 14144558888, '1/25/2000')
      ],
      classList:[
        new ClassItem(1,'Class 1', '9/10/2022', '9/22/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(2, 'Class 2', '9/23/2022', '10/1/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(3, 'Class 3', '10/2/2022', '10/13/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(4,'Class 4', '10/15/2022', '10/23/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
      ],
      dialog:false
    }
  }
}
</script>

<style scoped>

</style>