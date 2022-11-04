let currentLanguage = "ja";
let languages = {
    ja: {
         title_web:"Webの知識を見つけられる Web developer library",
         subtitle:"10代向けのWeb開発を学ぶWebサイト",
         role:"UXデザイナー, リサーチ",
         projectGoal:"初めてWeb開発をする10代に役立つWeb開発情報を提供します。",
         targetAudience:"10代のプログラミング未経験者",
         keyChallenge:"Web開発が初めてとなる10代を助けるツールをデザインします。",
         hypothesis:"Web開発に必要な情報に素早くアクセスできるWebサイトをつくります。",
         task1:"インタビューを行い、どのようにWeb開発の勉強をしたのか聞いていきます。",
         task2:"プロトタイプの制作と改善",
         task3:"ユーザーテスト",
         
         about_research:"ユーザーリサーチについて",
         issue1:"インターネットからWeb開発の情報を見つける手間:",
         
         explain1:"検索すると大量の情報が出てきて、どこから手をつけて良いのかわからない。",
         issue2:"何から始めたら良いのかわからない:",
         explain2:"大学からWeb開発の勉強を始めたので、何から始めたら良いのかわからない。",
         issue3:"インターネットからWeb開発の情報を見つける:",
         explain3:"周りに詳しい人がいないので自分でその技術について調べた。",
         aboutPersona:"ペルソナ:",
         explainPersona:"ペルソナとして自分の作品集を作りたい学生リンダと文化祭のウェブサイトを作りたい学生ヒューゴを構築しました。",
         
         
         inital_concept:"初期デザインのコンセプト:",
         concept_explain:"Web開発に役立つWebサイトを集めてウェブ開発が初めての10代にその情報を提供します。",
         about_usertest:"ユーザーテストについて",
         steps:"手順:",
         step1:"ツールというページを見つけてもらう",
         step2:"ツールの一覧からWeb開発ソフトのVisual Studioを見つけてもらう。",
         step3:"Web開発ソフトのVisual Studioの詳細ページに移動してもらう。",
         
         research_result:"調査結果:",
         research_result1:"専門用語を使わない。",
         research_result2:"スマートフォンのものは文字を大きくする",
         research_result3:"説明は簡潔にまとめる。",
         about_mockups:"モックアップについて",
         mockup1:"改善:",
         mockup2:"IDE(統合開発環境)からツールにタイトルを変更しました。文字サイズを大きくと説明は簡潔に変更しました。",
         explain_mockups:"モックアップの説明:",
         character_mockup1:"Web開発について学べるオンラインサイトを紹介する、学習サイトのページです。",
         character_mockup2:"プロが作ったWebサイトを紹介するインスピレーションのページです。",
         character_mockup3:"実際にプログラミングをするときに必要なツールを紹介するページです。",
         
         conculsion_learn:"結論と学び", 
         conculsion_web:"結論:",
         myConculusion:"5名のユーザーテストの結果、Web開発ツールを見つけるのに約は1分程度でできるようになりました。",
         whatLearn:"学び:",
         myStudy:"親切で情報を多くWebサイトに入れましたが、それが逆に利用者にとってストレスになることがわかりました。"
      },
    en: {
      title_web:"Web developer library",
      subtitle:"Design a tool to help tutor teenagers in web development.",
      role:"UX designer, researcher",
      projectGoal:"Design an application that organizes useful web development resources for teenagers.",
      targetAudience:"Teenagers just start to study web development.",
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
      aboutPersona:"Persona:",
      explainPersona:"As personas, we constructed Linda, a student who wanted to create a collection  website of her own work, and Hugo, a student who wanted to create a festival website.",
     
      inital_concept:"Inital design concept:",
      concept_explain:"My idea collects useful information and provides that information to teens who are new to Web development.",
      about_usertest:"About usability study",
      steps:"Usability study process:",
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