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
const activeTableSubTab = ref("All");
const activeH2HSubTab = ref("H2H");

const tabs = ["Info", "Summary", "Stats", "Line-ups", "Table", "H2H"];

const subTabs = ["Events", "Commentary"];

const tableTabs = ["All", "Home", "Away"];

const H2HTabs = ["H2H", "Team A", "Team B"];

const leagueTable = [
  {
    team: "Manchester City",
    teamLogo: "",
    matchesPlayed: 37,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: 70,
    points: 89,
  },
  {
    team: "Liverpool",
    teamLogo: "",
    matchesPlayed: 36,
    matchesWon: 26,
    matchesDrawn: 8,
    matchesLost: 2,
    matchesF: 89,
    matchesA: 24,
    goalDifference: 65,
    points: 86,
  },
  {
    team: "Chelsea",
    teamLogo: "",
    matchesPlayed: 36,
    matchesWon: 20,
    matchesDrawn: 10,
    matchesLost: 6,
    matchesF: 73,
    matchesA: 31,
    goalDifference: 42,
    points: 70,
  },
  {
    team: "Tottenham Hotspur",
    teamLogo: "",
    matchesPlayed: 37,
    matchesWon: 21,
    matchesDrawn: 5,
    matchesLost: 11,
    matchesF: 64,
    matchesA: 40,
    goalDifference: 24,
    points: 68,
  },
  {
    team: "Arsenal",
    teamLogo: "",
    matchesPlayed: 37,
    matchesWon: 21,
    matchesDrawn: 3,
    matchesLost: 12,
    matchesF: 56,
    matchesA: 45,
    goalDifference: 11,
    points: 66,
  },
  {
    team: "West Ham United",
    teamLogo: "",
    matchesPlayed: 37,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: 13,
    points: 58,
  },
  {
    team: "Manchester United",
    teamLogo: "",
    matchesPlayed: 37,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: 1,
    points: 58,
  },
  {
    team: "Brighton & Hove Albion",
    teamLogo: "",
    matchesPlayed: 37,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -3,
    points: 50,
  },
  {
    team: "Wolverhampton Wanderers",
    teamLogo: "",
    matchesPlayed: 37,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -4,
    points: 50,
  },
  {
    team: "Leicester City",
    teamLogo: "",
    matchesPlayed: 36,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -3,
    points: 48,
  },
  {
    team: "Random Club",
    teamLogo: "",
    matchesPlayed: 36,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -3,
    points: 48,
  },
  {
    team: "Random Club",
    teamLogo: "",
    matchesPlayed: 36,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -3,
    points: 48,
  },
  {
    team: "Random Club",
    teamLogo: "",
    matchesPlayed: 36,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -3,
    points: 48,
  },
  {
    team: "Random Club",
    teamLogo: "",
    matchesPlayed: 36,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -3,
    points: 48,
  },
  {
    team: "Random Club",
    teamLogo: "",
    matchesPlayed: 36,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -3,
    points: 48,
  },
  {
    team: "Random Club",
    teamLogo: "",
    matchesPlayed: 36,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -3,
    points: 48,
  },
  {
    team: "Burnley",
    teamLogo: "",
    matchesPlayed: 36,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -18,
    points: 34,
  },
  {
    team: "Leeds United",
    teamLogo: "",
    matchesPlayed: 37,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -39,
    points: 34,
  },
  {
    team: "Norwich City",
    teamLogo: "",
    matchesPlayed: 37,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -55,
    points: 24,
  },
  {
    team: "Watford",
    teamLogo: "",
    matchesPlayed: 37,
    matchesWon: 28,
    matchesDrawn: 5,
    matchesLost: 4,
    matchesF: 94,
    matchesA: 24,
    goalDifference: -39,
    points: 23,
  },
];

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

    <div v-if="activeTab === 'Stats'" class="px-2.5 text-pry">
      <div class="grid">
        <div class="flex justify-between items-center text-11px text-pry">
          <p>2</p>
          <p>Shots on target</p>
          <p class="text-n-white">3</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-0 h-[10px] rounded-l-lg"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-full h-[10px] bg-n-orange rounded-r-lg"></div>
          </div>
        </div>
      </div>

      <div class="grid my-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p class="text-n-white">4</p>
          <p>Shots off target</p>
          <p>2</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-3/4 h-[10px] bg-n-orange"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-1/3 h-[10px] bg-n-gray"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p>0</p>
          <p>Blocked Shots</p>
          <p class="text-n-white">2</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-0 h-[10px]"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-full h-[10px] bg-n-orange rounded-r-lg"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p>48</p>
          <p>Possession (%)</p>
          <p class="text-n-white">52</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-[48%] h-[10px] bg-n-gray"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-[52%] h-[10px] bg-n-orange"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p>0</p>
          <p>Corner Kicks</p>
          <p class="text-n-white">5</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-0 h-[10px]"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-full h-[10px] bg-n-orange rounded-r-lg"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p class="text-n-white">1</p>
          <p>Offsides</p>
          <p>0</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-full h-[10px] rounded-l-lg bg-n-orange"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-0 h-[10px]"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p>8</p>
          <p>Fouls</p>
          <p class="text-n-white">9</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-[48%] h-[10px] bg-n-gray"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-[49%] h-[10px] bg-n-orange"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p>12</p>
          <p>Throw ins</p>
          <p class="text-n-white">13</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-[48%] h-[10px] bg-n-gray"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-[49%] h-[10px] bg-n-orange"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p>0</p>
          <p>Yellow Cards</p>
          <p class="text-n-white">1</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-0 h-[10px]"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-full h-[10px] bg-n-orange rounded-r-lg"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p class="text-n-white">23</p>
          <p>Crosses</p>
          <p>6</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-[80%] h-[10px] bg-n-orange"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-[20%] h-[10px] bg-n-gray"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p>1</p>
          <p>Counter attacks</p>
          <p>1</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-[50%] h-[10px] bg-n-gray"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-[50%] h-[10px] bg-n-gray"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p>1</p>
          <p>Goalkeeper saves</p>
          <p class="text-n-white">4</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-[20%] h-[10px] bg-n-gray"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-[75%] h-[10px] bg-n-orange"></div>
          </div>
        </div>
      </div>

      <div class="grid mb-2">
        <div class="flex justify-between items-center text-11px text-pry">
          <p>5</p>
          <p>Goal Kicks</p>
          <p class="text-n-white">9</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div
            class="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg"
          >
            <div class="w-[30%] h-[10px] bg-n-gray"></div>
          </div>

          <div
            class="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg"
          >
            <div class="w-[60%] h-[10px] bg-n-orange"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'Line-ups'" class="px-2.5 text-pry">
      <p class="uppercase text-11px">substitute players</p>

      <div class="mt-2 border-n-bg-gray border rounded-md">
        <div class="p-2 flex justify-around gap-3 border-n-bg-gray border-b">
          <p class="capitalize text-11px">Sub 1</p>
          <p class="capitalize text-11px">Sub 1</p>
        </div>
        <div class="p-2 flex justify-around gap-3 border-n-bg-gray border-b">
          <p class="capitalize text-11px">Sub 2</p>
          <p class="capitalize text-11px">Sub 2</p>
        </div>
        <div class="p-2 flex justify-around gap-3 border-n-bg-gray border-b">
          <p class="capitalize text-11px">Sub 3</p>
          <p class="capitalize text-11px">Sub 3</p>
        </div>

        <div class="p-2 flex justify-around gap-3 border-n-bg-gray border-b">
          <p class="capitalize text-11px">Sub 4</p>
          <p class="capitalize text-11px">Sub 4</p>
        </div>

        <div class="p-2 flex justify-around gap-3">
          <p class="capitalize text-11px">Sub 5</p>
          <p class="capitalize text-11px">Sub 5</p>
        </div>
      </div>

      <p class="mt-3 uppercase text-11px">Coaches</p>

      <div class="mt-2 border-n-bg-gray border rounded-md">
        <div class="p-2 flex justify-around gap-3">
          <p class="capitalize text-11px">Coach 1</p>
          <p class="capitalize text-11px">Coach 2</p>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'Table'" class="px-2.5">
      <div class="px-1 pb-2 flex items-center gap-2">
        <p
          @click="activeTableSubTab = tab"
          v-for="(tab, idx) in tableTabs"
          :key="idx"
          class="uppercase text-11px py-1 px-2 rounded-2xl"
          :class="
            activeTableSubTab === tab
              ? 'bg-n-white text-n-black'
              : 'bg-transparent border-pry border'
          "
        >
          {{ tab }}
        </p>
      </div>

      <div class="border-n-bg-gray border rounded-xl">
        <table class="w-full">
          <thead class="border-n-bg-gray border-b">
            <tr>
              <th class="h-7 text-left pl-2 text-xxs uppercase">#</th>
              <th
                class="h-7 text-left px-1 w-2/3 sm:w-[300px] text-xxs uppercase"
              >
                team
              </th>
              <th class="h-7 text-center px-1 text-xxs uppercase">p</th>
              <th
                class="hidden sm:block h-7 text-center px-1 text-xxs uppercase"
              >
                w
              </th>
              <th
                class="hidden sm:block h-7 text-center px-1 text-xxs uppercase"
              >
                d
              </th>
              <th
                class="hidden sm:block h-7 text-center px-1 text-xxs uppercase"
              >
                l
              </th>
              <th
                class="hidden sm:block h-7 text-center px-1 text-xxs uppercase"
              >
                f
              </th>
              <th
                class="hidden sm:block h-7 text-center px-1 text-xxs uppercase"
              >
                a
              </th>
              <th class="h-7 text-center px-1 text-xxs uppercase">gd</th>
              <th class="h-7 text-center pr-2 text-xxs uppercase">pts</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(club, idx) in leagueTable"
              :key="idx"
              class="py-1 h-8 border-n-bg-gray border-b"
            >
              <td class="text-center pl-2 text-xxs">
                <div class="flex flex-col justify-center relative">
                  <span> {{ idx + 1 }}</span>
                  <div
                    class="h-1 rounded-t -mb-2"
                    :class="[
                      idx === 0
                        ? 'bg-n-blue'
                        : idx === 1
                        ? 'bg-n-blue'
                        : idx === 2
                        ? 'bg-n-blue'
                        : idx === 3
                        ? 'bg-n-blue'
                        : idx === 4
                        ? 'bg-n-dark-orange'
                        : idx === 5
                        ? 'bg-n-dark-orange'
                        : idx === 6
                        ? 'bg-n-light-green'
                        : idx === leagueTable.length - 3
                        ? 'bg-n-dark-red'
                        : idx === leagueTable.length - 2
                        ? 'bg-n-dark-red'
                        : idx === leagueTable.length - 1
                        ? 'bg-n-dark-red'
                        : '',
                    ]"
                  ></div>
                </div>
              </td>
              <td class="text-left px-1 w-2/3 sm:w-[300px] text-xxs capitalize">
                <div class="flex items-center gap-1 text-n-white">
                  <span>
                    <img
                      src="../assets/logo.png"
                      alt="Team Logo"
                      class="w-5 h-5"
                    />
                  </span>
                  <span>
                    {{ club.team }}
                  </span>
                </div>
              </td>
              <td class="text-center px-1 text-xxs">
                {{ club.matchesPlayed }}
              </td>
              <td class="hidden sm:block text-center px-1 text-xxs">
                {{ club.matchesWon }}
              </td>
              <td class="hidden sm:block text-center px-1 text-xxs">
                {{ club.matchesDrawn }}
              </td>
              <td class="hidden sm:block text-center px-1 text-xxs">
                {{ club.matchesLost }}
              </td>
              <td class="hidden sm:block text-center px-1 text-xxs">
                {{ club.matchesF }}
              </td>
              <td class="hidden sm:block text-center px-1 text-xxs">
                {{ club.matchesA }}
              </td>
              <td class="text-center px-1 text-xxs">
                {{ club.goalDifference }}
              </td>
              <td class="text-center pr-2 text-xxs">
                {{ club.points }}
              </td>
            </tr>

            <tr class="py-1 h-8">
              <td colspan="100%" class="pl-3 text-9px">
                Cup result provided 1 additional position in UEFA Europa League
              </td>
            </tr>

            <tr class="py-1 h-8">
              <td colspan="100%" class="pl-3 text-9px">
                League Cup result provided 1 spot in UEFA Conference League
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="mt-3 bg-n-bg-gray rounded-md p-1 text-pry flex justify-center items-center relative"
      >
        <span class="absolute left-1"> <i class="fa fa-refresh"></i></span>

        <p class="text-11px">Rotate to view expanded table</p>
      </div>

      <div class="mt-3 grid gap-1">
        <div class="flex items-center gap-4">
          <div class="w-2 h-2 rounded-full bg-n-dark-blue"></div>
          <p class="text-11px text-n-white">Champions League</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-2 h-2 rounded-full bg-n-dark-orange"></div>
          <p class="text-11px text-n-white">Europa League</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-2 h-2 rounded-full bg-n-light-green"></div>
          <p class="text-11px text-n-white">
            Europa Conference League qualification
          </p>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-2 h-2 rounded-full bg-n-dark-red"></div>
          <p class="text-11px text-n-white">Relegation</p>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'H2H'" class="px-2.5"></div>

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
