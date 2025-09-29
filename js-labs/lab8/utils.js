export function greet(name) {
  console.log(`Hello, ${name} from utils`);
}

export class DataFetcher {
  async getUser(id) {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      let data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
}
