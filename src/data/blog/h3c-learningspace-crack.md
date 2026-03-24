---
title: 全网首发 H3C（新华三）LearningSpace 学生端解控（破解）教程
description: H3C LearningSpace 学生端解控教程，通过 SSH 连接 Linux 主机关闭 screenreceiver 进程，实现投屏解除控制。
pubDatetime: 2024-10-19T14:17:00Z
author: Wqchnggyu
tags:
  - H3C
  - LearningSpace
  - 教程
  - Linux
  - SSH
---

> 📌 本文转载自 B 站专栏，原作者：**一坨懒鸽子**
> 原文链接：[https://www.bilibili.com/read/cv39498988](https://www.bilibili.com/read/cv39498988)

## 全网首发H3C Learning Space学生端解控教程

注明：操作环境我们学校机房，此破解方法只保证在我们学校机房可以使用，其他使用H3C方案的机房不保证可以使用，如果有更好的方案欢迎分享，欢迎在评论区查缺补漏。

此破解方法弊端： 需要一定Linux操作基础，对指令有一定了解，熟练掌握Windows SSH连接主机，Linux主机尽量使用固定IP，sudo无密码，未改动过初始密码。最好在投屏前使用。

> ⚠️ **免责声明**：本教程仅供学习交流使用，使用风险由使用者本人承担。

---

## 准备工作

1. **目标Linux主机ip地址**

   在Linux终端使用 `sudo ifconfig` 即可查看IP

2. **spaceos用户密码**

---

## 方案一：拔网线（风险高，但成功率高）

在投屏进程开启后，将一台被控制主机的网线拔掉，按动主机盒（非显示器）上关机按钮，进入Linux操作系统后迅速点击左下角菜单，系统工具→LX终端，打开后迅速将打开左下角菜单等待学生端进程出现登陆界面时，再次点击系统工具→LX终端，接入网线，按照如下流程进行操作。（对于本机可省略前三步）

1. 输入 `ssh spaceos@192.168.xxx.xx`（目标主机IP）
2. 弹出保存密钥界面输入 `yes`
3. 输入spaceos用户默认密码 `User@1234`
4. 成功登陆后输入 `netstat -tulpn`（查看端口，也可使用 `sudo ps -aux` 查看目标进程PID）
5. 寻找 `screenreceiver` 进程对应的PID
6. 使用 `kill -9 [PID]` 关闭进程
7. 成功破解。

---

## 方案二：盲操（风险低，但成功率低）

这一种方法不需要拔掉网线、但对Windows、Linux操作需要非常熟悉，对时间的把控也高。

1. 在投屏界面上按下 `Win+R` 键，输入 `cmd` 回车
2. 输入 `ssh spaceos@192.168.xxx.xx`（目标主机IP）
3. 弹出保存密钥界面输入 `yes`
4. 输入spaceos用户默认密码 `User@1234`
5. 使用 `pkill screenreceiver` 或者 `killall screenreceiver` 关闭进程
6. 成功破解。

---

## 原理

H3C方案将投屏作为进程发送到学生端，我们只需要关闭相应进程就可破解。

---

## 永久破解

输入：

```
sudo systemctl enable(开启)/disable(关闭) StudentAgent（或全小写）
```

关闭后需重启，进入LXDE桌面环境后方可自由操作。

由于服务监听IPv6，所以也可在查看相应端口后使用 `ip6tables` 禁用相应端口，建议在使用完成后恢复。

注：

- `studentagent`：主进程，守护进程，关闭后似乎不影响Windows界面存活，影响其启动
- `student`：Windows投屏进程
- `screenreceiver`：教师端投屏进程

---

*原作者：一坨懒鸽子 | 发布于哔哩哔哩专栏 | 本文禁止转载或摘编*
