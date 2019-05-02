<template>
  <div>
    <div class="feature-section call-to-action">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-2">
            <h1 class="call-to-action-number">1.</h1>
          </div>
          <div class="col-3">
              <scroll-picker :drag-sensitivity="1" :options="options" v-model="number" />
          </div>
          <div class="col-7">
            <h4>Pick Exercise</h4>
            <h4 lang="zh">选择习题</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row mt-4">
      <div class="col-sm-6 mb-4" v-for="audio in filteredFiles" :key="audio.id">
        <div class="card shadow-sm">
          <div class="card-body d-sm-flex justify-content-between">
            <div>
            <h5 class="card-title">ID: {{audio.id}}</h5>
            <h6 class="card-subtitle">Unit: {{audio.unit}}<br> Lesson: {{audio.lesson}}</h6>
            </div>
            <audio :src="'assets/audio/' + audio.filename" :type="'audio/' + audio.extension" controls></audio>
          </div>
        </div>
      </div>
    </div> -->
    <div class="feature-section call-to-action">
      <div class="container">
        <div class="row align-items-baseline">
          <div class="col-2">
            <h1 class="call-to-action-number">2.</h1>
          </div>
          <div class="col-10">
            <h4>Press Play / <span lang="zh">播放</span></h4>
            <img class="img-fluid" style="height: 90px" src="assets/images/aj-audiopage-cartoon.jpg">
          </div>
        </div>
        <div v-for="(audio, index) in filteredFiles" :key="audio.id">
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
    number: 1,
    search: '',
    audioFiles: []
  }),
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
    playSound(index) {
      console.log(this.audioFiles[index]);
      var audio = new Audio(`assets/audio/${this.audioFiles[index].filename}`);
      audio.play();
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