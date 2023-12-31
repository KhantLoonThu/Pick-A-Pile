// 1. Firstly import createStore from vuex
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    // 2. create empty arrrays to store my api data 
    // and go down to actions block
    state: {
        questions: [],
        answers: [],
        questionName: '',
        questionDesp: '',
    },
    mutations: {
        // 4. catch the action's api data by using commit names.
        // and store the data in the state's array
        getQuestions(state, value) {
            state.questions = value;
            // console.log(state.questions); this console worked
        },
        getAnswers(state, value) {
            state.answers = value;
            // console.log(state.answers) this console worked
        },
        // after adding datas, we can go to HomePage.vue

        // the below one is dispatching the required datas
        // from the child component to other using vuex.

        // question name and desp
        assigningQuestion(state, { name, desp }) {
            // stored the data (name, desp) in the state's empty arrays
            state.questionName = name;
            state.questionDesp = desp;
            // console.log(state.questionName)
            // console.log(state.questionDesp)
        }
    },
    actions: {
        // 3. get the api data using axios and async
        async getData(context) {
            try {
                let response = await axios.get("/PickAPile.json");
                let data = await response.data;
                // console.log(data) this console worked...

                // since the console worked, 
                // I can send the data to the state's array by commiting to the mutations
                context.commit('getQuestions', data.Questions);
                context.commit('getAnswers', data.Answers);
                // after commiting, go to mutations...
            } catch (error) {
                console.log('While fetching the data get the error', error);
            }
        },

        gettingQuestion(context, { param1, param2 }) {
            context.commit('assigningQuestion', { name: param1, desp: param2 });
        }
    },
    getters: {

    }
})

export default store;