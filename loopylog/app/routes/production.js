import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    /*return{
      "ProductName" : "PonderSona",
      "DimensionName" :"1\" x 4\" x 14'",
      "BoardsSum" : 20,
      "BoardFeeSum" : 10000
   }*/
    return Ember.$.getJson("/data/production.json");
  }
});
