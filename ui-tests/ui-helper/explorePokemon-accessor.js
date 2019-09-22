function advanceSearch(obj,input) 
{
    obj.selectAdvancedSearch()
    if(input.adavanceSearch.ability)
    obj.selectAbility(input.adavanceSearch.ability)
    if(input.adavanceSearch.height)
    obj.selectHeight(input.adavanceSearch.height)
    if(input.adavanceSearch.weight)
    obj.selectWeight(input.adavanceSearch.weight)
    obj.selectSearch();
}
function sortSearchResults(obj,input)
{
    obj.sortSearchResults(input.sort.value)
}
function selectPokemonFromEvolutionTab(obj,input)
{
    obj.selectPokemonFromEvolutionTab(input.evolution.name)
}
function selectPokemonByName(obj,input)
{
    obj.selectPokemonByName(input.name)
}
module.exports = 
{
    advanceSearch,
    sortSearchResults,
    selectPokemonFromEvolutionTab,
    selectPokemonByName
}