import { notFound } from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await (requestLocale || routing.defaultLocale || "de");

  try {
    const messages = await import(`../messages/${locale}.json`);
    return {
      locale,
      messages: messages.default,
    };
  } catch {
    notFound();
  }
});
