function mostrarPersonaje(personaje){
    return `
      <div class="profile">
            <div class="character-profile">
                <div class="character-head">
                    <h1>${personaje.name}</h1>
                    <h1>${personaje.race}</h1>
                </div>

                <img src=${personaje.img} />
                <div class="character-stats">
                    <div class="character-stats-abilities">
                        <div class="character-stats">
                            <ul>
                                <li>Health: ${personaje.health}</li>
                                <li>Attack: ${personaje.attack}</li>
                                <li>Defense:  ${personaje.defense}</li>
                                <li>KI Restore Speed:  ${personaje.kiRestoreSpeed}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>`
}


