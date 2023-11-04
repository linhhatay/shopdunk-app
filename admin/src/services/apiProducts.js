export async function getProducts() {
  const res = await fetch("http://localhost:8000/api/v1/products");
  const data = await res.json();

  return data;
}

export async function deleteProduct(id) {
  await fetch(`http://localhost:8000/api/v1/products/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function createProduct(newProduct) {
  console.log(newProduct);
  const res = await fetch("http://localhost:8000/api/v1/products", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      // "Content-Type": "multipart/form-data",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: newProduct,
  });
  const data = await res.json();

  return data;
}

export async function editProduct(data) {
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

  const output = await res.json();

  return output;
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
  const output = await res.json();

  return output;
}
