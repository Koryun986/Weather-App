import { useState } from "react";

const Days = [ "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY" ]

export const useDate = () => {
    const currentDate = new Date();

    const formateNumberToString = (num: number) => num < 10 ? `0${num}` : num.toString();

    const hours = formateNumberToString(currentDate.getHours())
    const minutes = formateNumberToString(currentDate.getMinutes())
    const currentTime = `${hours} : ${minutes}`;

    const weekDay = Days[currentDate.getDay() - 1];
    
    const date = `${weekDay} ${currentTime}`

    return { date };
}