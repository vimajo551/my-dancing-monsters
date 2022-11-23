function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/zZi1OvAHM/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    console.log("gotResults")
    if(error){
        console.error(error)
    }
    else{
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "Posso ouvir - "+results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").innerHTML = "Precisão - "+(results[0].confidence*100).toFixed(3)+"%";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


        img1=document.getElementById("alien1")
        img2=document.getElementById("alien2")
        img3=document.getElementById("alien3")
        img4=document.getElementById("alien4")
        if(results[0].label=="palmas"){
            img1.src="monster gif(1).gif";
            img2.src="monster png(2).png";
            img3.src="monster png(3).png";
            img4.src="monster png(4).png";
        }else if(results[0].label=="estalos"){
            img1.src="monter png(1).png";
            img2.src="monter gif(2).gif";
            img3.src="monster png(3).png";
            img4.src="monster png(4).png";
        }else if(results[0].label=="sino"){
            img1.src="monter png(1).png";
            img2.src="monster png(2).png";
            img3.src="monter gif(3).gif";
            img4.src="monster png(4).png";
        }else{
            img1.src="monter png(1).png";
            img2.src="monster png(2).png";
            img3.src="monster png(3).png";
            img4.src="monter gif(4).gif";
        }

    }

}