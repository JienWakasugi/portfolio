// type writing
const texts= ['UX designer', 'UI designer', 'illustrator:)']
let count_type = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
 if(count_type === texts.length){
  count_type = 0;
 }
 currentText=texts[count_type];
 letter = currentText.slice(0, ++index);

 document.querySelector(".typing").textContent=letter;
 if(letter.length === currentText.length){
  count_type++;
   index = 0;
 }
 setTimeout(type, 400);
}());