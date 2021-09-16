let header = document.querySelector('header');
let newDiv = document.createElement('div');
let newDivAttribute = document.createAttribute('header');
let newA = document.createElement('a');
let newAAttribute= document.createAttribute('active');

newA.setAttributeNode(newAAttribute);
newDiv.setAttributeNode(newDivAttribute);
newDiv.appendChild(newA);
header.appendChild(newDiv);

let newH1 = document.createElement('h1');
let newTextH1 = document.createTextNode("My manhua collection");
newH1.appendChild(newTextH1);
header.appendChild(newH1);

const BdAsiatique = [
    {
        image : " images/GuDaoist.jpeg ",
        alt : "Personnage Principale : Fang Yuan",
        class : "Gu",
        name: 'Gu Daoist Master',
        autor: ' écrit par "Gu Zhen Ren"',
        releaseYear: ' en 2018.',
        Chapitre : ' Il y a actuellement 96 chapitres',
        genre: [` et c'est un manhua de type : Reincarnation, Fantastic, Martial Arts, Comedy`],
    },
    {
        image : " images/MartialPeak.jpeg ",
        alt : "Personnage Principale : Yang Kai",
        class : "Peak",
        name: 'Martial Peak',
        autor: ' écrit par "Pikapi Momo"',
        releaseYear: ' en 2018.',
        Chapitre : ' Il y a actuellement 1499 chapitres',
        genre: [` et c'est un manhua de type : Fantastic, Comedy, Martial Arts`],
    },
    {
        image : " images/GreatImmortal.jpeg ",
        alt : "Personnage Principale : Li Taixuan",
        class : "Great",
        name: 'Im the great immortal',
        autor: ' écrit par "June snow studio"',
        releaseYear: ' en 2019.',
        Chapitre : ' Il y a actuellement 179 chapitres',
        genre: [`  et c'est un manhua de type : Reincarnation, Martial Arts, Fantastic, Comedy`],
    },
    {
        image : " images/RebirthCultivator.jpeg ",
        alt : "Personnage Principale : Chen Fan",
        class : "Rebirth",
        name: 'Rebirth of the urban immortal cultivator',
        autor: ' écrit par "Shiu Jianshen"',
        releaseYear: ' en 2018.',
        Chapitre : ' Il y a actuellement 431 chapitres',
        genre: [` et c'est un manhua de type : Reincarnation, Martial Arts, Fantastic`],
    },
    {
        image : " images/TalesDemons.jpeg ",
        alt : "Personnage Principale : Nie Li",
        class : "Tales",
        name: 'Tales of demons and gods',
        autor: ' écrit par "Snail"',
        releaseYear: ' en 2015.',
        Chapitre : ' Il y a actuellement 345 chapitres',
        genre: [` et c'est un manhua de type : Martial Arts, Fantastic, Comedy`],
    },
    {
        image : " images/MartialReings.jpeg ",
        alt : "Personnage Principale : Ming Ye",
        class : "Reings",
        name: 'Martial art reigns',
        autor: ' écrit par "Pojie"',
        releaseYear: ' en 2019.',
        Chapitre : ' Il y a actuellement 317 chapitres',
        genre: [` et c'est un manhua de type : Martial Art, Fantastic, Comedy`],
    },
    {
        image : " images/GodKing.jpeg ",
        alt : "Personnage Principale : Wu Fu",
        class : "God",
        name: 'The strongest god king',
        autor: ' écrit par "Edje man cartoon"',
        releaseYear: ' en 2019.',
        Chapitre : ' Il y a actuellement 115 chapitres',
        genre: [` et c'est un manhua de type : Reincarnation, Fantastic, Martial Arts, Comedy`],

      },
      {
        image : " images/DragonBody.jpeg ",
        alt : "Personnage Principale : Mo Fan",
        class : "Dragon",
        name: 'I have a dragon in my body',
        autor: ' écrit par "island project"',
        releaseYear: ' en 2017.',
        Chapitre : ' Il y a actuellement 287 chapitres',
        genre: [` et c'est un manhua de type : Reincarnation, Marial Arts, Fantastic, Comedy`],
      },
      {
        image : " images/BaiLian.jpeg ",
        alt : "Personnage Principale : Luo Zeng",
        class : "Bai",
        name: 'Bai Lian Cheng Shen',
        autor: ' écrit par "Ranzai studio"',
        releaseYear: ' en 2015.',
        Chapitre : ' Il y a actuellement 813 chapitres',
        genre: [` et c'est un manhua de type : Martial Arts, Fantastic, Comedy`],
      },
      {
        image : " images/YuanZun.jpeg ",
        alt : "Personnage Principale : Yuan Zun",
        class : "Yuan",
        name: 'Yuan Zun,',
        autor: ' écrit par "Tian Can Tu dou"',
        releaseYear: ' en 2018.',
        Chapitre : ' Il y a actuellement 343 chapitres,',
        genre: [` et c'est un manhua de type : Martial Arts, Fantastic, Comedy`],
      },
    ]


let n = 0;

while(n<BdAsiatique.length){

let main = document.querySelector('main');
let newSection = document.createElement('section');
let image = document.createElement('img');
let newStrong = document.createElement('strong');
let newH2 = document.createElement('h2');
let newTextH2 = document.createTextNode(BdAsiatique[n].name);
let newH3 = document.createElement('h3');
let newTextH3 = document.createTextNode(BdAsiatique[n].autor);
let newH4 = document.createElement('h4');
let newTextH4 = document.createTextNode(BdAsiatique[n].releaseYear);
let newP = document.createElement('p');
let newTextP = document.createTextNode(BdAsiatique[n].Chapitre+BdAsiatique[n].genre);
let newDivMain = document.createElement('div');
let imagesDiv = document.createAttribute('src');
imagesDiv.value = BdAsiatique[n].image
let imagesDivAlt = document.createAttribute('alt')
imagesDivAlt.value = BdAsiatique[n].alt

image.setAttributeNode(imagesDivAlt);
image.setAttributeNode(imagesDiv);
newDivMain.appendChild(image);
newSection.appendChild(newDivMain);

newStrong.appendChild(newTextH2);
newH2.appendChild(newStrong);
newSection.appendChild(newH2);

newH3.appendChild(newTextH3);
newSection.appendChild(newH3);

newH4.appendChild(newTextH4);
newSection.appendChild(newH4);

newP.appendChild(newTextP);
newSection.appendChild(newP);

newSection.className = BdAsiatique[n].class;
main.appendChild(newSection);

n++;
}

