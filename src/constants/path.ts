export const DOS_PATHS = [
  "C:\\WINDOWS\\SYSTEM32",
  "C:\\PROJECTS\\BACKEND",
  "D:\\SERVICES\\API",
  "C:\\USERS\\DEVELOPER",
  "E:\\MICROSERVICES",
  "C:\\PROJECTS\\AI"
] as const;

export const getRandomPath = (): string => {
  return DOS_PATHS[Math.floor(Math.random() * DOS_PATHS.length)];
};