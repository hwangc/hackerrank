const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let iTimes = 0;
let counterTimes = 0;

rl.on('line', (input) => {
  if(input.split(' ')[1] === undefined && iTimes === 0) {
    iTimes = parseInt(input, 10);
  } else {
    console.log(`Case #${++counterTimes}`);
    if(input.split(' ')[0] === undefined || input.split(' ')[1] === undefined || input.split(' ')[0] === '' || input.split(' ')[1] === '') {
      console.log('Error: Please enter proper row and column numbers');
      rl.close();
    }
    const rc = input;
    const iR = parseInt(rc.split(' ')[0]);
    const iC = parseInt(rc.split(' ')[1]);
    let aRC = Array(iR).fill(null).map(()=>Array(iC).fill(null));
    let blockNum = 1;
    let i = 0;

    while(blockNum < iR*iC) {
      // Top walls
      for(var cTop=i; cTop<iC-1-i; cTop++) {
        aRC[i][cTop] = blockNum++;
      }
      // Right walls 
      for(var rRight=i; rRight<iR-1-i; rRight++) {
        if(blockNum <= iR*iC)
          aRC[rRight][iC-1-i] = blockNum++;
      }
      // Bottom walls
      for(var cBottom=iC-1-i; cBottom>i; cBottom--) {
        if(blockNum <= iR*iC)
          aRC[iR-1-i][cBottom] = blockNum++;
      }
      // Left walls
      for(var rLeft=iR-1-i; rLeft>i; rLeft--) {
        if(blockNum <= iR*iC)
          aRC[rLeft][i] = blockNum++;
      }
      // Inc i counter
      i++;
    }

    for(let j = 0; j<iR; j++) {
      console.log(aRC[j].join('\t'));
    }

    if(counterTimes === iTimes) {
      rl.close();
    }
  } 
}).on('close', ()=>{
  process.exit(0);
});
