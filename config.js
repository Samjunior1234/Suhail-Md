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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_13_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY2LFxuICAgICAgICA5MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMTY5LFxuICAgICAgICAzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNyxcbiAgICAgICAgMzksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDcxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRmRCZEdIcWcyTWdKUlVpRUlLM0xWVDZPaWQydzBFVk9qUFRlQ1pBOTk2ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVkdjdktoVjRTQy1ZR05QSzhNQUpYZ1wiLFxuICBcInBob25lSWRcIjogXCI1YjYxZDY3Zi0xYzI4LTRhZmQtYmZmMi03MDllYjZlNTVmNDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAxODEsXG4gICAgICAxMzQsXG4gICAgICAxOTYsXG4gICAgICAwLFxuICAgICAgOTIsXG4gICAgICAxMTAsXG4gICAgICAzMSxcbiAgICAgIDE2MCxcbiAgICAgIDg3LFxuICAgICAgMjIwLFxuICAgICAgNzIsXG4gICAgICAxMTAsXG4gICAgICAxMjksXG4gICAgICAyMjMsXG4gICAgICAxODksXG4gICAgICA1MixcbiAgICAgIDY5LFxuICAgICAgMTk5LFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgNDUsXG4gICAgICAxNzAsXG4gICAgICA4NSxcbiAgICAgIDUzLFxuICAgICAgMzgsXG4gICAgICAxODMsXG4gICAgICAxNzIsXG4gICAgICAyMixcbiAgICAgIDE1MSxcbiAgICAgIDQwLFxuICAgICAgNzgsXG4gICAgICAxMTYsXG4gICAgICAyMDEsXG4gICAgICAxNTEsXG4gICAgICAxMTIsXG4gICAgICAxNjgsXG4gICAgICAxOTIsXG4gICAgICA5NSxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhSM0FDMTEzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU1NzE3NDA3ODozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMyOTcyMzk3NjEzMTI5OjMzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BYUitEd1FwcFNhdFFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTHg0SkgwcUVtTVQzQzQySXNXR0FGYjFLL0RUMkVCWldONVJ6RHlMWlZUND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGS2R0Tm16UVk3TStBUDhIK0FBTytNMDRubHpLdnVQR1kwOVJydUc2M3NvRUR1OEZPcmpxcjA3cDdtY2lRVWpVZnFmbU8yeThzTlU5SGtVZDloTnBBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSS0VmaWN6SS9QWFhLMWhOY3laUlBpM2k2VEQzRlEvVDNZL1BjTmhXZC9jd1BMdnRPeVczeDNGOC9DMUdyTkRnaFlKOWQ5TkZ0MUlMVFVINkVzcmNnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU1NzE3NDA3ODozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTkwMzc4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
