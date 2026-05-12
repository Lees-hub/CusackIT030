// ============================================================
// 
const items = [
  {
    name: "Pro Tools",          // TODO 1 — item name
    category: "Audio",      // TODO 1 — must match an <option> value exactly
    description: "My favorite Digital Audio Workspace, good for mixing and mastering audio. Really the only DAW I trust"    // TODO 1 — one sentence description
  },
  {
    name: "Adobe Premiere",
    category:"Video",
    description: "My most... tolerated... video editor... When it works, it works. When it doesn't, it's evil and out to get me specifically"
  },
  {
    name: "Microphone Setup",
    category: "Audio",
    description: "Different types of microphones for different situations, such as bands, broadcasting, room tone, conferences, etc."
  },
  {
    name: "The Sony Anycast",
    category: "Video",
    description: "The best piece of equipment ever made, it's a portable video switcher, audio mixer, and more all in one"
  },
  {
    name: "The JVC Series",
    category: "Video",
    description: "The series of television camera I am most familiar with. I know it inside and out, can set it to anything needed for event."
  },
  {
    name: "Comrex Access NX",
    category: "Audio",
    description: "A remote broadcasting device that uses Audio over IP to connect to a codec and transmit over a station"
  },
  {
    name: "Soldering",
    category: "IT",
    description: "Re-attching cable ends to the wires themselves via melting metal onto it, I can do XLR cables, 1/4 jacks, and (some) motherboard joints"
  },
  {
    name: "Troubleshooting",
    category: "IT",
    description: "The guess-and-check method, but people think you're smart. It's my favorite thing to do at my job, and I'm pretty thorough with it."
  },
  // You can add more objects here if you want
];



function renderItems(items) {

 

  const container = document.getElementById("RenderHere");  // TODO 2


 

  container.innerHTML = "";  // TODO 3


 
  for (let i = 0; i < items.length; i++) {  // TODO 4a — what is the length of?

    const card = document.createElement("div");
    card.className = "item-card";

    // innerHTML lets you write HTML as a string.
    // The + operator joins strings together.
    // list[i].name accesses the name property of the current item.

    card.innerHTML =
      "<h3>" + items[i].name + "</h3>" +             // TODO 4b — which property is the title?
      "<p>"  + items[i].description + "</p>" +              // TODO 4b — which property is the description?
      "<span class='item-tag'>" + items[i].category + "</span>";  // TODO 4b — which property is the label?

    container.appendChild(card);  // TODO 4c — which variable is the container?
  }


 
 

  document.getElementById("count").textContent =   // TODO 5a
    items.length + " items shown";                         // TODO 5b — what holds the count?
}




function filterItems(Topic) {  // TODO 6a — name the parameter

  switch (Topic) {             // TODO 6b — what are you switching on?

    case "":
      // Empty string means the user selected "All"
      // Pass the full items array — no filtering needed
     renderItems(items);
     break;

    case "Audio":              // TODO 6c — your first category value (must match <option> value)
      

      const filtered1 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Audio") {  // TODO 6d — which category?
          filtered1.push(items[i]);
        }
      }
      renderItems(filtered1);
      break;

    case "Video":              // TODO 6c — your second category value
      // TODO 6d: Same pattern as above — build filtered array and render

      const filtered2 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Video") {  // TODO 6d
          filtered2.push(items[i]);
        }
      }
      renderItems(filtered2);
      break;

    case "IT":              // TODO 6c — your third category value
      // TODO 6d: Same pattern

      const filtered3 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "IT") {  // TODO 6d
          filtered3.push(items[i]);
        }
      }
      renderItems(filtered3);
      break;

    default:
      // This runs if the selected value does not match any case above.
      // As a safe fallback, show everything.
      //
      // TODO 6e: Call renderItems with the full items array

      renderItems(items);  // TODO 6e
      break;
  }
}




filterItems("");
