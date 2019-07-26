({
    onInit: function(component, event, helper){
        helper.getSuggestedUnits(component, event, helper);
    },
    
    afterScriptsLoaded : function (component, event, helper) {
        $('body').on("click", ".custom-dropdown .slds-dropdown-trigger--click", function(){
            $(this).toggleClass("slds-is-open");
        });
    },
    
    refresh: function(component, event, helper){
        helper.getSuggestedUnits(component, event, helper);
        /*var unit = component.get("c.getUnitRecords");
        unit.setParams({
            leadID : component.get("v.recordId")
        });
        unit.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.units", response.getReturnValue());
                if(response.getReturnValue().length > 0){
                    component.set("v.hasMatchingUnit","true");    
                }else{
                    component.set("v.hasMatchingUnit","false"); 
                }
            } else if (state === "ERROR") {
                console.log("No suggested properties");
            }    
        });
        $A.enqueueAction(unit);*/
    },
    
    applySearch : function(component, event, helper){
        component.set("v.displayedUnitList", event.getParams().unitList);
    }
    
})