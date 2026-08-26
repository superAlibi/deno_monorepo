type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

const levelOrder: Record<LogLevel, number> = {
  DEBUG: 10,
  INFO: 20,
  WARN: 30,
  ERROR: 40,
};

function resolveLogLevel(): LogLevel {
  const rawLevel = (Deno.env.get('LOG_LEVEL') ?? 'INFO').toUpperCase();
  if (rawLevel in levelOrder) {
    return rawLevel as LogLevel;
  }
  return 'INFO';
}

function stringifyError(error: unknown): string {
  if (error instanceof Error) {
    return `${error.name}: ${error.message}`;
  }

  return String(error);
}

function canEmit(level: LogLevel, minLevel: LogLevel): boolean {
  return levelOrder[level] >= levelOrder[minLevel];
}

export interface LoggerFields {
  [key: string]: string | number | boolean | null | undefined;
}

export interface Logger {
  debug(message: string, fields?: LoggerFields): void;
  info(message: string, fields?: LoggerFields): void;
  warn(message: string, fields?: LoggerFields): void;
  error(message: string, fields?: LoggerFields): void;
}

export function getLogger(name = 'app'): Logger {
  const minLevel = resolveLogLevel();

  const emit = (
    level: LogLevel,
    message: string,
    fields: LoggerFields = {},
  ) => {
    if (!canEmit(level, minLevel)) return;

    const payload = {
      timestamp: new Date().toISOString(),
      level,
      logger: name,
      message,
      ...fields,
    };

    const output = JSON.stringify(payload);
    if (level === 'ERROR') {
      console.error(output);
      return;
    }
    if (level === 'WARN') {
      console.warn(output);
      return;
    }
    if (level === 'INFO') {
      console.info(output);
      return;
    }
    console.debug(output);
  };

  return {
    debug(message, fields) {
      emit('DEBUG', message, fields);
    },
    info(message, fields) {
      emit('INFO', message, fields);
    },
    warn(message, fields) {
      emit('WARN', message, fields);
    },
    error(message, fields) {
      emit('ERROR', message, fields);
    },
  };
}

export function formatError(error: unknown): string {
  return stringifyError(error);
}
