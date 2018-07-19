class Pokemon{
    constructor(name, spritefront, spriteback) {
        this.name = name
        this.spritefront = spritefront
        this.spriteback = spriteback
        this.flipped = false;
    }
    //flip pokemon image
    flipImage() {
        
    }

    // toggleMethod() {
    //     this.flipped = !this.flipped;
    // }
    render() {
        //create outermost pokediv
        let pokediv = document.createElement("div");
        pokediv.classList.add("pokemon-container");
        //create styling div
        let pokeStyleContainer = document.createElement("div");
        pokeStyleContainer.style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc"
        pokeStyleContainer.classList.add("pokemon-frame")
        //create header
        let header = document.createElement("h1")
        header.classList.add("center-text")
        header.innerText = this.name;
        //create outerwidth div
        let outerWidth = document.createElement("div");
        outerWidth.style = "width:239px;margin:auto";
        //create innerwidth div
        let innerWidth = document.createElement("div");
        innerWidth.style = "width:96px;margin:auto"
        //create image element
        let image = document.createElement("img");
        image.src = this.spritefront;
        //create flip action!
        let flipcard = document.createElement("p");
        flipcard.style = "padding:10px;"
        flipcard.classList.add("flip-image", "center-text");
        flipcard.dataset.pokename = this.name;
        flipcard.dataset.action = "flip-image";
        flipcard.innerText = "flip card";
        flipcard.addEventListener("click", flipPokemon)

        //append everything!
        pokediv.appendChild(pokeStyleContainer);
        //append to pokestylecontainer
        pokeStyleContainer.appendChild(header);
        pokeStyleContainer.appendChild(outerWidth);
        pokeStyleContainer.appendChild(flipcard);
        //append to outer style container
        outerWidth.appendChild(innerWidth);
        //append picture to innerwidth
        innerWidth.appendChild(image);
        //finally, append pokediv TO the document
        document.getElementById("pokemon-container").appendChild(pokediv)
    }
    
}