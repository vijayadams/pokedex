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

public class BerryTests extends BaseTest
{
	/**
	 * End Point Under Test : https://pokeapi.co/api/v2/berry
	 * Test Type : Sanity Tests
	 * Total Test Cases : 5
	 */
	
	@Test
    public void validate_the_status_code_for_200() 
	{
   
        res = ApiUtils.getResponsebyPath("berry/1/");
        jp = ApiUtils.getJsonPath(res);
        testUtils.checkStatusIs200(res);
    }
	
    @Test
    public void validate_the_value_of_key_id() 
    {
        res = ApiUtils.getResponsebyPath("berry/chesto/");
        jp = ApiUtils.getJsonPath(res); 
        Assert.assertEquals((jp.get("id")),2, "Validation for value of key id Failed");
    }
    
    @Test
    public void validate_the_value_of_key_name() 
    {
        res = ApiUtils.getResponsebyPath("berry/7/");
        jp = ApiUtils.getJsonPath(res); 
        Assert.assertEquals((jp.get("name")),"oran", "Validation for value of key name Failed");
    }
    
    @Test
    public void validate_the_count_of_flavors()
    {
    	res = ApiUtils.getResponsebyPath("berry/aspear/");
	    jp = ApiUtils.getJsonPath(res);
	    int size = res.jsonPath().getList("flavors").size();  
	    Assert.assertEquals(size,5, "Validation for count of flavors Failed");
    }
    
    @Test
    public void validate_the_value_of_key_firmness_url() 
    {
        res = ApiUtils.getResponsebyPath("/berry/11/");
        jp = ApiUtils.getJsonPath(res);
        String temp=jp.get("firmness.url");
        Assert.assertTrue(temp.matches("https://.*.berry-firmness/2/"));
    }

}
