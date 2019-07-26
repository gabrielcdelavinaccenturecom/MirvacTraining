public with sharing class ExpensesController {

    @AuraEnabled
    public static List<Expense__c> getExpenses(){
        return [Select Id, Name, Amount__c, Client__c, Date__c,
               Reimbursed__c, CreatedDate
               From Expense__c];
    }
    
     @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // Perform isUpdatable() checking first, then
        upsert expense;
        return expense;
    }
}