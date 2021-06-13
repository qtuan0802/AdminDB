import React, { useState, useEffect } from "react";

export default function Test() {
  //State
  const [fullName, setFullName] = useState({
    name: "name",
    familyName: "family",
  });
  const [title, setTitle] = useState("useEffect() in Hooks");

  useEffect(() => {
    console.log("useEffect has been called!");
    setFullName({ name: "TrungHC", familyName: "HCT" });
  }, []);

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </div>
  );
}
