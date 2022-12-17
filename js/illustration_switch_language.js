let currentLanguage = "ja";
let languages = {
    ja: {
      title: "イラスト",
      subtitle:"デッサンコレクション",
      introduction:"デッサン作品",
      explain:"2020年より月4回、教室に通いながら絵を描いています。制作時間は8時間です。カメラの作品は作業時間で24時間かかっています。",
      duration:"期間 2020-現在",
      },
    en: {
        title: "My recent Illustrations",
        subtitle:"Drawing",
        introduction:"My artworks",
        explain:"I attend classes and draw 4 times per month since 2020.Time of this artwork is 8 hours.It took 24 hours to work on the camera artworks.",
        duration:"Duration 2020-Current",

  }
 
}


document.addEventListener("DOMContentLoaded", () => {
  let storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    changeLanguage(storedLanguage)
  } else {
    changeLanguage(currentLanguage)
  }
  [...document.querySelectorAll("[data-change-language]")].forEach((element) => 
 {
      element.addEventListener("click", (event) => {
      event.preventDefault();
      let language = element.getAttribute("data-change-language");
      localStorage.setItem("language", language);
      changeLanguage(language);
    })
  });
});


function changeLanguage(language) {
  let languageSet = languages[language];
  Object.keys(languageSet).forEach((id) => {
    document.getElementById(id).innerText = languageSet[id];
  });
}



