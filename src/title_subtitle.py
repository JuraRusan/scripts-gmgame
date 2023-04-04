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
# command = 'echo "title @a times 20 100 20" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

#---------- за 60 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 60 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 60 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 60 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 60 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 60 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)
# command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 60 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(30)
#---------- за 30 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 30 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 30 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 30 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 30 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 30 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a title {\"text\":\"АВТО-РЕСТАРТ\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)
# command = 'echo "title @a subtitle {\"text\":\"Перезагрузка через 30 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(20)
#---------- за 10 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 10 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 10 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 10 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 10 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 10 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 10 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(1)
#---------- за 9 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 9 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 9 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 9 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 9 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 9 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 9 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(1)
#---------- за 8 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 8 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 8 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 8 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 8 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 8 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 8 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(1)
#---------- за 7 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 7 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 7 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 7 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 7 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 7 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 7 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(1)
#---------- за 6 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 6 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 6 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 6 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 6 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 6 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 6 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(1)
#---------- за 5 секунд до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 5 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 5 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 5 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 5 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 5 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 5 секунд!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(1)
#---------- за 4 секунды до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 4 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 4 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 4 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 4 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 4 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 4 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(1)
#---------- за 3 секунды до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 3 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 3 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 3 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 3 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 3 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 3 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(1)
#---------- за 2 секунды до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 2 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 2 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 2 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 2 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 2 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 2 секунды!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)

time.sleep(1)
#---------- за 1 секунду до рестарта

#----------------------------------------- gmgame
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 1 секунду!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d",pty STDIN'
os.system(command)
#----------------------------------------- farm
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 1 секунду!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 013aaa06-2969-4338-9097-2caae1853916",pty STDIN'
os.system(command)
#----------------------------------------- res
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 1 секунду!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach aa146230-f115-4450-8175-e50a7c12701f",pty STDIN'
os.system(command)
#----------------------------------------- creative
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 1 секунду!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d",pty STDIN'
os.system(command)
#----------------------------------------- lobby
command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 1 секунду!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094",pty STDIN'
os.system(command)
#----------------------------------------- skyblock
# command = 'echo "title @a actionbar {\"text\":\"Перезагрузка через 1 секунду!\",\"color\":\"#08b7f7\"}" | socat EXEC:"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e",pty STDIN'
# os.system(command)
