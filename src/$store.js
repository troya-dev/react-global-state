import { useState } from "react";

export default function $store() {
  const [data, setData] = useState({ name: "John", surname: "Doe" });

  return {
    data,
    setData,
  };
}
