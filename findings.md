# 发现与决策

## 需求
- 用户要求更新教程，重点处理功能缺失、内容错误和未补全章节。
- 当前仓库同时包含 `docs/claude-code` 与 `docs/openclaw` 两套文档，需先判定本轮修订范围。

## 研究发现
- 项目根目录当前不存在 `task_plan.md`、`findings.md`、`progress.md`，已补建。
- 仓库现有文档结构较完整，但 Claude Code 部分存在明显版本漂移：安装方式、命令表、Plugins、Remote Control、Channels、计划任务、模型配置等内容与当前官方文档不完全一致。
- 当前 Claude Code 官方文档站已迁移到 `code.claude.com/docs`，原 `docs.anthropic.com/.../claude-code/*` 会跳转过去。
- `README.md` 中“Claude Code 已切换到原生安装，**不再需要 Node.js**”表述过满。当前官方口径是：
  - 标准安装仍支持 `npm install -g @anthropic-ai/claude-code`，需要 Node.js 18+
  - 同时存在原生二进制安装（beta / 改进安装路径）
- 当前官方内置命令表远比仓库中的命令覆盖更广，且部分命令状态已变化：
  - 已确认存在：`/btw`、`/chrome`、`/config`、`/desktop`、`/diff`、`/extra-usage`、`/fast`、`/install-github-app`、`/install-slack-app`、`/keybindings`、`/mobile`、`/powerup`、`/reload-plugins`、`/remote-control`、`/remote-env`、`/security-review`、`/tasks`、`/theme`、`/ultraplan`、`/upgrade`、`/usage`、`/voice` 等。
  - `/review` 已弃用，官方建议安装 `code-review@claude-plugins-official`。
  - `/pr-comments` 已在 v2.1.91 移除。
  - `/vim` 已在 v2.1.92 移除，改由 `/config` 中切换编辑模式。
  - `/loop` 出现在 slash 菜单中，但官方将其归为 bundled skill，而不是固定逻辑的 built-in command。
- 仓库当前缺失的官方专题级内容至少包括：
  - 模型配置（`model` / `availableModels` / `opusplan` / 1M context / effort）
  - Remote Control
  - Channels
  - 计划任务与 `/schedule`、`/loop`、`CronCreate/CronList/CronDelete`
- 本轮已新增专题文档：
  - `docs/claude-code/13-Remote-Control完整指南.md`
  - `docs/claude-code/14-Channels与计划任务完整指南.md`
- 本轮已修订的入口 / 核心文档：
  - `README.md`
  - `docs/claude-code/快速导航卡.md`
  - `docs/claude-code/01-Claude-Code完整安装指南.md`
  - `docs/claude-code/02-基础使用完整指南.md`
  - `docs/claude-code/03-Commands系统完整指南.md`
  - `docs/claude-code/08-Plugins生态完整指南.md`
- Plugins 章节已有较多修订，但仍需校正为官方口径：
  - 官方市场默认可用
  - `/plugin` 是主入口
  - `/reload-plugins` 是当前生效路径的一部分
  - 插件命名空间、LSP code intelligence、安装 scope、manifest 可选性需要更精确表述

## 技术决策
| 决策 | 理由 |
|------|------|
| 先阅读 README 与目录级文档 | 先识别教程承诺范围与信息架构 |
| 官方核对优先使用一手资料 | 减少功能描述错误和版本漂移 |
| 本轮优先修订 Claude Code 文档 | 该部分已定位到大量可证实的版本漂移，收益最高 |
| OpenClaw 本轮只做 README 层联动，不做深度技术改写 | 尚未完成源码 / 官方资料核对，避免误改 |

## 遇到的问题
| 问题 | 解决方案 |
|------|---------|
| 文档量较大，无法逐行全量校对 | 优先修复高漂移、高入口价值文档，再补缺失专题 |
| 官方功能演进速度快，旧认知容易误导 | 以当前官方文档站 `code.claude.com/docs` 为准做差量同步 |
| 工作区原本已存在大量未提交文档改动 | 本轮只聚焦并说明自己实际修订的文件，不回滚其他变更 |

## 资源
- 技能：`planning-with-files-zh`
- 仓库文件清单：`docs/claude-code/*`、`docs/openclaw/*`
- Claude Code 官方文档：
  - 安装 / CLI / 内置命令 / 交互模式 / Checkpointing
  - Settings / Model configuration / Hooks / Plugins / Plugins reference
  - Remote Control / Channels / Scheduled tasks / Agent teams / GitHub Actions

## 视觉/浏览器发现
- Claude Code 当前文档信息架构已明显分层：
  - `Reference`：CLI / commands / interactive mode / hooks / plugins reference / channels reference
  - `Configuration`：settings / terminal / model config / voice / output styles / status line
  - `Automation`：hooks / channels / scheduled tasks / programmatic usage
  - `Platforms and integrations`：Remote Control / Desktop / Chrome / Computer use / Slack / IDE

---
*每执行2次查看/浏览器/搜索操作后更新此文件*
*防止视觉信息丢失*
