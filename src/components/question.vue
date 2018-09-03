<template>
  <main class="container">
    <!-- Question text -->
    <div id="question-area">
      <p id="question-text">{{ questionText || 'Question text' }}</p>
    </div>
    <!-- Answer -->
    <div id="answer-area">
      <div class="form-group">
        <input type="number" id="input-guess"
          :class="{'font-weight-bold': guessStatus === 'incorrect',
          'text-warning': guessStatus === 'incorrect', 'text-danger': guessStatus === 'justTellMe'}"
          v-model="userGuess" :disabled="isQuestionFinished()"
          aria-label="Answer field" step="0.01" min="0">
      </div>
      <div class="form-group">
        <button v-if="isQuestionFinished()" type="submit" class="btn-validate-answer btn" 
          :class="{'btn-success': guessStatus === 'correct', 'btn-danger': guessStatus === 'justTellMe'}"
          @click="updateQuestion" aria-label="Get the next question">Get next question</button>
        <button v-else class="btn-validate-answer btn btn-primary" 
          :class="{'btn-warning': guessStatus == 'incorrect'}" type="submit"
          @click="validateAnswer" :disabled="guessStatus === 'correct'"
          aria-label="Check answer">Check answer</button>
      </div>
      <div v-if="guessStatus === 'correct'" class="alert alert-success" role="alert">
        You're right!
      </div>
      <div class="form-group" v-if="!isQuestionFinished()">
      <!-- New question btn -->
        <button class="btn-secondary" @click="updateQuestion"
          aria-label="Skip to next question">Skip</button>
      <!-- Get hint btn -->
        <button class="btn-secondary" @click="justTellMe"
          aria-label="Just tell me the answer">Just tell me</button>
      </div>
    </div><!-- end row -->
  </main><!-- end .container -->
</template>

<style scoped lang="scss">
@import "../styles/index";

#question-area {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 1.4rem;
  text-align: center;
}

#answer-area {
  display: flex;
  flex-direction: column;

  .form-group {
    display: flex;
    flex-direction: row;
    margin: 0 auto 1rem auto;
    max-width: 25rem;
    width: 100%;

    .btn-validate-answer {
      font-size: 1.25rem;
      font-weight: bold;
      width: 100%;
    }

    .btn-secondary {
      flex-basis: 0;
      flex-grow: 1;

      &:not(:last-child) {
        margin-right: 0.4rem;
      }
    }
  }
}

#input-guess {
  box-sizing: border-box;
  font-size: 1.5rem;
  text-align: center;
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

      private updateQuestion(): void {
        const geneatedQ = generateQuestionAndAnswer([]);
        this.questionText = geneatedQ[0];
        this.correctAnswer = geneatedQ[1];
        // Clear the GUI
        this.guessStatus = '';
        this.userGuess = 0;
      }

      private validateAnswer(): void {
        this.guessStatus = '';
        if (this.userGuess <= this.correctAnswer + 0.05 && this.userGuess >= this.correctAnswer - 0.05) {
          this.guessStatus = 'correct';
        } else {
          this.guessStatus = 'incorrect';
          setTimeout(() => {
            if (this.guessStatus !== 'justTellMe') {
              this.guessStatus = '';
            }
          }, 2000);
        }
      }

      private isQuestionFinished(): boolean {
        return this.guessStatus === 'correct' || this.guessStatus === 'justTellMe';
      }

      private justTellMe(): void {
        this.guessStatus = 'justTellMe';
        this.userGuess = Math.round(this.correctAnswer * 100) / 100; // round answer to two decimals max
      }

      private mounted(): void {
        this.updateQuestion();
      }
  }
</script>
