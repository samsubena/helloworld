//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopForm&name=BeautifulThing&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.BeautifulThingPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThingPR");
 define("siebel/custom/BeautifulThingPR", ["siebel/phyrenderer","siebel/custom/Revamp/Referral/static/js/main.b4486bc2"],
  function () {
   SiebelAppFacade.BeautifulThingPR = (function () {

    function BeautifulThingPR(pm) {
     SiebelAppFacade.BeautifulThingPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThingPR, SiebelAppFacade.PhysicalRenderer);

    BeautifulThingPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThingPR.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThingPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThingPR.superclass.ShowUI.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThingPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThingPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThingPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThingPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThingPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThingPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThingPR;
   }()
  );
  return "SiebelAppFacade.BeautifulThingPR";
 })
}
