//THIS IS POTENTIALLY BEING DEPRECATED!
async function useFetch(
  url: string,
  requestType: string,
  dataToProcess?: any
): Promise<any> {
  try {
    const response = await fetch(url, {
      method: requestType,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToProcess),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Failed to fetch data from ${url} with specs: requestType:${requestType}, dataToProcess:${dataToProcess}, error:${error} `
    );
  }
}
export default useFetch;
