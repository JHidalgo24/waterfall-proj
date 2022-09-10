<template>
  <div>
    <v-card>
      <v-card-title>
        <h1>{{ classThing.className }}</h1>
      </v-card-title>

      <v-card-text>
        <h4><b>Instructor:</b> {{ classThing.instructor }}</h4>
        <p>
          {{ classThing.description }}
        </p>
        <p>
          <b>Start</b> {{ classThing.startDate }} - <b>End</b> {{ classThing.endDate }}
        </p>
        <p> {{ classThing.actual }}/{{ classThing.maxSize }} Open Seats</p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="red" outlined @click="removeFromCart">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn outlined @click="dialogMoreInfo = !dialogMoreInfo">
          <v-icon>mdi-arrow-expand</v-icon>
        </v-btn>
      </v-card-actions>

      <v-dialog width="80vh" transition="dialog-bottom-transition" v-model="dialogMoreInfo">
        <v-card>
          <v-card-title class="text-h5">{{ classThing.className }}</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-img width="15vw" contain
                         src="https://cdn.inst-fs-iad-prod.inscloudgate.net/2846b1b6-e3a7-4899-9506-9f1937e0a415?token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6ImNkbiJ9.eyJyZXNvdXJjZSI6Ii8yODQ2YjFiNi1lM2E3LTQ4OTktOTUwNi05ZjE5MzdlMGE0MTUiLCJ0ZW5hbnQiOiJjYW52YXMiLCJ1c2VyX2lkIjoiMTA5NTEwMDAwMDAwMDYyMjc2IiwiaWF0IjoxNjYyNjMyMTYzLCJleHAiOjE2NjI3MTg1NjN9.rvsw96N-91gi1KUidHQ2N9N5HimbcHMNU9Isz6yDXKW4hvoeZrDKdfUFR0EjmRgtW-uWZt19TPbhlGkeMrCf2w&content_type=image%2Fpng"></v-img>
                  <h3>Instructor: {{classThing.instructor}}</h3>
                </v-col>

                <v-col>
                  <h3 class="ma-3">
                    Times
                    <br>
                    {{ classThing.startTime }} - {{ classThing.endTime }}
                  </h3>
                  <h3 class="ma-3">
                    Spots Available
                    <br>
                    {{ classThing.maxSize }} / {{ classThing.actual }}
                  </h3>
                  <h3 class="ma-3">
                    Address
                    <br>
                    {{ classThing.address }}
                  </h3>
                  <h3 class="ma-3">
                    Cost
                    <br>
                    {{classThing.cost}}
                  </h3>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>


    </v-card>
  </div>
</template>

<script>
export default {
  name: "CartComponent",
  props: {
    classThing: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialogRegister: false,
      dialogMoreInfo: false
    }
  },
  methods:{
    removeFromCart(){
      this.$emit('remove-cart',this.classThing)
    }
  }
}
</script>

<style scoped>

</style>