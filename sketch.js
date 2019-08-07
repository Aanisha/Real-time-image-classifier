// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  
}

function setup() {
  createCanvas(400, 400);
  img=createCapture(VIDEO);
  //img = createImg('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turdus-migratorius-002.jpg/330px-Turdus-migratorius-002.jpg');
  //img=createImg('https://upload.wikimedia.org/wikipedia/commons/7/7b/Donkey_1_arp_750px.jpg',0,0,width,height);  
  classifier.classify(img, gotResult);
  
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    document.getElementById('label').innerHTML='Label: ' + results[0].label;
    document.getElementById('score').innerHTML='Confidence: ' + nf(results[0].confidence, 0, 2);
    classifier.classify(img, gotResult);
  }
}