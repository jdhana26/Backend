import fs from "fs";

 
fs.writeFileSync("create.txt", "Hello Dhana!");
console.log("File created");

 
// fs.appendFileSync("create.txt", "\nUpdated content");
// console.log("File updated");

 
// const data = fs.readFileSync("create.txt", "utf8");
// console.log(data);

 
// fs.unlinkSync("create.txt");
// console.log("File deleted");