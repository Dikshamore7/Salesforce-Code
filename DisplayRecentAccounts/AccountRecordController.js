
({
  doInit: function(component, event, helper) {
 
   var action = component.get('c.getRecord');
   action.setCallback(this,function(response){
      var state = response.getState();
      if (state === "SUCCESS") {
      component.set('v.Rec',response.getReturnValue());
         
   }
});
   $A.enqueueAction(action);
},
 
})

