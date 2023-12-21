const { ref } = Vue

// Customize language for dialog menus and carousels here

const load = Vue.createApp({
  setup () {
    return {
      CarouselText1: 'Cidade com Ambientação de Los Angeles !',
      CarouselSubText1: '🌴 New Ambiance',
      CarouselText2: 'Ele é a prova Morta que existe Vida após a Morte',
      CarouselSubText2: '🧟 Ele é o Zombie',
      CarouselText3: 'E se for radioativo e demorar 70 a 90 anos para Matar ?',
      CarouselSubText3: '🌬️ O Oxigênio',
      CarouselText4: 'Uma Pizza é um Gráfico materializado de quanta Pizza ainda resta !',
      CarouselSubText4: '🍕 Aceitamos Patrocínio de Pizzarias',

      DownloadTitle: '💾 Baixando o Servidor',
      DownloadDesc: "👾 Nesse momento estamos trabalhando parar colocar todos os scripts nessa bomba que tu chama de computador ",

      SettingsTitle: '⚙️Configurações',
      AudioTrackDesc1: '🔇 Música',
      PlayVideoDesc3: '🎞️ Vídeo',
      
      firstap: ref(true),
      secondap: ref(true),
      thirdap: ref(true),
      firstslide: ref(1),
      secondslide: ref('1'),
      thirdslide: ref('5'),
      audioplay: ref(true),
      playvideo: ref(true),
      download: ref(true),
      settings: ref(false),
    }
  }
})

load.use(Quasar, { config: {} })
load.mount('#loading-main')

var audio = document.getElementById("audio");
audio.volume = 0.05;

function audiotoggle() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function videotoggle() {
    var video = document.getElementById("video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

let count = 0;
let thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (data.idx / count) * 100 + "%";
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;

        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (thisCount / count) * 100 + "%";
    },
};

window.addEventListener("message", function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});

