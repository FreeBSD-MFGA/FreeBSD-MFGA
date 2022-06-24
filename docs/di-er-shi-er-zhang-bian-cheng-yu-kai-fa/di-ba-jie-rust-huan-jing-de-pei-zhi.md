# 第八节 Rust/Go 环境的配置

## 安装 Rust 语言

以下安装方式二选一

### FreeBSD 打包

`# pkg install rust`

### Rust 官方打包（不建议）

- 安装：`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
- 升级： `cd ~` `./.cargo/bin/rustup update`
- 删除： `./cargo/bin/rustup self uninstall`

安装成功后，输入 `rustc --version` 或 `cargo --version` 查看软件版本。

### 为美好的世界献上祝福

`cd ~`

`mkdir projects && cd projects`

`cargo new greeting`

`cd greeting`

`ee src/main.rs`

添加如下文本：

```
fn main() {
    println!("Hello, world!");
}
```

保存后，运行 `cargo run` 即可输出代码。

## 安装 Go 语言

以下安装方式二选一

### FreeBSD 打包

`# pkg install go`

### Golang 官方打包（不建议）：

- 下载二进制包：[下载地址](https://golang.google.cn/dl/) 
> 选择 `goXXX.freebsd-amd64.tar.gz` 或 `goXXX.freebsd-386.tar.gz` 软件包。

- 解压二进制包：以 amd64 架构为例，终端代码如下
> `tar -C /usr/local -xzf https://golang.google.cn/dl/go1.18.1.freebsd-amd64.tar.gz`

- 添加环境变量： 
> 文本模式打开 `.profile`， 添加一行 `export PATH=$PATH:/usr/local/go/bin`

安装成功后，输入 `go version` 查看软件版本。

### 为美好的世界献上祝福

新建名为 `helloWorld.go` 的文本，添加如下内容：

```
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

保存后，在终端运行 `go run helloWorld.go ` 即可输出代码。
