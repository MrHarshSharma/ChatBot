// Questions array
var questions = [
    'Whats your name ?',
    'Where are you from?',
    'What\'s your age?',
    'What profile you are working on?',
    'How many years of experience do you have?',
    'Do you have a zoom Id? yes or no?',
    'Please enter your zoom Id',
    'Please make a zoom Id so that we can process you further.',
    'It was nice talking you :), we will contact you shortly.'
];

var inputbox = document.querySelector("#ans");
var output = document.querySelector(".body");
// to ask first question
var num=0;
var p = document.createElement("P");
p.setAttribute("class","question mt-2 py-auto");
p.innerHTML=questions[num];
output.appendChild(p);

// hit enter and rply to chat bot
$("#ans").on('keypress',function(e){
	if(e.which==13){
		var res=document.getElementById("ans").value;
		if(res!=""){
			output.innerHTML+="<br>";
			var p = document.createElement("P");
			p.setAttribute("class","answer py-auto");
			p.innerHTML=res;
			output.appendChild(p);
			showResponse();
			scroll();
		}
	}
});

// autofocus when page load
	$("#ans").focus();

//to respond to chatbot 
var me;
function showResponse(){
	var input = inputbox.value;
	if(input == ""){

	}else{
		if(num==0){
			me=`Hii ${input}`;
			disableinput();
			inputbox.value="";
			typing();
			++num;
			setTimeout(changequestion, 2000);
		}
		else if(num==1){
			me=`${input} must be a good place`;
			disableinput();
			inputbox.value="";
			typing();
			++num;
			setTimeout(changequestion, 2000);
		}
		else if(num==2){
			disableinput();
			if(checkINT(parseInt(input))==true){
				var getDate=new Date();
				var yearestracted = getDate.getFullYear();

				me=`so you are ${yearestracted - input} born`;
				inputbox.value="";
				
				++num;	
			}else{
				me="plese enter proper iniput in digits";
				inputbox.value="";
			}
			typing();
			setTimeout(changequestion, 2000);
		}
		else if(num==3){
			me=`Awsome ${input}`;
			disableinput();
			inputbox.value="";
			typing();
			++num;
			setTimeout(changequestion, 2000);
		}
		else if(num==4){
			me=`It is good to hear that you have ${input} year of experience`;
			disableinput();
			inputbox.value="";
			typing();
			++num;
			setTimeout(changequestion, 2000);
		}else if(num==5){
			inputbox.value="";
			disableinput();
			typing();
			if(`${input}`=="yes" || `${input}`=="Yes" ){
			++num;
			me="Fantastic!!";
			}else if(`${input}`=="no" || `${input}`=="No"){
				num=num+2;
				me="Oops!!";
			}else{
				me="Enter Proper choise";
			}
			++num;
			setTimeout(changequestion, 2000);
		}else if(num==6){
			me="";
			disableinput();
			typing();
			inputbox.value="";
			num=8;
			setTimeout(changequestion, 2000);
		}else if(num==7){
			me="";
			disableinput();
			typing();
			inputbox.value="";
			++num;
			setTimeout(changequestion, 2000);
		}else if(num==8){
			disableinput();
			me="";
			typing();
			inputbox.value="";
			++num;
			setTimeout(changequestion, 2000);
		}
	}
}

// To change question
function changequestion(){
	document.getElementById('typing').remove();
	var p=document.createElement("P");
	p.setAttribute("class", "question");
	if(me==""){
	p.innerHTML += questions[num];
	}else{
	p.innerHTML += me+"<br>"+questions[num];
	}
	output.appendChild(p);
	scroll();
	if(num==8){
		inputbox.style.display="none";
	}
	
	enableinput();
}

// to show psedu tying
function typing(){
	var p = document.createElement("P");
	p.setAttribute('class','question mt-2');
	p.setAttribute('id','typing');
	p.innerHTML="Typing <img src='images/typing.gif' class='typing'>"
	output.appendChild(p);

}

// To autoscroll
function scroll(){
	output.scrollBy(0,output.scrollHeight);
}


// to diable input
function disableinput(){
	$("#ans").prop('disabled',true);
}

// to enable input
function enableinput(){
	$("#ans").prop('disabled',false);
	$("#ans").focus();
}

// to check if input is integer
function checkINT(n){
	if(typeof(n)=="number"){
		if(n<100){
			return true;
		}else{
			return false;
		}
	}
}

// to start introjs
introJs().start();
introJs().addHints();
