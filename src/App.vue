<template>
  <div>
    <h1>Hello World {{message}}</h1>
    <input class="form-control" v-model="search">
    <ul>
      <li v-for="audio in filteredFiles" :key="audio">
        <audio controls>
          <source :src="'assets/audio/' + audio" type="audio/ogg">
        </audio>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data : () => ({
    message: 'hi',
    search: '',
    audioFiles: []
  }),
  mounted() {
    fetch("../audio.json")
    .then(response => response.json())
    .then( (data) => {
      this.audioFiles = data;
      console.log(this.audioFiles);
    });
  },
  computed: {
    filteredFiles() {
      return this.audioFiles.filter(audio => {
        return audio.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}

</script>