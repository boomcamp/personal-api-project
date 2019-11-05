const request = "https://picsum.photos/500/600"
const dimensions = "600/400";
// I specify the contents myself by category because the API gives no category token
var arrayNature = [`https://picsum.photos/id/1032/${dimensions}`,
`https://picsum.photos/id/1037/${dimensions}`,
`https://picsum.photos/id/10/${dimensions}`,
`https://picsum.photos/id/1002/${dimensions}`,
`https://picsum.photos/id/1015/${dimensions}`,
`https://picsum.photos/id/1016/${dimensions}`,
`https://picsum.photos/id/1019/${dimensions}`,
`https://picsum.photos/id/1018/${dimensions}`,
`https://picsum.photos/id/1021/${dimensions}`,
`https://picsum.photos/id/1022/${dimensions}`]
var arrayPeople = [`https://picsum.photos/id/1001/${dimensions}`, 
`https://picsum.photos/id/1005/${dimensions}`, 
`https://picsum.photos/id/1006/${dimensions}`,
`https://picsum.photos/id/1008/${dimensions}`,
`https://picsum.photos/id/1004/${dimensions}`,
`https://picsum.photos/id/1011/${dimensions}`,
`https://picsum.photos/id/1012/${dimensions}`,
`https://picsum.photos/id/1013/${dimensions}`,
`https://picsum.photos/id/1014/${dimensions}`,
`https://picsum.photos/id/1066/${dimensions}`]
var arrayAnimals = [`https://picsum.photos/id/1024/${dimensions}`,
`https://picsum.photos/id/1062/${dimensions}`,
`https://picsum.photos/id/1069/${dimensions}`,
`https://picsum.photos/id/1074/${dimensions}`,
`https://picsum.photos/id/1084/${dimensions}`,
`https://picsum.photos/id/169/${dimensions}`,
`https://picsum.photos/id/200/${dimensions}`,
`https://picsum.photos/id/219/${dimensions}`,
`https://picsum.photos/id/237/${dimensions}`,
`https://picsum.photos/id/244/${dimensions}`]
var arrayBuildings = [`https://picsum.photos/id/101/${dimensions}`,
`https://picsum.photos/id/1031/${dimensions}`,
`https://picsum.photos/id/1029/${dimensions}`,
`https://picsum.photos/id/1040/${dimensions}`,
`https://picsum.photos/id/1048/${dimensions}`,
`https://picsum.photos/id/1054/${dimensions}`,
`https://picsum.photos/id/1067/${dimensions}`,
`https://picsum.photos/id/1075/${dimensions}`,
`https://picsum.photos/id/1076/${dimensions}`,
`https://picsum.photos/id/1081/${dimensions}`]

var imgdiv = document.querySelector('.images')
var category = document.querySelector('.img-cat')
var thirdbody = document.querySelector('.third-body')
var fourthbody = document.querySelector('.fourth-body')
var categories = ""
var selectedimages = []

function categoryImg(e){
    categories = e.options[e.selectedIndex].text
    for(var i=0;i<arrayNature.length;i++){
        var rand = Math.floor(Math.random()*Math.floor(i));
        if(categories === "Nature"){
            thirdbody.innerHTML = '';
            imgN = document.createElement("img")
            imgN.setAttribute("src", arrayNature[rand])

            br = document.createElement("br")
            btn = document.createElement("button")
            btn.setAttribute('class', 'select-btn')
            btn.setAttribute('value', arrayNature.lastIndexOf(arrayNature[rand]))
            btn.setAttribute('data-id', 'arrayNature')
            btn.setAttribute('onclick', 'selectImg(btn)')
            btn.innerHTML = 'Select this Image'

            thirdbody.append(imgN)
            thirdbody.append(br)
            thirdbody.append(btn)
        }   
    }
    for(var i=0;i<arrayPeople.length;i++){
        var rand = Math.floor(Math.random()*Math.floor(i));
        if(categories === "People"){
            thirdbody.innerHTML = '';
            imgP = document.createElement("img");
            imgP.setAttribute("src", arrayPeople[rand])

            br = document.createElement("br")
            btn = document.createElement("button")
            btn.setAttribute('class', 'select-btn')
            btn.setAttribute('value', arrayPeople.lastIndexOf(arrayPeople[rand]))
            btn.setAttribute('data-id', 'arrayPeople')
            btn.setAttribute('onclick', 'selectImg(btn)')
            btn.innerHTML = 'Select this Image'

            thirdbody.append(imgP)
            thirdbody.append(br)
            thirdbody.append(btn)
        }
    }
    for(var i=0;i<arrayAnimals.length;i++){
        var rand = Math.floor(Math.random()*Math.floor(i));
        if(categories === "Animals"){
            thirdbody.innerHTML = '';
            imgA = document.createElement("img")
            imgA.setAttribute("src", arrayAnimals[rand])

            br = document.createElement("br")
            btn = document.createElement("button")
            btn.setAttribute('class', 'select-btn')
            btn.setAttribute('value', arrayAnimals.lastIndexOf(arrayAnimals[rand]))
            btn.setAttribute('data-id', 'arrayAnimals')
            btn.setAttribute('onclick', 'selectImg(btn)')
            btn.innerHTML = 'Select this Image'

            thirdbody.append(imgA)
            thirdbody.append(br)
            thirdbody.append(btn)
        }
    }
    for(var i=0;i<arrayBuildings.length;i++){
        var rand = Math.floor(Math.random()*Math.floor(i));
        if(categories === "Buildings"){
            thirdbody.innerHTML = '';
            imgB = document.createElement("img")
            imgB.setAttribute("src", arrayBuildings[rand])

            br = document.createElement("br")
            btn = document.createElement("button")
            btn.setAttribute('class', 'select-btn')
            btn.setAttribute('value', arrayBuildings.lastIndexOf(arrayBuildings[rand]))
            btn.setAttribute('data-id', 'arrayBuildings')
            btn.setAttribute('onclick', 'selectImg(btn)')
            btn.innerHTML = 'Select this Image'

            thirdbody.append(imgB)
            thirdbody.append(br)
            thirdbody.append(btn)
        }
    }
}
function selectImg(){
    var img_index = btn.value
    var array_select = btn.getAttribute('data-id')
    finalimgs = document.createElement('img')
    finalimgs.setAttribute('class', 'slideshow')
    if(array_select === 'arrayNature'){
        selectedimages.push(arrayNature.splice(img_index, 1))
        selectedimages.map((x,i) =>{finalimgs.setAttribute('src', selectedimages[i])})
    }else if(array_select === 'arrayPeople'){
        selectedimages.push(arrayPeople.splice(img_index,1))
        selectedimages.map((x,i) =>{finalimgs.setAttribute('src', selectedimages[i])})
    }else if(array_select === 'arrayAnimals'){
        selectedimages.push(arrayAnimals.splice(img_index, 1))
        selectedimages.map((x,i) =>{finalimgs.setAttribute('src', selectedimages[i])})
    }else if(array_select === 'arrayBuildings'){
        selectedimages.push(arrayBuildings.splice(img_index, 1))
        selectedimages.map((x,i) =>{finalimgs.setAttribute('src', selectedimages[i])})
    }
    if(selectedimages.length <= 20){ // max of 20 images only to be used for slideshow
        fourthbody.append(finalimgs);
    }else{
        alert("Too Many Pictures")
    }
}
var myIndex = 0;
function carousel() {
    var x = document.getElementsByClassName("slideshow");
    for(var i=0;i<x.length;i++){
        x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.lenght){
        myIndex = 1;
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000)
}