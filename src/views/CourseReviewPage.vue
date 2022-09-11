<template>
  <div>
    <v-row class="ma-0">
      <v-col :key="n" v-for="(classThing, n) in classList" cols sm="12" lg="3" md="4">
        <review-component @add-review="addReview" class="my-4" :classThing="classThing"
                          ></review-component>
      </v-col>
    </v-row>


  </div>
</template>

<script>
import ClassItem from "@/Models/ClassItem";
import ReviewComponent from "@/components/ReviewComponent";

export default {
  name: "CourseReviewPage",
  components: {ReviewComponent},

  data() {
    return {
      classList: [
        new ClassItem(1, 'Class 1', '9/10/2022', '9/22/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(2, 'Class 2', '9/23/2022', '10/1/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(3, 'Class 3', '10/2/2022', '10/13/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(4, 'Class 4', '10/15/2022', '10/23/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
      ]
    }
  },
  methods: {
    addReview(review) {
      let lemon = Object.assign({}, review)

      let index = this.classList.findIndex((obj => obj.classID === review.classID));
      this.classList[index].reviews.push(lemon)

      console.log(this.classList[index].reviews)
    }
  }
}
</script>

<style scoped>

</style>