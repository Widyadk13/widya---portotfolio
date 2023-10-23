<template>
  <div class="w-full relative lg:pt-6 overflow-hidden">
    <div
      id="modalParent"
      class="col-span-5 w-70 mx-28 ml-20 rounded-5xl shadow-nonde lg:shadow-card-secondary"
    >
      <form class="block">
        <div>
          <div
            class="bg-[#dcefe3] relative w-full sm:max-w-full min-h-0 lg:shadow-xl rounded-xl border place-items-center mt-2"
          >
            <img
              class="absolute w-full"
              alt="icon"
              src="../../../assets/static/homepage/bg-paper.svg"
            />
            <div class="text-[#1d4838] p-auto m-16">
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
                  class="absolute right-10 -mt-72 lg:w-600px"
                  alt="icon"
                  src="../../../assets/static/homepage/orang.svg"
                  width="800px"
                />
              </div>
              <!-- medsos -->
              <div class="flex justify-start mt-10">
                <a
                  href="https://api.whatsapp.com/send/?phone=6282340330228&text&type=phone_number&app_absent=0"
                  target="_blank"
                  class="cursor-pointer z-10 rounded-full"
                  type="button"
                >
                  <img
                    class="w-32 hover:brightness-125"
                    data-id="whatsapp"
                    alt="icon"
                    src="../../../assets/static/homepage/Whatsapp.svg"
                  />
                </a>
                <a
                  href="https://www.instagram.com/homawari__/"
                  target="_blank"
                  class="cursor-pointer z-10 rounded-full"
                  type="button"
                  ><img
                    class="w-32 hover:brightness-125"
                    alt="icon"
                    src="../../../assets/static/homepage/instagram.svg"
                /></a>
                <a
                  href="https://www.linkedin.com/in/widya-dwi-kusuma-3358b8224/"
                  target="_blank"
                  class="cursor-pointer z-10 rounded-full"
                  type="button"
                >
                  <img
                    class="w-32 hover:brightness-125"
                    alt="icon"
                    src="../../../assets/static/homepage/linkedin.svg"
                /></a>
                <a
                  href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=widyadwikusuma18@gmail.com"
                  target="_blank"
                  class="cursor-pointer z-10 rounded-full"
                  type="button"
                  ><img
                    class="w-32 hover:brightness-125"
                    alt="icon"
                    src="../../../assets/static/homepage/gmail.svg"
                /></a>
                <a
                  href="https://github.com/Widyadk13"
                  target="_blank"
                  class="cursor-pointer z-10 rounded-full"
                  type="button"
                >
                  <img
                    id="github-image"
                    class="w-32 hover:brightness-125"
                    alt="icon"
                    src="../../../assets/static/homepage/github.svg"
                    target="_blank"
                  />
                </a>
              </div>
              <div class="mt-10" type="button">
                <button
                  class="h-16 shadow-button transform m-1 w-auto justify-center scale-95 focus:bg-sky-950 focus:text-white bg-[#1d4838] text-white font-semibold hover:bg-yellow-500 hover:text-white rounded-full"
                >
                  <p class="text-3xl text-white font-bold scale-75">Star Me On Github ✨</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const images = document.querySelectorAll('.hover-effect')

// Fungsi untuk menangani perubahan perilaku saat gambar diklik
function handleImageClick(event) {
  const image = event.target

  // Ambil nilai dari atribut data-id
  const dataId = image.getAttribute('data-id')

  if (dataId === 'whatsapp') {
    image.classList.add('hover:brightness-200')
  }

  // Menghapus event listener setelah gambar diklik sekali
  image.removeEventListener('click', handleImageClick)
}

// Tambahkan event listener untuk setiap gambar
images.forEach((image) => {
  image.addEventListener('click', handleImageClick)
})
</script>
