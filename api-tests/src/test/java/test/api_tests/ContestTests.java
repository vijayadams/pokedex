package test.api_tests;


import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import org.testng.annotations.Test;
import org.testng.AssertJUnit;

import static com.jayway.restassured.RestAssured.get;

import org.testng.Assert;
import org.testng.annotations.*;

import com.jayway.restassured.http.ContentType;

import utils.ApiUtils;

public class ContestTests extends BaseTest
{
	/**
	 * End Point Under Test : https://pokeapi.co/api/v2/contest-type
	 * Test Type : Sanity Tests
	 * Total Test Cases : 5
	 */
	
	@Test
    public void validate_the_status_code_for_200() 
	{
   
        res = ApiUtils.getResponsebyPath("/contest-type/1/");
        jp = ApiUtils.getJsonPath(res);
        testUtils.checkStatusIs200(res);
    }
	
    @Test
    public void validate_the_value_of_key_id() 
    {
        res = ApiUtils.getResponsebyPath("contest-type/cool/");
        jp = ApiUtils.getJsonPath(res); 
        Assert.assertEquals((jp.get("id")),1, "Validation for value of key id Failed");
    }
    
    @Test
    public void validate_the_value_of_key_name() 
    {
        res = ApiUtils.getResponsebyPath("contest-type/3/");
        jp = ApiUtils.getJsonPath(res); 
        Assert.assertEquals((jp.get("name")),"cute", "Validation for value of key name Failed");
    }
    
    @Test
    public void validate_the_count_of_names()
    {
    	res = ApiUtils.getResponsebyPath("contest-type/smart/");
	    jp = ApiUtils.getJsonPath(res);
	    int size = res.jsonPath().getList("names").size();  
	    Assert.assertEquals(size,2, "Validation for the count of names Failed");
    }
    
    @Test
    public void validate_the_value_of_key_berry_flavors_url() 
    {
        res = ApiUtils.getResponsebyPath("contest-type/5/");
        jp = ApiUtils.getJsonPath(res);
        String temp=jp.get("berry_flavor.url");
        Assert.assertTrue(temp.matches("https://.*.berry-flavor/5/"));
    }

}
