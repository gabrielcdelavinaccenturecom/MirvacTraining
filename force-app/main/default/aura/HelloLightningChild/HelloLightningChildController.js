({
    getAccountRec: function(component, event, helper) {
        var action = component.get("c.getAccount");
        action.setParams({
            "accId" : component.get("v.recordId")  
        });
        action.setCallback(this, function(response){
            console.log(response);
            var account = response.getReturnValue();
            //set the return value of the server side controller to the attribute
            component.set("v.accountRec", account);
        })
        $A.enqueueAction(action);
    }
})