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
// var thirdbody = document.querySelector('.third-body')
var thirdcontent1 = document.querySelector('.third-content-1')
var thirdcontent2 = document.querySelector('.third-content-2')
var fourthbody = document.querySelector('.fourth-body')
var selectbtn = document.querySelector('.select-btn')
var categories = ""
var selectedimages = []

img = document.createElement("img")
function categoryImg(e){
    categories = e.options[e.selectedIndex].text
    for(var i=0;i<arrayNature.length;i++){
        var rand = Math.floor(Math.random()*Math.floor(i));
        if(categories === "Nature"){
            thirdcontent1.innerHTML = '';
            
            img.setAttribute("src", arrayNature[rand])

            br = document.createElement("br")
            btn = document.createElement("button")
            btn.setAttribute('class', 'select-btn')
            btn.setAttribute('value', arrayNature.lastIndexOf(arrayNature[rand]))
            btn.setAttribute('data-id', 'arrayNature')
            btn.setAttribute('onclick', 'selectImg(btn)')
            btn.innerHTML = 'Select this Image'

            thirdcontent1.append(img)
            thirdcontent1.append(br)
            thirdcontent1.append(btn)
        }   
    }
    for(var i=0;i<arrayPeople.length;i++){
        var rand = Math.floor(Math.random()*Math.floor(i));
        if(categories === "People"){
            thirdcontent1.innerHTML = '';
            img.setAttribute("src", arrayPeople[rand])

            br = document.createElement("br")
            btn = document.createElement("button")
            btn.setAttribute('class', 'select-btn')
            btn.setAttribute('value', arrayPeople.lastIndexOf(arrayPeople[rand]))
            btn.setAttribute('data-id', 'arrayPeople')
            btn.setAttribute('onclick', 'selectImg(btn)')
            btn.innerHTML = 'Select this Image'

            thirdcontent1.append(img)
            thirdcontent1.append(br)
            thirdcontent1.append(btn)
        }
    }
    for(var i=0;i<arrayAnimals.length;i++){
        var rand = Math.floor(Math.random()*Math.floor(i));
        if(categories === "Animals"){
            thirdcontent1.innerHTML = '';
            img.setAttribute("src", arrayAnimals[rand])

            br = document.createElement("br")
            btn = document.createElement("button")
            btn.setAttribute('class', 'select-btn')
            btn.setAttribute('value', arrayAnimals.lastIndexOf(arrayAnimals[rand]))
            btn.setAttribute('data-id', 'arrayAnimals')
            btn.setAttribute('onclick', 'selectImg(btn)')
            btn.innerHTML = 'Select this Image'

            thirdcontent1.append(img)
            thirdcontent1.append(br)
            thirdcontent1.append(btn)
        }
    }
    for(var i=0;i<arrayBuildings.length;i++){
        var rand = Math.floor(Math.random()*Math.floor(i));
        if(categories === "Buildings"){
            thirdcontent1.innerHTML = '';
            img.setAttribute("src", arrayBuildings[rand])

            br = document.createElement("br")
            btn = document.createElement("button")
            btn.setAttribute('class', 'select-btn')
            btn.setAttribute('value', arrayBuildings.lastIndexOf(arrayBuildings[rand]))
            btn.setAttribute('data-id', 'arrayBuildings')
            btn.setAttribute('onclick', 'selectImg(btn)')
            btn.innerHTML = 'Select this Image'

            thirdcontent1.append(img)
            thirdcontent1.append(br)
            thirdcontent1.append(btn)
        }
    }
}
function selectImg(){
    // console.log(selectedimages)
    var img_index = btn.value
    var array_select = btn.getAttribute('data-id')
    var imgdiv = document.createElement('div')
    finalimgs = document.createElement('img')
    asideimgs = document.createElement('img')
    remove = document.createElement('button')
    finalimgs.setAttribute('class', 'slideshow')
    asideimgs.setAttribute('class', 'aside')
    imgdiv.setAttribute('class', 'aside_pane')
    
    remove.setAttribute('class', 'remove')
    remove.setAttribute('onclick', 'removethis(this)')
    remove.innerHTML = 'x'

    if(array_select === 'arrayNature'){
        selectedimages.push(arrayNature.splice(img_index, 1))
        selectedimages.map((x,i) =>{
            finalimgs.setAttribute('src', selectedimages[i])
            asideimgs.setAttribute('src', selectedimages[i])
            finalimgs.setAttribute('id',`${i}`)
        })
    }else if(array_select === 'arrayPeople'){
        selectedimages.push(arrayPeople.splice(img_index,1))
        selectedimages.map((x,i) =>{
            finalimgs.setAttribute('src', selectedimages[i])
            asideimgs.setAttribute('src', selectedimages[i])
            finalimgs.setAttribute('id',`${i}`)
        })
    }else if(array_select === 'arrayAnimals'){
        selectedimages.push(arrayAnimals.splice(img_index, 1))
        selectedimages.map((x,i) =>{
            finalimgs.setAttribute('src', selectedimages[i])
            asideimgs.setAttribute('src', selectedimages[i])
            finalimgs.setAttribute('id',`${i}`)
        })
    }else if(array_select === 'arrayBuildings'){
        selectedimages.push(arrayBuildings.splice(img_index, 1))
        selectedimages.map((x,i) =>{
            finalimgs.setAttribute('src', selectedimages[i])
            asideimgs.setAttribute('src', selectedimages[i])
            finalimgs.setAttribute('id',`${i}`)
        })
    }
    if(selectedimages.length <= 20){ // max of 20 images only to be used for slideshow
        fourthbody.append(finalimgs)
        imgdiv.append(asideimgs)
        imgdiv.append(remove)
        thirdcontent2.append(imgdiv)
    }else{
        alert("Too Many Pictures")
    }
}

function removethis(e){
    e.parentNode.remove()
    // console.log(selectedimages)
    // console.log(asideimgs.src)
    // console.log(selectedimages[0].includes(asideimgs.src))
    selectedimages.map((x,i) => {
        console.log(selectedimages.splice(selectedimages[i].indexOf(asideimgs.src), 1))
        finalimgs.parentNode.removeChild(document.getElementById(`${i}`))
        console.log(selectedimages[i])
    })
    var category = btn.getAttribute('data-id')
    if(category === 'arrayNature'){
        arrayNature.push(asideimgs.src)
    }else if(category === 'arrayPeople'){
        arrayPeople.push(asideimgs.src)
    }else if(category === 'arrayAnimals'){
        arrayAnimals.push(asideimgs.src)
    }else if(category === 'arrayBuildings'){
        arrayBuildings.push(asideimgs.src)
    } 
}

selectbtn.addEventListener("click", function(){
    var index = 0;
    carousel()
    function carousel() {
        var x = document.getElementsByClassName("slideshow");
        for(var i=0;i<x.length;i++){
            x[i].style.display = "none";
        }
        index++;
        if(index > x.lenght){
            index = 1;
        }
        x[index-1].style.display = "block";
        setTimeout(carousel, 3000)
    }
})
