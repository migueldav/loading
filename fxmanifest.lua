fx_version 'cerulean'
game 'gta5'

description 'qb-loading'
version '1.2.0'

client_script 'client/client.lua'

files {
  'assets/*',
  'index.html',
  'styles.css',
  'app.js'
}

loadscreen {
  'html/index.html'
}

loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'

lua54 'yes'
