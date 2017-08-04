function beautyguru()
{var points=0;
var choice1= document.querySelector('input[name="q1"]:checked').value;
if (choice1== "go all glam!"){
  points=points+20;
}
var choice2= document.querySelector('input[name="q2"]:checked').value;
if (choice2== "setting your liquid makeup w/ powder to reduce creasing"){
  points=points+20;
}
var choice3= document.querySelector('input[name="q3"]:checked').value;
if (choice3== "eye makeup consisting in putting eyeshadow on your crease and concealer on your lid"){
  points=points+20;
}
var choice4= document.querySelector('input[name="q4"]:checked').value;
if (choice4== "on cheekbones, nose and the cupids bow"){
  points=points+20;
}
var choice5= document.querySelector('input[name="q5"]:checked').value;
if (choice5== "Anastasia Beverly Hills, duh!"){
  points=points+20;
} console.log(points+" points");
if (points>=0 & points<=20){alert("What Are uou doing with your life? You need more practice girl.")}
if (points>20 & points<=40){alert("Not quite there yet... Keep practicing!")}
if (points>40 & points<=60){alert("keep trying! half way there!")}
if (points>60 & points<=80){alert("YESSS! You basically are a beauty guru! Bursh up on your terminology.")}
if (points>80 & points<=100){alert("GIRLLLL WORK! Welcome to the club. Beauty Guru approved!")}
}
