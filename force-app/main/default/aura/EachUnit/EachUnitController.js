({
	toggleDropDown : function (component, event, helper) {
        console.log("before");
        if(component.get("v.toggleDropdown") == 'slds-is-close'){
            component.set("v.toggleDropdown", 'slds-is-open');
        } else{
            component.set("v.toggleDropdown", 'slds-is-close');
        }
        console.log("after");
    },
     
})