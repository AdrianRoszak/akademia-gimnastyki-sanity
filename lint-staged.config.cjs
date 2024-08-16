// lint-staged.config.js
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'tsc --noEmit',

  // Lint then format TypeScript and JavaScript and Atro files
  '**/*.(ts|tsx|cjs|js)': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `pnpm format ${filenames.join(' ')}`
  ]
}
