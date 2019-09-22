var assert = require('assert');

let dynamicss=
{
  abilityDropDownValue:'li[data-option-value=\'values\']',
  searchHeightSmall:'.icon_filter_height_small',
  searchHeightMedium:'.icon_filter_height_medium',
  searchHeightLage:'.icon_filter_height_large',
  searchWeightSmall:'.icon_filter_weight_small',
  searchWeightMedium:'.icon_filter_weight_medium',
  searchWeightLarge:'.icon_filter_weight_large',
  pokemonId:'.results>li:nth-child(value)>.pokemon-info>.id',
  pokemonName:'.results>li:nth-child(value)>.pokemon-info>h5',
  dayValue:'//div[@class=\'datepicker-days\']/table/tbody/tr/td[@class=\'day\'][text()=\'value\']',
  personValue:'//li//span[contains(text(),\'value  person\')]',
  multiDestinationValue:'//span[text()=\'value\']',
  multiDestinationTextBox:'//button[@data-id=\'multiDestination\']',
  ageValue:'//input[@name=\'ageAtDeparturevalue\']',
  pricePerperson:'//input[@name=\'pricePerPersonvalue\']',
  selectPokemon:'a[href=\'/us/pokedex/value\']>img'
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
      loader:
      {
        selector:'.no-results+.loader'
      },
      showAdvancedSearch: 
      {
        selector: '.text'
      },
      abilityDropDown: 
      {
        selector: '#abilities+.custom-select-menu'
      },
      reset: 
      {
        selector: '.filter-action>#reset'
      },
      search: 
      {
        selector: '.filter-action>#search'
      },
      sortOrderDropDown:
      {
        selector: '#sortOrder+.custom-select-menu'
      },
      sortOrderNumberAsc:
      {
        selector: 'li[data-option-value=\'numberAsc\']'
      },
      sortOrderNumberDesc:
      {
        selector: 'li[data-option-value=\'numberDesc\']'
      },
      sortOrderNameAsc:
      {
        selector: 'li[data-option-value=\'nameAsc\']'
      },
      sortOrderNameDesc:
      {
        selector: 'li[data-option-value=\'nameDesc\']'
      },
      pokemon:
      {
        selector:'.pokemon-info'
      }

    },
    commands: [{
    selectAdvancedSearch: function () 
    {
      this
        .waitForElementNotPresent('@loader', TIMEOUT)
        .waitForElementVisible('@showAdvancedSearch', TIMEOUT)
        .click('@showAdvancedSearch')
    },
    selectAbility: function (ability) 
    {
      this  
        .waitForElementVisible('@abilityDropDown', TIMEOUT)
        .click('@abilityDropDown')
        .click(dynamicss.abilityDropDownValue.replace('values', ability))
    },
    selectHeight: function(height)
    {
      this  
        .waitForElementVisible(dynamicss.searchHeightSmall, TIMEOUT)

        for(var i=0;i<height.length;i++)
        {
        if(height[i]==ADV_SEARCH_HEIGHT_SMALL)
        this.click(dynamicss.searchHeightSmall)

        if(height[i]==ADV_SEARCH_HEIGHT_MEDIUM)
        this.click(dynamicss.searchHeightMedium)
    
        if(height[i]==ADV_SEARCH_HEIGHT_HEIGHT)
        this.click(dynamicss.searchHeightLage)
        }
    },
    selectWeight: function(Weight)
    {
      this  
        .waitForElementVisible(dynamicss.searchHeightSmall, TIMEOUT)

        for(var i=0;i<Weight.length;i++)
        {
        if(Weight[i]==ADV_SEARCH_WEIGHT_SMALL)
        this.click(dynamicss.searchWeightSmall)

        if(Weight[i]==ADV_SEARCH_WEIGHT_MEDIUM)
        this.click(dynamicss.searchWeightMedium)
    
        if(Weight[i]==ADV_SEARCH_WEIGHT_HEIGHT)
        this.click(dynamicss.searchWeightLarge)
        }
    },
    selectSearch: function () 
    {
      this  
        .waitForElementVisible('@search', TIMEOUT)
        .click('@search')
    },
    selectReset: function () 
    {
      this  
        .waitForElementVisible('@reset', TIMEOUT)
        .click('@reset')
    },
    validatePokemonCount: function (count)
    {
      this  
        .waitForElementVisible('@pokemon', TIMEOUT);
        this.assert.elementsCount('@pokemon',count);
    },
    validatePokemonIds: function(ids)
    {
      this  
        .waitForElementVisible(dynamicss.pokemonId.replace('value',1), TIMEOUT);
      for(var i=1;i<=ids.length;i++)
      {
        this.expect.element(dynamicss.pokemonId.replace('value',i)).text.to.contain(ids[i-1]);
      }
    },
    validatePokemonNames: function(names)
    {
      this  
        .waitForElementVisible(dynamicss.pokemonName.replace('value',1), TIMEOUT);
      for(var i=1;i<=names.length;i++)
      {
        this.expect.element(dynamicss.pokemonName.replace('value',i)).text.to.contain(names[i-1]);
      }
    },
    sortSearchResults: function(option)
    {
      this  
        .waitForElementVisible('@sortOrderDropDown', TIMEOUT)
        .click('@sortOrderDropDown')
        .waitForElementVisible('@sortOrderNumberAsc', TIMEOUT)
        
        if(option==SORT_NUMERICALLY_ASCENDING)
        this.click('@sortOrderNumberAsc')
        if(option===SORT_NUMERICALLY_DESCENDING)
        this.click('@sortOrderNumberDesc')
        if(option==SORT_ALPHABETICALLY_ASCENDING)
        this.click('@sortOrderNameAsc')
        if(option==SORT_ALPHABETICALLY_DESCENDING)
        this.click('@sortOrderNameDesc')
    },
    selectPokemonByName: function(name)
    {
      this  
        .waitForElementVisible(dynamicss.selectPokemon.replace('value',name.toLowerCase()), TIMEOUT)
        .click(dynamicss.selectPokemon.replace('value',name.toLowerCase()))
    }
    }] 
}