import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [service, setService] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Entertainment");

  const [subscriptions, setSubscriptions] = useState(() => {
    const savedData = localStorage.getItem("subscriptions");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    localStorage.setItem(
      "subscriptions",
      JSON.stringify(subscriptions)
    );
  }, [subscriptions]);

  const addSubscription = () => {
    if (!service || !cost || !date) {
      alert("Please fill all fields");
      return;
    }

    const newSubscription = {
      id: Date.now(),
      service,
      cost,
      date,
      category,
    };

    setSubscriptions([...subscriptions, newSubscription]);

    setService("");
    setCost("");
    setDate("");
    setCategory("Entertainment");
  };

  const deleteSubscription = (id) => {
    setSubscriptions(
      subscriptions.filter((sub) => sub.id !== id)
    );
  };

  const totalMonthly = subscriptions.reduce(
    (sum, sub) => sum + Number(sub.cost),
    0
  );

  const totalAnnual = totalMonthly * 12;

  const filteredSubscriptions = subscriptions.filter((sub) =>
    sub.service
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const sortedSubscriptions = [...filteredSubscriptions];

  if (sortBy === "name") {
    sortedSubscriptions.sort((a, b) =>
      a.service.localeCompare(b.service)
    );
  }

  if (sortBy === "costHigh") {
    sortedSubscriptions.sort(
      (a, b) => Number(b.cost) - Number(a.cost)
    );
  }

  if (sortBy === "costLow") {
    sortedSubscriptions.sort(
      (a, b) => Number(a.cost) - Number(b.cost)
    );
  }

  return (
    <div className="container">
      <h1>SubTrack</h1>

      <div className="dashboard">
        <div className="card">
          <h3>Total Subscriptions</h3>
          <p>{subscriptions.length}</p>
        </div>

        <div className="card">
          <h3>Monthly Cost</h3>
          <p>₹{totalMonthly}</p>
        </div>

        <div className="card">
          <h3>Annual Cost</h3>
          <p>₹{totalAnnual}</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search Subscription..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Sort By</option>
        <option value="name">Name A-Z</option>
        <option value="costHigh">Cost High-Low</option>
        <option value="costLow">Cost Low-High</option>
      </select>

      <br />
      <br />

      <input
        type="text"
        placeholder="Service Name"
        value={service}
        onChange={(e) => setService(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Monthly Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <br />
      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Entertainment</option>
        <option>Music</option>
        <option>Education</option>
        <option>Software</option>
      </select>

      <br />
      <br />

      <button onClick={addSubscription}>
        Add Subscription
      </button>

      <button
        onClick={() => {
          if (
            window.confirm(
              "Delete all subscriptions?"
            )
          ) {
            setSubscriptions([]);
          }
        }}
      >
        Clear All
      </button>

      <h2>My Subscriptions</h2>

      {sortedSubscriptions.map((sub) => {
        const daysLeft = Math.ceil(
          (new Date(sub.date) - new Date()) /
            (1000 * 60 * 60 * 24)
        );

        return (
          <div
            key={sub.id}
            className="subscription-card"
          >
            <h3>{sub.service}</h3>
            <p>₹{sub.cost}</p>
            <p>{sub.date}</p>
            <p>{sub.category}</p>

            {daysLeft >= 0 &&
              daysLeft <= 7 && (
                <p>
                  ⚠️ Renews in {daysLeft} day
                  {daysLeft !== 1 ? "s" : ""}
                </p>
              )}

            <button
              onClick={() =>
                deleteSubscription(sub.id)
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;