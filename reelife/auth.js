async function requestVerification() {
  try {
    await fetch("http://localhost:8000/auth/requestVerification", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, storeId, domain: window.location.origin }),
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

requestVerification();
