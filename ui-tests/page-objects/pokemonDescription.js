var assert = require('assert');

let dynamicss=
{
  evoltion:'.evolution-profile a[href*=\'value\']>img',
  typeAndWeakenss:'.background-color-value>a'
}


module.exports = 
{
  url: function () 
  {
    const globals = this.api.globals
    return globals.devServerURL
  },
    elements: 
    {
      pokemonTitleName:
      {
        selector:'.pokedex-pokemon-pagination-title>div'
      },
      pokemonTitleNumber: 
      {
        selector: '.pokedex-pokemon-pagination-title>div>.pokemon-number'
      },
      pokemonHeight: 
      {
        selector: '.column-7>ul>li:nth-child(1)>.attribute-value'
      },
      pokemonWeight: 
      {
        selector: '.column-7>ul>li:nth-child(2)>.attribute-value'
      },
      pokemonCategory: 
      {
        selector: '.column-7.push-7>ul>li:nth-child(1)>.attribute-value'
      },
      pokemonAbilities: 
      {
        selector: '.column-7.push-7>ul>li:nth-child(2) .attribute-value'
      },
    },
    commands: [{
    selectPokemonFromEvolutionTab: function (name) 
    {
      this
        .waitForElementVisible(dynamicss.evoltion.replace('value',name.toLowerCase()), TIMEOUT)
        .click(dynamicss.evoltion.replace('value',name.toLowerCase()))
    },
    validatePokemonTitleId: function(id)
    {
      this  
        .waitForElementVisible('@pokemonTitleNumber', TIMEOUT);
        this.expect.element('@pokemonTitleNumber').text.to.equal('#'+id)
    },
    validatePokemonTitleName: function(name)
    {
      this  
        .waitForElementVisible('@pokemonTitleName', TIMEOUT);
        this.expect.element('@pokemonTitleName').text.to.contain(name)
    },
    validatePokemonDetails: function(details)
    {
      this  
        .waitForElementVisible('@pokemonHeight', TIMEOUT);
        this.expect.element('@pokemonHeight').text.to.equal(details.height)
        this.expect.element('@pokemonWeight').text.to.equal(details.weight)
        this.expect.element('@pokemonCategory').text.to.equal(details.category)
        this.expect.element('@pokemonAbilities').text.to.equal(details.abilities)
    },
    validatePokemonType: function(type)
    {
      this  
        .waitForElementVisible(dynamicss.typeAndWeakenss.replace('value',type[0].toLowerCase()), TIMEOUT);
      for(var i=1;i<=type.length;i++)
      {
        var temp=type[i-1].toLowerCase();
        this.expect.element(dynamicss.typeAndWeakenss.replace('value',temp)).text.to.contain(type[i-1])
      }
    },
    validatePokemonWeaknesses: function(weaknesses)
    {
      this  
        .waitForElementVisible(dynamicss.typeAndWeakenss.replace('value',weaknesses[0].toLowerCase()), TIMEOUT);
      for(var i=1;i<=weaknesses.length;i++)
      {
        var temp=weaknesses[i-1].toLowerCase();
        this.expect.element(dynamicss.typeAndWeakenss.replace('value',temp)).text.to.contain(weaknesses[i-1])
      }
    }
  }] 
}