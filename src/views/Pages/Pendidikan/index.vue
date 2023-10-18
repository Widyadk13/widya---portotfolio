<template>
  <div class="w-full relative lg:pt-8 overflow-hidden">
    <div
      id="modalParent"
      class="col-span-2 w-70 mx-28 ml-20 rounded-5xl shadow-nonde lg:shadow-card-secondary"
    >
      <form class="block">
        <div>
          <div
            class="bg-[#dcefe3] relative w-full sm:max-w-full min-h-0 lg:shadow-xl rounded-xl border place-items-center"
          >
            <div>
              <div class="text-[#1d4838] p-20">
                <p class="text-5xl font-bold mb-6">Pendidikan</p>

                <div class="grid grid-cols-2">
                  <!-- icon -->
                  <img
                    class="justify-starst"
                    alt="icon"
                    src="../../../assets/static/pendidikan/orang.svg"
                    width="20px"
                  />
                  <!-- card -->
                  <div><Card /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Card from '../../../components/pendidikan/cardPendidikan.vue'
</script>
