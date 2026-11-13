// dsh-plugin-model-capability — Web client half (hand-maintained source).
//
// The page is one plain-JS module so it needs no build step: React and
// react-dom come from the browser module table, and every control is either a
// native element or markup styled with the DSH theme tokens.
window.__ModuleLoader__.load({
  id: "dsh-plugin-model-capability",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    var React = require("react");
    var ReactDOM = require("react-dom");
    var h = React.createElement;

    // ---------------------------------------------------------------------
    // Copy
    // ---------------------------------------------------------------------
    var en = {
      nav: "Model capability",
      title: "Model capability",
      subtitle: "Set thinking levels, context and output limits, input modalities and gateway compatibility for each model route. Changes are saved to the active DSH profile and checked by the Host.",
      statusWritable: "Editable · route fields save on change",
      statusReadonly: "Read-only",
      readOnlyWhy: "Read-only: this page is not opened through loopback, or the Host did not grant write access.",
      statusMemory: "This browser cannot persist settings (loopback access required).",
      language: "Language",
      langFollow: "Follow DSH",
      langEn: "English",
      langZh: "中文",
      checkTitle: "Configuration check",
      checkIssues: "{count} suggestion(s)",
      checkOk: "No suggestions",
      checkShow: "Review",
      checkHide: "Hide",
      routesTitle: "Model routes",
      routesIntro: "Routes come from the llm-pi-ai settings. Expand a route to edit its models, defaults and gateway compatibility.",
      routeCount: "{count} route(s)",
      noRoutes: "No model routes yet.",
      noRoutesHint: "Add a provider under Settings → Models first, or inject one with Kakou / cc switch, then reopen this page.",
      modelsCount: "{count} model(s)",
      localGateway: "Local gateway",
      remoteGateway: "Remote gateway",
      tabModels: "Models",
      tabProvider: "Connection",
      tabCompat: "Compatibility",
      tabAdvanced: "Advanced",
      modelHint: "Model fields are stored in llm-pi-ai.providers.<route>.models. Without an explicit value DSH falls back to the route defaults.",
      thinkingOff: "Thinking off",
      thinkingLevels: "{count} thinking levels",
      thinkingDefault: "Thinking default",
      editModel: "Edit",
      modelDialogTitle: "Edit model",
      displayName: "Display name",
      contextWindow: "Context window",
      maxTokens: "Max output",
      capacityHint: "Number or K/M suffix, e.g. 262144, 256K, 1M",
      notSet: "Not set",
      contextShort: "context",
      outputShort: "output",
      inputModalities: "Input modalities",
      modalityText: "Text",
      modalityImage: "Image",
      thinkingTitle: "Thinking levels",
      thinkingEnable: "This model supports thinking",
      thinkingHint: "Tick the levels this model offers. “off” is always available; an empty wire value means nothing is sent.",
      reasoningFalseHint: "Turning thinking off stores reasoningEfforts: false; DSH will not offer thinking levels for this model.",
      thinkingEnableLevel: "Offer this level",
      noChanges: "No changes to save.",
      unsavedTitle: "Discard unsaved changes?",
      unsavedBody: "Model edits are written only after you press Save.",
      discard: "Discard",
      keepEditing: "Keep editing",
      saveHint: "Model fields are written when you press Save.",
      applyToAllHint: "This overwrites the other {count} model(s) in this route.",
      invalidCapacity: "Use a number or a K/M suffix, e.g. 256K.",
      invalidNumber: "Enter a number.",
      settingsRefused: "The settings service rejected this write (another window may have changed it first). Refresh and try again.",
      partialSaved: "Model saved, but applying it to the other models failed:",
      level: "Level",
      wireValue: "Wire value",
      offNoSend: "Nothing is sent",
      quickFill: "Quick fill",
      fillCurrent: "Current model",
      quickFillHint: "Vendor presets are generic and may differ from what this model actually accepts. “Current model” restores the saved levels.",
      fillDeepSeek: "DeepSeek 4 levels",
      fillOpenAI: "OpenAI 5 levels",
      fillClaude: "Claude 4 levels",
      fillQwen: "Qwen 4 levels",
      fillAll: "All 7",
      fillCustom: "Custom",
      customFillTitle: "Custom quick fill",
      customFillName: "Preset name",
      customFillNamePlaceholder: "e.g. My 4 levels",
      customFillHint: "Tick the levels and enter their wire values. The preset is saved in this browser and can be reused from Quick fill.",
      customFillSaveApply: "Save and apply",
      customFillNameRequired: "Give this preset a name.",
      applyToAll: "Also apply to every model in this route",
      compatTitle: "Gateway compatibility",
      compatIntro: "These flags describe what the gateway understands. A wrong flag is the most common cause of 400 errors.",
      compatCommon: "Common flags",
      compatMore: "More flags",
      supportsDeveloperRoleHint: "Turn this off for gateways that only understand the system role (DashScope / Kimi / Zhipu / MiniMax / SiliconFlow …).",
      compatPerModel: "Per-model compatibility",
      providerTitle: "Route basics",
      providerIntro: "These fields are shared by every model in the route.",
      baseURL: "Base URL",
      api: "API protocol",
      apiKeyEnv: "API key environment variable",
      apiKeyHint: "The key itself is supplied by DSH credentials or the environment. It is never edited or shown here.",
      routeId: "Route ID",
      localNote: "This route points to a local gateway (127.0.0.1). Tools such as Kakou (卡扣AI管家) or cc switch rewrite this route when they change models; if your edit is overwritten, pin the route in that tool first.",
      defaultsFold: "Route defaults",
      defaultsIntro: "Fallbacks used when a model or request does not declare its own value.",
      defaultContextWindow: "Default context window",
      defaultMaxTokens: "Default max output",
      defaultInput: "Default input modalities",
      reasoningDefault: "Default thinking level",
      thinkingBudgets: "Thinking budgets (chars)",
      cacheRetention: "Prompt-cache retention",
      transport: "Stream transport",
      advancedTitle: "Timeouts and headers",
      timeoutMs: "Request timeout (ms)",
      websocketConnectTimeoutMs: "WebSocket connect timeout (ms)",
      streamIdleTimeoutMs: "Stream idle timeout (ms)",
      maxRequestImageBytes: "Max request image bytes",
      requestImagePixelBudget: "Image pixel budget",
      requestImageMaxBytes: "Max inline image bytes",
      headers: "Extra request headers",
      headerKey: "Header",
      headerValue: "Value",
      addHeader: "Add header",
      saveHeaders: "Save headers",
      credentialWarning: "Credential-like headers detected: {names}. The settings service does not redact them. Use apiKeyEnv instead and rotate any exposed key.",
      rawFold: "Raw route config (read-only)",
      copy: "Copy",
      copied: "Copied",
      builtinSafeGateway: "Safe gateway",
      builtinSafeGatewaySummary: "For gateways that only accept the system role (DashScope, Kimi, Zhipu, MiniMax…). Turns the developer role off and declares reasoning support.",
      builtinOpenaiNative: "OpenAI native",
      builtinOpenaiNativeSummary: "For the official OpenAI API: developer role on, OpenAI thinking dialect and max_completion_tokens.",
      builtinDeepseekDialect: "DeepSeek dialect",
      builtinDeepseekDialectSummary: "For DeepSeek and relays that follow its thinking format: deepseek dialect, developer role on, 4 official levels.",
      builtinQwenDialect: "Qwen dialect",
      builtinQwenDialectSummary: "For Qwen / DashScope compatible endpoints: qwen thinking dialect, developer role off, 4 levels.",
      builtinMaxThinking: "Max thinking",
      builtinMaxThinkingSummary: "Declares all seven thinking levels and sets the route default to high. Use only when the gateway accepts every level.",
      builtinTextOnly: "Text only",
      builtinTextOnlySummary: "Marks every model and the route default as text-only. Hides image input in the composer.",
      builtinImageReady: "Text + image",
      builtinImageReadySummary: "Marks every model and the route default as text + image. Use for vision-capable models.",
      changeDeveloperOff: "Turn the developer role off (supportsDeveloperRole = false)",
      changeDeveloperOn: "Turn the developer role on (supportsDeveloperRole = true)",
      changeReasoningOn: "Declare reasoning_effort support",
      changeThinkingOpenai: "Set thinkingFormat = openai",
      changeMaxTokensCompletion: "Send max output as max_completion_tokens",
      changeThinkingDeepSeek: "Set thinkingFormat = deepseek",
      changeDeepSeekLevels: "Write DeepSeek's 4 official levels on every model",
      changeThinkingQwen: "Set thinkingFormat = qwen",
      changeQwenLevels: "Write Qwen's 4 official levels on every model",
      changeAllSevenLevels: "Write all seven levels (off → max) on every model",
      changeDefaultHigh: "Set the route default thinking level to high",
      changeThinkingBudgets: "Write default thinking budgets",
      changeInputText: "Set every model to text input",
      changeDefaultInputText: "Set the route default input to text",
      changeInputImage: "Set every model to text + image input",
      changeDefaultInputImage: "Set the route default input to text + image",
      presetsTitle: "Quick presets",
      presetsIntro: "Curated recipes. Pick what you need, review the exact changes, then apply them to one or more routes. You can fine-tune afterwards.",
      presetsGroupGateway: "Gateway compatibility",
      presetsGroupCapability: "Model capabilities",
      presetApply: "Apply",
      presetApplyTitle: "Apply “{name}”",
      presetChanges: "What will change",
      presetRoutes: "Apply to routes",
      presetSelectAll: "Select all",
      presetClear: "Clear",
      presetWarning: "This preset writes model-level values and replaces the current thinking levels or input modalities of the selected routes.",
      presetNoRoutes: "Select at least one route.",
      presetApplied: "Preset applied.",
      presetFailed: "The settings service rejected the preset:",
      snapshotsTitle: "Configuration snapshots",
      snapshotsIntro: "Save the current provider routes (without request headers or credentials), then restore them later in one click.",
      snapshotName: "Snapshot name",
      snapshotNamePlaceholder: "e.g. Official DeepSeek / office gateway",
      snapshotSave: "Save snapshot",
      snapshotEmpty: "No snapshots yet.",
      snapshotRoutes: "{count} route(s)",
      snapshotRestore: "Restore",
      snapshotDelete: "Delete",
      snapshotRestoreTitle: "Restore “{name}”?",
      snapshotRestoreWarn: "This replaces the whole llm-pi-ai user section with the snapshot. Routes added after the snapshot are removed. API keys are not part of the snapshot, so the current environment variables stay in use.",
      snapshotDeleteTitle: "Delete “{name}”?",
      snapshotDeleteWarn: "The snapshot is removed permanently. The current configuration is not affected.",
      snapshotSaved: "Snapshot saved.",
      snapshotDeleted: "Snapshot deleted.",
      noUserRoutes: "Nothing to save yet — no route lives in the editable settings layer.",
      syncTitle: "Sync from models.dev",
      syncIntro: "Fetch model capabilities on demand, map each local route to a models.dev provider, review the preview, then apply. Only existing models with matching IDs are updated; routes and models are never added or removed.",
      syncLoad: "Load catalog",
      syncRefresh: "Refresh catalog",
      syncLoading: "Loading…",
      syncSource_network: "models.dev live data",
      syncSource_cache: "local cache",
      syncSource_fallback: "stale local cache",
      syncFields: "Fields to update",
      syncField_name: "Display name",
      syncField_contextWindow: "Context window",
      syncField_maxTokens: "Max output",
      syncField_input: "Input modalities",
      syncField_reasoningEfforts: "Thinking levels",
      syncReasoningHint: "Thinking sync is conservative and off by default. It only maps explicit effort values; unknown formats keep the current value.",
      syncRouteMapping: "Route → models.dev provider",
      syncDoNotSync: "Do not sync this route",
      syncPreview: "Preview: {matchedModels} matched, {changedModels} would change, {unmatchedModels} unmatched across {selectedRoutes} selected routes.",
      syncSkippedReasoning: "{count} thinking entries have no safe mapping and stay unchanged.",
      syncApply: "Apply preview",
      syncApplied: "Updated {count} models from models.dev.",
      syncFailed: "models.dev sync was rejected:",
      syncUnavailable: "Could not load the catalog; nothing was changed.",
      syncStale: "models.dev is unavailable; the last local cache is shown.",
      diagTitle: "Configuration suggestions",
      diagNone: "No suggestions for the current configuration.",
      diagPresetCreds: 'Snapshot “{preset}”: route “{route}” contains credential headers ({names}). Delete and re-save it, then rotate exposed keys.',
      diagDeveloperRole: "{route}: the base URL looks like a legacy gateway but supportsDeveloperRole is on. Turn it off to avoid 400 errors.",
      diagEmptyEffort: "{route} / {model}: reasoningEfforts.{level} is empty. Only “off” may send nothing.",
      diagNoContext: "{route} / {model}: no contextWindow; DSH uses the route default.",
      diagNoModels: "{route}: no models declared; the route serves its built-in catalog.",
      applied: "Applied.",
      saved: "Saved.",
      writeFailed: "Write rejected:",
      unknownError: "Unexpected failure.",
      routeNotFound: "Route not found in the resolved settings.",
      modelNotFound: "Model not found in this route.",
      invalidLevels: "At least one thinking level besides “off” needs a wire value.",
      levelNeedsValue: "Enabled levels need a wire value; untick a level to remove it.",
      off: "off",
      on: "on",
      cancel: "Cancel",
      save: "Save",
      close: "Close",
      delete: "Delete",
      remove: "Remove",
      apply: "Apply"
    };
    var zh = {
      nav: "模型能力",
      title: "模型能力",
      subtitle: "为每条模型路由设置思考档位、上下文与输出上限、输入模态和网关兼容性。修改会保存到当前 DSH 配置，并由 Host 校验。",
      statusWritable: "可编辑 · 路由字段即时保存",
      statusReadonly: "只读",
      readOnlyWhy: "只读：当前页面不是通过本机回环打开，或 Host 未授予写入权限。",
      statusMemory: "当前浏览器无法持久化设置(需要本机回环访问)。",
      language: "语言",
      langFollow: "跟随 DSH",
      langEn: "English",
      langZh: "中文",
      checkTitle: "配置检查",
      checkIssues: "{count} 条建议",
      checkOk: "无需处理的建议",
      checkShow: "查看",
      checkHide: "收起",
      routesTitle: "模型路由",
      routesIntro: "路由来自 llm-pi-ai 设置。展开任意路由，即可编辑模型、默认值与网关兼容性。",
      routeCount: "{count} 条路由",
      noRoutes: "还没有模型路由。",
      noRoutesHint: "请先在「设置 → 模型」中添加提供商，或用卡扣AI管家 / cc switch 注入一条，然后重新打开此页。",
      modelsCount: "{count} 个模型",
      localGateway: "本地网关",
      remoteGateway: "远程网关",
      tabModels: "模型",
      tabProvider: "连接",
      tabCompat: "兼容性",
      tabAdvanced: "高级",
      modelHint: "模型字段保存在 llm-pi-ai.providers.<路由>.models。未显式填写时，DSH 会回退到路由默认值。",
      thinkingOff: "思考已关闭",
      thinkingLevels: "{count} 个思考档",
      thinkingDefault: "使用默认思考",
      editModel: "编辑",
      modelDialogTitle: "编辑模型",
      displayName: "显示名称",
      contextWindow: "上下文窗口",
      maxTokens: "最大输出",
      capacityHint: "可填数字或 K/M 后缀，例如 262144、256K、1M",
      notSet: "未设置",
      contextShort: "上下文",
      outputShort: "输出",
      inputModalities: "输入模态",
      modalityText: "文本",
      modalityImage: "图像",
      thinkingTitle: "思考档位",
      thinkingEnable: "该模型支持思考",
      thinkingHint: "勾选该模型提供的档位。off 固定提供；发送值留空表示不发送。",
      reasoningFalseHint: "关闭思考会写入 reasoningEfforts: false，DSH 将不再为该模型提供思考档位。",
      thinkingEnableLevel: "提供此档",
      noChanges: "没有需要保存的修改。",
      unsavedTitle: "放弃未保存的修改？",
      unsavedBody: "模型修改只有在点击「保存」后才会写入。",
      discard: "放弃",
      keepEditing: "继续编辑",
      saveHint: "模型字段在点击「保存」后写入。",
      applyToAllHint: "将覆盖本路由其余 {count} 个模型。",
      invalidCapacity: "请填数字或 K/M 后缀，例如 256K。",
      invalidNumber: "请输入数字。",
      settingsRefused: "设置服务拒绝了这次写入（可能有其它页面先改过）。请刷新后重试。",
      partialSaved: "模型已保存，但应用到其它模型失败：",
      level: "档位",
      wireValue: "发送值",
      offNoSend: "不发送",
      quickFill: "快速填充",
      fillCurrent: "当前模型",
      quickFillHint: "厂商预设是通用档位，不一定等于当前模型实际支持；「当前模型」会恢复已保存的档位。",
      fillDeepSeek: "DeepSeek 4 档",
      fillOpenAI: "OpenAI 5 档",
      fillClaude: "Claude 4 档",
      fillQwen: "Qwen 4 档",
      fillAll: "全部 7 档",
      fillCustom: "自定义",
      customFillTitle: "自定义快速填充",
      customFillName: "预设名称",
      customFillNamePlaceholder: "例如：我的 4 档",
      customFillHint: "勾选档位并填写发送值；保存后会记在当前浏览器里，可从快速填充重复使用。",
      customFillSaveApply: "保存并应用",
      customFillNameRequired: "请给这个预设起个名字。",
      applyToAll: "同时应用到本路由的所有模型",
      compatTitle: "网关兼容性",
      compatIntro: "这些开关描述网关能理解什么。标志填错是 400 报错最常见的原因。",
      compatCommon: "常用标志",
      compatMore: "更多标志",
      supportsDeveloperRoleHint: "只认 system 角色的网关(DashScope / Kimi / 智谱 / MiniMax / 硅基流动 等)需要关闭。",
      compatPerModel: "模型级兼容性",
      providerTitle: "路由基础信息",
      providerIntro: "这些字段由路由内的所有模型共享。",
      baseURL: "Base URL",
      api: "API 协议",
      apiKeyEnv: "API 密钥环境变量名",
      apiKeyHint: "密钥本身由 DSH 凭据或环境变量提供，这里既不显示也不修改。",
      routeId: "路由 ID",
      localNote: "这条路由指向本地网关 (127.0.0.1)。卡扣AI管家、cc switch 等工具切换模型时会重写该路由；如果修改被覆盖，请先在切换工具中固定这条路由。",
      defaultsFold: "路由默认值",
      defaultsIntro: "模型或请求未声明自己的值时使用的回退值。",
      defaultContextWindow: "默认上下文窗口",
      defaultMaxTokens: "默认最大输出",
      defaultInput: "默认输入模态",
      reasoningDefault: "默认思考档位",
      thinkingBudgets: "思考预算(字符)",
      cacheRetention: "提示词缓存保留",
      transport: "流式传输方式",
      advancedTitle: "超时与请求头",
      timeoutMs: "请求超时(ms)",
      websocketConnectTimeoutMs: "WebSocket 连接超时(ms)",
      streamIdleTimeoutMs: "流空闲超时(ms)",
      maxRequestImageBytes: "最大请求图片字节数",
      requestImagePixelBudget: "图片像素预算",
      requestImageMaxBytes: "最大内联图片字节数",
      headers: "额外请求头",
      headerKey: "请求头",
      headerValue: "值",
      addHeader: "添加请求头",
      saveHeaders: "保存请求头",
      credentialWarning: "检测到类似凭据的请求头：{names}。设置服务不会自动脱敏，请改用 apiKeyEnv，并轮换已经暴露的密钥。",
      rawFold: "原始路由配置(只读)",
      copy: "复制",
      copied: "已复制",
      builtinSafeGateway: "安全网关模式",
      builtinSafeGatewaySummary: "适用于只认 system 角色的网关(DashScope、Kimi、智谱、MiniMax 等)：关闭 developer 角色，并声明支持 reasoning。",
      builtinOpenaiNative: "OpenAI 原生",
      builtinOpenaiNativeSummary: "适用于 OpenAI 官方接口：开启 developer 角色，使用 OpenAI 思考方言和 max_completion_tokens。",
      builtinDeepseekDialect: "DeepSeek 方言",
      builtinDeepseekDialectSummary: "适用于 DeepSeek 及其同格式中转：deepseek 方言、开启 developer 角色、写入官方 4 档。",
      builtinQwenDialect: "Qwen 方言",
      builtinQwenDialectSummary: "适用于 Qwen / DashScope 兼容接口：qwen 方言、关闭 developer 角色、写入 4 档。",
      builtinMaxThinking: "全力思考",
      builtinMaxThinkingSummary: "声明全部 7 个思考档位，并把路由默认思考设为 high。仅当网关真的接受所有档位时使用。",
      builtinTextOnly: "仅文本",
      builtinTextOnlySummary: "把所有模型和路由默认值标记为纯文本，输入框将不再提供图片输入。",
      builtinImageReady: "文本 + 图像",
      builtinImageReadySummary: "把所有模型和路由默认值标记为文本 + 图像，适用于支持视觉的模型。",
      changeDeveloperOff: "关闭 developer 角色(supportsDeveloperRole = false)",
      changeDeveloperOn: "开启 developer 角色(supportsDeveloperRole = true)",
      changeReasoningOn: "声明支持 reasoning_effort",
      changeThinkingOpenai: "设置 thinkingFormat = openai",
      changeMaxTokensCompletion: "最大输出改用 max_completion_tokens 发送",
      changeThinkingDeepSeek: "设置 thinkingFormat = deepseek",
      changeDeepSeekLevels: "为每个模型写入 DeepSeek 官方 4 档",
      changeThinkingQwen: "设置 thinkingFormat = qwen",
      changeQwenLevels: "为每个模型写入 Qwen 官方 4 档",
      changeAllSevenLevels: "为每个模型写入全部 7 档(off → max)",
      changeDefaultHigh: "把路由默认思考档位设为 high",
      changeThinkingBudgets: "写入默认思考预算",
      changeInputText: "把所有模型设为纯文本输入",
      changeDefaultInputText: "把路由默认输入设为 text",
      changeInputImage: "把所有模型设为文本 + 图像输入",
      changeDefaultInputImage: "把路由默认输入设为 text + image",
      presetsTitle: "快速预设",
      presetsIntro: "精选配方。先看清会改什么，再选择路由应用；应用后仍可逐项微调。",
      presetsGroupGateway: "网关兼容",
      presetsGroupCapability: "模型能力",
      presetApply: "应用",
      presetApplyTitle: "应用「{name}」",
      presetChanges: "将会修改",
      presetRoutes: "应用到路由",
      presetSelectAll: "全选",
      presetClear: "清空",
      presetWarning: "该预设会写入模型级字段，并覆盖所选路由现有的思考档位或输入模态。",
      presetNoRoutes: "请至少选择一条路由。",
      presetApplied: "预设已应用。",
      presetFailed: "设置服务拒绝了该预设：",
      snapshotsTitle: "配置快照",
      snapshotsIntro: "把当前的提供商路由保存成快照(不含请求头与密钥)，以后可以一键恢复。",
      snapshotName: "快照名称",
      snapshotNamePlaceholder: "例如：DeepSeek 官方 / 公司网关",
      snapshotSave: "保存快照",
      snapshotEmpty: "还没有快照。",
      snapshotRoutes: "{count} 条路由",
      snapshotRestore: "恢复",
      snapshotDelete: "删除",
      snapshotRestoreTitle: "恢复「{name}」？",
      snapshotRestoreWarn: "这会用快照替换整个 llm-pi-ai 用户配置，快照之后新增的路由会被移除。快照不含 API 密钥，当前环境变量仍然有效。",
      snapshotDeleteTitle: "删除「{name}」？",
      snapshotDeleteWarn: "快照将被永久删除，当前配置不受影响。",
      snapshotSaved: "快照已保存。",
      snapshotDeleted: "快照已删除。",
      noUserRoutes: "暂时没有可保存的内容——可编辑设置层里还没有路由。",
      syncTitle: "从 models.dev 同步",
      syncIntro: "按需拉取模型能力，逐条映射本地路由，预览后再应用。只更新 ID 匹配的现有模型，绝不新增或删除路由与模型。",
      syncLoad: "加载模型目录",
      syncRefresh: "刷新模型目录",
      syncLoading: "正在加载…",
      syncSource_network: "models.dev 在线数据",
      syncSource_cache: "本地缓存",
      syncSource_fallback: "过期本地缓存",
      syncFields: "要更新的字段",
      syncField_name: "显示名称",
      syncField_contextWindow: "上下文窗口",
      syncField_maxTokens: "最大输出",
      syncField_input: "输入模态",
      syncField_reasoningEfforts: "思考档位",
      syncReasoningHint: "思考同步默认关闭且偏保守：只映射明确的 effort 值，未知格式保留现值。",
      syncRouteMapping: "路由 → models.dev 提供商",
      syncDoNotSync: "不同步此路由",
      syncPreview: "预览：匹配 {matchedModels} 个，将变更 {changedModels} 个，未匹配 {unmatchedModels} 个，共选择 {selectedRoutes} 条路由。",
      syncSkippedReasoning: "{count} 条思考能力无法安全映射，将保留原值。",
      syncApply: "应用预览",
      syncApplied: "已从 models.dev 更新 {count} 个模型。",
      syncFailed: "models.dev 同步被拒绝：",
      syncUnavailable: "无法加载模型目录，设置未发生变化。",
      syncStale: "models.dev 暂时不可用，当前显示上次成功保存的本地缓存。",
      diagTitle: "配置建议",
      diagNone: "当前配置没有需要提示的地方。",
      diagPresetCreds: "快照「{preset}」：路由「{route}」的 payload 含凭据类请求头({names})。请删除并重新保存，然后轮换可能暴露的密钥。",
      diagDeveloperRole: "{route}：baseURL 看起来像旧式网关，但 supportsDeveloperRole 处于开启状态。建议关闭，避免 400 报错。",
      diagEmptyEffort: "{route} / {model}：reasoningEfforts.{level} 为空。只有 off 可以不发送。",
      diagNoContext: "{route} / {model}：未设置 contextWindow，DSH 将使用路由默认值。",
      diagNoModels: "{route}：没有声明模型，路由将使用内置目录。",
      applied: "已应用。",
      saved: "已保存。",
      writeFailed: "写入被拒绝：",
      unknownError: "发生意外错误。",
      routeNotFound: "在解析后的设置中找不到该路由。",
      modelNotFound: "该路由中找不到该模型。",
      invalidLevels: "除 off 之外，至少需要一个思考档位并填写发送值。",
      levelNeedsValue: "已启用的档位需要发送值；取消勾选即可移除该档。",
      off: "关",
      on: "开",
      cancel: "取消",
      save: "保存",
      close: "关闭",
      delete: "删除",
      remove: "移除",
      apply: "应用"
    };

    function localize(dicts, lang, key, params) {
      var text = dicts[lang] && dicts[lang][key];
      if (text === undefined) text = dicts.en[key];
      if (text === undefined) text = key;
      if (params) {
        Object.keys(params).forEach(function (name) {
          text = text.split("{" + name + "}").join(String(params[name]));
        });
      }
      return text;
    }

    // ---------------------------------------------------------------------
    // Constants and small helpers
    // ---------------------------------------------------------------------
    var THINKING_LEVELS = ["off", "minimal", "low", "medium", "high", "xhigh", "max"];
    var LEVEL_KEYS = {
      off: "levelOff",
      minimal: "levelMinimal",
      low: "levelLow",
      medium: "levelMedium",
      high: "levelHigh",
      xhigh: "levelXhigh",
      max: "levelMax"
    };
    var LEVEL_TEXT = {
      en: { off: "off", minimal: "minimal", low: "low", medium: "medium", high: "high", xhigh: "xhigh", max: "max" },
      zh: { off: "关闭", minimal: "最小", low: "低", medium: "中", high: "高", xhigh: "极高", max: "最大" }
    };
    var MODALITIES = ["text", "image"];
    var THINKING_FORMATS = ["openai", "deepseek", "openrouter", "together", "baseten", "zai", "qwen", "chat-template", "qwen-chat-template", "string-thinking", "ant-ling"];
    var MAX_TOKENS_FIELDS = ["max_completion_tokens", "max_tokens"];
    var CACHE_CONTROL_FORMATS = ["anthropic"];
    var THINKING_TOKEN_BUDGET_FIELDS = ["thinking_token_budget", "thinking_budget", "thinking_budget_tokens"];
    var APIS = ["openai-completions", "openai-responses", "anthropic-messages"];
    var COMPAT_BOOLEAN_FIELDS = [
      "supportsDeveloperRole",
      "supportsReasoningEffort",
      "supportsStore",
      "supportsUsageInStreaming",
      "supportsFinishReason",
      "supportsTemperature",
      "supportsStrictMode",
      "supportsStrictTools",
      "supportsLongCacheRetention",
      "supportsEagerToolInputStreaming",
      "supportsCacheControlOnTools",
      "requiresToolResultName",
      "requiresAssistantAfterToolResult",
      "requiresThinkingAsText",
      "requiresReasoningContentOnAssistantMessages",
      "forceAdaptiveThinking",
      "allowEmptySignature",
      "supportsThinkingTokenBudget",
      "supportsMaxOutputTokens"
    ];
    var COMPAT_COMMON_FIELDS = [
      "supportsDeveloperRole",
      "supportsReasoningEffort",
      "supportsStore",
      "supportsUsageInStreaming",
      "supportsTemperature"
    ];
    var COMPAT_SELECT_FIELDS = [
      { key: "thinkingFormat", options: THINKING_FORMATS },
      { key: "maxTokensField", options: MAX_TOKENS_FIELDS },
      { key: "cacheControlFormat", options: CACHE_CONTROL_FORMATS },
      { key: "thinkingTokenBudgetField", options: THINKING_TOKEN_BUDGET_FIELDS }
    ];
    var COMPAT_NUMBER_FIELDS = ["vllmPriority"];
    var PROVIDER_NUMBER_FIELDS = [
      "timeoutMs",
      "websocketConnectTimeoutMs",
      "streamIdleTimeoutMs",
      "maxRequestImageBytes",
      "requestImagePixelBudget",
      "requestImageMaxBytes"
    ];
    var NO_DEVELOPER_ROLE_HINTS = ["aliyun", "dashscope", "moonshot", "kimi", "zhipu", "bigmodel", "minimax", "volces", "ark", "siliconflow", "baidu", "qianfan", "maas"];
    var OFFICIAL_LEVELS = {
      deepseek: { off: null, low: "low", high: "high", max: "max" },
      openai: { off: null, minimal: "minimal", low: "low", medium: "medium", high: "high" },
      claude: { off: null, low: "low", medium: "medium", high: "high", max: "max" },
      qwen: { off: null, low: "low", medium: "medium", xhigh: "xhigh" }
    };

    function deepClone(value) {
      return JSON.parse(JSON.stringify(value));
    }

    function isRecord(value) {
      return value !== null && typeof value === "object" && !Array.isArray(value);
    }

    function looksLikeLegacyGateway(baseURL) {
      var host = String(baseURL || "").toLowerCase();
      return NO_DEVELOPER_ROLE_HINTS.some(function (hint) {
        return host.indexOf(hint) !== -1;
      });
    }

    function isLocalGateway(baseURL) {
      return /^https?:\/\/(127\.0\.0\.1|localhost|\[::1\]|0\.0\.0\.0)(:|\/|$)/i.test(String(baseURL || ""));
    }

    function formatCapacity(value) {
      if (!Number.isInteger(value) || value <= 0) return "";
      if (value % 1000000 === 0) return String(value / 1000000) + "M";
      if (value % 1000 === 0) return String(value / 1000) + "K";
      return String(value);
    }

    function parseCapacity(text) {
      var trimmed = String(text).trim();
      if (trimmed === "") return undefined;
      var match = /^(\d+(?:\.\d+)?)\s*([km])?$/i.exec(trimmed);
      if (!match) return NaN;
      var value = Number(match[1]);
      var suffix = (match[2] || "").toLowerCase();
      if (suffix === "k") return Math.round(value * 1000);
      if (suffix === "m") return Math.round(value * 1000000);
      return value;
    }

    var CREDENTIAL_HEADER_NAMES = ["authorization", "proxy-authorization", "api-key", "x-api-key"];
    function isCredentialHeader(name) {
      var lower = String(name).toLowerCase().trim();
      return CREDENTIAL_HEADER_NAMES.indexOf(lower) !== -1;
    }

    function stripHeadersFromProviders(providers) {
      var out = deepClone(providers);
      Object.keys(out).forEach(function (route) {
        var entry = out[route];
        if (entry && typeof entry === "object" && entry.headers) delete entry.headers;
      });
      return out;
    }

    function formatTime(iso) {
      if (!iso) return "";
      var date = new Date(iso);
      if (Number.isNaN(date.getTime())) return "";
      try {
        return date.toLocaleString();
      } catch (error) {
        return date.toISOString();
      }
    }

    function modelLabel(model) {
      return model && (model.name || model.id) ? String(model.name || model.id) : "";
    }

    function effortValues(efforts) {
      if (!isRecord(efforts)) return [];
      return THINKING_LEVELS.filter(function (level) {
        var value = efforts[level];
        return typeof value === "string" && value !== "";
      }).filter(function (level) {
        return level !== "off";
      });
    }

    var CUSTOM_FILL_KEY = "dsh-model-capability:quick-fill:v1";

    function readCustomFill() {
      try {
        var raw = globalThis.localStorage && globalThis.localStorage.getItem(CUSTOM_FILL_KEY);
        if (!raw) return null;
        var parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object" || !parsed.levels || typeof parsed.name !== "string") return null;
        return parsed;
      } catch (error) {
        return null;
      }
    }

    function writeCustomFill(preset) {
      try {
        if (globalThis.localStorage) globalThis.localStorage.setItem(CUSTOM_FILL_KEY, JSON.stringify(preset));
      } catch (error) {
        // localStorage can be unavailable in private or restricted contexts.
      }
    }

    // ---------------------------------------------------------------------
    // Built-in presets
    // ---------------------------------------------------------------------
    function fullThinkingLevels() {
      return { off: null, minimal: "minimal", low: "low", medium: "medium", high: "high", xhigh: "xhigh", max: "max" };
    }

    function routeBase(route) {
      return ["providers", route];
    }

    function modelOps(route, entry, build) {
      var patched = deepClone(entry);
      var models = Array.isArray(patched && patched.models) ? patched.models : [];
      if (models.length > 0) {
        models.forEach(function (model) {
          if (model && typeof model.id === "string") build(model);
        });
        patched.models = models;
      } else if (patched && patched.modelOverrides && typeof patched.modelOverrides === "object") {
        Object.keys(patched.modelOverrides).forEach(function (id) {
          var model = Object.assign({}, patched.modelOverrides[id] || {}, { id: id });
          build(model);
          delete model.id;
          patched.modelOverrides[id] = model;
        });
      }
      return [{ op: "set", path: routeBase(route), value: patched }];
    }

    var BUILTIN_PRESETS = [
      {
        id: "safe-gateway",
        group: "gateway",
        icon: "shield",
        nameKey: "builtinSafeGateway",
        summaryKey: "builtinSafeGatewaySummary",
        changes: ["changeDeveloperOff", "changeReasoningOn"],
        buildOps: function (route) {
          var base = routeBase(route);
          return [
            { op: "set", path: base.concat(["compat", "supportsDeveloperRole"]), value: false },
            { op: "set", path: base.concat(["compat", "supportsReasoningEffort"]), value: true }
          ];
        }
      },
      {
        id: "openai-native",
        group: "gateway",
        icon: "sparkles",
        nameKey: "builtinOpenaiNative",
        summaryKey: "builtinOpenaiNativeSummary",
        changes: ["changeDeveloperOn", "changeThinkingOpenai", "changeMaxTokensCompletion"],
        buildOps: function (route, entry) {
          var base = routeBase(route);
          return [
            { op: "set", path: base.concat(["compat", "supportsDeveloperRole"]), value: true },
            { op: "set", path: base.concat(["compat", "supportsReasoningEffort"]), value: true },
            { op: "set", path: base.concat(["compat", "thinkingFormat"]), value: "openai" },
            { op: "set", path: base.concat(["compat", "maxTokensField"]), value: "max_completion_tokens" }
          ].concat(modelOps(route, entry, function (model) {
            model.reasoningEfforts = OFFICIAL_LEVELS.openai;
          }));
        }
      },
      {
        id: "deepseek-dialect",
        group: "gateway",
        icon: "waves",
        nameKey: "builtinDeepseekDialect",
        summaryKey: "builtinDeepseekDialectSummary",
        changes: ["changeThinkingDeepSeek", "changeDeveloperOn", "changeDeepSeekLevels"],
        buildOps: function (route, entry) {
          var base = routeBase(route);
          return [
            { op: "set", path: base.concat(["compat", "thinkingFormat"]), value: "deepseek" },
            { op: "set", path: base.concat(["compat", "supportsDeveloperRole"]), value: true },
            { op: "set", path: base.concat(["compat", "supportsReasoningEffort"]), value: true }
          ].concat(modelOps(route, entry, function (model) {
            model.reasoningEfforts = OFFICIAL_LEVELS.deepseek;
          }));
        }
      },
      {
        id: "qwen-dialect",
        group: "gateway",
        icon: "hexagon",
        nameKey: "builtinQwenDialect",
        summaryKey: "builtinQwenDialectSummary",
        changes: ["changeThinkingQwen", "changeDeveloperOff", "changeQwenLevels"],
        buildOps: function (route, entry) {
          var base = routeBase(route);
          return [
            { op: "set", path: base.concat(["compat", "thinkingFormat"]), value: "qwen" },
            { op: "set", path: base.concat(["compat", "supportsDeveloperRole"]), value: false },
            { op: "set", path: base.concat(["compat", "supportsReasoningEffort"]), value: true }
          ].concat(modelOps(route, entry, function (model) {
            model.reasoningEfforts = OFFICIAL_LEVELS.qwen;
          }));
        }
      },
      {
        id: "max-thinking",
        group: "capability",
        icon: "brain",
        nameKey: "builtinMaxThinking",
        summaryKey: "builtinMaxThinkingSummary",
        changes: ["changeAllSevenLevels", "changeDefaultHigh", "changeThinkingBudgets"],
        modelLevel: true,
        buildOps: function (route, entry) {
          var base = routeBase(route);
          return modelOps(route, entry, function (model) {
            model.reasoningEfforts = fullThinkingLevels();
          }).concat([
            { op: "set", path: base.concat(["reasoning"]), value: "high" },
            { op: "set", path: base.concat(["thinkingBudgets"]), value: { minimal: 256, low: 1024, medium: 4096, high: 16384 } }
          ]);
        }
      },
      {
        id: "text-only",
        group: "capability",
        icon: "text",
        nameKey: "builtinTextOnly",
        summaryKey: "builtinTextOnlySummary",
        changes: ["changeInputText", "changeDefaultInputText"],
        modelLevel: true,
        buildOps: function (route, entry) {
          var base = routeBase(route);
          return [{ op: "set", path: base.concat(["defaultInput"]), value: ["text"] }].concat(modelOps(route, entry, function (model) {
            model.input = ["text"];
          }));
        }
      },
      {
        id: "image-ready",
        group: "capability",
        icon: "image",
        nameKey: "builtinImageReady",
        summaryKey: "builtinImageReadySummary",
        changes: ["changeInputImage", "changeDefaultInputImage"],
        modelLevel: true,
        buildOps: function (route, entry) {
          var base = routeBase(route);
          return [{ op: "set", path: base.concat(["defaultInput"]), value: ["text", "image"] }].concat(modelOps(route, entry, function (model) {
            model.input = ["text", "image"];
          }));
        }
      }
    ];

    // ---------------------------------------------------------------------
    // Store
    // ---------------------------------------------------------------------
    var UNSET = Symbol("unset");

    function modelViews(entry) {
      var explicit = entry && Array.isArray(entry.models) ? entry.models : [];
      if (explicit.length > 0) return explicit;
      var overrides = entry && entry.modelOverrides;
      if (!overrides || typeof overrides !== "object" || Array.isArray(overrides)) return explicit;
      return Object.keys(overrides).map(function (id) {
        return Object.assign({}, overrides[id] || {}, { id: id });
      });
    }

    function patchRouteModels(entry, mutate) {
      var patched = deepClone(entry);
      var explicit = Array.isArray(patched.models) ? patched.models : [];
      if (explicit.length > 0) {
        explicit.forEach(function (model) {
          if (model && typeof model.id === "string") mutate(model);
        });
        patched.models = explicit;
        return patched;
      }
      var overrides = patched.modelOverrides;
      if (!overrides || typeof overrides !== "object" || Array.isArray(overrides)) return patched;
      Object.keys(overrides).forEach(function (id) {
        var model = Object.assign({}, overrides[id] || {}, { id: id });
        mutate(model);
        delete model.id;
        overrides[id] = model;
      });
      patched.modelOverrides = overrides;
      return patched;
    }

    function acceptedMutation(value) {
      return value !== false;
    }

    function mutateForm(form, snapshot, ops) {
      return typeof snapshot.status === "string" ? form.mutate(ops) : form.mutate(ops, snapshot.revision);
    }

    function CapabilityStore(options) {
      this.llmScope = options.llmScope;
      this.selfScope = options.selfScope;
      this.locale = options.locale;
      this.materialized = new Set();
    }

    CapabilityStore.prototype.llmSnapshot = function () {
      return this.llmScope.getSnapshot();
    };
    CapabilityStore.prototype.selfSnapshot = function () {
      return this.selfScope.getSnapshot();
    };
    CapabilityStore.prototype.providers = function () {
      var value = this.llmSnapshot().value;
      if (!value || typeof value !== "object" || Array.isArray(value)) return {};
      return value.providers && typeof value.providers === "object" ? value.providers : {};
    };
    CapabilityStore.prototype.userProviders = function () {
      var user = this.llmSnapshot().user;
      if (!user || typeof user !== "object" || Array.isArray(user)) return {};
      return user.providers && typeof user.providers === "object" ? user.providers : {};
    };
    CapabilityStore.prototype.routeNames = function () {
      return Object.keys(this.providers());
    };
    CapabilityStore.prototype.route = function (route) {
      return this.providers()[route];
    };
    CapabilityStore.prototype.modelsOf = function (route) {
      return modelViews(this.route(route));
    };
    CapabilityStore.prototype.effectiveLanguage = function () {
      var self = this.selfSnapshot().value;
      var pref = self && typeof self === "object" && self.language !== undefined ? self.language : "follow";
      if (pref === "follow") {
        var active = this.locale && this.locale.getSnapshot ? this.locale.getSnapshot().active : "en";
        return active === "zh" ? "zh" : "en";
      }
      return pref === "zh" ? "zh" : "en";
    };
    CapabilityStore.prototype.writable = function () {
      return this.llmSnapshot().writable === true;
    };
    CapabilityStore.prototype.mode = function () {
      return this.llmSnapshot().mode;
    };
    CapabilityStore.prototype.writeOps = async function (ops) {
      var snapshot = this.llmSnapshot();
      try {
        var accepted = await mutateForm(this.llmScope, snapshot, ops);
        if (!acceptedMutation(accepted)) return { ok: false, code: "settings-refused", message: "settings-refused" };
        return { ok: true, revision: snapshot.revision };
      } catch (error) {
        return { ok: false, code: (error && error.code) || "unknown", message: (error && error.message) || String(error) };
      }
    };
    CapabilityStore.prototype.writePath = async function (path, value) {
      return this.writeOps([{ op: "set", path: path, value: value }]);
    };
    CapabilityStore.prototype.unsetPath = async function (path) {
      return this.writeOps([{ op: "unset", path: path }]);
    };
    CapabilityStore.prototype.writeSelfOps = async function (ops) {
      var snapshot = this.selfSnapshot();
      try {
        var accepted = await mutateForm(this.selfScope, snapshot, ops);
        if (!acceptedMutation(accepted)) return { ok: false, code: "settings-refused", message: "settings-refused" };
        return { ok: true };
      } catch (error) {
        return { ok: false, code: (error && error.code) || "unknown", message: (error && error.message) || String(error) };
      }
    };
    CapabilityStore.prototype.ensureRouteMaterialized = async function (route) {
      if (this.materialized.has(route)) return { ok: true };
      var snapshot = this.llmSnapshot();
      if (typeof snapshot.status === "string") return { ok: true };
      var user = snapshot.user;
      if (user && typeof user === "object" && user.providers && user.providers[route] !== undefined) {
        this.materialized.add(route);
        return { ok: true };
      }
      var effective = snapshot.value && snapshot.value.providers ? snapshot.value.providers[route] : undefined;
      if (effective === undefined) return { ok: false, message: "route-not-found" };
      var result = await this.writeOps([{ op: "set", path: ["providers", route], value: deepClone(effective) }]);
      if (result.ok) this.materialized.add(route);
      return result;
    };
    CapabilityStore.prototype.writeRouteField = async function (route, suffixPath, value, options) {
      var materialized = await this.ensureRouteMaterialized(route);
      if (!materialized.ok) return materialized;
      var path = ["providers", route].concat(suffixPath);
      return options && options.unset ? this.unsetPath(path) : this.writePath(path, value);
    };
    CapabilityStore.prototype.writeModelField = async function (route, modelId, fields) {
      var materialized = await this.ensureRouteMaterialized(route);
      if (!materialized.ok) return materialized;
      var routeEntry = this.route(route);
      if (!routeEntry) return { ok: false, message: "route-not-found" };
      var found = false;
      var patched = patchRouteModels(routeEntry, function (model) {
        if (model.id !== modelId) return;
        found = true;
        Object.keys(fields).forEach(function (field) {
          var value = fields[field];
          if (value === UNSET) delete model[field];
          else model[field] = value;
        });
      });
      if (!found) return { ok: false, message: "model-not-found" };
      return this.writePath(["providers", route], patched);
    };
    CapabilityStore.prototype.writeModelCompatField = async function (route, modelId, field, value, options) {
      var materialized = await this.ensureRouteMaterialized(route);
      if (!materialized.ok) return materialized;
      var routeEntry = this.route(route);
      if (!routeEntry) return { ok: false, message: "route-not-found" };
      var found = false;
      var patched = patchRouteModels(routeEntry, function (model) {
        if (model.id !== modelId) return;
        found = true;
        var compat = model.compat ? deepClone(model.compat) : {};
        if (options && options.unset) delete compat[field];
        else compat[field] = value;
        if (Object.keys(compat).length === 0) delete model.compat;
        else model.compat = compat;
      });
      if (!found) return { ok: false, message: "model-not-found" };
      return this.writePath(["providers", route], patched);
    };
    CapabilityStore.prototype.applyModelToAll = async function (route, modelId, fieldNames) {
      var source = this.modelsOf(route).find(function (model) {
        return model && model.id === modelId;
      });
      if (!source) return { ok: false, message: "model-not-found" };
      var materialized = await this.ensureRouteMaterialized(route);
      if (!materialized.ok) return materialized;
      var routeEntry = this.route(route);
      if (!routeEntry) return { ok: false, message: "route-not-found" };
      var patched = patchRouteModels(routeEntry, function (model) {
        if (model.id === modelId) return;
        fieldNames.forEach(function (field) {
          if (!(field in source)) return;
          model[field] = deepClone(source[field]);
        });
      });
      return this.writePath(["providers", route], patched);
    };
    CapabilityStore.prototype.writeModelFieldsToAll = async function (route, modelId, fields) {
      var materialized = await this.ensureRouteMaterialized(route);
      if (!materialized.ok) return materialized;
      var routeEntry = this.route(route);
      if (!routeEntry) return { ok: false, message: "route-not-found" };
      var patched = patchRouteModels(routeEntry, function (model) {
        if (model.id === modelId) return;
        Object.keys(fields).forEach(function (field) {
          var value = fields[field];
          if (value === UNSET) delete model[field];
          else model[field] = deepClone(value);
        });
      });
      return this.writePath(["providers", route], patched);
    };
    CapabilityStore.prototype.builtinPresets = function () {
      return BUILTIN_PRESETS;
    };
    CapabilityStore.prototype.applyBuiltinPreset = async function (presetId, routeIds) {
      var preset = BUILTIN_PRESETS.find(function (item) {
        return item.id === presetId;
      });
      if (!preset) return { ok: false, message: "preset-not-found" };
      var providers = this.providers();
      var routes = routeIds.filter(function (route) {
        return providers[route] !== undefined;
      });
      if (routes.length === 0) return { ok: false, message: "route-not-found" };
      var ops = [];
      routes.forEach(function (route) {
        ops = ops.concat(preset.buildOps(route, providers[route]));
      });
      for (var index = 0; index < routes.length; index += 1) {
        var materialized = await this.ensureRouteMaterialized(routes[index]);
        if (!materialized.ok) return materialized;
      }
      return this.writeOps(ops);
    };
    CapabilityStore.prototype.applyModelsDevSync = async function (replacements) {
      var ops = Object.keys(replacements || {}).map(function (route) {
        return { op: "set", path: ["providers", route], value: replacements[route] };
      });
      if (ops.length === 0) return { ok: false, message: "sync-no-changes" };
      var result = await this.writeOps(ops);
      if (result.ok) {
        var self = this;
        Object.keys(replacements).forEach(function (route) {
          self.materialized.add(route);
        });
      }
      return result;
    };
    CapabilityStore.prototype.customPresets = function () {
      var self = this.selfSnapshot().value;
      if (!self || typeof self !== "object") return [];
      return Array.isArray(self.customPresets) ? self.customPresets : [];
    };
    CapabilityStore.prototype.saveCustomPreset = async function (name) {
      var rawProviders = this.userProviders();
      if (Object.keys(rawProviders).length === 0) return { ok: false, message: "no-user-routes" };
      var providers = stripHeadersFromProviders(rawProviders);
      var id = "cp_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
      var item = {
        id: id,
        name: String(name || "preset").trim(),
        createdAt: new Date().toISOString(),
        payload: JSON.stringify({ providers: providers })
      };
      return this.writeSelfOps([{ op: "set", path: ["customPresets"], value: this.customPresets().concat([item]) }]);
    };
    CapabilityStore.prototype.deleteCustomPreset = async function (id) {
      var next = this.customPresets().filter(function (preset) {
        return preset.id !== id;
      });
      return this.writeSelfOps([{ op: "set", path: ["customPresets"], value: next }]);
    };
    CapabilityStore.prototype.applyCustomPreset = async function (id) {
      var preset = this.customPresets().find(function (item) {
        return item.id === id;
      });
      if (!preset) return { ok: false, message: "preset-not-found" };
      var parsed;
      try {
        parsed = JSON.parse(preset.payload);
      } catch (error) {
        return { ok: false, message: "preset-corrupt" };
      }
      var section = parsed && typeof parsed === "object" && parsed.providers ? parsed : { providers: parsed };
      var snapshot = this.llmSnapshot();
      try {
        var accepted = await mutateForm(this.llmScope, snapshot, [{ op: "set", path: [], value: section }]);
        if (!acceptedMutation(accepted)) return { ok: false, code: "settings-refused", message: "settings-refused" };
        this.materialized.clear();
        return { ok: true };
      } catch (error) {
        return { ok: false, code: (error && error.code) || "unknown", message: (error && error.message) || String(error) };
      }
    };
    CapabilityStore.prototype.setLanguage = async function (value) {
      return this.writeSelfOps([{ op: "set", path: ["language"], value: value }]);
    };

    // ---------------------------------------------------------------------
    // models.dev adapter
    // ---------------------------------------------------------------------
    var MODELS_DEV_URL = "https://models.dev/api.json";
    var MODELS_DEV_CACHE_KEY = "dsh-model-capability:models-dev:v2";
    var MODELS_DEV_CACHE_TTL_MS = 24 * 60 * 60 * 1000;

    function positiveInteger(value) {
      return Number.isInteger(value) && value > 0 ? value : undefined;
    }

    function normalizeModelsDevCatalog(raw) {
      if (!isRecord(raw)) throw new Error("catalog-invalid");
      var providers = {};
      Object.keys(raw).forEach(function (providerKey) {
        var provider = raw[providerKey];
        if (!isRecord(provider) || !isRecord(provider.models)) return;
        var id = typeof provider.id === "string" && provider.id ? provider.id : providerKey;
        var models = {};
        Object.keys(provider.models).forEach(function (modelKey) {
          var model = provider.models[modelKey];
          if (!isRecord(model)) return;
          var modelId = typeof model.id === "string" && model.id ? model.id : modelKey;
          var input = Array.isArray(model.modalities && model.modalities.input) ? model.modalities.input.filter(function (item) { return typeof item === "string"; }) : [];
          var reasoningOptions = Array.isArray(model.reasoning_options) ? model.reasoning_options.filter(isRecord).map(function (option) {
            return {
              type: typeof option.type === "string" ? option.type : "",
              values: Array.isArray(option.values) ? option.values.filter(function (value) { return typeof value === "string"; }) : []
            };
          }) : [];
          models[modelId] = {
            id: modelId,
            name: typeof model.name === "string" ? model.name : undefined,
            context: positiveInteger(model.limit && model.limit.context),
            output: positiveInteger(model.limit && model.limit.output),
            input: input,
            reasoning: typeof model.reasoning === "boolean" ? model.reasoning : undefined,
            reasoningOptions: reasoningOptions
          };
        });
        if (Object.keys(models).length > 0) providers[id] = { id: id, name: typeof provider.name === "string" ? provider.name : id, models: models };
      });
      if (Object.keys(providers).length === 0) throw new Error("catalog-empty");
      return { providers: providers };
    }

    function normalizeCachedCatalog(catalog) {
      if (!isRecord(catalog) || !isRecord(catalog.providers)) throw new Error("cache-invalid");
      var raw = {};
      Object.keys(catalog.providers).forEach(function (providerId) {
        var provider = catalog.providers[providerId];
        if (!isRecord(provider) || !isRecord(provider.models)) return;
        var models = {};
        Object.keys(provider.models).forEach(function (modelId) {
          var model = provider.models[modelId];
          if (!isRecord(model)) return;
          models[modelId] = {
            id: model.id,
            name: model.name,
            reasoning: model.reasoning,
            reasoning_options: model.reasoningOptions,
            modalities: { input: model.input },
            limit: { context: model.context, output: model.output }
          };
        });
        raw[providerId] = { id: provider.id, name: provider.name, models: models };
      });
      return normalizeModelsDevCatalog(raw);
    }

    function readCache(storage, now) {
      if (!storage || !storage.getItem) return null;
      try {
        var value = JSON.parse(storage.getItem(MODELS_DEV_CACHE_KEY));
        if (!isRecord(value) || !Number.isFinite(value.savedAt)) return null;
        var catalog = normalizeCachedCatalog(value.catalog);
        return { catalog: catalog, savedAt: value.savedAt, fresh: now - value.savedAt <= MODELS_DEV_CACHE_TTL_MS };
      } catch (error) {
        return null;
      }
    }

    function writeCache(storage, catalog, savedAt) {
      if (!storage || !storage.setItem) return false;
      try {
        storage.setItem(MODELS_DEV_CACHE_KEY, JSON.stringify({ savedAt: savedAt, catalog: catalog }));
        return true;
      } catch (error) {
        return false;
      }
    }

    async function loadModelsDevCatalog(options) {
      options = options || {};
      var fetchImpl = options.fetchImpl || globalThis.fetch;
      var storage = options.storage;
      var now = options.now || Date.now();
      var force = options.force === true;
      var timeoutMs = options.timeoutMs || 10000;
      if (storage === undefined) {
        try {
          storage = globalThis.localStorage;
        } catch (error) {
          storage = null;
        }
      }
      var cached = readCache(storage, now);
      if (!force && cached && cached.fresh) return Object.assign({}, cached, { source: "cache", stale: false });
      var controller = typeof AbortController === "function" ? new AbortController() : null;
      var timeout = controller ? setTimeout(function () { controller.abort(); }, timeoutMs) : null;
      try {
        if (typeof fetchImpl !== "function") throw new Error("fetch-unavailable");
        var response = await fetchImpl(MODELS_DEV_URL, {
          headers: { accept: "application/json" },
          cache: "no-store",
          signal: controller ? controller.signal : undefined
        });
        if (!response || !response.ok) throw new Error("http-" + ((response && response.status) || "unknown"));
        var catalog = normalizeModelsDevCatalog(await response.json());
        var cachedLocally = writeCache(storage, catalog, now);
        return { catalog: catalog, savedAt: now, source: "network", stale: false, cachedLocally: cachedLocally };
      } catch (error) {
        if (cached) return Object.assign({}, cached, { source: "fallback", stale: true, warning: (error && error.message) || String(error) });
        var wrapped = new Error((error && error.message) || String(error));
        wrapped.code = "models-dev-unavailable";
        throw wrapped;
      } finally {
        if (timeout !== null) clearTimeout(timeout);
      }
    }

    function guessModelsDevProvider(route, routeEntry, catalog) {
      var providers = (catalog && catalog.providers) || {};
      if (providers[route]) return route;
      var needle = String(route).toLowerCase();
      var exactIds = Object.keys(providers).filter(function (id) {
        return id.toLowerCase() === needle;
      });
      if (exactIds.length === 1) return exactIds[0];
      var display = String((routeEntry && routeEntry.displayName) || "").toLowerCase();
      var exactNames = Object.keys(providers).map(function (id) { return providers[id]; }).filter(function (provider) {
        return display && String(provider.name).toLowerCase() === display;
      });
      return exactNames.length === 1 ? exactNames[0].id : undefined;
    }

    function findSourceModel(models, id) {
      if (models[id]) return models[id];
      var needle = String(id).toLowerCase();
      var matches = Object.keys(models).map(function (key) { return models[key]; }).filter(function (model) {
        return String(model.id).toLowerCase() === needle;
      });
      return matches.length === 1 ? matches[0] : undefined;
    }

    function mappedReasoningEfforts(source) {
      if (source.reasoning === false) return false;
      if (source.reasoning !== true) return undefined;
      var effort = source.reasoningOptions.find(function (option) { return option.type === "effort"; });
      if (!effort) return undefined;
      var allowed = new Set(THINKING_LEVELS.filter(function (level) { return level !== "off"; }));
      var values = effort.values.filter(function (value) { return allowed.has(value); });
      if (values.length === 0) return undefined;
      var out = { off: null };
      values.forEach(function (value) { out[value] = value; });
      return out;
    }

    var DEFAULT_SYNC_FIELDS = { name: true, contextWindow: true, maxTokens: true, input: true, reasoningEfforts: false };
    var SYNC_FIELD_KEYS = ["name", "contextWindow", "maxTokens", "input", "reasoningEfforts"];

    function buildModelsDevSync(currentProviders, catalog, selections, fields) {
      var replacements = {};
      var stats = { selectedRoutes: 0, changedRoutes: 0, matchedModels: 0, changedModels: 0, unmatchedModels: 0, skippedReasoning: 0 };
      Object.keys(selections || {}).forEach(function (route) {
        var providerId = selections[route];
        if (!providerId) return;
        var current = currentProviders ? currentProviders[route] : undefined;
        var sourceProvider = catalog && catalog.providers ? catalog.providers[providerId] : undefined;
        if (!isRecord(current) || !sourceProvider) return;
        stats.selectedRoutes += 1;
        var next = deepClone(current);
        var routeChanged = false;
        var syncModel = function (model) {
          if (!isRecord(model) || typeof model.id !== "string") return;
          var source = findSourceModel(sourceProvider.models, model.id);
          if (!source) {
            stats.unmatchedModels += 1;
            return;
          }
          stats.matchedModels += 1;
          var before = JSON.stringify(model);
          if (fields.name && source.name) model.name = source.name;
          if (fields.contextWindow && source.context) model.contextWindow = source.context;
          if (fields.maxTokens && source.output) model.maxTokens = source.output;
          if (fields.input) {
            var input = source.input.filter(function (item) { return MODALITIES.indexOf(item) !== -1; });
            if (input.length > 0) model.input = Array.from(new Set(input));
          }
          if (fields.reasoningEfforts) {
            var mapped = mappedReasoningEfforts(source);
            if (mapped !== undefined) model.reasoningEfforts = mapped;
            else if (source.reasoning === true) stats.skippedReasoning += 1;
          }
          if (JSON.stringify(model) !== before) {
            routeChanged = true;
            stats.changedModels += 1;
          }
        };
        var models = Array.isArray(next.models) ? next.models : [];
        if (models.length > 0) {
          models.forEach(syncModel);
        } else if (isRecord(next.modelOverrides)) {
          Object.keys(next.modelOverrides).forEach(function (id) {
            var model = Object.assign({}, isRecord(next.modelOverrides[id]) ? next.modelOverrides[id] : {}, { id: id });
            syncModel(model);
            delete model.id;
            next.modelOverrides[id] = model;
          });
        }
        if (routeChanged) {
          replacements[route] = next;
          stats.changedRoutes += 1;
        }
      });
      return { replacements: replacements, stats: stats };
    }

    // ---------------------------------------------------------------------
    // Styles — theme tokens only, every class under the plugin prefix
    // ---------------------------------------------------------------------
    var CSS = `
.dsh-mc-root input[type="checkbox"], .dsh-mc-modal input[type="checkbox"] { accent-color: var(--dsw-alias-brand-primary); }
.dsh-mc-root {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 940px;
  padding: 2px 0 64px;
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
  line-height: 1.55;
}
.dsh-mc-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; flex-wrap: wrap; }
.dsh-mc-heading { min-width: 240px; flex: 1 1 420px; }
.dsh-mc-title { margin: 0; font-size: 19px; line-height: 1.3; font-weight: 650; letter-spacing: -0.01em; }
.dsh-mc-subtitle { margin: 5px 0 0; max-width: 64ch; color: var(--dsw-alias-label-secondary); font-size: 12.5px; }
.dsh-mc-header-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding-top: 2px; }
.dsh-mc-status { display: inline-flex; align-items: center; gap: 6px; height: 26px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-secondary); font-size: 11.5px; white-space: nowrap; }
.dsh-mc-status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--dsw-alias-state-idle-primary); flex: none; }
.dsh-mc-status.is-good .dsh-mc-status-dot { background: var(--dsw-alias-state-success-primary); }
.dsh-mc-status.is-warn .dsh-mc-status-dot { background: var(--dsw-alias-state-warn-primary); }
.dsh-mc-lang { display: inline-flex; align-items: center; gap: 6px; color: var(--dsw-alias-label-secondary); font-size: 12px; }
.dsh-mc-section { display: flex; flex-direction: column; gap: 10px; }
.dsh-mc-section-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.dsh-mc-section-title { margin: 0; font-size: 15px; font-weight: 650; line-height: 1.4; }
.dsh-mc-section-desc { margin: 2px 0 0; max-width: 72ch; color: var(--dsw-alias-label-secondary); font-size: 12px; }
.dsh-mc-count { font-size: 11.5px; color: var(--dsw-alias-label-secondary); padding: 2px 8px; border-radius: 999px; background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l1); white-space: nowrap; }
.dsh-mc-card { background: var(--dsw-alias-bg-layer-1); border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; }
.dsh-mc-card-pad { padding: 14px; }
.dsh-mc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; }
.dsh-mc-grid-tight { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; }
.dsh-mc-cols { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; }
.dsh-mc-cols-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; }
.dsh-mc-stack { display: flex; flex-direction: column; gap: 10px; }
.dsh-mc-stack-sm { display: flex; flex-direction: column; gap: 6px; }
.dsh-mc-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.dsh-mc-spacer { flex: 1; }
.dsh-mc-hint { color: var(--dsw-alias-label-secondary); font-size: 11.5px; line-height: 1.45; }
.dsh-mc-error { color: var(--dsw-alias-state-error-primary); font-size: 11.5px; line-height: 1.4; }
.dsh-mc-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
.dsh-mc-code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; font-size: 11.5px; background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l1); padding: 0 5px; border-radius: 4px; word-break: break-all; }
.dsh-mc-btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 30px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l1);
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s;
}
.dsh-mc-btn:hover:not(:disabled) { background: var(--dsw-alias-bg-layer-2); border-color: var(--dsw-alias-border-l2); }
.dsh-mc-btn:active:not(:disabled) { background: var(--dsw-alias-bg-layer-2); }
.dsh-mc-btn:focus-visible { outline: 2px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent); outline-offset: 1px; }
.dsh-mc-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.dsh-mc-btn--primary { background: color-mix(in srgb, var(--dsw-alias-brand-primary) 84%, #000); border-color: transparent; color: #fff; }
.dsh-mc-btn--primary:hover:not(:disabled) { background: color-mix(in srgb, var(--dsw-alias-brand-primary) 74%, #000); border-color: transparent; }
.dsh-mc-btn--ghost { background: transparent; border-color: transparent; color: var(--dsw-alias-label-secondary); }
.dsh-mc-btn--ghost:hover:not(:disabled) { background: var(--dsw-alias-bg-layer-2); border-color: transparent; color: var(--dsw-alias-label-primary); }
.dsh-mc-btn--danger { color: var(--dsw-alias-state-error-primary); border-color: var(--dsw-alias-border-l1); }
.dsh-mc-btn--danger:hover:not(:disabled) { background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent); border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 35%, var(--dsw-alias-border-l1)); }
.dsh-mc-btn--sm { height: 26px; padding: 0 9px; border-radius: 7px; font-size: 12px; }
.dsh-mc-btn--icon { width: 28px; height: 28px; padding: 0; }
.dsh-mc-btn--icon.dsh-mc-btn--sm { width: 26px; height: 26px; }
.dsh-mc-field { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
.dsh-mc-field-label { font-size: 12px; font-weight: 550; color: var(--dsw-alias-label-primary); }
.dsh-mc-input, .dsh-mc-select, .dsh-mc-textarea {
  width: 100%;
  height: 31px;
  padding: 0 9px;
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12.5px;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.dsh-mc-input::placeholder, .dsh-mc-textarea::placeholder { color: var(--dsw-alias-label-secondary); opacity: 0.7; }
.dsh-mc-input:hover:not(:disabled), .dsh-mc-select:hover:not(:disabled), .dsh-mc-textarea:hover:not(:disabled) { border-color: var(--dsw-alias-border-l2); }
.dsh-mc-input:focus, .dsh-mc-select:focus, .dsh-mc-textarea:focus { border-color: var(--dsw-alias-brand-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 18%, transparent); }
.dsh-mc-input:disabled, .dsh-mc-select:disabled { opacity: 0.55; cursor: not-allowed; }
.dsh-mc-input.is-bad { border-color: var(--dsw-alias-state-error-primary); }
.dsh-mc-textarea { height: auto; min-height: 64px; padding: 7px 9px; resize: vertical; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 11.5px; }
.dsh-mc-select-wrap { position: relative; display: block; min-width: 0; }
.dsh-mc-select { appearance: none; padding-right: 27px; cursor: pointer; }
.dsh-mc-select-chevron { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none; color: var(--dsw-alias-label-secondary); }
.dsh-mc-switch-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 7px 0; }
.dsh-mc-switch-text { min-width: 0; }
.dsh-mc-switch-label { display: block; font-size: 12.5px; color: var(--dsw-alias-label-primary); }
.dsh-mc-switch-hint { display: block; margin-top: 1px; color: var(--dsw-alias-label-secondary); font-size: 11.5px; line-height: 1.4; }
.dsh-mc-switch { position: relative; width: 34px; height: 20px; flex: none; margin-top: 1px; }
.dsh-mc-switch input { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; opacity: 0; cursor: pointer; }
.dsh-mc-switch-track { position: absolute; inset: 0; border-radius: 999px; background: color-mix(in srgb, var(--dsw-alias-label-secondary) 28%, transparent); transition: background 0.16s; }
.dsh-mc-switch-thumb { position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.28); transition: transform 0.16s; }
.dsh-mc-switch input:checked + .dsh-mc-switch-track { background: var(--dsw-alias-brand-primary); }
.dsh-mc-switch input:checked + .dsh-mc-switch-track .dsh-mc-switch-thumb { transform: translateX(14px); }
.dsh-mc-switch input:focus-visible + .dsh-mc-switch-track { outline: 2px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent); outline-offset: 2px; }
.dsh-mc-switch input:disabled { cursor: not-allowed; }
.dsh-mc-switch input:disabled + .dsh-mc-switch-track { opacity: 0.5; }
.dsh-mc-chip { display: inline-flex; align-items: center; gap: 4px; padding: 1px 7px; border-radius: 999px; background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-secondary); font-size: 11px; line-height: 1.5; white-space: nowrap; }
.dsh-mc-chip.is-brand { color: var(--dsw-alias-brand-primary); border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 28%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, transparent); }
.dsh-mc-chip.is-warn { color: var(--dsw-alias-state-warn-primary); border-color: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 32%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 8%, transparent); }
.dsh-mc-chips { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
.dsh-mc-tabs { display: flex; align-items: center; gap: 2px; padding: 0 12px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-mc-tab { appearance: none; border: 0; border-bottom: 2px solid transparent; background: transparent; color: var(--dsw-alias-label-secondary); padding: 9px 10px 8px; margin-bottom: -1px; font: inherit; font-size: 12.5px; cursor: pointer; }
.dsh-mc-tab:hover { color: var(--dsw-alias-label-primary); }
.dsh-mc-tab:focus-visible { outline: 2px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent); outline-offset: -2px; border-radius: 4px; }
.dsh-mc-tab.is-active { color: var(--dsw-alias-label-primary); border-bottom-color: var(--dsw-alias-brand-primary); font-weight: 600; }
.dsh-mc-route { overflow: hidden; }
.dsh-mc-route-head { width: 100%; display: flex; align-items: center; gap: 11px; padding: 12px 14px; border: 0; background: transparent; color: inherit; font: inherit; text-align: left; cursor: pointer; }
.dsh-mc-route-head:hover { background: var(--dsw-alias-bg-layer-2); }
.dsh-mc-route-head:focus-visible { outline: 2px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent); outline-offset: -2px; }
.dsh-mc-route-icon { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; flex: none; color: var(--dsw-alias-brand-primary); background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent); }
.dsh-mc-route-main { min-width: 0; flex: 1; }
.dsh-mc-route-name { display: block; font-size: 13.5px; font-weight: 600; line-height: 1.35; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dsh-mc-route-sub { display: block; margin-top: 1px; color: var(--dsw-alias-label-secondary); font-size: 11.5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dsh-mc-route-chevron { color: var(--dsw-alias-label-secondary); flex: none; transition: transform 0.16s; }
.dsh-mc-route.is-open .dsh-mc-route-chevron { transform: rotate(90deg); }
.dsh-mc-route-body { padding: 14px; border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-mc-model { display: flex; align-items: center; flex-wrap: nowrap; gap: 8px; padding: 8px 10px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 10px; background: var(--dsw-alias-bg-base); transition: border-color 0.15s, background 0.15s; }
.dsh-mc-model:hover { border-color: var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-layer-1); }
.dsh-mc-model-main { min-width: 0; flex: 1 1 auto; display: flex; align-items: baseline; gap: 6px; overflow: hidden; }
.dsh-mc-model-name { flex: 0 1 auto; min-width: 0; font-size: 12.5px; font-weight: 600; line-height: 1.4; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dsh-mc-model-id { flex: 0 1 auto; min-width: 0; margin-top: 0; color: var(--dsw-alias-label-secondary); font-size: 11px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dsh-mc-model-chips { display: flex; align-items: center; gap: 5px; flex: 0 1 auto; flex-wrap: nowrap; overflow: hidden; justify-content: flex-end; }
.dsh-mc-model-chips .dsh-mc-chip { flex: 0 0 auto; }
.dsh-mc-model > .dsh-mc-btn { flex: 0 0 auto; }
.dsh-mc-preset { display: flex; flex-direction: column; gap: 7px; padding: 12px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 11px; background: var(--dsw-alias-bg-layer-1); transition: border-color 0.15s, box-shadow 0.15s; }
.dsh-mc-preset:hover { border-color: var(--dsw-alias-border-l2); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04); }
.dsh-mc-preset-top { display: flex; align-items: center; gap: 8px; }
.dsh-mc-preset-icon { width: 26px; height: 26px; border-radius: 7px; display: grid; place-items: center; flex: none; color: var(--dsw-alias-brand-primary); background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent); }
.dsh-mc-preset-title { font-size: 12.5px; font-weight: 600; }
.dsh-mc-preset-desc { color: var(--dsw-alias-label-secondary); font-size: 11.5px; line-height: 1.45; flex: 1; }
.dsh-mc-preset-foot { display: flex; justify-content: flex-end; }
.dsh-mc-preset-action { color: var(--dsw-alias-brand-primary); font-size: 12px; font-weight: 600; }
.dsh-mc-preset:focus-visible { outline: 2px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent); outline-offset: 2px; }
.dsh-mc-banner { display: flex; align-items: flex-start; gap: 9px; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); font-size: 12px; line-height: 1.5; }
.dsh-mc-banner.is-warn { border-color: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 38%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 7%, transparent); }
.dsh-mc-banner.is-bad { border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 42%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 7%, transparent); }
.dsh-mc-banner.is-good { border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 38%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 6%, transparent); }
.dsh-mc-banner-icon { flex: none; margin-top: 1px; }
.dsh-mc-banner-body { min-width: 0; flex: 1; }
.dsh-mc-banner-title { font-weight: 600; }
.dsh-mc-banner-list { margin: 6px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 4px; color: var(--dsw-alias-label-secondary); }
.dsh-mc-banner-list li { position: relative; padding-left: 12px; }
.dsh-mc-banner-list li::before { content: ""; position: absolute; left: 2px; top: 8px; width: 4px; height: 4px; border-radius: 50%; background: var(--dsw-alias-label-secondary); opacity: 0.6; }
.dsh-mc-empty { padding: 26px 18px; text-align: center; border: 1px dashed var(--dsw-alias-border-l2); border-radius: 12px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-bg-layer-1); }
.dsh-mc-empty-title { color: var(--dsw-alias-label-primary); font-size: 13px; font-weight: 600; margin-bottom: 4px; }
.dsh-mc-collapse { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-mc-collapse:first-child { border-top: 0; }
.dsh-mc-collapse-head { width: 100%; display: flex; align-items: center; gap: 8px; padding: 11px 2px; border: 0; background: transparent; color: inherit; font: inherit; text-align: left; cursor: pointer; }
.dsh-mc-collapse-head:hover .dsh-mc-collapse-title { color: var(--dsw-alias-brand-primary); }
.dsh-mc-collapse-head:focus-visible { outline: 2px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent); outline-offset: 2px; border-radius: 6px; }
.dsh-mc-collapse-title { font-size: 12.5px; font-weight: 600; }
.dsh-mc-collapse-sub { color: var(--dsw-alias-label-secondary); font-size: 11.5px; }
.dsh-mc-collapse-body { padding: 2px 2px 14px; }
.dsh-mc-level-row { display: grid; grid-template-columns: 150px minmax(0, 1fr); align-items: center; gap: 10px; }
.dsh-mc-level-toggle { display: inline-flex; align-items: center; gap: 7px; cursor: pointer; }
.dsh-mc-level-toggle input { accent-color: var(--dsw-alias-brand-primary); margin: 0; }
.dsh-mc-level-name { font-size: 12px; color: var(--dsw-alias-label-secondary); }
.dsh-mc-apply-all { display: flex; align-items: flex-start; gap: 7px; max-width: 270px; font-size: 12px; cursor: pointer; }
.dsh-mc-apply-all input { accent-color: var(--dsw-alias-brand-primary); margin: 2px 0 0; }
.dsh-mc-modal-overlay { position: fixed; inset: 0; z-index: 1400; display: flex; align-items: flex-start; justify-content: center; padding: 24px; background: rgba(0, 0, 0, 0.42); backdrop-filter: blur(2px); }
.dsh-mc-modal { width: 100%; max-height: min(86vh, 660px); display: flex; flex-direction: column; overflow: hidden; background: var(--dsw-alias-bg-overlay); border: 1px solid var(--dsw-alias-border-l2); border-radius: 14px; box-shadow: 0 18px 60px rgba(0, 0, 0, 0.32); }
.dsh-mc-modal-head { display: flex; align-items: flex-start; gap: 12px; padding: 15px 18px 12px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-mc-modal-title { font-size: 15px; font-weight: 650; line-height: 1.35; }
.dsh-mc-modal-sub { margin-top: 2px; color: var(--dsw-alias-label-secondary); font-size: 11.5px; }
.dsh-mc-modal-body { flex: 1 1 auto; min-height: 0; padding: 15px 18px; overflow: auto; display: flex; flex-direction: column; gap: 14px; }
.dsh-mc-modal-foot { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; flex: 0 0 auto; padding: 12px 18px; border-top: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); }
.dsh-mc-toast { position: fixed; left: 50%; bottom: 26px; transform: translateX(-50%); z-index: 1800; display: flex; align-items: center; gap: 9px; max-width: min(560px, calc(100vw - 32px)); padding: 9px 10px 9px 13px; border-radius: 10px; border: 1px solid var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-overlay); color: var(--dsw-alias-label-primary); box-shadow: 0 10px 34px rgba(0, 0, 0, 0.24); font-size: 12.5px; }
.dsh-mc-toast.is-good { border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 45%, var(--dsw-alias-border-l1)); }
.dsh-mc-toast.is-bad { border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 50%, var(--dsw-alias-border-l1)); }
.dsh-mc-toast-text { flex: 1; min-width: 0; }
.dsh-mc-raw { margin: 8px 0 0; padding: 10px; max-height: 320px; overflow: auto; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; background: var(--dsw-alias-bg-base); font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 11px; line-height: 1.5; white-space: pre-wrap; word-break: break-all; }
.dsh-mc-divider { height: 1px; background: var(--dsw-alias-border-l1); margin: 2px 0; }
.dsh-mc-pill-group { display: flex; gap: 6px; flex-wrap: wrap; }
.dsh-mc-pill { appearance: none; display: inline-flex; align-items: center; gap: 5px; height: 27px; padding: 0 10px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 999px; background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-secondary); font: inherit; font-size: 12px; cursor: pointer; }
.dsh-mc-pill:hover { border-color: var(--dsw-alias-border-l2); color: var(--dsw-alias-label-primary); }
.dsh-mc-pill.is-on { border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent); color: var(--dsw-alias-brand-primary); }
.dsh-mc-pill:focus-visible { outline: 2px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent); outline-offset: 1px; }
.dsh-mc-icon { flex: none; }
@media (max-width: 660px) {
  .dsh-mc-cols, .dsh-mc-cols-3 { grid-template-columns: 1fr; }
  .dsh-mc-model { align-items: flex-start; flex-wrap: wrap; }
  .dsh-mc-model-chips { justify-content: flex-start; }
}
`;

    // ---------------------------------------------------------------------
    // UI primitives
    // ---------------------------------------------------------------------
    var ICON_PATHS = {
      chevronDown: ["M6 9l6 6 6-6"],
      chevronRight: ["M9 6l6 6-6 6"],
      plus: ["M12 5v14", "M5 12h14"],
      trash: ["M4 7h16", "M10 11v6", "M14 11v6", "M6 7l1 13h10l1-13", "M9 7V4h6v3"],
      check: ["M4 12l5 5L20 6"],
      x: ["M6 6l12 12", "M18 6L6 18"],
      alert: ["M12 3l9 16H3z", "M12 9v5", "M12 17h.01"],
      info: ["M12 8h.01", "M11 12h1v5h1"],
      refresh: ["M20 12a8 8 0 1 1-2.3-5.7", "M20 4v5h-5"],
      cloud: ["M7 18h10a4 4 0 0 0 .8-7.9A6 6 0 0 0 6.2 9.5 4.5 4.5 0 0 0 7 18z"],
      sparkles: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z", "M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"],
      image: ["M4 5h16v14H4z", "M8 13l3-3 3 3 2-2 3 3", "M9 9h.01"],
      text: ["M5 6h14", "M5 12h10", "M5 18h7"],
      edit: ["M4 20h4L20 8l-4-4L4 16z", "M14 6l4 4"],
      server: ["M4 5h16v6H4z", "M4 13h16v6H4z", "M8 8h.01", "M8 16h.01"],
      shield: ["M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z", "M9 12l2 2 4-4"],
      waves: ["M3 8c3 0 3 3 6 3s3-3 6-3 3 3 6 3", "M3 15c3 0 3 3 6 3s3-3 6-3 3 3 6 3"],
      hexagon: ["M12 3l8 4.5v9L12 21l-8-4.5v-9z"],
      brain: ["M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 8 18h1z", "M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A3 3 0 0 1 16 18h-1z", "M9 4v14", "M15 4v14", "M9 10h6"],
      lock: ["M6 11h12v9H6z", "M8 11V8a4 4 0 0 1 8 0v3"],
      globe: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M3 12h18", "M12 3c3 3 3 15 0 18", "M12 3c-3 3-3 15 0 18"],
      copy: ["M9 9h11v11H9z", "M5 15H4V4h11v1"],
      undo: ["M4 9h9a5 5 0 0 1 0 10H8", "M4 9l4-4", "M4 9l4 4"],
      save: ["M5 3h11l3 3v15H5z", "M8 3v6h7V3", "M8 14h8v7H8z"]
    };

    function Icon(props) {
      var paths = ICON_PATHS[props.name] || [];
      return h("svg", {
        className: "dsh-mc-icon" + (props.className ? " " + props.className : ""),
        width: props.size || 16,
        height: props.size || 16,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        focusable: "false"
      }, paths.map(function (d, index) {
        return h("path", { key: index, d: d });
      }));
    }

    function Btn(props) {
      var className = "dsh-mc-btn dsh-mc-btn--" + (props.kind || "default");
      if (props.size === "sm") className += " dsh-mc-btn--sm";
      if (!props.children) className += " dsh-mc-btn--icon";
      if (props.className) className += " " + props.className;
      return h("button", {
        type: "button",
        className: className,
        onClick: props.onClick,
        disabled: props.disabled,
        title: props.title,
        "aria-label": !props.children ? props.title : undefined
      }, props.icon ? h(Icon, { name: props.icon, size: props.size === "sm" ? 13 : 15 }) : null, props.children ? h("span", null, props.children) : null);
    }

    function Field(props) {
      return h("label", { className: "dsh-mc-field" + (props.className ? " " + props.className : "") },
        h("span", { className: "dsh-mc-field-label" }, props.label),
        props.children,
        props.hint ? h("span", { className: "dsh-mc-hint" }, props.hint) : null
      );
    }

    function TextInput(props) {
      var state = React.useState(String(props.value === undefined || props.value === null ? "" : props.value));
      var draft = state[0];
      var setDraft = state[1];
      React.useEffect(function () {
        setDraft(String(props.value === undefined || props.value === null ? "" : props.value));
      }, [props.value]);
      return h("input", {
        className: "dsh-mc-input" + (props.bad ? " is-bad" : ""),
        value: draft,
        disabled: props.disabled,
        placeholder: props.placeholder,
        spellCheck: false,
        onChange: function (event) {
          setDraft(event.target.value);
          if (typeof props.onChange === "function") props.onChange(event.target.value);
        },
        onBlur: function () {
          var next = String(props.value === undefined || props.value === null ? "" : props.value);
          if (draft !== next && typeof props.onCommit === "function") props.onCommit(draft);
        },
        onKeyDown: function (event) {
          if (event.key === "Enter") event.currentTarget.blur();
          if (event.key === "Escape") {
            setDraft(String(props.value === undefined || props.value === null ? "" : props.value));
            event.currentTarget.blur();
          }
        }
      });
    }

    function NumberInput(props) {
      var state = React.useState(props.value === undefined || props.value === null ? "" : String(props.value));
      var draft = state[0];
      var setDraft = state[1];
      var errorState = React.useState("");
      var error = errorState[0];
      var setError = errorState[1];
      React.useEffect(function () {
        setDraft(props.value === undefined || props.value === null ? "" : String(props.value));
      }, [props.value]);
      return h("div", { className: "dsh-mc-stack-sm" },
        h("input", {
          className: "dsh-mc-input" + (error ? " is-bad" : ""),
          value: draft,
          disabled: props.disabled,
          placeholder: props.placeholder,
          inputMode: "numeric",
          "aria-invalid": error !== "",
          onChange: function (event) {
            setDraft(event.target.value);
            if (error) setError("");
          },
          onBlur: function () {
            var trimmed = draft.trim();
            if (trimmed === "") {
              setError("");
              if (props.value !== undefined && props.value !== null && props.onCommit) props.onCommit(null);
              return;
            }
            var parsed = Number(trimmed);
            if (!Number.isFinite(parsed)) {
              setError(props.invalidText || "Enter a number.");
              return;
            }
            setError("");
            if (parsed !== props.value && props.onCommit) props.onCommit(parsed);
          },
          onKeyDown: function (event) {
            if (event.key === "Enter") event.currentTarget.blur();
          }
        }),
        error ? h("span", { className: "dsh-mc-error" }, error) : null
      );
    }

    function CapacityInput(props) {
      var state = React.useState(formatCapacity(props.value));
      var draft = state[0];
      var setDraft = state[1];
      var errorState = React.useState("");
      var error = errorState[0];
      var setError = errorState[1];
      React.useEffect(function () {
        setDraft(formatCapacity(props.value));
      }, [props.value]);
      return h("div", { className: "dsh-mc-stack-sm" },
        h("input", {
          className: "dsh-mc-input" + (error ? " is-bad" : ""),
          value: draft,
          disabled: props.disabled,
          placeholder: props.placeholder || "—",
          "aria-invalid": error !== "",
          onChange: function (event) {
            setDraft(event.target.value);
            if (error) setError("");
          },
          onBlur: function () {
            var trimmed = draft.trim();
            if (trimmed === "") {
              setError("");
              if (props.value !== undefined && props.value !== null && props.onCommit) props.onCommit(null);
              return;
            }
            var parsed = parseCapacity(trimmed);
            if (Number.isNaN(parsed)) {
              setError(props.invalidText || "Use a number or a K/M suffix.");
              return;
            }
            setError("");
            if (parsed !== props.value && props.onCommit) props.onCommit(parsed);
          },
          onKeyDown: function (event) {
            if (event.key === "Enter") event.currentTarget.blur();
          }
        }),
        error ? h("span", { className: "dsh-mc-error" }, error) : null,
        props.hint ? h("span", { className: "dsh-mc-hint" }, props.hint) : null
      );
    }

    function Select(props) {
      var options = props.options || [];
      var value = props.value;
      var present = value !== undefined && value !== null;
      var items = [];
      if (props.allowUnset) items.push({ value: "", label: props.unsetLabel || "—", raw: undefined });
      options.forEach(function (option) {
        var item = typeof option === "string" ? { value: option, label: option, raw: option } : { value: String(option.value), label: option.label, raw: option.value };
        items.push(item);
      });
      if (!present && !props.allowUnset) items.unshift({ value: "", label: "—", raw: undefined, placeholder: true });
      return h("div", { className: "dsh-mc-select-wrap", style: props.width ? { width: props.width } : undefined },
        h("select", {
          className: "dsh-mc-select",
          value: present ? String(value) : "",
          disabled: props.disabled,
          "aria-label": props.label,
          onChange: function (event) {
            var next = event.target.value;
            if (next === "") {
              if (props.onChange) props.onChange(undefined);
              return;
            }
            var match = items.find(function (item) { return item.value === next; });
            if (props.onChange) props.onChange(match ? match.raw : next);
          }
        }, items.map(function (item) {
          return h("option", { key: item.value + "::" + item.label, value: item.value, disabled: item.placeholder }, item.label);
        })),
        h(Icon, { name: "chevronDown", size: 14, className: "dsh-mc-select-chevron" })
      );
    }

    function Switch(props) {
      return h("label", { className: "dsh-mc-switch-row" },
        h("span", { className: "dsh-mc-switch-text" },
          h("span", { className: "dsh-mc-switch-label" }, props.label),
          props.hint ? h("span", { className: "dsh-mc-switch-hint" }, props.hint) : null
        ),
        h("span", { className: "dsh-mc-switch" },
          h("input", {
            type: "checkbox",
            checked: props.checked === true,
            disabled: props.disabled,
            onChange: function (event) { if (props.onChange) props.onChange(event.target.checked); }
          }),
          h("span", { className: "dsh-mc-switch-track" }, h("span", { className: "dsh-mc-switch-thumb" }))
        )
      );
    }

    function Badge(props) {
      return h("span", { className: "dsh-mc-chip" + (props.tone ? " is-" + props.tone : "") }, props.icon ? h(Icon, { name: props.icon, size: 11 }) : null, props.children);
    }

    function SectionTitle(props) {
      return h("div", { className: "dsh-mc-section-head" },
        h("div", null,
          h("h2", { className: "dsh-mc-section-title" }, props.title),
          props.description ? h("p", { className: "dsh-mc-section-desc" }, props.description) : null
        ),
        props.aside || null
      );
    }

    function Collapsible(props) {
      var state = React.useState(props.defaultOpen === true);
      var open = state[0];
      var setOpen = state[1];
      return h("div", { className: "dsh-mc-collapse" },
        h("button", { type: "button", className: "dsh-mc-collapse-head", onClick: function () { setOpen(!open); }, "aria-expanded": open },
          h(Icon, { name: open ? "chevronDown" : "chevronRight", size: 14 }),
          h("span", { className: "dsh-mc-collapse-title" }, props.title),
          props.badge ? h(Badge, null, props.badge) : null,
          h("span", { className: "dsh-mc-spacer" }),
          props.subtitle ? h("span", { className: "dsh-mc-collapse-sub" }, props.subtitle) : null
        ),
        open ? h("div", { className: "dsh-mc-collapse-body" }, props.children) : null
      );
    }

    function Modal(props) {
      React.useEffect(function () {
        function onKey(event) {
          if (event.key === "Escape") {
            // The settings shell also closes on Escape; keep the dialog in charge
            // while it is open by handling the key in the capture phase.
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            props.onClose();
          }
        }
        function onKeyUp(event) {
          if (event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
          }
        }
        window.addEventListener("keydown", onKey, true);
        window.addEventListener("keyup", onKeyUp, true);
        return function () {
          window.removeEventListener("keydown", onKey, true);
          window.removeEventListener("keyup", onKeyUp, true);
        };
      }, [props.onClose]);
      return ReactDOM.createPortal(
        h("div", {
          className: "dsh-mc-modal-overlay",
          onMouseDown: function (event) { if (event.target === event.currentTarget) props.onClose(); }
        },
          h("div", {
            className: "dsh-mc-modal",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": props.title,
            style: {
              maxWidth: props.width || 600,
              height: props.height || undefined
            }
          },
            h("div", { className: "dsh-mc-modal-head" },
              h("div", { style: { flex: 1, minWidth: 0 } },
                h("div", { className: "dsh-mc-modal-title" }, props.title),
                props.subtitle ? h("div", { className: "dsh-mc-modal-sub" }, props.subtitle) : null
              ),
              h(Btn, { kind: "ghost", size: "sm", title: props.closeLabel || "Close", onClick: props.onClose, icon: "x" })
            ),
            h("div", { className: "dsh-mc-modal-body" }, props.children),
            props.footer ? h("div", { className: "dsh-mc-modal-foot" }, props.footer) : null
          )
        ),
        document.body
      );
    }

    function Toast(props) {
      if (!props.toast) return null;
      return ReactDOM.createPortal(
        h("div", { className: "dsh-mc-toast" + (props.toast.tone === "good" ? " is-good" : props.toast.tone === "bad" ? " is-bad" : ""), role: props.toast.tone === "bad" ? "alert" : "status", "aria-live": props.toast.tone === "bad" ? "assertive" : "polite" },
          h(Icon, { name: props.toast.tone === "good" ? "check" : props.toast.tone === "bad" ? "alert" : "info", size: 15 }),
          h("span", { className: "dsh-mc-toast-text" }, props.toast.text),
          h(Btn, { kind: "ghost", size: "sm", title: props.closeLabel || "Close", icon: "x", onClick: props.onClose })
        ),
        document.body
      );
    }

    // ---------------------------------------------------------------------
    // Shared UI helpers
    // ---------------------------------------------------------------------
    function useScope(scope) {
      return React.useSyncExternalStore(
        function (callback) { return scope.subscribe(callback); },
        function () { return scope.getSnapshot(); },
        function () { return scope.getSnapshot(); }
      );
    }

    function resultMessage(t, result) {
      var code = result && result.message;
      if (!code) return t("unknownError");
      if (code === "settings-refused") return t("settingsRefused");
      if (code === "route-not-found") return t("routeNotFound");
      if (code === "model-not-found") return t("modelNotFound");
      return String(code);
    }

    function notifyResult(t, notify, result, okKey) {
      if (result && result.ok) notify("good", t(okKey || "saved"));
      else notify("bad", t("writeFailed") + " " + resultMessage(t, result));
    }

    function capacityText(value) {
      return Number.isInteger(value) && value > 0 ? formatCapacity(value) : "";
    }

    function normalizeEffortDraft(value) {
      if (!isRecord(value)) return fillEfforts(fullThinkingLevels());
      var out = {};
      THINKING_LEVELS.forEach(function (level) {
        var raw = value[level];
        out[level] = typeof raw === "string" ? raw : "";
      });
      return out;
    }

    function fillEfforts(source) {
      var out = {};
      THINKING_LEVELS.forEach(function (level) {
        var value = source[level];
        out[level] = value === null || value === undefined ? "" : String(value);
      });
      return out;
    }

    // ---------------------------------------------------------------------
    // Compatibility editor
    // ---------------------------------------------------------------------
    function CompatFields(props) {
      var t = props.t;
      var lang = props.lang || "zh";
      var compat = props.compat || {};
      var state = React.useState(false);
      var showMore = state[0];
      var setShowMore = state[1];
      function setField(field, value) {
        var next = Object.assign({}, compat);
        if (value === undefined) delete next[field];
        else next[field] = value;
        props.onChange(next);
      }
      function boolField(field) {
        return h(Switch, {
          key: field,
          label: t(field),
          hint: field === "supportsDeveloperRole" ? t("supportsDeveloperRoleHint") : null,
          checked: compat[field] === true,
          disabled: props.disabled,
          onChange: function (value) { setField(field, value); }
        });
      }
      var moreFields = COMPAT_BOOLEAN_FIELDS.filter(function (field) {
        return COMPAT_COMMON_FIELDS.indexOf(field) === -1;
      });
      return h("div", { className: "dsh-mc-stack" },
        h("div", { className: "dsh-mc-hint" }, t("compatIntro")),
        h("div", { className: "dsh-mc-cols" },
          COMPAT_COMMON_FIELDS.map(boolField)
        ),
        moreFields.length > 0 ? h("div", null,
          h("button", {
            type: "button",
            className: "dsh-mc-btn dsh-mc-btn--ghost dsh-mc-btn--sm",
            onClick: function () { setShowMore(!showMore); },
            "aria-expanded": showMore
          }, h(Icon, { name: showMore ? "chevronDown" : "chevronRight", size: 13 }), h("span", null, t("compatMore") + " (" + moreFields.length + ")")),
          showMore ? h("div", { className: "dsh-mc-cols", style: { marginTop: 4 } }, moreFields.map(boolField)) : null
        ) : null,
        h("div", { className: "dsh-mc-cols-3" },
          COMPAT_SELECT_FIELDS.map(function (entry) {
            return h(Field, { key: entry.key, label: t(entry.key) },
              h(Select, {
                value: compat[entry.key],
                options: entry.options,
                allowUnset: true,
                unsetLabel: "—",
                disabled: props.disabled,
                onChange: function (value) { setField(entry.key, value); }
              })
            );
          })
        ),
        h("div", { className: "dsh-mc-cols-3" },
          COMPAT_NUMBER_FIELDS.map(function (field) {
            return h(Field, { key: field, label: t(field) },
              h(NumberInput, {
                value: compat[field],
                disabled: props.disabled,
                invalidText: t("invalidNumber"),
                onCommit: function (value) { setField(field, value === null ? undefined : value); }
              })
            );
          })
        )
      );
    }

    // ---------------------------------------------------------------------
    // Route defaults
    // ---------------------------------------------------------------------
    function RouteDefaults(props) {
      var store = props.store;
      var t = props.t;
      var route = props.route;
      var entry = props.entry;
      var notify = props.notify;
      function write(suffix, value, unset) {
        store.writeRouteField(route, suffix, value, { unset: unset }).then(function (result) {
          notifyResult(t, notify, result);
        });
      }
      function setCapacity(suffix, value) {
        if (value === null) write(suffix, undefined, true);
        else write(suffix, value);
      }
      function toggleInput(modality, on) {
        var current = Array.isArray(entry.defaultInput) ? entry.defaultInput : [];
        var next = on ? current.concat([modality]).filter(function (item, index, list) { return list.indexOf(item) === index; }) : current.filter(function (item) { return item !== modality; });
        write(["defaultInput"], next);
      }
      var budgets = entry.thinkingBudgets || {};
      function setBudget(key, value) {
        var next = Object.assign({}, budgets);
        if (value === null) delete next[key];
        else next[key] = value;
        if (Object.keys(next).length === 0) write(["thinkingBudgets"], undefined, true);
        else write(["thinkingBudgets"], next);
      }
      return h("div", { className: "dsh-mc-stack" },
        h("div", { className: "dsh-mc-hint" }, t("defaultsIntro")),
        h("div", { className: "dsh-mc-cols-3" },
          h(Field, { label: t("defaultContextWindow"), hint: t("capacityHint") },
            h(CapacityInput, { value: entry.defaultContextWindow, disabled: props.disabled, placeholder: t("notSet"), invalidText: t("invalidCapacity"), onCommit: function (value) { setCapacity(["defaultContextWindow"], value); } })
          ),
          h(Field, { label: t("defaultMaxTokens"), hint: t("capacityHint") },
            h(CapacityInput, { value: entry.defaultMaxTokens, disabled: props.disabled, placeholder: t("notSet"), invalidText: t("invalidCapacity"), onCommit: function (value) { setCapacity(["defaultMaxTokens"], value); } })
          ),
          h(Field, { label: t("reasoningDefault") },
            h(Select, {
              value: entry.reasoning,
              options: THINKING_LEVELS.map(function (level) { return { value: level, label: LEVEL_TEXT[props.lang || "zh"][level] || level }; }),
              allowUnset: true,
              unsetLabel: "—",
              disabled: props.disabled,
              onChange: function (value) { if (value === undefined) write(["reasoning"], undefined, true); else write(["reasoning"], value); }
            })
          )
        ),
        h("div", { className: "dsh-mc-cols" },
          h(Field, { label: t("defaultInput") },
            h("div", { className: "dsh-mc-pill-group" },
              MODALITIES.map(function (modality) {
                var on = Array.isArray(entry.defaultInput) && entry.defaultInput.indexOf(modality) !== -1;
                return h("button", {
                  key: modality,
                  type: "button",
                  className: "dsh-mc-pill" + (on ? " is-on" : ""),
                  disabled: props.disabled,
                  onClick: function () { toggleInput(modality, !on); }
                }, h(Icon, { name: modality === "image" ? "image" : "text", size: 12 }), h("span", null, t(modality === "text" ? "modalityText" : "modalityImage")));
              })
            )
          ),
          h(Field, { label: t("thinkingBudgets") },
            h("div", { className: "dsh-mc-cols", style: { gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))" } },
              ["minimal", "low", "medium", "high"].map(function (key) {
                return h(Field, { key: key, label: LEVEL_TEXT[props.lang || "zh"][key] || key },
                  h(NumberInput, { value: budgets[key], disabled: props.disabled, invalidText: t("invalidNumber"), onCommit: function (value) { setBudget(key, value); } })
                );
              })
            )
          )
        ),
        h("div", { className: "dsh-mc-cols-3" },
          h(Field, { label: t("cacheRetention") },
            h(Select, {
              value: entry.cacheRetention,
              options: ["none", "short", "long"],
              allowUnset: true,
              unsetLabel: "—",
              disabled: props.disabled,
              onChange: function (value) { if (value === undefined) write(["cacheRetention"], undefined, true); else write(["cacheRetention"], value); }
            })
          ),
          h(Field, { label: t("transport") },
            h(Select, {
              value: entry.transport,
              options: ["sse", "websocket", "websocket-cached", "auto"],
              allowUnset: true,
              unsetLabel: "—",
              disabled: props.disabled,
              onChange: function (value) { if (value === undefined) write(["transport"], undefined, true); else write(["transport"], value); }
            })
          )
        )
      );
    }

    // ---------------------------------------------------------------------
    // Advanced panel
    // ---------------------------------------------------------------------
    function AdvancedPanel(props) {
      var store = props.store;
      var t = props.t;
      var route = props.route;
      var entry = props.entry;
      var notify = props.notify;
      var headerState = React.useState(function () { return Object.keys(entry.headers || {}).map(function (key) { return { key: key, value: String(entry.headers[key]) }; }); });
      var rows = headerState[0];
      var setRows = headerState[1];
      var credentialKeys = rows.map(function (row) { return row.key.trim(); }).filter(function (key) { return key !== "" && isCredentialHeader(key); });
      var copyState = React.useState(false);
      var copied = copyState[0];
      var setCopied = copyState[1];
      function write(suffix, value, unset) {
        store.writeRouteField(route, suffix, value, { unset: unset }).then(function (result) {
          notifyResult(t, notify, result);
        });
      }
      function saveHeaders() {
        var next = {};
        rows.forEach(function (row) {
          var key = row.key.trim();
          if (key === "") return;
          if (isCredentialHeader(key)) return;
          next[key] = row.value;
        });
        if (Object.keys(next).length === 0) write(["headers"], undefined, true);
        else write(["headers"], next);
      }
      function copyRaw() {
        var text = JSON.stringify(entry || {}, null, 2);
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
          notify("bad", t("unknownError"));
          return;
        }
        navigator.clipboard.writeText(text).then(function () {
          setCopied(true);
          setTimeout(function () { setCopied(false); }, 1400);
        }, function () { notify("bad", t("unknownError")); });
      }
      return h("div", { className: "dsh-mc-stack" },
        h("div", { className: "dsh-mc-cols-3" },
          PROVIDER_NUMBER_FIELDS.map(function (field) {
            return h(Field, { key: field, label: t(field) },
              h(NumberInput, {
                value: entry[field],
                disabled: props.disabled,
                invalidText: t("invalidNumber"),
                onCommit: function (value) {
                  if (value === null) write([field], undefined, true);
                  else write([field], value);
                }
              })
            );
          })
        ),
        h(Field, { label: t("headers") },
          h("div", { className: "dsh-mc-stack-sm" },
            credentialKeys.length > 0 ? h("div", { className: "dsh-mc-banner is-bad" },
              h(Icon, { name: "alert", size: 15, className: "dsh-mc-banner-icon" }),
              h("div", { className: "dsh-mc-banner-body" }, t("credentialWarning", { names: credentialKeys.join(", ") }))
            ) : null,
            rows.map(function (row, index) {
              return h("div", { key: index, className: "dsh-mc-row" },
                h("div", { style: { flex: "1 1 160px", minWidth: 0 } },
                  h(TextInput, {
                    value: row.key,
                    placeholder: t("headerKey"),
                    disabled: props.disabled,
                    onChange: function (key) {
                      setRows(rows.map(function (item, itemIndex) { return itemIndex === index ? Object.assign({}, item, { key: key }) : item; }));
                    },
                    onCommit: function (key) {
                      setRows(rows.map(function (item, itemIndex) { return itemIndex === index ? Object.assign({}, item, { key: key }) : item; }));
                    }
                  })
                ),
                h("div", { style: { flex: "2 1 240px", minWidth: 0 } },
                  h(TextInput, {
                    value: row.value,
                    placeholder: t("headerValue"),
                    disabled: props.disabled,
                    onChange: function (value) {
                      setRows(rows.map(function (item, itemIndex) { return itemIndex === index ? Object.assign({}, item, { value: value }) : item; }));
                    },
                    onCommit: function (value) {
                      setRows(rows.map(function (item, itemIndex) { return itemIndex === index ? Object.assign({}, item, { value: value }) : item; }));
                    }
                  })
                ),
                h(Btn, {
                  kind: "ghost",
                  size: "sm",
                  title: t("remove"),
                  icon: "trash",
                  disabled: props.disabled,
                  onClick: function () {
                    setRows(rows.filter(function (item, itemIndex) { return itemIndex !== index; }));
                  }
                })
              );
            }),
            h("div", { className: "dsh-mc-row" },
              h(Btn, {
                size: "sm",
                icon: "plus",
                disabled: props.disabled,
                onClick: function () { setRows(rows.concat([{ key: "", value: "" }])); }
              }, t("addHeader")),
              h(Btn, { size: "sm", kind: "primary", icon: "save", disabled: props.disabled, onClick: saveHeaders }, t("saveHeaders"))
            )
          )
        ),
        h(Collapsible, { title: t("rawFold") },
          h("div", { className: "dsh-mc-row" },
            h(Btn, { size: "sm", kind: "ghost", icon: "copy", onClick: copyRaw }, copied ? t("copied") : t("copy"))
          ),
          h("pre", { className: "dsh-mc-raw" }, JSON.stringify(entry || {}, null, 2))
        )
      );
    }

    // ---------------------------------------------------------------------
    // Model editor dialog
    // ---------------------------------------------------------------------
    function ModelDialog(props) {
      var store = props.store;
      var t = props.t;
      var route = props.route;
      var model = props.model;
      var lang = props.lang;
      var notify = props.notify;
      var entry = store.route(route) || {};
      var routeName = entry.displayName || route;
      var modelCount = store.modelsOf(route).length;
      var nameState = React.useState(model.name || "");
      var name = nameState[0];
      var setName = nameState[1];
      var capacityState = React.useState({ contextWindow: model.contextWindow, maxTokens: model.maxTokens });
      var capacity = capacityState[0];
      var setCapacity = capacityState[1];
      var inputState = React.useState(Array.isArray(model.input) ? model.input.slice() : []);
      var input = inputState[0];
      var setInput = inputState[1];
      var thinkingState = React.useState(isRecord(model.reasoningEfforts) && effortValues(model.reasoningEfforts).length > 0);
      var thinking = thinkingState[0];
      var setThinking = thinkingState[1];
      var effortState = React.useState(function () { return normalizeEffortDraft(model.reasoningEfforts); });
      var efforts = effortState[0];
      var setEfforts = effortState[1];
      var enabledState = React.useState(function () {
        var out = { off: true };
        THINKING_LEVELS.forEach(function (level) {
          if (level === "off") return;
          out[level] = isRecord(model.reasoningEfforts) && typeof model.reasoningEfforts[level] === "string" && model.reasoningEfforts[level] !== "";
        });
        return out;
      });
      var enabled = enabledState[0];
      var setEnabled = enabledState[1];
      var compatState = React.useState(function () { return deepClone(model.compat || {}); });
      var compat = compatState[0];
      var setCompat = compatState[1];
      var applyAllState = React.useState(false);
      var applyAll = applyAllState[0];
      var setApplyAll = applyAllState[1];
      var busyState = React.useState(false);
      var busy = busyState[0];
      var setBusy = busyState[1];
      var discardState = React.useState(false);
      var confirmDiscard = discardState[0];
      var setConfirmDiscard = discardState[1];
      var customState = React.useState(function () { return readCustomFill(); });
      var customPreset = customState[0];
      var setCustomPreset = customState[1];
      var customOpenState = React.useState(false);
      var customOpen = customOpenState[0];
      var setCustomOpen = customOpenState[1];
      var customNameState = React.useState(customPreset ? customPreset.name : "");
      var customName = customNameState[0];
      var setCustomName = customNameState[1];
      var customDraftState = React.useState(function () { return fillEfforts(efforts); });
      var customDraft = customDraftState[0];
      var setCustomDraft = customDraftState[1];
      var customEnabledState = React.useState(function () { return Object.assign({ off: true }, enabled); });
      var customEnabled = customEnabledState[0];
      var setCustomEnabled = customEnabledState[1];

      function snapshotDraft() {
        return JSON.stringify({
          name: name,
          contextWindow: capacity.contextWindow === undefined ? null : capacity.contextWindow,
          maxTokens: capacity.maxTokens === undefined ? null : capacity.maxTokens,
          input: input,
          thinking: thinking,
          efforts: efforts,
          enabled: enabled,
          compat: compat
        });
      }
      var originalRef = React.useRef(null);
      if (originalRef.current === null) originalRef.current = snapshotDraft();
      var dirty = snapshotDraft() !== originalRef.current;

      function requestClose() {
        if (busy) return;
        if (dirty) setConfirmDiscard(true);
        else props.onClose();
      }
      function toggleInput(modality) {
        setInput(input.indexOf(modality) === -1 ? input.concat([modality]) : input.filter(function (item) { return item !== modality; }));
      }
      function setEffort(level, value) {
        var next = Object.assign({}, efforts);
        next[level] = value;
        setEfforts(next);
      }
      function setLevelEnabled(level, on) {
        var next = Object.assign({}, enabled);
        next[level] = on;
        setEnabled(next);
        if (on && String(efforts[level] || "").trim() === "") {
          var filled = Object.assign({}, efforts);
          filled[level] = level;
          setEfforts(filled);
        }
      }
      function applyFill(source) {
        var filled = fillEfforts(source);
        var nextEnabled = { off: true };
        THINKING_LEVELS.forEach(function (level) {
          if (level === "off") return;
          nextEnabled[level] = String(filled[level] || "").trim() !== "";
        });
        setEfforts(filled);
        setEnabled(nextEnabled);
        setThinking(true);
      }
      function applyCurrent() {
        if (isRecord(model.reasoningEfforts)) {
          if (effortValues(model.reasoningEfforts).length === 0) {
            setThinking(false);
            return;
          }
          var filled = fillEfforts(model.reasoningEfforts);
          var nextEnabled = { off: true };
          THINKING_LEVELS.forEach(function (level) {
            if (level === "off") return;
            nextEnabled[level] = typeof model.reasoningEfforts[level] === "string" && model.reasoningEfforts[level] !== "";
          });
          setEfforts(filled);
          setEnabled(nextEnabled);
          setThinking(true);
          return;
        }
        setThinking(model.reasoningEfforts !== false && isRecord(model.reasoningEfforts));
      }
      function applyCustom(preset) {
        if (!preset) return;
        applyFill(preset.levels);
        setCustomOpen(false);
      }
      function openCustomEditor() {
        setCustomDraft(fillEfforts(efforts));
        setCustomEnabled(Object.assign({ off: true }, enabled));
        if (!customName) setCustomName(customPreset ? customPreset.name : "");
        setCustomOpen(true);
      }
      function toggleCustomLevel(level, on) {
        var next = Object.assign({}, customEnabled);
        next[level] = on;
        setCustomEnabled(next);
        if (on && String(customDraft[level] || "").trim() === "") {
          var filled = Object.assign({}, customDraft);
          filled[level] = level;
          setCustomDraft(filled);
        }
      }
      function saveCustomEditor() {
        var nameValue = customName.trim();
        if (nameValue === "") {
          notify("bad", t("customFillNameRequired"));
          return;
        }
        var levels = { off: null };
        var hasLevel = false;
        THINKING_LEVELS.forEach(function (level) {
          if (level === "off") return;
          if (customEnabled[level] !== true) return;
          var value = String(customDraft[level] || "").trim();
          if (value !== "") {
            levels[level] = value;
            hasLevel = true;
          }
        });
        if (!hasLevel) {
          notify("bad", t("invalidLevels"));
          return;
        }
        var preset = { name: nameValue, levels: levels };
        setCustomPreset(preset);
        writeCustomFill(preset);
        applyFill(levels);
        setCustomOpen(false);
      }
      async function save() {
        if (busy) return;
        var effortsNext = { off: null };
        var hasLevel = false;
        var missingValue = false;
        THINKING_LEVELS.forEach(function (level) {
          if (level === "off") return;
          if (enabled[level] !== true) return;
          var value = String(efforts[level] || "").trim();
          if (value === "") {
            missingValue = true;
            return;
          }
          effortsNext[level] = value;
          hasLevel = true;
        });
        if (thinking && missingValue) {
          notify("bad", t("levelNeedsValue"));
          return;
        }
        if (thinking && !hasLevel) {
          notify("bad", t("invalidLevels"));
          return;
        }
        var fields = {};
        if (name.trim() !== String(model.name || "").trim()) {
          fields.name = name.trim() === "" ? UNSET : name.trim();
        }
        if (capacity.contextWindow !== model.contextWindow) {
          fields.contextWindow = capacity.contextWindow === undefined ? UNSET : capacity.contextWindow;
        }
        if (capacity.maxTokens !== model.maxTokens) {
          fields.maxTokens = capacity.maxTokens === undefined ? UNSET : capacity.maxTokens;
        }
        var originalInput = Array.isArray(model.input) ? model.input : [];
        if (JSON.stringify(input) !== JSON.stringify(originalInput)) {
          fields.input = input;
        }
        var originalThinking = model.reasoningEfforts !== false && isRecord(model.reasoningEfforts);
        var originalEfforts = isRecord(model.reasoningEfforts) ? model.reasoningEfforts : null;
        if (thinking !== originalThinking || (thinking && JSON.stringify(effortsNext) !== JSON.stringify(originalEfforts))) {
          fields.reasoningEfforts = thinking ? effortsNext : false;
        }
        if (JSON.stringify(compat) !== JSON.stringify(model.compat || {})) {
          fields.compat = Object.keys(compat).length === 0 ? UNSET : compat;
        }
        if (Object.keys(fields).length === 0) {
          notify("good", t("noChanges"));
          props.onClose();
          return;
        }
        setBusy(true);
        var result = await store.writeModelField(route, model.id, fields);
        var bulkResult = null;
        if (result.ok && applyAll) {
          var bulk = {};
          ["contextWindow", "maxTokens", "input", "reasoningEfforts", "compat"].forEach(function (field) {
            if (field in fields) bulk[field] = fields[field];
          });
          if (Object.keys(bulk).length > 0) {
            bulkResult = await store.writeModelFieldsToAll(route, model.id, bulk);
          }
        }
        setBusy(false);
        if (!result.ok) {
          notify("bad", t("writeFailed") + " " + resultMessage(t, result));
          return;
        }
        if (bulkResult && !bulkResult.ok) {
          notify("bad", t("partialSaved") + " " + resultMessage(t, bulkResult));
          return;
        }
        notify("good", t("saved"));
        props.onClose();
      }
      return h(Modal, {
        title: t("modelDialogTitle"),
        subtitle: routeName + " · " + model.id,
        width: 620,
        height: "min(80vh, 640px)",
        onClose: requestClose,
        closeLabel: t("close"),
        footer: h(React.Fragment, null,
          h("label", { className: "dsh-mc-apply-all" },
            h("input", { type: "checkbox", checked: applyAll, disabled: props.disabled || busy, onChange: function (event) { setApplyAll(event.target.checked); } }),
            h("span", null,
              h("span", { className: "dsh-mc-switch-label" }, t("applyToAll")),
              applyAll && modelCount > 1 ? h("span", { className: "dsh-mc-switch-hint" }, t("applyToAllHint", { count: modelCount - 1 })) : null
            )
          ),
          h("span", { className: "dsh-mc-spacer" }),
          h(Btn, { onClick: requestClose }, t("cancel")),
          h(Btn, { kind: "primary", onClick: save, disabled: props.disabled || busy }, t("save"))
        )
      },
        confirmDiscard ? h("div", { className: "dsh-mc-banner is-warn" },
          h(Icon, { name: "alert", size: 15, className: "dsh-mc-banner-icon" }),
          h("div", { className: "dsh-mc-banner-body" },
            h("div", { className: "dsh-mc-banner-title" }, t("unsavedTitle")),
            h("div", { className: "dsh-mc-hint" }, t("unsavedBody"))
          ),
          h(Btn, { size: "sm", onClick: function () { setConfirmDiscard(false); } }, t("keepEditing")),
          h(Btn, { size: "sm", kind: "danger", onClick: props.onClose }, t("discard"))
        ) : null,
        h("div", { className: "dsh-mc-hint" }, t("saveHint")),
        h(Field, { label: t("displayName") },
          h(TextInput, { value: name, onChange: setName, onCommit: setName, placeholder: model.id, disabled: props.disabled })
        ),
        h("div", { className: "dsh-mc-cols" },
          h(Field, { label: t("contextWindow"), hint: t("capacityHint") },
            h(CapacityInput, {
              value: capacity.contextWindow,
              disabled: props.disabled,
              placeholder: t("notSet"),
              invalidText: t("invalidCapacity"),
              onCommit: function (value) { setCapacity(Object.assign({}, capacity, { contextWindow: value === null ? undefined : value })); }
            })
          ),
          h(Field, { label: t("maxTokens"), hint: t("capacityHint") },
            h(CapacityInput, {
              value: capacity.maxTokens,
              disabled: props.disabled,
              placeholder: t("notSet"),
              invalidText: t("invalidCapacity"),
              onCommit: function (value) { setCapacity(Object.assign({}, capacity, { maxTokens: value === null ? undefined : value })); }
            })
          )
        ),
        h(Field, { label: t("inputModalities") },
          h("div", { className: "dsh-mc-pill-group" },
            MODALITIES.map(function (modality) {
              var on = input.indexOf(modality) !== -1;
              return h("button", {
                key: modality,
                type: "button",
                className: "dsh-mc-pill" + (on ? " is-on" : ""),
                disabled: props.disabled,
                onClick: function () { toggleInput(modality); }
              }, h(Icon, { name: modality === "image" ? "image" : "text", size: 12 }), h("span", null, t(modality === "text" ? "modalityText" : "modalityImage")));
            })
          )
        ),
        h("div", { className: "dsh-mc-card dsh-mc-card-pad" },
          h(Switch, {
            label: t("thinkingEnable"),
            hint: thinking ? null : t("reasoningFalseHint"),
            checked: thinking,
            disabled: props.disabled,
            onChange: setThinking
          }),
          thinking ? h("div", { className: "dsh-mc-stack-sm", style: { marginTop: 8 } },
            h("div", { className: "dsh-mc-hint" }, t("thinkingHint")),
            h("div", { className: "dsh-mc-row" },
              h("span", { className: "dsh-mc-hint" }, t("quickFill")),
              h(Btn, { size: "sm", kind: "ghost", onClick: applyCurrent }, t("fillCurrent")),
              h(Btn, { size: "sm", kind: "ghost", onClick: function () { applyFill(OFFICIAL_LEVELS.openai); } }, t("fillOpenAI")),
              h(Btn, { size: "sm", kind: "ghost", onClick: function () { applyFill(OFFICIAL_LEVELS.claude); } }, t("fillClaude")),
              h(Btn, { size: "sm", kind: "ghost", onClick: function () { applyFill(OFFICIAL_LEVELS.deepseek); } }, t("fillDeepSeek")),
              h(Btn, { size: "sm", kind: "ghost", onClick: function () { applyFill(OFFICIAL_LEVELS.qwen); } }, t("fillQwen")),
              h(Btn, { size: "sm", kind: "ghost", onClick: function () { applyFill(fullThinkingLevels()); } }, t("fillAll")),
              customPreset ? h(Btn, { size: "sm", kind: "ghost", onClick: function () { applyCustom(customPreset); } }, customPreset.name) : null,
              h(Btn, { size: "sm", kind: "ghost", onClick: openCustomEditor }, t("fillCustom"))
            ),
            h("div", { className: "dsh-mc-hint" }, t("quickFillHint")),
            customOpen ? h("div", { className: "dsh-mc-card dsh-mc-card-pad dsh-mc-stack-sm", style: { marginTop: 6 } },
              h("div", { className: "dsh-mc-row" },
                h("span", { className: "dsh-mc-field-label" }, t("customFillTitle")),
                h("span", { className: "dsh-mc-spacer" }),
                h(Btn, { size: "sm", kind: "ghost", icon: "x", title: t("cancel"), onClick: function () { setCustomOpen(false); } })
              ),
              h(Field, { label: t("customFillName") },
                h("input", {
                  className: "dsh-mc-input",
                  value: customName,
                  placeholder: t("customFillNamePlaceholder"),
                  onChange: function (event) { setCustomName(event.target.value); }
                })
              ),
              h("div", { className: "dsh-mc-hint" }, t("customFillHint")),
              THINKING_LEVELS.map(function (level) {
                var isOff = level === "off";
                var on = isOff || customEnabled[level] === true;
                return h("div", { key: level, className: "dsh-mc-level-row" },
                  h("label", { className: "dsh-mc-level-toggle" },
                    h("input", {
                      type: "checkbox",
                      checked: on,
                      disabled: isOff,
                      onChange: function (event) { toggleCustomLevel(level, event.target.checked); }
                    }),
                    h("span", { className: "dsh-mc-level-name" }, LEVEL_TEXT[lang][level])
                  ),
                  h("input", {
                    className: "dsh-mc-input",
                    value: on ? customDraft[level] || "" : "",
                    disabled: isOff || !on,
                    placeholder: isOff ? t("offNoSend") : on ? t("wireValue") : "—",
                    onChange: function (event) {
                      var next = Object.assign({}, customDraft);
                      next[level] = event.target.value;
                      setCustomDraft(next);
                    }
                  })
                );
              }),
              h("div", { className: "dsh-mc-row" },
                h("span", { className: "dsh-mc-spacer" }),
                h(Btn, { size: "sm", onClick: function () { setCustomOpen(false); } }, t("cancel")),
                h(Btn, { size: "sm", kind: "primary", onClick: saveCustomEditor }, t("customFillSaveApply"))
              )
            ) : null,
            THINKING_LEVELS.map(function (level) {
              var isOff = level === "off";
              var on = isOff || enabled[level] === true;
              return h("div", { key: level, className: "dsh-mc-level-row" },
                h("label", { className: "dsh-mc-level-toggle" },
                  h("input", {
                    type: "checkbox",
                    checked: on,
                    disabled: props.disabled || isOff,
                    onChange: function (event) { setLevelEnabled(level, event.target.checked); }
                  }),
                  h("span", { className: "dsh-mc-level-name" }, LEVEL_TEXT[lang][level])
                ),
                h("input", {
                  className: "dsh-mc-input",
                  value: on ? efforts[level] || "" : "",
                  disabled: props.disabled || isOff || !on,
                  placeholder: isOff ? t("offNoSend") : on ? t("wireValue") : "—",
                  onChange: function (event) { setEffort(level, event.target.value); }
                })
              );
            })
          ) : null
        ),
        h(Collapsible, { title: t("compatPerModel") },
          h(CompatFields, {
            t: t,
            lang: lang,
            compat: compat,
            disabled: props.disabled,
            onChange: setCompat
          })
        )
      );
    }

    function PresetGallery(props) {
      var t = props.t;
      var presets = props.presets;
      var groups = [
        { id: "gateway", title: t("presetsGroupGateway") },
        { id: "capability", title: t("presetsGroupCapability") }
      ];
      return h("div", { className: "dsh-mc-stack" },
        groups.map(function (group) {
          var items = presets.filter(function (preset) { return preset.group === group.id; });
          if (items.length === 0) return null;
          return h("div", { key: group.id, className: "dsh-mc-stack-sm" },
            h("div", { className: "dsh-mc-hint", style: { fontWeight: 600, color: "var(--dsw-alias-label-primary)" } }, group.title),
            h("div", { className: "dsh-mc-grid" },
              items.map(function (preset) {
                return h("div", {
                  key: preset.id,
                  className: "dsh-mc-preset",
                  role: "button",
                  tabIndex: 0,
                  style: { cursor: props.disabled || props.routes.length === 0 ? "not-allowed" : "pointer" },
                  onClick: function () { if (!props.disabled && props.routes.length > 0) props.onApply(preset); },
                  onKeyDown: function (event) {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      if (!props.disabled && props.routes.length > 0) props.onApply(preset);
                    }
                  }
                },
                  h("div", { className: "dsh-mc-preset-top" },
                    h("span", { className: "dsh-mc-preset-icon" }, h(Icon, { name: preset.icon, size: 15 })),
                    h("span", { className: "dsh-mc-preset-title" }, t(preset.nameKey))
                  ),
                  h("div", { className: "dsh-mc-preset-desc" }, t(preset.summaryKey)),
                  h("div", { className: "dsh-mc-preset-foot" },
                    h("span", { className: "dsh-mc-preset-action" }, t("presetApply") + " →")
                  )
                );
              })
            )
          );
        })
      );
    }

    function PresetDialog(props) {
      var t = props.t;
      var preset = props.preset;
      var routes = props.routes;
      var store = props.store;
      var notify = props.notify;
      var selectionState = React.useState(function () {
        var next = {};
        routes.forEach(function (route) { next[route] = true; });
        return next;
      });
      var selection = selectionState[0];
      var setSelection = selectionState[1];
      var busyState = React.useState(false);
      var busy = busyState[0];
      var setBusy = busyState[1];
      var selectedCount = routes.filter(function (route) { return selection[route]; }).length;
      function toggleRoute(route) {
        var next = Object.assign({}, selection);
        next[route] = !next[route];
        setSelection(next);
      }
      async function apply() {
        var ids = routes.filter(function (route) { return selection[route]; });
        if (ids.length === 0) {
          notify("bad", t("presetNoRoutes"));
          return;
        }
        setBusy(true);
        var result = await store.applyBuiltinPreset(preset.id, ids);
        setBusy(false);
        if (result.ok) {
          notify("good", t("presetApplied"));
          props.onClose();
        } else {
          notify("bad", t("presetFailed") + " " + resultMessage(t, result));
        }
      }
      return h(Modal, {
        title: t("presetApplyTitle", { name: t(preset.nameKey) }),
        subtitle: t(preset.summaryKey),
        width: 620,
        onClose: props.onClose,
        closeLabel: t("close"),
        footer: h(React.Fragment, null,
          h(Btn, { size: "sm", kind: "ghost", onClick: function () {
            var next = {};
            routes.forEach(function (route) { next[route] = true; });
            setSelection(next);
          } }, t("presetSelectAll")),
          h(Btn, { size: "sm", kind: "ghost", onClick: function () { setSelection({}); } }, t("presetClear")),
          h("span", { className: "dsh-mc-spacer" }),
          h(Btn, { onClick: props.onClose }, t("cancel")),
          h(Btn, { kind: "primary", onClick: apply, disabled: busy || selectedCount === 0 }, t("presetApply"))
        )
      },
        h("div", { className: "dsh-mc-stack-sm" },
          h("div", { className: "dsh-mc-field-label" }, t("presetChanges")),
          h("ul", { className: "dsh-mc-banner-list" },
            preset.changes.map(function (key) {
              return h("li", { key: key }, t(key));
            })
          )
        ),
        preset.modelLevel ? h("div", { className: "dsh-mc-banner is-warn" },
          h(Icon, { name: "alert", size: 15, className: "dsh-mc-banner-icon" }),
          h("div", { className: "dsh-mc-banner-body" }, t("presetWarning"))
        ) : null,
        h("div", { className: "dsh-mc-stack-sm" },
          h("div", { className: "dsh-mc-field-label" }, t("presetRoutes")),
          routes.map(function (route) {
            var entry = store.route(route) || {};
            var models = store.modelsOf(route);
            return h("label", { key: route, className: "dsh-mc-model", style: { cursor: "pointer" } },
              h("input", { type: "checkbox", checked: selection[route] === true, onChange: function () { toggleRoute(route); } }),
              h("span", { className: "dsh-mc-model-main" },
                h("span", { className: "dsh-mc-model-name" }, entry.displayName || route),
                h("span", { className: "dsh-mc-model-id" }, route)
              ),
              h(Badge, null, t("modelsCount", { count: models.length }))
            );
          })
        )
      );
    }

    // ---------------------------------------------------------------------
    // Snapshots
    // ---------------------------------------------------------------------
    function defaultSnapshotName(lang) {
      var date = new Date();
      function pad(value) { return value < 10 ? "0" + value : String(value); }
      return (lang === "zh" ? "快照 " : "Snapshot ") + (date.getMonth() + 1) + "-" + date.getDate() + " " + pad(date.getHours()) + ":" + pad(date.getMinutes());
    }

    function snapshotRouteCount(preset) {
      try {
        var parsed = JSON.parse(preset.payload);
        var providers = parsed && parsed.providers ? parsed.providers : parsed;
        return providers && typeof providers === "object" ? Object.keys(providers).length : 0;
      } catch (error) {
        return 0;
      }
    }

    function ConfirmDialog(props) {
      var t = props.t;
      return h(Modal, {
        title: props.title,
        width: 520,
        onClose: props.onClose,
        closeLabel: t("close"),
        footer: h(React.Fragment, null,
          h("span", { className: "dsh-mc-spacer" }),
          h(Btn, { onClick: props.onClose }, t("cancel")),
          h(Btn, { kind: props.danger ? "danger" : "primary", onClick: props.onConfirm, disabled: props.busy }, props.confirmLabel)
        )
      },
        h("div", { className: "dsh-mc-hint", style: { fontSize: 12.5 } }, props.body)
      );
    }

    function SnapshotPanel(props) {
      var t = props.t;
      var store = props.store;
      var lang = props.lang;
      var notify = props.notify;
      var nameState = React.useState("");
      var name = nameState[0];
      var setName = nameState[1];
      var busyState = React.useState(false);
      var busy = busyState[0];
      var setBusy = busyState[1];
      var confirmState = React.useState(null);
      var confirm = confirmState[0];
      var setConfirm = confirmState[1];
      var presets = store.customPresets();
      var canSave = Object.keys(store.userProviders()).length > 0;

      async function save() {
        if (busy) return;
        setBusy(true);
        var result = await store.saveCustomPreset(name.trim() || defaultSnapshotName(lang));
        setBusy(false);
        if (result.ok) {
          setName("");
          notify("good", t("snapshotSaved"));
        } else if (result.message === "no-user-routes") {
          notify("bad", t("noUserRoutes"));
        } else {
          notify("bad", t("writeFailed") + " " + resultMessage(t, result));
        }
      }
      async function confirmAction() {
        if (!confirm) return;
        setBusy(true);
        var result = confirm.kind === "restore"
          ? await store.applyCustomPreset(confirm.preset.id)
          : await store.deleteCustomPreset(confirm.preset.id);
        setBusy(false);
        if (result.ok) {
          setConfirm(null);
          notify("good", confirm.kind === "restore" ? t("applied") : t("snapshotDeleted"));
        } else {
          notify("bad", t("writeFailed") + " " + resultMessage(t, result));
        }
      }
      return h("div", { className: "dsh-mc-card dsh-mc-card-pad dsh-mc-stack" },
        h("div", { className: "dsh-mc-row" },
          h("div", { style: { flex: "1 1 260px", minWidth: 0 } },
            h("input", {
              className: "dsh-mc-input",
              value: name,
              placeholder: t("snapshotNamePlaceholder"),
              disabled: busy,
              onChange: function (event) { setName(event.target.value); },
              onKeyDown: function (event) { if (event.key === "Enter") save(); }
            })
          ),
          h(Btn, { kind: "primary", icon: "save", onClick: save, disabled: busy || !canSave }, t("snapshotSave"))
        ),
        !canSave ? h("div", { className: "dsh-mc-hint" }, t("noUserRoutes")) : null,
        presets.length === 0 ? h("div", { className: "dsh-mc-hint" }, t("snapshotEmpty")) : h("div", { className: "dsh-mc-stack-sm" },
          presets.map(function (preset) {
            return h("div", { key: preset.id, className: "dsh-mc-model" },
              h("div", { className: "dsh-mc-model-main" },
                h("div", { className: "dsh-mc-model-name" }, preset.name || preset.id),
                h("div", { className: "dsh-mc-model-id" }, t("snapshotRoutes", { count: snapshotRouteCount(preset) }) + " · " + formatTime(preset.createdAt))
              ),
              h(Btn, { size: "sm", onClick: function () { setConfirm({ kind: "restore", preset: preset }); } }, t("snapshotRestore")),
              h(Btn, { size: "sm", kind: "ghost", title: t("snapshotDelete"), icon: "trash", onClick: function () { setConfirm({ kind: "delete", preset: preset }); } })
            );
          })
        ),
        confirm ? h(ConfirmDialog, {
          t: t,
          title: confirm.kind === "restore" ? t("snapshotRestoreTitle", { name: confirm.preset.name }) : t("snapshotDeleteTitle", { name: confirm.preset.name }),
          body: confirm.kind === "restore" ? t("snapshotRestoreWarn") : t("snapshotDeleteWarn"),
          confirmLabel: confirm.kind === "restore" ? t("snapshotRestore") : t("snapshotDelete"),
          danger: confirm.kind === "delete",
          busy: busy,
          onConfirm: confirmAction,
          onClose: function () { setConfirm(null); }
        }) : null
      );
    }

    // ---------------------------------------------------------------------
    // models.dev sync
    // ---------------------------------------------------------------------
    function ModelsDevPanel(props) {
      var t = props.t;
      var store = props.store;
      var routes = props.routes;
      var notify = props.notify;
      var resultState = React.useState(null);
      var result = resultState[0];
      var setResult = resultState[1];
      var loadingState = React.useState(false);
      var loading = loadingState[0];
      var setLoading = loadingState[1];
      var errorState = React.useState("");
      var error = errorState[0];
      var setError = errorState[1];
      var selectionsState = React.useState({});
      var selections = selectionsState[0];
      var setSelections = selectionsState[1];
      var fieldsState = React.useState(DEFAULT_SYNC_FIELDS);
      var fields = fieldsState[0];
      var setFields = fieldsState[1];

      async function load() {
        setLoading(true);
        setError("");
        try {
          var loaded = await loadModelsDevCatalog({ force: result !== null });
          setResult(loaded);
          var next = {};
          routes.forEach(function (route) {
            next[route] = guessModelsDevProvider(route, store.route(route), loaded.catalog);
          });
          setSelections(next);
        } catch (loadError) {
          setError((loadError && loadError.message) || String(loadError));
        } finally {
          setLoading(false);
        }
      }
      var preview = result ? buildModelsDevSync(store.providers(), result.catalog, selections, fields) : null;
      async function apply() {
        if (!preview) return;
        var response = await store.applyModelsDevSync(preview.replacements);
        if (response.ok) notify("good", t("syncApplied", { count: preview.stats.changedModels }));
        else notify("bad", t("syncFailed") + " " + resultMessage(t, response));
      }
      var providerOptions = result ? Object.keys(result.catalog.providers).map(function (key) { return result.catalog.providers[key]; }).sort(function (a, b) { return a.name.localeCompare(b.name); }).map(function (provider) {
        return { value: provider.id, label: provider.name + " (" + provider.id + ")" };
      }) : [];
      return h(Collapsible, {
        title: t("syncTitle"),
        subtitle: result ? t("syncSource_" + result.source) : undefined,
        defaultOpen: false
      },
        h("div", { className: "dsh-mc-stack" },
          h("div", { className: "dsh-mc-hint" }, t("syncIntro")),
          h("div", { className: "dsh-mc-row" },
            h(Btn, { icon: "cloud", onClick: load, disabled: loading }, loading ? t("syncLoading") : result ? t("syncRefresh") : t("syncLoad")),
            result ? h("span", { className: "dsh-mc-hint" }, t("syncSource_" + result.source) + " · " + formatTime(result.savedAt)) : null
          ),
          error ? h("div", { className: "dsh-mc-banner is-bad" },
            h(Icon, { name: "alert", size: 15, className: "dsh-mc-banner-icon" }),
            h("div", { className: "dsh-mc-banner-body" }, t("syncUnavailable") + " " + error)
          ) : null,
          result && result.stale ? h("div", { className: "dsh-mc-banner is-warn" },
            h(Icon, { name: "alert", size: 15, className: "dsh-mc-banner-icon" }),
            h("div", { className: "dsh-mc-banner-body" }, t("syncStale") + (result.warning ? " " + result.warning : ""))
          ) : null,
          result ? h(React.Fragment, null,
            h("div", { className: "dsh-mc-stack-sm" },
              h("div", { className: "dsh-mc-field-label" }, t("syncFields")),
              h("div", { className: "dsh-mc-cols-3" },
                SYNC_FIELD_KEYS.map(function (field) {
                  return h(Switch, {
                    key: field,
                    label: t("syncField_" + field),
                    checked: fields[field] === true,
                    onChange: function (value) { setFields(Object.assign({}, fields, { [field]: value })); }
                  });
                })
              ),
              fields.reasoningEfforts ? h("div", { className: "dsh-mc-hint" }, t("syncReasoningHint")) : null
            ),
            routes.length === 0 ? h("div", { className: "dsh-mc-hint" }, t("noRoutes")) : h("div", { className: "dsh-mc-stack-sm" },
              h("div", { className: "dsh-mc-field-label" }, t("syncRouteMapping")),
              routes.map(function (route) {
                var entry = store.route(route) || {};
                return h("div", { key: route, className: "dsh-mc-cols", style: { alignItems: "center", gridTemplateColumns: "minmax(160px, 1fr) minmax(220px, 1.5fr)" } },
                  h("div", null,
                    h("div", { className: "dsh-mc-model-name" }, entry.displayName || route),
                    h("div", { className: "dsh-mc-model-id" }, route)
                  ),
                  h(Select, {
                    value: selections[route],
                    options: providerOptions,
                    allowUnset: true,
                    unsetLabel: t("syncDoNotSync"),
                    onChange: function (value) { setSelections(Object.assign({}, selections, { [route]: value })); }
                  })
                );
              })
            ),
            preview ? h("div", { className: "dsh-mc-banner" },
              h(Icon, { name: "info", size: 15, className: "dsh-mc-banner-icon" }),
              h("div", { className: "dsh-mc-banner-body" },
                h("div", null, t("syncPreview", {
                  matchedModels: preview.stats.matchedModels,
                  changedModels: preview.stats.changedModels,
                  unmatchedModels: preview.stats.unmatchedModels,
                  selectedRoutes: preview.stats.selectedRoutes
                })),
                preview.stats.skippedReasoning > 0 ? h("div", { className: "dsh-mc-hint", style: { marginTop: 2 } }, t("syncSkippedReasoning", { count: preview.stats.skippedReasoning })) : null
              )
            ) : null,
            h("div", { className: "dsh-mc-row", style: { justifyContent: "flex-end" } },
              h(Btn, { kind: "primary", onClick: apply, disabled: !preview || preview.stats.changedRoutes === 0 }, t("syncApply"))
            )
          ) : null
        )
      );
    }

    // ---------------------------------------------------------------------
    // Route panels
    // ---------------------------------------------------------------------
    function ProviderPanel(props) {
      var t = props.t;
      var store = props.store;
      var route = props.route;
      var entry = props.entry;
      var notify = props.notify;
      function write(suffix, value, unset) {
        store.writeRouteField(route, suffix, value, { unset: unset }).then(function (result) {
          notifyResult(t, notify, result);
        });
      }
      return h("div", { className: "dsh-mc-stack" },
        h("div", { className: "dsh-mc-hint" }, t("providerIntro")),
        h("div", { className: "dsh-mc-cols-3" },
          h(Field, { label: t("displayName") },
            h(TextInput, {
              value: entry.displayName || "",
              placeholder: route,
              disabled: props.disabled,
              onCommit: function (value) { if (value.trim() === "") write(["displayName"], undefined, true); else write(["displayName"], value); }
            })
          ),
          h(Field, { label: t("baseURL") },
            h(TextInput, {
              value: entry.baseURL || "",
              disabled: props.disabled,
              onCommit: function (value) { if (value.trim() === "") write(["baseURL"], undefined, true); else write(["baseURL"], value); }
            })
          ),
          h(Field, { label: t("api") },
            h(Select, {
              value: entry.api,
              options: APIS,
              allowUnset: true,
              unsetLabel: "—",
              disabled: props.disabled,
              onChange: function (value) { if (value === undefined) write(["api"], undefined, true); else write(["api"], value); }
            })
          )
        ),
        h("div", { className: "dsh-mc-cols" },
          h(Field, { label: t("apiKeyEnv"), hint: t("apiKeyHint") },
            h("div", { className: "dsh-mc-row" },
              h("code", { className: "dsh-mc-code" }, entry.apiKeyEnv || "—")
            )
          ),
          h(Field, { label: t("routeId") },
            h("code", { className: "dsh-mc-code" }, route)
          )
        ),
        isLocalGateway(entry.baseURL) ? h("div", { className: "dsh-mc-banner is-warn" },
          h(Icon, { name: "info", size: 15, className: "dsh-mc-banner-icon" }),
          h("div", { className: "dsh-mc-banner-body" }, t("localNote"))
        ) : null,
        h(Collapsible, { title: t("defaultsFold"), defaultOpen: false },
          h(RouteDefaults, { store: store, t: t, lang: props.lang, route: route, entry: entry, notify: notify, disabled: props.disabled })
        )
      );
    }

    function RouteCompatPanel(props) {
      var t = props.t;
      var store = props.store;
      var route = props.route;
      var entry = props.entry;
      var notify = props.notify;
      function change(nextCompat) {
        var current = entry.compat || {};
        var keys = Object.keys(current).concat(Object.keys(nextCompat)).filter(function (key, index, list) { return list.indexOf(key) === index; });
        var changed = keys.find(function (key) {
          return JSON.stringify(current[key]) !== JSON.stringify(nextCompat[key]);
        });
        if (changed === undefined) return;
        var isUnset = nextCompat[changed] === undefined;
        if (Object.keys(nextCompat).length === 0) {
          store.writeRouteField(route, ["compat"], undefined, { unset: true }).then(function (result) {
            notifyResult(t, notify, result);
          });
          return;
        }
        store.writeRouteField(route, ["compat", changed], isUnset ? undefined : nextCompat[changed], { unset: isUnset }).then(function (result) {
          notifyResult(t, notify, result);
        });
      }
      return h(CompatFields, {
        t: t,
        lang: props.lang,
        compat: entry.compat || {},
        disabled: props.disabled,
        onChange: change
      });
    }

    function ModelRow(props) {
      var t = props.t;
      var model = props.model;
      var lang = props.lang;
      var efforts = model.reasoningEfforts;
      var levelCount = effortValues(efforts).length;
      var thinkingLabel = efforts === false ? t("thinkingOff") : levelCount > 0 ? t("thinkingLevels", { count: levelCount }) : t("thinkingDefault");
      var inputLabel = Array.isArray(model.input) && model.input.length > 0 ? model.input.map(function (modality) { return modality === "image" ? t("modalityImage") : t("modalityText"); }).join(" + ") : "";
      var chipText = [
        model.contextWindow ? t("contextShort") + " " + capacityText(model.contextWindow) : "",
        model.maxTokens ? t("outputShort") + " " + capacityText(model.maxTokens) : "",
        thinkingLabel,
        inputLabel
      ].filter(Boolean).join(" · ");
      return h("div", {
        className: "dsh-mc-model",
        style: { cursor: props.disabled ? "not-allowed" : "pointer" },
        onClick: function () { if (!props.disabled) props.onEdit(model.id); }
      },
        h("div", { className: "dsh-mc-model-main" },
          h("div", { className: "dsh-mc-model-name" }, modelLabel(model) || model.id),
          String(model.name || "").trim() !== String(model.id).trim() ? h("div", { className: "dsh-mc-model-id" }, model.id) : null
        ),
        h("div", { className: "dsh-mc-model-chips", title: chipText },
          model.contextWindow ? h(Badge, null, t("contextShort") + " " + capacityText(model.contextWindow)) : null,
          model.maxTokens ? h(Badge, null, t("outputShort") + " " + capacityText(model.maxTokens)) : null,
          h(Badge, { tone: efforts === false ? undefined : "brand" }, thinkingLabel),
          inputLabel ? h(Badge, null, inputLabel) : null
        ),
        h(Btn, {
          size: "sm",
          icon: "edit",
          title: t("editModel"),
          disabled: props.disabled,
          onClick: function (event) {
            event.stopPropagation();
            props.onEdit(model.id);
          }
        }, t("editModel"))
      );
    }

    function RouteCard(props) {
      var t = props.t;
      var store = props.store;
      var route = props.route;
      var entry = store.route(route);
      var open = props.open;
      var tabState = React.useState("models");
      var tab = tabState[0];
      var setTab = tabState[1];
      if (!entry) return null;
      var models = store.modelsOf(route);
      var legacyBad = looksLikeLegacyGateway(entry.baseURL) && entry.compat && entry.compat.supportsDeveloperRole === true;
      var local = isLocalGateway(entry.baseURL);
      return h("article", { className: "dsh-mc-card dsh-mc-route" + (open ? " is-open" : "") },
        h("div", {
          className: "dsh-mc-route-head",
          role: "button",
          tabIndex: 0,
          "aria-expanded": open,
          onClick: props.onToggle,
          onKeyDown: function (event) {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              props.onToggle();
            }
          }
        },
          h("span", { className: "dsh-mc-route-icon" }, h(Icon, { name: "server", size: 15 })),
          h("span", { className: "dsh-mc-route-main" },
            h("span", { className: "dsh-mc-route-name" }, entry.displayName || route),
            h("span", { className: "dsh-mc-route-sub" }, route + (entry.api ? " · " + entry.api : ""))
          ),
          h("span", { className: "dsh-mc-chips" },
            h(Badge, null, t("modelsCount", { count: models.length })),
            local ? h(Badge, { tone: "brand", icon: "lock" }, t("localGateway")) : h(Badge, null, t("remoteGateway")),
            legacyBad ? h(Badge, { tone: "warn" }, "!developer role") : null
          ),
          h(Icon, { name: "chevronRight", size: 15, className: "dsh-mc-route-chevron" })
        ),
        open ? h("div", { className: "dsh-mc-route-body", style: { padding: 0 } },
          h("div", { className: "dsh-mc-tabs", role: "tablist" },
            [
              { id: "models", label: t("tabModels") },
              { id: "provider", label: t("tabProvider") },
              { id: "compat", label: t("tabCompat") },
              { id: "advanced", label: t("tabAdvanced") }
            ].map(function (item) {
              return h("button", {
                key: item.id,
                type: "button",
                role: "tab",
                "aria-selected": tab === item.id,
                className: "dsh-mc-tab" + (tab === item.id ? " is-active" : ""),
                onClick: function () { setTab(item.id); }
              }, item.label);
            })
          ),
          h("div", { style: { padding: 14 } },
            tab === "models" ? h("div", { className: "dsh-mc-stack" },
              models.length === 0 ? h("div", { className: "dsh-mc-empty" }, t("diagNoModels", { route: route })) : h("div", { className: "dsh-mc-stack-sm" },
                models.map(function (model) {
                  return model && typeof model.id === "string" ? h(ModelRow, {
                    key: model.id,
                    t: t,
                    lang: props.lang,
                    model: model,
                    disabled: props.disabled,
                    onEdit: function (id) { props.onEditModel(route, id); }
                  }) : null;
                })
              ),
              h("div", { className: "dsh-mc-hint" }, t("modelHint"))
            ) : tab === "provider" ? h(ProviderPanel, {
              t: t, lang: props.lang, store: store, route: route, entry: entry, notify: props.notify, disabled: props.disabled
            }) : tab === "compat" ? h(RouteCompatPanel, {
              t: t, lang: props.lang, store: store, route: route, entry: entry, notify: props.notify, disabled: props.disabled
            }) : h(AdvancedPanel, {
              t: t, store: store, route: route, entry: entry, notify: props.notify, disabled: props.disabled
            })
          )
        ) : null
      );
    }

    // ---------------------------------------------------------------------
    // Diagnostics
    // ---------------------------------------------------------------------
    function computeDiagnostics(t, store) {
      var out = [];
      var providers = store.providers();
      Object.keys(providers).forEach(function (route) {
        var entry = providers[route];
        if (!entry || typeof entry !== "object") return;
        if (looksLikeLegacyGateway(entry.baseURL) && entry.compat && entry.compat.supportsDeveloperRole === true) {
          out.push({ tone: "warn", text: t("diagDeveloperRole", { route: route }) });
        }
        var models = store.modelsOf(route);
        models.forEach(function (model) {
          if (!model || typeof model.id !== "string") return;
          if (model.reasoningEfforts !== false && isRecord(model.reasoningEfforts)) {
            THINKING_LEVELS.forEach(function (level) {
              var value = model.reasoningEfforts[level];
              if (level !== "off" && (value === null || value === "")) {
                out.push({ tone: "warn", text: t("diagEmptyEffort", { route: route, model: model.id, level: level }) });
              }
            });
          }
          if (model.contextWindow === undefined) out.push({ tone: "info", text: t("diagNoContext", { route: route, model: model.id }) });
        });
        if (models.length === 0) out.push({ tone: "info", text: t("diagNoModels", { route: route }) });
      });
      store.customPresets().forEach(function (preset) {
        var parsed;
        try {
          parsed = JSON.parse(preset.payload);
        } catch (error) {
          return;
        }
        var providersInPreset = parsed && typeof parsed === "object" && parsed.providers ? parsed.providers : parsed;
        if (!providersInPreset || typeof providersInPreset !== "object") return;
        Object.keys(providersInPreset).forEach(function (route) {
          var entry = providersInPreset[route];
          if (!entry || typeof entry !== "object" || !entry.headers) return;
          var credentials = Object.keys(entry.headers).filter(isCredentialHeader);
          if (credentials.length > 0) {
            out.push({ tone: "bad", text: t("diagPresetCreds", { preset: preset.name || preset.id, route: route, names: credentials.join(", ") }) });
          }
        });
      });
      return out;
    }

    // ---------------------------------------------------------------------
    // Page
    // ---------------------------------------------------------------------
    function Page(props) {
      var store = props.store;
      useScope(store.llmScope);
      useScope(store.selfScope);
      var lang = store.effectiveLanguage();
      var t = function (key, params) { return localize({ en: en, zh: zh }, lang, key, params); };
      var toastState = React.useState(null);
      var toast = toastState[0];
      var setToast = toastState[1];
      var expandedState = React.useState(function () {
        var routes = store.routeNames();
        var initial = {};
        if (routes.length > 0) initial[routes[0]] = true;
        return initial;
      });
      var expanded = expandedState[0];
      var setExpanded = expandedState[1];
      var presetState = React.useState(null);
      var presetDialog = presetState[0];
      var setPresetDialog = presetState[1];
      var editState = React.useState(null);
      var editModel = editState[0];
      var setEditModel = editState[1];
      var diagState = React.useState(false);
      var diagOpen = diagState[0];
      var setDiagOpen = diagState[1];
      var routes = store.routeNames();
      var disabled = !store.writable();
      var language = store.selfSnapshot().value && store.selfSnapshot().value.language ? store.selfSnapshot().value.language : "follow";
      var diagnostics = computeDiagnostics(t, store);
      var builtinPresets = store.builtinPresets();

      React.useEffect(function () {
        if (!toast || toast.tone === "bad") return undefined;
        var timeout = setTimeout(function () { setToast(null); }, 2800);
        return function () { clearTimeout(timeout); };
      }, [toast]);

      React.useEffect(function () {
        setExpanded(function (previous) {
          var anyOpen = Object.keys(previous).some(function (route) { return previous[route] && routes.indexOf(route) !== -1; });
          if (anyOpen || routes.length === 0) return previous;
          var next = Object.assign({}, previous);
          next[routes[0]] = true;
          return next;
        });
      }, [routes.join("\n")]);

      function notify(tone, text) {
        setToast({ tone: tone, text: text, at: Date.now() });
      }
      function toggleRoute(route) {
        setExpanded(Object.assign({}, expanded, { [route]: !expanded[route] }));
      }
      function editRouteModel(route, modelId) {
        setEditModel({ route: route, modelId: modelId });
      }
      var editing = editModel ? store.modelsOf(editModel.route).find(function (model) { return model && model.id === editModel.modelId; }) : null;

      return h("div", { className: "dsh-mc-root" },
        h("style", null, CSS),
        h("header", { className: "dsh-mc-header" },
          h("div", { className: "dsh-mc-heading" },
            h("h1", { className: "dsh-mc-title" }, t("title")),
            h("p", { className: "dsh-mc-subtitle" }, t("subtitle"))
          ),
          h("div", { className: "dsh-mc-header-actions" },
            h("span", { className: "dsh-mc-status " + (disabled ? "is-warn" : "is-good") },
              h("span", { className: "dsh-mc-status-dot" }),
              disabled ? t("statusReadonly") : t("statusWritable")
            ),
            store.mode() === "memory" ? h("span", { className: "dsh-mc-status is-warn" }, t("statusMemory")) : null,
            h("label", { className: "dsh-mc-lang" },
              h("span", null, t("language")),
              h(Select, {
                value: language,
                options: [
                  { value: "follow", label: t("langFollow") },
                  { value: "en", label: t("langEn") },
                  { value: "zh", label: t("langZh") }
                ],
                width: 128,
                onChange: function (value) { store.setLanguage(value === undefined ? "follow" : value); }
              })
            )
          )
        ),
        disabled ? h("div", { className: "dsh-mc-banner is-warn" },
          h(Icon, { name: "lock", size: 15, className: "dsh-mc-banner-icon" }),
          h("div", { className: "dsh-mc-banner-body" }, t("readOnlyWhy"))
        ) : null,
        diagnostics.length > 0 ? h("div", { className: "dsh-mc-banner is-warn" },
          h(Icon, { name: "alert", size: 16, className: "dsh-mc-banner-icon" }),
          h("div", { className: "dsh-mc-banner-body" },
            h("div", { className: "dsh-mc-row" },
              h("span", { className: "dsh-mc-banner-title" }, t("diagTitle")),
              h(Badge, { tone: "warn" }, t("checkIssues", { count: diagnostics.length })),
              h("span", { className: "dsh-mc-spacer" }),
              h(Btn, { size: "sm", kind: "ghost", onClick: function () { setDiagOpen(!diagOpen); } }, diagOpen ? t("checkHide") : t("checkShow"))
            ),
            diagOpen ? h("ul", { className: "dsh-mc-banner-list" },
              diagnostics.map(function (item, index) {
                return h("li", { key: index }, item.text);
              })
            ) : null
          )
        ) : null,
        h("section", { className: "dsh-mc-section" },
          h(SectionTitle, {
            title: t("routesTitle"),
            description: t("routesIntro"),
            aside: h("span", { className: "dsh-mc-count" }, t("routeCount", { count: routes.length }))
          }),
          routes.length === 0 ? h("div", { className: "dsh-mc-empty" },
            h("div", { className: "dsh-mc-empty-title" }, t("noRoutes")),
            h("div", null, t("noRoutesHint"))
          ) : h("div", { className: "dsh-mc-stack-sm" },
            routes.map(function (route) {
              return h(RouteCard, {
                key: route,
                t: t,
                lang: lang,
                store: store,
                route: route,
                open: expanded[route] === true,
                disabled: disabled,
                notify: notify,
                onToggle: function () { toggleRoute(route); },
                onEditModel: editRouteModel
              });
            })
          )
        ),
        h("section", { className: "dsh-mc-section" },
          h(SectionTitle, { title: t("presetsTitle"), description: t("presetsIntro") }),
          h(PresetGallery, {
            t: t,
            presets: builtinPresets,
            routes: routes,
            disabled: disabled,
            onApply: function (preset) { setPresetDialog(preset); }
          })
        ),
        h("section", { className: "dsh-mc-section" },
          h(SectionTitle, { title: t("snapshotsTitle"), description: t("snapshotsIntro") }),
          h(SnapshotPanel, { t: t, lang: lang, store: store, notify: notify })
        ),
        h("section", { className: "dsh-mc-section" },
          h(ModelsDevPanel, { t: t, store: store, routes: routes, notify: notify })
        ),
        presetDialog ? h(PresetDialog, {
          t: t,
          store: store,
          routes: routes,
          preset: presetDialog,
          notify: notify,
          onClose: function () { setPresetDialog(null); }
        }) : null,
        editModel && editing ? h(ModelDialog, {
          t: t,
          lang: lang,
          store: store,
          route: editModel.route,
          model: editing,
          notify: notify,
          disabled: disabled,
          onClose: function () { setEditModel(null); }
        }) : null,
        h(Toast, { toast: toast, closeLabel: t("close"), onClose: function () { setToast(null); } })
      );
    }

    // ---------------------------------------------------------------------
    // Plugin entry
    // ---------------------------------------------------------------------
    var NS = "settings.model-capability";
    var inject = ["slots", "locale", "configForms"];

    function apply(ctx) {
      ctx.effect(function () {
        return ctx.locale.register(NS, { zh: zh, en: en });
      }, "model-capability: copy dictionaries");
      var t = ctx.locale.bind(NS);
      var configForms = ctx.configForms;
      var llmScope = configForms.get("llm-pi-ai");
      var selfScope = configForms.get("model-capability");
      var store = new CapabilityStore({ llmScope: llmScope, selfScope: selfScope, locale: ctx.locale });
      ctx.effect(function () {
        return configForms.whileServed(["llm-pi-ai"], function () {
          return ctx.slots.inject("settings.section", function () {
            return ctx.slots.register({
              name: "settings.section",
              id: "model-capability",
              order: 11,
              label: function () { return t("nav"); },
              inject: function () { return { store: store }; }
            }, Page);
          });
        });
      }, "model-capability: settings page");
    }

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});