# Session: Python 基础课程

## Learner Profile
- **背景**: 4 年半前端开发经验
- **Python 水平**: 0 基础，有 CV 经验
- **已诊断技能**:
  - 安装过 Python
  - 运行过 Python 脚本
  - 理解 REPL 概念
  - 理解 Python 与 Node.js 命令类比

## Concept Map
| # | Concept | Prerequisites | Status | Score | Last Reviewed | Review Interval |
|---|---------|---------------|--------|-------|---------------|-----------------|
| 1 | Python 环境搭建 | - | mastered | 100% | 2026-03-12 | 1d |
| 2 | 基本语法 | 1 | mastered | 100% | 2026-03-12 | 1d |
| 3 | 数据类型 | 2 | mastered | 100% | 2026-03-12 | 1d |
| 4 | 容器类型 | 3 | mastered | 100% | 2026-03-12 | 1d |
| 5 | 类型转换 | 3 | mastered | 100% | 2026-03-12 | 1d |
| 6 | 运算符 | 3 | mastered | 100% | 2026-03-12 | 1d |
| 7 | 控制流 | 2 | not-started | - | - | - |
| 8 | 循环结构 | 2 | mastered | 100% | 2026-03-12 | 1d |
| 9 | 函数 | 2 | mastered | 100% | 2026-03-12 | 1d |
| 10 | 函数参数 | 9 | not-started | - | - | - |
| 11 | 常用内置函数 | 2 | not-started | - | - | - |
| 12 | 字符串处理 | 2 | not-started | - | - | - |
| 13 | 列表操作 | 4 | not-started | - | - | - |
| 14 | 推导式 | 8 | not-started | - | - | - |

## Misconceptions
| # | Concept | Misconception | Root Cause | Status | Counter-Example Used |
|---|---------|---------------|------------|--------|---------------------|
| 1 | 基本语法 | "else if" 写法 | JS 习惯影响 | resolved | Python 用 elif |
| 2 | 基本语法 | 条件后缺少冒号 | 忘记 Python 语法规则 | resolved | if/elif/else 后必须加 : |
| 3 | 容器类型 | 字典用点语法访问 | JS 对象习惯影响 | resolved | Python 字典用 ['key'] |
| 4 | 容器类型 | 方法名大写 Append | 大小写习惯 | resolved | Python 方法用小写 |
| 5 | 类型转换 | list('abc') 结果 | 不理解可迭代对象拆分 | resolved | list() 会拆分字符串为字符列表 |
| 6 | 类型转换 | float+int 会报错 | 混淆强类型与数值运算 | resolved | 数值类型间可运算，int 提升为 float |
| 7 | 元组 | 单元素元组语法 | 不理解逗号的作用 | resolved | (42,) 才是元组，(42) 是整数 |
| 8 | 列表 | append 返回值 | 以为返回新列表 | resolved | append 返回 None，原地修改 |
| 9 | 字典 | get() 会修改字典 | 以为 get 会添加键 | resolved | get 不修改字典，setdefault 才会 |
| 10 | 函数 | 可变默认参数 | 默认参数被重用 | resolved | 用 None 作为默认值 |

## Session Log
- [2026-03-12] 开始诊断
- [2026-03-12] 概念 1-6：已掌握 (环境搭建、基本语法、数据类型、容器类型、类型转换、运算符)
- [2026-03-12] 概念 8：循环结构 - 已掌握 (100%)
- [2026-03-12] 概念 9：函数 - 已掌握 (100%)
- [2026-03-12] 会话暂停 - 用户要求保存进度

---
**会话暂停** - 用户要求保存进度

## 已生成笔记文件
1. `1.Python 环境搭建.md`
2. `2.基本语法.md`
3. `3.数据类型.md`
4. `4.1 列表 (list).md`
5. `4.2 元组 (tuple).md`
6. `4.3 字典 (dict).md`
7. `4.4 集合 (set).md`
8. `8.循环结构.md`
9. `9.函数 (function).md`

## 下一步学习建议
1. 模块 7：控制流 (if/elif/else)
2. 模块 10：函数参数 (*args, **kwargs)
3. 模块 11：常用内置函数
4. 模块 12：字符串处理
