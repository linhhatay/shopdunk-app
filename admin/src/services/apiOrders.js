export async function getOrders({ filter, sortBy, pagination }) {
  let url = "http://localhost:8000/api/v1/orders";

  if (filter) {
    url = `${url}?${filter.field}=${filter.value}`;
  }

  if (sortBy) {
    if (filter) {
      url = `${url}&sort=${sortBy.direction === "asc" ? "" : "-"}${
        sortBy.field
      }`;
    } else {
      url = `${url}?sort=${sortBy.direction === "asc" ? "" : "-"}${
        sortBy.field
      }`;
    }
  }

  if (pagination) {
    url = `${url}&page=${pagination.page}&limit=${pagination.limit}`;
  }
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function deleteOrder(id) {
  const res = await fetch(`http://localhost:8000/api/v1/orders/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
}

export async function createOrder(newProduct) {
  const res = await fetch("http://localhost:8000/api/v1/orders", {
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
  const data = await res.json();

  return data;
}

export async function editOrder(data) {
  const res = await fetch(
    `http://localhost:8000/api/v1/orders/${data.editId}`,
    {
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
    }
  );

  const output = await res.json();

  return output;
}

export async function getOrder(id) {
  let url = `http://localhost:8000/api/v1/orders/${id}`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}
