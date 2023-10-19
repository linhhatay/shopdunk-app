export async function login(data) {
  try {
    const res = await fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Email or password invalid`);
    }

    const output = await res.json();
    localStorage.setItem("user", JSON.stringify(output));
    return output;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function logout() {
  try {
    const res = await fetch("http://localhost:8000/api/v1/users/logout");
    if (!res.ok) {
      throw new Error(`Logout failure`);
    }
    localStorage.removeItem("user");
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
}
