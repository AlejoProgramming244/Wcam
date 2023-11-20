Webcam.set
({
    height: 350,
    width: 350,
    image_format: "png",
    png_quality: 90 
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = "<img id='image' src="+ data_uri +">"
    });
}

console.log("Model ML5", ml5.version);

classify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ah3p5ziaG/model.json", modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded!", modelLoaded)
}

function check()
{
    img = document.getElementById("image");

    classify.classify(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error("hubo un error", error);
    }
    else
    {
        console.log(results);

        document.getElementById("Objet").innerHTML = "Objeto: " + results[0].label;
        document.getElementById("Intelligence").innerHTML = "Precision: " + (results[0].confidence* 100).toFixed(10);
    }
}
