const jsonfile = require('jsonfile');
const path = require('path');
const scriptName = path.basename(__filename);

const explorePokemonAccessor=require('../ui-helper/explorePokemon-accessor.js');

const explorePokemonAssertions=require('../ui-helper/explorePokemon-assertions.js');

var quotation;
var paymetsAndProducts;
var travelInformation;
var paymentInformation;
var confirmation;
let testData = jsonfile.readFileSync(__dirname+'/../test-data/'+ scriptName+'on');
module.exports = 
{
  '@tags': ['uiTests'],
  beforeEach: function (browser) 
  {
    browser.page.explorePokemon().navigate();
    explorePokemon=browser.page.explorePokemon();
    pokemonDescription=browser.page.pokemonDescription()

  },

  'TC_ID1: Validate the search of pokemon by ability': function (browser) 
  {
    explorePokemonAccessor.advanceSearch(explorePokemon,testData.TC_ID1.input)
    explorePokemonAssertions.validateSearchResults(explorePokemon,testData.TC_ID1.output)
    browser.end()
  },

  'TC_ID2: Validate the search of pokemon by ability and height': function (browser) 
  {
    explorePokemonAccessor.advanceSearch(explorePokemon,testData.TC_ID2.input)
    explorePokemonAssertions.validateSearchResults(explorePokemon,testData.TC_ID2.output)
    browser.end()
  },

  'TC_ID3: Validate the search of pokemon by ability and weight': function (browser) 
  {
    explorePokemonAccessor.advanceSearch(explorePokemon,testData.TC_ID3.input)
    explorePokemonAssertions.validateSearchResults(explorePokemon,testData.TC_ID3.output)
    browser.end()
  },
  'TC_ID4: Validate the search of pokemon by ability, height and weight': function (browser) 
  {
    explorePokemonAccessor.advanceSearch(explorePokemon,testData.TC_ID4.input)
    explorePokemonAssertions.validateSearchResults(explorePokemon,testData.TC_ID4.output)
    browser.end()
  },

  'TC_ID5: Validate the sort of search results by alphabetically descending': function (browser) 
  {
    explorePokemonAccessor.sortSearchResults(explorePokemon,testData.TC_ID5.input)
    explorePokemonAssertions.validateSearchResults(explorePokemon,testData.TC_ID5.output)
    browser.end()
  },
  'TC_ID6: Validate the sort of search results by alphabetically ascending': function (browser) 
  {
    explorePokemonAccessor.sortSearchResults(explorePokemon,testData.TC_ID6.input)
    explorePokemonAssertions.validateSearchResults(explorePokemon,testData.TC_ID6.output)
    browser.end()
  },
  'TC_ID7: Validate the sort of search results by numerically descending': function (browser) 
  {
    explorePokemonAccessor.sortSearchResults(explorePokemon,testData.TC_ID7.input)
    explorePokemonAssertions.validateSearchResults(explorePokemon,testData.TC_ID7.output)
    browser.end()
  },
  'TC_ID8: Validate the sort of search results by numnerically descending': function (browser) 
  {
    explorePokemonAccessor.sortSearchResults(explorePokemon,testData.TC_ID8.input)
    explorePokemonAssertions.validateSearchResults(explorePokemon,testData.TC_ID8.output)
    browser.end()
  },
  'TC_ID8: Validate the sort of search results by numnerically descending': function (browser) 
  {
    explorePokemonAccessor.sortSearchResults(explorePokemon,testData.TC_ID8.input)
    explorePokemonAssertions.validateSearchResults(explorePokemon,testData.TC_ID8.output)
    browser.end()
  },
  'TC_ID8: Validate the sort of search results by numnerically descending': function (browser) 
  {
    explorePokemonAccessor.sortSearchResults(explorePokemon,testData.TC_ID8.input)
    explorePokemonAssertions.validateSearchResults(explorePokemon,testData.TC_ID8.output)
    browser.end()
  },
  'TC_ID9: Validate the pokemon description by  selecting a pokemon from the search results': function (browser) 
  {
    explorePokemonAccessor.selectPokemonByName(explorePokemon,testData.TC_ID9.input)
    explorePokemonAssertions.validatePokemonDescription(pokemonDescription,testData.TC_ID9.output)
    browser.end()
  },
  'TC_ID10: Validate the pokemon description by  selecting a pokemon from evolution tab': function (browser) 
  {
    explorePokemonAccessor.selectPokemonByName(explorePokemon,testData.TC_ID10.input)
    explorePokemonAccessor.selectPokemonFromEvolutionTab(pokemonDescription,testData.TC_ID10.input)
    explorePokemonAssertions.validatePokemonDescription(pokemonDescription,testData.TC_ID10.output)
    browser.end()
  }
};