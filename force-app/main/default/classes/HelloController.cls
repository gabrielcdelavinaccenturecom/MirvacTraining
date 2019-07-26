public class HelloController {
	@AuraEnabled
    public static Account getAccount(String accId){
        Account account = [Select Id, Name from Account where Id =: accId Limit 1];
        return account;
    }
}