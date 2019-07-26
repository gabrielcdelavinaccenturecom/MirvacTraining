/**
 * Created by: Flores,Emmanuel D.
 * Created Date: 11.16.2016
 * Description: Controller class for Lead to Property Matchmaking Component
 * */
 public class LeadToPropertyMatchmakingController{
 
    /*
     *Method to get and display Unit records based on the matching criteria
     */
    @AuraEnabled
    public static List<Unit__c> getUnitRecords(Id leadID) {
        List<Unit__c> units = new List<Unit__c>();
        
        List<Lead> leadRec = [SELECT Id,Bedroom__c,Bathroom__c,Project__c,Unit__c FROM Lead WHERE Id = :leadID];
        
        if(leadRec.size() > 0){
            units = [SELECT Id, Name, Price__c, Status__c, Area_sqm__c, Bathroom__c, Bedroom__c, Project__c, Property_Type__c
                FROM Unit__c
                WHERE (Status__c = 'Available') AND (Price__c != NULL AND Price__c != 0) AND (Project__c = :leadRec[0].Project__c)
                AND (Bedroom__c =: leadRec[0].Bedroom__c
                OR Bathroom__c =: leadRec[0].Bathroom__c)
                ORDER BY Price__c ASC];
        }
        
       return units;
    }
    
    /*
     *Method to update lead record based on the selected unit
     */
    @AuraEnabled
    public static String updateLeadRecord(Id leadID, Id unitID){
        try{
            List<Lead> leadTobeUpdated = [SELECT Id,Bedroom__c,Bathroom__c,Project__c,Unit__c FROM Lead WHERE Id = :leadID LIMIT 1];

            List<Unit__c> unitSelected = [SELECT Id,Name,Price__c,Status__c,Area_sqm__c,Bathroom__c,Bedroom__c,Project__c,Property_Type__c 
                                          FROM Unit__c WHERE Id=:unitID];
                                          
            if(leadTobeUpdated.size() > 0 && unitSelected.size() > 0){
                leadTobeUpdated[0].Unit__c = unitSelected[0].Id;
            }
            
            Database.SaveResult[] srList = Database.update(leadTobeUpdated,false);
            for(Database.SaveResult sr : srList){
                if(!sr.isSuccess()){
                    system.debug('Error'+ sr.getErrors());
                }
            }
    
         }catch(DMLException e){
            return e.getMessage();
         }
       
        return 'SUCCESS';
    }
     
 }