

window.onload=function(){
     var googlecalendarbutton=document.getElementById("authorize-button");

      var CLIENT_ID = '341098764982-ppovhpkijrvllt5an06jr60gssvt2nnt.apps.googleusercontent.com'; 
      var SCOPES = ["https://www.googleapis.com/auth/calendar"];

      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
      //the second parameter is the function that needs to be called      
          }, handleAuthResult);
      }

      function getUpcomingEvent(){
        //The list method is called and a function within this server 
        //and javascript files
        //
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date(2017,4,21)).toISOString(),
          'timeMax':(new Date(2017, 4,22)).toISOString(),
          'showDeleted': false,
          'summary':'MetroHacks 2017',
          'description':'New Englands Premier Hackathon Event',
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(function(response) {
          //the number of events are stored in this item
          var events = response.result.items;
          //if the number of events is greater than 0 
          console.log("length of events is "+events.length);
          if (events.length > 0) {
              vex.dialog.buttons.YES.text="Okay"
              vex.dialog.confirm({
              message:"You already have MetroHacks on your calendar",
                    callback:function(value){


                    }
              })            
          }   
          else{
          var event={
            'summary': 'MetroHacks 2017',
            'location': 'Boston,Massachusetts',
            'description': 'New Englands Premier Hackathon Event',
            'start': {
              'dateTime': '2017-05-21T19:00:00',
              'timeZone': 'America/New_York'
            },
            'end': {
              'dateTime': '2017-05-21T23:00:00',
              'timeZone': 'America/New_York'
            },

            'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
              ]
            }
          };
          requestEvent(event);
          }          
          })
        };
          /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      function handleAuthResult(authResult){
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          loadCalendarApi();
        } 
      }

      /**
       * Initiate auth flow in response to user clicking authorize button. If the button exists
       which may not be true on every single page
       *cred
       * @param {Event} event Button click event.
       */
       if(googlecalendarbutton){
        //false is returned if there is an event already there
          googlecalendarbutton.onclick=function handleAuthClick(event) {
                 gapi.auth.authorize(
                //the authorize function 
                 {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
                  handleAuthResult)
           }          
      }

      /**
       * Load Google Calendar client library. List upcoming events
       * once client library is loaded.
       */
      function loadCalendarApi() {
        //If an upcoming event already exists getUpcomingEvent will return true
        gapi.client.load('calendar', 'v3', getUpcomingEvent);
      }

      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */

       function requestEvent(event){
       var request=gapi.client.calendar.events.insert({
       		'calendarId':'primary',
       		'resource':event
       });
       request.execute(function(event){
        vex.dialog.confirm({
                message:'Succesfully created MetroHacks event',
                callback: function(value){

                }


              })
       })
   	}
}






/*


****FLOWCHART****
    1) FIRST WE MUST CHECK IF THE USER HAS ALREADY CREATED AN EVENT AT THIS SPOT
    2) WE MUST THEN CREATE AN EVENT IF THE EVENT WAS NOT FOUND AT THIS spot
    3) IF THE EVENT WAS ALREADY CREATED AT THIS SPOT THEN JUST WARN THE USER  USING 
    vex.js 
    

    /*
  CHECK WHETHER LOADCALENDARAPI SHOULD BE CALLED  
  FUNCTION FLOW FIRST THE LOADCALENDARAPI IS CALLED
  THE FUNCTION CREATE EVENT IS CALLED
    */



