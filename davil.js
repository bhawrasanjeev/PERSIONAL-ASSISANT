let buttons = document.querySelector("button");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang= "hi-IN"


    // Get all available voices
    let voices = window.speechSynthesis.getVoices();

    // Find a male voice
    let maleVoice = voices.find(voice => voice.name.toLowerCase().includes('male'));

    // If a male voice is found, set it
    if (maleVoice) {
        text_speak.voice = maleVoice;
    } else {
        // If no male voice is found, default to the first available voice
        text_speak.voice = voices[0];
    }

    window.speechSynthesis.speak(text_speak);
}
    
function wishMe(){
let day = new Date()
let hours =day.getHours()
if (hours >= 0 && hours<12) {
    speak("good morning ,what can i help you")
}
else if(hours>=12 && hours <16){
    speak("good afternoon , what can i help you")

}
else{    
    speak("good eveing ,what can i help you")

}
}
window.addEventListener('load',()=>{
wishMe()
}
)

let speachRec =window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speachRec()
recognition.onresult =(event)=>{
    let currentIdex= event.resultIndex
    let transcript =event.results[currentIdex][0].transcript
     content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}
buttons.addEventListener('click',()=>{
    recognition.start()
    buttons.style.display ="none"
    voice.style.display ="block"
})
function takeCommand(message){
    buttons.style.display ="block"
    voice.style.display ="none"
    if (message.includes("hello")|| message.includes("hey")) {
        speak("hello  , what can i help you ?")
    }else if(message.includes("who are you")){
        speak(" I am virtual assistant , created by sanjeev bhawara")

    }else if(message.includes("open yputub")){
        speak(" sure , opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open chrome")){
        speak(" sure , opening youtube")
        window.open("https://www.google.com")
    }
    else if(message.includes("open google")){
        speak(" sure , opening google")
        window.open("https://www.google.com")
    }
    else if(message.includes("how are you")){
        speak(" i am fine ,thank you for asking ,soo what can i help you")

    }
    else if(message.includes("open calculator")){
        speak(" sure , opening calculator")
        window.open("calculator://")
    }
    else{
        speak(`this what i found on internet regarding${message.replace("davil","")||message.replace("google","")}`)

        window.open(`https://www.google.com/search?q=${message.replace("davil","")||message.replace("google","")}`)
        }
}