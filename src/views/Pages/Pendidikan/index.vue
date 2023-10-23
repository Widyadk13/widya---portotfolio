<template>
  <div class="w-full relative lg:pt-6 overflow-hidden">
    <div id="modalParent" class="col-span-5 w-70 mx-28 ml-20 rounded-5xl lg:shadow-card-secondary">
      <form class="block">
        <div>
          <div
            class="bg-[#dcefe3] relative w-full sm:max-w-full min-h-0 lg:shadow-xl rounded-xl border place-items-center mt-2"
          >
            <img
              class="absolute w-full"
              alt="icon"
              src="../../../assets/static/homepage/bg-paper.svg"
              width="400px"
            />
            <div>
              <div class="text-[#1d4838] p-12">
                <p class="text-5xl font-bold mb-6">Pendidikan</p>

                <div class="flex justify-center">
                  <!-- icon -->
                  <img
                    class="z-10 -mt-10"
                    alt="icon"
                    src="../../../assets/static/pendidikan/orang.svg"
                    width="460px"
                  />

                  <!-- card -->
                  <div class="mt-2 z-20 w-full p-6 ml-16">
                    <!-- card 1 -->
                    <div
                      class="bg-white w-full sm:max-w-full min-h-0 lg:shadow-xl rounded-xl mb-10"
                    >
                      <div class="bg-[#1d4838] py-2 rounded-t-2xl flex justify-between">
                        <div class="flex justify-center items-center">
                          <!-- <img :src="imageSrc" :alt="alt" :style="style" /> -->
                          <img
                            class="ml-6"
                            alt="icon"
                            src="../../../assets/static/pendidikan/logoUts.svg"
                            width="80px"
                          />
                          <div class="flex">
                            <p class="text-xl font-semibold text-white m-5">
                              Universitas Teknologi Sumbawa (UTS)
                            </p>
                          </div>
                          <p class="text-xl font-semibold text-white ml-80">2018 - 2022</p>
                        </div>
                      </div>

                      <div class="flex justify-between">
                        <div class="ml-2 p-6">
                          <p class="text-lg font-medium text-[#1d4838] pb-1">
                            Fakultas Teknologi Ilmu dan Hayati (FITH)
                          </p>
                          <p class="text-lg font-medium text-[#1d4838] pb-1">
                            Program Studi Bioteknologi
                          </p>
                          <p class="text-lg font-medium text-[#1d4838] pb-1">
                            Indeks Peserta Kumulatif: 3.68
                          </p>
                        </div>
                        <div class="ml-8 p-4">
                          <div class="mt-14" type="button">
                            <button
                              class="h-14 shadow-button transform w-auto py-2 px-4 justify-center scale-75 focus:bg-emerald-400 focus:text-white bg-[#1d4838] text-white font-semibold hover:bg-yellow-500 hover:text-white rounded-full"
                            >
                              <p class="text-lg text-white font-bold">Visit Website</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- card 2 -->
                    <div
                      class="bg-white w-auto h-60 sm:max-w-full min-h-0 lg:shadow-2xl rounded-2xl"
                    >
                      <div class="bg-[#1d4838] py-2 rounded-t-2xl flex justify-between">
                        <div class="flex justify-center items-center">
                          <img
                            class="ml-6"
                            alt="icon"
                            src="../../../assets/static/pendidikan/logoSmandita.svg"
                            width="80px"
                          />
                          <div class="flex">
                            <p class="text-xl font-semibold text-white m-5">
                              Universitas Teknologi Sumbawa (UTS)
                            </p>
                          </div>

                          <p class="text-xl font-semibold text-white ml-80">2015 - 2018</p>
                        </div>
                      </div>

                      <div class="flex justify-between">
                        <div class="ml-2 p-6">
                          <p class="text-lg font-medium text-[#1d4838] pb-1">
                            Jurusan Ilmu Pengetahuan Alam (IPA)
                          </p>
                        </div>
                        <div class="ml-8 p-4">
                          <div class="mt-14">
                            <button
                              class="h-14 shadow-button transform w-auto py-2 px-4 justify-center scale-75 focus:bg-emerald-400 focus:text-white bg-[#1d4838] text-white font-semibold hover:bg-yellow-500 hover:text-white rounded-full"
                            >
                              <p class="text-lg text-white font-bold">Visit Website</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
