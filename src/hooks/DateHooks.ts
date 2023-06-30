import { useState } from "react";

const Days = [ "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY" ]

export const useDate = () => {
    const currentDate = new Date();
    const currentTime = `${currentDate.getHours()} : ${currentDate.getMinutes()}`
    const weekDay = Days[currentDate.getDay() - 1];
    
    const date = `${weekDay} ${currentTime}`

    return { date };
}