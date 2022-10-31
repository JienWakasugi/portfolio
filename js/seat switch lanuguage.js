let currentLanguage = "ja";
let languages = {
    ja: {
         title_movie:"映画館の席予約アプリ Wow film",
         subtitle:"アプリのUXデザイン",
         role:"UXデザイナー, リサーチ",
         keyChallenge:"友達と一緒に映画を見るために席を素早く予約できるアプリをつくること。",
         hypothesis:"見たい映画の席の予約が素早くできるアプリをつくること",
         task1:"20代から30代の人たちに映画予約についてインタビューを行いました。",
         task2:"プロトタイプの制作と改善",
         task3:"ユーザーテスト",
         about_research:"ユーザーリサーチについて",
         issue1:"近場の映画館を探す:",
         explain1:"見たい映画を上映する映画館が近くにあるのか探すのが難しい。",
         issue2:"予定の作成:",
         explain2:"1週間の予定を考えるのが苦手である。",
         issue3:"道順が複雑:",
         explain3:"都会に住む外国人は映画館までの交通手段が複数あり行き方に迷ってしまう。",
         persona_explain:"ペルソナ:",
         persona:"ペルソナとして友達と一緒に映画を観に行きたい中国出身で東京でエンジニアとして働くリュウを構築しました。",
         inital_concept:"初期デザインのコンセプト:",
         concept_explain:"映画のイメージや自分の周りにある映画館をアプリが表示してくれること。",
         about_usertest:"ユーザーテストについて",
         steps:"手順:",
         step1:"近場の映画館を探す。",
         step2:"座席を選ぶ。",
         step3:"映画の予約を友達に共有する。",

         research_result:"調査結果:",//
         research_result1:"チケットの変更できるボタンが見えずらい。",
         research_result2:"ヘッダーとフッターが大きすぎる。",
         research_result3:"座席表が拡大できるほうがい良い。",
         about_mockups:"モックアップについて",
         mockup1:"改善:",
         mockup2:"座席表の全体像が見えるように変更しました。",
         explain_mockups:"モックアップの説明:",
         character_mockup1:"映画と映画館を見ることができるホームの画面",
         character_mockup2:"映画の詳細が載っている画面",
         character_mockup3:"座席と支払い画面",
         character_mockup4:"領収書の画面",
         conculsion_learn:"結論と学び", 
         conculsion_movie:"結論:",
         conculusion_details:"5名のユーザーテストの結果、席予約は1分程度で素早くできるようになりました。",
         learn_movie:"学び:",
         learn_details:"日本人、オランダ人、アメリカ人、中国人、台湾人と多様なユーザーの意見を聞くことができました。自分の考えと彼らが求めるているものの違いに気づきました。"
      },
    en: {
      title_movie:"Wow film",
      subtitle:"UX design application",
      role:"UX designer, reseacher",
      keyChallenge:"I created an application that allows you to reserve a seat quickly to see a movie with a friend.",
      hypothesis:"I made an application that allows to reserve a seat for a movie quickly.",
      task1:"I interviewed people in their 20s and 30s about their movie reservations.",
      task2:"Make and iterate prototypes",
      task3:"Userbility study",
      about_research:"Userbility study",
      issue1:"Finding a theater near by:",
      explain1:"It is difficult to find a movie theater nearby that shows the movie I want to see.",
      issue2:"Making a schedule:",
      explain2:"One participant has hard time thinking about their weekly schedule.",
      issue3:"Complex route:",
      explain3:"Foreigners living in Tokyo have multiple ways to get to movie theaters and are often confused with how to get there.",
      persona_explain:"Persona:",
      persona:"I constructed Ryu who is from China and works as an engineer in Tokyo who wants to go to movies with his friends.",
      inital_concept:"Inital design concept:",
      concept_explain:"The app should display images of movies and movie theaters around you.",
      about_usertest:"About usability study",
      steps:"Usability study process:",
      step1:"Find a movie theater near by",
      step2:"Reserve seats.",
      step3:"Share movie schedule with your friends。",
      research_result:"Research conclusions:",
      research_result1:"The button to change tickets is not visible.",
      research_result2:"Too big header and footer.",
      research_result3:"Participant would like to expand the seating chart.",
      about_mockups:"About mockups",
      mockup1:"Improvement:",
      mockup2:"Modified so that the entire seating map is visible.。",
      explain_mockups:"Introduction of Mockups:",
      character_mockup1:"Home screen where you can see movies and cinema",
      character_mockup2:"Screen with deatils of the movie",
      character_mockup3:"Seating and payment",
      character_mockup4:"Recepit",
      conculsion_learn:"Conclusion and Learn", 
      conculsion_movie:"Conclusion:",
      conculusion_details:"With five user trials, seat reservations can now be made fast, in about one minute in my usability study.",
      learn_movie:"Learn:",
      learn_details:"I am able to hear opinions of a diverse group of users: Japanese, Dutch, American, Chinese, and Taiwanese. So I realized my bias."
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