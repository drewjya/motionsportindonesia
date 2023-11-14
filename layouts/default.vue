<script lang="ts" setup></script>

<template>
  <div class="text-black h-screen">
    <div class="h-16 w-screen bg-[#000000] text-white flex items-center px-10">
      <div class="title grow flex">
        <div>X</div>
        <div>Motion Sports IDN</div>
      </div>
      <div class="flex items-center space-x-4 justify-center">
        <div class="item-nav">Home</div>
        <div class="item-nav">Products</div>
        <div class="item-nav">Gallery</div>
        <div class="item-nav">About Us</div>
        <div class="item-nav">Contact Us</div>
        <!-- <input
          type="text"
          class="w-24 lg:w-40 bg-slate-300 rounded-md justify-end items-center inline-flex text-black px-2"
        /> -->
        <UInput
          placeholder="Search..."
          class="w-24 lg:w-40"
          color="sky"
          size="xs"
          variant="outline"
        >
          <template #trailing>
            <span class="text-gray-500 dark:text-gray-400 text-xs"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </template>
        </UInput>
      </div>
    </div>

    <!--- render page -->
    <div class="bg-red-100 px-10 h-[calc(100vh-4rem)]">
      <slot />
    </div>
  </div>
</template>

<style>
body {
  background-color: white;
}

.body_template {
  height: 100vh;
}

.title {
  font-family: "Jokey One";
  font-family: Jockey One;
  font-size: 1.85rem;
  font-style: normal;
  font-weight: 400;
}

.item-nav {
  color: #fff;

  font-family: "DM Sans", sans-serif;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 400;
}
</style>
