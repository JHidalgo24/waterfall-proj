<template>
  <v-row class="ma-0">
    <v-col cols lg="8">
      <h2 class="text-center">My Calendar</h2>
      <div>
        <v-sheet
            tile
            height="54"
            class="d-flex"
        >
          <v-btn
              icon
              class="ma-2"
              @click="$refs.calendar.prev()"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-select
              v-model="type"
              :items="types"
              dense
              outlined
              hide-details

              label="Type"
          ></v-select>

          <v-select
              v-model="weekday"
              :items="weekdays"
              dense
              outlined
              hide-details
              label="Weekdays"

          ></v-select>
          <v-spacer></v-spacer>
          <v-btn
              icon
              class="ma-2"
              @click="$refs.calendar.next()"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
              ref="calendar"
              v-model="value"
              :weekdays="weekday"
              :type="type"
              :events="events"
              :event-overlap-threshold="30"

          ></v-calendar>
        </v-sheet>
      </div>
    </v-col >
    <v-col cols lg=4>
      <h2 class="text-center">My Classes</h2>
      <v-card class="mt-4" :key="n" v-for="(classItem,n) in events">
        <v-card-title>{{ classItem.name }}</v-card-title>

        <v-card-text>
          <p><b>Date Start:</b> {{classItem.start.toLocaleDateString([], {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}}</p>


          <p><b>Date End:</b> {{classItem.end.toLocaleDateString([], {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}}</p>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "UserCourses",
  data: () => ({
    type: 'month',
    types: ['month', 'week', 'day', '4day'],
    mode: 'stack',
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      {text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6]},
      {text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0]},
      {text: 'Mon - Fri', value: [1, 2, 3, 4, 5]},
      {text: 'Mon, Wed, Fri', value: [1, 3, 5]},
    ],
    value: '',
    events: [
      {name: 'Class 1', start: new Date(2022, 8, 5), end:new Date(2022, 8, 8), color:'red'},
      {name: 'Class 13', start: new Date(2022, 8, 4), end:new Date(2022, 8, 7), color:'orange'},
      {name: 'Class 5', start: new Date(2022, 8, 12), end:new Date(2022, 8, 15), color:'green'},
      {name: 'Class 12', start: new Date(2022, 8, 20), end:new Date(2022, 8, 24), color:'yellow'}
    ]
  })
}
</script>

<style scoped>

</style>