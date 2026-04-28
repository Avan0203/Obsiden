# pnpm 使用指南

## 一、pnpm 是什么

pnpm（Performant npm）是一个高性能的 Node.js 包管理工具，旨在解决 npm / yarn 在依赖管理中的性能和磁盘占用问题。

它的核心特点是：

- **内容寻址存储（Content-addressable storage）**
- **硬链接 / 符号链接复用依赖**
- **严格的 node_modules 结构**

---

## 二、pnpm vs npm vs yarn

### 1. 安装机制对比

| 特性         | npm        | yarn       | pnpm                |
| -------------- | ------------ | ------------ | --------------------- |
| 依赖存储     | 扁平化复制 | 扁平化复制 | 全局 store + 硬链接 |
| node_modules | 非严格     | 非严格     | 严格（隔离）        |
| 磁盘占用     | 高         | 较高       | 极低                |
| 安装速度     | 较慢       | 较快       | 非常快              |

![三种尺寸对比](assets\20260320_111701_image.png)

---

### 2. node_modules 结构差异

#### npm / yarn（扁平结构）

```bash
node_modules/
  react/
  lodash/
```

问题：

- 可能出现 **幽灵依赖（Phantom dependency）**
- 依赖污染（你没装的包也能用）

---

#### pnpm（严格结构）

```bash
node_modules/
  .pnpm/
    react@18.0.0/
    lodash@4.17.21/
  react -> .pnpm/react@18.0.0/node_modules/react
```

特点：

- 每个包依赖是 **隔离的**
- 不允许未声明依赖被使用

---

### 3. 核心区别总结

| 维度          | npm / yarn | pnpm       |
| --------------- | ------------ | ------------ |
| 依赖隔离      | ❌         | ✅         |
| 磁盘优化      | ❌         | ✅（复用） |
| 安装性能      | 一般       | 极快       |
| Monorepo 支持 | 一般       | 强         |

---

## 三、pnpm 的核心优势

### 1. 🚀 安装速度快

原因：

- 依赖下载后存入 **全局 store**
- 项目通过 **硬链接**复用

👉 第二次安装几乎是瞬间完成

---

### 2. 💾 极低磁盘占用

多个项目共享依赖：

```bash
~/.pnpm-store
```

所有项目不会重复安装依赖

---

### 3. 🔒 严格依赖管理

pnpm 不允许：

```js
// ❌ 没安装却能用（npm/yarn可能允许）
require('lodash')
```

必须：

```bash
pnpm add lodash
```

👉 避免线上问题（非常关键）

---

### 4. 📦 原生支持 Monorepo

pnpm 对 workspace 支持非常强：

- 依赖自动链接
- 支持跨包引用
- 构建效率高

---

## 四、pnpm 基础使用

### 1. 安装 pnpm

```bash
npm install -g pnpm
```

或：

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

---

### 2. 初始化项目

```bash
pnpm init
```

---

### 3. 安装依赖

1. 常用参数

1️⃣ -P（生产依赖，默认）

```bash
pnpm add lodash
# 等同于
pnpm add lodash -P
```

👉 当前 package：

```json
"dependencies": {
  "lodash": "^4.x"
}
```

2️⃣ -D (devDependencies)

```bash
pnpm add xxxx -D
```

3️⃣ -W (根目录的pkg安装)

```bash
pnpm add xxxx -W
```

甚至可以连起来使用

```bash
pnpm add xxxx -D -W

# 例如 只放“全局工具链”
pnpm add -D -W typescript vite eslint prettier
```

4️⃣ --filter

安装依赖

```bash
# 项目根目录
pnpm add three --filter @my/viewer

#等同于
cd packages/viewer
pnpm add three
```

只构建某个包

```bash
# 项目跟目录
pnpm --filter @my/app build
# 等同于
cd packages/app
pnpm run build
```

---

### 4. 删除依赖

```bash
pnpm remove lodash
```

---

### 5. 安装全部依赖

```bash
pnpm install
```

---

### 6. 运行脚本

```bash
pnpm run dev
pnpm start
```

---

### 7. 查看依赖结构

```bash
pnpm list
```

---

## 五、pnpm Workspace 使用

### 5.1 配置 Monorepo

pnpm 在 Monorepo 场景非常强大。

假设当前目录结构如下

```bash
my-project/
  packages/
    app/
    ui/
  pnpm-workspace.yaml
  package.json
```

配置 pnpm-workspace.yaml

```yaml
packages:
  - "packages/*"
```

👉 表示所有子包都会被管理

例如：

```json
// packages/ui/package.json
{
  "name": "@my/ui",
  "version": "1.0.0"
}
```

```json
//packages/app/package.json
{
  "dependencies": {
    "@my/ui": "workspace:*"
  }
}
```

最后安装依赖

```bash
pnpm install
```

👉 自动：

- 建立软链接
- 连接 workspace 内部包

---

### 5.2 配置全局依赖

在大型的Monorepo中多个包采用相同版本的依赖就可以使用

```yaml
# pnpm-workspace.yaml
catalog:
  vue: ^3.5.0
  typescript: ^5.3.0
  three: ^0.183.0
```

然后在 package.json 里：

```json
{
  "dependencies": {
    "vue": "catalog:",
    "three": "catalog:"
  }
}
```

#### ✅ 作用
- 统一版本管理（类似“软锁版本中心”）
- 所有包共享版本
- 避免版本漂移（尤其是 three.js / ts 这种）

##### ⚠️ 对比传统方式

###### ❌ 以前

```json
"vue": "^3.4.0"
```

多个 package 容易版本不一致

###### ✅ 现在

```json
"vue": "catalog:"
```

👉 真正的单点控制

---

## 六、pnpm 常用技巧

### 1. 查看 store 路径

```bash
pnpm store path
```

---

### 2. 清理缓存

```bash
pnpm store prune
```

---

### 3. 强制重新安装

```bash
pnpm install --force
```

---

### 4. 只安装生产依赖

```bash
pnpm install --prod
```

---

## 七、适用场景总结

### 推荐使用 pnpm 的场景

- Monorepo（强烈推荐）
- 多项目共享依赖
- CI/CD 加速
- 大型前端工程

---

## 八、总结

pnpm 本质解决了三个核心问题：

1. **性能问题**（安装快）
2. **磁盘浪费问题**（共享依赖）
3. **依赖安全问题**（严格隔离）

相比 npm / yarn：

👉 pnpm 更适合现代前端工程体系（尤其是大型项目 + Monorepo）

---
