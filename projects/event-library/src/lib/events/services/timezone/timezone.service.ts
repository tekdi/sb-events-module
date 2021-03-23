import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class TimezoneCal {

    constructor() {
    }


    calcTime(date, time) {

        // create Date object for current location
        let d = new Date(date + " " + time);
        let offset = d.getTimezoneOffset() / -60;
        //alert(date + ' - ' + time);
        // convert to msec
        // add local time zone offset
        // get UTC time in msec
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);

        // create new Date object for different city
        // using supplied offset
        return new Date(utc + (3600000 * offset));

        // return time as a string
       // return nd.toLocaleString();

    }
}
