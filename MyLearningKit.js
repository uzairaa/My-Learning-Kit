/* 23w 1012 JS files */
  /* in Ex2, uncomment the following function and complete it*/
  
  
  function checkUncheck1(){
    if (document.getElementById("check1").checked==true) {
       // add a getElementById here to get "flowchart" img and 
       // set the display property of its style to one of "inline" or "none"	 
      document.getElementById("flowchart").style.display="inline";
  
       
    }
    else {
       // add a getElementById here to get "flowchart" img and 
       // set the display property of its style to one of "inline" or "none"	 
       document.getElementById("flowchart").style.display="none";
        
        
    }
  }
  
  
  function checkUncheck2(){
    if (document.getElementById("check2").checked==true) {
       // add a getElementById here to get "js" img and 
       // set the display property of its style  
       document.getElementById("js").style.display="inline";
       
    }
    else {
       // add a getElementById here to get "js" img and 
       // set the display property of its style  
        document.getElementById("js").style.display="none";
        
    }
  }
  
  /* in Ex2, you need to create function
     checkUncheck3, which is similar to checkUncheck 1 and 2
  */
  function checkUncheck3(){
     if (document.getElementById("check3").checked==true) {
        // add a getElementById here to get "js" img and 
        // set the display property of its style  
        document.getElementById("another").style.display="inline";
       
     }
     else {
        // add a getElementById here to get "js" img and 
        // set the display property of its style  
        document.getElementById("another").style.display="none";
        
     }
   }
  /* in Ex4, create functions zoomIn() and zoomOut() */
  function zoomIn(){
     document.getElementById("flowchart").style.width="200%";
  
  }
  
  function zoomOut(){
     document.getElementById("flowchart").style.width="100%";
  }

function p1(){
    /* in Ex1, set message text and image sources for problem01*/
    document.getElementById("flowchart").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("another").style.display="none";
  
    document.getElementById("flowchart").src = "Flowchartslab4/img_00.jpg";
    document.getElementById("js").src = "lab4code/Screenshot (44).png";
    document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Write a flowchart for a computer program to receive two numbers and output the larger one. Assume the two number are not same. 
   Convince yourself that both versions work correctly. Then, assume the two numbers can be equal, 
  draw a flowchart for a computer program to receive two numbers and output the larger one if they are not equal, otherwise output 'they are equal'.</p>
  `;
   
     /*the following three lines gets the checkboxes, and unchecks them
    */
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
  
    /* in Ex3, update display of images */
  
  
  
}

 /* in Ex3, create function p02Func similar to p01Func */
function p02Func(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "Flowchartslab4/img_01.jpg";
   document.getElementById("js").src="lab4code/Screenshot (45).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Draw a flowchart for a computer program to receive two whole numbers as sides of a rectangle and output
   the rectangle’s perimeter, in the form of “Perimeter: x” where x is the perimeter.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

function p3(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "Flowchartslab4/img_02.jpg";
   document.getElementById("js").src="lab4code/Screenshot (46).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Draw a flowchart for a computer program to receive three whole numbers and store them in memory
   spaces called a, b, and c as three semi-axes of an ellipsoid, and calculate and output the volume of this
   ellipsoid, in the form of “volume: x” where x is the volume.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p4(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "Flowchartslab4/img_03.jpg";
   document.getElementById("js").src="lab4code/Screenshot (47).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Draw a flowchart for a computer program to receive three real numbers and store them in memory
   spaces called a, b, and c, and return the largest number of the three, in the form of “largest: x” where
   x is the largest value. Assume the three number are all different.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

function p5(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "Flowchartslab4/img_04.jpg";
   document.getElementById("js").src="lab4code/Screenshot (48).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Draw a flowchart to receive three numerical coefficients of a quadratic equation and determines if it has
   two distinct real roots, one root, or no roots in real numbers, output “it has 2 distinct roots”, “its roots
   are identical”, “it has no roots in real numbers” respectively.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p6(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "Flowchartslab4/img_05.jpg";
   document.getElementById("js").src="lab4code/Screenshot (49).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Draw a flowchart for the function, that receives a number, and first checks whether the input is
   divisible by 6 or not, outputting “divisible by 6” or “not divisible by 6”, respectively. Then, further
   check if the input is zero, and if it is zero, also outputs “program ended”.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

function p7(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "Flowchartslab4/img_06A.jpg";
   document.getElementById("js").src="lab4code/Screenshot (50).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Draw a flowchart to receive a number from 0~100, and map it to a letter grade based on Yorku
   standard. Use if .. else if .. else if.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

function p8(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "Flowchartslab4/img_06B.jpg";
   document.getElementById("js").src="lab4code/Screenshot (51).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Draw a flowchart to receive a number from 0~100, and map it to a letter grade based on Yorku standard.
   Use the “many case” style shown in slides (which corresponds to switch cases struct in JS programming
   language). Again, assume no letter grade E.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


//lab5

function p9(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab5flowcharts/img_07.jpg";
   document.getElementById("js").src="lab5code/Screenshot (53).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Devise a flowchart to keep on receiving an integer number from user and output whether the number is
   “even” or “odd”. The process repeats until a 0 is entered, then output “program ended” and ends.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

function p10(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab5flowcharts/img_08.jpg";
   document.getElementById("js").src="lab5code/Screenshot (54).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Devise a flowchart to receive a positive integer number and output each digit separately.
   For instance, if the input is 692, the program should output 6, 9, 2. Another example, if the number is 135429
   the program should output 1, 3, 5, 4, 2 and 9.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p11(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab5flowcharts/img_09.jpg";
   document.getElementById("js").src="lab5code/Screenshot (55).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Devise a flowchart to receive a positive integer number and output how many of its digits are equal to 3 or 7.
   For instance, if the input is 772, the program should output 2, because there are two 7 there. In another
   example, if the input is 14367, the program should output 2 as there is a 3 and a 7 in it.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p12(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab5flowcharts/img_10.jpg";
   document.getElementById("js").src="lab5code/Screenshot (56).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Devise a flowchart to receive a positive integer number and output "yes" if it is equal to its reverse; otherwise,
   output "no". For instance, if the input is 63936, the program should output "yes", because if you read the
   digits from left to right or from right to left, it's the same number. But, if the input is 632, the program should
   output "no" because 632 is not the same as 236.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p13(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab5flowcharts/img_11A.jpg";
   document.getElementById("js").src="lab5code/Screenshot (57).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Devise a flowchart to receive a positive integer number, as n, and output n! (n Factorial). At the end the
   algorithm output “x! = y” where x is the input value and y is the factorial value. For example, for input 6, the
   factorial is calculated by 6× 5× 4 ×3 × 2× 1 = 720, so the output should d be output “6! = 720”.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p14(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab5flowcharts/img_11B.jpg";
   document.getElementById("js").src="lab5code/Screenshot (58).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Devise a flowchart to receive a positive integer number, as n, and output n! (n Factorial). Use while loop.
   Although for loop, as you did in part A, fit this question well, here we use while loop to implement (every for
   loop can be rewritten to a while loop).</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p15(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab5flowcharts/img_12.jpg";
   document.getElementById("js").src="lab5code/Screenshot (59).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> Devise a flowchart to input an integer greater than 1, as n, and output the first n values of the Fibonacci
   sequence. In Fibonacci sequence, the first two values are 0 and 1 and other values are sum of the two
   values preceding it. For instance, if the input is 4, the program should print 0, 1, 1, 2,. As another example,
   if the input is 9, the program should output 0, 1, 1, 2, 3, 5, 8, 13, 21,.
   This exercise can be done with a for loop too, because—as an example—if the input is 10, the loop should
   iterate exactly 8 times. Note that for the first two values, we do not need to iterate; we already know they
   are 0 and 1.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p16(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab5flowcharts/img_13A.jpg";
   document.getElementById("js").src="lab5code/Screenshot (60).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p> ) Devise a flowchart to input a positive integer, n, – and by using [ and ] characters – output the figure below
   that has n rows and each row k has k pairs of [].</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p17(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab5flowcharts/img_13B.jpg";
   document.getElementById("js").src="lab5code/Screenshot (61).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart to input a positive integer, n, – and by using [ and ] characters – output the
   “inverted triangle” figure below that has n rows and each row k has k pairs of [].</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

//lab6

function p18(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab6flowcharts/Screenshot (62).png";
   document.getElementById("js").src="lab6code/Screenshot (68).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart that outputs 'YES' or 'No' after checking if the input is equal to the sum of all its positive divisors.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p19(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab6flowcharts/Screenshot (63).png";
   document.getElementById("js").src="lab6code/Screenshot (69).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart to output wheather a number is prime or not.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p20(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
  document.getElementById("flowchart").src = "lab6flowcharts/Screenshot (64).png";
  document.getElementById("js").src="lab6code/Screenshot (70).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart to output the number of positive and negative numbers until the input
   is 0 or the amount of positive numbers is more than 2 times the amount of negative numbers inputted.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p21(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab6flowcharts/Screenshot (65).png";
   document.getElementById("js").src="lab6code/Screenshot (71).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart to output the binary representation of an inputted number.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p22(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab6flowcharts/Screenshot (66).png";
   document.getElementById("js").src="lab6code/Screenshot (72).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart that from the first 4 digits inputted, counts the amount of negative inputs and then from the next 4 digits entered, 
   counts the amount of positive inputs and then checks to see if the amount of
   negative numbers entered from the first 4 inputs is equal to the amount of positive numbers from the next 4 inputs and outputs 'YES' or 'NO' accordingly.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

function p23(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab6flowcharts/Screenshot (67).jpg";
   document.getElementById("js").src="lab6code/Screenshot (74).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise two flowcharts. One Main algorithm that outputs all prime numbers until inputted number.
   One sub-algorithm that outputs true or false depending on wheather the inputted number is a prime number. </p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p24(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab6flowcharts/img_05A.jpg";
   document.getElementById("js").src="lab6code/Screenshot (73).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart that outputs the sum of even values stored at even positions in an array.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p25(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab6flowcharts/img_07A.jpg";
   document.getElementById("js").src="lab6code/Screenshot (77).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise an algorithm to scan an input array a of n elements, and output all prime numbers in the array that
   contain digit 7. For example, given array 27, 7, 13,17, 31, 37, where prime number are 7, 13, 17,31,37, the
   program should output 7, 17, 37.</p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
//lab 9
function p26(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "lab9flowchartandcode/image.png";
   document.getElementById("js").src="lab9flowchartandcode/Screenshot (78).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart for an algorithm to receive a 2D array of integer numbers, and output the sum of
   elements in the array that are divisible by 5. </p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
//slides
function p27(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "slides/Screenshot (79).png";
   document.getElementById("js").src="slides/Screenshot (80).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart for a nested loop that outputs the values of the counters side by side. </p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

function p28(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "slides/Screenshot (81).jpg";
   document.getElementById("js").src="slides/Screenshot (82).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise  a flowchart to
   check wheather the numbers between 10…30 are odd or even. </p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p29(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "slides/Screenshot (83).jpg";
   document.getElementById("js").src="slides/Screenshot (84).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart to read a number 10 times and 
   determine if its even or odd. </p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}
function p30(){
   document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

  
   document.getElementById("flowchart").src = "slides/Screenshot (85).jpg";
   document.getElementById("js").src="slides/Screenshot (86).png";
   document.getElementById("another").src = "";
   document.getElementById("problem").innerHTML=`<p>  Devise a flowchart to check two numbers and out put if both >0, <0, or mixed. </p>`;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

