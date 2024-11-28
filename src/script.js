


fetch(`https://oussamaedderkaoui.github.io/OUSSAMAEDDERKAOUI-FUT-Champ-Ultimate-Team-Assets/players.json`)
    .then(resultat=>resultat.json())
    .then(res=>{
    res.players.forEach(item => {
        console.log(item.position)
        if(!item.position.includes("GK")){
            document.getElementById('edd-auto-players').innerHTML+=` <div class="flex justify-center ">
            <div id="edd-stl" class="cursor-pointer ">
                <div
                    class="relative w-[100px] h-[150px] p-3 bg-cover bg-center bg-[url('./images/badge_total_rush.webp')] ">
                    <div class="relative flex text-[#e9cc74] px-[0.3rem]">
                        <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
                            <div class="font-bold text-5xl text-[1rem] mt-5">97</div>
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
        else if (item.position.includes('GK')){
            document.getElementById('edd-auto-players').innerHTML+=` <div class="flex justify-center ">
            <div id="edd-stl" class="cursor-pointer ">
                <div
                    class="relative w-[100px] h-[150px] p-3 bg-cover bg-center bg-[url('./images/badge_total_rush.webp')] ">
                    <div class="relative flex text-[#e9cc74] px-[0.3rem]">
                        <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
                            <div class="font-bold text-5xl text-[1rem] mt-5">97</div>
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

