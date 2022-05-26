<script setup lang="ts">
import { ref } from "vue";
import GetBonus from "../components/GetBonus.vue";
import { getRandomScore } from "../utils/helpers";

const markAsFavourite = ref(false);
const homeScore = ref<number>();
const awayScore = ref<number>();
const gameStatus = ref("NotStarted");
const activeTab = ref("Summary");
const activeSubtab = ref("Events");

const tabs = ["Info", "Summary", "Stats", "Line-ups", "Table", "H2H"];

const subTabs = ["Events", "Commentary"];

const footerText = [
  "Careers",
  "Mobile",
  "advertise",
  "faq",
  "contact",
  "news publishers",
  "modern slavery act",
  "privacy notice",
  "cookie policy",
  "terms of use",
  "corporate",
];

setInterval(() => {
  homeScore.value = getRandomScore(6);
}, 7000);

setInterval(() => {
  awayScore.value = getRandomScore(3);
}, 7000);

setInterval(() => {
  gameStatus.value = "Started";
}, 10000);
setInterval(() => {
  gameStatus.value = "Ended";
}, 20000);
setInterval(() => {
  gameStatus.value = "NotStarted";
}, 30000);
</script>

<template>
  <div class="text-n-white py-1">
    <div class="px-2.5 mb-2 flex justify-between items-center">
      <div class="flex items-center gap-2 mb-2">
        <img src="../assets/logo.png" alt="" class="w-5 h-5" />

        <div class="grid">
          <p class="capitalize text-sm font-semibold">Premier League</p>
          <p class="capitalize text-11px text-pry">England</p>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <i class="fa fa-gamepad"></i>
        <div
          @click="markAsFavourite = !markAsFavourite"
          class="cursor-pointer"
          :class="`${markAsFavourite ? 'text-n-orange' : 'text-n-white'}`"
        >
          <i :class="`fa fa-${markAsFavourite ? 'star ' : 'star-o'}`"></i>
        </div>
      </div>
    </div>

    <div
      class="mx-2.5 py-1 relative flex justify-center items-center bg-n-bg-gray rounded-lg"
    >
      <div v-if="gameStatus === 'NotStarted'" class="grid gap-[6px] mr-10">
        <div class="flex items-center">
          <i class="fa fa-play border border-n-white rounded"></i>
          <p class="ml-1 text-11px">Bet</p>
        </div>
        <p class="text-11px text-center font-thin">16:30</p>
      </div>
      <div
        v-else-if="gameStatus === 'Started'"
        class="flex justify-center items-center"
      >
        <div
          class="absolute top-[5px] bottom-[5px] left-0 rounded-tr-xl rounded-br-xl w-1 bg-n-orange"
        ></div>
        <p
          class="absolute left-5 text-11px text-center font-thin text-n-orange"
        >
          80'
        </p>
      </div>
      <div v-else class="mr-10 flex justify-center items-center">
        <p class="text-11px text-center font-thin">FT</p>
      </div>

      <div class="flex justify-between items-center gap-10">
        <div class="flex flex-col justify-center">
          <img src="../assets/logo.png" alt="" class="w-5 h-5 mx-auto" />

          <p class="text-11px text-center">Liverpool</p>
        </div>

        <div>
          <p class="flex items-center gap-1 font-semibold">
            <span> {{ homeScore }}</span> - <span> {{ awayScore }}</span>
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <img src="../assets/logo.png" alt="" class="w-5 h-5 mx-auto" />

          <p class="text-11px text-center">Manchester City</p>
        </div>
      </div>
    </div>

    <div class="pb-1 mb-2 border-n-bg-gray border-b">
      <div class="my-2 mx-2.5 flex gap-4 overflow-auto">
        <p
          @click="activeTab = tab"
          v-for="(tab, idx) in tabs"
          :key="idx"
          class="text-11px font-semibold"
          :class="tab === activeTab ? 'text-n-orange' : 'text-pry'"
        >
          {{ tab }}
        </p>
      </div>
    </div>

    <div v-if="activeTab === 'Info'" class="mx-2.5 text-pry">
      <GetBonus />

      <p class="uppercase text-11px">Match Info</p>

      <div class="mt-2 border-n-bg-gray border rounded-md">
        <div class="p-2 flex gap-3 border-n-bg-gray border-b">
          <i class="fa fa-calendar"></i>
          <div>
            <p class="capitalize text-11px">15 May 2022</p>
            <p class="capitalize text-9px">Date</p>
          </div>
        </div>
        <div class="p-2 flex gap-3 border-n-bg-gray border-b">
          <i class="fa fa-whistle"></i>
          <div>
            <p class="capitalize text-11px">Chris Kavanagh (England)</p>
            <p class="capitalize text-9px">referee</p>
          </div>
        </div>
        <div class="p-2 flex gap-3">
          <i class="fa fa-stadium"></i>
          <div>
            <p class="capitalize text-11px">Villa Park</p>
            <p class="capitalize text-9px">venue</p>
          </div>
        </div>
      </div>

      <p class="mt-2 text-11px uppercase font-semibold">who will win?</p>
    </div>

    <div v-if="activeTab === 'Summary'" class="mx-2.5 text-pry">
      <div class="px-1 pb-2 flex items-center gap-2">
        <p
          @click="activeSubtab = tab"
          v-for="(tab, idx) in subTabs"
          :key="idx"
          class="uppercase text-11px py-1 px-2 rounded-2xl"
          :class="
            activeSubtab === tab
              ? 'bg-n-white text-n-black'
              : 'bg-transparent border-pry border'
          "
        >
          {{ tab }}
        </p>
      </div>

      <div
        v-if="activeSubtab === 'Events'"
        class="mx-1 border border-n-bg-gray rounded-md"
      >
        <div
          class="p-2 flex justify-start items-center border-n-bg-gray border-b"
        >
          <p class="mr-2 text-py text-11px">12'</p>
          <div class="text-11px flex items-center">
            <p class="text-n-white">Van Djick</p>
            <div class="ml-2 h-3 w-2 bg-yellow-300 rounded-sm"></div>
          </div>
        </div>
        <div
          class="p-2 flex justify-between items-center border-n-bg-gray border-b"
        >
          <p class="mr-2 text-pry text-11px">30'</p>
          <div class="text-11px flex items-center">
            <div class="mr-2 h-3 w-2 bg-yellow-300 rounded-sm"></div>
            <p class="text-n-white">Allison</p>
          </div>
        </div>
      </div>

      <div v-else class="mx-1 border border-n-bg-gray rounded-md">
        <div
          class="p-2 flex justify-start items-center border-n-bg-gray border-b"
        >
          <p class="mr-2 text-pry text-11px">9'</p>
          <p class="text-pry text-11px">
            Sadio Mane hits the ball towards goal
          </p>
        </div>
        <div class="p-2 flex items-center border-n-bg-gray border-b">
          <p class="mr-2 text-pry text-11px">10'</p>
          <p class="text-pry text-11px">
            The goalkeeper plays a long ball to Gabriel Jesus
          </p>
        </div>
        <div class="p-2 flex items-center border-n-bg-gray border-b">
          <p class="mr-2 text-pry text-11px">14'</p>
          <p class="text-pry text-11px">
            Manchester City keeps the pressure on
          </p>
        </div>
        <div class="p-2 flex items-center border-n-bg-gray border-b">
          <p class="mr-2 text-pry text-11px">20'</p>
          <p class="text-pry text-11px">Excellent defensive from Liverpool</p>
        </div>
        <div class="p-2 flex items-center border-n-bg-gray border-b">
          <p class="mr-2 text-pry text-11px">30'</p>
          <p class="text-pry text-11px">
            Both teams seem to be doing excellently well in game play
          </p>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'Stats'" class="px-1">
      <div class="grid">
        <div class="flex justify-between items-center text-11px text-n-bg-gray">
          <p>2</p>
          <p>Shots on target</p>
          <p>3</p>
        </div>
        <div
          class="border border-blue-500 flex justify-between items-center gap-2"
        >
          <div
            class="w-1/2 h-[10px] bg-n-orange rounded-t-lg rounded-l-lg"
          ></div>
          <div
            class="w-1/2 h-[10px] bg-n-orange rounded-b-lg rounded-r-lg"
          ></div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div class="px-2.5 pb-2">
        <p class="text-center text-11px font-semibold">
          Liverpool vs Manchester City Live Scores and match Information
        </p>
        <p class="text-center text-11px">
          The latest football scores, line-ups and more for Liverpool vs
          Manchester City.
        </p>
        <p class="text-center text-11px">
          Your live football score for Liverpool vs Manchester City in the
          Premier League from LiveScores.com, covering football, cricket,
          tennie, basketball and hockey livescores.
        </p>
      </div>
      <div class="pb-1">
        <p class="text-11px flex justify-center items-center">
          <span> <i class="fa fa-copyright"></i></span>
          <span>1998-2022</span>
          <span>LiveScore</span>
        </p>
      </div>
      <div class="mx-2.5 flex flex-wrap justify-center text-n-gray">
        <p
          v-for="(text, idx) in footerText"
          :key="idx"
          class="text-11px capitalize"
          :class="idx === 0 ? 'ml-0' : 'ml-1'"
        >
          {{ text }} {{ idx === footerText.length - 1 ? " " : " |  " }}
        </p>
      </div>
    </div>
  </div>
</template>
