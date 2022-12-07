import chalk from 'chalk';

interface logRequestParams {
  content: unknown;
  contentType: unknown;
  source: unknown;
  status: 'start' | 'complete';
}
export const logRequest = ({
  content,
  contentType,
  source,
  status,
}: logRequestParams) => {
  if (process.env.NODE_ENV === 'production') return;
  let statusString: string;
  let colorize: (text: unknown) => string;

  if (status === 'complete') {
    statusString = 'Completed';
    colorize = (text: unknown) => chalk.green(text);
  } else {
    statusString = 'Requested';
    colorize = (text: unknown) => chalk.cyan(text);
  }

  const requestString = `${colorize('Request')} - ${statusString}`;
  const contentTypeString = contentType ? ` ${contentType}: ` : ': ';
  const contentString = `[${colorize(content)}]`;
  const sourceString = source ? ` to [${colorize(source)}]` : '';

  console.log(requestString + contentTypeString + contentString + sourceString);
};

export const logRequestStart = (
  content: unknown,
  contentType?: unknown,
  source?: unknown
) => {
  logRequest({ content, contentType, source, status: 'start' });
};

export const logRequestComplete = (
  content: unknown,
  contentType?: unknown,
  source?: unknown
) => {
  logRequest({ content, contentType, source, status: 'complete' });
};
