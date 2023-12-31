<template>
  <!-- go to script block -->
  <section class="container detail-container position-relative">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-12">
        <img
          :src="require(`@/assets/articles/${id}/${Number(index) + 1}.jpg`)"
          alt=""
        />
        <!-- index+1 also to get right image name -->
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div class="content-container">
          <h3>{{ getDetailAnswer.AnswerName }}</h3>
          <p>{{ getDetailAnswer.AnswerDesp }}</p>
        </div>
      </div>
    </div>
    <div class="position-absolute btn-holder">
      <button class="btn btn-info" @click="back">Back</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailPage",
  props: ["id", "index"],
  computed: {
    // check the clicked answer id and array answers is
    // if there is, return that equal object by using find method
    getDetailAnswer() {
      let answers = this.$store.state.answers;
      let requiredAnswer = answers.find((answer) => {
        return answer.AnswerId == this.$route.params.ansId;
      });
      console.log(requiredAnswer);
      return requiredAnswer;
    },
    // after getting the required object, can go to template to
    // render the details
  },
  methods: {
    // this method is for back button. $router.back() is built in method
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.detail-container {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}

img {
  width: 400px;
  height: 600px;
}

.row {
  margin-top: 100px;
}

.content-container {
  margin-top: 200px;
}

.content-container h3 {
  font-size: 36px;
  font-weight: 600;
}

.content-container p {
  font-size: 18px;
  font-weight: 500;
}

.btn-holder {
  top: 100px;
  right: 0;
}
</style>
