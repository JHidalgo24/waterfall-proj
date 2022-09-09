<template>
<div class="d-sm-block d-md-inline-flex d-lg-inline-flex d-xl-inline-flex">
  <class-component class="ma-2 pa-1" :key="n" :classThing="classThing" v-for="(classThing, n) in classList">
  </class-component>
</div>
</template>

<script>
import ClassItem from '@/Models/ClassItem'
import classComponent from '@/components/ClassComponent'

export default {
  name: "ClassPage",
  components:{
    classComponent,
  },
  data(){
    return{
      classList:[
        new ClassItem(1,'Class 1', '9/10/2022', '9/22/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(2, 'Class 2', '9/23/2022', '10/1/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(3, 'Class 3', '10/2/2022', '10/13/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
        new ClassItem(4,'Class 4', '10/15/2022', '10/23/2022', '5:00pm', '7:00pm', 395, 25, '123 elm grove Dr', 'Cyndi Lambach', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est expedita explicabo'),
      ]
    }
  }
}
</script>

<style scoped>

</style>