const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


zokou({ nomCom: 'contactsave',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🪰', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_please wait..._*`) 

   


  }
);


zokou({ nomCom: 'getallmembers',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🪰', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_getting all members_*`) 

   


  }
);



zokou({ nomCom: 'channell',
    desc: 'To check runtime',
    Categorie: 'User',
    reaction: '🪰', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`suppσrt hєrє mч σwnєr вч fσllσw thís chαnnєl plєαsє :https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T`) 

   


  }
);


zokou({ nomCom: 'groups',
    desc: 'To check runtime',
    Categorie: 'User',
    reaction: '🪰', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*suppσrt hєrє mч σwnєr вч fσllσw thís chαnnєl plєαsє* https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T`) 

   


  }
);


zokou({ nomCom: 'update',
    desc: 'To check runtime',
    Categorie: 'User',
    reaction: '🪰', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`hαppínєss хmd vísíσn 1.0`) 

   


  }
);


zokou({ nomCom: 'namebot',
    desc: 'To check runtime',
    Categorie: 'User',
    reaction: '🪰', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`hαppínєss хmd  V1.0`) 

   


  }
);


  
zokou({ nomCom: 'nameowner',
    desc: 'To check runtime',
    Categorie: 'User',
    reaction: '🪰', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`ɴᴊᴀʙᴜʟᴏ-ᴊʙ`) 

   


  }
)


zokou({ nomCom: 'hack',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🪰', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`Injecting Malware",
    " █ 10%",
    " █ █ 20%",
    " █ █ █ 30%",
    " █ █ █ █ 40%",
    " █ █ █ █ █ 50%",
    " █ █ █ █ █ █ 60%",
    " █ █ █ █ █ █ █ 70%",
    " █ █ █ █ █ █ █ █ 80%",
    " █ █ █ █ █ █ █ █ █ 90%",
    " █ █ █ █ █ █ █ █ █ █ 100%",
    "System hijacking on process..\nConnecting to Server error to find 404",
    "Device successfully connected...\nReceiving data...",
    "Data hijacked from device 100% completed\nKilling all evidence, killing all malwares...",
    "HACKING COMPLETED",
    "SENDING LOG DOCUMENTS...",
    "succєssfullч sєnt dαtα αnd cσnnєctíσn díscσnnєctєd",
    "BACKLOGS CLEARED",
    "pσwєrєd вч hαppínєss хmd вσt",
    "ᴤɪʀ ɴᴊᴀʙᴜʟᴏ-ᴊʙ`) 

   


  }
)

