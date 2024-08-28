<template>
  <div
    v-if="userDataStore.name && userDataStore.age"
    class="flex flex-col gap-[60px] font-medium"
  >
    <div class="flex flex-col gap-5">
      <h1>Персональные данные</h1>
      <p class="font-bold">
        {{ userDataStore.name }}, {{ formattedAge(userDataStore.age) }}
      </p>
    </div>
    <div class="flex flex-col items-start gap-5">
      <h1>Дети</h1>
      <p
        v-for="kid in userDataStore.kids"
        :key="kid.id"
        class="bg-gray-light px-5 py-2.5 rounded-md font-bold"
      >
        {{ kid.name }}, {{ formattedAge(kid.age) }}
      </p>
    </div>
  </div>
  <div class="text-center font-bold" v-else>
    Заполните данные и нажмите "Сохранить"
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const userDataStore = computed(() => store.getters.GET_USER_DATA);

const formattedAge = (age) => {
  return `${age} ${getAgeSuffix(age)}`;
};

const getAgeSuffix = (age) => {
  if (age % 10 === 1 && age % 100 !== 11) {
    return "год";
  } else if (
    age % 10 >= 2 &&
    age % 10 <= 4 &&
    (age % 100 < 10 || age % 100 >= 20)
  ) {
    return "года";
  } else {
    return "лет";
  }
};
</script>

<style lang="scss" scoped></style>
