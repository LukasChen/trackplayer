<template>
  <div>
    <div class="feature-section call-to-action">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-2">
            <h1 class="call-to-action-number">1.</h1>
          </div>
          <div class="col-3" style="font-size: 15px">
            <scroll-picker :touch-sensitivity="0.5" :drag-sensitivity="1" :options="options" v-model="number" />
            <!-- <button @click="show = true">Picker</button> -->
            <!-- <vue-pickers :show="show" :columns="1" :selectData="options" @confirm="confi" /> -->
          </div>
          <div class="col-7">
            <h4>Pick Exercise</h4>
            <h4 lang="zh">选择习题</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="feature-section call-to-action section-background">
      <div class="container">
        <div class="row align-items-baseline">
          <div class="col-2">
            <h1 class="call-to-action-number">2.</h1>
          </div>
          <div class="col-10">
            <h4>Press Play / <span lang="zh">播放</span></h4>
            <img class="img-fluid" style="height: 90px" src="assets/images/aj-audiopage-cartoon.png">
          </div>
        </div>
        <div v-for="audio in filteredFiles" :key="audio.id">
          <!-- <vuetify-audio :file="'assets/audio/' + audio.filename"></vuetify-audio> -->
          <audio class="d-block" style="width: 100%"   :src="'assets/audio/' + audio.filename" controls></audio>
        </div>
      </div>
    </div>
    <!-- <audio src="assets/001-U01-A.mp3" controls></audio> -->
  </div>
</template>
<script>

// import VuetifyAudio from 'vuetify-audio';
import vuePickers from 'vue-pickers'

function arrayNumberRange(min,max) {
  let range = [];
  for (let i = min; i < max + 1; i++) {
    range.push(i);
  }
  return range;
}

export default {
  data : () => ({
    options: arrayNumberRange(1,7),
    number: 2,
    search: '',
    show: false,
    audioFiles: []
  }),
  components: {
    vuePickers
  },
  created() {
    fetch('/trackplayer/assets/audio.json')
    .then(response => response.json())
    .then( (data) => {
      for (let audio of data) {
        const splited = audio.split('-');
        const id = splited[0];
        const unit = splited[1];
        const lesson = splited[2].split('.')[0];
        const extension = splited[2].split('.')[1];
        this.audioFiles.push({
          filename: audio,
          id,
          unit,
          lesson,
          extension
        });
      }
      console.log(this.audioFiles);
    });
  },
  methods: {
    confirmPick(val) {
      this.show = false;
      this.number = [val.select1.value];
    }
  },
  computed: {
    filteredFiles() {
      return this.audioFiles.filter(audio => {
        return audio.id.toLowerCase().includes(this.number)
      })
    }
  }
}

</script>