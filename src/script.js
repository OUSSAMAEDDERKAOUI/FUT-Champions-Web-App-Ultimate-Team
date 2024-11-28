// getElementById('edd-Choose-Exist-Player').onclick=function(){
//     getElementById('edd-auto-players').class.list.remove('hidden')
// }
document.getElementById('edd-exist-player').onclick = function () {
    document.getElementById('edd-exist-players').classList.remove('hidden');
    document.getElementById('form-custom-player').classList.add('hidden');
};
document.getElementById('edd-new-player').onclick = function (e) {
    document.getElementById('edd-exist-players').classList.add('hidden');
    document.getElementById('form-custom-player').classList.remove('hidden');
    console.log(e.target)
};



document.querySelectorAll(".edd-select-player").forEach(function (exist) {
    exist.addEventListener('click',function (event) {
        // console.log("ddssdd",event.target.parentElement);
        console.log("ddssdd", event.target.closest('.edd-select-player').id);
        const playerCartTerrain = event.target.closest('.edd-select-player');
        document.getElementById('edd-popup').classList.remove('hidden');

        const addevent = function (event) {
            // console.log(event.target.closest('.edd-filter-player').id);
            const selected = event.target.closest('.edd-filter-player');
            playerCartTerrain.innerHTML = selected.innerHTML;
            document.getElementById('edd-popup').classList.add('hidden');
            removeEvent();
        }

        document.querySelectorAll('.edd-filter-player').forEach(function (cart) {

            cart.addEventListener('click', addevent)
        })
        window.addevent = addevent;
        function removeEvent() {
            if (window.addevent) {
                document.querySelectorAll(".edd-filter-player").forEach(function (item) {
                    item.removeEventListener('click', window.addevent);
                })
            }
        }
        document.querySelectorAll('.edd-filter-player').forEach((item)=>{  
            console.log(item.dataset.position, exist.dataset.position);   
            if(item.dataset.position===exist.dataset.position){
                item.style.display='block' ;
            }
            else{
                item.style.display='none' ;
            }
        })
    })
})


let list= JSON.parse(localStorage.getItem('futPlayers')) || [];


fetch(`https://oussamaedderkaoui.github.io/OUSSAMAEDDERKAOUI-FUT-Champ-Ultimate-Team-Assets/players.json`)
    .then(resultat => resultat.json())
    .then(res => {

        if(list.length===0){
            list = res.players;
        localStorage.setItem('futPlayers',JSON.stringify(list));

        }
        list.forEach(item => {
            // console.log(item.position)
            if (!item.position.includes("GK")) {
                document.getElementById('edd-auto-players').innerHTML += ` <div id="${item.rating + item.name}" class="flex justify-center edd-filter-player " data-position="${item.position}">
            <div  class="cursor-pointer " >
                <div
                    class="relative w-[100px] h-[150px] p-3 bg-cover bg-center bg-[url('./images/badge_total_rush.webp')] ">
                    <div class="relative flex text-[#e9cc74] px-[0.3rem]">
                        <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
                            <div class="font-bold text-5xl text-[1rem] mt-5">${item.rating}</div>
                            <div class="font-bold">${item.position}</div>
                            <div class="block">
                                <img src="${item.flag}" alt="Nationalité"
                                    class="w-[1rem] h-[14px] object-contain" />
                            </div>
                            <div class="block">
                                <img src="${item.logo}" alt="Club"
                                    class="w-[1rem] h-[14px] object-contain" />
                            </div>
                        </div>
                        <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
                            <img src="${item.photo}"
                                alt="Nom du joueur"
                                class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
                        </div>
                    </div>

                    <div class="relative">
                        <div class="text-[#e9cc74] w-[90%] mx-auto">
                            <div
                                class="text-center w-full text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1]">
                                <span class="block text-shadow-lg"></span>
                            </div>
                            <div id="blabla" class="flex gap-x-2 ">
                                <div class=" ">
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <div class="font-bold mr-[0.3rem]">${item.pace}</div>
                                        <div class="font-light">PAC</div>
                                    </div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${item.shooting}</span>
                                        <span class="font-light">SHO</span>
                                    </div>
                                    <div class="flex text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${item.passing}</span>
                                        <span class="font-light">PAS</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${item.dribbling}</span>
                                        <span class="font-light">DRI</span>
                                    </div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${item.defending}</span>
                                        <span class="font-light">DEF</span>
                                    </div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${item.physical}</span>
                                        <span class="font-light">PHY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            }
            else if (item.position.includes('GK')) {
                document.getElementById('edd-auto-players').innerHTML += ` <div class="flex justify-center ">
            <div id="${item.rating + item.name}" class="cursor-pointer edd-filter-player" data-position="${item.position}">
                <div
                    class="relative w-[100px] h-[150px] p-3 bg-cover bg-center bg-[url('./images/badge_total_rush.webp')] ">
                    <div class="relative flex text-[#e9cc74] px-[0.3rem]">
                        <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
                            <div class="font-bold text-5xl text-[1rem] mt-5">${item.rating}</div>
                            <div class="font-bold">${item.position}</div>
                            <div class="block">
                                <img src="${item.flag}" alt="Nationalité"
                                    class="w-[1rem] h-[14px] object-contain" />
                            </div>
                            <div class="block">
                                <img src="${item.logo}" alt="Club"
                                    class="w-[1rem] h-[14px] object-contain" />
                            </div>
                        </div>
                        <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
                            <img src="${item.photo}"
                                alt="Nom du joueur"
                                class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
                        </div>
                    </div>

                    <div class="relative">
                        <div class="text-[#e9cc74] w-[90%] mx-auto">
                            <div
                                class="text-center w-full text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1]">
                                <span class="block text-shadow-lg"></span>
                            </div>
                            <div id="blabla" class="flex gap-x-2 ">
                                <div class=" ">
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <div class="font-bold mr-[0.3rem]">${item.diving}</div>
                                        <div class="font-light">DIV</div>
                                    </div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${item.handling}</span>
                                        <span class="font-light">HAN</span>
                                    </div>
                                    <div class="flex text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${item.reflexes}</span>
                                        <span class="font-light">REF</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${item.kicking}</span>
                                        <span class="font-light">KIC</span>
                                    </div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${item.speed}</span>
                                        <span class="font-light">SPD</span>
                                    </div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${item.positioning}</span>
                                        <span class="font-light">POS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            }

        })
    })



document.getElementById('edd-confirm-custom').addEventListener('click', function () {

    let name = document.getElementById('edd-player-name').value;
    let photo = document.getElementById('edd-player-picture').value;
    let nationality = document.getElementById('src/index.html').value;
    let flag = document.getElementById('edd-nation-flag').value;
    let club = document.getElementById('edd-club').value;
    let clubLogo = document.getElementById('edd-club-logo').value;
    let pace = document.getElementById('edd-PAC').value;
    let shooting = document.getElementById('edd-SHO').value;
    let physical = document.getElementById('edd-PHY').value;
    let passing = document.getElementById('edd-PAS').value;
    let dribbling = document.getElementById('edd-DRI').value;
    let defending = document.getElementById('edd-DEF').value;
    let rating = document.getElementById('"edd-RAT').value;


    document.getElementById('edd-exist-players').innerHTML += ` <div class="flex justify-center  ">
            <div class="cursor-pointer " >
                <div
                    class="relative w-[100px] h-[150px] p-3 bg-cover bg-center bg-[url('./images/badge_total_rush.webp')] ">
                    <div class="relative flex text-[#e9cc74] px-[0.3rem]">
                        <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
                            <div class="font-bold text-5xl text-[1rem] mt-5">${rating}</div>
                            <div class="font-bold">${item.position}</div>
                            <div class="block">
                                <img src="${flag}" alt="Nationalité"
                                    class="w-[1rem] h-[14px] object-contain" />
                            </div>
                            <div class="block">
                                <img src="${clubLogo}" alt="Club"
                                    class="w-[1rem] h-[14px] object-contain" />
                            </div>
                        </div>
                        <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
                            <img src="${photo}"
                                alt="Nom du joueur"
                                class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
                        </div>
                    </div>

                    <div class="relative">
                        <div class="text-[#e9cc74] w-[90%] mx-auto">
                            <div
                                class="text-center w-full text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1]">
                                <span class="block text-shadow-lg"></span>
                            </div>
                            <div id="blabla" class="flex gap-x-2 ">
                                <div class=" ">
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <div class="font-bold mr-[0.3rem]">${pace}</div>
                                        <div class="font-light">PAC</div>
                                    </div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${shooting}</span>
                                        <span class="font-light">SHO</span>
                                    </div>
                                    <div class="flex text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${passing}</span>
                                        <span class="font-light">PAS</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${dribbling}</span>
                                        <span class="font-light">DRI</span>
                                    </div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${defending}</span>
                                        <span class="font-light">DEF</span>
                                    </div>
                                    <div class="flex  text-[0.5rem] uppercase">
                                        <span class="font-bold mr-[0.3rem]">${physical}</span>
                                        <span class="font-light">PHY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

})



