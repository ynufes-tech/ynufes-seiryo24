<script lang="ts" setup>
import BackToHome from "~/components/BackToHome.vue";

useHead({
  title: "清陵祭パンフレット | 24清陵祭公式HP~花瑞希~",
  meta: [
    {
      name: "description",
      content: "清陵祭パンフレットのダウンロードはこちらから!!",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <HeaderPageIcon />
    <PageTitle title="Pamphlet" sub-title="パンフレットページ" />
    <div class="content-root">
      <div class="inner-pamphlet">
        <div class="pamphlet-items">
          <div class="img-holder">
            <img
              alt="pamphlet"
              class="pamphlet-img"
              src="~./assets/images/pamphlet-top.webp"
            />
          </div>
          <div class="pamphlet-text">
            <p>下のボタンのリンクからパンフレットをご覧ください。</p>
            <div class="pamphlet-download">
              <p>圧縮版（9.8MB）</p>
              <a
                class="pamphlet-button"
                href="https://storage.googleapis.com/seiryo24-assets/seiryo24-pamphlet-light.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div class="button-contents">
                  <div class="button-text">パンフレットを表示(pdf)</div>
                </div>
              </a>
            </div>
            <div class="pamphlet-download">
              <p>低圧縮版（71.9MB)</p>
              <a
                class="pamphlet-button"
                href="https://storage.googleapis.com/seiryo24-assets/seiryo24-pamphlet-high.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div class="button-contents">
                  <div class="button-text">パンフレットを表示(pdf)</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-button">
        <BackToHome />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
// html {
//   scroll-behavior: smooth;
// }

.content-root {
  position: relative;
  top: 500px;
  left: 20%;
  width: 60%;
  @include md {
    top: 350px;
  }
  @include sm {
    top: 250px;
  }

  .pamphlet-items {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1600px) {
      flex-direction: column;
    }

    .img-holder {
      width: 100%;
      padding-right: 5%;

      img {
        width: 100%;
      }
    }

    .pamphlet-text {
      display: flex;
      flex-direction: column;
      text-align: center;

      .pamphlet-download {
        .pamphlet-button {
          text-decoration: none;
          display: flex;
          justify-content: center;
          margin-bottom: 2em;

          .button-contents {
            border-radius: 2em;
            border: solid 1.5px #333333;
            width: 15em;
            height: 3em;
            display: flex;
            justify-content: center;
            text-align: center;
            text-decoration: none;
            background-color: white;
            @include sm {
              height: 2em;
            }

            &:hover {
              background-color: #333333;
              color: #fff;
            }

            .button-text {
              padding-top: 1em;
              transition: 0.5s;
              text-decoration: none;
              color: #333333;
              font-weight: bold;
              @include sm {
                font-size: 12px;
                padding-top: 0.5em;
              }

              &:active {
                padding-top: 1.3em;
              }

              &:hover {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }

  * p {
    font-size: 32px;
    margin-top: 0;

    @include md {
      font-size: 20px;
    }
    @include sm {
      font-size: 12px;
    }
  }
}
</style>
