## Pm2 common script


command | usage
--------|------
pm2 status| see all process running and its status
pm2 logs id | see log of process with its name or id
pm2 delete id | delete process with its id
pm2 start app.js --name `<name>` | run process with specific name 
pm2 restart id | restart process with its id or name
pm2 reload id | reload process with its id
pm2 stop id | stop process with its id
pm2 restart/stop all | start or stop all process
pm2 monit | see pm2 monitoring dashboard in realtime
pm2 start pm2-apps-config.json | Start multiple application
pm2 resstart pm2-apps-config.json | Restart multiple application
pm2 save | Save current process list
pm2 startup| ...
pm2 unstartup launchd| Remove init script