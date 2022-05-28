<script setup lang="ts">
import { ref } from "vue";
import GetBonus from "../components/GetBonus.vue";
import router from "../router";
import { getRandomScore } from "../utils/helpers";

const homeScore = ref<number>();
const awayScore = ref<number>();
const gameStatus = ref("NotStarted");
const canBet = ref(true);
const showCalendar = ref(false);
const gameDate = ref(new Date().toISOString().split("T")[0]);

const gameFixtures = [
  {
    league: "Premier League",
    country: "England",
    fixtures: [
      {
        homeTeam: "Liverpool",
        awayTeam: "Manchester City",
        game: "Premier League",
        homeScore: 1,
        awayScore: 2,
        time: "16:30",
        hasStarted: false,
        hasEnded: false,
      },
      {
        homeTeam: "Chelsea",
        awayTeam: "Arsenal",
        game: "FA Cup",
        homeScore: 1,
        awayScore: 2,
        time: "30'",
        hasStarted: true,
        hasEnded: false,
      },
    ],
  },
  {
    league: "La Liga Santander",
    country: "Spain",
    fixtures: [
      {
        homeTeam: "Barcelona",
        awayTeam: "Real Madrid",
        game: "El Classico",
        homeScore: 2,
        awayScore: 2,
        time: "88'",
        hasStarted: false,
        hasEnded: true,
      },
      {
        homeTeam: "Athletico Madrid",
        awayTeam: "Villareal",
        game: "La Liga",
        homeScore: 1,
        awayScore: 2,
        time: "21:30'",
        hasStarted: false,
        hasEnded: false,
      },
    ],
  },
  {
    league: "Seria A",
    country: "Italy",
    fixtures: [
      {
        homeTeam: "Juventus",
        awayTeam: "AC Milan",
        game: "League",
        homeScore: 1,
        awayScore: 2,

        time: "16:30",
        hasStarted: false,
        hasEnded: false,
      },
      {
        homeTeam: "Inter Milan",
        awayTeam: "Napoli",
        game: "Ligue Cup",
        homeScore: 0,
        awayScore: 0,
        time: "11'",
        hasStarted: true,
        hasEnded: false,
      },
    ],
  },
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

const goToGame = (id: number) => {
  router.push(`/games/${id}`);
};
</script>

<template>
  <div class="text-n-white">
    <div class="px-2.5 flex justify-between items-center">
      <p
        class="w-10 py-[2px] flex justify-center bg-n-white text-n-black text-11px uppercase rounded"
      >
        Live
      </p>

      <div>
        <p class="flex justify-center text-11px uppercase">Wed</p>
        <p class="text-9px uppercase">18 may</p>
      </div>
      <div>
        <p class="flex justify-center text-11px uppercase">thu</p>
        <p class="text-9px uppercase">19 may</p>
      </div>
      <div class="">
        <p class="flex justify-center text-11px uppercase text-n-orange">
          today
        </p>
        <p class="text-9px uppercase text-n-orange">20 may</p>
      </div>
      <div>
        <p class="flex justify-center text-11px uppercase">sat</p>
        <p class="text-9px uppercase">21 may</p>
      </div>
      <div>
        <p class="flex justify-center text-11px uppercase">sun</p>
        <p class="text-9px uppercase">22 may</p>
      </div>
      <div
        @mouseover="showCalendar = true"
        @mouseout="showCalendar = false"
        class="relative"
      >
        <i class="fa fa-calendar"></i>
        <div class="absolute right-1">
          <input
            v-if="showCalendar"
            v-model="gameDate"
            type="date"
            name=""
            id=""
          />
        </div>
      </div>
    </div>

    <div class="mx-2.5">
      <GetBonus />
    </div>

    <div class="px-2.5">
      <!-- <div v-for="i in 2" class="grid mb-2">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2 mb-2">
            <img src="../assets/logo.png" alt="" class="w-5 h-5" />

            <div class="grid">
              <p class="capitalize text-sm font-semibold">Premier League</p>
              <p class="capitalize text-11px text-pry">England</p>
            </div>
          </div>

          <div @click="goToGame(56)" class="text-white">
            <i class="fa fa-chevron-right font-thin"></i>
          </div>
        </div>

        <div
          class="bg-n-bg-gray rounded-lg px-[5px] py-2 flex justify-between items-center"
        >
          <div class="flex gap-2">
            <div v-if="gameStatus === 'NotStarted'" class="grid gap-[6px]">
              <div class="flex items-center">
                <i class="fa fa-play border border-white rounded"></i>
                <p class="ml-1 text-11px">Bet</p>
              </div>
              <p class="text-11px text-center font-thin">16:30</p>
            </div>
            <div
              v-else-if="gameStatus === 'Started'"
              class="flex justify-center items-center relative"
            >
              <div
                class="absolute -left-[6px] rounded-tr-xl rounded-br-xl w-1 h-full bg-n-orange"
              ></div>
              <p class="ml-1 text-11px text-center font-thin text-n-orange">
                80'
              </p>
            </div>
            <div v-else class="flex justify-center items-center">
              <p class="text-11px text-center font-thin">FT</p>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <img src="../assets/logo.png" alt="" class="w-5 h-5" />
                <p class="text-sm">Liverpool</p>
              </div>
              <div class="flex items-center gap-2">
                <img src="../assets/logo.png" alt="" class="w-5 h-5" />
                <p class="text-sm">Manchester City</p>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div
              v-if="gameStatus === 'Started' || 'Ended'"
              class="flex flex-col"
            >
              <p class="text-n-white text-sm">{{ homeScore }}</p>
              <p class="text-n-white text-sm">{{ awayScore }}</p>
            </div>
            <i class="fa fa-star-o"></i>
          </div>
        </div>
      </div> -->

      <div v-for="(match, idx) in gameFixtures" :key="idx" class="grid mb-2">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2 mb-2">
            <img src="../assets/logo.png" alt="" class="w-5 h-5" />

            <div class="grid">
              <p class="capitalize text-sm font-semibold">{{ match.league }}</p>
              <p class="capitalize text-11px text-pry">{{ match.country }}</p>
            </div>
          </div>

          <div @click="goToGame(56)" class="text-white">
            <i class="fa fa-chevron-right font-thin"></i>
          </div>
        </div>

        <div
          v-for="(fixture, idx) in match.fixtures"
          :key="idx"
          class="mb-3 bg-n-bg-gray rounded-lg px-[5px] py-2 flex justify-between items-center"
        >
          <div class="flex gap-2">
            <div
              v-if="fixture.hasStarted === false && fixture.hasEnded === false"
              class="grid gap-[6px]"
            >
              <div class="flex items-center">
                <i class="fa fa-play border border-white rounded"></i>
                <p class="ml-1 text-11px">Bet</p>
              </div>
              <p class="text-11px text-center font-thin">{{ fixture.time }}</p>
            </div>
            <div
              v-else-if="fixture.hasEnded === false"
              class="flex justify-center items-center relative"
            >
              <div
                class="absolute -left-[6px] rounded-tr-xl rounded-br-xl w-1 h-full bg-n-orange"
              ></div>
              <p class="ml-1 text-11px text-center font-thin text-n-orange">
                {{ fixture.time }}
              </p>
            </div>
            <div v-else class="flex justify-center items-center">
              <p class="text-11px text-center font-thin">FT</p>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <img src="../assets/logo.png" alt="" class="w-5 h-5" />
                <p class="text-sm">{{ fixture.homeTeam }}</p>
              </div>
              <div class="flex items-center gap-2">
                <img src="../assets/logo.png" alt="" class="w-5 h-5" />
                <p class="text-sm">{{ fixture.awayTeam }}</p>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div
              v-if="gameStatus === 'Started' || 'Ended'"
              class="flex flex-col"
            >
              <p class="text-n-white text-sm">{{ fixture.homeScore }}</p>
              <p class="text-n-white text-sm">{{ fixture.awayScore }}</p>
            </div>
            <i class="fa fa-star-o"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
