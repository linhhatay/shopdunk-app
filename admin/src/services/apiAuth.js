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

export async function updateCurrentUser({
  accessToken,
  fullName,
  photo,
  password,
  passwordCurrent,
}) {
  try {
    const requestOptions = {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    };

    if (fullName || photo) {
      const updateData = new FormData();
      if (fullName) updateData.append("fullName", fullName);
      if (photo) updateData.append("photo", photo);
      requestOptions.body = updateData;

      const res = await fetch(
        "http://localhost:8000/api/v1/users/updateMe",
        requestOptions
      );
      if (!res.ok) {
        throw new Error("Error...");
      }
      const data = await res.json();
      return data;
    }

    if (password) {
      const updatePasswordData = {
        passwordCurrent,
        password,
        passwordConfirm: password,
      };
      requestOptions.headers["Content-Type"] = "application/json";
      const response = await fetch(
        "http://localhost:8000/api/v1/users/updateMyPassword",
        {
          ...requestOptions,
          body: JSON.stringify(updatePasswordData),
        }
      );
      const updatePassword = await response.json();
      return updatePassword;
    }

    // if (Object.keys(requestOptions.body).length > 0) {

    // }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getMe() {
  try {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) return null;
    const token = userData.token;

    const res = await fetch("http://localhost:8000/api/v1/users/me", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        authorization: `Bearer ${token}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    if (!res.ok) {
      throw new Error(`Error...`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
