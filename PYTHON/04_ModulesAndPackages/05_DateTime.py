import datetime

unixtime1 = 1514735577.775000000000
unix_timestamp_plus_5_min = unixtime1 + (6 * 60) #6분후
print("unix_timestamp_plus_5_min",unix_timestamp_plus_5_min)


a = 1514734859.55
b = 1514735272.40
datetimeobj1 = datetime.fromtimestamp(a).strftime('%H:%M:%S')
datetimeobj2 = datetime.fromtimestamp(b).strftime('%H:%M:%S')

print("datetimeobj1",datetimeobj1) #00:40:59
print("datetimeobj2",datetimeobj2) #00:47:52




unixtime2 = 1514736004.200000000000
datetimeobj1 = datetime.fromtimestamp(unixtime1).strftime('%H:%M:%S')
datetimeobj2 = datetime.fromtimestamp(unixtime2).strftime('%H:%M:%S')

print("datetimeobj1",datetimeobj1) #00:52:57
print("datetimeobj2",datetimeobj2) #01:00:04