export function tabla(){
    const ELEM = $("#tarolo");
    let txt = " ";
    for (let i = 0; i < 64; i++) {
        if((Math.floor(i / 8) + i) % 2 === 0){
            txt += `<div class="kocka" style="background-color : black"></div>`;
        }else{
            txt += `<div class="kocka" style="background-color : white"></div>`;
        }
    }
    txt += " ";

    console.log(txt);
    ELEM.html(txt);
}

export function gyalogHozzaAd(){
    const kELEM = $(".kocka").on("click", function(){
        kELEM.html("<div><img src='gyalog.jpg' alt='gyalog'></div>");
        /* if (!$(this).find('img').length) {
            $(this).append("<img src='gyalog.jpg' alt='gyalog'>");
        } */
    })
}