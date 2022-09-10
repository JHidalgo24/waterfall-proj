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

        <v-btn outlined @click="dialogMoreInfo = !dialogMoreInfo">
          <v-icon>mdi-arrow-expand</v-icon>
        </v-btn>
        <v-btn @click="addToCart" outlined>
          Add to Cart
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
                         src="https://www.pngitem.com/pimgs/m/130-1300305_user-female-alt-icon-default-user-image-png.png"></v-img>
                  <h3>Instructor: {{ classThing.instructor }}</h3>
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
                    {{ classThing.cost }}
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
  name: "ClassComponent",
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
  methods: {
    addToCart() {
      this.$emit('add-class', this.classThing)
    }
  }
}
</script>

<style scoped>

</style>