const { MessageEmbed } = require("discord.js");
const conf = require('../ayarlar.json');
const qdb = require("quick.db");
const cdb = new qdb.table("cezalar");
const db = new qdb.table("ayarlar");
const client = global.client;

client.komutlar = [
  {isim: "vip", rol: "802153129554346034"},
  {isim: "elite", rol: "802239921351294996"},
  {isim: "important", rol: "802239922006130710"},
  {isim: "rapper", rol: "802153129562865711"},
  {isim: "beatboxer", rol: "802153129562865708"},
  {isim: "vocalist", rol: "802153129562865713"},
  {isim: "gitarist", rol: "802239922748260362"},
  {isim: "kemanist", rol: "802239926292054046"},
  {isim: "piyanist", rol: "802239925793325086"},
  {isim: "designer", rol: "802239926150234172"},
  {isim: "gamer", rol: "802239926506487809"},
  {isim: "intro-maker", rol: "802239927324114946"},
  {isim: "poet", rol: "802153129562865706"},
  {isim: "painter", rol: "802153129562865709"},
  {isim: "instagram-user", rol: "802239930406273034"},
  {isim: "lovers", rol: "802153129574531086"},
  {isim: "sap", rol: "802239930989543425"},
  {isim: "ekip", rol: "802153129814130720"},
  {isim: "terapist", rol: "802153129583968291"},
  {isim: "rehber", rol: "802239950819950622"},
  {isim: "uyarı1", rol: "802153129583968292"},
  {isim: "uyarı2", rol: "802153129537044558"},
  {isim: "uyarı3", rol: "802239947162517604"},
  {isim: "streamer", rol: "802153129583968290"},
  {isim: "yetkilial1", rol: "802153129617391619"},
  {isim: "yetkilial2", rol: "802153129617391620"},
  {isim: "yetkilial3", rol: "802153129617391622"},
  {isim: "teyitver", rol: "802153129574531085"},
];

module.exports = (message) => {
  if (!message.content.startsWith(conf.prefix)) return;
  let ayar = db.get('ayar') || {};
  let args = message.content.substring(conf.prefix.length).split(" ");
  let command = args[0];
  args = args.splice(1);
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!uye) return;
  let komut = client.komutlar.find(k => k.isim === command);
  if (komut && (komut.isim === "yetkilial1" || komut.isim === "yetkilial2" || komut.isim === "yetkilial3")) {
    if (!message.member.roles.cache.has("702571625811542047") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
    uye.roles.add([komut.rol, "729396561691541586", "601851617343701034", "645664873191309314"]);
    return message.react(client.emojiler.onay);
  };

  if (komut && (komut.isim === "teyitver")) {
    if (!message.member.roles.cache.has("626080186588200960") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
    uye.roles.add(["600429816935874609", "603665487662153738"]);
    return message.react(client.emojiler.onay);
  };

  if (komut && komut.isim === "terapist") {
  if (!message.member.roles.cache.has("701007285983379456") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
    uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol) : uye.roles.add(komut.rol);
    return message.react(client.emojiler.onay);
  };
  if (komut && (komut.isim === "rehber" || komut.isim === "uyarı1" || komut.isim === "uyarı2" || komut.isim === "uyarı3")) {
  if (!message.member.roles.cache.has("645674008229969920") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
    uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol) : uye.roles.add(komut.rol);
    return message.react(client.emojiler.onay);
  };
  if (komut && (komut.isim === "streamer" || komut.isim === "youtuber" || komut.isim === "coder" || komut.isim === "famous")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol) : uye.roles.add(komut.rol);
    return message.react(client.emojiler.onay);
  };

  if (komut && (komut.isim === "elite")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol) : uye.roles.add(komut.rol);
    return message.react(client.emojiler.onay);
  };
  if (!message.member.roles.cache.has("603665487662153738") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
  if (!uye || !komut) return;
  uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol).catch() : uye.roles.add(komut.rol).catch();
  return message.react(client.emojiler.onay);
};

module.exports.configuration = {
  name: "message"
};