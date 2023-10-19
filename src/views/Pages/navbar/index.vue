<template>
  <div class="w-full relative pb-1 lg:pt-4 overflow-hidden">
    <div
      id="modalParent"
      class="col-span-5 w-70 mx-28 ml-20 rounded-5xl shadow-nonde lg:shadow-card-secondary"
    >
      <form class="block">
        <div>
          <div
            class="bg-[#dcefe3] relative w-full sm:max-w-full min-h-0 lg:shadow-xl rounded-xl pb-6 pt-6 border place-items-center p-7 flex justify-between"
          >
            <img alt="icon" class="logo" src="../src/assets/favIcon.svg" width="200" height="200" />
            <nav class="flex justify-between">
              <router-link to="/" class="p-5 text-emerald-800 font-bold">HOME</router-link>
              <router-link to="/pendidikan" class="p-5 text-emerald-800 font-bold"
                >PENDIDIKAN</router-link
              >
              <router-link to="/pengalaman" class="p-5 text-emerald-800 font-bold"
                >PENGALAMAN</router-link
              >
              <router-link to="/projek" class="p-5 text-emerald-800 font-bold">PROJEK</router-link>
              <router-link to="/kontak-saya" class="p-5 text-emerald-800 font-bold"
                >KONTAK SAYA</router-link
              >
            </nav>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
