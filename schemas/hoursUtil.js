
const getHours = () => {
    let list = [];

    // Loop through 24 hours (from 0 to 23) and add half-hour intervals to the list
    for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
        // Convert hour and minute to 24-hour format
        let formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
        let formattedMinute = minute === 0 ? '00' : `${minute}`;

        // Determine whether it's AM or PM
        let period = hour < 12 ? 'AM' : 'PM';

        // Create the title in 12-hour format
        let title = `${formattedHour}:${formattedMinute} ${period}`;

        // Create the value in 24-hour format
        let value = `${formattedHour}:${formattedMinute}`;

        // Add the object to the list array
        list.push({ title, value });
    }
    }
    return list;
}

// Now, the 'list' array contains the desired list of hours in half-hour intervals
export default getHours();