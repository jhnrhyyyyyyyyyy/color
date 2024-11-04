function addColor(){
    let favoriteColors = [];

    for (let i = 0; i < 3; i++) {
        let color = prompt(`Enter your favorite color ${i + 1}:`);
        favoriteColors.push(color);
    }
    alert("Your favorite three colors are: "+favoriteColors);
}
