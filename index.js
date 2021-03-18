const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
//Arquivos do Menu//
const { help } = require('./src/help')
const { logomaker } = require('./src/logomaker')
const { regras } = require('./src/regras')
const { adult } = require('./src/adult')
const { downloader } = require('./src/downloader')
const { education } = require('./src/education')
const { fun } = require('./src/fun')
const { group } = require('./src/group')
const { imagemaker } = require('./src/imagemaker')
const { information } = require('./src/information')
const { islam } = require('./src/islam')
const { kerang } = require('./src/kerang')
const { meme } = require('./src/meme')
const { music } = require('./src/music')
const { other } = require('./src/other')
const { owner } = require('./src/owner')
const { search } = require('./src/search')
const { sound } = require('./src/sound')
const { consulta } = require('./src/consulta')
const { stalk } = require('./src/stalk')
const { stayonscreen } = require('./src/stayonscreen')
const { stickermaker } = require('./src/stickermaker')
const { tod } = require('./src/tod')
const { nad } = require('./language')
const { wibu } = require('./src/wibu')
//Fim Arquivos menu//
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
//Arquivos Jsons//
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const antilink = JSON.parse(fs.readFileSync('./gp/json/antilink.json'))
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const eusourandom = JSON.parse(fs.readFileSync('./gp/json/eusou.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./gp/user/banned.json'))
//Instalações
const moment = require('moment-timezone')
const speed = require('performance-now')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const imageToBase64 = require('image-to-base64')
const axios = require("axios");
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
//ApiKey
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const apikeyG = '8b3591aa6c8d36a033b4d8dd46b68834';
const ZeksApi = 'apivinz';
const zeksApi = 'apivinz';
//Contato
const vcard = 'BEGIN:VCARD\n' //
            + 'VERSION:3.0\n' //
            + 'FN: Dono Sabrina\n' //
            + 'ORG:Criador SABRINA;\n' //
            + 'TEL;type=CELL;type=VOICE;waid=5511946817667:+55 11 94681-7667 \n' //
            + 'END:VCARD'
//Prefixo & Bloqueados//
prefix = setting.prefix
blocked = []

//funções
const addATM = (sender) => {
                const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./gp/json/uang.json', JSON.stringify(uang))
        }

        const checkATMuser = (sender) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

        const confirmATM = (sender, amount) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./gp/json/uang.json', JSON.stringify(uang))
            }
        }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
    const { exec } = require('child_process')
	const sabrina = new WAConnection()
	sabrina.logger.level = 'warn'
	console.log(banner.string)
	sabrina.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('iniciando sabrina....'))
	})

	fs.existsSync('./BarBar.json') && sabrina.loadAuthInfo('./BarBar.json')
	sabrina.on('connecting', () => {
		start('2', 'Conectando...')
	})
	sabrina.on('open', () => {
		success('2', 'Conectado')
	})
	await sabrina.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(sabrina.base64EncodedAuthInfo(), null, '\t'))

	sabrina.on('group-participants-update', async (anu) => {
		const mdata = await sabrina.groupMetadata(anu.jid)
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					sabrina.sendMessage(mdata.id, '*NÚMERO FAKE DETECTADO!\nSERA BANIDO!*', MessageType.text)
					setTimeout(async function () {
						sabrina.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {

			const mdata = await sabrina.groupMetadata(anu.jid)

			console.log(anu)

			if (anu.action == 'add') {

				num = anu.participants[0]

				teks = `Aeee Mais um Membro! Bem vindo ao grupo *${mdata.subject}`

				sabrina.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})

			} else if (anu.action == 'remove') {

				num = anu.participants[0]

				teks = `1 minuto de silêncio pela saida de @${num.split('@')[0]}`

				sabrina.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})

			}

		} catch (e) {
         console.log('Error : %s', color(e, 'yellow'));
      }
   });
	
	sabrina.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	sabrina.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: 'Oii,sabrina está processando espere um pouquinho por favor✨',
				success: 'Sabrina Conseguiu processar oque você pediu!...',
				error: {
					stick: 'Falha, envie novamente...',
  					Iv: 'Link Invalido'
				},
				only: {
					group: '[ 🍉✨ ] Sabrina Só consegue executar este recurso em grupos! ✨',
					ownerG: '[❗] Comando apenas para dono/criador deste grupo! ❌',
					ownerB: '[❗] Comando apenas para criador da Sabrina! (Dev Java) ❌',
					admin: '[❗] 𝙾𝚒𝚒,𝙴𝚜𝚝𝚎 𝚛𝚎𝚌𝚞𝚛𝚜𝚘 𝚎́ 𝚊𝚙𝚎𝚗𝚊𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚜 𝚍𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘🍉✨! ❌',
					Badmin: ' [❗] 𝙿𝚘𝚡𝚊,𝚂𝚊𝚋𝚛𝚒𝚗𝚊 𝚗𝚊̃𝚘 𝚎́ 𝚊𝚍𝚖😔 𝚙𝚊𝚛𝚊 𝚂𝚊𝚋𝚛𝚒𝚗𝚊 𝚏𝚞𝚗𝚌𝚒𝚘𝚗𝚊𝚛 𝚌𝚘𝚛𝚛𝚎𝚝𝚊𝚖𝚎𝚗𝚝𝚎 𝚖𝚎 𝚍𝚎̂ 𝙰𝙳𝙼😔🍉✨ ❌',
				}
			}

			const botNumber = sabrina.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await sabrina.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
			const isPublic = isGroup ? public.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
            const isBanido = ban.includes(sender)
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			nomep = sabrina.contacts[sender] != undefined ? sabrina.contacts[sender].vname || sabrina.contacts[sender].notify : undefined
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				sabrina.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				sabrina.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? sabrina.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : sabrina.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

//Mensagens & Áudios Sem o prefixo!//
		if (messagesC.includes("kkkkkk")){
			sabrina.updatePresence(from, Presence.composing)
			reply("LEGAL NE KK")
	}
	
			if (messagesC.includes("lixo")){
			sabrina.updatePresence(from, Presence.composing)
			reply("por acaso eu sou vc agr?")
	}
	
			if (messagesC.includes("but")){
			sabrina.updatePresence(from, Presence.composing)
			reply("é bot seu analfabeto")
	}
	
			if (messagesC.includes("sabrina")){
			sabrina.updatePresence(from, Presence.composing)
			reply("oiii")
	}
	
			if (messagesC.includes("bem?")){
			sabrina.updatePresence(from, Presence.composing)
			reply("to bem, vlw por perguntar 😏")
	}
	
			if (messagesC.includes("chato")){
			sabrina.updatePresence(from, Presence.composing)
			reply("nossa 🥺")
	}
	
			if (messagesC.includes("vadia")){
			sabrina.updatePresence(from, Presence.composing)
			reply("ai mano, vc acha legal usar um argumento machista?")
	}
	

	
                if (messagesC.includes("https://")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Ops Você é admin neah...')
		        sabrina.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Links Detectado desculpe ${sender.split("@")[0]} você sera expulso deste grupo✨🍉`)
		        setTimeout( () => {
			        sabrina.groupRemove(from, [kic]).catch((e)=>{reply(`BOT HARUS JADI ADMIN`)})
		        }, 1000)
		        setTimeout( () => {
			        sabrina.updatePresence(from, Presence.composing)
			        reply("🍉✨")
		        }, 0)
	        }               


                if (messagesC.includes("http://")){
		        if (!isGroup) return
		        if (!isAntiLink) return
 if (isGroupAdmins) return reply('Não irei te banir, você é admistrador')
		        sabrina.updatePresence(from, Presence.composing)
		        if (messageAnti.includes("#izinbos")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Links Detectado desculpe ${sender.split("@")[0]} voce sera expulso deste grupo✨🍉`)
		        setTimeout( () => {
			        sabrina.updatePresence(from, Presence.composing)
			        reply("LINKS NÃO SÃO PERMITIDOS\n -GRUPO SEGURITY ATIVO-\nSERA BANIDO!")
		        }, 0)
	        }               	       

                if (messagesC.includes("https://")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Ops Você é admin neah...')
		        sabrina.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Grupo Links Detectado desculpe ${sender.split("@")[0]} voce sera expulso deste grupo✨🍉`)
		        setTimeout( () => {
			        sabrina.groupRemove(from, [kic]).catch((e)=>{reply(`BOT HARUS JADI ADMIN`)})
		        }, 1000)
		        setTimeout( () => {
			        sabrina.updatePresence(from, Presence.composing)
			        reply("LINKS NÃO SÃO PERMITIDOS\n -GRUPO SEGURITY ATIVO-\nSERA BANIDO!")
		        }, 0)
	        }               	         	        	         	        
	
	        if (messagesC.includes("www.")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Não vou te banir pois é da equipe de adms')
		sabrina.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Grupo Links Detectado desculpe ${sender.split("@")[0]} voce sera expulso deste grupo 5 segundos`)
		setTimeout( () => {
			sabrina.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			sabrina.updatePresence(from, Presence.composing)
			reply("LINKS NÃO SÃO PERMITIDOS\n -GRUPO SEGURITY ATIVO-\nSERA BANIDO!")
		}, 0)
	}
	
	if (messagesC.includes("19373148696")){ 
           reply(`Opa *${nomep}*, Se poder só me marque para algo importante 😉`)
           satu = fs.readFileSync('./assets/pombo.webp');
           sabrina.sendMessage(from, satu, sticker, {quoted: mek})
           }
	if (messagesC.includes("fdp")){
			sabrina.updatePresence(from, Presence.composing)
			reply("você.")
	}
	
	if (messagesC.includes("gruposabrina")){
			sabrina.updatePresence(from, Presence.composing)
			reply("https://chat.whatsapp.com/GLgii3nks3wBKo0MOlYLdu")
	}
	
		if (messagesC.includes("corno")){
			sabrina.updatePresence(from, Presence.composing)
			reply("Jogo Free Fire não")
	}
	
		if (messagesC.includes("cadebot")){
			sabrina.updatePresence(from, Presence.composing)
			reply("olha eu aqui carai")
	}
	
			if (messagesC.includes("devjava")){
			sabrina.updatePresence(from, Presence.composing)
			reply("oque estão falando do meu pai?")
	}

if (text.includes("ip"))
  { const aris = text.replace(/!ip /, "") 
  axios.get(`https://mnazria.herokuapp.com/api/check?ip=${aris}`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *CIDADE:*  ${res.data.city}\n ➸ *Latitude* : ${res.data.latitude}\n ➸ *Longtitude* : ${res.data.longitude}\n ➸ *REGIÃO* : ${res.data.region_name}\n ➸ *UF* : ${res.data.region_code}\n ➸ *IP* : ${res.data.ip}\n ➸ *TIPO* : ${res.data.type}\n ➸ *CEP* : ${res.data.zip}\n ➸ *LOCALIDADE* : ${res.data.location.geoname_id}\n ➸ *CAPITAL* : ${res.data.location.capital}\n ➸ *DDD* : ${res.data.location.calling_code}\n ➸ *PAÍS* : ${res.data.location.country_flag_emoji}\n *📌BY:May Bot*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }
	
if (text.includes('cry')){
  var teks = text.replace(/!randomcry /, '')
    axios.get(`https://tobz-api.herokuapp.com/api/cry`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}	

if (text.includes("cnpj")){
const aris = text.replace(/!cnpj /, "")
axios.get(`https://www.receitaws.com.br/v1/cnpj/${aris}`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *ATIVIDADE PRINCIPAL:* ${res.data.atividade_principal[0].text} \n\n ➸ *DATA SITUAÇÃO:* ${res.data.data_situacao}\n\n ➸ *TIPO:* ${res.data.tipo} \n\n ➸ *NOME:* ${res.data.nome} \n\n ➸ *UF:* ${res.data.uf} \n\n ➸ *TELEFONE:* ${res.data.telefone}\n\n ➸ *SITUAÇÃO:* ${res.data.situacao} \n\n ➸ *BAIRRO:* ${res.data.bairro} \n\n ➸ *RUA:* ${res.data.logradouro} \n\n ➸ *NÚMERO :* ${res.data.numero} \n\n ➸ *CEP :* ${res.data.cep} \n\n ➸ *MUNICÍPIO:* ${res.data.municipio} \n\n ➸ *PORTE:* ${res.data.porte}\n\n ➸ *ABERTURA:* ${res.data.abertura}\n\n ➸ *NATUREZA JURÍDICA:* ${res.data.natureza_juridica} \n\n ➸ *FANTASIA:* ${res.data.fantasia}\n\n ➸ *CNPJ:* ${res.data.cnpj}\n\n ➸ *ÚLTIMA ATUALIZAÇÃO:* ${res.data.ultima_atualizacao}\n\n ➸ *STATUS:* ${res.data.status}\n\n ➸ *COMPLEMENTO:* ${res.data.complemento}\n\n ➸ *EMAIL:* ${res.data.email}\n\n *📌BY:May Bot* `;
    conn.sendMessage(id, cep ,MessageType.text);
}) 
}

if (text.includes("cpf")){
const aris = text.replace(/!cpf /, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=${aris}`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let ecpf = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CPF:* ${res.data.CPF} \n\n ➸ *NOME:* ${res.data.Nome}\n\n ➸ *MÃE:* ${res.data.NomeMae} \n\n ➸ *NASCIMENTO:* ${res.data.DataNascimento} \n\n ➸ *RUA:* ${res.data.Rua} \n\n ➸ *N°:* ${res.data.NumeroRua}\n\n ➸ *COMPLEMENTO:* ${res.data.Complemento}\n\n ➸ *BAIRRO:* ${res.data.Bairro}\n\n ➸ *CEP:* ${res.data.CEP}\n\n ➸ *UF:* ${res.data.EstadoSigla}\n\n ➸ *CIDADE:* ${res.data.Cidade}\n\n ➸ *ESTADO:* ${res.data.Estado}\n\n ➸ *PAIS:* ${res.data.Pais}  \n\n *📌BY:May Bot* `;
    conn.sendMessage(id, ecpf ,MessageType.text);
}) 
}

if (text.includes("geradorcpf")){
const aris = text.replace(/!geradorcpf/, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=40849779ec68f8351995def08ff1e2fa`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTA PROCESSANDO', MessageType.text)
         let cpf = `*🔍CPF GERADOS🔍* \n\n ➸ *CPF:* ${res.data.data.number}  \n\n *📌BY:May Bot*`;
    conn.sendMessage(id, cpf ,MessageType.text);
})
}	

if (text.includes("cep")){
const aris = text.replace(/!cep /, "")
axios.get(`https://viacep.com.br/ws/${aris}/json/`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CEP:* ${res.data.cep} \n\n ➸ *ENDEREÇO:* ${res.data.logradouro}\n\n ➸ *COMPLEMENTO:* ${res.data.complemento} \n\n ➸ *BAIRRO:* ${res.data.bairro} \n\n ➸ *LOCALIDADE:* ${res.data.localidade} \n\n ➸ *UF:* ${res.data.uf}\n\n ➸ *DDD:* ${res.data.ddd} \n\n *📌BY:May Bot* `;
    conn.sendMessage(id, cep ,MessageType.text);
}) 
}


if (text.includes("placa"))
  { const aris = text.replace(/!placa /, "") 
  axios.get(`https://apicarros.com/v1/consulta/${aris}/json`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *ANO:*  ${res.data.ano}\n ➸ *ANO MODELO* : ${res.data.anoModelo}\n ➸ *CHASSI* : ${res.data.chassi}\n ➸ *CODIGO RETORNO* : ${res.data.codigoRetorno}\n ➸ *CODIGO SITUACAO* : ${res.data.codigoSituacao}\n ➸ *COR* : ${res.data.cor}\n ➸ *MARCA* : ${res.data.marca}\n ➸ *MUNICIPIO* : ${res.data.municipio}\n ➸ *SITUACAO* : ${res.data.situacao}\n ➸ *UF* : ${res.data.uf}\n *📌BY:May Bot*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }		        
 				if (messagesC.includes("sabrinabeat")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/beat1.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
		
						if (messagesC.includes("sabrinasusura")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/sus.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
					if (messagesC.includes("sabrinanamora")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/nam.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}				
					if (messagesC.includes("bixa")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/bixa.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}						
					if (messagesC.includes("bicha")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/bixa.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}	
					if (messagesC.includes("boiola")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/boiola.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}	
					if (messagesC.includes("bosta")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/bosta.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
						if (messagesC.includes("cu")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/cu.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}							
					if (messagesC.includes("daniel")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/Dani.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}							if (messagesC.includes("oi")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/Sabrina.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}							if (messagesC.includes("fodeu")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/foddu.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
				if (messagesC.includes("fogo")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/fogo.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}				
					if (messagesC.includes("maconha")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/maconha.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
										if (messagesC.includes("pai")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/paipara.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}															if (messagesC.includes("pqp")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/pqp.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
					if (messagesC.includes("puta")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/puta.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
					if (messagesC.includes("some")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/some.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
					if (messagesC.includes("mãe")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/suamae.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
					if (messagesC.includes("vergonha")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/vergonha.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
					if (messagesC.includes("vsfd")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/vsfd.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
					if (messagesC.includes("wtf")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/WTF.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}		
					if (messagesC.includes("trava")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/trava.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
					if (messagesC.includes("vou te travar")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/trava.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}				
						if (messagesC.includes("trava zap")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/trava.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}		
						if (messagesC.includes("fcc")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/trava.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
						if (messagesC.includes("rtc")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/trava.mp3');
            sabrina.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}			
						if (messagesC.includes("cr7")){
			reply(mess.wait)(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/cr7.mp4');
            sabrina.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
	}		
						if (messagesC.includes("saycat")){
			reply(mess.wait)(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/saycat.mp4');
            sabrina.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
	}
						if (messagesC.includes("tmj")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/STK-20210221-WA0556.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}			
						if (messagesC.includes("carioca")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/carioca.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("doce")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/doce.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("dog")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/dog.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("pet")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/dog.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("cachorro")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/dogg.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("doli")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/doli.webp');
			doli = fs.readFileSync('./assets/doli2.webp');			
			sabrina.sendMessage(from, tujuh, doli, sticker, {quoted: mek})
	}				
						if (messagesC.includes("jornal")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/jornal.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("lzin")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/lzin.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("odio")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/odio.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("raiva")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/odio.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}		
						if (messagesC.includes("mc poze")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/pose.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}						
						if (messagesC.includes("poze")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/pose.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("✌️😯")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/pose.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}			
						if (messagesC.includes("salinha")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/salinha.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}					
						if (messagesC.includes("peakyblinders")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/peaky.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("cria")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/pdp.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("pdp")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/pdp.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}			
						if (messagesC.includes("bussetinha")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/aimia.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("osh")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/mds.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("confia.")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/confia.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("pedro")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/pedro.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}					
						if (messagesC.includes("mamaco")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/pedro.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("pedro devolve meu macaco")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/pedro.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}			 
						if (messagesC.includes("lek")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/STK-20210220-WA0470.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("thur")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/thur.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("gato")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/gato.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				
						if (messagesC.includes("launchermi")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/k.apk');
			sabrina.sendMessage(from, tujuh, document, {quoted: mek})
	}				
						if (messagesC.includes("loli")){
			sabrina.updatePresence(from, Presence.composing) 				
			tujuh = fs.readFileSync('./assets/loli.webp');
			sabrina.sendMessage(from, tujuh, sticker, {quoted: mek})
	}				

//Cores//		
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
let authorname = sabrina.contacts[from] != undefined ? sabrina.contacts[from].vname || sabrina.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Sabrina'; if (!author) author = 'DevJava';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
//Case Menu//			
				case 'lista':
				case 'menu':
                if (isBanido) return reply(nad.banido())				
				menuimg = fs.readFileSync('./assets/menuimg.jpg')
					sabrina.sendMessage(from, menuimg, image, {quoted: mek, caption: help(prefix), text})
                    lima = fs.readFileSync('./assets/menuv.mp3');
                    sabrina.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break					
                case '18+menu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, adult(prefix), text)    
					break
               case 'regras':
               if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, regras(prefix), text)    
					break
                case 'baixarmenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, downloader(prefix), text)     
					break
                case 'educationmenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, education(prefix), text)     
					break
                case 'funmenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, fun(prefix), text)        
					break
                case 'grupomenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, group(prefix), text)       
					break
                case 'imagemenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, imagemaker(prefix), text)          
					break
                case 'informationmenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, information(prefix), text)        
					break
                case 'islammenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, islam(prefix), text)           
					break
                case 'porcentomenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, kerang(prefix), text)              
					break
                case 'logomenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, logomaker(prefix), text)                  
					break
                case 'mememenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, meme(prefix), text)                       
					break
                case 'musicmenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, music(prefix), text)            
					break
                case 'outrosmenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, other(prefix), text)                           
					break
                case 'buscamenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, search(prefix), text)     
					break
                case 'sommenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, sound(prefix), text)                   
					break
                case 'stalkmenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, stalk(prefix), text)        
					break
                case 'stayonscreenmenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, stayonscreen(prefix), text)         
					break
                case 'figmenu':
                case 'stickermenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, stickermaker(prefix), text)       
					break
                case 'todmenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, tod(prefix), text)           
					break
                case 'wibumenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, wibu(prefix), text)           
					break
                case 'consultamenu':
                if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, consulta(prefix), text)           
					break

//comandos
				case 'info':
				if (isBanido) return reply(nad.banido())
					me = sabrina.user
					uptime = process.uptime()
					teks = `*Oii eu sou a ${me.name} eu sou bem legal salve meu contato como \n "Sabrina lindona" \n *Meu número 😏* : @${me.jid.split('@')[0]}\n*Prefixo atual✨🍉* : ${prefix}\n*Lista de bloqueio😋* : ${blocked.length}\n*Eu to ativa te amando faz* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					sabrina.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
				if (isBanido) return reply(nad.banido())
					teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					sabrina.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'texto':
				if (isBanido) return reply(nad.banido())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await sabrina.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Ops Apenas Fotos✨🍉')
					}
					break
				case 'tp':
					if (args.length < 1) {
						return reply('Escolha o tema, tio, 1 - 162')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/textpro/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('O texto também')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.moe/api/textpro?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=${apiKey}`
					voss = await fetch(anu)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						sabrina.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('Ocorreu um erro, escolha outro tema')
					}
					break
				case 'ep':
					if (args.length < 1) {
						return reply('Escolha o tema, tio, 1 - 216')
					} else if (args[0].toLowerCase() === 'Lista') {
						teks = await fetchText('https://mhankbarbar.moe/api/ephoto/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('O texto também')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.moe/api/ephoto?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=${apiKey}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					//console.log(vuss)
					if (vuss !== undefined) {
						sabrina.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('Ocorreu um erro, escolha outro tema')
					}
					break
				case 'borda':
					if (args.length < 1) return reply('O texto')
					anu = `https://mhankbarbar.moe/api/htahta?text=${args.join(' ')}&apiKey=${apiKey}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						sabrina.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: mess.sucess })
					} else {
						reply('Há um erro')
					}
case 's':
				case 'fig':
				case 'f':
      case 'stiker':
      case 'sticker':
      case 'figu':
            case 's':
				case 'fig':				
				case 'f':
				case 'stiker':	
				case 'sticker':	
				case 'figu':		
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await sabrina.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								sabrina.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(230,iw)':min'(230,ih)':force_original_aspect_ratio=decrease,fps=15, pad=230:230:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await sabrina.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								sabrina.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(230,iw)':min'(230,ih)':force_original_aspect_ratio=decrease,fps=15, pad=230:230:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await sabrina.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 230:230 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								sabrina.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await sabrina.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								sabrina.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas *${prefix}fig* ou marque uma imagem que já foi enviada`)
					}
					break
				case 'falar':
				if (isBanido) return reply(nad.banido())
					if (args.length < 1) return sabrina.sendMessage(from, 'Qual é o código da linguagem✨🍉?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return sabrina.sendMessage(from, 'Cadê o texto tio', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Ops Tente Apagar algumas Palavras...')
					: gtts.save(ranm, dtt, function() {
						sabrina.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				/*case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break*/
				case 'prefixo':
				if (isBanido) return reply(nad.banido())
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefixo Alterado Com sucesso para : ${prefix}`)
					break
				/*case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Citai Lolimu'})
					})
					break
				case 'nsfwloli':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break*/
				case 'enctexto':
				if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Sabrina Precisa de um texto🍉?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
case 'audioyt':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('qual link fof??')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo  do vídeo/musica*\n\n${anu.title}\n\n Enviando seu áudio aguarde...`
					thumb = await getBuffer(anu.thumb)
					sabrina.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					sabrina.sendMessage(from, buffer, audio, {mimetype: 'video/mp4', filename: `${anu.title}.sabrinamp4`, quoted: mek})
					break
				case 'buscaryt':
				if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('O que você está procurando?')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=e3be16b8efa14d78ba50c72d&query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '        ────────────────\n\n'
					for (let i of anu.result) {
						teks += `*Título* : ${i.title}\n\n*Id* : ${i.videoId}\n*Publicado em* : ${i.published}\n*\n*Views* : ${(i.views)}\n\n        ────────────────\n\n`
					}
					reply(teks.trim())
					break
				case 'tiktok':
				if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Onde está o url?🍉✨')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/tiktod/?url=${args[0]}&apikey=onlyonedeveloper`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					sabrina.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'infotiktok':
				case 'tiktokstalk':			
				if (isBanido) return reply(nad.banido())	
					try {
						if (args.length < 1) return sabrina.sendMessage(from, 'Nome do usuário?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Nome de usuário* : ${user.uniqueId}\n*Apelido* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Seguindo* : ${stats.followingCount}\n*Postagens* : ${stats.videoCount}\n*Curtidas* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Possível nome de usuário inválido🍉✨')
					}
					break
				case 'url2img':
				if (isBanido) return reply(nad.banido())
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=$IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					sabrina.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textfig':
				case 'tsticker':
				if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('O texto esta onde?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://api.xteam.xyz/ttp?file&text={body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						exec(`webpmux -set exif ${addMetadata('SABRINABOT', authorname)} ${rano} -o ${rano}`, async (error) => {
							if (error) return reply(mess.error.stick)
							sabrina.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
						/*sabrina.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)*/
					})
					break
				case 'figanimate':
				if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('O texto esta onde?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://api.xteam.xyz/attp?file&text=${teks}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						exec(`webpmux -set exif ${addMetadata('SABRINABOT', authorname)} ${rano} -o ${rano}`, async (error) => {
							if (error) return reply(mess.error.stick)
							sabrina.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
						/*sabrina.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)*/
					})
					break
				case 'todos':
				if (isBanido) return reply(nad.banido())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*🍉✨* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'todos2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'todos3':
                                if (isBanido) return reply(nad.banido())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					sabrina.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clean':
				if (isBanido) return reply(nad.banido())
					if (!isOwner) return reply('Quem é Você?')
					anu = await sabrina.chats.all()
					sabrina.setMaxListeners(25)
					for (let _ of anu) {
						sabrina.deleteChat(_.jid)
					}
					reply('Sucesso Apaguei todas as mensagens que eu recebi! :)')
					break
				case 'tm':
				if (isBanido) return reply(nad.banido())
					if (!isOwner) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await sabrina.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await sabrina.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							sabrina.sendMessage(_.jid, buff, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão Foi enviada!')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ Aviso De Sabrina ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão de sucesso')
					}
					break
                                case 'adm':
                                if (isBanido) return reply(nad.banido())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promova o sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						sabrina.groupRemove(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} Virou o novo "segurança" deste grupo!`, mentioned, true)
						sabrina.groupMakeAdmin(from, mentioned)
					}
					break
				case 'kickadm':
				if (isBanido) return reply(nad.banido())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						sabrina.groupRemove(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} Não é mais admin deste grupo!`, mentioned, true)
						sabrina.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				if (isBanido) return reply(nad.banido())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('cade o número?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						sabrina.groupAdd(from, [num])
					} catch (e) {
						console.log('Erro :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
				case 'kick':
				if (isBanido) return reply(nad.banido())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você deseja chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						sabrina.groupRemove(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} | Foi banido!`, mentioned, true)
						sabrina.groupRemove(from, mentioned)
					}
					break
				case 'alladmin':
				if (isBanido) return reply(nad.banido())
					if (!isGroup) return reply(mess.only.group)
					teks = `Todos admins do  *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgp':
                if (isBanido) return reply(nad.banido())
                    if (!isGroup) return reply(mess.only.group)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await sabrina.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'idgp':
                if (isBanido) return reply(nad.banido())
                    if (!isGroup) return reply(mess.only.group)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await sabrina.groupInviteCode(from)
                    reply('Este é o id deste grupo\n'+linkgc)
                    break
                case 'exit':
                if (isBanido) return reply(nad.banido())
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	sabrina.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				case 'imagem':
				if (isBanido) return reply(nad.banido())
					if (!isQuotedSticker) return reply('*✓ | Marque uma figurinha!*')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await sabrina.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('*⊘ | Tente novamente outra hora!')
						buffer = fs.readFileSync(ran)
						sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*「 ✔️ 」*'})
						fs.unlinkSync(ran)
					})
					break
                    case 'simi':
                    if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Onde está o texto, Acha que sou vidente?😤')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`http://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('*Simi não sabe*')
					reply(anu)
					break
				case 'simih':
				if (isBanido) return reply(nad.banido())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('*Deseja ativar ou desativar?*')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*O modo simi já está ativado*')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('*O modo simi foi ativado...*')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('*Simi está desativado com sucesso*')
					} else {
						reply('*.simih 1 para ativar, e .simih 0 para desativar*')
					}
					break
case 'welcome':
                    if (isBanido) return reply(nad.banido())

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (args.length < 1) return reply('Hmmmm')

					if (Number(args[0]) === 1) {

						if (isWelkom) return reply('Já ativo.')

						welkom.push(from)

						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))

						reply('Modo de boas vindas ativo com sucesso!️')

					} else if (Number(args[0]) === 0) {

						welkom.splice(from, 1)

						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))

						reply('Modo de boas vindas desativo com sucesso!️')

					} else {

						reply('1 para ativar, 0 para desativar')

										}
                                      break			
				case 'clone':
				if (isBanido) return reply(nad.banido())
					if (!isOwner) return reply('Quem é Você?')				
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('marque quem você deseja clonar a foto de perfil✨🍉')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await sabrina.getProfilePicture(id)
						buffer = await getBuffer(pp)
						sabrina.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Ops Falha! Reporte!')
					}
					break
				case 'qualanime':
				if (isBanido) return reply(nad.banido())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await sabrina.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							sabrina.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Ops Envie Fotos!')
					}
					break
					case 'sabrinagrupo':
					if (isBanido) return reply(nad.banido())
					sabrina.sendMessage(from, '*SABRINA GRUPO*\n\nLink :https://chat.whatsapp.com/GLgii3nks3wBKo0MOlYLdu', text, { quoted: mek })
					break
					case 'palavras':
					qute = await getBuffer(`https://firebasestorage.googleapis.com/v0/b/sensibilidade-infinita.appspot.com/o/0001-16063780795_20210127_091551_0000.png?alt=media&token=7d41be9c-3721-438b-b1cc-0ead05a70124`)
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '✨🍉'})
					break
			case 'criador':
			case 'dono':
			if (isBanido) return reply(nad.banido())
                 sabrina.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 sabrina.sendMessage(from, 'Este é o número do criador da Sabrina>_-',MessageType.text, { quoted: mek} )
                 tod = await getBuffer(`https://firebasestorage.googleapis.com/v0/b/sensibilidade-infinita.appspot.com/o/0001-15446315445_20210112_124359_0000.png?alt=media&token=72eaf414-dd1e-49df-83e8-7c05a231342e`)
                 sabrina.sendMessage(from, tod, image, { quoted: mek, caption: '*DEVJAVA🍉✨!*'})
                 break
                case 'audio':
                if (isBanido) return reply(nad.banido())
                	sabrina.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('🍉 por favor marque algum vídeo✨')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await sabrina.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('🍉 Falha ao converter vídeo para mp3 ✨')
						bufferlkj = fs.readFileSync(ran)
						sabrina.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
                                case 'hentai':
                                if (isBanido) return reply(nad.banido())
				                if (!isGroup) return reply(mess.only.group)
					            if (!isGroupAdmins) return reply(mess.only.admin)                                
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        sabrina.sendMessage(from, buffer, image, {quoted: mek})
                                        break
                                case 'loli':
                                if (isBanido) return reply(nad.banido())
                                        gatauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        sabrina.sendMessage(from, buffer, image, {quoted: mek})
                                        break
                 case 'wa.me':
				  case 'wame':
				  if (isBanido) return reply(nad.banido())
  sabrina.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *AUTO WHATSAPP* 」\n\n_Solicitação de_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSeu link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Ou ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    sabrina.sendMessage(from, options, text, { quoted: mek } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break
                case '3dtext':
                if (isBanido) return reply(nad.banido())
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(8)}`)
                sabrina.sendMessage(from, data, image, {quoted: mek, caption: body.slice(8)})
                break
case 'hidetag':
if (isBanido) return reply(nad.banido())
                sabrina.updatePresence(from, Presence.composing) 
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await sabrina.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await sabrina.sendMessage(from, options, text)
               break
                   case 'mapa':
                   if (isBanido) return reply(nad.banido())
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                  hasil = await getBuffer(data.gambar)
                   sabrina.sendMessage(from, hasil, image, {quoted: mek, caption: `Proxima parada *${body.slice(5)}*`})
                   break
case 'pinterest':
if (isBanido) return reply(nad.banido())
					if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					sabrina.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					sabrina.sendMessage(from, pok, image, { quoted: mek, caption: `* pesquisa encontrada!*`})
					break
case 'infogp':
if (isBanido) return reply(nad.banido())
				sabrina.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await sabrina.getProfilePicture(from)
			    	} catch {
					ppimg = 'https://firebasestorage.googleapis.com/v0/b/sensibilidade-infinita.appspot.com/o/0001-16020735732_20210126_114642_0000.png?alt=media&token=fd09c69d-c770-4372-aa99-94ebcb3f6131'
				    }
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*total Membro :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `${no.toString()}`
				     	}
					sabrina.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
case 'infogp2':
if (isBanido) return reply(nad.banido())
			     	sabrina.updatePresence(from, Presence.composing)
			    	if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await sabrina.getProfilePicture(from)
			    	} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
			    	}
					let bufr = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}\n\n*Daddy Domina🔥*`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}]`
					}
					sabrina.sendMessage(from, bufr, image, {quoted: mek, caption: teks})
					break
case 'regrasgp':
if (isBanido) return reply(nad.banido())
sabrina.sendMessage(from, '*${groupDesc}', text, { quoted: mek })
					break
    case 'pedro':
    if (isBanido) return reply(nad.banido())
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQMNDmYlXPOJ25mNlTNwMh6vnRrTRpHARnQ&usqp=CAU`)
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: 'Pedro devolve meu macaco'})
					break
case 'ffbanner':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(' Sabrina Precisa que Você envie um texto🍉✨')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/bannerff?title=${love}&text=SABRINA%20BOT&apikey=Jsieu8287362jshre82`, {method: 'get'})
					sabrina.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
					break
case 'logoff':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(' Sabrina Precisa que Você envie um texto🍉✨')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/logoff?title=${love}&text=SABRINA%20BOT&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					sabrina.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
					break
                      case 'qrcode':
                      if (isBanido) return reply(nad.banido())
                      
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return sabrina.sendMessage(from, 'Envie textos ou links para seu qrcode!', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					sabrina.sendMessage(from, bufferr, image, {quoted: mek})
					break
                case 'morte':
				case 'nilai':
				if (isBanido) return reply(nad.banido())
					rate = body.slice(1)
					const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					sabrina.sendMessage(from, 'Pessoas com nome *${name} : *'+rate+'*\n\nMorrem aos🍉 : '+ te+'%', text, { quoted: mek })
					break
					case 'bonito':
					if (isBanido) return reply(nad.banido())
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					sabrina.sendMessage(from, 'Ssu Nível De beleza aí 😳 : *'+ganteng+'*\n\n : '+ teng+'%', text, { quoted: mek })
					break
					case 'legal':
					if (isBanido) return reply(nad.banido())
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					sabrina.sendMessage(from, 'Nivel de pessoa legal : *'+cantik+'*\n\n ☁️🌙 : '+ tik+'%', text, { quoted: mek })
					break
case 'beijo':
if (isBanido) return reply(nad.banido())
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
						bufferv = await getBuffer(res.result)
						sabrina.sendMessage(from, bufferv, image, {quoted: mek, caption: '👨‍❤️‍💋‍👨'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						sabrina.sendMessage(from, sa, image, {quoted: mek, caption: 'ERRO!🍉✨'})
						reply('❌ *ERRO* ❌')
					}
					break
        case 'gay':
        if (isBanido) return reply(nad.banido())
		if (args.length < 1) return reply('marque alguem!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					sabrina.sendMessage(from, 'Seu Level gay amigo🏳️‍🌈: *'+rate+'*\n\n🏳️‍🌈 : '+ kl+'%', text, { quoted: mek })
					break
        case 'baianor':
        if (isBanido) return reply(nad.banido())
		if (args.length < 1) return reply('marque alguem!')
					dev = body.slice(1)
					const dj =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const js = dj[Math.floor(Math.random() * dj.length)]
					sabrina.sendMessage(from, 'Seu Level baianor amigo🛌💤: *'+dev+'*\n\n️‍💤🛌 : '+ js+'%', text, { quoted: mek })
					break
                case 'figporno':
                if (isBanido) return reply(nad.banido())
                                if (!isGroup) return reply(mess.only.group)
					            if (!isGroupAdmins) return reply(mess.only.admin)                                
                    sabrina.updatePresence(from, Presence.composing) 
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						sabrina.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})					
					break
                case 'moddroid':
                if (isBanido) return reply(nad.banido())
                    sabrina.updatePresence(from, Presence.composing) 
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nome app*: ${data.result[0].title}\n*editor*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*Tamanho*: ${hepi.size}\n*última versão*: ${hepi.latest_version}\n*gênero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
			case 'happymod':
			if (isBanido) return reply(nad.banido())
                    sabrina.updatePresence(from, Presence.composing) 
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nome app*: ${data.result[0].title}\n*versão*: ${hupo.version}\n*Tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*comprar*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
			case 'hug':
			if (isBanido) return reply(nad.banido())
                    sabrina.updatePresence(from, Presence.composing) 
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						sabrina.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                                case 'metalictglow':
                                if (isBanido) return reply(nad.banido())
              	    if (args.length < 1) return reply('Onde está o texto??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return sabrina.sendMessage(from, 'O texto é longo, no máximo 10 frases', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=metalic_text_glow&text=${teks}&apikey=BotWeA`, {method: 'get'})
                                        sabrina.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
                                case '8bit':
                                if (isBanido) return reply(nad.banido())
              	    if (args.length < 1) return reply('Onde está o texto??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return sabrina.sendMessage(from, 'O texto é longo, no máximo 10 frases', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text=${teks}&text=${teks}&apikey=BotWeA`, {method: 'get'})
                                        sabrina.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
                                case 'kpop':
                                if (isBanido) return reply(nad.banido())
                                        gatauda = body.slice(6)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '...'})
                                        break
case 'notify':
				if (isBanido) return reply(nad.banido())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var value = body.slice(9)
					var group = await sabrina.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					sabrina.sendMessage(from, options, text)
					break
					case 'notify5':
					if (isBanido) return reply(nad.banido())
					
					if (!isGroup) return reply(mess.only.group)

					var value = body.slice(9)
					var group = await sabrina.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					sabrina.sendMessage(from, options, text)
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
					break
					case 'notify20':
					if (isBanido) return reply(nad.banido())
					
					if (!isGroup) return reply(mess.only.group)

					var value = body.slice(10)
					var group = await sabrina.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					sabrina.sendMessage(from, options, text)
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
					break
					case 'notify50':
					if (isBanido) return reply(nad.banido())
					
					if (!isGroup) return reply(mess.only.group)

					var value = body.slice(10)
					var group = await sabrina.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					sabrina.sendMessage(from, options, text)
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	.then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                 .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
	                .then(() => {sabrina.sendMessage(from, options, text)})
					break
               case 'pastebin':
                   if (isBanido) return reply(nad.banido())
				paste = `${body.slice(10)}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   reply(anu.result)
                   break		
                   				case 'encode64':
				if (isBanido) return reply(nad.banido())
				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				reply(anu.result)
					break
                   				case 'enhex':
				if (isBanido) return reply(nad.banido())
				enhex = `${body.slice(10)}`
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/base32hex/?encode=${enhex}`, {method: 'get'})
				reply(anu.result)
					break
				case 'dehex':
				if (isBanido) return reply(nad.banido())
				dehex = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/base64/?decode=${dehex}`, {method: 'get'})
					reply(anu.result)
					break 
				case 'decode64':
				if (isBanido) return reply(nad.banido())
				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					reply(anu.result)
					break 
				case 'decode32':
				if (isBanido) return reply(nad.banido())
				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					reply(anu.result)
					break 
				case 'encode32':
				if (isBanido) return reply(nad.banido())
				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${encode32}`, {method: 'get'})
					reply(anu.result)
					break 
				case 'encbinary':
				if (isBanido) return reply(nad.banido())
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					reply(anu.result)
					break 
				case 'decbinary':
				if (isBanido) return reply(nad.banido())
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					reply(anu.result)
					break 
				case 'encoctal':
				if (isBanido) return reply(nad.banido())
				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/base64/?decode=${encoc}`, {method: 'get'})
					reply(anu.result)
					break 
				case 'decoctal':
				if (isBanido) return reply(nad.banido())
				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/base64/?encode=${decoc}`, {method: 'get'})
					reply(anu.result)
					break 
				case 'becrypt':
				if (isBanido) return reply(nad.banido())
				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				reply(anu.result)
				break
     case 'xvideos':
     if (isBanido) return reply(nad.banido())
			   reply(mess.wait)
              	    if (args.length < 1) return reply('onde esta o texto mano?')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Título: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	break
    case 'cachorro':
    if (isBanido) return reply(nad.banido())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok3 = await getBuffer(nimek)
					sabrina.sendMessage(from, pok3, image, { quoted: mek })
					break
case 'frases':
if (isBanido) return reply(nad.banido())
					qute = await getBuffer(`https://firebasestorage.googleapis.com/v0/b/sensibilidade-infinita.appspot.com/o/0001-16063780795_20210127_091551_0000.png?alt=media&token=7d41be9c-3721-438b-b1cc-0ead05a70124`)
					sabrina.sendMessage(from, qute, image, { quoted: mek, caption: '*Aqui*' })
					break
		case 'glass':                      
		if (isBanido) return reply(nad.banido())                  
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await sabrina.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranpkli = getRandom('.png')
                                        ranoklo = getRandom('.webp')
                                        anu1klo = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
                                         exec(`wget ${anu1klo} -O ${ranpkli} && ffmpeg -i ${ranpkli} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoklo}`, (err) => {
                                                fs.unlinkSync(ranpkli)
                                                nobgklo = fs.readFileSync(ranoklo)
                                                sabrina.sendMessage(from, nobgklo, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Use uma foto!')
                                          }
                                             break
          case 'snack':
          if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Formato:* ${anu.format}\n*• Tamanho:* ${anu.size}\n\n*ESPERE ENVIANDO POR FAVOR, NÃO SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                sabrina.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                sabrina.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                break  					
            case 'smule':
            if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n\n Espere 1 minuto, talvez um pouco mais porque o download de vídeos esta executando`
					thumb = await getBuffer(anu.thumb)
					sabrina.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					sabrina.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Aqui mano'})
					break               
				case 'naruto':
				if (isBanido) return reply(nad.banido())
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					sabrina.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					break 				
					case 'minato':
					if (isBanido) return reply(nad.banido())
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					sabrina.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					break 
				case 'boruto':
				if (isBanido) return reply(nad.banido())
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					sabrina.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					break 				
					case 'hinata':
					if (isBanido) return reply(nad.banido())
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					sabrina.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					
					break 				
					case 'sasuke':
					if (isBanido) return reply(nad.banido())
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					sabrina.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					 
					break 
				case 'sakura':
				if (isBanido) return reply(nad.banido())
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					sabrina.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					 
					break 	
               case 'pornhub':
               if (isBanido) return reply(nad.banido())
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Cadê o texto, mano?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Título: ${bokep.title}\nAtor: ${bokep.author}\nVisualizadores: *${bokep.views}*\nDuração: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	break  				
				case 'pronomeneu':
				if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Onde está o texto, hum?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break			     
					case 'fotobot':
					if (isBanido) return reply(nad.banido())
				sabrina.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await sabrina.downloadAndSaveMediaMessage(enmedia)
					await sabrina.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil✨🍉')
					break
        case 'igstalk':
        if (isBanido) return reply(nad.banido())
                                        reply(mess.wait)
                                        vide = body.slice(9)
                                        hmm = await fetchJson(`https://videfikri.com/api/igstalk/?username=${vide}`)
                                        buffer = await getBuffer(hmm.result.profile_hd)
                                        hasil = `Nome de usuário : ${hmm.result.username}\n\nNome completo : ${hmm.result.full_name}\n\nSeguidores : ${hmm.result.followers}\n\nSeguindo : ${hmm.result.following}\n\nbio : ${hmm.result.bio}\n\nContagem de publicações : ${hmm.result.post_count}\n`
                                        sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                                        break
                    case 'ownergrup':
				  case 'showdono':
				  if (isBanido) return reply(nad.banido())
               sabrina.updatePresence(from, Presence.composing) 
              options = {
          text: `Este Dono deste Grupo : @${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           sabrina.sendMessage(from, options, text, { quoted: mek } )
				break
                      case 'gpsegurity':
                      if (isBanido) return reply(nad.banido())
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('grupo segurança ativo')
						antilink.push(from)
						fs.writeFileSync('./gp/json/antilink.json', JSON.stringify(antilink))
						reply('Grupo segurança ativado com sucesso neste grupo ✔️')
						sabrina.sendMessage(from,`Olá! O modo de segurança de links foi ativo, usuários que enviar qualquer tipo de link será banido do grupo *${mdata.subject}*`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('O modo de grupo anti-link foi desabilitado ')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./gp/json/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo segurança com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
//gif					
				case 'hubgif':
				if (isBanido) return reply(nad.banido())
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=$BotWeA`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						sabrina.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
	
					break 
				case 'blowgif':
				if (isBanido) return reply(nad.banido())
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=$BotWeA`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						sabrina.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
	
					break 
				case 'kissgif':
				if (isBanido) return reply(nad.banido())
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=$BotWeA`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						sabrina.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
	
					break 
				case 'shota':
				if (isBanido) return reply(nad.banido())
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=$BotWeA`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						sabrina.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
	
					break 
				case 'hentaifig':
if (isBanido) return reply(nad.banido())
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=$BotWeA`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						sabrina.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
	
					break 		
				case 'nekofig':
				if (isBanido) return reply(nad.banido())
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=$BotWeA`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						sabrina.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
	
					break 
				case 'lolifig':
				if (isBanido) return reply(nad.banido())
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=$BotWeA`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						sabrina.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
	
					break 			
				case 'atriz':
				if (isBanido) return reply(nad.banido())
				sabrina.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('Enviando🍉✨')
                 randTeks = randKey.teks
                 sabrina.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'desligar':
				if (isBanido) return reply(nad.banido())
					if (!isOwner) return reply(mess.only.ownerB)
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('*ERRO AO DESLIGAR*')
						buffer = await getBuffer(res.url)
						sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: 'lolizinha'})
					})
					break
				case 'filme':
				if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply('Que filme quer encontrar?')
				reply(mess.wait)
				anu = await fetchJson(`https://api.vhtear.com/downloadfilm?judul=${body.slice(6)}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				film = `• Título: *${anu.result.judul}*\n• Resolução: *${anu.result.data.resolusi}*\n• Link Download: *${anu.result.data.urlDownload}*\n`
				sabrina.sendMessage(from, film, text, {quoted: mek})

					break		
			case 'instaimg':
			if (isBanido) return reply(nad.banido())
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://api.vhtear.com/instadl?link=${args[0]}/?igshid=1390tngjbk07y&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    sabrina.sendMessage(from, insta, image, {quoted: mek})
				    break  
				case 'instavid':
				if (isBanido) return reply(nad.banido())
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://videfikri.com/api/igvideo/?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    sabrina.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    break  				    				
                case 'wall':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(' Sabrina Precisa que Você envie um link de uma foto🍉✨')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${body.slice(10)}`, {method: 'get'})
					sabrina.sendMessage(from, bufferxcz, image, {quoted: mek, caption: '...'})
					break		
                case 'gta':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(' Sabrina Precisa que Você envie um link de uma foto🍉✨')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${body.slice(10)}`, {method: 'get'})
					sabrina.sendMessage(from, bufferxcz, image, {quoted: mek, caption: '...'})
					break				
                case 'animebanner':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Sabrina Precisa que Você envie um link de uma foto e um nome!🍉✨')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${body.slice(10)}`, {method: 'get'})
					sabrina.sendMessage(from, bufferxcz, image, {quoted: mek, caption: '...'})
					break			
                                case 'infoip': // teste
if (isBanido) return reply(nad.banido())
                                        if (args.length < 1) return reply(` ${prefix}infoip 8.8.8.8`)
                                        anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip={body.slice(10)}`, {method: 'get'})
                                        lang = anu.location.languages[0]
                                        teks = ` *SABRINA ESTÁ PROCURANDO TUDO SOBRE O IP\n${anu.ip}!🕵️* \n Cidade : ${anu.city} \n  Código Continente : ${anu.continent_code} \n Nome do Continente : ${anu.continent_name} \n   Código do país : ${anu.country_code} \n   Nome do país : ${anu.country_name} \n   Latitude : ${anu.latitude} \n  Código de Chamada : ${anu.location.calling_code} \n   Capital : ${anu.location.capital} \n   Bandeira do país : ${anu.location.country_flag} \n   Emoji de bandeira do país : ${anu.location.country_flag_emoji} \n   Emoji de bandeira do país Unicode : ${anu.location.country_flag_emoji_unicode} \n   ID Geoname : ${anu.location.geoname_id} \n   línguas : ${lang.code} , ${lang.name} , ${lang.native} \n   Longitude : ${anu.longitude} \n   Código Regional : ${anu.region_code} \n   Nome da Região : ${anu.region_name} \n   Modelo : ${anu.type} \n  Zip : ${anu.zip} \n SABRINA-BOT🕵️🍉✨`
                                        sabrina.sendMessage(from, teks, text)
                                        break	
              case 'circlesticker':
              if (isBanido) return reply(nad.banido())
    const pack = arg.split('|')[0]
    const author = arg.split('|')[1]
    if (isMedia && mimetype == 'image/jpeg') {
      await createExif(pack,author)
      await sleep(5000)
      decryptMedia(message).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            sqlter.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/jpeg') {
      await createExif(pack, author)
      await sleep(5000)
      decryptMedia(quotedMsg).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            sabrina.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (isMedia && mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => sabrina.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => sabrina.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (isMedia && mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => sabrina.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => sabrina.sendRawWebpAsSticker(from, res.toString("base64")))
    }
    break                                     	
					case 'trigger':
					if (isBanido) return reply(nad.banido())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  sabrina.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nobg = fs.readFileSync(rano)
					sabrina.sendMessage(from, nobg, sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Use uma foto!')
					} 
					break					
                case 'vid':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Sabrina Precisa que Você envie um link de uma foto e um nome!🍉✨')
					reply(mess.wait)		
					bufferxcz = await getBuffer(`https://api.xteam.xyz/attp?file&text={body.slice(9)}`, {method: 'get'})
					sabrina.sendMessage(from, bufferxcz, video, {quoted: mek, caption: '✨🍉'})
                   	break		        	
							case 'ttp2': //By NOIR X RAMLAN ID
if (isBanido) return reply(nad.banido())
							pngttp = './temp/ttp.png'
							webpng = './temp/ttp.webp'
							const ttptext = body.slice(5)
							fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							console.log("RAMLANID")
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							buffer = fs.readFileSync(webpng)
							sabrina.sendMessage(from, buffer, sticker)
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							});
							break          
					case 'modomanu':
					if (isBanido) return reply(nad.banido())
					if (!isOwner) return reply('Ops,Para colocar Sabrina no modo manutenção é apenas para o dono.')
					if (args.length < 1) return reply('Selecione 1 (Ligado) ou 2 (Desligado) Querida!')
					if (Number(args[0]) === 1) {
						if (isPublic) return reply('ativado')
						public.push(from)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Ufaaaaaa\n Manutenção terminada✨ Não aguentava mais ficar desativada!️')
					} else if (Number(args[0]) === 0) {
						public.splice(from, 1)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Manutenção ativada!\n Provavelmente para correção de bugs\n ou para adição de comandos!️')
					} else {
						reply('Escolha 1 (Ligado) ou 2 (Desligado) Prezado!')
					}
					break					
                    case 'bplogo':
                    if (isBanido) return reply(nad.banido())
                if (args.length < 1) return reply('Onde está o texto?')
					teks = body.slice(13)
					reply(mess.wait)
                    anu = (`https://docs-jojo.herokuapp.com/api/blackpink?text=${teks}`, {method: 'get'})
                    buff = await getBuffer(anu)
					sabrina.sendMessage(from, buff, image, {quoted: message, caption: 'cu.'})
                    break
                   case 'tfig':
                   if (isBanido) return reply(nad.banido())
                if (args.length < 1) return reply('Onde está o texto?')
					teks = body.slice(10)
					reply(mess.wait)
                    anu = (`https://api.xteam.xyz/ttp?file&text=${teks}`, {method: 'get'})
                    buff = await getBuffer(anu)
					sabrina.sendMessage(from, buff, sticker, {quoted})         
					break         
                   case 'text2':
                   if (isBanido) return reply(nad.banido())
                if (args.length < 1) return reply('Onde está o texto?')
					teks = body.slice(10)
					reply(mess.wait)
                    anu = (`https://api.xteam.xyz/ttp?file&text=${teks}`, {method: 'get'})
                    buff = await getBuffer(anu)
					sabrina.sendMessage(from, buff, image, {quoted: message, caption: '🍉✨'})         
					break         	
                case 'cnpj':
                if (isBanido) return reply(nad.banido())
                    teks = body.slice(7)
                    res = await fetchJson(`https://www.receitaws.com.br/v1/cnpj/${teks}`)
			        cnp = `CONSULTA CNPJ

 ➸ *ATIVIDADE PRINCIPAL:* ${res.atividade_principal}
 ➸ *DATA SITUAÇÃO:* ${res.data_situacao}
 ➸ *TIPO:* ${res.tipo}
 ➸ *NOME:* ${res.nome}
 ➸ *UF:* ${res.uf}
 ➸ *TELEFONE:* ${res.telefone}
 ➸ *SITUAÇÃO:* ${res.situacao}
 ➸ *BAIRRO:* ${res.bairro} 
 ➸ *RUA:* ${res.logradouro}
 ➸ *NÚMERO:* ${res.numero}
 ➸ *CEP :* ${res.cep}
 ➸ *MUNICÍPIO:* ${res.municipio}
 ➸ *PORTE:* ${res.porte}
 ➸ *ABERTURA:* ${res.abertura}
 ➸ *NATUREZA JURÍDICA:* ${res.natureza_juridica}
 ➸ *FANTASIA:* ${res.fantasia}
 ➸ *CNPJ:* ${res.cnpj}
 ➸ *ÚLTIMA ATUALIZAÇÃO:* ${res.ultima_atualizacao}
 ➸ *STATUS:* ${res.status}
 ➸ *COMPLEMENTO:* ${res.complemento}
 ➸ *EMAIL:* ${res.email}`
			        reply(cnp)
					break
                   case 'cep':
                   if (isBanido) return reply(nad.banido())
                    data = await fetchJson(`https://viacep.com.br/ws/${body.slice(10)}/json`, {method: 'get'})
                    brno = `*SABRINA CONSULTAS🕵️🔍* \n\n *CEP:* ${data.cep} \n\n *ENDEREÇO:* ${data.logradouro} \n\n *COMPLEMENTO:* ${data.complemento} \n\n *BAIRRO:* ${data.bairro} \n\n *LOCALIDADE:* ${data.localidade} \n\n *UF:* ${data.uf} \n\n *DDD:* ${data.ddd} \n\n *SabrinaBOT & Dev Java*`
                    sabrina.sendMessage(from, brno, text, {quoted: mek})
					break        
                   case 'perfil':
                   if (isBanido) return reply(nad.banido())
					sabrina.updatePresence(from, Presence.composing)
				    try {
					ppimg = await sabrina.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `「 *SEU PERFIL* 」\n │• Usuário salvo como : utilizador sabrina\n│• *Seu Link :*\n│• *Wa.me//${sender.split("@")[0]}*\n│• *Outro Link :*\n│ *https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n\n*SABRINA*🔥`
					daftarimg = await getBuffer(ppimg)
					sabrina.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					break                    
                    case 'ip':
                    if (isBanido) return reply(nad.banido())
                   res = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip={body.slice(10)}`, {method: 'get'})
                   djs = ` *SABRINA CONSULTAS🕵️🔍* \n\n ➸ *CIDADE:*  ${res.data.city}\n ➸ *Latitude* : ${res.data.latitude}\n ➸ *Longtitude* : ${res.data.longitude}\n ➸ *REGIÃO* : ${res.data.region_name}\n ➸ *UF* : ${res.data.region_code}\n ➸ *IP* : ${res.data.ip}\n ➸ *TIPO* : ${res.data.type}\n ➸ *CEP* : ${res.data.zip}\n ➸ *LOCALIDADE* : ${res.data.location.geoname_id}\n ➸ *CAPITAL* : ${res.data.location.capital}\n ➸ *DDD* : ${res.data.location.calling_code}\n ➸ *PAÍS* : ${res.data.location.country_flag_emoji}\n *SABRINA CONSULTAS🕵️🔍*` 
                   sabrina.sendMessage(from, djs, text, {quoted: mek})
					break      	
                                case 'delete':
					case 'del':
					if (isBanido) return reply(nad.banido())
					if (!isGroup)return reply(mess.only.group)

					if (!isGroupAdmins)return reply(mess.only.admin)
					sabrina.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break              
case 'gcpf':
if (isBanido) return reply(nad.banido())
                      boxx = await fetchJson(`http://geradorapp.com/api/v1/cpf/generate?token=0b858b5f15ae2e7eecad6aa3973d4db3`)
                      box =  `*SABRINA GERADORES️🔍*\n\n➸ *CPF*: *${boxx.data.number}*\n➸ *FORMATO CPF*: *${boxx.data.number_formatted}*\n➸ *ESTE CPF É VALIDO?*: *${boxx.data.message}*\n           *SABRINABOT ✨ DEV JAVA*`
                      sabrina.sendMessage(from, box, text, {quoted: mek})
                      break				
				case 'nulis1':
				case 'tulis1':
				if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis1 Miku baik hati`)
				Miku = body.slice(8)
				reply('__')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${ramlan}&APIKEY=YOUR_APIKEY`)
				sabrina.sendMessage(from, buff, image, {quoted: mek, caption: 'Melhor escrever você... :*'})
				break
				case 'nulis2':
				case 'tulis2':
				if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis2 Ramlan baik hati`)
				laysha = body.slice(8)
				reply('_Otewe nggak pake rem_')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=YOUR_APIKEY`)
				sabrina.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				break
				case 'nulis':
				case 'tulis':
				if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Yang mau di tulis titit kah?')
					teks = body.slice(7)
					reply('_Otewe nggak pake rem_')
					buff = await getBuffer(`https://api.vhtear.com/write?text=${teks}&apikey=NOT-PREMIUM`)
					sabrina.sendMessage(from, buff, image, {quoted: mek})
					break				 
case 'harrypotter':
if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply('Cade o texto?')
				ween = body.slice(15)
				if (ween.length > 10) return reply('O texto é longo, até 9 caracteres')
				reply(mess.wait())
				buffer = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${ween}`)
		    sabrina.sendMessage(from, buffer, image, {quoted: mek})
		    break					    
		    case 'glowingneon':
		    if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply('Cade o texto?')
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(mess.wait())
				buffer = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${ween}`)
		    sabrina.sendMessage(from, buffer, image, {quoted: mek})
		    break		        
		    case 'candlemug':
		    if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply('Cade o texto?')
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(mess.wait())
				buffer = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ween}`)
		    sabrina.sendMessage(from, buffer, image, {quoted: mek})
		    break		            		
case 'printsite':
if (isBanido) return reply(nad.banido())
					lxrd = body.slice(6)
                    data = await fetchJson(`https://screenshotapi.net/api/v1/screenshot?url=${lxrd}`, {method: 'get'})
                    if (data.error) return reply(data.error)
                    kiny = `Print do site ${lxrd}\n\n *URL:* ${data.url}\n *DATA:* ${data.created_at}`
                    buffer = await getBuffer(data.screenshot)
                    sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: kiny})

                    break    
                case 'plaqui':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(8)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Aguarde...*')
					buffer = await getBuffer(`https://tinglume.sirv.com/Images/IMG-20210304-WA3630.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=10%25&text.0.position.y=22%25&text.0.size=50&text.0.color=7b7878&text.0.opacity=44&text.0.font.family=Coming%20Soon&text.0.font.weight=700&text.0.background.opacity=14&text.0.outline.blur=49`)
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*Um tapa na goxtosa*'})
					break   	
                case 'text':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(8)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Aguarde...*')
					buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${teks}`)
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*Um tapa na goxtosa*'})
					break 				  										
			    case 'sla':
			    if (isBanido) return reply(nad.banido())
			    dark = `${body.slice(8)}`
			    da = dark.split("/")[0];
			    rk = dark.split("/")[1];
			    reply('*Aguarde*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/0d1dc54c127cf3f8a53afe515a1efb8f.jpg?text.0.text=${rk}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=30&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${da}&text.1.position.gravity=north&text.1.size=30&text.1.color=ff0000&text.1.font.weight=600&text.1.font.style=italic`, {method: 'get'})
			    sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*err*'})
			     
			    break  					             
			    case 'frasec':
			    if (isBanido) return reply(nad.banido())
			    nobg = `${body.slice(8)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Aguarde...*')
			    buffer = await getBuffer(`https://api.ritekit.com/v2/image/quote?text=${no}&author=${bg}&textFont=Lora&textColor=%23000000&textFontWeight=400&authorFont=Lato&authorColor=%23e5e5e5&authorFontWeight=400&highlightColor=transparent&backgroundColor1=%238686bd&backgroundColor2=%231ddad6&width=400&height=400&sabrina_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`, {method: 'get'})
			    sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*poeta🤚😞*'})
			     
			    break					    	
case 'tik':
if (isBanido) return reply(nad.banido())
                    gh = body.slice(8)
                    teks1 = gh.split("/")[0];
                    teks2 = gh.split("/")[1];
                     data = await fetchJson(`https://api-teste-exe.herokuapp.com/api/glitch?text=${teks1}&text2=${teks2}`, {method: 'get'})
                    bla = await getBuffer(data.resultado)
                    sabrina.sendMessage(from, bla, image, {quoted: mek, caption: ' 😳'})
                    break
			    case 'caderno':
			    if (isBanido) return reply(nad.banido())
			    daddy = `${body.slice(8)}`
			    texto1 = daddy.split("/")[0];
			    texto2 = daddy.split("/")[1];
			    reply('*Aguarde*')
			    buffer = await getBuffer(`https://tinglume.sirv.com/Images/20210305_225205-removebg-preview%20(1).png?text.0.text=${texto2}&text.0.position.gravity=center&text.0.position.x=-24%25&text.0.position.y=-29%25&text.0.size=20&text.0.color=000000&text.0.opacity=65&text.0.font.family=Montserrat&text.1.text=${texto1}&text.1.position.gravity=north&text.1.position.x=4%25&text.1.position.y=8%25&text.1.size=30&text.1.color=777777&text.1.font.family=Montserrat&text.1.background.opacity=60`)
			    sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*err*'})
			       break		
//consulta					
                case 'iplog':
                if (isBanido) return reply(nad.banido())
                    teks = body.slice(7)
                    anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${teks}`)
			        ipl = `INFORMAÇÕS IP

➸ *CIDADE:* ${anu.city}
➸ *Latitude*: ${anu.latitude}
➸ *Longtitude*: ${anu.longitude}
➸ *REGIÃO*: ${anu.region_name}
➸ *UF*: ${anu.region_code}
➸ *IP*: ${anu.ip}
➸ *TIPO*: ${anu.type}
➸ *CEP*: ${anu.zip}
➸ *LOCALIDADE*: ${anu.location.geoname_id}
➸ *CAPITAL*: ${anu.location.capital}
➸ *DDD*: ${anu.location.calling_code}
➸ *PAÍS*: ${anu.location.country_flag_emoji}
`
			        reply(ipl)
			        break   
                case 'placa':
                if (isBanido) return reply(nad.banido())
                    teks = body.slice(7)
                    anu = await fetchJson(`https://apicarros.com/v1/consulta/${teks}/json/`)
			        placa = `CONSULTA PLACA

➸ *ANO:* ${anu.ano}
➸ *ANO MODELO*: ${anu.anoModelo}
➸ *CHASSI*: ${anu.chassi}
➸ *CODIGO RETORNO*: ${anu.codigoRetorno}
➸ *CODIGO SITUACAO*: ${anu.codigoSituacao}
➸ *COR*: ${anu.cor}
➸ *MARCA*: ${anu.marca}
➸ *MUNICIPIO*: ${anu.municipio}
➸ *SITUACAO*: ${anu.situacao}
➸ *UF*: ${anu.uf}
`
			        reply(placa)
					break	
			    case 'styletexto':
			    if (isBanido) return reply(nad.banido())
			    style = `${body.slice(10)}`
			    texto = style.split("/")[1];
			    reply('*Aguarde*')
                anu = await fetchJson(`https://arugaz.my.id/api/random/text/fancytext?text=${teks1}`, {method: 'get'})
                reply(anu.result)
			       break
                                case 'repeat':
                                if (isBanido) return reply(nad.banido())
                                        teks = body.slice(8)

                                        if (args.length < 1) return reply('onde está o texto mana?')
                                        saying = teks
                                        sabrina.sendMessage(from, saying, text)
                                        break
               case 'oque':
               if (isBanido) return reply(nad.banido())
               sabrina.updatePresence(from, Presence.composing) 

               random = apakah[Math.floor(Math.random() * (apakah.length))]
  	
			   hasil = `Questão : *${body.slice(1)}*\n\nResultado : *${random}*`
			   reply(hasil)
			   break
              case 'vcpode':
              if (isBanido) return reply(nad.banido())
                sabrina.updatePresence(from, Presence.composing) 
                random = bisakah[Math.floor(Math.random() * (bisakah.length))]
  	
			   hasil = `Questão : *${body.slice(1)}*\n\nResultado : *${random}*`
			   reply(hasil)
			   break
               case 'taxa':
               if (isBanido) return reply(nad.banido())
              sabrina.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Questão : *${body.slice(1)}*\n\nResultado : *${random}%*`
              reply(hasil)
                break
	    case 'quando':
	    if (isBanido) return reply(nad.banido())
               sabrina.updatePresence(from, Presence.composing) 

               random = kapankah[Math.floor(Math.random() * (kapankah.length))]
               random2 = `${Math.floor(Math.random() * 8)}`
               hasil = `Pergunta? : *${body.slice(1)}*\n\nResultado hehe boy : *${random2} ${random}*`
              reply(hasil)
                break
			case 'fechargp':
			if (isBanido) return reply(nad.banido())
					sabrina.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *so os ademiro pode fala* aguarde membros comum`,
					contextInfo: { mentionedJid: [nomor] }
					}
					sabrina.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
                case 'abrirgp':
                case 'bukagc':
                if (isBanido) return reply(nad.banido())
					sabrina.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *podem falar membros comum* ghosts se manifestem`,
					contextInfo: { mentionedJid: [sender] }
					}
					sabrina.groupSettingChange (from, GroupSettingChange.messageSend, false)
					sabrina.sendMessage(from, open, text, {quoted: mek})
					break
                case 'memec':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(8)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Aguarde...*')
					buffer = await getBuffer(`https://tinglume.sirv.com/Images/3769du.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=-26%25&text.0.position.y=22%25&text.0.size=19&text.0.color=000000&text.0.font.family=Montserrat&text.0.background.opacity=100&text.0.outline.color=e3ec00&text.0.outline.opacity=0&text.1.text=SabrinaBOT&text.1.size=20&text.1.color=000000&text.1.opacity=26&text.1.font.family=Montserrat&text.1.background.opacity=1"`)
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*Hoje eu tô comediante*'})
					break   
                case 'google':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(8)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Aguarde...*')
					buffer = await getBuffer(`https://tinglume.sirv.com/Images/20210305_173854.jpg?text.0.text=${teks}&text.0.position.x=-62%25&text.0.position.y=-29%25&text.0.size=14&text.0.color=000000&text.0.opacity=76&text.0.font.family=Montserrat&text.0.background.opacity=12`)
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*Hoje eu tô comediante*'})
					break   
			    case 'hublogo':
			    if (isBanido) return reply(nad.banido())
			    daddy = `${body.slice(8)}`
			    texto1 = daddy.split("/")[0];
			    texto2 = daddy.split("/")[1];
			    reply('*Aguarde*')
			    buffer = await getBuffer(`https://budenter.sirv.com/Images/hublogo.jpg?w=500&text.0.text=${texto1}&text.0.position.gravity=northwest&text.0.position.x=19%25&text.0.position.y=45%25&text.0.size=38&text.0.color=ffffff&text.0.opacity=94&text.0.font.family=Paytone%20One&text.1.text=${texto2}&text.1.position.gravity=northwest&text.1.position.x=59%25&text.1.position.y=46%25&text.1.size=19&text.1.color=000000&text.1.font.family=Paytone%20One&text.1.background.color=ffbe00&text.1.background.opacity=100`)
			    sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*err*'})
			       break		
		case 'igpost': // Atualização por DevJava
if (isBanido) return reply(nad.banido())		
				if (args.length < 1) return reply('Onde está o url?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply('este não é o url do instagram.')
				ige = body.slice(8)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/ig?url=${args[0]}&apikey=onlyonedeveloper`, {method: 'get'})
				buffer = await getBuffer(anu.hasil.result.data.data)
                sabrina.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Sabrina_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/mek.jpeg')} } }})
				break
		case 'igvideo': // Atualização por DevJava		
		if (isBanido) return reply(nad.banido())	
				if (args.length < 1) return reply('Onde está o url?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply('este não é o url do instagram.')
				ige = body.slice(9)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/ig?url=${args[0]}&apikey=onlyonedeveloper`, {method: 'get'})
				buffer = await getBuffer(anu.hasil.result.data.data)
                sabrina.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.hasil.result.data.type}.mp4`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Sabrina._", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/mek.jpeg')} } }})
				break
		case 'github': // Update By RzkyO & ItsmeikyXSec404
		if (isBanido) return reply(nad.banido())
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/github?user=${body.slice(8)}&apikey=onlyonedeveloper`)
				buffer7 = await getBuffer(anu.result.avatar_url)
				teks = `*Informações encontradas...*\n\n*➸ ID :* ${anu.result.id}\n*➸ Node ID :* ${anu.result.node_id}\n*➸ Gravatar ID :* ${anu.result.gravatar_id}\n*➸ Url :* ${anu.result.html_url}\n*➸ Modelo :* ${anu.result.type}\n*➸ Site Admin :* ${anu.result.site_admin}\n*➸ Nome :* ${anu.result.name}\n*➸ Companhia :* ${anu.result.company}\n*➸ Blog :* ${anu.result.blog}\n*➸ Localização :* ${anu.result.location}\n*➸ Email :* ${anu.result.email}\n*➸ Bio  :* ${anu.result.bio}\n*➸ Twitter Username :* ${anu.result.twitter_username}\n*➸ Repositórios :* ${anu.result.public_repos}\n*➸ Síntese pública :* ${anu.result.public_gists}\n*➸ Seguidores :* ${anu.result.followers}\n*➸ Seguindo :* ${anu.result.following}\n*➸ Criar em :* ${anu.result.created_at}\n*➸ Atualização em :* ${anu.result.updated_at}`
				sabrina.sendMessage(from, buffer7, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SabrinaBOT_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/mek.jpeg')} } }, caption: teks})
				break	
		case 'movie': // Update By RzkyO & ItsmeikyXSec404	
		if (isBanido) return reply(nad.banido())
				sabrina.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`O que você procura?`)
				reply(`aguarde...`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/infofilm?q=${body.slice(10)}&apikey=onlyonedeveloper`)
				teks = 'Filme Encontrado✨\n'
				for (let i of asu.hasil.result) {
					teks += `*Título* : ${i.title}\n*Avaliação* : ${i.rating}\n*Episódio* : ${i.episode}\n*Filme ID* : ${i.movieId}\n*Visualizações* : ${i.detail.views}\n*Duração* : ${i.detail.duration}\n*Lançamento* : ${i.detail.release}\n*Descrição* : ${i.detail.description}\n===========\n`
				}
				reply(teks)
				break
		case 'movie2': // Update By RzkyO & ItsmeikyXSec404	
		if (isBanido) return reply(nad.banido())
				sabrina.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`O que você procura?`)
				reply(`aguarde`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/country/infofilm?search=${body.slice(11)}&apikey=onlyonedeveloper`)
				teks = 'Filme encontrado✨\n'
				for (let i of asu.hasil.result) {
					teks += `*Título* : ${i.title}\n*Avaliação* : ${i.rating}\n*Qualidade* : ${i.quality}\n*Filme ID* : ${i.movieId}\n*Trailer* : ${i.detail.trailer}\n*Visualizações* : ${i.detail.views}\n*Gênero* : ${i.detail.genre}\n*Diretor* : ${i.detail.director}\n*Ator* : ${i.detail.actors}\n*País* : ${i.detail.country}\n*Duração* : ${i.detail.duration}\n*Lançamento* : ${i.detail.release}\n*Descrição* : ${i.detail.description}\n===========\n`
				}
				reply(teks)
				break				
				case 'burst':                 
				if (isBanido) return reply(nad.banido())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await sabrina.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						sabrina.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break			
				case 'batle':
				if (isBanido) return reply(nad.banido())
					gh = `${body.slice(7)}`
					reply(mess.wait())
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana goblog?')
					data = await getBuffer(`https://ferdiz-api.herokuapp.com/api/battlefield?text=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(data.result)
					sabrina.sendMessage(from, buffer, image, {quoted: mek})

					break		
		case 'dado':
		if (isBanido) return reply(nad.banido())
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			sabrina.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break			
			case 'vinta':
			if (isBanido) return reply(nad.banido())
			if (args.length < 1) return reply('Cade o texto?')
					vin = body.slice(7)
					reply(mess.wait())
					vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
					sabrina.sendMessage(from, vintage, image, {caption: 'nih anjing ${vin}', quoted: mek})

					break
                 case 'avengers':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Cade o texto?')
					if (!q.includes('|')) return  reply('Cade o texto?')
                   const aruga1 = q.substring(0, q.indexOf('|') - 0)
                    const aruga2 = q.substring(q.lastIndexOf('|') + 1)
					reply(mess.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/avengers?text1=${aruga1}&text2=${aruga2}`)
					sabrina.sendMessage(from, aruga, image, {caption: 'Aqui', quoted: mek})

					break 
					case 'summer':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Cade o texto?')
					aruga = body.slice(8)
					reply(mess.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					sabrina.sendMessage(from, aruga, image, {caption: 'Aqui', quoted: mek})

					break
					case 'sandwrite':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Cade o texto?')
					aruga = body.slice(11)
					reply(mess.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					sabrina.sendMessage(from, aruga, image, {caption: 'Aqui', quoted: mek})

					break
					case 'metaldark':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Cade o texto?')
					aruga = body.slice(11)
					reply(mess.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					sabrina.sendMessage(from, aruga, image, {caption: 'Aqui', quoted: mek})

					break 
					case 'dropwater':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Cade o texto?')
					aruga = body.slice(11)
					reply(mess.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					sabrina.sendMessage(from, aruga, image, {caption: 'Aqui', quoted: mek})

					break 
					case 'grenneon':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('Cade o texto?')
					aruga = body.slice(10)
					reply(mess.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
					sabrina.sendMessage(from, aruga, image, {caption: 'Aqui', quoted: mek})

					break 
					case 'neontext':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('texto onde')
					aruga = body.slice(10)
					reply(mess.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					sabrina.sendMessage(from, aruga, image, {caption: 'Aqui', quoted: mek})
					break 
					case 'toxic':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('cade o texto')
					aruga = body.slice(7)
					reply(mess.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
					sabrina.sendMessage(from, aruga, image, {caption: 'inhe', quoted: mek})
					break
					case 'sumery':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('cade o texto')
					aruga = body.slice(8)
					reply(mess.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
					sabrina.sendMessage(from, aruga, image, {caption: 'Aqui', quoted: mek})
					break
					case 'blood':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('cade o texto?')
					aruga = body.slice(7)
					reply(mess.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
					sabrina.sendMessage(from, aruga, image, {caption: 'Aqui', quoted: mek})
					break
					case 'firework':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('cade o texto?')
					arugazzz = body.slice(10)
					reply(mess.wait())
					arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
					sabrina.sendMessage(from, arugazzz, image, {caption: 'Aqui', quoted: mek})
					break			
					case 'silktext':
if (isBanido) return reply(nad.banido())
                      if (args.length < 1) return reply('Onde está o texto?')
                      gdh = body.slice(11)
                      gl1 = gdh.split("|")[0];
                      gl2 = gdh.split("|")[1];
                      buffere = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=dapppbotwa`, {method: 'get'})
                      reply(mess.wait)
                      sabrina.sendMessage(from, buffere, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
					case 'slide':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('*texto?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${apivhtear}`, {method: 'get'})
					reply(mess.wait)
					sabrina.sendMessage(from, atytyd, video, {quoted: mek})

					break  
					case 'cpubg':
					case 'pubg':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('digite algum texto!')
				 	if (args.length > 10) return reply('pelo menos 10 caracteres')
					cpubg = `${body.slice(7)}`
					cpubg1 = cpubg.split("/")[0];
					cpubg2 = cpubg.split("/")[1];
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${cpubg1}&text2=${cpubg2}&apikey=${TobzKey}`, {method: 'get'})
					cpubg = await getBuffer(anu.result)
					sabrina.sendMessage(from, cpubg, image, {quoted: mek})

					break  
					case 'cml':
					case 'ml':
if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply('digite algum texto!')
                     			if (args.length > 10) return reply('pelo menos 10 caracteres')
					cml = `${body.slice(5)}`
					cml1 = cml.split("/")[0];
					cml2 = cml.split("/")[1];
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=${cml1}&text=${cml2}&apikey=${apivhtear}`, {method: 'get'})
					sabrina.sendMessage(from, buffer, image, {quoted: mek})

					break  	
				case 'toptt':
				if (isBanido) return reply(nad.banido())
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await sabrina.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Falha ao converter áudio para ptt')
						topt = fs.readFileSync(ran)
						sabrina.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
						})
					break
			case 'slow':
			if (isBanido) return reply(nad.banido())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await sabrina.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						sabrina.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fat':
				if (isBanido) return reply(nad.banido())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await sabrina.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						sabrina.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
case 'esquilo':
if (isBanido) return reply(nad.banido())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await sabrina.downloadAndSaveMediaMessage(encmedia)
					buz = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=65100" ${buz}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('*Ocorreu um erro, tente novamente.*')
						bah = fs.readFileSync(buz)
						sabrina.sendMessage(from, bah, audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: mek})
						fs.unlinkSync(buz)
					    })
				       break
				case 'pubglogo':
				if (isBanido) return reply(nad.banido())
					gh = `${body.slice(8)}`
					reply(mess.wait)
					gbl1 = gh.split(",")[0];
					gbl2 = gh.split(",")[1];
					if (args.length < 1) return reply('Onde está o texto?')
					data = await getBuffer(`https://ferdiz-api.herokuapp.com/api/pubg?text=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(data.result)
					sabrina.sendMessage(from, buffer, image, {quoted: mek})
					break			
case 'listonline':
if (isBanido) return reply(nad.banido())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(sabrina.chats.get(ido).presences), sabrina.user.jid]
			    sabrina.sendMessage(from, 'Usuarios online neste grupo\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
case 'cyberpunk':
if (isBanido) return reply(nad.banido())
  sabrina.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","fotografia cyberpunk","Tóquio cyberpunk","wallpaper cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  sabrina.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break		 				
case 'trigg':
					case 'ger':
if (isBanido) return reply(nad.banido()) 
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await sabrina.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                sabrina.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Use uma foto!')
                                          }
                                             break	
case 'wasted':
  case 'was':
if (isBanido) return reply(nad.banido())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await sabrina.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
sabrina.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Use uma foto!')
}
break   
case 'desenho':
if (isBanido) return reply(nad.banido())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await sabrina.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 sabrina.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Não adicione nada ao comando')
}
break
case 'pin':
if (isBanido) return reply(nad.banido())
    if(!isUrl(args[0]) && !args[0].includes('pin')) return reply('link incorreto')
  reply(mess.wait)
  play = body.slice(5)
  try {
  anu = await fetchJson(`https://scrap.terhambar.com/pin?url=${play}`)
  if (anu.error) return reply(anu.error)
  n = JSON.parse(JSON.stringify(anu.result.data));
  lagu = await getBuffer(anu.result)
  sabrina.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'fb':
if (isBanido) return reply(nad.banido())
  reply(mess.wait)
  if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply('Format link salah, gunakan link facebook')
  play = body.slice(4)
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${play}&apiKey=${BarbarKey}`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Video Ditemukan*\n‣ *Judul* : ${anu.title}\n‣ *Publikasi* : ${anu.published}\n‣ *Ukuran* : ${anu.filesize}\n\n_Mengirim file silakan tunggu_\n\n_Jika video tidak muncul download sendiri menggunakan link dibawah_\n‣ *link* : ${anu.result}`
  lagu = await getBuffer(anu.result)
  sabrina.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'igg':
if (isBanido) return reply(nad.banido())
  reply(mess.wait)
    if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply('Format link salah, gunakan link instagram')
  play = body.slice(4)
  try {
  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${lolKey}&url=${play}`)
  lagu = await getBuffer(anu.result)
  sabrina.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `Imlexa.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
case 'tikk':
if (isBanido) return reply(nad.banido())
  if (args.length < 1) return reply('*☒* Insira o link')
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (!isUrl(args[0]) && !args[0].includes('vt.tiktok')) return reply(mess.error.Iv)
  try {
  anu = await fetchJson(`https://api.arugaz.my.id/api/media/tiktok?url=${args[0]}`, {
method: 'get'
  })
  if (anu.error) return reply(anu.error)
  teks = `*Nome* : ${anu.result.nameInfo}\n*Caption* : ${anu.result.textInfo}\n\n_Enviando arquivos, por favor aguarde_`
  thumb = await getBuffer(anu.result.image)
  sabrina.sendMessage(from, thumb, image, {
quoted: mek, caption: teks
  })
  buffer = await getBuffer(anu.result.mp4direct)
  sabrina.sendMessage(from, buffer, video, {
mimetype: 'video/mp4', filename: `${anu.nameInfo}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
			case 'buscag':
			if (isBanido) return reply(nad.banido())
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Resultado da pesquisa : ${googleQuery}*`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado da pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Título* : ${results[i].title}\n\n*Descrição* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    sabrina.sendMessage(from, 'Google Error : ' + e);
                })
                 
                break

case 'girl':
if (isBanido) return reply(nad.banido())
  sabrina.updatePresence(from, Presence.composing)
  co = ["Garotas Gostosas Brasil","Meninas Bonitas","Mulher Lindas","Menina gostosa"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  sabrina.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break		     
case 'macaco':
if (isBanido) return reply(nad.banido())
  sabrina.updatePresence(from, Presence.composing)
  co = ["macaco Brasil","chimpanzé","",",gorila"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  sabrina.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break		          
case 'boy':
if (isBanido) return reply(nad.banido())
  sabrina.updatePresence(from, Presence.composing)
  co = ["Garotos Gostosos Brasil","meninos Bonitos","Homens Lindos","Homem Gostoso Fotos"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  sabrina.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break		          
case 'mia':
if (isBanido) return reply(nad.banido())
  sabrina.updatePresence(from, Presence.composing)
  co = ["mia Khalifa","mia Khalifa Instagram","mia Khalifa Fotos peitos","Mia Pornhub"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  sabrina.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break		                   
case 'egirl':
if (isBanido) return reply(nad.banido())
  sabrina.updatePresence(from, Presence.composing)
  co = ["egirl gostosa","egirl brasileira","","saycat"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  sabrina.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break	
 case 'meme':
 if (isBanido) return reply(nad.banido())
  sabrina.updatePresence(from, Presence.composing)
  co = ["meme Brasil","meme shitpost","","shitpost","meme engraçado","meme Brasil shitpost","memes reddit Brasil","memes Facebook brasil","memes twitter Brasil"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  sabrina.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break	 
		case 'text2gif':
		if (isBanido) return reply(nad.banido())
				 // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply('teste')
				bh = body.slice(10)
				reply(mess.wait())
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				sabrina.sendMessage(from, bh, image, {caption: 'Aqui..', quoted: mek})

				break
		case 'calender':
		if (isBanido) return reply(nad.banido())
				 // Fix Bug By ItsmeikyXSec404				
				if (args.length < 1) return reply('Url png incorreto!')
				ainez2 = body.slice(15)
				reply(mess.wait)
				anu = await fetchJson(`https://api.zeks.xyz/api/calendar?img=${ainez2}&apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				sabrina.sendMessage(from, buffer, image, {caption: 'Eu conto os dias..', quoted: mek})

				break
				case 'instaphoto': // Update By ItsmeikyXSec404 & RzkyO				
				if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply('Onde está o url?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(8)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    sabrina.sendMessage(from, buffer, image, )
				    break
				case 'igtv': // Update By ItsmeikyXSec404 & RzkyO	
				if (isBanido) return reply(nad.banido())			
				if (args.length < 1) return reply('Onde está o url?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(6)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    sabrina.sendMessage(from, buffer, video, )
				    break
				case 'tiktoknowm': // Update By RzkyO & ItsmeikyXSec404
				if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply('Onde está o url?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(12)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    sabrina.sendMessage(from, buffer, video, )
				    break
				 case 'ccgenerator': // Update By RzkyO & ItsmeikyXSec404
				 if (isBanido) return reply(nad.banido())
                   reply(`Gerando...`)
				   anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`, {method:'get'})
				   teks = `*Está abaixo!*\n*♻️NÚMERO*: ${anu.result.card.number}\n*♻️TIPO*: ${anu.result.card.network}\n*♻️CVV*: ${anu.result.card.cvv}\n*♻️PIN*: ${anu.result.card.pin}\n*♻️DINHEIRO*: ${anu.result.card.balance}\n*♻️EXPIRAR-MÊS*: *Personalizado*\n*♻️EXPIRARAR-ANO*: *Personalizar*\n*♻️PAÍS*: ${anu.result.customer.country}\n*♻️NOME*: ${anu.result.customer.name}\n*♻️ADDRESS*: ${anu.result.customer.address}`
				   sabrina.sendMessage(from, teks, text, {quoted: mek})

				   break	
				case 'emoji2img': // Update By RzkyO & ItsmeikyXSec404
				if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply('onde está o emoji?')
				gatauda = body.slice(11)
				reply(mess.wait)
				buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=benbenz&emoji=${gatauda}`, {method: 'get'})
				sabrina.sendMessage(from, buffer, image, {quoted: mek})
                case 'emoji2':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(10)
					if (args.length > 1) return reply('Cade o emoji?')
					reply('*Aguarde...*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=benbenz&emoji=${teks}`, {method: 'get'})
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*✨🍉*'})
					break   
                case 'qr2':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(10)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Aguarde...*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/barcode?apikey=apivinz&text=${teks}`)
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*🍉✨*'})
					break   	
                case 'bwall':
                if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(8)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Aguarde...*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${teks}`)
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*🍉✨*'})
					break   	
case 'flower':
if (isBanido) return reply(nad.banido())
                    gh = body.slice(8)
                    teks1 = gh.split("/")[0];
                    teks2 = gh.split("/")[1];
                     data = await fetchJson(`https://api.zeks.xyz/api/flowertext?text=${teks1}&apikey=apivinz`, {method: 'get'})
                    bla = await getBuffer(data.resultado)
                    sabrina.sendMessage(from, bla, image, {quoted: mek, caption: ' 😳'})
                    break	
     case 'pstore1':
     if (isBanido) return reply(nad.banido())
			   reply(mess.wait)
               gh = body.slice(8)            			   
              	    if (args.length < 1) return reply('onde esta o texto mano?')
                    anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${gh}`, {method: 'get'})
                    teks = `\n\n\n`
                    for (let b of anu.result) {
                    teks += `• Título: ${anu.title}\n• Info: ${b.info}\n• Link: ${b.link}\n=\n`
                    }
                    reply(teks.trim())
			     	break 
case 'pstore':
if (isBanido) return reply(nad.banido())
				 // Fix Bug By ItsmeikyXSec404				
				anu = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})		
			    txt = `*Aplicativo* : ${anu.title}\n*Data* : ${anu.appid}\n*Desenvolvedor* : ${anu.developer}\n Avaliação* : ${anu.rating}\n`
			    thumb = await getBuffer(anu.thumb)				
			    sabrina.sendMessage(from, thumb, image, {quoted: mek, caption: txt})					

				break	
			case 'textstyle':			
			if (isBanido) return reply(nad.banido())				
			reply(mess.wait)
			style = `${body.slice(11)}`
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			break  
				case 'getsticker':
				case 'gets':
				if (isBanido) return reply(nad.banido())
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					sabrina.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				case 'liststicker':
				if (isBanido) return reply(nad.banido())
					teks = '*Lista de Figurinhas :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					sabrina.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
				if (isBanido) return reply(nad.banido())
					if (!isQuotedSticker) return reply('Marque o sticker pfv')
					svst = body.slice(12)
					if (!svst) return reply('Qual é o nome do adesivo?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await sabrina.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					sabrina.sendMessage(from, `Adicionando adesivo com sucesso\nVerificar pelo caminho ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
case 'tapa':
				case 'slap':
				if (isBanido) return reply(nad.banido())
				try {
				if (!isGroup) return reply(ind.groupo())
                var imgbb = require('imgbb-uploader')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Em quem você quer dar o tapa na cara >:] ?')
				mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				reply('Aguarde... Dando um tapa...')
                ghost = mek.participant
                try {
                pp = await sabrina.getProfilePicture(ghost)
                } catch {
                pp = 'https://i.ibb.co/64dN6bQ/imgbb-20201220-WA0024.jpg'
                }
                media = await getBuffer(pp)
                datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                fs.writeFileSync('tapa.jpeg', datae, 'base64')
                res = await imgbb(`${apikeyG}`, 'tapa.jpeg')
                userf1 = `${res.display_url}`
                try {
				ppp = await sabrina.getProfilePicture(`${mentidn.split('@')[0]}@s.whatsapp.net`)
				} catch {
				ppp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                media = await getBuffer(ppp)
                data2e = await imageToBase64(JSON.stringify(ppp).replace(/\"/gi, ''))
                fs.writeFileSync('tapa2.jpeg', data2e, 'base64')
                res2 = await imgbb(`${apikeyG}`, 'tapa2.jpeg')
                userf2 = `${res2.display_url}`
                buffer99 = await getBuffer(`https://api.zeks.xyz/api/slap?apikey=${zeksApi}&img1=${userf1}&img2=${userf2}`)
                sabrina.sendMessage(from, buffer99, image, {quoted: mek, caption: `Desculpa se dei um tapa muito forte @${mentidn.split('@')[0]}`, contextInfo: {mentionedJid: [mentidn]}})

                } catch (e) {
                console.log(`Error :`, color(e,'red'))
                }
				break	
		case 'phcoment':
		if (isBanido) return reply(nad.banido())
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Aguarde...*')
			    buffer = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://firebasestorage.googleapis.com/v0/b/sensibilidade-infinita.appspot.com/o/mek.jpeg?alt=media&token=b488b178-bf65-4513-83b9-19bd93aa928c&username=${no}&msg=${bg}`, {method: 'get'})
			    sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*🍉✨'})
			     
					break
               case 'ff':
               if (isBanido) return reply(nad.banido())
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(9)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Aguarde*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/epep?text=${teks}&apikey=apivinz`)
					sabrina.sendMessage(from, buffer, image, {quoted: mek, caption: '*🍉✨'})
					break			
case 'eusou':
if (isBanido) return reply(nad.banido())
            if (!isGroup) return reply(mess.only.group)
            reply('*Sabrina Acha você')
            hasil = eusourandom[Math.floor(Math.random() * (eusourandom.length))]
            sabrina.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break	
case 'gplaystore':
if (isBanido) return reply(nad.banido())
sabrina.updatePresence(from, Presence.composing)


goo = body.slice(12)

try {

data = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${goo}`, {

method: 'get'

  })



teks = '*Google Play Store*\n\n'

				for (let i of data.result) {

					teks += `        ────────────────\n\n‣ *Nome* : ${i.title}\n‣ *Desenvolvedor* : ${i.developer}\n‣ *Avaliação* : ${i.rating}\n‣ *Link* : ${i.url}\n\n`

				}

				teks += `        ────────────────`

reply(teks.trim())



} catch {

  reply('Parece que o recurso está errado')

}



break            	
case 'apkpure':
if (isBanido) return reply(nad.banido())
sabrina.updatePresence(from, Presence.composing)


goo = body.slice(12)

try {

data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${goo}&apikey=apivinz`, {

method: 'get'

  })



teks = '*Apk Pure*\n\n'

				for (let i of data.result) {

					teks += `        ────────────────\n\n‣ *Nome* : ${i.title}\n‣ *Desenvolvedor* : ${i.developer}\n‣ *Avaliação* : ${i.rating}\n‣ *Link* : ${i.url}\n\n`

				}

				teks += `        ────────────────`

reply(teks.trim())



} catch {

  reply('Parece que o recurso está errado')

}



break      
				case 'term':
				if (isBanido) return reply(nad.banido())
				const cmd = body.slice(4)
				exec(cmd, (err, stdout) => {
					if (err) return sabrina.sendMessage(from, `root@${root}:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						sabrina.sendMessage(from, stdout, text)
					}
				})
				break      					
	case 'gtav':
	if (isBanido) return reply(nad.banido())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await sabrina.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	 sabrina.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Não adicione nada ao comando')
	}
	break
	case 'face':
	if (isBanido) return reply(nad.banido())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await sabrina.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 sabrina.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	}
	break							
		case 'text2gif12':
		if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply('_O texto _\n*Exemplo')
				bh = body.slice(10)
				reply(mess.wait)
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				sabrina.sendMessage(from, bh, image, {caption: 'Aqui maninha ja terminou..', quoted: mek})

				break
case 'sasap':
 		if (isBanido) return reply(nad.banido())                  
			     	if (args.length < 1) return reply(`*Sabrina precisar de um texto para a figurinha*`)
                                url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
		    		attp2 = await getBuffer(url)
			    	sabrina.sendMessage(from, attp2, sticker, {quoted: mek})
			     	break
case 'emoji':
                    if (args.length == 0) return reply(`Uso: ${prefix + comando} A pergunta\nExemplo: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=RamlanID`)
                    sabrina.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
		case 'ttp123':
		if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply(`_O texto _\n*Exemplo ${prefix}ttp123 Sabrina*`)
				ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${body.slice(6)}`)
				sabrina.sendMessage(from, ttp, sticker, {quoted: mek})
				break
		case 'alay':
		if (isBanido) return reply(nad.banido())
					 // Fix Bug By ItsmeikyXSec404				
					if (args.length < 1) return reply('Sabrina Precisar de um texto!')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=apivinz`)
					reply(data.result)
				        
					break	
case 'gayy':
if (isBanido) return reply(nad.banido())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await sabrina.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
nobg = fs.readFileSync(rano)
sabrina.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Use uma foto!')
}
break

case 'nightbeach':
if (isBanido) return reply(nad.banido())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await sabrina.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 sabrina.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('Responda com uma foto jovem!')
}
break

case 'laptop':
if (isBanido) return reply(nad.banido())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await sabrina.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 sabrina.sendMessage(from, dhehe, image, {quoted:mek})
} else {
  reply('Responda com uma foto jovem!')
}
break

case 'linephoto':
if (isBanido) return reply(nad.banido())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await sabrina.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 sabrina.sendMessage(from, hehet, image, {quoted:mek})
} else {
  reply('Responda com uma foto jovem!')
}
break

case 'raindrop':
if (isBanido) return reply(nad.banido())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await sabrina.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 sabrina.sendMessage(from, hehre, image, {quoted:mek})
} else {
  reply('Responda com uma foto jovem!')
}
break

case 'sketch':
if (isBanido) return reply(nad.banido())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await sabrina.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 sabrina.sendMessage(from, hehae, image, {quoted:mek})
} else {
  reply('Responda com uma foto jovem!')
}
break

case 'crossgun':
if (isBanido) return reply(nad.banido())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await sabrina.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  haehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
 sabrina.sendMessage(from, haehe, image, {quoted:mek})
} else {
  reply('responda a imagem jovem!')
}
break	
case 'sfire':
if (isBanido) return reply(nad.banido())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await sabrina.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  haehe = await getBuffer(`https://api-rull.herokuapp.com/api/photofunia/burning-fire?url=${anu.display_url}`)
 sabrina.sendMessage(from, haehe, image, {quoted:mek})
} else {
  reply('responda a imagem jovem!')
}
break
case 'shipp':
if (isBanido) return reply(nad.banido())
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `*CASAL DO GRUPO*!\n\n @${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break					
case 'surubao':
if (isBanido) return reply(nad.banido())
					jds = []
					const jdiii = groupMembers
					const kosss = groupMembers
                    const qua = groupMembers
					const lindy = groupMembers
					const cinco = groupMembers
					const akuuu = jdiii[Math.floor(Math.random() * jdiii.length)]
					const diaaa = kosss[Math.floor(Math.random() * kosss.length)]
					const quatro = qua[Math.floor(Math.random() * qua.length)]
					const troot = lindy[Math.floor(Math.random() * lindy.length)]	
					const cincor = cinco[Math.floor(Math.random() * cinco.length)]										
					teks = `SURUBÃO NA CASA DO ADM!!!\n\nCONVIDADOS PARA O SURUBÃO: ️@${akuuu.jid.split('@')[0]}\n@${diaaa.jid.split('@')[0]}\n@${quatro.jid.split('@')[0]}\n@${troot.jid.split('@')[0]}\n@${cincor.jid.split('@')[0]}\n\n Local: Casa do admin`
					jds.push(akuuu.jid)
					jds.push(diaaa.jid)
					jds.push(quatro.jid)
					jds.push(troot.jid)		
					jds.push(cincor.jid)										
					mentions(teks, jds, true)
					break		
case 'timer':
if (isBanido) return reply(nad.banido())

					if (args[1] == "segundos") {
						var timer = args[0] + "000"
					} else if (args[1] == "minutos") {
						var timer = args[0] + "0000"
					} else if (args[1] == "minuto") {
						var timer = args[0] + "0000"						
					} else if (args[1] == "horas") {
						var timer = args[0] + "00000"
					} else { return reply("*escolha:*\nsegundos\nminutos\nhoras") }
					setTimeout(() => {
						reply("O tempo acabou")
					}, timer)
					break				
case 'ping':   
if (isBanido) return reply(nad.banido()) 
			if (!isGroup) return reply(mess.only.group)
            const timestamp = speed();
            const latensi = speed() - timestamp
            sabrina.updatePresence(from, Presence.composing) 
		    uptime = process.uptime()
            sabrina.sendMessage(from, `_Velocidade atual da Sabrina: ${latensi.toFixed(4)} milissegundos_ ✓`, text, { quoted: mek})
            break
case 'urlimg':
if (isBanido) return reply(nad.banido())
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await sabrina.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
reply(teks)
}
break							
case 'fakemsg':
if (isBanido) return reply(nad.banido())
if (args.length < 1) return reply(`Uso :\n${prefix}fakemsg [@membro|mensagem|respostabot]]\n\nEx : \n${prefix}fakemsg @membro|oi|Sabrina`)
var gh = body.slice(7)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
sabrina.sendMessage(from, `${bot}`, text, {
  quoted: {
key: {
  fromMe: false, participant: `${mentioned}`, ...(from ? {
remoteJid: from
  }: {})
}, message: {
  conversation: `${target}`
}}})
break
case 'tageu':
if (isBanido) return reply(nad.banido())
const tagme = {
  text: `@${sender.split("@")[0]}!`,
  contextInfo: {
mentionedJid: [sender]
  }
}
sabrina.sendMessage(from, tagme, text)
break		
case 'musica':
if (isBanido) return reply(nad.banido())
     if (args.length < 1) return reply('Você precisa dizer a música')

res = (await fetchJson(`https://arugaytdl.herokuapp.com/search?q=${body.slice(6)}`, {method: 'get'}))[0]

asize = await fetchJson(`https://st4rz.herokuapp.com/api/yta?url=https://youtu.be/${res.id}`, {method: 'get'})

if (asize.filesize.replace(' MB', '')>=50||asize.filesize.endsWith('GB')){
    reply(`O limite de tamanho é 50 MB. Esse áudio possui ${asize.filesize}`)
}
else{
thumb = await getBuffer(res.thumbnail)
sabrina.sendMessage(from, thumb, image, {quoted: mek, caption: 'Sabrina Está baixando sua música!'})

rest = await fetchJson(`http://st4rz.herokuapp.com/api/yta2?url=http://youtu.be/${res.id}`, {method: 'get'})
buffer = await getBuffer(rest.result)

sabrina.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
break					               
case 'fatality':
if (isBanido) return reply(nad.banido())
reply('*🗿- AGUARDE UM INSTANTE FI*') 
fs.readdir('./gf/', async (err, files) => {
let imagens = files.filter(f => f.split('.').pop() == 'mp4')
let imagem = imagens[Math.floor(Math.random() * imagens.length)]

dua = fs.readFileSync(`./gf/${imagem}`)
var mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
    if(!mentioned||mentioned.length < 1||mentioned.length > 1) return sabrina.sendMessage(from, 'Você precisa marcar alguém para esse comando', text, {quoted: mek})
    sabrina.sendMessage(from, dua, video, {mimetype: Mimetype.gif, caption: `${pushname} *_~DEU UM FATALITY EM~_* ${body.split(' ').slice(1).join(' ')}`,quoted: mek, contextInfo: {"mentionedJid": mentioned}})

})
break      
case 'tstik':
if (isBanido) return reply(nad.banido())
				if (args.length < 1) return reply(`Texto onde?*`)
				tfig = await getBuffer(`https://st4rz.herokuapp.com/api/ttp?kata=${body.slice(6)}`)
				sabrina.sendMessage(from, tfig, sticker, {quoted: mek})
				break   
case 'sabrinaoff': //deixe-me fechar
if (isBanido) return reply(nad.banido())
const { exec } = require('child_process')
sabrina.sendMessage(from, 'Desligando...', text)
exec("CTRL + C")
break	
case 'covidbr':
if (isBanido) return reply(nad.banido())
                    exeb = body.slice(9)
                    if (args.length < 1) return reply(`*Qual o estado?`)
                   sabrina.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${exeb}`)
                   if (data.error) reply('*_Estado não encontrado_*')
                   hasil = `*INFO. COVID19*🦠\n\n*Sigla Do Estado* : *${data.uf}*\n*Estado* : *${data.state}*\n*Casos* : *${data.cases}*\n*Mortes* : *${data.deaths}*\n*Suspeitas* : *${data.suspects}*\n*Curados* : *${data.refuses}*\n*Data Atualizada* : \n*${data.datetime}*\n\n*_SABRINA_ ✨**`
                   reply(hasil) 
                   break		
case 'ban':
					if (!isOwner) return reply('Quem é Você?')			
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./gp/user/banned.json', JSON.stringify(ban))
					reply(`Número ${bnnd} banido`)
					break
				case 'unban':
					if (!isOwner) return reply('Quem é Você?')			
					ya = body.slice(8)
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./gp/user/banned.json', JSON.stringify(ban))
					reply(`Número ${ya} Desbanido!`)
					break  
				case 'send':
					var pc = body.slice(6)
					var number = pc.split(",")[0];
					var message = pc.split(",")[1];
					sabrina.sendMessage(number+'@s.whatsapp.net', message, text)
					break	
case 'letra':
                if (isBanido) return reply(nad.banido())    
                reply('Olá, Espere um pouco!')
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('*Musica : * '+teks+' *\n\n'+anu.result.lirik)
					break
case 'fantasma':
if (isBanido) return reply(nad.banido())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await sabrina.downloadAndSaveMediaMessage(encmedia)
					buzi = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${buz}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('*Ocorreu um erro, tente novamente.*')
						baah = fs.readFileSync(buzi)
						sabrina.sendMessage(from, baah, audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: mek})
						fs.unlinkSync(buzi)
					    })
				       break
case 'blub':
if (isBanido) return reply(nad.banido())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await sabrina.downloadAndSaveMediaMessage(encmedia)
					buzz = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${buzz}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('*Ocorreu um erro, tente novamente.*')
						baaah = fs.readFileSync(buzz)
						sabrina.sendMessage(from, baaah, audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: mek})
						fs.unlinkSync(buzz)
					    })
				       break			
case 'spotify':
if (isBanido) return reply(nad.banido())
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=RamlanID&url=${url}`)
                    get_result = get_result.result
                    txt = `Titulo : ${get_result.title}\n`
                    txt += `Artista : ${get_result.artists}\n`
                    txt += `Duração : ${get_result.duration}\n`
                    txt += `Popularidade : ${get_result.popularity}\n`
                    txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    sabrina.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    sabrina.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break	
		case 'covidglobal': //
		if (isBanido) return reply(nad.banido())
				reply(`Use máscara\nLave suas mãos\nMantenha uma distância segura`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidworld?apikey=onlyonedeveloper`)
				teks = `*➸ Recuperados :* ${anu.result.recovered}\n*➸ Mortes :* ${anu.result.deaths}\n*➸ Casos ativos :* ${anu.result.activeCases}\n*➸ Casos Fechados :* ${anu.result.closedCases}\n*➸ Última atualização :* ${anu.result.lastUpdate}`
				sabrina.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Corona Vírus", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/mek.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				break   
case 'baixaryt':
if (isBanido) return reply(nad.banido())
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=RamlanID&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Titulo : ${get_result.title}\n\n`
                    txt += `Postado em : ${get_result.uploader}\n\n`
                    txt += `Duração : ${get_result.duration}\n\n`
                    txt += `Views : ${get_result.view}\n\n`
                    txt += `Like : ${get_result.like}\n\n`
                    txt += `Deslike: ${get_result.dislike}\n\n`
                    txt += `Descrição :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    sabrina.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    sabrina.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.sabrina`, quoted: mek })
                    break				
 case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Modo de banimentos em números estrangeiros Ativado!\n Números como : \n*+944*\n*+1*\nEntre outros será banido!️️')
					} else if (Number(args[0]) === 0) {
                        antifake.splice(from, 1)
                    fs.writeFileSync('./src/antifake', JSON.stringify(antifake))
                    reply('Modo de Banimentos em números estrangeiros desativado!️')
                    } else {
                    reply('1 para ativar, 0 para desativar')
                    }
					} catch {
				    reply('Deu erro, tente novamente :/')
					}
                    break                       
case 'clima': 
				case 'clina':
if (isBanido) return reply(nad.banido())
		      lucasss = body.slice(7)
		      reply(mess.wait)
              anu = await fetchJson(`http://wttr.in/${lucasss}?format=j1`, {method: 'get'})
                    kiny = `*_Clima De ${lucasss}_*\n\n*${anu.value}\n\n*Humidade : ${anu.current_condition.humidity}\n\n*`
                    buffer = await getBuffer(anu.screenshot)
                    sabrina.sendMessage(from, text, image, {quoted: mek, caption: kiny})
                    break            
case 'clima2':
				case 'clin2a':
if (isBanido) return reply(nad.banido())
		      lucasss = body.slice(7)
              anu = await fetchJson(`http://wttr.in/${lucasss}?format=j1`, {method: 'get'})
                    kiny = `*_Clima De ${lucasss}_*\n\n*_Humidade Dessa Porra Seu FDP : ${anu.current_condition.humidity}\n\n*Lucasssメ DOMINA 🐊🚩*`
                    sabrina.sendMessage(from, text, {quoted: mek, caption: kiny})
                    await limitAdd(sender)
                    break                    
case 'tmgp':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await sabrina.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							sabrina.sendMessage(_.jid, buff, image, {caption: `*「 Transmissão Sabrina 」*\n\n Grupo : ${groupName}\nRemetente : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 Transmissão Sabrina 」*\n\n Grupo : ${groupName}\n\nQuem Enviou : wa.me/${(sender.split('@')[0])}\n\n ${body.slice(6)}`)
						}
						reply('Grupo de transmissão bem-sucedido')
					}
					break   
case 'nickger': 
            sabrina.updatePresence(from, Presence.composing)
		    sabrina.updatePresence(from, Presence.composing) 
		    data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
			teks = '        ────────────────\n\n'
			for (let i of data.result) {
			teks += `• NickName Gerado : ${i}\n        ────────────────\n\n`
			}
		    reply(teks.trim())
			break					                               			       		                 	     	   			        					  				   	                   																		    									   				                           														       								
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('AVISO]','red'), 'Comando não registrado de', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
