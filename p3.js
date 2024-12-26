const fs=require("fs");
// console.log(fs);
const os=require("os")
// console.log(os);
const path=require("path")
// console.log(path)

const ans = {
    type: os.type(),
    total_memory: os.totalmem(),
    free_memory: os.freemem(),
    //cpus gives arrays so directly printing op.cpus gives [object object] so map is user here
    //cpu and index are used to segment the data
    CPU_Details: os.cpus().map((cpu, index) => ({
      core: index + 1,
      model: cpu.model,
      speed: cpu.speed, 
    })),
  };
// console.log(ans);
const data=`The type of os is ${ans.type},The total memory is ${ans.total_memory},Free memory is ${ans.free_memory},CPU Details are as follows:
${ans.CPU_Details.map(
    //map is used here again as ans.cpu_details gives [object object again], so to segment data core wise
    //we use map here
    //.join for newlines
  (cpu) => `Core ${cpu.core}: Model - ${cpu.model}, Speed - ${cpu.speed} MHz`
).join('\n')}`;
console.log(`${data}`);

const dir=path.join(__dirname,"logs");
const filepath=path.join(dir,"system-info.txt")

if(!fs.existsSync(dir))//checks if logs already exists
{
    fs.mkdirSync(dir,{recursive:true})//if not then dir=logs is made
}

fs.writeFileSync(filepath,`${data}`,()=>{
})//to write the required data in the file system-info.txt

