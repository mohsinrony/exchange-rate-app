
export class FetchWrapper {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  // Convert the `get` method to async
  async get(endpoint: string): Promise<any> {
    const response = await fetch(this.baseURL + endpoint);
    return response.json(); // Return the parsed JSON response
  }

  // Convert the `put` method to async
  async put(endpoint: string, body: any): Promise<any> {
    return this._send('put', endpoint, body);
  }

  // Convert the `post` method to async
  async post(endpoint: string, body: any): Promise<any> {
    return this._send('post', endpoint, body);
  }

  // Convert the `delete` method to async
  async delete(endpoint: string, body: any): Promise<any> {
    return this._send('delete', endpoint, body);
  }

  // Convert _send to async function
  private async _send(method: string, endpoint: string, body: any): Promise<any> {
    const response = await fetch(this.baseURL + endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json(); // Return the parsed JSON response
  }
}
