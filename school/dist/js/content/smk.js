const vm = new Vue({
    el: '#app',
    components: {
        VueGallerySlideshow
      },
    data() {
        return { 
            pelajar: [
                {
                    nama: "Adam",
                    class: "text-center pt-2 line-through font-bold",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Dewa",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Agung",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Bolu",
                    class: "text-center pt-2 line-through font-bold",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Aldy",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Andrea",
                    class: "text-center pt-2 text-error",
                    img: "../../images/icon/women.jpg",
                },
                {
                    nama: "Aulia",
                    class: "text-center pt-2 text-error",
                    img: "../../images/icon/women.jpg",
                },
                {
                    nama: "Azkal",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Banny",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Bima",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Daiz",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Bolang",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Zulfikar",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Deni",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Denur",
                    class: "text-center pt-2 text-error",
                    img: "../../images/icon/women.jpg",
                },
                {
                    nama: "Faiz",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Farah",
                    class: "text-center pt-2 text-error",
                    img: "../../images/icon/women.jpg",
                },
                {
                    nama: "Farel",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Febri",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Eko",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Henokh",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Calvin",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Kristina",
                    class: "text-center pt-2 text-error",
                    img: "../../images/icon/women.jpg",
                },
                {
                    nama: "Marwan",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Fariz",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Fathir",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Ikctiar",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Lukman",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Rafli",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Rizky",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Najwa",
                    class: "text-center pt-2 text-error",
                    img: "../../images/icon/women.jpg",
                },
                {
                    nama: "Naufal",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Rafi",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Raihan",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Rendy",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
                {
                    nama: "Wisnu",
                    class: "text-center pt-2",
                    img: "../../images/icon/men.jpg",
                },
            ],
            guru: [
                {
                    kelas: "X",
                    class: "w-24 xl:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2",
                    classTEXT: "text-center pt-4",
                    img: "../../images/icon/men.jpg",
                },
                {
                    kelas: "XI",
                    class: "w-24 xl:w-32 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2",
                    classTEXT: "text-center pt-4",
                    img: "../../images/icon/men.jpg",
                },
                {
                    kelas: "XII",
                    class: "w-24 xl:w-32 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2",
                    classTEXT: "text-center pt-4 text-error",
                    img: "../../images/icon/women.jpg",
                },
            ],
            images: [
                {url: 'images/1.jpg'},
                {url: 'images/2.jpeg'},
                {url: 'images/3.jpeg'},
                {url: 'images/4.jpg'},
                {url: 'images/5.jpg'},
                {url: 'images/6.jpg'},
                {url: 'images/7.jpg'},
                {url: 'images/8.jpg'},
                {url: 'images/9.jpg'},
              ],
            index: null
            
        }
    },
    computed: {
        visiblePelajar() {
            return this.pelajar.slice(0, this.pelajarVisible)
        },
        visibleGuru() {
            return this.guru.slice(0, this.guruVisible)
        }
    }
})