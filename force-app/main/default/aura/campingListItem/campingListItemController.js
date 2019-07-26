({
    packItem : function(component, event, helper) {
        var a = component.get("v.item");
        a.Name = "Item 1" ;
        a.Packed__c = true ;
        a.Quantity__c = 1000;
        a.Price__c = 2222;
        component.set("v.item",a);
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled",true);
    }
})