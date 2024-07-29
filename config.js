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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129375929";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_02_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgNixcbiAgICAgICAgMjI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1LFxuICAgICAgICA2MyxcbiAgICAgICAgOSxcbiAgICAgICAgMSxcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRlJ0Nkk3aTU3VkQ1aVpnaExmY05jQUliN1Q0bUZpREJwQ3ZUb2o3NjZBaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSjJvNW92THRUdGVBNjRKck1LN19JUVwiLFxuICBcInBob25lSWRcIjogXCJjMWNmYzZlMS03ZjllLTRiODktOWUxYi00YjYxMTFjMWU1NzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICA0NSxcbiAgICAgIDc0LFxuICAgICAgODIsXG4gICAgICAyMDUsXG4gICAgICAxMjQsXG4gICAgICAxNDAsXG4gICAgICAyMjAsXG4gICAgICAyMSxcbiAgICAgIDEyOSxcbiAgICAgIDYzLFxuICAgICAgOTcsXG4gICAgICAxNjcsXG4gICAgICA2MSxcbiAgICAgIDcyLFxuICAgICAgMzEsXG4gICAgICA0NSxcbiAgICAgIDU1LFxuICAgICAgODksXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAzOCxcbiAgICAgIDE0OCxcbiAgICAgIDIyNyxcbiAgICAgIDIwMSxcbiAgICAgIDEyOCxcbiAgICAgIDIyMCxcbiAgICAgIDEwNCxcbiAgICAgIDY5LFxuICAgICAgMTY5LFxuICAgICAgMTYsXG4gICAgICA3MSxcbiAgICAgIDE1OSxcbiAgICAgIDE1MCxcbiAgICAgIDEyMixcbiAgICAgIDIwNCxcbiAgICAgIDEyNSxcbiAgICAgIDU3LFxuICAgICAgNjgsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0pHRVlSU1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjkzNzU5Mjk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9sdXdhZmVtaSBFc3RhdGUgU3VydmV5b3IgQW5kIFZhbHVlcnNcIixcbiAgICBcImxpZFwiOiBcIjE4MjIxNDAzNzg3MjcxMTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TQ29OY0JFTWFNNjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicjBPQmdsLzMwT3FCKzZaRDZhcmo0N291NGgweE1OK1FsZ2lQWnNaR01UOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvUVBYSktDQWZidGNVS3I2RWVrZ1BWbFh2ZEdKOWhTWXY5T0JpQSs4YnNLc3p1dDM1SzB2ZmxyNVBVRVBGWWdiek9pZ3lDZkFHc1c0M1JXMkE2R1pEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6WlFkcXFESXhOQ2RnVXp2c1h0NUJ2NncrNnhGamU3RnVsMGY0V2NnTGxBZzBHK1cxTUpxcHY3UVptS1hTU2xYMi9LdXFmd2VuV2pNVnVPWGpmY2xndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI5Mzc1OTI5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0MTkzMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJZUpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUllSi5qc29uIjogIntcImtleURhdGFcIjpcImJkWmNiVFk0SlpjQnZJUXkwQXlLRHFpd3g5YlNzdElNUEpjZXlqMEd4Zms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDUxNDEyMjkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
