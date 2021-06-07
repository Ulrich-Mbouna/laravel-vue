<template>
  <section class="uk-section">
    <div class="uk-container uk-container-xsmall">
      <div class="grid grid-cols-2">
        <div class="notes text-center">
          <h2>Notes</h2>
          <div class="" v-for="(note, index) in notes" :key="index">
            {{ note }}
          </div>
        </div>
        <div class="timespan text-center">
          <h2>Timespans</h2>
          <div class="" v-for="(timestamp, index) in timestamps" :key="index">
            {{ timestamp }}
          </div>
        </div>
      </div>
      <input-component />
      <note-count-component />
    </div>
  </section>
</template>

<script>
import InputComponent from "./components/InputComponent";
import NoteCountComponent from "./components/NoteCountComponent";
import { emitter } from "../api";

export default {
  components: {
    InputComponent,
    NoteCountComponent,
  },
  data() {
    return {
      notes: [],
      timestamps: [],
    };
  },
  created() {
    emitter.on("add-note", (event) => this.addNotes(event));
  },
  methods: {
    addNotes(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    },
  },
};
</script>

<style scoped></style>
