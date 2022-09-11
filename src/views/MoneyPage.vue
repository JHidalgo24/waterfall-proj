<template>
  <div>
    <h1 class="text-center">Analytics</h1>
    <v-row class="ma-0">
      <v-col cols sm="12" lg="6">
        <v-card>
          <h1 class="text-center pa-11">Jan-Dec Income</h1>
          <v-sparkline
              :value="value.map(c => c.income)"
              height="100"
              padding="24"
              color="green"
              stroke-linecap="round"
              smooth

          >
            <template v-slot:label="item">
              ${{ item.value }}
            </template>
          </v-sparkline>
        </v-card>
      </v-col>
      <v-col cols sm="12" lg="6">
        <v-card>
          <h1 class="text-center pa-11">Jan-Dec New Users</h1>
          <v-sparkline
              :value="userValue.map(c => c.growth)"
              height="100"
              padding="24"
              color="orange"
              stroke-linecap="round"
              smooth
          >
            <template v-slot:label="item">
              + {{ item.value }}
            </template>
          </v-sparkline>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col cols sm="12" lg="8">
        <v-card>
          <h1 class="text-center pa-11">Jan-Dec Lost Users</h1>
          <v-sparkline
              :value="userLoss.map(c => c.loss)"
              height="135"
              padding="24"
              color="orange"
              stroke-linecap="round"
              smooth
          >
            <template v-slot:label="item">
              - {{ item.value }}
            </template>
          </v-sparkline>
        </v-card>
      </v-col>
      <v-col cols sm="12" lg="4">
        <v-card elevation="0" >
          <v-toolbar-title><h1 class="pa-2 text-center">Most Used Courses</h1></v-toolbar-title>


          <v-list :key="n" v-for="(classThing,n) in mostUsedClasses">
            <v-card elevation="1">
              <h4 class="px-4">Number {{n + 1}}</h4>
              <v-list-item>
                <b>Class:&nbsp; </b> {{ classThing.className }}
              </v-list-item>
              <v-list-item>
                <b>Times Taken:&nbsp; </b> {{ classThing.users }}
              </v-list-item>
            </v-card>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MoneyPage",
  data: () => ({
    value: [
      {income: 4323, month: 'Jan'},
      {income: 4246, month: 'Feb'},
      {income: 6275, month: 'Mar'},
      {income: 5210, month: 'Apr'},
      {income: 2590, month: 'May'},
      {income: 6210, month: 'Jun'},
      {income: 1760, month: 'Jul'},
      {income: 1760, month: 'Aug'},
      {income: 1760, month: 'Sep'},
      {income: 1432, month: 'Oct'},
      {income: 1760, month: 'Nov'},
      {income: 3760, month: 'Dec'},
    ],
    userValue: [
      {growth: 132, month: 'Jan'},
      {growth: 113, month: 'Feb'},
      {growth: 224, month: 'Mar'},
      {growth: 224, month: 'Apr'},
      {growth: 214, month: 'May'},
      {growth: 124, month: 'Jun'},
      {growth: 562, month: 'Jul'},
      {growth: 42, month: 'Aug'},
      {growth: 124, month: 'Sep'},
      {growth: 422, month: 'Oct'},
      {growth: 124, month: 'Nov'},
      {growth: 142, month: 'Dec'},
    ],
    userLoss: [
      {loss: 14, month: 'Jan'},
      {loss: 25, month: 'Feb'},
      {loss: 25, month: 'Mar'},
      {loss: 14, month: 'Apr'},
      {loss: 25, month: 'May'},
      {loss: 18, month: 'Jun'},
      {loss: 14, month: 'Jul'},
      {loss: 100, month: 'Aug'},
      {loss: 132, month: 'Sep'},
      {loss: 23, month: 'Oct'},
      {loss: 24, month: 'Nov'},
      {loss: 22, month: 'Dec'},
    ],
    mostUsedClasses: [
      {className: 'Class 1', users: 2142},
      {className: 'Class 23', users: 2100},
      {className: 'Class 21', users: 2092},
      {className: 'Class 4', users: 2000},
      {className: 'Class 124', users: 1999}
    ]
  }),
}
</script>

<style scoped>

</style>