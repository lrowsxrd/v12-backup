const dc = require("discord.js")

exports.run = async (client, message, args) => {
  let embed = new dc.MessageEmbed()
  .setTitle("Yedek Sistemi")
  .setDescription(`
  
  Sunucularınızın yedeklerini oluşturun ve yükleyin
  
  **Komutlar**
  **[!yedek-al](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Alırsınız.
  **[!yedek-yükle](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedeği Yüklersiniz.
  **[!yedek-sil](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Silersiniz.
  **[!yedek-liste](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Listenize Bakarsınız.
  **[!yedek-bilgi](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Belirttiğiniz Yedeğin Özelliklerine Bakarsınız.
  `)
  .setImage("https://cdn.discordapp.com/attachments/796027165870784562/796097183753043998/20210105_222533.jpg")
  .setColor("GREEN")
  message.channel.send(embed)
  }