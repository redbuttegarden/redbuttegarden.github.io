window.onload = gardenYearlyHours;

function gardenYearlyHours() {

var d = new Date();
var offset = d.getTimezoneOffset()/60;
var offsetDifference = offset - 6;

// var month = d.getMonth() + 1;

var month = 12;
var day = d.getDate();
var hours = d.getHours() + offsetDifference;
var minutes = d.getMinutes();

var busHours;
var status;
var hoursInfo;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* 		Variables to Change Yearly					  										  */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/**/	var daylightEndDay = 6;				// Day that Daylight Savings Time Ends in November of the current year
/**/	var daylightStartDay = 12;			// Day that Daylight Savings Time Begins in March of the next year
/**/
/**/	var thanksgivingDay = 24;			// Day of Month of Thanksgiving Holiday in November
/**/
/**/	var holidayPartyDay = 0;			// Day of Month we close for Holiday Party in December
/**/	var holidayPartyClosingHour = 0; 	// Hour we close on day of Holiday Party (military time)
/**/
/**/	var galaMonth = 0;					// Month of Gala
/**/	var galaDay = 0; 					// Day of month of Gala
/**/
/**/	var gadDay1 = 20;					// Day of month in October for 1st day of Garden After Dark
/**/	var gadDay2 = 21;					// Day of month in October for 2nd day of Garden After Dark
/**/	var gadDay3 = 22;					// Day of month in October for 3rd day of Garden After Dark
/**/	var gadDay4 = 27;					// Day of month in October for 4th day of Garden After Dark
/**/	var gadDay5 = 28;					// Day of month in October for 5th day of Garden After Dark
/**/	var gadDay6 = 29;					// Day of month in October for 6th day of Garden After Dark (if applicable; if none, set to zero)
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* 		Variables For MISC Messages that Appear in Status Divs								  */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/**/	var gardenOpenMessage = "<div style=\x22font-weight:bold;color:#49E20E;\x22>The Garden is Open</div>";
/**/	var gardenClosedMessage = "<div style=\x22color:red;font-weight:bold;\x22>The Garden is Closed Now</div>";
/**/	var gardenWillOpenMessageStart = "<div style=\x22font-weight:bold;color:#FF0000;\x22>The Garden Will Open in ";	
/**/	var gardenWillCloseMessageStart = "<div style=\x22font-weight:bold;color:#FF0000;\x22>The Garden Will Close in ";
/**/	var gardenMessageEnd = " Minutes</div>";
/**/	var halfOffAdmission = "Enjoy half-price admission December, January, and February";
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

minutesBeforeOpeningorClosing = 60 - minutes;

// Code to account for Daylight Savings Time

if ( (month == 11 && day >= daylightEndDay) || (month == 12) || (month == 1) || (month == 2) || (month == 3 && day < daylightStartDay) ) {
	
	hours = hours - 1;

}

// Between 8AM and 9AM: shows how many minutes before the garden opens

if (hours == 8 ) {
	
	status = gardenWillOpenMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;	
	document.getElementById("gardenStatus").innerHTML = status;
	
	return;
}

// Takes admission prices and divides them by two for December, January, and February

if ( (month == 12) || (month == 1) || (month == 2) ){

	var place1a = "<td class=\x22td-padding strikethrough \x22>";
	document.getElementById("place1a").innerHTML = place1a;
	
	var place1b  = "<span class=\x22inner strikethrough\x22>";
	document.getElementById("place1a").innerHTML = place1b;
	var place1c = "</span>";
	document.getElementById("place1b").innerHTML = place1c;
	
	var adultAdm = document.getElementById("adult-adm").innerHTML;
	var adultHalf = (parseInt(adultAdm, 10))/2;
	document.getElementById("adult-half").innerHTML = "&nbsp;&nbsp;$"+adultHalf;

}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* CHANGE YEARLY: Early Closing Days for Concerts and Gala  								  */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	
	// Hours for individual concert days (which will change every year), 
	// the Gala, and other miscellaneous days that we will close at 5PM
	
	if (
		(month == 5 && day == 25)					// Concert 1 	- The Lumineers
	|| 	(month == 6 && day == 1) 					// Concert 2 	- Buddy Guy & Jonny Lang
	|| 	(month == 6 && day == 16)					// Concert 3 	- The Monkees
	|| 	(month == 6 && day == 20)					// Concert 4 	- Edward Sharpe and the Magnetic Zeros
	|| 	(month == 6 && day == 29)					// Concert 5 	- Ben Harper & the Innocent Criminals
	|| 	(month == 9 && day == 20)					// Concert 6 	- Tears for Fears (date changed)
	|| 	(month == 7 && day == 8)					// Concert 7 	- Case / Lang / Veirs
	|| 	(month == 7 && day == 13) 					// Concert 8 	- Barenaked Ladies / OMD / Howard Jones
	|| 	(month == 7 && day == 14)					// Concert 9 	- JJ Grey & Mofro / Josh Ritter
	|| 	(month == 7 && day == 19)					// Concert 10 	- Boz Scaggs
	|| 	(month == 7 && day == 26)					// Concert 11 	- The Avett Brothers
	|| 	(month == 7 && day == 28)					// Concert 12 	- Willie Nelson & Family
	|| 	(month == 7 && day == 31)					// Concert 13 	- Gary Clark Jr.
	|| 	(month == 8 && day == 5)					// Concert 14	- Weird Al
	|| 	(month == 8 && day == 7)					// Concert 15	- Tedeschi Trucks Band
	|| 	(month == 8 && day == 8)					// Concert 16	- Culture Club
	|| 	(month == 8 && day == 9)					// Concert 17	- Michael Franti & Spearhead
	|| 	(month == 8 && day == 11)					// Concert 18	- Utah Symphony & Milos
	|| 	(month == 8 && day == 14)					// Concert 19	- Lake Street Dive
	|| 	(month == 8 && day == 15)					// Concert 20	- Ryan Adams
	|| 	(month == 8 && day == 17)					// Concert 21	- Pat Benatar & Neil Giraldo / Melissa Etheridge
	|| 	(month == 8 && day == 18)					// Concert 22	- Grace Potter
	|| 	(month == 8 && day == 24)					// Concert 23	- Jackson Browne
	|| 	(month == 8 && day == 30)					// Concert 24	- Wilco
	|| 	(month == 9 && day == 7)					// Concert 25	- Blondie
	|| 	(month == 9 && day == 8)					// Concert 26	- Kacey Musgraves
	|| 	(month == 9 && day == 11)					// Concert 27	- Bonnie Raitt
	|| 	(month == 9 && day == 13)					// Concert 28	- NEEDTOBREATHE
	|| 	(month == 9 && day == 14)					// Concert 29	- Goo Goo Dolls
	|| 	(month == 9 && day == 15)					// Concert 30	- Jason Isbell
	|| 	(month == 8 && day == 22)					// Concert 31	- Old Crow Medicine Show
	|| 	(month == galaMonth && day == galaDay)		// Gala
	
	)
	
	{
		busHours = "9AM-5PM";
		document.getElementById("gardenHours").innerHTML = busHours;
		otherNotes = "The Garden Will Close at 5PM for a Concert";
			
		if (month == galaMonth && day == galaDay) {
			otherNotes = "The Garden Will Close at 5PM for a Special Gala Event";
		}
		
		document.getElementById("otherNotes").innerHTML = document.getElementById("otherNotes2").innerHTML = otherNotes;
		
			if (hours >= 9 && hours < 16) {
			status = gardenOpenMessage;	
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
		
			if (hours == 16) {
				status = gardenWillCloseMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;
				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
				return;
		}
		
			else {
				status = gardenClosedMessage;
				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
				return;
		}
	
	return;
	}

// Jan 1 - Mar 31 General Hours

if (month == 1 || month == 2 || month == 3) {
	
	busHours = "Jan 2-Mar 31: 9AM-5PM"; 
	document.getElementById("gardenHours").innerHTML = document.getElementById("gardenHours2").innerHTML = busHours;
	
	if (month == 1 || month == 2) {
		admissionNotes = halfOffAdmission;
		document.getElementById("admissionDiscount").innerHTML = document.getElementById("admissionDiscount2").innerHTML = admissionNotes;
	}
	
	
	if (month == 1 && day == 1) {
		status = gardenClosedMessage;
		document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
		otherNotes = "The Garden is Closed Dec 24-Jan 1";
		document.getElementById("otherNotes").innerHTML = document.getElementById("otherNotes2").innerHTML = otherNotes; // Note that we are closed Jan 1st
		return;
	}

		if (hours >= 9 && hours < 16) {
			status = gardenOpenMessage;	
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
		
		if (hours == 16) {
			status = gardenWillCloseMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
		
		else {
			status = gardenClosedMessage;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
	
}

// April 1-30 General Hours

else if (month == 4) {		
	
	busHours = "Apr 1-30: 9AM-7:30PM";
	document.getElementById("gardenHours").innerHTML = document.getElementById("gardenHours2").innerHTML = busHours;
	
		if ((hours >= 9 && hours < 18) || (hours == 18 && minutes < 30)) {
			status = gardenOpenMessage;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
		
		if ((hours == 18 && minutes >= 30) || (hours == 19 && minutes < 30)) {
			status = gardenWillCloseMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
		
		else {
			status = gardenClosedMessage;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
	
}

// May 1 - Aug 31 General Hours

else if (month == 5 || month == 6 || month == 7 || month == 8) { 	
	
	busHours = "May 1-Aug 31: 9AM-9PM*"; 
	otherNotes = "*Garden Hours on Concert Days: 9AM-5PM";
	document.getElementById("gardenHours").innerHTML = document.getElementById("gardenHours2").innerHTML = busHours;
	document.getElementById("otherNotes").innerHTML = document.getElementById("otherNotes2").innerHTML = otherNotes;
	
		if (hours >= 9 && hours < 20) {
			status = gardenOpenMessage;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
		
		if (hours == 20) {
			status = gardenWillCloseMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
		
		else {
			status = gardenClosedMessage;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
		
}

// Sep 1 - 30 General Hours

else if (month == 9) { 	
	
	busHours = "Sep 1-30: 9AM-7:30PM*";
	otherNotes = "*Garden Hours on Concert Days: 9AM-5PM";
	document.getElementById("gardenHours").innerHTML = document.getElementById("gardenHours2").innerHTML = busHours;
	document.getElementById("otherNotes").innerHTML = document.getElementById("otherNotes2").innerHTML = otherNotes;

		if ((hours >= 9 && hours < 18) || (hours == 18 && minutes < 30)) { 
			status = gardenOpenMessage;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
			
		}

		if ((hours == 18 && minutes >= 30) || (hours == 19 && minutes < 30)) {
			status = gardenWillCloseMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}		
		
		else {
			status = gardenClosedMessage;
			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
			return;
		}
	
}

// Oct 1 - Dec 23 General hours

else if ( month == 10 || month == 11 || month == 12) {		
	
	busHours = "Oct 1-Dec 23: 9AM-5PM";
	otherNotes = "Closed Thanksgiving Day and Dec 24-Jan 1"; 
	document.getElementById("gardenHours").innerHTML = document.getElementById("gardenHours2").innerHTML = busHours;
	document.getElementById("otherNotes").innerHTML = document.getElementById("otherNotes2").innerHTML = otherNotes;
	
	if (month == 12) {
		admissionNotes = halfOffAdmission;
		document.getElementById("admissionDiscount").innerHTML = document.getElementById("admissionDiscount2").innerHTML = admissionNotes;
	}
	
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Garden After Dark Additional Hours (change gadDay# variables at top yearly)				  */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/**/
/*~~~~~~~Re-enable and edit this code if one of the GAD events has different hours than the rest~~~~~~~*/		
//
//		if ( (month == 10) && (day == gadDay5) ) {
//			otherNotes = "<div style=\x22color:#FF9100;font-weight:bold;\x22>The Garden will close at 5PM, then open again from 6-10PM for Garden After Dark</div>";
//			document.getElementById("otherNotes").innerHTML = document.getElementById("otherNotes2").innerHTML = otherNotes;
//			busHours = "9AM-5PM for General Admission<br />6PM-10PM for Garden After Dark";
//			document.getElementById("gardenHours").innerHTML = document.getElementById("gardenHours2").innerHTML = busHours;
//				
//			if (hours >= 9 && hours < 16) {
//				status = gardenOpenMessage;	
//				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
//				return;
//			}
//			
//			if (hours == 16) {
//				status = "<div style=\x22color:#FF9100;font-weight:bold;\x22>The Garden is Closing Soon, but will reopen at 6PM for Garden After Dark</div>";
//				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
//				return;
//			}
//			
//			if (hours >= 18 && hours < 21) {
//				status = "<div style=\x22color:#FF9100;font-weight:bold;\x22>The Garden is Open for Garden After Dark!</div>";	
//				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
//				return;
//			}
//			
//			if (hours == 21) {
//				status = gardenWillCloseMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;
//				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
//				return;
//			}
//			
//			else {
//				status = gardenClosedMessage;
//				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
//				return;
//			}				
//				
//			return;
//		}		
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/	
/**/
/**/		if ( (month == 10) && (day == gadDay1 || day == gadDay2 || day == gadDay3 || day == gadDay4 || day == gadDay5 || day == gadDay6) ) {
/**/			otherNotes = "<div style=\x22color:#FF9100;font-weight:bold;\x22>The Garden will close at 5PM, then open again from 6-9PM for Garden After Dark</div>";
/**/			document.getElementById("otherNotes").innerHTML = document.getElementById("otherNotes2").innerHTML = otherNotes;
/**/			busHours = "9AM-5PM for General Admission<br />6PM-9PM for Garden After Dark";
/**/			document.getElementById("gardenHours").innerHTML = document.getElementById("gardenHours2").innerHTML = busHours;
/**/			
/**/						if (hours >= 9 && hours < 16) {
/**/				status = gardenOpenMessage;	
/**/				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/				return;
/**/			}
/**/			
/**/			if (hours == 16) {
/**/				status = "<div style=\x22color:#FF9100;font-weight:bold;\x22>The Garden is Closing Soon, but will reopen at 6PM for Garden After Dark</div>";
/**/				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/				return;
/**/			}
/**/			
/**/			if (hours >= 18 && hours < 20) {
/**/				status = "<div style=\x22color:#FF9100;font-weight:bold;\x22>The Garden is Open for Garden After Dark!</div>";	
/**/				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/				return;
/**/			}
/**/			
/**/			if (hours == 20) {
/**/				status = gardenWillCloseMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;
/**/				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/				return;
/**/			}
/**/			
/**/			else {
/**/				status = gardenClosedMessage;
/**/				document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/				return;
/**/			}	
/**/			
/**/			return;	
/**/			
/**/		}		
/**/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Day Garden is Closed for Thanksgiving (Change thanksgivingDay variable at top yearly)	  */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/**/	
/**/	if (month == 11 && day == thanksgivingDay) {	
/**/		status = gardenClosedMessage;
/**/		document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/		busHours = "";
/**/		document.getElementById("gardenHours").innerHTML = document.getElementById("gardenHours2").innerHTML = busHours;
/**/		otherNotes = "The Garden is Closed for the Thanksgiving Holiday";
/**/		document.getElementById("otherNotes").innerHTML = document.getElementById("otherNotes2").innerHTML = otherNotes;
/**/		return;
/**/ 	}
/**/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
		
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Day/Time Garden Closes for Holiday Party (Change holidayPartyDay variable at top yearly)	  */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/**/	
/**/	if (month == 12 && day == holidayPartyDay) {	
/**/		status = gardenClosedMessage;
/**/		document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/		busHours = "9AM-1PM";
/**/		document.getElementById("gardenHours").innerHTML = document.getElementById("gardenHours2").innerHTML = busHours;
/**/		otherNotes = "The Garden Will Close Early for our Annual Staff Holiday Party";
/**/		document.getElementById("otherNotes").innerHTML = document.getElementById("otherNotes2").innerHTML = otherNotes;
/**/	
/**/		if (hours >= 9 && hours < holidayPartyClosingHour) {
/**/			status = gardenOpenMessage;
/**/			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/			return;
/**/		}
/**/	
/**/		else if (hours == holidayPartyClosingHour) {
/**/			status = gardenWillCloseMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;
/**/			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/			return;
/**/		}
/**/	
/**/		else {
/**/			status = gardenClosedMessage;
/**/			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/			return;
/**/		}			
/**/		
/**/		return;
/**/	}
/**/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/		

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/		
/* Displays that Garden is Closed from Dec 24th-Jan 1st (Never needs to be changed)			  */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/**/			
/**/		if (month == 12 && day >= 24) {	
/**/			status = gardenClosedMessage;
/**/			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/			busHours = "";
/**/			document.getElementById("gardenHours").innerHTML = document.getElementById("gardenHours2").innerHTML = busHours;
/**/			otherNotes = "The Garden is Closed Dec 24-Jan 1";
/**/			document.getElementById("otherNotes").innerHTML = document.getElementById("otherNotes2").innerHTML = otherNotes;
/**/			return;
/**/		}
/**/		
/**/		else if (hours >= 9 && hours < 16) {
/**/			status = gardenOpenMessage;
/**/			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/			return;
/**/		}
/**/		
/**/		else if (hours == 16) {
/**/			status = gardenWillCloseMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;
/**/			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/			return;
/**/		}
/**/		
/**/		else {
/**/			status = gardenClosedMessage;
/**/			document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
/**/			return;
/**/		}	
/**/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

	if (hours >= 9 && hours < 16) {
		status = gardenOpenMessage;	
		document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
		return;
	}
		
	if (hours == 16) {
		status = gardenWillCloseMessageStart+minutesBeforeOpeningorClosing+gardenMessageEnd;
		document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
		return;
	}
		
	else {
		status = gardenClosedMessage;
		document.getElementById("gardenStatus").innerHTML = document.getElementById("gardenStatus2").innerHTML = status;
		return;
	}


}

return;
	   
}