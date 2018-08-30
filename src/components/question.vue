<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- Question text -->
        <div id="question-area" class="row">
          <div class="col-12">
            <p id="question-text">{{ questionText || 'Question text' }}</p>
          </div>
        </div>
        <!-- Answer -->
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="form-group row">
              <input type="number" class="form-control text-center form-control-lg"
                :class="{'font-weight-bold': guessStatus === 'incorrect', 'text-warning': guessStatus === 'incorrect'}"
                id="answer-field" v-model="userGuess" :disabled="guessStatus === 'correct'"
                aria-label="Answer field" step="0.01" min="0">
            </div>
            <div class="form-group">
              <button v-if="guessStatus !== 'correct'" class="btn-validate-answer btn btn-primary" 
                :class="{'btn-warning': guessStatus == 'incorrect'}" type="submit"
                @click="validateAnswer" :disabled="guessStatus === 'correct'"
                aria-label="Check answer">Check answer</button>
              <button v-else class="btn-validate-answer btn btn-success" type="submit"
                @click="updateQuestion" aria-label="Get the next question">Get next question</button>
            </div>
            <div v-if="guessStatus === 'correct'" class="alert alert-success" role="alert">
              You're right!
            </div>
            <div class="form-group" v-if="guessStatus !== 'correct'">
              <div class="row">
                <!-- New question btn -->
                <div class="col-6">
                  <button class="btn btn-outline-secondary w-100" @click="updateQuestion" aria-label="Skip to next question">Skip</button>
                </div>
                <!-- Get hint btn -->
                <div class="col-6">
                  <button class="btn btn-outline-danger w-100" @click="updateQuestion" aria-label="Just tell me the answer">Just tell me</button>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end row -->
      </div><!-- end .question -->
    </div><!-- end .row -->
  </div><!-- end .container -->
</template>

<style scoped lang="scss">
#question-area {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.4rem;
  text-align: center;
}

#answer-field {
  padding-left: 0;
  padding-right: 0;
}

.btn-validate-answer {
  font-size: 1.25rem;
  font-weight: bold;
  width: 100%;
}

</style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { generateQuestionAndAnswer } from '../functions/generateQuestion';
  import { setTimeout } from 'timers';

  @Component
  export default class Question extends Vue {
      private questionText: string = '';
      private correctAnswer: number = 0;
      private userGuess: number = 0;
      private guessStatus: string = '';

      private updateQuestion() {
        const geneatedQ = generateQuestionAndAnswer([]);
        this.questionText = geneatedQ[0];
        this.correctAnswer = geneatedQ[1];
        // Clear the GUI
        this.guessStatus = '';
        this.userGuess = 0;
      }

      private validateAnswer() {
        this.guessStatus = '';
        if (this.userGuess <= this.correctAnswer + 0.05 && this.userGuess >= this.correctAnswer - 0.05) {
          this.guessStatus = 'correct';
        } else {
          this.guessStatus = 'incorrect';
          setTimeout(() => { this.guessStatus = ''; }, 2000);
        }
      }

      private mounted() {
        this.updateQuestion();
      }
  }
</script>
