import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    // ... other array elements
  ]);
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={e=>setSearchQuery(e.target.value)}
      />
      <ul>
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>
    </div>
  );
}
