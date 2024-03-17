<script lang="ts" setup></script>

<template>
  <div class="sns-area">
    <h1>SNS</h1>
    <div class="sns-field">
      <a
        id="sns-x"
        href="https://x.com/ynu_fes"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="x" src="~/assets/images/SNSicon/x-white.webp" />
      </a>
      <a
        id="sns-ins"
        href="https://www.instagram.com/ynu_fes"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="instagram"
          src="~/assets/images/SNSicon/instagram-logo.webp"
        />
      </a>
      <a
        id="sns-f"
        href="https://www.facebook.com/ynufes"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="facebook" src="~/assets/images/SNSicon/facebook-logo.webp" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sns-area {
  width: 320px;
  height: 320px;
  background-color:rgba(#f6f6f6, 0.6);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: fit-content;
    text-align: center;
    font-size: 32px;
    margin-bottom: 30px;
  }
  .sns-field {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px auto;
    gap: 30px;
    margin-bottom: 30px;

    img {
      transition: all 0.2s ease-in-out;
      aspect-ratio: 1;
    }

    #sns-f img {
      width: 55px;
    }

    #sns-x {
      width: 55px;
      margin: 2.5px;
      border-radius: 50%;
      background: black;

      img {
        width: 35px;
        padding: 10px;
      }
    }

    #sns-ins {
      width: 60px;

      img {
        width: 50px;
        padding: 5px;
      }
    }
  }
}
</style>
