public class SuggestedPropertiesController {
    @AuraEnabled
    public static List<Unit__c> getUnits() {
                
        return [SELECT Id, name, Unit_Number__c, Price__c, Property_Type__c, Bedroom__c, Bathroom__c, Area_sqm__c
                FROM Unit__c where Status__c = 'Available'];
    }
    
    @AuraEnabled 
    public static List<Unit__c> findUnits(String searchKey) {
        String inpUnit = '%' + searchKey + '%'; 
        Decimal num = 0;
        return [SELECT Id, name, Unit_Number__c, Price__c, Property_Type__c, Bedroom__c, Bathroom__c, Area_sqm__c
                FROM Unit__c where 
                Unit_Number__c LIKE :inpUnit OR 
                Bathroom__c LIKE :inpUnit OR 
                Bedroom__c LIKE :inpUnit OR 
                Property_Type__c LIKE :inpUnit];
    }
    
    /*@AuraEnabled 
    public static void updateUnit(Id recId, Id unitId){       
    	Lead lead = [SELECT Id, Bathroom__c, Bedroom__c, Project__c, Unit__c FROM Lead WHERE Id= :recId  LIMIT 1];
        lead.Unit__c = unitId;
        update lead;
    } */
}