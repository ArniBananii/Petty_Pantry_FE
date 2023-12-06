async function useFetch<T>(
  url: string,
  requestType: string,
  dataToProcess?: any
): Promise<T> {
  try {
    const response = await fetch(url, {
      method: requestType,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToProcess),
    });
    if (!response.ok) {
      return response.status.toString() as any;
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    throw new Error(
      `Failed to fetch data from ${url} with specs: requestType:${requestType}, dataToProcess:${dataToProcess}, error:${error} `
    );
  }
}
export default useFetch;
