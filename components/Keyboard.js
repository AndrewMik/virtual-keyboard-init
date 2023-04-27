export default class Keyboard {

  constructor() {
    this.keyboard = [];
    this.language = "russian";
    this.letterCase = "upperCase";
    this.keyboardContainer = document.querySelector(".keyboard"); 
  }

  addKey(key){
    this.keyboard.push(key);
  }

  append(key){
    this.keyboardContainer.append(key);
  }
}