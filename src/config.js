import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "!",
  TOKEN: process.env.TOKEN,
  ACTIVITY: { NAME: "MCRP Ticket", TYPE: "PLAYING" },
  GUILD_ID: "914277797449568306",
  TICKET: {
    CHANNEL: "914277798020022279",
    CATEGORY: "914439323489808404",
    ARCHIVE_CATEGORY: "1256809495007334432",
    MESSAGE: "Click to create ticket!",
    STAFF_ROLES: [],
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Confirm Ticket",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Archive Ticket",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Delete Ticket",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "name",
        LABEL: "What is your name?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "You can write your name.",
        REQUIRED: true,
      },
      {
        ID: "age",
        LABEL: "How old are you?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "You can write your age.",
        REQUIRED: true,
      },
    ],
  },
};
