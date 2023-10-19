<template>
  <div>
    <div class="pb-12">
      <div class="bg-white w-auto h-64 sm:max-w-full min-h-0 lg:shadow-2xl rounded-2xl">
        <div class="bg-[#1d4838] py-3 rounded-xl flex justify-between">
          <div class="flex justify-center items-center">
            <!-- <img :src="imageSrc" :alt="alt" :style="style" /> -->
            <img
              class="ml-6"
              alt="icon"
              src="../../assets/static/pendidikan/logoUts.svg"
              width="80px"
            />
            <div>
              <p class="text-xl font-semibold text-white m-5">
                Universitas Teknologi Sumbawa (UTS)
              </p>
            </div>
            <p class="text-xl font-semibold text-white ml-14">2018 - 2022</p>
          </div>
        </div>

        <div class="flex justify-between">
          <div class="ml-2 p-6">
            <p class="text-xl font-medium text-[#1d4838] pb-2">
              Fakultas Teknologi Ilmu dan Hayati (FITH)
            </p>
            <p class="text-xl font-medium text-[#1d4838] pb-2">Program Studi Bioteknologi</p>
            <p class="text-xl font-medium text-[#1d4838] pb-2">Indeks Peserta Kumulatif: 3.68</p>
          </div>
          <div class="ml-8 p-4">
            <div class="mt-14">
              <button
                class="h-14 shadow-button transform w-auto py-2 px-4 justify-center scale-75 focus:bg-emerald-400 focus:text-white bg-[#1d4838] text-white font-semibold hover:text-white rounded-xl"
              >
                <p class="text-lg text-white font-bold">Visit Website</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    alt: String,
    style: String
  }
}
</script>
