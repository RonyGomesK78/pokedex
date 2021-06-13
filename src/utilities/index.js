import { PokemonTypes } from '../constants/index';  

export const yourColor = (type) => {

    for (const colorType of PokemonTypes) {
        
        if (colorType.type === type) {
            return colorType.color;
        }
    }
}

export const pickIcon = (type) => {

    for (const iconType of PokemonTypes) {

        if (type === iconType.type) {
            const typeCamelCase = type[0].toUpperCase() + type.slice(1);
            return typeCamelCase + '.png'; 
        }
    }

    return 'Icon_Rock.png';
}