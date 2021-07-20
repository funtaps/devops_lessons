Где взять ноду?
```
sudo apt install nodejs
```

Куда добавлять конфиг для systemd?
```
/etc/systemd/system
```

А нету на серваке файлового менеджера визуального?
`mc`
А нету на серваке текстового редактора попроще?
`tilde`
А нельзя менять всё локально и отправлять на сервак?
```
rsync -azvr --progress --exclude '.git*' --delete . UserName@10.4.89.666:/home/USERNAME/devops_lessons
ssh UserName@10.4.89.666
sudo ln -s /home/USERNAME/devops_lessons/some_file /etc/configs/some_file
```