
var cams = { "cam1":
             {
                 "url":"https://cam.tks-net.ru/nag.omny_m54e_2812-aeebe9c095/index.m3u8?token=2.hhDjiAi8ABoABZjald7mRlFCGHjArIvuULjr3-ofdxtHiDQa",
                 "preview":"https://cam.tks-net.ru/nag.omny_m54e_2812-aeebe9c095/preview.jpg?token=2.hhDjiAi8ABoABZjald7mRlFCGHjArIvuULjr3-ofdxtHiDQa",
                 "title":"Площадь мира"
             },
            "cam2":
                {
                    "url":"https://cam.tks-net.ru/ploshad.mira-2-e33ee19a97/index.m3u8?token=2.hhDjiAi8ABoABZjald7mRmBY6sIxeSsmIW6Ods36imtDB1Dt",
                    "preview":"https://cam.tks-net.ru/ploshad.mira-2-e33ee19a97/preview.jpg?token=2.hhDjiAi8ABoABZjald7mRmBY6sIxeSsmIW6Ods36imtDB1Dt",
                    "title":"Площадь мира 2"
                },
            "cam3":
                {
                    "url":"https://cam.tks-net.ru/dahua.dh-sd59225u-hni-0001f522af/index.m3u8?token=2.hhDjiAi8ABoABZjald7mRpmTTDsZMW6unMhl8B3vtR_fH3kU",
                    "preview":"https://cam.tks-net.ru/dahua.dh-sd59225u-hni-0001f522af/preview.jpg?token=2.hhDjiAi8ABoABZjald7mRpmTTDsZMW6unMhl8B3vtR_fH3kU",
                    "title":"Набережная"
                },
            "cam4":
                {
                    "url":"https://cam.tks-net.ru/nag.omny_m54e_2812-24f0aefa23/index.m3u8?token=2.hhDjiAi8ABoABZjald7mRuZBxtwxfaEZMVYThpQRyZDVGZw_",
                    "preview":"https://cam.tks-net.ru/nag.omny_m54e_2812-24f0aefa23/preview.jpg?token=2.hhDjiAi8ABoABZjald7mRuZBxtwxfaEZMVYThpQRyZDVGZw_",
                    "title":"Площадь победы"
                },
            "cam5":
                {
                    "url":"https://cam.tks-net.ru/nag.omny_m54e_2812-41e047cbf6/index.m3u8?token=2.hhDjiAi8ABoABZjald7mRq532Ihap4CYLwo_mB9Vgx71ij13",
                    "preview":"https://cam.tks-net.ru/nag.omny_m54e_2812-41e047cbf6/preview.jpg?token=2.hhDjiAi8ABoABZjald7mRq532Ihap4CYLwo_mB9Vgx71ij13",
                    "title":"Сквер В-1"
                },
           };

for (key in cams) {
    PlayerjsAsync(key, cams[key]["url"], cams[key]["preview"], cams[key]["title"]);
}

function PlayerjsAsync(CamName, ip, prevIP, title){
    switch(CamName) {
        case 'cam1':
            cam1 = new Playerjs({id:CamName,
                file:ip,
                title: "",
                poster: prevIP
            });
            break;

        case 'cam2':
            cam2 = new Playerjs({id:CamName,
                file:ip,
                title: "",
                poster: prevIP
            });
            break;
        case 'cam3':
            cam3 = new Playerjs({id:CamName,
                file:ip,
                title: "",
                poster: prevIP
            });
            break;
        case 'cam4':
            cam4 = new Playerjs({id:CamName,
                file:ip,
                title: "",
                poster: prevIP
            });
            break;
        case 'cam5':
            cam5 = new Playerjs({id:CamName,
                file:ip,
                title: "",
                poster: prevIP
            });
            break;

    }
}

var paused = false;
function PlayerjsEvents(event,id,info){
    if(event=="play"){
        if (paused) {
            switch(id) {
                case 'cam1':
                    cam1.api("play",
                        cams[id]["url"]);
                    break;

                case 'cam2':
                    cam2.api("play",
                        cams[id]["url"]);
                    break;
                case 'cam3':
                    cam3.api("play",
                        cams[id]["url"]);
                    break;
                case 'cam4':
                    cam4.api("play",
                        cams[id]["url"]);
                    break;
                case 'cam5':
                    cam5.api("play",
                        cams[id]["url"]);
                    break;

            }
            paused = false;
        }
    }
    if(event == "pause"){
        paused = true;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    }
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }


    document.getElementsByClassName("loading").remove();
    document.getElementById("main").style.display='block';
});