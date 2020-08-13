function airplane() {
    let arr = [8, 40, 120];
    let hour = arr[0];
    let minutes = arr[1];
    let duration = arr[2];
    let time = (hour * 60) + minutes;
    let arrive = time + duration;
    let minutesTime = arrive % 60;
    let hoursTime = parseInt(arrive/60);

    if (hoursTime >= 24)
    {
        hoursTime -= 24;
    }
    console.log(hoursTime + "h " + minutesTime + "m");
}
airplane()