# Code Snippets Manager

Code Snippets Manager 是一个简单而强大的桌面应用程序，用于存储和管理经常使用的代码或文本片段。

## 功能特点

- 存储和管理代码片段和文本片段
- 通过标签对片段进行分组和组织
- 支持新增标签和片段
- 双击修改标签名称
- 拖拽片段以修改所属标签
- 右键菜单支持删除标签和片段
- 快速搜索功能，方便查找所需片段

## 技术栈

- React: 用于构建用户界面
- Electron: 实现跨平台桌面应用
- Zustand: 状态管理
- SQLite: 本地数据存储
- Vite: 项目构建和开发工具
- JavaScript: 主要编程语言

## 安装

1. 克隆仓库:

   ```bash
   git clone https://github.com/your-username/code-snippets-manager.git
   ```

2. 进入项目目录:

   ```bash
   cd code-snippets-manager
   ```

3. 安装依赖:

   ```bash
   npm install
   ```

4. 运行应用:
   ```bash
   npm run dev
   ```

## 使用说明

1. 启动应用后，您可以看到主界面，左侧是标签列表，右侧是片段列表。
2. 点击 "+" 按钮添加新的标签或片段。
3. 双击标签名称可以进行修改。
4. 拖拽片段到其他标签可以更改其分组。
5. 右键点击标签或片段可以删除它们。
6. 使用顶部的搜索栏快速查找所需的片段。

## 配置

在设置页面，您可以:

- 自定义快捷键
- 设置数据库存储位置

## 贡献

欢迎提交问题和拉取请求。对于重大更改，请先开 issue 讨论您想要改变的内容。

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)
