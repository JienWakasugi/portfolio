let currentLanguage = "ja";
let languages = {
    ja: {
         title:"家庭菜園を楽しむ IoTデバイスとアプリ Vodafon grow",
         subtitle:"20代向け植物育成キット",
         role:"UXデザイナー, リサーチ",
         keyChallenge:"植物を枯らさずに育てるツールを開発します。",
         hypothesis:"コミュニケーションがとれない植物の健康状態を知ることができるツールを作ります。",
         task1:"インタビューと観察を行い、植物との関わり方を聞きました。",
         task2:"プロトタイプの制作と改善",
         task3:"ユーザーテスト",
         
         about_research:"ユーザーリサーチについて",
         issue1:"観察とインタビューを実施:",
         
         explain1:"プランターと植物の種を用意して20代の協力者に育ててもらい、インタビューを実施しました。",
         issue2:"水やりが分からない:",
         explain2:"水をどれくらいあげれば良いのか分からない。",
         issue3:"インターネットからWeb開発の情報を見つける:",
         explain3:"植物を枯らしてしまう:",
        //  aboutPersona:"ペルソナ:",
        //  explainPersona:"ペルソナとして自分の作品集を作りたい学生リンダと文化祭のウェブサイトを作りたい学生ヒューゴを構築しました。",
         
         
         inital_concept:"初期デザインのコンセプト:",
         concept_explain:"シンプルに情報が伝わる画面、楽しく育てられる情報を提供する、壊れにくく信頼感があるデバイスを作ります。",
         about_usertest:"ユーザーテストについて",
         steps:"手順:",
         stepExplain:"作製したプロトタイプを用いて、ユーザの欲していることは何かを明らかにしていき、デザインをブラッシュアップしました。",
         step1:"ユーザが気になるプロトタイプのアイデアについて意見を聞きます。",
         step2:"紙のUIパーツを利用し、即席のワイヤーフレームを作ってもらいます。",
         step3:"欲しい機能をユーザに白紙ワイヤーフレームに描いてもらいます。",
         
         research_result:"調査結果:",
         research_result1:"IoTと連携するなら機能が明瞭簡潔が良い。",
         research_result2:"20代の利用者が飽きないで使い続けられるコンテンツを提供する。",
         research_result3:"植物の状態にすぐにアクセスできる。",
         research_result4:"プロトタイプの写真が綺麗だとテスト協力者がプロトタイプに親近感を持てなくなる。",
         about_mockups:"モックアップについて",
         mockup1:"改善:",
         mockup2:"テスト協力者が気にした日光と水、気温の情報は目立たせます。植物の登録画面はデバイスとの接続イラストを入れて繋がったことを示します。",
         explain_mockups:"モックアップの説明:",
         character_mockup1:"センサが取得した植物の状態 ( 日光、水分量、温度 ) をわかりやすく伝える方法と楽しんで育てるための コンテンツを検討しました。",
         character_mockup2:"植物が何を欲しているのか知らせるための状態を表示する画面を作りました。",
         character_mockup3:"育てることのモチベーション維持のため、成長の記録を残せる画面を作りました。",
         character_mockup4:"育てることのモチベーション維持のため、今まで育てた植物の一覧が見られる画面を作りました。",
         conculsion_learn:"結論と学び", 
         conculsion_web:"結論:",
         myConculusion:"展示会の開催、Vordafoneへのプレゼンテーションを通して大学のインキュベータープログラムに取り上げてもらうことができました。",
         whatLearn:"学び:",
         myStudy:"自分たちもユーザーとなって植物を育てながら、プロトタイプを作る過程は勉強になりました。ユーザー目線を常に忘れないようにしたいです。"
      },
    en: {
      title:"IoT stick for plants Vordafone grow",
      subtitle:"Design a tool to help tutor teenagers in web development.",
      role:"UX designer, researcher",
      keyChallenge:"I design a tool to help novice teenagers in web development.",
      hypothesis:"I Create a web page that provides information necessary for web development.",
      task1:"I interviewed programmers about their programming studies.",
      task2:"Make and iterate prototypes",
      task3:"Usarbility study",
    
      about_research:"About usarbility study",
      issue1:"Information retrieval from the Internet takes time.:",
      explain1:"There is so much information that it is difficult to find the information I want.。",
      issue2:"Where should beginners start to learn web development?:",
      explain2:"Students don't know what to start learning in Web development.",
      issue3:"No one around me knows much about web development:",
      explain3:"A student was exploring the technology on my own because no one around me knew much about it.",
      //aboutPersona:"Persona:",
      // explainPersona:"As personas, we constructed Linda, a student who wanted to create a collection  website of her own work, and Hugo, a student who wanted to create a festival website.",
     
      inital_concept:"Inital design concept:",
      concept_explain:"My idea collects useful information and provides that information to teens who are new to Web development.",
      about_usertest:"About usability study",
      steps:"Usability study process:",
      stepExplain:"Hello",
      step1:"Find the title Tools",
      step2:"From the list of tools, find the web development software Visual Studio.",
      step3:"Navigate to the Visual Studio web development software details page.",
       
      research_result:"Research conclusions:",
      research_result1:"The jargon isn't used for beginners.",
      research_result2:"The font size to be displayed on smartphones should be large.",
      research_result3:"The description should be concise.",
      about_mockups:"About mockups",
      mockup1:"Improvement:",
      mockup2:"Changed title from IDE (Integrated Development Environment) to Tools.The font size has been increased and description is changed. ",
      explain_mockups:"About mockups:",
      character_mockup1:"This is a page of learning sites that introduces online sites to learn about web development.。",
      character_mockup2:"This is an inspirational page that shows professionally created websites.",
      character_mockup3:"This page introduces the tools necessary for actual programming",
      character_mockup4:"hello",
      conculsion_learn:"Conclusion and Learn", 
      conculsion_web:"Conclusion:",
      myConculusion:"After 5 usability studies, it takes about a minute to find a web-development tool.",
      whatLearn:"Learn:",
      myStudy:"There are many text on the Web, but I found this to be counterintuitive and stressful to users."  
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