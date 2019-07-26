({  
    updateRecord : function (component, event, helper) {
        helper.updateLead(component, event, helper);
    },
    
    viewRecord : function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId" : component.get("v.unit.Id"),
            "slideDevName" : "detail"
        });
        navEvt.fire();
    },
    
    toggleDropDown : function (component, event, helper) {
        if(component.get("v.toggleDropdown") == 'slds-is-close'){
            component.set("v.toggleDropdown", 'slds-is-open');
        } else{
            component.set("v.toggleDropdown", 'slds-is-close');
        }
    }
})