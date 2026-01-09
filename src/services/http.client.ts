export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type RequestConfig<TBody> = {
  method?: HttpMethod;
  params?: Record<string, string | number | boolean | undefined>;
  body?: TBody;
};

export async function request<TResponse, TBody = never>(
  url: string,
  config: RequestConfig<TBody> = {}
): Promise<TResponse> {
  const { method = 'GET', params, body } = config;

  let fullUrl = process.env.NEXT_PUBLIC_API_URL + url;

  if (params) {
    const query = new URLSearchParams(
      Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== '')
        .map(([k, v]) => [k, String(v)])
    ).toString();

    if (query) {
      fullUrl += `?${query}`;
    }
  }

  const res = await fetch(fullUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw await res.json();
  }

  return res.json() as Promise<TResponse>;
}
