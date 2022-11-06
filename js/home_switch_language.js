let currentLanguage = "ja";
let languages = {
    ja: {
        introduction: "大学院修了後、UIデザイナーとしてtoB向けの製品開発に取り組んでいます。担当した主な仕事は産業機器のUIです。今後はUXに関わる仕事に取り組んでいきたいと考えています。",
        introduction2: "デザイナー",
        introduction3:"村田機械 - 京都府",
        introduction4:"コンテンツ・クリエイティブデザインコース",
        introduction5:"九州大学大学院 - 福岡県",
        introduction6:"デジタル ソサエティ スクール",
        introduction7:"アムステルダム応用科学大学 - オランダ",
        introduction8:"デザイン経営工学課程",
        introduction9:"京都工芸繊維大学 - 京都府",
        titleSoft:"ソフトウェアスキル",
        titleHard:"ハードウェアスキル",
        titleLang:"語学",
        skillLanguages:"日本語(母国語), 英語",
        // title_cookware:"IoT調理器具 Cal&light, Tre"
      },
    en: {
        introduction: "As a UI designer, I was working on developing products for professional after completing graduate school.I have been in charge of a UI for industrial devices.In the future, I would like to work on UX design field.",
        introduction2:"Designer",
        introduction3:"Murata Machinery, Kyoto",
        introduction4:"Contens Creative Design ",
        introduction5:"Kyushu University, Fukuoka",
        introduction6:"Digital Society School",
        introduction7:"Amsterdam University of Applied Science, Dutch",
        introduction8:"Design Maragement and Engineering ",
        introduction9:"Kyoto Institute of Technology, Kyoto",
        titleSoft:"Software Skills",
        titleHard:"Hardware Skills",
        titleLang:"Languages",
        skillLanguages:"Japanese(native), English",
        // title_cookware:"IoT cookware Cal&light, Tre"

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



