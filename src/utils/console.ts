export const buildConsoleLines = (
  path: string,
  title: string,
  date: string,
  description: string
): string[] => {
  return [
    `Microsoft❮R❯ Windows DOS`,
    `❮C❯ Copyright Microsoft Corp 1990-2001.`,
    ``,
    `${path}> ${title}`,
    ``,
    `│ ${date}`,
    `│`,
    ...description.split('\n').map(line => `│ ${line}`),
    ``,
    `${path}> _`
  ];
};