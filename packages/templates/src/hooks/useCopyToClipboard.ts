import { useCallback, useState } from 'react';

type UseCopyToClipboardResult = {
  copy: (text: string) => Promise<boolean>;
  copied: boolean;
  error: string | null;
};

export function useCopyToClipboard(): UseCopyToClipboardResult {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    if (!navigator?.clipboard) {
      setError('Clipboard API not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(null);

      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      setError('Failed to copy');
      setCopied(false);
      return false;
    }
  }, []);

  return { copy, copied, error };
}
