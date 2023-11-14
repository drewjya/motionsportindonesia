<script setup lang="ts">
import Spring from "~/assets/icons/spring.svg?component";

const wordRef = ref();
const buttonRef = ref();
const imageRef = ref();
const spiralRef = ref();

function onTap(event: Event) {
  const word = wordRef.value;
  if (word) {
    word.style.transition = "all 850ms ease-in-out";
    // word.style.transform = "translate(-130%, -100%)";
    word.style.left = "10vw";
    word.style.top = "5vh";
  }
}
onMounted(() => {
  // const word = wordRef.value;
  // if (word) {
  //   word.style.transition = "all 850ms ease-in-out";
  //   // word.style.transform = "translate(-130%, -100%)";
  //   word.style.left = "40%";
  // }
  // const buttonEl = buttonRef.value;
  // if (buttonEl) {
  //   buttonEl.style.transition = "transform 850ms ease-in-out";
  //   buttonEl.style.transform = "translate(60%, 100%)";
  // }
  // const imageEl = imageRef.value;
  // if (imageEl) {
  //   imageEl.style.transition = "transform 850ms ease-in-out";
  //   imageEl.style.transform = "translate(-65%, -50%)";
  // }
  // const spiralEl = spiralRef.value;
  // if (spiralEl) {
  //   spiralEl.style.transition = "transform 850ms ease-in-out";
  //   spiralEl.style.transform = "translate(30%, -100%)";
  // }
});
</script>
<template>
  <div class="parent_head h-full">
    <div class="wording_header" ref="wordRef" id="wordhead">
      <p>LEGENDARY KICKS WORN BY MIKE BURNS</p>
    </div>
    <div class="image_header" ref="imageRef"></div>
    <div class="button_header" ref="buttonRef">
      <p>
        Get your hands on these fresh kicks worn by Michael Burnes in the
        EuroLeague Finals
      </p>
      <button class="shop-now">Shop Now</button>
    </div>
    <div class="spiral_header" ref="spiralRef">
      <Spring />
    </div>
  </div>
  <button
    class="p-5 py-1 bg-red-700 rounded-sm mt-10 text-white font-bold"
    @click="onTap"
  >
    Click
  </button>
</template>
<style>
.parent_head {
  position: relative;
}

.wording_header {
  position: absolute;
  top: calc(40vh - 4rem);
  left: 20vw;
}

.wording_header p {
  font-family: Jockey One;
  font-size: 2.7rem;
  font-style: normal;
  font-weight: 400;
  word-wrap: break-word;
  width: 13rem;
  line-height: 1.1;

  background: linear-gradient(180deg, #262626 0%, #b8c2ce 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-transform: uppercase;
}

.button_header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 80%);
}

.button_header p {
  color: #262626;

  font-family: "DM Sans", sans-serif;
  font-size: 0.7rem;
  width: 13rem;

  font-style: normal;
  font-weight: 400; /* 138.889% */
}

.button_header .shop-now {
  margin-top: 12px;
  display: inline-flex;
  padding: 4px 16px;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "DM Sans", sans-serif;

  border-radius: 3px;
  background: #262626;
  color: white;
}

.spiral_header {
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-0%, -100%);
}

.image_header {
  width: 23rem;
  height: 24rem;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("~/assets/bg.png");
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
