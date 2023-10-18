<template>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture :pokemonId="639" :showPokemon="false" />
    <PokemonOptions />
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    }
}
</script>
