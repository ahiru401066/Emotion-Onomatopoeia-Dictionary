"use strict";

class Word {
    constructor (word, definition, img) {
        this.word = word;
        this.definition = definition;
        this.img = img;
    }
}

class EmotionObject {
    constructor (emotion, img, description, color, onomatopoeia) {
        this.emotion = emotion;
        this.img = img;
        this.description = description;
        this.color = color;
        this.onomatopoeia = onomatopoeia;
    }
}

const container = document.querySelector("#container");

// create box 
function createBox(emotion) {
    let box = document.createElement("div");
    box.classList.add("box")
    box.style.backgroundColor = emotion.color;

    let h2 = document.createElement("h2");
    h2.classList.add("character");
    h2.innerHTML = emotion.emotion;

    let emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerHTML = emotion.img;

    box.append(h2);
    box.append(emoji);

    return box
}

let angry = new EmotionObject("ANGRY（怒り）","😡", "不快・苛立ち・理不尽に対する感情", "#FF5454", []);
let happy = new EmotionObject("HAPPY（幸福感）","😄", "心地よさ、喜び、満足感", "#FF7628", []);
let bad = new EmotionObject("BAD（不快感）","😣", "居心地の悪さ、不安、拒否反応", "#39ABFF", []);
let sad = new EmotionObject("SAD（悲しみ）","😢", "喪失感、孤独、落胆", "#7F7F7F", []);
let confident = new EmotionObject("CONFIDENT 自信","💪", "自分の選択や能力に対する信頼", "#EBB700", []);
let exciting = new EmotionObject("EXCITING（高揚）","🎉", "刺激的・新しいことに対する期待感", "#FFBEFF", []);
let hurt = new EmotionObject("HURT（傷つき）","😖", "心身の痛み、裏切り、ショック", "#FFBBBB", []);
let tired = new EmotionObject("TIRED（疲労）","😴", "集中力の低下・過労・気力の消耗", "#2CAC6E", []);
let confused = new EmotionObject("CONFUSED（混乱）","🤔", "理解不能・選択肢の多さによる戸惑い", "#A565FB", []);
container.append(createBox(angry));
container.append(createBox(happy));
container.append(createBox(bad));
container.append(createBox(sad));
container.append(createBox(confident));
container.append(createBox(exciting));
container.append(createBox(hurt));
container.append(createBox(tired));
container.append(createBox(confused));