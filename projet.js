/*var listOfsrc=[1,2,3,4];
var imgElem=document.getElementsByClassName("img1")
function pre(i){
    for(let i = 0 ;i, i++)

}*/
var listOfsrc = [
    "https://i.pinimg.com/736x/9c/cc/49/9ccc4941d8f9b9d21cadda79a514feac.jpg",
    "https://m.media-amazon.com/images/I/71+mDoHG4mL.png",
    "https://i.pinimg.com/originals/ae/d1/cc/aed1cc3b81abc5f071d470d85a547932.jpg",
    "https://cats.com/wp-content/uploads/2022/03/gray-cats-compressed.jpg"
  ];
  
  
  var catData = [
    {
        name: "Fluffy",
        description: "Fluffy is a cute and playful cat. She loves to chase after toys and enjoys cuddling with her owner."
    },
    {
        name: "Whiskers",
        description: "Whiskers is a curious and adventurous cat. He likes exploring new places and climbing high surfaces."
    },
    {
        name: "Mittens",
        description: "Mittens is a calm and elegant cat. She enjoys lounging in sunny spots and being pampered by her owner."
    },
    {
        name: "Shadow",
        description: "Shadow is a mysterious and independent cat. He prefers to observe his surroundings from a distance."
    }
  ];
  
  // Get the first element with class "img1"
  var imgElem = document.querySelector(".img1");
  //get both paragraph tags by their id
  var catNameElem = document.getElementById("catName");
  var catDescriptionElem = document.getElementById("catInfo");
  
  
  var currentIndex = 0;
  function updateImage() {
  imgElem.src = listOfsrc[currentIndex];
  
    //
    catNameElem.textContent = catData[currentIndex].name;
    catDescriptionElem.textContent = catData[currentIndex].description;
  }
  
  
  //this function changes the position of i in listOfsrc to the previous one
  function pre() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = listOfsrc.length - 1; // move to the last image
    }
    updateImage();
  }
  
  
  //this function changes the position of i in listOfsrc to the next one
  function next() {
    currentIndex ++;
    if (currentIndex > listOfsrc.length - 1) {
        currentIndex =0 ; // move to the first image
    }
  
    updateImage();
  }