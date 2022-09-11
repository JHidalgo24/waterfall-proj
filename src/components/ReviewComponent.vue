<template>
  <div>
    <v-card>
      <h1 >{{ classThing.className }}</h1>
      <v-card-text>
        <h4><b>Instructor:</b> {{ classThing.instructor }}</h4>
        <p>
          {{ classThing.description }}
        </p>
        <p>
          <b>Start</b> {{ classThing.startDate }} - <b>End</b> {{ classThing.endDate }}
        </p>
        <p> {{ classThing.actual }}/{{ classThing.maxSize }} Open Seats</p>

        <h4>Rating {{reviewAverage}}/5</h4>
        <h6>{{classThing.reviews.length}} Reviews</h6>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="dialogRating = !dialogRating"  light  text color="#CFB53B" >
          Review
          <v-icon>mdi-star-outline</v-icon>
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

      <v-dialog  width="80vh" transition="dialog-top-transition" v-model="dialogRating">
        <v-card>
          <v-card-actions >
            <v-btn color="red" @click="dialogRating = !dialogRating" text >Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="green" @click="addReview" text >Submit Review</v-btn>
          </v-card-actions>
          <h2 class="pa-5">Rating </h2>
          <v-card-text>
            <v-row>
              <v-col cols sm="12">
                <v-form>
                  <v-select v-model="reviewItem.rating" :items="[1,2,3,4,5]" hint="1-5" label="Rating 1-5"></v-select>
                  <v-textarea  v-model="reviewItem.comment" hint="Leave your feedback or thoughts (It's okay to not like the class just say why)" placeholder="Best Class Ever or Worst Class Ever" label="Comments"></v-textarea>
                </v-form>
              </v-col>



              <v-col  cols sm="12" >
                <h3>Comments and Review </h3>

                <v-data-table
                    v-show="classThing.reviews.length !== 0"
                    :headers="headers"
                    :items="classThing.reviews"
                    :items-per-page="10"
                    class="elevation-1"
                    hide-default-footer
                ></v-data-table>

              </v-col>
            </v-row>
          </v-card-text>

        </v-card>
      </v-dialog>


    </v-card>
  </div>
</template>

<script>


export default {
  name: "ReviewComponent",
  props: {
    classThing: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialogRegister: false,
      dialogMoreInfo: false,
      reviewItem:Object.assign({}),
      dialogRating:false,
      headers:[{ text: 'Rating', value: 'rating' },
        { text: 'Review', value: 'comment' },]
    }
  },
  methods:{
    async addReview(){

      this.reviewItem.rating = isNaN(this.reviewItem.rating) ? 5 : this.reviewItem.rating

      this.reviewItem.classID = this.classThing.classID
      this.reviewItem.userID = 0;

      await this.$emit('add-review',this.reviewItem)

      this.dialogRating = false;

      this.reviewItem.rating = null;
      this.reviewItem.comment = null;


    }
  },
  computed:{
    reviewAverage(){
      let total = 0;

      for (let i = 0; i < this.classThing.reviews.length; i++) {
       total += this.classThing.reviews[i].rating
      }




      return isNaN(total / this.classThing.reviews.length) ? '-': total / this.classThing.reviews.length ;
    }
  }
}
</script>

<style scoped>

</style>