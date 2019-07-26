({
    Next : function(component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
         //var windowHash =  "/sObject/Account/list?filterName=Recent";
        if(document.getElementById('radio1').checked){
            createRecordEvent.setParams({
                "entityApiName": 'Account', // using account standard object for this sample
                "recordTypeId": '0127F000000RiRH',
                "panelOnDestroyCallback": function(event) {
                window.history.back();
            }
            });
           
        }else if(document.getElementById('radio2').checked){
            createRecordEvent.setParams({
                "entityApiName": 'Account', // using account standard object for this sample
                "recordTypeId": '0127F000000RiRM',
                 "panelOnDestroyCallback": function(event) {
                window.history.back();
            }
            });
            
        }
         
        component.set("v.isOpen", false);
        createRecordEvent.fire();
        //
    },
   gotoURL : function (component, event, helper) {
    var urlEvent = $A.get("e.force:navigateToURL");
    urlEvent.setParams({
      "url": "/001/o"
    });
    urlEvent.fire();
},
    back : function (component, event, helper) {
        window.history.back();}
})