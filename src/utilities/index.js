import { PokemonTypes } from '../constants/index';  

export const yourColor = (type) => {

    for (let colorType of PokemonTypes) {
        
        if (colorType.type === type) {
            return colorType.color;
        }
    }
}