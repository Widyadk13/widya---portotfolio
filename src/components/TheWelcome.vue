<template>
  <div class="w-full relative lg:pt-8 overflow-hidden">
    <div
      id="modalParent"
      class="col-span-5 w-70 mx-28 ml-20 rounded-5xl shadow-nonde lg:shadow-card-secondary"
    >
      <form class="block">
        <div>
          <div
            class="bg-[#dcefe3] relative w-full sm:max-w-full min-h-0 lg:shadow-xl rounded-xl border place-items-center flex justify-between"
          >
            <div class="text-[#1d4838] p-20">
              <p class="text-5xl font-bold mb-6">Widya Dwi Kusuma</p>
              <h1 class="text-2xl font-bold">(Widya)</h1>
              <div class="pt-12 grid grid-cols-2 font-semibold text-xl">
                <p>
                  As a graduate with a Bachelor's degree in Biotechnology from the University of
                  Technology Sumbawa, I have cultivated an exceptional proficiency within the realm
                  of laboratory practices. My profound comprehension encompasses a diverse array of
                  assays for probiotic candidates, encompassing antimicrobial, antioxidant,
                  antidiabetic evaluations, as well as assessments of pH and salt tolerance. I am
                  fervently enthusiastic about honing and advancing my laboratory skills with the
                  overarching goal of generating innovations that hold a constructive societal
                  impact. hello
                </p>
                <img
                  class="absolute right-10 -mt-80"
                  alt="icon"
                  src="@/assets/static/homepage/orang.svg "
                  width="800px"
                />
              </div>
              <!-- medsos -->
              <div class="flex justify-start mt-16">
                <a
                  href="https://api.whatsapp.com/send/?phone=6282340330228&text&type=phone_number&app_absent=0"
                  target="_blank"
                  ><img class="mr-7" alt="icon" src="@/assets/static/homepage/wa.svg"
                /></a>
                <a href="https://www.instagram.com/homawari__/" target="_blank"
                  ><img class="mr-9" alt="icon" src="@/assets/static/homepage/instagram.svg"
                /></a>
                <a href="https://www.linkedin.com/in/widya-dwi-kusuma-3358b8224/" target="_blank">
                  <img class="mr-9" alt="icon" src="@/assets/static/homepage/linkedin.svg"
                /></a>
                <a
                  href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=widyadwikusuma18@gmail.com"
                  target="_blank"
                  ><img class="mr-9" alt="icon" src="@/assets/static/homepage/gmail.svg"
                /></a>
                <a href="https://github.com/Widyadk13" target="_blank">
                  <img
                    class="mr-9"
                    alt="icon"
                    src="@/assets/static/homepage/github.svg"
                    target="_blank"
                  />
                </a>
              </div>
              <div class="mt-14" type="button">
                <button
                  class="h-16 shadow-button transform m-1 w-auto py-2 px-4 justify-center scale-95 focus:bg-emerald-400 focus:text-white bg-[#1d4838] text-whitefont-semibold hover:text-white rounded-full"
                >
                  <p class="text-3xl text-white font-bold scale-75">Star Me On Github</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>
