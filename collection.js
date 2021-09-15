const BdAsiatique = [
    {
      name: 'Gu Daoist Master',
      autor: 'Gu Zhen Ren',
      releaseYear: '2018',
      Chapitre : '96 chapitres',
      genre: ['Reincarnation, Fantastic, Martial Arts, Comedy'],
    },
    {
        name: 'Martial Peak',
        autor: 'Pikapi Momo',
        releaseYear: '2018',
        Chapitre : '1499 chapitres',
        genre: ['Fantastic, Comedy, Martial Arts'],
    },
    {
        name: 'Im the great immortal',
        autor: 'June snow studio',
        releaseYear: '2019',
        Chapitre : '179 chapitres',
        genre: ['Reincarnation, Martial Arts, Fantastic, Comedy'],
    },
    {
        name: 'Rebirth of the urban immortal cultivator',
        autor: 'Shiu Jianshen',
        releaseYear: '2018',
        Chapitre : '431 chapitres',
        genre: ['Reincarnation, Martial Arts, Fantastic'],
    },
    {
        name: 'Tales of demons and gods',
        autor: 'Snail',
        releaseYear: '2015',
        Chapitre : '345 chapitres',
        genre: ['Martial Arts, Fantastic, Comedy'],
    },
    {
        name: 'Martial art reigns',
        autor: 'Pojie',
        releaseYear: '2019',
        Chapitre : '317 chapitres',
        genre: ['Martial Art, Fantastic, Comedy'],
    },
    {
        name: 'The strongest god king',
        autor: 'Edje man cartoon',
        releaseYear: '2019',
        Chapitre : '115 chapitres',
        genre: ['Reincarnation, Fantastic, Martial Arts, Comedy'],
      },
      {
        name: 'I have a dragon in my body',
        autor: 'island project',
        releaseYear: '2017',
        Chapitre : '287 chapitres',
        genre: ['Reincarnation, Marial Arts, Fantastic, Comedy'],
      },
      {
        name: 'Bai Lian Cheng Shen',
        autor: 'Ranzai studio',
        releaseYear: '2015',
        Chapitre : '813 chapitres',
        genre: ['Martial Arts, Fantastic, Comedy'],
      },
      {
        name: 'Yuan Zun',
        autor: 'Tian Can Tu dou',
        releaseYear: '2018',
        Chapitre : '343 chapitres',
        genre: ['Martial Arts, Fantastic, Comedy'],
      },
    ]

let n = 0;
let Sections = document.querySelectorAll('section');
for(n=0;n < BdAsiatique.length;n++){
    console.log(BdAsiatique[n]);
    console.log(Sections[n]);
    let newName= document.createTextNode(BdAsiatique[n].name);
    let newAutor= document.createTextNode(BdAsiatique[n].autor);
    let newReleaseDate= document.createTextNode(BdAsiatique[n].releaseYear);
    let newChapter= document.createTextNode(BdAsiatique[n].Chapitre);
    let newGender= document.createTextNode(BdAsiatique[n].genre);
    Sections[n].appendChild(newName);
    Sections[n].appendChild(newAutor);
    Sections[n].appendChild(newReleaseDate);
    Sections[n].appendChild(newChapter);
    Sections[n].appendChild(newGender);
}

