<script setup lang="ts">
import { onMounted, ref } from "vue";
import GetBonus from "../components/GetBonus.vue";
import router from "../router";
import { getRandomScore } from "../utils/helpers";

onMounted(() => {
  liveGame;
});

const homeScore = ref<number>();
const awayScore = ref<number>();
const gameStatus = ref("NotStarted");
const showCalendar = ref(false);
const gameDate = ref(new Date().toISOString().split("T")[0]);

const twoDaysAgo = new Date().getTime() - 48 * 60 * 60 * 1000;
const yesterday = new Date().getTime() - 24 * 60 * 60 * 1000;
const today = new Date();
const tomorrow = new Date().getTime() + 24 * 60 * 60 * 1000;
const twoDaysTime = new Date().getTime() + 48 * 60 * 60 * 1000;

const dates = [twoDaysAgo, yesterday, today, tomorrow, twoDaysTime];

const activeDateIndex = ref(2);

const gameDates = ref([]);

const formatDate = (date: string | number | Date) => {
  const newDate = new Intl.DateTimeFormat("en-ng", {
    day: "2-digit",
    weekday: "short",
    month: "short",
  }).format(new Date(date));

  return newDate;
};

const gameFixtures = ref([
  {
    league: "Premier League",
    country: "England",
    flagUrl: "https://static.livescore.com/i2/fh/england.jpg",
    fixtures: [
      {
        homeTeam: "Liverpool",
        awayTeam: "Manchester City",
        homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/8650.png",
        awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/8456.png",
        game: "Premier League",
        homeScore: 1,
        awayScore: 2,
        time: "16:30",
        hasStarted: false,
        hasEnded: false,
        markAsFavourite: false,
      },
      {
        homeTeam: "Chelsea",
        awayTeam: "Arsenal",
        homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/8455.png",
        awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        game: "FA Cup",
        homeScore: 1,
        awayScore: 2,
        time: 2,
        hasStarted: true,
        hasEnded: false,
        markAsFavourite: false,
      },
    ],
  },
  {
    league: "La Liga Santander",
    country: "Spain",
    flagUrl: "https://static.livescore.com/i2/fh/spain.jpg",
    fixtures: [
      {
        homeTeam: "Barcelona",
        awayTeam: "Real Madrid",
        homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/8634.png",
        awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/8633.png",
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

        homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/9906.png",
        awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/10205.png",
        game: "La Liga",
        homeScore: 1,
        awayScore: 2,
        time: "21:30",
        hasStarted: false,
        hasEnded: false,
        markAsFavourite: false,
      },
    ],
  },
  {
    league: "Seria A",
    country: "Italy",
    flagUrl: "https://static.livescore.com/i2/fh/italy.jpg",
    fixtures: [
      {
        homeTeam: "Juventus",
        awayTeam: "AC Milan",

        homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/9885.png",
        awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/8564.png",
        game: "League",
        homeScore: 1,
        awayScore: 2,

        time: "16:30",
        hasStarted: false,
        hasEnded: false,
        markAsFavourite: false,
      },
      {
        homeTeam: "Inter Milan",
        awayTeam: "Napoli",

        homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/8636.png",
        awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/9875.png",
        game: "Ligue Cup",
        homeScore: 0,
        awayScore: 0,
        time: 5,
        hasStarted: true,
        hasEnded: false,
        markAsFavourite: false,
      },
    ],
  },
]);

const liveGame = setInterval(() => {
  gameFixtures.value.forEach((fixture, idx) => {
    fixture.fixtures.map((game) => {
      typeof game.time === "number" && game.time < 90 ? game.time++ : game.time;
      return { ...game };
    });
  });
}, 5000);

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

const setDates = () => {};
</script>

<template>
  <div class="text-pry lg:w-[50%] lg:mx-auto">
    <div class="px-2.5 flex justify-between items-center">
      <p
        class="font-bold w-10 py-[2px] flex justify-center bg-n-white text-n-black text-11px uppercase rounded"
      >
        Live
      </p>

      <div
        v-for="(date, idx) in dates"
        :key="idx"
        class="cursor-pointer"
        @click="activeDateIndex = idx"
      >
        <p
          class="font-bold flex justify-center text-11px uppercase"
          :class="idx === activeDateIndex ? 'text-n-orange' : ''"
        >
          {{ date === today ? "TODAY" : formatDate(date).slice(0, 3) }}
        </p>
        <p
          class="font-bold text-9px uppercase"
          :class="idx === activeDateIndex ? 'text-n-orange' : ''"
        >
          {{ formatDate(date).slice(4) }}
        </p>
      </div>

      <div
        @mouseover="showCalendar = true"
        @mouseout="showCalendar = false"
        class="relative cursor-pointer"
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
      <div v-for="(match, idx) in gameFixtures" :key="idx" class="grid mb-2">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2 mb-2">
            <img
              :src="match.flagUrl"
              :alt="`${match.country + ' Logo'}`"
              class="w-5 h-3"
            />

            <div class="grid">
              <p class="capitalize text-sm font-bold text-n-white">
                {{ match.league }}
              </p>
              <p class="capitalize text-11px text-pry">{{ match.country }}</p>
            </div>
          </div>

          <div @click="goToGame(56)" class="text-white cursor-pointer">
            <i class="fa fa-chevron-right font-thin"></i>
          </div>
        </div>

        <div
          v-for="(fixture, idx) in match.fixtures"
          :key="idx"
          class="mb-3 bg-n-bg-gray hover:bg-[#4f4d4d] cursor-pointer rounded-lg p-3 flex justify-between items-center"
        >
          <div @click="goToGame(56)" class="flex flex-grow items-center gap-2">
            <div
              v-if="fixture.hasStarted === false && fixture.hasEnded === false"
              class="grid gap-[6px] w-10"
            >
              <div class="flex items-center">
                <i class="fa fa-play border border-white rounded"></i>
                <p class="ml-1 text-11px">Bet</p>
              </div>
              <p class="text-11px text-center font-thin">{{ fixture.time }}</p>
            </div>
            <div
              v-else-if="fixture.hasEnded === false"
              class="flex justify-center items-center relative w-10"
            >
              <div
                class="absolute -left-[10px] rounded-tr-xl rounded-br-xl w-1 h-14 bg-n-orange"
              ></div>
              <p class="text-11px text-center font-thin text-n-orange">
                {{ fixture.time + "'" }}
              </p>
            </div>
            <div v-else class="flex justify-center items-center w-10">
              <p class="text-11px text-center font-thin">FT</p>
            </div>
            <div class="grid gap-1">
              <div
                @click="goToGame(56)"
                class="flex items-center gap-2 cursor-pointer"
              >
                <img :src="fixture.homeFlag" alt="" class="w-5 h-5" />
                <p class="text-sm">{{ fixture.homeTeam }}</p>
              </div>
              <div
                @click="goToGame(56)"
                class="flex items-center gap-2 cursor-pointer"
              >
                <img :src="fixture.awayFlag" alt="" class="w-5 h-5" />
                <p class="text-sm">{{ fixture.awayTeam }}</p>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div
              v-if="fixture.hasStarted === false && fixture.hasEnded === false"
            ></div>
            <div v-else class="flex flex-col gap-1">
              <p class="text-n-white text-sm">{{ fixture.homeScore }}</p>
              <p class="text-n-white text-sm">{{ fixture.awayScore }}</p>
            </div>

            <div
              @click="fixture.markAsFavourite = !fixture.markAsFavourite"
              class="cursor-pointer"
              :class="`${
                fixture.markAsFavourite ? 'text-n-orange' : 'text-n-white'
              }`"
            >
              <i
                :class="`fa fa-${fixture.markAsFavourite ? 'star ' : 'star-o'}`"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
