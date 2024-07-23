const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250757174078";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_45_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAzMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICA3NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQwLFxuICAgICAgICA1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwLFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVnpITmRiVnA1bUd1SUVXVThtdGNKR1dBOHNPVzhaWlN1N0F4SUhjVkJubz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWmlsQlhBNHNSdnlpdVZYYXFlcE8xZ1wiLFxuICBcInBob25lSWRcIjogXCJmMWY3ODM0OC05YmExLTRhNjEtOTUxZS0wNDBkYTQyNmFlYTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgNDgsXG4gICAgICAxOTksXG4gICAgICAxMDksXG4gICAgICAxMzAsXG4gICAgICA0NSxcbiAgICAgIDI2LFxuICAgICAgMTUzLFxuICAgICAgMTM5LFxuICAgICAgMTIwLFxuICAgICAgMTg5LFxuICAgICAgMTUyLFxuICAgICAgOTYsXG4gICAgICA3LFxuICAgICAgODQsXG4gICAgICAyMTYsXG4gICAgICA4OCxcbiAgICAgIDIyMSxcbiAgICAgIDQ5LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgNTUsXG4gICAgICAxNzUsXG4gICAgICAxMDYsXG4gICAgICAxMDUsXG4gICAgICA0OCxcbiAgICAgIDY2LFxuICAgICAgNzksXG4gICAgICA0OSxcbiAgICAgIDExLFxuICAgICAgMTAxLFxuICAgICAgNzgsXG4gICAgICA2MSxcbiAgICAgIDc0LFxuICAgICAgNDQsXG4gICAgICAyMyxcbiAgICAgIDIzNyxcbiAgICAgIDI0OCxcbiAgICAgIDI0OCxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUTVZUWkZEVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NTcxNzQwNzg6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMjk3MjM5NzYxMzEyOToyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQTFIrRHdRa05qL3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkx4NEpIMHFFbU1UM0M0MklzV0dBRmIxSy9EVDJFQlpXTjVSekR5TFpWVDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZGFFMnRwYUdQT28vQTZmdTNhcXVWdWF1VWpTUzZ5d1ZoeFA1VGQrZzhVSUUrSUZvMVNyTkYwV242NHJuVXlNa1lIdnA1aTROdEJPWFJFd25XdHpEQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid2lBMmxQMTJ0U1loZmtEY3JIcG0wbzBURDBPK3hsc1lieEJwTFMvemtYVFEwekRSNXd5R0RjZGxrSGh4UlhYNVdTK2s4UjNXNzFzUml0UTVLcHI5QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NTcxNzQwNzg6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc1NjY5M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🗿",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x le king",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
