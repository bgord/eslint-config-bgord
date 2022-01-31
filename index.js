module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
	},
	plugins: ['react', 'sonarjs', 'jsx-a11y', 'ramda', 'jest', '@typescript-eslint', 'react-hooks'],
	extends: [
		'plugin:jsx-a11y/recommended',
		'plugin:ramda/recommended',
		'plugin:jest/recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'for-direction': 0,
		'getter-return': 2,
		// 'no-async-promise-executor': 1,
		'no-await-in-loop': 0,
		'no-compare-neg-zero': 2,
		'no-cond-assign': 2,
		'no-console': 1,
		'no-constant-condition': 2,
		'no-control-regex': 2,
		'no-debugger': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty': 2,
		'no-empty-character-class': 2,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-parens': 0,
		'no-extra-semi': 0,
		'no-func-assign': 2,
		'no-inner-declarations': 2,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 0,
		// 'no-misleading-character-class': 0,
		'no-obj-calls': 2,
		'no-prototype-builtins': 2,
		'no-regex-spaces': 0,
		'no-sparse-arrays': 2,
		'no-template-curly-in-string': 1,
		'no-unexpected-multiline': 1,
		'no-unreachable': 2,
		'no-unsafe-finally': 1,
		'no-unsafe-negation': 2,
		// 'require-atomic-updates': 2,
		'use-isnan': 2,
		'valid-jsdoc': 0,
		'valid-typeof': 2,
		'accessor-pairs': 0,
		'array-callback-return': 2,
		'block-scoped-var': 1,
		'class-methods-use-this': 0,
		complexity: 0,
		'consistent-return': 1,
		curly: 0,
		'default-case': 2,
		'dot-location': 0,
		'dot-notation': 2,
		eqeqeq: 2,
		'guard-for-in': 0,
		'max-classes-per-file': 0,
		'no-alert': 0,
		'no-caller': 0,
		'no-case-declarations': 1,
		'no-div-regex': 0,
		'no-else-return': 2,
		'no-empty-function': 0,
		'no-empty-pattern': 2,
		'no-eq-null': 2,
		'no-eval': 2,
		'no-extend-native': 2,
		'no-extra-bind': 0,
		'no-extra-label': 2,
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-global-assign': 2,
		'no-implicit-coercion': 2,
		'no-implicit-globals': 0,
		'no-implied-eval': 0,
		'no-invalid-this': 0,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-loop-func': 2,
		'no-magic-numbers': 0,
		'no-multi-spaces': 0,
		'no-multi-str': 2,
		'no-new': 0,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		'no-octal': 2,
		'no-octal-escape': 2,
		'no-param-reassign': 2,
		'no-proto': 2,
		'no-redeclare': 2,
		'no-restricted-properties': 0,
		'no-return-assign': 2,
		'no-return-await': 2,
		'no-script-url': 0,
		'no-self-assign': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-throw-literal': 2,
		'no-unmodified-loop-condition': 0,
		'no-unused-expressions': 2,
		'no-unused-labels': 2,
		'no-useless-call': 0,
		'no-useless-concat': 2,
		'no-useless-escape': 2,
		'no-useless-return': 2,
		'no-void': 2,
		'no-warning-comments': 0,
		'no-with': 2,
		'prefer-promise-reject-errors': 1,
		radix: 2,
		'require-await': 0,
		'require-unicode-regexp': 0,
		'vars-on-top': 0,
		'wrap-iife': 0,
		yoda: 2,
		strict: 2,
		'init-declarations': 0,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-restricted-globals': 0,
		'no-shadow': 1,
		'no-shadow-restricted-names': 2,
		'no-undef': 0,
		'no-undef-init': 0,
		'no-undefined': 0,
		'no-unused-vars': 0,
		'no-use-before-define': 0,
		'callback-return': 0,
		'global-require': 0,
		'handle-callback-err': 1,
		'no-buffer-constructor': 0,
		'no-mixed-requires': 2,
		'no-new-require': 0,
		'no-path-concat': 1,
		'no-process-env': 0,
		'no-process-exit': 0,
		'no-restricted-modules': 0,
		'no-sync': 2,
		'array-bracket-newline': 0,
		'array-bracket-spacing': 0,
		'array-element-newline': 0,
		'block-spacing': 0,
		'brace-style': 0,
		camelcase: 0,
		'capitalized-comments': 0,
		'comma-dangle': 0,
		'comma-spacing': 0,
		'comma-style': 0,
		'computed-property-spacing': 0,
		'consistent-this': 0,
		'eol-last': [2, 'always'],
		'func-call-spacing': 0,
		'func-name-matching': 0,
		'func-names': 0,
		'func-style': 0,
		'function-paren-newline': 0,
		'id-blacklist': 0,
		'id-length': 0,
		'id-match': 0,
		'implicit-arrow-linebreak': 0,
		indent: 0,
		'jsx-quotes': 0,
		'key-spacing': 0,
		'keyword-spacing': 0,
		'line-comment-position': 0,
		'linebreak-style': 0,
		'lines-around-comment': 0,
		'lines-between-class-members': 2,
		'max-depth': 0,
		'max-len': 0,
		'max-lines': 0,
		// 'max-lines-per-function': ['warn', 75],
		'max-nested-callbacks': 0,
		'max-params': [2, 3],
		'max-statements': 0,
		'max-statements-per-line': 0,
		'multiline-comment-style': 0,
		'multiline-ternary': 0,
		'new-cap': 0,
		'new-parens': 2,
		'newline-per-chained-call': 0,
		'no-array-constructor': 2,
		'no-bitwise': 2,
		'no-continue': 0,
		'no-inline-comments': 0,
		'no-lonely-if': 2,
		'no-mixed-operators': 0,
		'no-mixed-spaces-and-tabs': 0,
		'no-multi-assign': 0,
		'no-multiple-empty-lines': 0,
		'no-negated-condition': 2,
		'no-nested-ternary': 2,
		'no-new-object': 0,
		'no-plusplus': 0,
		'no-tabs': 0,
		'no-ternary': 0,
		'no-trailing-spaces': 0,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 2,
		'no-whitespace-before-property': 0,
		'nonblock-statement-body-position': 0,
		'object-curly-newline': 0,
		'object-curly-spacing': 0,
		'object-property-newline': 0,
		'one-var': 0,
		'one-var-declaration-per-line': 0,
		'operator-assignment': 0,
		'operator-linebreak': 0,
		'padded-blocks': 0,
		'padding-line-between-statements': 0,
		// 'prefer-object-spread': 0,
		'quote-props': 0,
		quotes: 0,
		'require-jsdoc': 0,
		semi: 0,
		'semi-spacing': 0,
		'semi-style': 0,
		'sort-keys': 0,
		'sort-vars': 0,
		'space-before-blocks': 0,
		'space-before-function-paren': 0,
		'space-in-parens': 0,
		'space-infix-ops': 0,
		'space-unary-ops': 0,
		'spaced-comment': 0,
		'switch-colon-spacing': 0,
		'template-tag-spacing': 0,
		'unicode-bom': 0,
		'wrap-regex': 0,
		'arrow-body-style': 0,
		'arrow-parens': 0,
		'arrow-spacing': 0,
		'constructor-super': 1,
		'generator-star-spacing': 0,
		'no-class-assign': 0,
		'no-confusing-arrow': 0,
		'no-const-assign': 2,
		'no-dupe-class-members': 2,
		'no-duplicate-imports': 2,
		'no-new-symbol': 2,
		'no-restricted-imports': 0,
		'no-this-before-super': 2,
		'no-useless-computed-key': 2,
		'no-useless-constructor': 2,
		'no-useless-rename': 2,
		'no-var': 2,
		'object-shorthand': 2,
		'prefer-arrow-callback': 2,
		'prefer-const': 0,
		'prefer-destructuring': 0,
		'prefer-numeric-literals': 0,
		'prefer-rest-params': 0,
		'prefer-spread': 0,
		'prefer-template': 2,
		'require-yield': 0,
		'rest-spread-spacing': 0,
		'sort-imports': 0,
		'symbol-description': 0,
		'template-curly-spacing': 0,
		'yield-star-spacing': 0,
		'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
		'react/button-has-type': 2,
		'react/default-props-match-prop-types': 0,
		'react/destructuring-assignment': 0,
		'react/display-name': 0,
		// 'react/forbid-component-props': [],
		'react/forbid-dom-props': 0,
		'react/forbid-elements': 0,
		'react/forbid-prop-types': 0,
		'react/forbid-foreign-prop-types': 0,
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'react/no-access-state-in-setstate': 2,
		'react/no-array-index-key': 2,
		'react/no-children-prop': 2,
		'react/no-danger': 2,
		'react/no-danger-with-children': 2,
		'react/no-deprecated': 2,
		'react/no-did-mount-set-state': 0,
		'react/no-did-update-set-state': 1,
		'react/no-direct-mutation-state': 2,
		'react/no-find-dom-node': 2,
		'react/no-is-mounted': 2,
		'react/no-multi-comp': 2,
		'react/no-redundant-should-component-update': 2,
		'react/no-render-return-value': 2,
		'react/no-set-state': 0,
		'react/no-typos': 2,
		'react/no-string-refs': 2,
		'react/no-this-in-sfc': 2,
		'react/no-unescaped-entities': 0,
		'react/no-unknown-property': [1, { ignore: 'class' }],
		// 'react/no-unsafe': 1,
		'react/no-unused-prop-types': 0,
		'react/no-unused-state': 2,
		'react/no-will-update-set-state': 2,
		'react/prefer-es6-class': 0,
		'react/prefer-stateless-function': 0,
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
		'react/require-default-props': 0,
		'react/require-optimization': 0,
		'react/require-render-return': 2,
		'react/self-closing-comp': 2,
		'react/sort-comp': 0,
		'react/sort-prop-types': 0,
		'react/style-prop-object': 0,
		'react/void-dom-elements-no-children': 2,
		'sonarjs/no-all-duplicated-branches': 2,
		'sonarjs/no-element-overwrite': 2,
		'sonarjs/no-extra-arguments': 0,
		'sonarjs/no-identical-conditions': 2,
		'sonarjs/no-identical-expressions': 2,
		'sonarjs/no-one-iteration-loop': 2,
		'sonarjs/no-use-of-empty-return-value': 2,
		'sonarjs/cognitive-complexity': 2,
		'sonarjs/max-switch-cases': 2,
		'sonarjs/no-duplicate-string': 1,
		'sonarjs/no-duplicated-branches': 2,
		'sonarjs/no-identical-functions': 2,
		'sonarjs/no-inverted-boolean-check': 2,
		'sonarjs/no-redundant-boolean': 2,
		'sonarjs/no-small-switch': 2,
		'sonarjs/no-useless-catch': 2,
		'sonarjs/prefer-immediate-return': 2,
		'sonarjs/prefer-object-literal': 2,
		'sonarjs/prefer-single-boolean-return': 0,
		'sonarjs/prefer-while': 0,
		// 'import/no-unresolved': 2,
		// 'import/named': 0,
		// 'import/default': 0,
		// 'import/namespace': 0,
		// 'import/no-restricted-paths': 0,
		// 'import/no-absolute-path': 0,
		// 'import/no-internal-modules': 0,
		// 'import/no-webpack-loader-syntax': 0,
		// 'import/no-self-import': 2,
		// 'import/no-cycle': 2,
		// 'import/no-useless-path-segments': 2,
		// 'import/no-relative-parent-imports': 0,
		// 'import/export': 2,
		// 'import/no-named-as-default': 0,
		// 'import/no-named-as-default-member': 0,
		// 'import/no-deprecated': 0,
		// 'import/no-extraneous-dependencies': 0,
		// 'import/no-mutable-exports': 2,
		// 'import/no-commonjs': 0,
		// 'import/no-amd': 0,
		// 'import/no-nodejs-modules': 0,
		// 'import/first': 2,
		// 'import/exports-last': 2,
		// 'import/no-duplicates': 2,
		// 'import/no-namespace': 0,
		// 'import/extensions': 0,
		// 'import/order': 2,
		// 'import/newline-after-import': 2,
		// 'import/prefer-default-export': 0,
		// 'import/max-dependencies': 0,
		// 'import/no-unassigned-import': 1,
		// 'import/no-named-default': 2,
		// 'import/no-default-export': 2,
		// 'import/no-anonymous-default-export': 2,
		// 'import/group-exports': 2,
		// 'import/dynamic-import-chunkname': 2,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/indent': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/no-var-requires': 0,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1,
		'ramda/prefer-ramda-boolean': 0,
		'sonarjs/no-duplicate-string': 0,
		'@typescript-eslint/no-empty-function': 0,
		'sonarjs/no-identical-functions': 1,
		'react/no-multi-comp': 0,
		'jsx-a11y/no-onchange': 1,
		'no-bitwise': 0,
		'sonarjs/cognitive-complexity': 0,
		'jsx-a11y/label-has-associated-control': 1,
	},
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	globals: {
		use: 'readonly',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
