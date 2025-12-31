# emsdk的安装使用与更新

## 安装环境

* python: 3.9+

![](assets\20251231_103603_image.png)

## 安装

### 1.github clone代码

```bash
# Get the emsdk repo
git clone https://github.com/emscripten-core/emsdk.git

# Enter that directory
cd emsdk
```

### 2.安装最新版本

```bash
# Download and install the latest SDK tools.
./emsdk install latest

# Make the "latest" SDK "active" for the current user. (writes .emscripten file)
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh
```

安装好后如图

![](assets\20251231_105038_image.png)

![](assets\20251231_105343_image.png)

> SSL 安装报错处理
>
> ![](assets\20251231_103920_image.png)
>
> 在emsdk.py中添加以下代码
>
> ```py
> import ssl
>  
> ssl._create_default_https_context = ssl._create_unverified_context
> ```

### 3.添加环境变量

添加环境变量

![](assets\20251231_113719_image.png)

![](assets\20251231_113849_image.png)

新启终端执行

```bash
emcc -v
```

![](assets\20251231_114041_image.png)

安装完成

## 更新

```bash
# 在emsdk的安装目录下

# Fetch the latest registry of available tools.
./emsdk update

# Download and install the latest SDK tools.
./emsdk install latest

# Set up the compiler configuration to point to the "latest" SDK.
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh
```

## 使用

新建文件hello.cpp

```c++
// hello.cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "hello, world!" << endl;
    return 0;
}
```

终端执行

```bash
emcc .\hello.cpp
```

会输出

![](assets\20251231_133104_image.png)

执行

```bash
node a.out.js
```

![](assets\20251231_133228_image.png)

---

参考

* [emsdk官网网址](https://emscripten.org/docs/getting_started/downloads.html)
