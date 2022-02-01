

let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
	galleryImages.forEach(function(image, index) {
		image.onclick = function() {
			let getElementCss = window.getComputedStyle(image);
			let getFUllImgUrl = getElementCss.getPropertyValue("background-image"); 
			let getImgUrlPos = getFUllImgUrl.split("/img/thumbs/");
			let setNewImgUrl = getImgUrlPos[1].replace('")', '');
			
			getLatestOpenedImg = index + 1;
			
			let container = document.body;
			let newImgWindwow = document.createElement("div");
			container.appendChild(newImgWindwow);
			newImgWindwow.setAttribute("class", "img-window")
			newImgWindwow.setAttribute("onclick", "closeImg()")
			
			let newImg = document.createElement("img");
			newImgWindwow.appendChild(newImg);
			newImg.setAttribute("src", "../img/" + setNewImgUrl);
			newImg.setAttribute("id", "current-img");
			
			newImg.onload = function() {
				
				let changeDir;
				
				let imgWidth = this.width;
				let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
				
				let newNextBtn = document.createElement("a");
				let btnNextText = document.createTextNode("Next");
				newNextBtn.appendChild(btnNextText);
				container.appendChild(newNextBtn);
				newNextBtn.setAttribute("class", "img-btn-next");
				newNextBtn.setAttribute("onclick", "changeImg()");
				newNextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";

				let newPrevBtn = document.createElement("a");
				let btnPrevText = document.createTextNode("Prev");
				newPrevBtn.appendChild(btnPrevText);
				container.appendChild(newPrevBtn);
				newPrevBtn.setAttribute("class", "img-btn-prev");
				newPrevBtn.setAttribute("onclick", "changeImg()");
				newPrevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
			}

		}
	});
}

function closeImg() {
	document.querySelector(".img-window").remove();
	document.querySelector(".img-btn-next").remove();
	document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
	document.querySelector("#current-img").remove();
	
	let getImgWindow = document.querySelector(".img-window");
	let newImg = document.createElement("img");
	getImgWindow.appendChild(newImg);
	x
	let calcNewImg;
	if(changeDir === 1) {
		calcNewImg = getLatestOpenedImg + 1;
		alert(calcNewImg);
		if(calcNewImg > galleryImages.length) {
			calcNewImg =1;
		}
	}
	else if(changeDir === 0) {
		calcNewImg = getLatestOpenedImg -1;
		if(calcNewImg < 1) {
			calcNewImg = galleryImages.length;
		}
	}
	
	
	newImg.setAttribute("src", "../img/img" + calcNewImg + ".jpg");
	newImg.setAttribute("id", "current-img");	

}




