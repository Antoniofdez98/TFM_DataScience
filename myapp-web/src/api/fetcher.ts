export const customFetcher = async <TData = unknown, TVariables = unknown>(
  url: string,
  options?: RequestInit
): Promise<TData> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    credentials: 'include',
    ...options,
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json() as Promise<TData>;
};
