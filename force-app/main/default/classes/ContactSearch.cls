public class ContactSearch {
    public static List<Contact> searchForContacts(String first, String second){
      List<Contact> conList = [Select Id, Name from contact where LastName=:first AND MailingPostalCode=:second];
        
        return conList;
    }
   
}