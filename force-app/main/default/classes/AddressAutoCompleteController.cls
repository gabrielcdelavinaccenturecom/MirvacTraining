public class AddressAutoCompleteController {

    public class AutoCompleteAddress {
        @auraEnabled public string Id;
        @auraEnabled public string label;
        @auraEnabled public string value;
    }
    @AuraEnabled
    public static string autoPopAddress(string searchTerm){
        HttpRequest req = new HttpRequest();
     req.setEndpoint('http://addressright.co.nz/fuzzycomplete.json?api_key=306040_fSleBZnJDAbNz4RW&formatted=1&term='+searchTerm);
     req.setMethod('GET');
	Http http = new Http();
     HTTPResponse res = http.send(req);
        List<AutoCompleteAddress> wrapperList = new List<AutoCompleteAddress>(); 
        wrapperList = (List<AutoCompleteAddress>)JSON.deserialize(res.getBody(), List<AutoCompleteAddress>.class);
        System.debug(wrapperList);
        return JSON.serialize(wrapperList);
        
    }
}