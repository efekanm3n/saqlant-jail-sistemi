const Discord = require('discord.js');

exports.run = function(client, message, args) {
    let bs = args.slice(0).join('+');
  
  let id = Number(args[0]);
  

   
    if(isNaN(id)) return message.channel.send("Lütfen Sayı Giriniz, Örnek: v!temizle 10");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("Hey, Lütfen Temizlenecek Mikatarı Belirtiniz!");
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(` ${args[0]} Adet Mesaj Silindi 🚀`).then(msg => msg.delete(1000));
  
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','süpür','temiz'],
  permLevel: 3
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};