<script setup lang="ts"></script>

<template>
  <div class="download-button">
    <div class="download-button-text">
      <p>pdfファイルを表示</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.download-button {
  border-radius: 2em;
  border: solid 1.5px #333333;
  width: 15em;
  height: 3em;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #333333;
    color: #fff;
  }

  .download-button-text {
    padding-top: 1em;
    transition: 0.5s;
    text-decoration: none;

    &:active {
      padding-top: 1.3em;
    }
  }

  > p {
    color: #333333;
    font-weight: bold;
  }
}

@media screen and (max-width: 768px) {
  .download-button {
    width: 11em;
  }
}
</style>
