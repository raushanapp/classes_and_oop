//  ES10 
// 1. flat
const arrayFlat = [1, [2, 3, [5, 6, [7, [8]]]]]; // if data have empty also clean the data
arrayFlat.flat();
//  flatMap();
arrayFlat.flatMap() // flat one level of neverhood
//  trimStart();
//  trimEnd();
//  fromEnteries
const userProfile = [["CommenderTom", 24], ["Vineet", 29], ["Ajay", 27]];
Object.fromEntries(userProfile);
