
function flatVolume() {

    var radius= parseFloat(document.getElementById("radius").value);
    var height= parseFloat(document.getElementById("height").value);

    var volume = 3.14*radius*radius*height;
    var cost = volume *0.0012;

    

    var fname = document.getElementById("fname").value;
    console.log(fname);
    var lname = document.getElementById("lname").value;
    var custname = fname + " " + lname; 
    console.log(custname);

   var address = document.getElementById("address").value;
   var pcode = document.getElementById("pcode").value;


    document.getElementById("1").innerHTML=custname;
    document.getElementById("2").innerHTML=address;
    document.getElementById("3").innerHTML= pcode;

    document.getElementById("4").innerHTML= "Flat bottomed cylinders";
    document.getElementById("5").innerHTML=radius+"cm, "+height+ "cm and " + volume.toFixed(2);
    document.getElementById("6").innerHTML=cost.toFixed(2);


}






function  sphericalVolume() {

    var radius= parseFloat(document.getElementById("radius").value);

    var volume = 0.5 * (4/3) * 3.14 * radius *radius*radius;
    
    var cost = volume* 0.0015;



    var fname = document.getElementById("fname").value;
    console.log(fname);
    var lname = document.getElementById("lname").value;
    var custname = fname + " " + lname; 
    console.log(custname);

   var address = document.getElementById("address").value;
   var pcode = document.getElementById("pcode").value;


    document.getElementById("1").innerHTML=custname;
    document.getElementById("2").innerHTML=address;
    document.getElementById("3").innerHTML= pcode;

    document.getElementById("4").innerHTML= "1/2 Spherical";
    document.getElementById("5").innerHTML=radius+"cm and " + volume.toFixed(2);
    document.getElementById("6").innerHTML=cost.toFixed(2);



}









function squareVolume() {
    
    var length = parseFloat(document.getElementById("length").value);
    var height =  parseFloat(document.getElementById("height").value);
    var width = parseFloat(document.getElementById("width").value);
    
    var volume = length *width*height;
    var cost = volume * .001;

    var fname = document.getElementById("fname").value;
    console.log(fname);
    var lname = document.getElementById("lname").value;
    var custname = fname + " " + lname; 
    console.log(custname);

   var address = document.getElementById("address").value;
   var pcode = document.getElementById("pcode").value;


    document.getElementById("1").innerHTML=custname;
    document.getElementById("2").innerHTML=address;
    document.getElementById("3").innerHTML= pcode;

    document.getElementById("4").innerHTML= "Square/Rectangular Cubes";
    document.getElementById("5").innerHTML=length+"cm, "+width+ "cm, "+ height +"cm and " + volume.toFixed(2);
    document.getElementById("6").innerHTML=cost.toFixed(2);



}










function truncatedVolume() {

    var radius1= parseFloat(document.getElementById("radius1").value);
    var radius2 = parseFloat(document.getElementById("radius2").value);
    var height = parseFloat(document.getElementById("height").value);

    var volume = (1/3)*3.14*((radius1*radius1)+(radius1*radius2)+(radius2*radius2))*height;

    var cost = volume * .002;

    var fname = document.getElementById("fname").value;
    console.log(fname);
    var lname = document.getElementById("lname").value;
    var custname = fname + " " + lname; 
    console.log(custname);

   var address = document.getElementById("address").value;
   var pcode = document.getElementById("pcode").value;


    document.getElementById("1").innerHTML=custname;
    document.getElementById("2").innerHTML=address;
    document.getElementById("3").innerHTML= pcode;

    document.getElementById("4").innerHTML= "Truncated Cone";
    document.getElementById("5").innerHTML=radius1+"cm, "+radius2+ "cm, "+ height +"cm and " + volume.toFixed(2);
    document.getElementById("6").innerHTML=cost.toFixed(2);
}

