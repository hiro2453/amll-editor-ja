import type { Translations } from '../i18n-types'

const consoleArt = `
╭──────────╮       ╶╴    ┌─╴  ╶─┐┌─┐    ┌─┐      ┌─────┐    ┌─┐┌─┐
│ ━━━━━━   │      ╱  ╲   │  ╲╱  ││ │    │ │      │ ┌───┘    │ │└─┘┌─┐
│   ━━━━━  │     ╱ ╱╲ ╲  │ ╷  ╷ ││ │    │ │      │ └──┐ ╭───┘ │┌─┐│ └┐╭─────╮╭───┐
│ |> ━━━ • │    ╱ ╶──╴ ╲ │ │╲╱│ ││ │    │ │      │ ┌──┘ │ ╭─╮ ││ ││ ┌┘│ ╭─╮ ││ ┌─┘
│   ━━━━━  │   ╱ ╱    ╲ ╲│ │  │ ││ └───┐│ └───┐  │ └───┐│ ╰─╯ ││ ││ └┐│ ╰─╯ ││ │
╰──────────╯   ─╴      ╶─└─┘  └─┘└─────┘└─────┘  └─────┘╰─────┘└─┘╰──┘╰─────╯└─┘

Welcome to AMLL Editor!

Project URL: https://github.com/amll-dev/amll-editor
             Licensed under AGPLv3 only

Related projects: AMLL Homepage  https://amll.dev/
                  AMLL TTML DB   https://db.amll.dev/
                  AMLL TTML Tool https://tool.amll.dev/

Please note: DevTools, plugins, and user scripts may have a significant negative impact on performance.
`.trim()

const ja = {
  editor: {
    context: {
      shared: {
        copy: 'コピー',
        cut: '切り取り',
        paste: '貼り付け',
      },
      blank: {
        insertLine: '行を追加',
      },
      betweenLines: {
        insertLine: 'Insert line here',
      },
      line: {
        toggleDuet: 'デュエット',
        toggleBackground: 'バックコーラス',
        combineLines: 'Combine lines',
        insertLineAbove: 'この上に行を追加',
        insertLineBelow: 'この下に行を追加',
        duplicateLine: '行を複製',
        deleteLine: '行を削除',
      },
      syllable: {
        insertSylBefore: 'Insert syllable before',
        insertSylAfter: 'Insert syllable after',
        breakLineAtSyl: 'Split line here',
        deleteSyl: 'Delete syllable',
      },
    },
    dragGhost: {
      copyLine: 'Copy line{{s}}',
      moveLine: 'Move line{{s}}',
      copySyllable: 'Copy syllable{{s}}',
      moveSyllable: 'Move syllable{{s}}',
    },
    emptyTip: {
      title: {
        noLines: '行がありません',
        allLinesEmpty: 'All lyric lines are empty',
      },
      detail: {
        goLoadOrCreate: '「開く」からコンテンツを読み込むか、右クリックして新しい行を挿入してください',
        goLoadOrEdit: '「開く」からコンテンツを読み込むか、歌詞表示の際に編集を行ってください',
      },
    },
    line: {
      index: 'Line number',
      indexDbClickToToogleIgnore: 'Double-click to toggle timeline ignore status',
      bookmark: 'Bookmark',
      duet: 'Duet',
      background: 'Background',
      applyRomanToSyl: 'Apply to syllable romanization',
      generateRomanFromSyl: 'Generate from syllable romanization',
      startTime: 'Line start time',
      endTime: 'Line end time',
      endTimeClickToConnect: 'Click to toggle connect end time',
      endTimeDbClickToEdit: 'Double-click to edit',
      connectNext: 'Connect end time to next line',
      continueToNextLine: 'Extend end time to next line',
      addSyllable: 'Add syllable',
      fields: {
        trans: 'Line translation',
        roman: 'Line romanization',
      },
    },
    syllable: {
      startTime: 'Syllable start time',
      endTime: 'Syllable end time',
    },
    preview: {
      reloadAmll: 'Reload AMLL',
    },
  },
  titlebar: {
    open: '開く',
    openTip: 'ファイルを開きます',
    openMenu: {
      project: 'プロジェクトを開く',
      ttml: 'TTMLファイルを開く',
      pasteTTML: 'TTMLを貼り付け',
      importFromText: 'プレーンテキスト',
      importFromOtherFormats: 'その他のフォーマット',
      blank: 'プロジェクトを閉じる',
    },
    save: '保存',
    saveTip: 'ファイルを保存します',
    saveMenu: {
      saveAs: '名前を付けて保存',
      exportToProject: 'プロジェクトファイルを保存',
      exportToTTML: 'TTML形式で保存',
      copyTTML: 'TTMLでコピー',
      exportToOtherFormats: '他の形式でエクスポート',
    },
    preferences: '設定',
    undo: '戻る',
    redo: '取り消す',
    view: {
      content: '歌詞',
      timing: 'タイミング',
      preview: 'プレビュー',
    },
    saveStatus: {
      compatMode: '互換モード',
      permissionNotGranted: '書き込み権限がありません',
      savedAt: '保存時刻 - {0|time}',
    },
  },
  ribbon: {
    content: {
      groupLabel: 'コンテンツ',
      batchSyllabify: '文字分割',
      batchSyllabifyDesc:
        '文字分割サイドバーが開き、複数行の歌詞をお好みで分割することができます',
      metadata: 'メタデータ',
      metadataDesc: 'サイドバーが開き、ファイルのメタデータを編集することができます',
      findReplace: '検索&置換',
      findReplaceDesc: 'ダイアログが開き、検索と置換ができます',
    },
    lineAttr: {
      groupLabel: '属性',
      duet: 'デュエット',
      background: 'バックコーラス',
      ignoreInTiming: 'タイミング無視',
      connectNext: '終了時刻から次へ',
      startTime: '開始',
      endTime: '終',
      duration: '継続時間',
    },
    syllableAttr: {
      groupLabel: '属性',
      startTime: '始',
      endTime: '終',
      duration: '継続時間',
      placeholdingBeat: '仮置きビート',
      applyToAllSameSyls: 'すべての同一の音節に適用する',
    },
    timeShift: {
      groupLabel: 'タイムシフト',
      delayTest: 'テスト',
      delay: '遅延',
      batchTimeShift: 'Batch Shift',
      batchTimeShiftDesc:
        'ダイアログが開き、複数の音節もしくは行のタイミングを調整します',
    },
    view: {
      groupLabel: '表示',
      enableSylRoman: 'ローマ字表記',
      scrollWithPlayback: '自動スクロール',
      swapTranslateRoman: '翻訳とローマ字を入れ替え',
      hideTranslateRoman: '翻訳とローマ字を非表示',
    },
    mark: {
      groupLabel: 'マーカー',
      addBookmark: '追加',
      removeBookmark: '削除',
      bookmarkDesc: '選択した行または音節にブックマークを追加または削除します。サイト内での機能の為エクスポートしてもブックマークは保存されません。',
      addComment: 'コメント',
      removeAll: 'すべて削除',
      removeAllDesc:
        '全体のブックマークとコメントを削除します。元に戻すことは可能です',
    },
    performance: {
      groupLabel: 'Performance',
      usedHeapSize: 'Used',
      totalHeapSize: 'Allocated',
      frameRate: 'Frame Rate',
    },
  },
  sidebar: {
    syllabify: {
      header: '文字分割',
      enginePlaceholder: 'Select Engine',
      engine: '使用するエンジン',
      recommended: 'おすすめ',
      notRecommended: '非推奨',
      expandDesc: 'Expand',
      collapseDesc: 'Collapse',
      customRules: 'カスタムルール',
      caseSensitive: '大文字と小文字を区別する',
      originalTextPlaceholder: 'オリジナルテキスト',
      addRule: 'ルールを追加',
      sylDataLossWarn:
        '既存の文字列を分割します。タイミングは文字に基づいて線形補正されます',
      applyToSelectedLines: '選択した行に適用',
      applyToLinesAndAfter: '選択した行以降に適用',
      applyToAll: 'すべての行に適用',
    },
    metadata: {
      header: 'メタデータ',
      templatePlaceholder: 'テンプレートを選択してください',
      templateLabel: 'テンプレートを選択',
      templates: {
        lrc: {
          label: 'LRC メタデータテンプレート',
          ti: 'タイトル名',
          ar: 'アーティスト名',
          al: 'アルバム名',
          au: '作曲',
          lr: '作詞',
          by: '作者',
          re: '制作ツール',
          len: '長さ',
          lenValidationMsg: '時間の形式は「mm:ss」または「mm:ss.sss」にしてください。',
        },
        amll: {
          label: 'AMLL TTML メタデータテンプレ',
          musicName: '曲名',
          artists: 'アーティスト名',
          album: 'アルバム名',
          ncmMusicId: 'NetEase Cloud Music ID',
          qqMusicId: 'QQ Music ID',
          spotifyId: 'Spotify ID',
          appleMusicId: 'Apple Music ID',
          isrc: 'ISRC',
          ttmlAuthorGithub: 'Github UID',
          ttmlAuthorGithubLogin: 'GitHub username',
        },
      },
      documentBtn: '説明',
      addAllPresets: 'プリセットを追加',
      keyPlaceholder: 'キー',
      clear: 'クリア',
      addField: '追加',
    },
    preference: {
      header: '環境設定',
      refreshToTakeEffect: '反映するにはページを更新してください',
      resetConfirm: {
        header: '設定をすべてリセット',
        message:
          '本当に設定を初期化してよろしいですか？この操作後は元には戻せません',
        action: 'Reset',
      },
      groups: {
        data: 'データ',
        key: 'キーボード',
        content: 'コンテンツ',
        timing: 'タイミング',
        spectrogram: 'スペクトログラム',
        compatibility: '互換性',
        misc: 'その他',
        about: '概要',
      },
      experimentalWarning: '実験的な機能 — 動作が不安定になる場合があります',
      items: {
        autoSaveEnabled: '自動保存',
        autoSaveEnabledDesc: '書き込み権限が付与された場合のみ、定期的に保存を行います',
        autoSaveIntervalMinutes: '保存の間隔',
        autoSaveIntervalMinutesDesc: '分単位で間隔を空けるかを設定できます',
        maxUndoSteps: '元に戻れる回数',
        maxUndoStepsDesc: '元に戻る記録の上限を設定できます',
        packAudioToProject: 'プロジェクトファイルに音声データを埋め込む',
        packAudioToProjectDesc: '共有相手が音声データを持っていなくても、再生することが可能になります',
        ttmlAsDefault: 'TTML形式をデフォルトにする',
        ttmlAsDefaultDesc: '新規作成時か保存する際にTTML形式にします',
        askPermissionOnOpen: '書き込み権限の要求をする',
        askPermissionOnOpenDesc:
          'ファイルを開く際、書き込み権限の要求を行います。自動保存をする際には必須です。',
        keyBinding: 'キー割り当て',
        keyBindingDesc: 'ショートカットキーの編集ができます',
        keyBindingAction: 'キー設定',
        macStyleShortcuts: 'MacOSスタイルにする',
        macStyleShortcutsDesc: 'キー割り当ての際に⌘や⌥などMacOSスタイルで表示します',
        audioSeekingStepMs: '連続処理の間隔',
        audioSeekingStepMsDesc: 'キーを長押しする際、連続処理を行うまでの待ち時間をms単位で設定できます',
        swapTranslateRoman: '翻訳をローマ字を入れ替え',
        swapTranslateRomanDesc: '翻訳の欄とローマ字の欄の配置を左右入れ替えます',
        hideTranslateRoman: '翻訳とローマ字を入れ替え',
        hideTranslateRomanDesc: '翻訳の欄とローマ字の欄を非表示にします',
        sylRomanEnabled: 'ローマ字表記',
        sylRomanEnabledDesc: '音節ごとにローマ字表記を設定することができます',
        globalLatencyMs: '全体的な音声補正',
        globalLatencyMsDesc: '正の数=早めに再生、負の数=遅めに再生',
        alwaysIgnoreBackground: 'Always ignore background lines',
        alwaysIgnoreBackgroundDesc: 'Always skip background lines in the timeline view',
        hideLineTiming: 'タイムスタンプを非表示',
        hideLineTimingDesc: 'タイムスタンプを非表示にします。有効にすると音節に合わせてタイムスタンプを自動で生成します。',
        scrollWithPlayback: 'Auto-scroll with playback',
        scrollWithPlaybackDesc: 'Timeline view automatically scrolls following playback position',
        highlightSelectedLineOnProgress: 'Highlight selected line on progress',
        highlightSelectedLineOnProgressDesc: 'Highlight selected line on progress bar',
        compatibilityReport: 'Compatibility report',
        compatibilityReportDesc: 'Open compatibility report window',
        compatibilityReportAction: 'Open',
        notifyCompatIssuesOnStartup: 'Check compatibility on startup',
        notifyCompatIssuesOnStartupDesc: 'Show report on launch if issues are detected',
        language: '言語',
        languageDesc: '表示する言語を設定できます',
        resetAll: '設定を初期化',
        resetAllDesc: 'すべての設定を初期化することができます',
        resetAllAction: '初期化する',
        aboutApp: '{0}について',
        aboutAppDesc: 'バージョンと情報が表示されます',
        aboutAppAction: '詳しく',
        githubRepo: 'GitHub リポジトリ',
        githubRepoDesc: 'githubにてソースコードを見ることができます',
        githubRepoAction: '見に行く',
        sidebarWidth: 'Sidebar width',
        sidebarWidthDesc: 'Default width of the sidebar (pixels)',
        spectrogramHeight: 'Spectrogram height',
        spectrogramHeightDesc: 'Height of the spectrogram (pixels)',
        spectrogramColor: 'Color scheme',
        spectrogramColorDesc: 'Choose a preset or custom gradient',
      },
    },
  },
  player: {
    chooseAudioFile: '音声データを読み込む',
    playOptions: '再生オプション',
    playOptionsWheel: '音量と再生速度を設定できます',
    volume: '音量',
    rate: '再生速度',
    resetTo: '{0}に戻す',
    play: '再生',
    pause: '停止',
    showSpectrogram: 'スペクトログラムを表示',
    hideSpectrogram: 'スペクトログラムを非表示',
    spectrogramUnavailable: 'スペクトログラムは利用できません',
    allSupportedFormats: '対応している音声形式',
    failedToLoadAudio: {
      summary: '読み込み失敗',
      detailAborted: 'ユーザーもしくはなんらかによりファイルへのアクセスが拒否されました',
    },
    loadAudioSuccess: '音声データを読み込みました',
  },
  spectrogram: {
    emptyTip: {
      title: '音声データがありません',
      detail: '音声データを読み込みとスペクトログラムを描画します',
    },
  },
  compat: {
    dialog: {
      header: 'Compatibility Report',
      notSupported: 'NOT SUPPORTED',
      noReasonProvided: 'No reason provided',
      noImpactProvided: 'No potential issues described',
      dontCheckOnStartup: 'Do not check compatibility on startup',
      proceed: 'Continue',
    },
    sharedReasons: {
      insecureContext: 'Not running in a secure context. HTTPS or localhost access is required.',
    },
    clipboard: {
      name: 'Clipboard API',
      description:
        'The Clipboard API allows the web page to read from and write to the system clipboard with user permission.',
      impact: 'Copying and pasting content/TTML will not be available.',
      apiNotSupported:
        'Clipboard-related APIs are not supported by this browser. Supported in Chromium 66+, Firefox 125+, Safari 13.1+.',
    },
    fileSystem: {
      name: 'File System API',
      description:
        'The File System API enables the web page to read and write files on disk with user permission, providing near-native file handling.',
      impact:
        'Files cannot be written directly — saves will use browser download instead. Auto-save functionality will be unavailable.',
      apiNotSupported:
        'File System-related APIs are not supported. Available in Chromium 86+. Firefox and Safari do not support it yet.',
    },
    mediaSession: {
      name: 'Media Session API',
      description:
        'The Media Session API allows the web page to customize media notifications and respond to media hardware key events.',
      impact:
        'Media playback cannot be controlled from system media controls (e.g. lock screen or notification center).',
      apiNotSupported:
        'Media Session-related APIs are not supported. Available in Chromium 72+, Firefox 82+, Safari 15+. Firefox on Android currently does not support it.',
    },
    sharedArrayBuffer: {
      name: 'SharedArrayBuffer',
      description: 'SharedArrayBuffer enables efficient data sharing between multiple threads.',
      impact: 'Spectrogram visualization will not be available.',
      apiNotSupported:
        'SharedArrayBuffer is not supported. Available in Chromium 68+, Firefox 79+, Safari 15.2+.',
      coiRequired:
        'Cross-Origin Isolation (COOP/COEP) is not enabled. Contact the deployment provider to add the required HTTP headers, or adjust build options to enable Service Worker-based cross-origin isolation.',
      coiWorkaround:
        'Cross-Origin Isolation (COOP/COEP) is not enabled. This deployment attempts to enable it via Service Worker. If it doesn’t work, please try refreshing the page.',
    },
  },
  formats: {
    sharedReferences: {
      wikipedia: 'Wikipedia',
      officialDoc: 'Official Docs',
    },
    alp: {
      name: 'AMLL Editor Project',
      description:
        'AMLL Editor project file format. Embeds audio and lyric data, ideal for saving and sharing projects.',
    },
    ttml: {
      name: 'AMLL TTML',
      description:
        'Lyric format based on W3C TTML standard, following the AMLL TTML specification.',
    },
    lrc: {
      name: 'Standard LRC',
      description:
        'The most common lyric format. Supports line-level timestamps only, no per-syllable timing. For LRC-based extended formats, select the corresponding option.',
    },
    lrcA2: {
      name: 'LRC A2',
      description:
        'LRC-based extended format with line and per-syllable timestamps. Originally proposed by A2 Media Player.',
    },
    yrc: {
      name: 'NCM Lyrics',
      description:
        'NetEase Cloud Music proprietary per-syllable lyric format. Supports line and syllable timestamps.',
    },
    qrc: {
      name: 'QQ Music Lyrics',
      description:
        'QQ Music proprietary per-syllable lyric format. Supports line and syllable timestamps.',
    },
    lyl: {
      name: 'Lyricify Lines',
      description:
        'Lyricify proprietary line timestamp format, does not support syllable-level timestamps.',
    },
    lys: {
      name: 'Lyricify Syllable',
      description:
        'Lyricify proprietary syllable timestamp format, supports syllable-level, background and duet lyrics.',
    },
    lqe: {
      name: 'Lyricify Quick Export',
      description:
        'Lyricify proprietary quick export format, based on Lyricify Syllable with added support for translations and romanizations.',
    },
    spl: {
      name: 'SaltPlayer Lyrics',
      description:
        'Salt Player proprietary format based on LRC extensions. Supports line/syllable timestamps and translations. Complex rules may limit full compatibility.',
    },
  },
  file: {
    allSupportedFormats: 'All Supported Formats',
    untitled: 'Untitled',
    loaded: 'File Loaded',
    failedToReadErr: {
      summary: 'Failed to read file',
      typeNotSupported: 'Unsupported file type: {0}',
    },
    dataDropConfirm: {
      header: 'Unsaved changes',
      message: 'Continuing will discard all unsaved changes. This action cannot be undone.',
      acceptLabel: 'Continue Anyway',
    },
    loadFileSuccess: '読み込みが完了しました',
    failedToLoadErr: {
      summary: 'Failed to load file',
      detailAborted: 'File access denied by user or platform',
    },
    clipboardIsEmptyErr: 'クリップボードは空です',
    failedToPasteTTML: 'Failed to import TTML from clipboard',
    failedToCopyTTML: 'Failed to copy TTML to clipboard',
    pasteTTMLSuccess: 'TTML imported from clipboard',
    copyTTMLSuccess: 'TTML copied to clipboard',
    newBlankProjectSuccess: 'Blank project created',
    failedBlankProject: {
      summary: 'Failed to create blank project',
      detailAborted: 'Operation aborted by user',
    },
    saveFileSuccess: '保存しました',
    failedToSaveErr: {
      summary: 'Failed to save file',
      detailAborted: 'File write denied by user or platform',
    },
    saveAsSuccess: '保存しました - ',
    failedToSaveAsErr: {
      summary: 'Failed to save file as...',
      detailAborted: 'File write denied by user or platform',
    },
  },
  find: {
    header: '検索 & 置換',
    mode: {
      find: '検索',
      replace: '置換',
    },
    placeholder: {
      find: '検索する文字',
      replace: '置換する文字',
    },
    moreOptionSwitch: 'その他の設定',
    optionsHeader: '設定',
    options: {
      caseSensitive: '大文字と小文字を区別する',
      wholeWord: '単語単位で',
      wholeField: '全体で',
      crossSyl: '音節をまたいで一致',
      useRegex: '正規表現を使用',
      loopSearch: '先頭から繰り返し検索',
    },
    scopeHeader: '範囲',
    scope: {
      sylContent: '歌詞',
      sylRoman: '歌詞ローマ字',
      trans: '翻訳',
      roman: 'ローマ字',
      lineRoman: 'ローマ字',
      lineTrans: '翻訳',
    },
    actions: {
      replace: '置換',
      replaceAll: 'すべて置換',
      findPrev: '前を検索',
      findNext: '次を検索',
    },
    infLoopErr: {
      summary: 'Search Failed',
      detail: 'Infinite loop detected. Please report this issue.',
    },
    noResultWarn: {
      summary: '見つかりませんでした',
      detailEmpty: 'The selected scope is empty.',
      detailNoMatch: '一致する項目が見つからず、一周しました。',
      detailNoMatchEnd:
        'Reached the end of document — no more matches.\nEnable “Wrap Around” to continue searching from the beginning.',
    },
    replaceSuccess: {
      summary: '置き換え完了',
      detail: 'Replaced {0} occurrence{{s}}.',
    },
  },
  hotkey: {
    dialogHeader: 'キー割り当て',
    notBinded: '未設定',
    btns: {
      add: '追加',
      del: '削除',
      reset: 'デフォルトに戻す',
    },
    groupTitles: {
      file: 'File Operations',
      view: 'View & Interface',
      editing: 'Editing',
      timing: 'Timing',
      audio: 'Audio Control',
    },
    commands: {
      open: '開く',
      save: '保存',
      saveAs: '名前を付けて保存',

      new: '新規プロジェクト',
      exportToClipboard: 'クリップボードにコピー',
      importFromClipboard: 'クリップボードからペースト',

      switchToContent: '歌詞編集に移動',
      switchToTiming: 'タイミング編集に移動',
      switchToPreview: 'プレビュー画面に移動',

      preferences: '環境設定',
      batchSplitText: 'Batch Syllabify',
      metadata: 'メタデータ',

      batchTimeShift: 'Batch Time Shift',
      undo: '戻す',
      redo: '取り消す',
      bookmark: 'Toggle Bookmark',
      find: '検索',
      replace: '置換',
      delete: '削除',
      selectAllLines: '全行を選択',
      selectAllSyls: 'Select All Syllables',
      breakLine: 'Split Line',
      duet: 'Toggle Duet Line',
      background: 'Toggle Background Line',
      connectNextLine: 'Toggle Sibling Line Connection',
      combineLines: 'Combine Lines',

      goPrevLine: 'Previous Line',
      goPrevSyl: 'Previous Syllable',
      goPrevSylnPlay: 'Previous Syllable & Play',
      goNextLine: '次の行',
      goNextSyl: 'Next Syllable',
      goNextSylnPlay: 'Next Syllable & Play',
      playCurrSyl: 'Play Current Syllable',
      markBegin: 'Set Start Time',
      markEndBegin: 'Set End & Next Start (Continue)',
      markEnd: 'Set End Time',

      chooseMedia: '音声データを読み込む',
      seekBackward: 'Seek Backward',
      volumeUp: '音量を上げる',
      playPauseAudio: '再生 / 一時停止',
      seekForward: 'Seek Forward',
      volumeDown: '音量を下げる',
    },
    keyNames: {
      space: 'Space',
    },
  },
  syllabify: {
    engines: {
      basic: {
        name: 'Basic',
        description:
          'Splits Western words by whitespace; splits CJK text character-by-character. Custom rules are applied to the resulting tokens (pre-split words are not merged).',
      },
      jaBasic: {
        name: '日本ベーシック',
        description:
          '小文字に対する処理が優先させ、あとはカスタムルールもしくは基準のルールに従って分割されます。',
      },
      prosodic: {
        name: 'Prosodic (English)',
        description:
          'Uses SUBTLEXus corpus. Syllables are derived from Prosodic to build a dictionary. High-frequency words are manually verified. Falls back to Compromise for unmatched words.',
      },
      silabas: {
        name: 'Silabas (Spanish)',
        description:
          'Orthographic Spanish syllabification provided by the Silabas.js library, based on modern corpus. Ported from the ULPGC Silabeador TIP C++ implementation.',
      },
      silabeador: {
        name: 'Silabeador (Spanish)',
        description:
          'Orthographic Spanish syllabification provided by the Silabeador library, mainly based on Golden Age corpus. Runs via Pyodide, may be slow on first load.',
      },
      compromise: {
        name: 'Compromise (English)',
        description:
          'Pure orthographic English syllable splitting provided by the Compromise library.',
      },
      syllabifyFr: {
        name: 'Syllabify-fr (French)',
        description: 'Orthographic French syllable splitting provided by the Syllabify-fr library.',
      },
      syllabify: {
        name: 'Syllabify (Russian)',
        description: 'Orthographic Russian syllable splitting provided by the Syllabify library.',
      },
      none: {
        name: 'None',
        description:
          'Does not perform syllable splitting. All text in a line is merged into a single syllable. Custom rules have no effect. Suitable for creating line-by-line lyrics.',
      },
    },
  },
  components: {
    confirmDialog: {
      cancel: 'キャンセル',
      continue: '続ける',
    },
    emptyTipDefault: 'No content to display in the current view',
  },
  importFromText: {
    header: 'プレーンテキストをインポート',
    modes: {
      separate: '自分で入力',
      separateDesc:
        '歌詞・翻訳・ローマ字表記をそれぞれ別のテキストボックスに入力してください。同じ位置にある行は1つのグループとなります。',
      interleaved: '交互に配置された行',
      interleavedDesc:
        '歌詞・翻訳・ローマ字表記が交互に並んでいる場合',
    },
    fields: {
      original: '歌詞',
      keepCurrentLinesTip: '(Keep existing lines)',
      trans: '翻訳',
      roman: 'ローマ字',
      atLeastProvideOne: 'Provide at least one field',
    },
    toolBtns: {
      removeTimestamps: 'Remove Timestamps',
      removeEmptyLines: 'Remove Empty Lines',
      normalizeSpaces: 'Normalize Spaces',
      capitalizeFirstLetter: 'Capitalize First Letter',
      removeTrailingPunc: 'Remove Trailing Punctuation',
    },
    lineOrder: {
      header: 'Line Order Configuration',
      cycleLengthHint: 'Current cycle contains {0} lines',
      original: '歌詞の行',
      trans: '翻訳の行',
      roman: 'ローマ字の行',
      emptyLineCount: 'Empty Lines Between Groups',
    },
    cancel: 'やめる',
    action: 'インポート',
  },
  importFromOtherFormats: {
    header: 'その他の形式',
    noDescriptionProvided: 'No description provided',
    showExamples: 'Show Examples',
    fromFile: 'ファイルを開く',
    exampleLabel: 'Format Example',
    cancel: 'やめる',
    import: 'インポート',
    requireSelectFormat: 'Please select a format on the left',
  },
  about: {
    header: '情報',
    version: 'Version',
    description:
      'Vueで構築された、オープンソースの歌詞エディタです。AMLLエコシステムと連携し、AMLL TTML Toolの後継となることを目指しています。\n開発には労力がかかります。ぜひスターを付けて応援してください！',
    githubBtn: 'GitHub リポジトリ',
    detailBtn: '詳細を表示',
    detail: {
      version: 'Version',
      channel: 'Build Channel',
      hash: 'Commit Hash',
      buildTime: 'Build Time',
      amllCoreVersion: 'AMLL Core Version',
      amllVueVersion: 'AMLL Vue Version',
      notSpecified: 'Not specified',
    },
  },
  batchTimeShift: {
    header: 'Batch Time Shift',
    signHint: 'Positive = delay, Negative = advance',
    applyToSyl: 'Apply to Selected Syllables',
    applyToLine: 'Apply to Selected Lines',
    applyToAll: 'Apply to All',
  },
  consoleArt,
} as const satisfies Translations

export default ja
