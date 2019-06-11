

$(document).ready(function(){
   

    $(window).scroll(function(event){
      
        var st = $(this).scrollTop();
        if (st > 500){
            $("#navigation").css("background", "rgba(0, 0, 0, 0.2)");
            $("#navigation").removeClass('box-shadow')
            $(".nav-link").css("color" , "#333");
            $(".nav-link").css("transition" , "1s");
            
        } 
        
        else if(st < 500){
            $("#navigation").css("background", "#333");
            $(".nav-link").css("color" , "#FFF");
            
            $(".nav-link").css("transition" , "1s");
            $("#navigation").addClass('box-shadow')

            $('.nav-link').hover(function(){
                $(this).css("color", "#111");
                $(this).css("font-size", "17px");
                
            } , function(){
                $(this).css("color", "#333");
                $(this).css("font-size", "16px");
            })
        }
        lastScrollTop = st;
     });


    console.log("asd");
    getURL('https://api.opendota.com/api/heroStats')
        .then(function(data){
            data.reverse().forEach(hero => {
                
                let attr = hero.primary_attr;
                
                let heroDisplay = $(`
                
               
                <div class="col-lg-4 col-sm-6">
                    <div class="card hero-card" style="width: 18rem;">
                        <img class="card-img-top" src="https://api.opendota.com${hero.img}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${hero.localized_name} <small>(${attr})</small></h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a class="btn btn-secondary" href="#" role="button" data-toggle="modal" data-target="#${hero.name}-card">View details &raquo;</a>
                        </div>
                    </div>
                </div>

                
                <div class="modal fade" id="${hero.name}-card" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                    <img src="https://api.opendota.com${hero.icon}"> &nbsp;
                    <h5 class="modal-title" id="exampleModalLabel">${hero.localized_name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>


                `);
                
                $(`.heroes`).prepend(heroDisplay);
            });
        })    


        getLive('https://api.opendota.com/api/live')
            .then(function(live){
              
            })

})


function getURL(url){


    return fetch(url)
        .then(function(response){
            return response.json();
        })
}

function getLive(url){
    return fetch(url)
        .then(function(response){
            return response.json();
        })
}