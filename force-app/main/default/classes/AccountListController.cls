public class AccountListController {
/*Test Gab*/
    @AuraEnabled
    public static List < Account > fetchAccts() {
        return [ SELECT Id, Name, Industry, Type FROM Account LIMIT 10 ];
    }
}