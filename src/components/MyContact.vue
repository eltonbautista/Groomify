<script lang="ts">
import { defineComponent } from "vue";
import dog from "../assets/contact-dog.png";
import MainButton from "./MainButton.vue";
export default defineComponent({
  data() {
    return {
      dog,
    };
  },
  components: {
    MainButton,
  },
});
</script>

<template>
  <section class="container" id="Contact">
    <div class="contact grid">
      <div class="contact-image">
        <img :src="dog" height="200" width="500" />
      </div>
      <div class="contact-text">
        <div class="header">
          <h1>Get <em>in</em> touch</h1>
        </div>
        <div class="sub-header">
          <p class="title">Send us a message</p>
          <p class="sub-title">
            Feel free to contact us if you need any assistance, any help or
            another question.
          </p>
        </div>
        <form class="form">
          <div class="name">
            <input class="input" type="text" placeholder="Name" />
          </div>
          <div class="phone">
            <input class="input" type="text" placeholder="Phone" />
          </div>
          <div class="textarea">
            <textarea
              class="input-textarea input"
              type="text"
              placeholder="Message"
            />
          </div>
          <div class="button-container">
            <MainButton
              button-text="Contact Us &nbsp; &#9990;"
              background-color="var(--homepage-gradient-four)"
              text-color="var(--color-text-main)"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: var(--bg-color-about);
  font-family: var(--common-font-family);
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.contact {
  margin: auto;
  display: grid;
  grid-template-areas: "image text";
  grid-template-rows: 1fr;
  grid-template-columns: 37.5rem 1fr;
  padding-bottom: 5em;

  @media screen and (max-width: 75rem) {
    margin: 0;
    grid-template-areas:
      "text"
      "image";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1024px) and (min-height: 1023px) {
    padding-bottom: 10em;
  }
}
.contact-image {
  grid-area: image;
  margin-left: auto;
  margin-right: auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.contact-text {
  grid-area: text;
  margin: auto;
  .header {
    display: flex;
    padding-left: 1rem;

    h1 {
      font-weight: 500;
      font-size: var(--font-size-xxl);
    }
    em {
      font-weight: 900;
      color: var(--color-text-accent);
    }
  }
  .sub-header {
    .title {
      font-size: 1.875rem;
      font-weight: 600;
      padding: 1rem;
    }
    .sub-title {
      font-size: 0.9375rem;
      font-weight: 600;
      padding: 1rem;
    }
  }
  .form {
    display: grid;
    grid-template-areas:
      "name phone"
      "message message"
      "button button";
    grid-template-rows: auto auto auto auto;
    .name {
      grid-area: name;
      padding-left: 1rem;
      margin-bottom: 1rem;
      width: 100%;
    }
    .phone {
      grid-area: phone;
      padding-left: 0.5rem;
      padding-right: 1rem;
      margin-bottom: 1rem;
      width: 100%;
    }
    .textarea {
      grid-area: message;
      padding-left: 1rem;
      padding-right: 1rem;
      width: 100%;
      .input-textarea {
        width: 100%;
        height: 9rem;
      }
    }
    .button-container {
      grid-area: button;
      padding: 1rem;
      .button {
        width: 100%;
      }
    }
    .input {
      width: 100%;
      height: 3rem;
      border-radius: 0.5rem;
      border: 1px solid var(--color-border);
      padding-left: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-text-main);
      background-color: var(--color-text-sub);
    }
  }
}
</style>
