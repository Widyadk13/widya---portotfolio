<template>
  <div>
    <div class="w-full relative pb-1 lg:pt-10 overflow-hidden">
      <div
        id="modalParent"
        class="col-span-5 w-70 mx-28 ml-20 rounded-5xl shadow-nonde lg:shadow-card-secondary"
      >
        <form class="block">
          <div>
            <div
              class="bg-[#dcefe3] relative w-full sm:max-w-full min-h-0 lg:shadow-xl rounded-xl pb-6 pt-6 border place-items-center p-7 flex justify-between"
            >
              <img
                alt="icon"
                class="logo"
                src="../src//assets/favIcon.svg"
                width="200"
                height="200"
              />
              <div>
                <nav class="flex justify-between">
                  <h1 class="p-5 text-emerald-800 font-bold">HOME</h1>
                  <h1 class="p-5 text-emerald-800 font-bold">PENDIDIKAN</h1>
                  <h1 class="p-5 text-emerald-800 font-bold">PENGALAMAN</h1>
                  <h1 class="p-5 text-emerald-800 font-bold">PROJEK</h1>
                  <h1 class="p-5 text-emerald-800 font-bold">KONTAK SAYA</h1>
                </nav>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
