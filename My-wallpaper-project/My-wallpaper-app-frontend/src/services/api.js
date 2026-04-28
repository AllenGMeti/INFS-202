const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    console.log("API response:", data);
    return { success: true, data };
  } catch (error) {
    console.log("Fetch error:", error);
    return { success: false, data: [] };
  }
}

export async function submitContactForm(formData) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log("Async/Await response:", data);
    return { success: true, data };
  } catch (error) {
    console.log("Async error:", error);
    return { success: false };
  }
}
