import pg from "pg";
const { Client } = pg;

export async function load() {
  async function fetchEmployees() {
    // Configure the PostgreSQL client
    const client = new Client({
      user: "lance",
      host: "localhost",
      database: "test_db",
      port: 5432,
    });

    try {
      await client.connect();
      const result = await client.query("SELECT * FROM employees");

      return result.rows;
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      await client.end(); // Close the client connection
    }
  }

  return {
    employees: await fetchEmployees(),
  }
}
