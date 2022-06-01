export type ApiMethod = "GET" | "POST" | "PUT" | "DELETE";

export const request = async <T>(
  method: ApiMethod,
  url: string,
  body?: string
): Promise<T> => {

  // coming from env. variable
  const apiUrl = "https://animechan.vercel.app/api/";
  let serverError = false;
  try {
    const response = await fetch(`${apiUrl}${url}`, {
      method,
      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    });

    if (response.ok) {
      try {
        return await response.json();
      } catch {
        // error: response is not json or there is no body
        return true as unknown as T;
      }
    }
    serverError = true;
    throw new Error('Server error');
  } catch (err) {
    if (serverError) {
      throw err;
    }
    throw err;
  }
};

export const get = <T>(url: string, body?: string): Promise<T> =>
  request("GET", url, body);

export const post = <T>(url: string, body?: string): Promise<T> =>
  request("POST", url, body);

export const put = <T>(url: string, body?: string): Promise<T> =>
  request("PUT", url, body);
