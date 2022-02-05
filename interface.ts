// interface IPerson { 
//    firstName:string, 
//    lastName:string, 
//    sayHi: ()=>string 
// } 


interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
 } 
 
 //commandline as string 
 var options:RunOptions = {program:"test1",commandline:"Hello"}; 
 console.log(options.commandline);
 
 //commandline as a string array 
//  options = {program:"test1",commandline:["Hello","World"]}; 
//  console.log(options.commandline[0]); 
//  console.log(options.commandline[1]);  
 
//  //commandline as a function expression 
//  options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
//  console.log(options.commandline);
 
//  var fn:any = options.commandline; 
//  console.log(fn());

interface Person { 
   age:number 
}

interface Musician extends Person { 
   instrument:string 
}

var drummer = <Musician>{};
drummer.age = 27;
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age);
console.log("Instrument:  "+drummer.instrument) 