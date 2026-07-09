import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Convertit vers PascalCase (my-component → MyComponent)
const toPascalCase = (str: string): string =>
  str
    .replace(/[-_]/g, ' ')
    .replace(/\s(.)/g, (match) => match.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, (match) => match.toUpperCase());

const inputName = process.argv[2];

if (!inputName) {
  console.error('❌ Please provide a component name.');
  process.exit(1);
}

const pascalName = toPascalCase(inputName);
const propsInterfaceName = `${pascalName}Props`;

const componentsDir = path.resolve(__dirname, '../src/components');
const basePath = path.resolve(componentsDir, inputName);
const relativeToComponents = path.relative(componentsDir, basePath);

if (
  relativeToComponents.startsWith('..') ||
  path.isAbsolute(relativeToComponents) ||
  relativeToComponents === ''
) {
  console.error('❌ Invalid component name.');
  process.exit(1);
}

if (fs.existsSync(basePath)) {
  console.error('❌ Component already exists.');
  process.exit(1);
}

fs.mkdirSync(basePath, { recursive: true });

const files: Record<string, string> = {
  [`${inputName}.module.css`]: `.${inputName} {
  /* styles here */
}
`,
  [`${inputName}.tsx`]: `import type { FC } from 'react';

import styles from './${inputName}.module.css';
import type { ${propsInterfaceName} } from './${inputName}.types';

const ${pascalName}: FC<${propsInterfaceName}> = ({ dataTestId }) => (
  <div className={styles.${inputName}} data-testid={dataTestId}>
    ${pascalName}
  </div>
);

export default ${pascalName};
`,
  [`${inputName}.types.ts`]: `export type ${propsInterfaceName} = {
  dataTestId?: string;
}
`,
  [`index.ts`]: `export { default } from './${inputName}';
export * from './${inputName}.types';
`
};

Object.entries(files).forEach(([fileName, content]) => {
  fs.writeFileSync(path.join(basePath, fileName), content, { encoding: 'utf8' });
});

console.log(`✅ Component "${pascalName}" created at src/components/${inputName}`);
