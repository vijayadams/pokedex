function validateSearchResults(obj,output) 
{
    obj.validatePokemonCount(output.searchResults.count)
    obj.validatePokemonIds(output.searchResults.ids)
    obj.validatePokemonNames(output.searchResults.names)
}
function validatePokemonDescription(obj,output)
{
    obj.validatePokemonTitleId(output.id)
    obj.validatePokemonTitleName(output.name)
    obj.validatePokemonDetails(output.details)
    obj.validatePokemonType(output.type)
    obj.validatePokemonWeaknesses(output.weaknesses)

}
module.exports = 
{
    validateSearchResults,
    validatePokemonDescription
}