function startClassification() { navigator.mediaDevices.getUserMedia({ audio: true}); classifier =
ml5.soundClassifier('https://storage.googleapis.com/tm-model/dioSGsj4f/model.json',
modelReady); }
function modelReady() {
    classifier.classify(gotResult)
}
function gotResult(error , results){
if (error) {
    console.log(error)
} else {
    console.log(results)
    red = Math.floor(Math.random()*255) + 1
    green = Math.floor(Math.random()*255) + 1
    blue = Math.floor(Math.random()*255) + 1
    document.getElementById("result_label").innerHTML = "Posso Ouvir " + results[0].label
    document.getElementById("result_confidence").innerHTML = "Precissão " + (results[0].confidence * 100).toFixed(2) + "%"

    document.getElementById("result_label").style.color = "rgb(" + red + "," + green + "," + blue +")"
    document.getElementById("result_confidence").style.color = "rgb(" + red + "," + green + "," + blue +")"

    img1 = document.getElementById("Doguinho")
    img2 = document.getElementById("Calop")
    img3 = document.getElementById("Gatinho")

    if (results[0].label == "Cachorro") {
        img1.src = "auau.gif"
        img2.src = "calop.png"
        img3.src = "miau png.webp"
    }
    else if (results[0].label == "Calopsita") {
        img1.src = "auau png.jpg"
        img2.src = "calop.gif"
        img3.src = "miau png.webp"
    }
    else if (results[0].label == "Gato") {
        img1.src = "auau png.jpg"
        img2.src = "calop.png"
        img3.src = "miau.gif"
    }
}
}