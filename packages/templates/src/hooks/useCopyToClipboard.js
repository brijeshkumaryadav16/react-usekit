import { useCallback, useState } from 'react';

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const copy = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      setError('Clipboard API not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(null);

      // Reset copied state after a delay
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
