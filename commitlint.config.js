/**
 * fix: 表示修复了一个 bug（这和语义化版本中的 PATCH 相对应）。
 * feat: 表示新增了一个功能（这和语义化版本中的 MINOR 相对应）。
 * docs: 表示修改了文档，没有影响代码。 * style: 表示修改了代码风格，不影响代码原功能。
 * refactor: 表示重构，不同于 style，是在设计层面的修改。 * perf: 表示提升性能。
 * test: 表示修改了测试代码。 * chore: 表示其他杂项修改，build、ci 之类的修改也在这里面。
 * merge: 表示合入代码，在手动提交时使用。Gitlab MR 合入时可以保持默认消息格式。
 * revert: 表示 revert 之前的代码，在手动提交时使用。Gitlab 提供的默认 Revert 消息可以保持。
 */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always'],
    'type-enum': [
      2, // 表示必须输入的
      'always',
      [
        'fix',
        'feat',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'merge',
        'revert',
        'build',
      ],
    ],
  },
};
