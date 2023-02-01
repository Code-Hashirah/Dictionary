setInterval(()=>{
    let newDate= new  Date();
    let month=newDate.getMonth()
    let day=newDate.getDay();
    let date=newDate.getDate();
    let hours=newDate.getHours();
    let minutes=newDate.getMinutes();
    let seconds=newDate.getSeconds();
    const Months=['January','Febuary','March','April','May','June'];
    const Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    document.getElementById('day').innerHTML=`${Days[day]} ${Months[month]} - ${date}`
    document.getElementById('time').innerHTML=`${hours}: ${minutes}: ${seconds}`, 1000,
     1000
})

let Lexicon=document.forms[0];
Lexicon.addEventListener('submit',(e)=>{
    e.preventDefault();
let word=document.getElementById('word').value;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
.then(res => res.json())
.then(res =>{
let link=document.getElementById('audio')
    console.log(res[0].word)
          console.log(res[0].phonetic)
          console.log(res[0].meanings[0].definitions[0].example)
          let wordmeaning=res[0].meanings[0].definitions[0].definition
          let transcription=res[0].phonetic
          let example=res[0].meanings[0].definitions[0].example
          let Adios=res[0].phonetics[0].audio
          document.getElementById('word-display').innerHTML= word + " Meaning: " + wordmeaning
          document.getElementById('transcription').innerHTML= word + " :transcription: " + transcription
            document.getElementById('example').innerHTML= word + " Example: " + example
      
      let q= document.getElementsByTagName('audio').src=Adios
      var sound = new Audio(Adios);
    //   window.alert(q)
    // sound.play();
        
})
.catch(err => console.log(err))

})
function player(){
    let word=document.getElementById('word').value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(res =>{
    let Adios=res[0].phonetics[0].audio
    var sound = new Audio(Adios);
    sound.play();
    })
}

function setItBack(){
    document.getElementById('word-display').style.fontSize="13px";
    document.getElementById('transcription').style.fontSize="13px";
    document.getElementById('example').style.fontSize="13px";
    document.getElementById('transcription').style.fontSize="13px";
    document.getElementById('example').style.fontSize="13px";
    // document.get
}