prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

    function take_snapshot()
    {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
    }

        console.log("ml5 version", ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bm_ryXMki/model.json',modelLoaded);

        function modelLoaded()
        {
        console.log("model is loaded")
        }


        function check_snapshot()
        {
        img = document.getElementById("capture_image");
        classifier.classify(img,gotResult);
        }

        function gotResult(error, results)
        {
if (error){
console.error(error);
}
else {
console.log(results);
document.getElementById("emotion1").innerHTML = results[0].label;
document.getElementById("emotion2").innerHTML = results[1].label;
prediction_1 = results[0].label;
prediction_2 = results[1].label;

speak();

if(prediction_1 == "happy")
{
document.getElementById("emoji1").innerHTML = "&#128522;";
}
if(prediction_1 == "sad")
{
document.getElementById("emoji1").innerHTML = "&#128532;";
}
if(prediction_1 == "anger")
{
document.getElementById("emoji1").innerHTML = "&#128548;";
}
if(prediction_2 == "happy")
{
document.getElementById("emoji2").innerHTML = "&#128522;";
}
if(prediction_2 == "sad")
{
document.getElementById("emoji2").innerHTML = "&#128532;";
}
if(prediction_2 == "anger")
{
document.getElementById("emoji2").innerHTML = "&#128548;";
}
}    
}

function speak()
{
var synth = window.speechSynthesis;
speak_data_1 = "the first perdiction is " + prediction_1;
speak_data_2 = "the second perdiction is " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
}