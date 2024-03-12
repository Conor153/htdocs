// Use these functions to do each part of the exercise

function part1()
{
	console.log("-- part1 --");
	var fname="Tom";
	var lname="Jones";
	var fullname= fname + " "+lname;
	console.log(`first name= ${fname}`);
	console.log(`last name= ${lname}`);
	console.log(`full name= ${fullname}`);

	// add code here!
}

function part2()
{
	console.log("-- part2 --");
	var celsius=0;
	var fahrenheit=32;
	console.log(`${celsius} celsius = ${fahrenheit} fahrenheit`);
	fahrenheit=(celsius*9/5)+32
	// add code here! [F = (C*9/5)+32]
}

function part3()
{
	console.log("-- part3 --");
	var mark = prompt("Input your mark:");
	console.log(`mark = ${mark}`);
	if(mark<100 && mark>=70)
	{
		console.log("Distinction");
	}
	if(mark<70 && mark>=60)
	{
		console.log("Merit 1");
	}
	if(mark<60 && mark>=50)
	{
		console.log("Merit 2");
	}
	if(mark<50 && mark>=40)
	{
		console.log("Pass");
	}
	if(mark<40 && mark>=0)
	{
		console.log("Fail");
	}
	if(mark>100 || mark<0)
	{
		console.log("Invalid");
	}
}


function part4()
{
	console.log("-- part4 --");
	var number=5;
	var answer=0
	for(var i=0; i<13; i++)
	{
		answer = number*i;
		console.log(`${number} X ${i} = ${answer}`);
	}
}


function sqr(number)
{
	return number*number;
}

function part5()
{
	console.log("-- part5 --");
	var square=3;
	console.log(`${square} squared is ${sqr(square)}`);
	
}


function part6()
{
	console.log("-- part6 --");
	var lotto = [10,15,20,25,30,35];  // your lotto numbers
	var draw = [10,15,20,25,41,42];   // draw numbers

	console.log("My Lotto numbers:");
	for(var i=0;i<lotto.length;i++)
	{
		console.log(lotto[i]);
	}
	console.log("Lotto Draw Numbers:");
	for(var i=0;i<draw.length;i++)
	{
		console.log(draw[i]);
	}
	var count=0;
	for(var i=0;i<lotto.length;i++)
	{
		for(var j=0;j<draw.length;j++)
		{
			if(lotto[i] == draw[j])
			{
				count++;
			}
		}
	
	}
	console.log(`Match ${count}`);
}


function part7()
{
	console.log("-- part7 --");
	var lotto = [10,15,20,25,30,35];
	var draw = [1,15,20,25,41,10];

	document.write("<h3>My Numbers</h3>");
	for(var i=0;i<lotto.length;i++)
		document.write(`<img src='images/lottoimages/${lotto[i]}.png'>`);
		
	document.write("<h3>Draw Numbers</h3>");
	for(var i=0;i<draw.length;i++)
		document.write(`<img src='images/lottoimages/${draw[i]}.png'>`);
		
}

