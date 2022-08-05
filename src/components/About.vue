<script setup lang="ts">
import image from "../assets/DoggoAbout.png"
</script>

<template>
    <section class="container">

        <div class="about-header">
            <p>
                <span class="top-span">Here at <em>Groomify</em> we take <em>pride</em> in the work that we
                    do.</span><br />
                <span class="bottom-span">We <em>fur-mly</em> believe that trust is the foundation of any good
                    relationship..</span>
            </p>
        </div>
        <div class="about-subheader">
            <div class="about-img">
                <img :src="image" />
            </div>
            <div class="about-text">
                <p>And that is the reason we create time out of our days and make sure to meet our new clients!</p>
                <p>We’re pet owners, so we know how important your furry friends are to you - trust us when we say;
                    they’re important to us too.</p>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
    margin: auto;
    background-color: #f1f1f1;
    padding-top: 2em;
}

.about-header {
    display: grid;
    grid-area: 1/3/2/11;
    padding-bottom: 2em;
    gap: 2em;

    p {
        .top-span {
            font-size: 4em;
            letter-spacing: 0.0798em;

        }

        .bottom-span {
            font-size: 3em;
            letter-spacing: 0.080em;
        }
    }

    em {
        color: var(--color-text-accent);
    }
}

.about-subheader {
    display: grid;
    grid-area: 2/3/8/11;
}

.about-img {
    display: grid;
    grid-area: 1/1;
    padding-top: 6em;
    align-items: center;
    justify-content: center;

    img {
        height: 25em
    }
}

.about-text {
    display: grid;
    grid-area: 1/2;
    max-width: 300px;

    p {
        font-size: 2em;
        padding-bottom: 2em;
    }
}
</style>
