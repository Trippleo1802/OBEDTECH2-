const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const conf = require(__dirname + "/../set");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "fana2", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault ("Africa/nairobi");

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭─────────────━┈⊷
│ʙᴏᴛ ɴᴀᴍᴇ: *𝙷𝙰𝙿𝙿𝙸𝙽𝙴𝚂𝚂*
│ᴍᴏᴅᴇ: *${mode}*
│ᴠᴇʀꜱɪᴏɴ: *1.0*
│ᴘʀᴇғɪx: *[ ${prefixe} ]*
│ᴏᴡɴᴇʀ: *ɴᴊᴀʙᴜʟᴏ ᴊʙ*
│ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│ᴅᴀᴛᴇ: *${date}*
│ᴛɪᴍᴇ: *${temps}*
│ᴄᴏᴍᴍᴀɴᴅs: *${cm.length}*
╰─────────────━┈⊷ 

> ➠ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ\n${readmore}`;
    
    
let menuMsg = `

 *𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚎𝚜*`;

    for (const cat in coms) {
        menuMsg += `
╭──❮ *${cat}* ❯─⊷`;
╭──────────━┈⊷
        for (const cmd of coms[cat]) {
            menuMsg += `
│ ${cmd}`;
        }
        menuMsg += `
╰──────────━┈⊷ \n`
    }

    menuMsg += `➠ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ2025
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363345407274799@newsletter',
              newsletterName: 'ɴᴊᴀʙᴜʟᴏ-ᴊʙ ᴜᴘᴅᴀᴛᴇ',
              serverMessageId: 143},
        }
      }
    }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
}); 
          
