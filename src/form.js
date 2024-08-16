const form = document.forms['form'];
form.addEventListener('input', inputHandler);

function inputHandler({target}) {
	if(target.hasAttribute("data-reg")){
		inputCheck(target);}
}

function inputCheck(el){
	const inputValue = el.value;
	const inputReg = el.getAttribute("data-reg");
	const reg = new RegExp(inputReg);
console.log(inputValue, reg)
if(reg.test(inputValue)){
	el.style.color="#44751e";
} else{
	el.style.color="red";
}
console.log(el.style.color);
}