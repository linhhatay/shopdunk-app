export async function getProducts() {
  const res = await fetch("http://localhost:8000/api/v1/products");
  const data = res.json();

  return data;
}

export async function deleteProduct(id) {
  const res = await fetch(`http://localhost:8000/api/v1/products/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
}

export async function createProduct(newProduct) {
  const res = await fetch("http://localhost:8000/api/v1/products", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      // "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: newProduct,
  });
  return res.json();
}

export async function editProduct(data) {
  console.log(data);
  console.log(data.imageCover);
  let res;
  if (typeof data.imageCover === "string") {
    res = await fetch(`http://localhost:8000/api/v1/products/${data.editId}`, {
      method: "PATCH",
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
  } else {
    res = await fetch(`http://localhost:8000/api/v1/products/${data.editId}`, {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        // "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: data.formData,
    });
  }

  return res.json();
}

export async function duplicateProduct(data) {
  const res = await fetch("http://localhost:8000/api/v1/products", {
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
  return res.json();
}
