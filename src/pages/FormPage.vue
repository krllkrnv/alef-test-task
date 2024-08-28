<template>
  <div class="flex flex-col gap-11">
    <div class="flex flex-col gap-5 w-full">
      <h1 class="font-medium">Персональные данные</h1>
      <div class="flex flex-col gap-2.5">
        <div class="w-full h-14 relative">
          <input
            v-model="userData.name"
            type="text"
            class="w-full h-full pt-5 pl-4 bg-white rounded border border-zinc-100 px-2 text-sm text-neutral-900 leading-normal placeholder:text-neutral-900/50"
          />
          <label
            class="absolute left-[16px] top-[8px] text-neutral-900/50 text-xs font-normal"
            >Имя</label
          >
        </div>
        <div class="h-14 relative">
          <input
            v-model="userData.age"
            min="0"
            type="number"
            class="w-full h-full pt-5 pl-4 bg-white rounded border border-zinc-100 px-2 text-sm text-neutral-900 leading-normal placeholder:text-neutral-900/50"
          />
          <label
            class="absolute left-[16px] top-[8px] text-neutral-900/50 text-xs font-normal"
            >Возраст</label
          >
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 relative">
      <div class="flex justify-between">
        <h1 class="font-medium">Дети (макс. 5)</h1>
        <button
          @click="handleAddKidClick"
          class="absolute text-sm text-active flex flex-row items-center justify-center right-0 -top-2.5 z-10 w-52 h-11 rounded-full border-2 border-active"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z"
              fill="#01A7FD"
            />
          </svg>

          <span>Добавить ребенка</span>
        </button>
      </div>
      <div
        v-for="kid in userData.kids"
        :key="kid.id"
        class="flex flex-row gap-5"
      >
        <div class="w-full h-14 relative">
          <input
            v-model="kid.name"
            type="text"
            class="w-full h-full pt-5 pl-4 bg-white rounded border border-zinc-100 px-2 text-sm text-neutral-900 leading-normal placeholder:text-neutral-900/50"
          />
          <label
            class="absolute left-[16px] top-[8px] text-neutral-900/50 text-xs font-normal"
            >Имя</label
          >
        </div>
        <div class="w-full h-14 relative">
          <input
            v-model="kid.age"
            min="0"
            type="number"
            class="w-full h-full pt-5 pl-4 bg-white rounded border border-zinc-100 px-2 text-sm text-neutral-900 leading-normal placeholder:text-neutral-900/50"
          />
          <label
            class="absolute left-[16px] top-[8px] text-neutral-900/50 text-xs font-normal"
            >Возраст</label
          >
        </div>
        <button @click="handleDeleteClick(kid.id)" class="text-sm text-active">
          Удалить
        </button>
      </div>
    </div>
    <button
      @click="handleSaveClick"
      class="active:bg-white active:text-active bg-active text-sm text-white w-28 h-11 rounded-full"
    >
      Сохранить
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const handleAddKidClick = () => {
  if (userData.value.kids.length < 5) {
    userData.value.kids.push({
      name: "Имя",
      id: Math.random(),
      age: 0,
    });
  }
};

const handleSaveClick = () => {
  store.commit("SET_USER_DATA", userData.value);
};

const handleDeleteClick = (id) => {
  userData.value.kids = userData.value.kids.filter((kid) => kid.id !== id);
};

const userDataStore = computed(() => store.getters.GET_USER_DATA);

const userData = ref(JSON.parse(JSON.stringify(userDataStore.value)));
</script>

<style lang="scss" scoped></style>
