import os
import time

#---------- Установка длительности тайтла

#----------------------------------------- gmgame
command = 'echo "title @a times 20 100 20" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a times 20 100 20" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a times 20 100 20" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a times 20 100 20" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a times 20 100 20" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo "title @a times 20 100 20" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

#---------- за 60 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 60 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 60 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 60 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 60 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 60 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 60 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(30)
#---------- за 30 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 30 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 30 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 30 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 30 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 30 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a title [{"text":"\u0410\u0412\u0422\u041e-\u0420\u0415\u0421\u0422\u0410\u0420\u0422","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)
command = 'echo """title @a subtitle [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 30 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(20)
#---------- за 10 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 10 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 10 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 10 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 10 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 10 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 10 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(1)
#---------- за 9 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 9 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 9 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 9 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 9 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 9 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 9 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(1)
#---------- за 8 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 8 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 8 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 8 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 8 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 8 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 8 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(1)
#---------- за 7 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 7 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 7 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 7 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 7 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 7 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 7 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(1)
#---------- за 6 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 6 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 6 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 6 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 6 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 6 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 6 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(1)
#---------- за 5 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 5 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 5 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 5 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 5 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 5 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 5 \u0441\u0435\u043a\u0443\u043d\u0434!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(1)
#---------- за 4 секунды до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(1)
#---------- за 3 секунды до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 3 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 3 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 3 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 3 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 3 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 3 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(1)
#---------- за 2 секунды до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 2 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 2 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 2 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 2 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 2 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 2 \u0441\u0435\u043a\u0443\u043d\u0434\u044b!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)

time.sleep(1)
#---------- за 1 секунду до рестарта

#----------------------------------------- gmgame
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443!","color":"#08b7f7"}]""" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443!","color":"#08b7f7"}]""" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443!","color":"#08b7f7"}]""" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
command = 'echo """title @a actionbar [{"text":"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443!","color":"#08b7f7"}]""" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
os.system(command)
