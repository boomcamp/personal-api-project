let loading = false;

$(document).ready(function(){
 

    $(window).scroll(function(event){
      
        var st = $(this).scrollTop();
        if (st > 500){
            $("#navigation").css("background", "rgba(0, 0, 0, 0.2)");
            $("#navigation").removeClass('box-shadow')
            $(".nav-link").css("color" , "#FFF");
            $(".nav-link").css("transition" , "1s");
            
        } 
        
        else if(st < 500){
            $("#navigation").css("background", "#333");
            $(".nav-link").css("color" , "#FFF");
            
            $(".nav-link").css("transition" , "1s");
            $("#navigation").addClass('box-shadow')

            $('.nav-link').hover(function(){
                $(this).css("color", "#FFF");
                $(this).css("font-size", "17px");
                
            } , function(){
                $(this).css("color", "#FFF");
                $(this).css("font-size", "16px");
            })
        }
        lastScrollTop = st;
     });


    console.log("asd");
    getHeroes('https://api.opendota.com/api/heroStats')
        .then(function(data){
            data.reverse().forEach(hero => {
               

                let base_health_regen = 0;
                let base_mana_regen = 0;
                
                if(hero.base_health_regen == null){
                    base_health_regen = .25;
                }
                else{
                    base_health_regen = hero.base_health_regen;
                }


                console.log(hero.name , hero.base_mana_regen)



                let attr = hero.primary_attr;
              
                let heroDisplay = $(`
                
               
                <div class="col-lg-4 col-sm-6">
                    <div class="card hero-card" style="width: 18rem;">
                        <img class="card-img-top" src="https://api.opendota.com${hero.img}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${hero.localized_name} </h5>
                            <p class="card-text card-text-${hero.name}">
                            
                            </p>
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
                           <div class="row">
                                <div class="col-lg-6">
                                  <label for="str">Base Health</label>
                                  <br>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar bg-success" style="width: ${hero.base_health *0.1}%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">${hero.base_health}</div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                  <label for="str">Base Health Regen</label>
                                  <br>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: ${base_health_regen * 100}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${base_health_regen}</div>
                                    </div>
                                </div>
                            </div>

                            <br>
                            <div class="row">
                                <div class="col-lg-6">
                                  <label for="str">Base Mana</label>
                                  <br>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: ${hero.base_mana *0.1}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${hero.base_mana}</div>
                                    </div>
                                </div>
                                <div class="col-lg-6" >
                                  <label for="str">Base Mana Regen</label>
                                  <br>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: ${hero.base_mana_regen}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ><span  style="color:#333;">${hero.base_mana_regen}</span></div>
                                    </div>
                                </div>
                            </div>

                            <br>
                            <div class="row">
                                <div class="col-lg-4">
                                  <label for="str">Base Str</label>
                                  <br>
                                    <div class="progress">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: ${hero.base_str}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${hero.base_str}%</div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                  <label for="str">Base Agi</label>
                                  <br>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: ${hero.base_agi}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${hero.base_agi}%</div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <label for="str">Base Int</label>
                                    <br>
                                      <div class="progress">
                                          <div class="progress-bar bg-primary" role="progressbar" style="width: ${hero.base_int}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${hero.base_int}%</div>
                                      </div>
                                  </div>
                            </div>
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
                
                let cardTextDisplay = $(`
                    <ul class="card-list-group">
                        <li class="list-item">
                        <b>Primary Attribute:</b> 
                        <span class="float-right"><img src="img/${attr}.png" width="20" style="margin-top:-1px"></span></li>

                        <li class="list-item">
                        <b>Attack Type:</b>
                        <span class="float-right">${hero.attack_type}</span>

                        </li>
                       
                        <li class="list-item">
                            <b>Roles:</b> 
                            <br>
                            <span >${hero.roles.join(', ')}</span>

                        </li>
                    </ul>
                `)



                $(`.card-text-${hero.name}`).html(cardTextDisplay)
                
                // textGenerator('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')
                //     .then(function(text){
                //       loading = true;
                //       let cardText = document.querySelector(`.card-text-${hero.name}`);
                //       cardText.innerHTML = text.toString();
                      
                //     })
            });

           

        })
        
        


      

            
})


function textGenerator(url){
    return fetch(url)
        .then(function(response){
           return response.json();
          
        })
}
function getHeroes(url){


    return fetch(url)
        .then(function(response){
            return response.json();
        })
}

function getItems(url){
    return fetch(url)
        .then(function(response){
            return response.json();
        })
}
