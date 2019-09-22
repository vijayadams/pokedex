package test.api_tests;

import org.testng.annotations.AfterClass;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeClass;
import Utils.TestUtils;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.path.json.JsonPath;
import com.jayway.restassured.response.Response;

import utils.ApiUtils;


public class BaseTest {

    public Response res = null;
    public JsonPath jp = null;

    
    TestUtils testUtils = new TestUtils();

    @BeforeClass
    public void setup ()
    {
        ApiUtils.setBaseURI(); 
        ApiUtils.setContentType(ContentType.JSON); 
    }

    @AfterClass
    public void afterTest ()
    {
        ApiUtils.resetBaseURI();
    }

}