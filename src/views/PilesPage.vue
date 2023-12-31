<template>
  <section class="container-fluid">
    <div class="title-container container my-3 position-relative">
      <!-- 8. get the data from the vuex (which was doing in step 7. in HomePage.vue) -->
      <h2>{{ $store.state.questionName }}</h2>
      <p>{{ $store.state.questionDesp }}</p>
      <div class="position-absolute btn-holder">
        <button class="btn btn-info" @click="back">Back</button>
      </div>
      <!-- go to script block -->
    </div>

    <!-- start Looping with the required answers from computed -->
    <div class="pile-container container">
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-12 mb-4"
          v-for="(pile, index) in pileAnswers"
          :key="pile.AnswerId"
        >
          <div class="card">
            <img
              :src="require(`@/assets/articles/${id}/${index + 1}.jpg`)"
              alt="pile image"
            />
            <!-- index + 1 because my images name is only (1, 2, 3, 4).jpg
            I make the index + 1 so I can easily catch the image name with index number  -->
            <div class="card-body">
              <div>
                <h5 class="card-title">{{ pile.AnswerName }}</h5>
              </div>
              <div>
                <router-link
                  :to="{
                    name: 'DetailPage',
                    params: {
                      ansId: pile.AnswerId,
                      index: index,
                    },
                  }"
                  class="btn btn-info"
                  >See More</router-link
                >
                <!-- router-link done, defined path in the  router => index.js -->
                <!-- after done this step, go to DetailPage.vue -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PilePage",
  props: ["id"],
  data() {
    return {
      // get The entire api data from vuex
      questions: this.$store.state.questions,
      answers: this.$store.state.answers,
    };
  },
  computed: {
    // 9. Check the clicked card Id and answer Ids. If they are equal
    // return the same ids answers for looping 4 cards
    pileAnswers() {
      const getPileAnswers = this.answers.filter((answer) => {
        return answer.QuestionId == this.$route.params.id;
      });
      //   console.log(this.$route.params.id);
      //   console.log(getPileAnswers);
      return getPileAnswers;
    },
    // after getting required answers we can loop in the template
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title-container h2 {
  font-size: 36px;
  font-weight: 600;
}

.title-container p {
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0;
}

.card {
  width: 100%;
  height: 550px;
}

.card-body {
  flex-wrap: wrap;
  align-content: space-between;
}

.card img {
  height: 450px;
}
.card h5 {
  font-weight: 600;
}

.btn-holder {
  top: 10px;
  right: 0;
}
</style>
