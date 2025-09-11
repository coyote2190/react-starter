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
const styledComponentName = `Styled${pascalName}Container`;
const propsInterfaceName = `${pascalName}Props`;

const basePath = path.resolve(__dirname, '../src/components', inputName);

if (fs.existsSync(basePath)) {
  console.error('❌ Component already exists.');
  process.exit(1);
}

fs.mkdirSync(basePath, { recursive: true });

const files: Record<string, string> = {
  [`${inputName}.tsx`]: `import type { FC } from 'react';

import { ${styledComponentName} } from './${inputName}.styles';
import type { ${propsInterfaceName} } from './${inputName}.types';

const ${pascalName}: FC<${propsInterfaceName}> = ({ dataTestId }) => (
  <${styledComponentName} data-testid={dataTestId}>
    ${pascalName}
  </${styledComponentName}>
);

export default ${pascalName};
`,
  [`${inputName}.styles.ts`]: `import styled from 'styled-components';

export const ${styledComponentName} = styled.div\`
  // styles here
\`;
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
