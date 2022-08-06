<script setup lang="ts">
import image from "../assets/DoggoAbout.png"
import ContactButton from "./ContactButton.vue";
</script>

<template>
    <section class="container">
        <div class="about">
            <div class="about-header">
                <h1>About Us</h1>
            </div>
            <div class="about-text">
                <div class="top">
                    <p>Here at <em>Groomify</em> we take <em>pride</em> in the work that we do.</p>
                </div>
                <div class="bottom">
                    <p>We’re pet owners, so we know how important your furry friends are to you - trust us
                        when we say;
                        they’re important to us too.</p>
                </div>

                <div class="button">
                    <ContactButton button-text="Contact Us &nbsp; &#9990;" background-color="var(--color-text-accent)"
                        text-color="var(--color-text-main)" />
                </div>

            </div>
            <div class="about-img">
                <div class="backdrop"></div>
                <div class="border">

                    <img :src="image" />
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
    background-color: var(--bg-color-about);
    font-family: var(--common-font-family);
    padding-top: 2em;
    padding-bottom: 8em;
}

.about {
    max-width: var(--max-width);
    margin: auto;
    display: grid;
    grid-template-areas: "header header"
        "text image";
    grid-template-rows: 2fr;
    grid-template-columns: 1fr 458px;
}

.about-header {
    grid-area: header;
    gap: 2em;
    text-align: center;
    margin: auto;
    padding-bottom: 75px;

    h1 {
        font-size: 50px;
        font-weight: 900;
        color: var(--color-text-main);
        height: 101px;
        width: 582px;
        background-color: var(--color-text-accent);
        line-height: 6.3125rem;
        vertical-align: middle;
    }

    p {
        .top-span {
            font-size: var(--font-size-xl);
            letter-spacing: 0.048em;

        }

        .bottom-span {
            font-size: var(--font-size-xl);
            letter-spacing: -0.067em;
        }
    }


}

.about-text {
    grid-area: text;
    max-width: 750px;
    padding-right: 68px;

    .top {
        letter-spacing: -0.1em;

        p {

            font-size: 50px;
            font-weight: 500;
            padding-bottom: 38px;
        }

        em {
            font-weight: 800;
            color: var(--color-text-accent);
        }
    }

    .bottom {
        p {
            font-size: 30px;
            font-weight: 500;
        }
    }

    .button {
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 5.9375rem;

        .contact-button {
            width: 304px;
        }
    }

}

.about-img {
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-text-main);
    width: 418px;
    height: 532px;

    .border {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-text-accent);
        width: 332px;
        height: 466px;
    }

    .backdrop {
        position: absolute;
        right: -45px;
        width: 272px;
        height: 724px;
        background-color: var(--color-text-main);
    }

    img {
        width: 297px;
        height: 388.42px;
    }
}
</style>
