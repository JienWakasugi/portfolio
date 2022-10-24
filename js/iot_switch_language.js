let currentLanguage = "ja";
let languages = {
    ja: {
         title_cookware:"IoT調理器具 Cal&light, Tre",
         subtitle:"IoT調理器具と調理アプリ",
         role:"ハードウェア　キッチンスケールと調味料瓶の制作, ソフトウェア　Webアプリの開発",
         hypothesis:"オンラインレシピで、多種多様な料理を作ることができるようになりましたが料理初心者はレシピ通りにできないという課題があると考えました。",
         hypothesis_next:"その課題に対してオンラインレシピとIoT化した調理器具をつないでそんな料理初心者を支援するプロトタイプを製作しました。",
         task1:"調理の課題である計量や調理手順、時間管理を解決するアイデアを実装",
         task2:"実際に動くハードウェアとソフトウェアのデザインUXデザイン",
         task3:"想定ユーザーの課題抽出とフローを検討",
         aboutCaL:"IoTキッチンスケールCaL(カル)について",
         function1:"入れ忘れ防止:",
         explain1:"加えた材料をスケールがセンシングして、レシピ上に情報を反映します。",
         function2:"自動的に換算:",
         explain2:"大さじ・小さじなどを自動的にグラムに換算します。",
         instruction3:"使い方:",
         explain3:"キッチンスケールで測った食材の情報がレシピにリアルタイムに表示されます。例えば調味料の換算や食材の入れ忘れ防止等です。",
         system4:"仕組み:",
         explain4:"通信センサESPr® Developerでレシピと通信します。",
         aboutLight:"IoTスパイスボックスLight(ライト)について",
         function5:"入れ忘れ防止:",
         explain5:"レシピと連携して必要な調味料瓶を光らせて料理をするユーザーに知らせます。",
         instruction6:"使い方",
         explain7:"レシピの手順に合わせて必要な調味料ボックスが光り、何を入れればよいか教えてくれます。",
         system8:"仕組み",
         explain9:"通信センサESPr® Developerでレシピと通信します。",
         aboutTre:"レシピTre(トレ)について",
        function10:"入れ忘れ防止:",
        explain11:"入れ終えた食材はレシピ側で判断して、自動的にチェックマークがつきます。",
        function12:"リアルタイム表示:",
        explain13:"加えた分量をリアルタイムで表示します。",
        instruction14:"使い方:",
        explain15:"レシピを見ると使った食材や加えた食材の分量がわかる、また、タイマーの準備をレシピがしてくれます。",
        system16:"仕組み", 
        explain17:"HTML,CSS,Javascriptでレシピをつくり、調理器具とはAjaxで通信します。",
        concept:"コンセプト",
        solution:"解決する課題:",
        goal:"料理初心者の課題である“正確な計量”と“レシピの読み間違え”、“時間管理”を解決します。",
        process:"製作プロセス",
        flow:"実装までの流れ:",
        analysis_dev:"システムの流れを描くところからハード・ソフトの設計を行いました。"

      },
    en: {
         title_cookware:"IoT cookware Cal&light, Tre",
         subtitle:"IoT cookware and cooking app",
         role:"Developing IoT scale and caster, website",
         hypothesis:"We realized that there is a challenge for novice cookers who cannot follow online recipes.",
         hypothesis_next:"To address this issue, I have created a prototype that supports novice cooking by connecting online recipes and IoT devices.",
         task1:"Develop three prototypes to assist beginners in measuring and showing cooking procedures and managing time.",
         task2:"Design the user experience of the hardware and the software that actually works.",
         task3:"Analyze cooking flow of a user.",
         aboutCaL:"About IoT scale CaL",
         function1:"Function to avoid forgetting to add food:",
         explain1:"IoT kitchen scale senses the ingredients added and reflects recipe information.",
         function2:"Function to convert automatically :",
         explain2:"e.g. cubic centimetre to gram",
         instruction3:"Instruction",
         explain3:"Weight data measured in real-time is shown in recipes by IoT kitchen scale.It can be used to convert seasoning or to avoid forgetting for adding ingredients.",
         system4:"System",
         explain4:"IoT kitchen scale communicates with recipes using a communication sensor ESPr® Developer.",
         aboutLight:"About IoT caster Light",
         function5:"Function to avoid forgetting to add food:",
         explain5:"It works in conjunction with recipes to illuminate the necessary seasoning bottles to inform the user who is cooking.",
         instruction6:"Instruction",
         explain7:"For each recipe step, the seasoning caster requires light up and tell you what to put in them.",
         system8:"System",
         explain9:"IoT seasoning caster communicates with recipes using a communication sensor ESPr® Developer.",
         aboutTre:"About Web app Tre",
         function10:"Function to avoid forgetting to add food:",
         explain11:"A recipe specifies the ingredients that were added and automatically adds a check mark.",
         function12:"Real-time display:",
         explain13:"Showing the real-time weighting information for each recipe.",
         instruction14:"Instruction:",
         explain15:"The recipe tells biginners the foods used and how much they just added. And recipe has a timer.",
         system16:"System:", 
         explain17:"Recipes are created with HTML, CSS, and Javascript, and communicate with the cookware via Ajax.",
         concept:"Concept",
         solution:"My design challenge:",
         goal:"It solves the accurate measurement, misreading recipes, and time management problems of cooking novice.",
         process:"Development",
         flow:"Implementation:",
         analysis_dev:"I designed the hardware and software, starting with drawing a flowchart."
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