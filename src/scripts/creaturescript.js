const el = {
    searchBtn: document.getElementById("search-button"),
    searchInput: document.getElementById("search-input"),
    // Gen info
    creatureName: document.getElementById("creature-name"),
    creatureId: document.getElementById("creature-id"),
    weight: document.getElementById("weight"),
    height: document.getElementById("height"),
    types: document.getElementById("types"),
    moveName: document.getElementById("move-name"),
    moveInfo: document.getElementById("move-info"),
    // Stats
    hp: document.getElementById("hp"),
    attack: document.getElementById("attack"),
    defense: document.getElementById("defense"),
    specialAttack: document.getElementById("special-attack"),
    specialDefense: document.getElementById("special-defense"),
    speed: document.getElementById("speed")
  };
  
  const typesColors = {
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC"
  };
  
  clearAll();
  
  async function getData() {
    try {
      const response = await fetch(
        "https://rpg-creature-api.freecodecamp.rocks/api/creatures"
      );
      return await response.json();
    } catch (error) {
      console.error("Error fetching creature list:", error);
      return [];
    }
  }
  
  async function specificCreature(nameOrId) {
    try {
      const res = await fetch(
        `https://rpg-creature-api.freecodecamp.rocks/api/creature/${nameOrId}`
      );
      return await res.json();
    } catch (error) {
      console.error("Error fetching specific creature:", error);
    }
  }
  
  async function searchCreature(input, creatures_list) {
    input = input.trim().toLowerCase();
    if (input === "") {
      clearAll();
      return;
    }
  
    const creature = creatures_list.find(
      (creat) => creat.name.toLowerCase() === input || String(creat.id) === input
    );
  
    if (creature) {
      const infoCreat = await specificCreature(creature.id);
      updateCreatureInfo(infoCreat);
      el.searchInput.value = "";
    } else {
      alert("Creature not found");
      el.searchInput.value = "";
    }
  }
  
  function updateCreatureInfo(info) {
    el.creatureName.textContent = info.name.toUpperCase();
    el.creatureId.textContent = `#${info.id}`;
    el.weight.textContent = `Weight: ${info.weight}`;
    el.height.textContent = `Height: ${info.height}`;
  
    // Types
    el.types.innerHTML = "";
    info.types.forEach((type) => {
      const typeEl = document.createElement("span");
      typeEl.textContent = type.name.toUpperCase();
      typeEl.style.backgroundColor = typesColors[type.name] || "#777";
      typeEl.style.padding = "4px";
      typeEl.style.marginRight = "5px";
      typeEl.style.borderRadius = "5px";
      el.types.appendChild(typeEl);
    });
  
    // Special move
    el.moveName.textContent = info.special.name;
    el.moveInfo.textContent = info.special.description;
  
  // Stats
    el.hp.textContent = info.stats[0].base_stat;
    el.attack.textContent = info.stats[1].base_stat;
    el.defense.textContent = info.stats[2].base_stat;
    el.specialAttack.textContent = info.stats[3].base_stat;
    el.specialDefense.textContent = info.stats[4].base_stat;
    el.speed.textContent = info.stats[5].base_stat;
  }
  
  function clearAll() {
    const elements = [
      el.creatureName,
      el.creatureId,
      el.weight,
      el.height,
      el.types,
      el.moveName,
      el.moveInfo,
      el.hp,
      el.attack,
      el.defense,
      el.specialAttack,
      el.specialDefense,
      el.speed
    ];
  
    elements.forEach((elem) => {
      if (!elem) return;
      if (elem === el.types) {
        elem.innerHTML = "";
      } else if (elem.id?.includes("stats")) {
        elem.textContent = "?";
      } else {
        elem.textContent = "";
      }
    });
  }
  
  el.searchBtn.addEventListener("click", async () => {
    const creatures = await getData();
    clearAll(); 
    searchCreature(el.searchInput.value, creatures);
  });