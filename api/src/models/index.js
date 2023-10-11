import Genre from "./Genre.js"
import Videogame from "./Videogame.js"
import Platform from "./Platform.js";

// relaciones
Videogame.belongsToMany(Platform, {through: "videogame_platform"})
Platform.belongsToMany(Videogame, {through: "videogame_platform"})


Videogame.belongsToMany(Genre,  {through: "videogame_genre", timestamps: false})
Genre.belongsToMany(Videogame,  {through: "videogame_genre", timestamps: false})


export { Videogame, Genre, Platform }