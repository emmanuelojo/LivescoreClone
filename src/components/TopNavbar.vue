<script setup lang="ts">
import { ref } from "vue";

const isToggled = ref(false);

const toggleMenu = () => {
  isToggled.value = !isToggled.value;
};

const tabs = [
  { name: "Football", link: "/", linkName: "Home" },
  { name: "Hockey", link: "/", linkName: "Home" },
  { name: "Basketball", link: "/", linkName: "Home" },
  { name: "Tennis", link: "/", linkName: "Home" },
  { name: "Cricket", link: "/", linkName: "Home" },
];

const activeTab = ref("Football");
</script>

<template>
  <nav class="px-2.5 text-n-white flex justify-between items-center">
    <div class="p-2 z-20 md:hidden" @click="toggleMenu">
      <button :class="isToggled ? 'hamburger active' : 'hamburger'">
        <span class="line"> </span> <span class="line"> </span
        ><span class="line"> </span>
      </button>
    </div>

    <div>
      <p class="text-xl font-bold">LiveScore</p>
    </div>

    <div>
      <i class="fa fa-search"></i>
    </div>
  </nav>

  <div class="hide-scrollbar md:mt-4 px-2.5 flex items-center overflow-auto">
    <router-link
      v-for="(tab, idx) in tabs"
      :key="idx"
      :to="{ name: tab.linkName }"
      ><p
        class="px-3 py-[3px] mr-3 mb-5 rounded-xl text-sm font-bold flex justify-center items-center"
        :class="
          activeTab === tab.name
            ? 'bg-n-white text-n-black'
            : 'bg-n-bg-gray text-pry hover:bg-n-white hover:text-n-black '
        "
      >
        {{ tab.name }}
      </p>
    </router-link>
  </div>
</template>

<style>
.hamburger {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.hamburger .line {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin-block: 7px;
  border-radius: 4px;
  transition: transform 0.5s, opacity 0.25s;
}

.hamburger.active .line:nth-child(1) {
  transform: translateY(13px) rotate(45deg);
  background-color: #e9e9eb;
}

.hamburger.active .line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .line:nth-child(3) {
  transform: translateY(-13px) rotate(-45deg);
  background-color: #e9e9eb;
}
</style>
