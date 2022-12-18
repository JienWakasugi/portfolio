let currentLanguage = "ja";
let languages = {
    ja: {
         title_cookware:"IoT調理器具とオンラインレシピ Cal&Light, Tre",
         subtitle:"IoT調理器具とオンラインレシピ<",
         role:"ハードウェア　キッチンスケールと調味料瓶の制作, ソフトウェア　Webアプリの開発",
         projectGoal:"レシピ通りに料理を作ることができない料理初心者をサポートすることです。",
         targetAudience:"料理を始めたばかりの20代の学生",
         keyChallenge:"調理器具をIoT化させて調理活動をサポートします。",
         hypothesis:"オンラインレシピで、多種多様な料理を作ることができるようになりましたが料理初心者はレシピ通りにできないという課題があると考えました。",
         hypothesis_next:"その課題に対してオンラインレシピとIoT化した調理器具をつないでそんな料理初心者を支援するプロトタイプを制作しました。",
         task1:"調理の課題である計量や調理手順、時間管理を解決するアイデアを実装",
         task2:"実際に動くハードウェアのデザインとソフトウェアのUXデザイン",
         task3:"想定ユーザーの課題抽出とフローを検討",

         concept:"コンセプト",
         solution:"解決する課題:",
         goal:"料理初心者の課題である“正確な計量”と“レシピの読み間違え”、“時間管理”を解決します。",

         research_analysis:"調査と分析の結果",
         calculateFood:"食材の計量:",
         annoyCalculate:"調味料や材料を正確に計量することが手間",
         cookingProcess:"レシピの読み間違え:",
         annoyProcess:"レシピを読み間違えて調理に失敗してしまうこと",
         timeManagement:"時間管理:",
         annoyManagement:"タイマーを用意することが手間であったり、時間を守れず調理が失敗すること",

         process:"製作プロセス",
         flow:"実装までの流れ:",
         analysis_dev:"システムの流れを描くところからハード・ソフトの設計を行いました。",

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
         instruction6:"使い方:",
         explain7:"レシピの手順に合わせて必要な調味料ボックスが光り、何を入れればよいか教えてくれます。",
         system8:"仕組み:",
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

        about_usertest:"ユーザービリティテストについて",
        steps:"手順:",
        step1:"1.キッチンスケール上のコップに水を加えてアプリ上に分量を表示させる。",
        step2:"2.チェックマークが表示されるまでキッチンスケール上のコップに水を加える。",
        step3:"3.タイマー機能を見つけてもらう。",
        step4:"4.LEDが光っている調味料ボックスを見つけてもらう。",
        stepsUsability:"テスト協力者:",
        partUsability:"男性2名、女性3名(日本、中国)",

        conculsion_learn:"結論と学び",
        conculsion_kitchen:"結論:",
        myConculusion:"レシピアプリに現状の分量を表示することや時計機能は支持される一方で、調味料ボックスのLEDが光る機能は使い方が分かりにくく改善が必要だということがわかりました。",
        whatLearn:"学び:",
        myStudy:"分析と評価を通して、加えた調味料の記憶などIoT側が得意なことと人間が得意なことを切り分けてシステムを作ることが大切だと実感しました。",

        weightDisplay:"分量表示:",
        weightDisplayDetails:"5人中3人がこの機能を支持しました。",
        checkDisplay:"チェック機能:",
        checkDisplayDetails:"5人中4人がこの機能を支持しました。",
        checkTimer:"タイマー機能:",
        checkTimerDetails:"5人中3人がこの機能を支持しました。",
        checkSeasoring:"調味料ボックス:",
        checkSeasoringDetails:"5人中4人がこの機能を支持しました。",
      },
    en: {
         title_cookware:"IoT cookware Cal&Light, Tre",
         subtitle:"IoT cookware and cooking app",
         role:"Developing IoT scale and caster, website",
         projectGoal:"Help students cook successfully with an app",
         targetAudience:"Students in their 20s just started cooking",
         keyChallenge:"Make cookware that is embedded with IoT.",
         hypothesis:"We realized that there is a challenge for novice cookers who cannot follow online recipes.",
         hypothesis_next:"To address this issue, I have created a prototype that supports novice cooks by connecting online recipes and IoT devices.",
         task1:"Develop three prototypes to assist beginners in measuring and showing cooking procedures and managing time.",
         task2:"Design the user experience of the hardware and the software that actually works.",
         task3:"Analyze cooking flow of a user.",

         concept:"Concept",
         solution:"My design challenge:",
         goal:"It solves the accurate measurement, misreading recipes, and time management problems of novice cooks.",

         research_analysis:"Research and Analysis Results",
         calculateFood:"Measuring Ingredients:",
         annoyCalculate:"Measuring seasoning and ingredients accurately is a hassle.",
         cookingProcess:"Misreading recipes:",
         annoyProcess:"Failure to cook due to misreading recipes.",
         timeManagement:"Fail to cook without a clock:",
         annoyManagement:"Having prepared a timer is a hassle, or failing to cook on time.",

         process:"Development",
         flow:"Implementation:",
         analysis_dev:"I designed the hardware and software, starting with drawing a flowchart.",

         aboutCaL:"About IoT scale CaL",
         function1:"Function to avoid forgetting to add food:",
         explain1:"IoT kitchen scale senses the ingredients added and reflects recipe information.",
         function2:"Function to convert automatically :",
         explain2:"e.g. cubic centimetre to gram",
         instruction3:"Instruction:",
         explain3:"Weight data measured in real-time is shown in recipes by IoT kitchen scale.It can be used to convert seasoning or to avoid forgetting for adding ingredients.",
         system4:"System:",
         explain4:"IoT kitchen scale communicates with recipes using a communication sensor ESPr® Developer.",
         
         aboutLight:"About IoT caster Light",
         function5:"Function to avoid forgetting to add food:",
         explain5:"It works in conjunction with recipes to illuminate the necessary seasoning caster to inform the user who is cooking.",
         instruction6:"Instruction:",
         explain7:"For each recipe step, the seasoning caster requires light up and tell you what to put in them.",
         system8:"System:",
         explain9:"IoT seasoning caster communicates with recipes using a communication sensor ESPr® Developer.",
         
         aboutTre:"About Web app Tre",
         function10:"Function to help avoid forgetting to add ingredients:",
         explain11:"A recipe specifies the ingredients that were added and automatically adds a check mark.",
         function12:"Real-time display:",
         explain13:"Showing the real-time weighting information for each recipe.",
         instruction14:"Instruction:",
         explain15:"The recipe informs beginners which ingredients are used and how much is needed. The recipe includes a timer.",
         system16:"System:", 
         explain17:"Recipes are created with HTML, CSS, and Javascript, and communicate with the cookware via Ajax.",

         about_usertest:"About usarbility study",
         steps:"Conduct observations and interviews:",
         step1:"1.Add water to the cup on the kitchen scale and displayed in the app.",
         step2:"2.Add water to the cup on the kitchen scale until a check mark appears.",
         step3:"3.Let the user find the timer function.",
         step4:"4.Find a seasoning jar with a shining LED.",
         stepsUsability:"Participants:",
         partUsability:"2 males, 3 females(Japan, China)",

         conculsion_learn:"Conclusion and Learn", 
         conculsion_kitchen:"Conclusion:",
         myConculusion:"Evaluation supported the recipe application function to display the current ingredient quantity and clock function.On the other hand, LED light on seasoning caster is difficult to understand and needs to be improved.",
         whatLearn:"Learn:",
         myStudy:"Through my analysis and evaluation, I realized that it is important to build a system that separates what the IoT side is good at, such as  memorizing the amount of data added, from what humans are good at.",  

         weightDisplay:"Measuring weight:",
         weightDisplayDetails:"Three out of five supported this feature.",
         checkDisplay:"Checklist:",
         checkDisplayDetails:"Four out of five supported this feature.",
         checkTimer:"Timer:",
         checkTimerDetails:"Three out of five supported this feature.",
         checkSeasoring:"Seasoning IoT Device:",
         checkSeasoringDetails:"Four out of five supported this feature.",
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