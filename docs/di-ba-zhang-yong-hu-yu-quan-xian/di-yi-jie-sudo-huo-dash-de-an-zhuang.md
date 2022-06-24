# 第一节 sudo

## 安装

>OpenBSD 认为该软件漏洞太多，自行开发了 [doas](https://man.openbsd.org/doas),FreeBSD) （FreeBSD 也可以用），FreeBSD 则因为其许可证与 BSD 许可证不兼容因此没有预置。


FreeBSD 基本系统默认不自带 `sudo` 命令，需要使用 `root` 权限自行安装：

```
# pkg install sudo
```

## sudo 免密码


在 `/usr/local/etc/sudoers.d/` 下新建两个文件 `username`（需要免密码的用户）和 `wheel`：

  - 文件 `username`内容如下：

```
%admin ALL=(ALL) ALL
```

  - 文件 `wheel` 内容如下：

多加一行 `NOPASSWD:` ，使用 `sudo` 时不需要输入密码：

```
%wheel ALL=(ALL) NOPASSWD:ALL
```

