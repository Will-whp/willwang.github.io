
//获取图片
var myImage = document.querySelector('img');

//实现点击切换图片功能
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpg') {
      myImage.setAttribute('src', 'images/Snip20180916_1.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.jpg');
    }
}

//获取按钮和标题
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//添加函数
function setUserName() {

	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    
}

//判断是否已经存在name
if (!localStorage.getItem('name')) {

    setUserName();

} else {

    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool,' + storedName;
}

//change Button点击事件
myButton.onclick = function() {
  setUserName();
}