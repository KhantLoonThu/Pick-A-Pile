<template>
  <section class="container-fluid home-page-container">
    <div class="title-container container my-2">
      <h1>Tarot | Pick A Pile</h1>
      <p>
        ပင်ပန်းနေတဲ့ စိတ်လေးကို ခဏ လျှော့ချထားပါ💖 ခဏလေးအသက်ကို ရှူသွင်း
        ရှူထုတ်လုပ်လိုက်ပါ 💝စိတ်ကိုခဏလျှော့ချပြီး universe က ပေးချင်တဲ့ message
        ကိုယ့်စီ ရောက်အောင် အာရုံပြုပြီး
        ကိုယ့်အကြိုက်ဆုံးကတ်တစ်ခုကိုရွေးချယ်လိုက်ပါ။
      </p>
    </div>

    <!-- 5. start looping the api datas in <SwiperSlide> tag
      it is special tag of swiper js framework 
      so can consider it
      as col-md-3 div 
      -->
    <div class="container mt-3 position-relative">
      <!-- Instead of making row and cols just using swiper special tags -->
      <!--  -->
      <Swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        :modules="modules"
      >
        <SwiperSlide
          v-for="question in $store.state.questions"
          :key="question.QuestionId"
        >
          <div class="card mb-5">
            <img
              :src="require(`@/assets/articles/q${question.QuestionId}.jpg`)"
              alt="question image"
            />
            <div class="card-body d-flex flex-wrap align-content-between">
              <h5>{{ question.QuestionName }}</h5>
              <p class="text-truncate">{{ question.QuestionDesp }}</p>
              <div>
                <router-link
                  :to="{
                    name: 'PilesPage',
                    params: {
                      id: question.QuestionId,
                    },
                    query: {
                      queName: question.QuestionName,
                    },
                  }"
                  @click.prevent="
                    sendingQuestion(
                      question.QuestionName,
                      question.QuestionDesp
                    )
                  "
                  class="btn btn-info"
                  >Read More</router-link
                >
                <!-- 6. after using router-link, defined the path
                in the (route => index.js) and go to script block, methods... -->
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  name: "HomePage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },

  // 7. using this sendingQuestion method because
  // when I click the router-link I want to send the data to the child
  // component using vuex... the dispatching code can be found in
  // (store => index.js) vuex...
  methods: {
    sendingQuestion(queName, queDesp) {
      this.$store.dispatch("gettingQuestion", {
        param1: queName,
        param2: queDesp,
      });
    },
  },
  // and go to PilesPage.vue
};
</script>

<style scoped>
.home-page-container {
  width: 100%;
  height: 100%;
  background: #fff;
}
.title-container h1 {
  font-size: 42px;
  font-weight: 600;
}
.card {
  width: 100%;
  height: 600px;
}

.card img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.swiper {
  width: 400px;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .title-container h1 {
    font-size: 2em;
    text-align: center;
  }
}
</style>
