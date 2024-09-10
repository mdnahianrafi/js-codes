
let cities=["Dhaka","Chattogram","Rajshahi","Borishal","Rangpur"];
let age=50;
let question="What is ";
// map in js 

cities.map((item)=>
{
    console.log(item);
    
} )


// function using SpeechSynthesisUtterance

function gattings(cities)
{
    let utterance = new SpeechSynthesisUtterance(`Welcome to ${cities} enjoy your trip` );
    speechSynthesis.speak(utterance);
    
}

for(let i=0;i<cities.length;i++)
{
    gattings(cities[i]);
}


// function of question ans

function questionAnswer()
{
    if(question=="What is your name?")
    {
        let utterance = new SpeechSynthesisUtterance(`My name is Rafi` );
        speechSynthesis.speak(utterance);
         
    }
    else if (question=="What is your Age?")
    {
        let utterance = new SpeechSynthesisUtterance(`My age is 23`);
        speechSynthesis.speak(utterance);         
    }

    else if(age<=18 )
    {
        let utterance = new SpeechSynthesisUtterance(`You are not eligible for vote`);
        speechSynthesis.speak(utterance);
    }
    else if(age>=18 )
    {
        let utterance = new SpeechSynthesisUtterance(`You are  eligible for vote`);
        speechSynthesis.speak(utterance);
    }
 else{
    let utterance = new SpeechSynthesisUtterance(`Invalid Question.Try asking again`);
        speechSynthesis.speak(utterance);
 }
    
}


questionAnswer();