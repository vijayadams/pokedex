package Utils;

import com.jayway.restassured.path.json.JsonPath;
import com.jayway.restassured.response.Response;
import org.testng.Assert;

import java.util.ArrayList;

public class TestUtils {


    public void checkStatusIs200 (Response res) {
        Assert.assertEquals(res.getStatusCode(),200, "Status Check Failed!");
    }


    public ArrayList getClients (JsonPath jp) {
        ArrayList clientList = jp.get();
        return clientList;
    }
}
