let currentLanguage = "ja";
let languages = {
    ja: {
         title_movie:"映画館の席予約アプリ Wow film",
         subtitle:"アプリのUXデザイン",
         role:"UXデザイナー, リサーチ",
         hypothesis:"見たい映画の席の予約が素早くできるアプリをつくること",
         task1:"インタビューを行い、映画の予約について調べます。",
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
         step1:"ツールというページを見つけてもらう",
         step2:"ツールの一覧からWeb開発ソフトのVisual Studioを見つけてもらう。",
         step3:"Web開発ソフトのVisual Studioの詳細ページに移動してもらう。",

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
         conculusion_details:">5名のユーザーテストの結果、席予約は1分程度で素早くできるようになりました。",
         learn_movie:"学び:",
         learn_details:"日本人、オランダ人、アメリカ人、中国人、台湾人と多様なユーザーの意見を聞くことができました。彼らの発言からニーズを考えることができるようになりました。"
      },
    en: {
      title_movie:" Wow film",
      subtitle:"UX design application",
      role:"UX designer, reseacher",
      hypothesis:"見たい映画の席の予約が素早くできるアプリをつくること",
      task1:"インタビューを行い、映画の予約について調べます。",
      task2:"Make and iterate prototypes",
      task3:"Userbility study",
      about_research:"Userbility study",
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
      step1:"ツールというページを見つけてもらう",
      step2:"ツールの一覧からWeb開発ソフトのVisual Studioを見つけてもらう。",
      step3:"Web開発ソフトのVisual Studioの詳細ページに移動してもらう。",
      research_result:"調査結果:",
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
      conculusion_details:">5名のユーザーテストの結果、席予約は1分程度で素早くできるようになりました。",
      learn_movie:"学び:",
      learn_details:"日本人、オランダ人、アメリカ人、中国人、台湾人と多様なユーザーの意見を聞くことができました。彼らの発言からニーズを考えることができるようになりました。"
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