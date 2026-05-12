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


// ============================================================
//  PART 2 — THE RENDER FUNCTION
//
//  This function takes a list of items and draws them as
//  cards on the page. It is called by filterItems() below.
//
//  It works in three steps:
//    Step 1 — Find the container element on the page
//    Step 2 — Clear whatever is currently inside it
//    Step 3 — Loop through the list and build a card for each item
//
//  After rendering, it also updates the result count.
//
//  Read each TODO comment carefully before filling it in.
// ============================================================

function renderItems(items) {

  // ── Step 1: Find the container ──────────────────────────────
  //
  //  document.getElementById("some-id") finds the element on the
  //  page whose id attribute matches and returns it as a variable.
  //
  //  TODO 2: Fill in the id of the <div> in interests.html
  //  where the cards should appear. Look at the HTML — what is its id?

  const container = document.getElementById("RenderHere");  // TODO 2


  // ── Step 2: Clear the container ─────────────────────────────
  //
  //  Before drawing new cards, you must erase whatever is already there.
  //  Setting innerHTML to an empty string "" wipes all child elements.
  //
  //  If you skip this step, old cards stay on the page every time
  //  the user picks a new category — they pile up instead of replacing.
  //
  //  TODO 3: Clear the container before building new cards.
  //  Hint: assign an empty string to container.innerHTML

  container.innerHTML = "";  // TODO 3


  // ── Step 3: Loop and build cards ────────────────────────────
  //
  //  A for loop runs the code inside it once for each item.
  //  The variable i is the current position (index) in the list.
  //  It starts at 0 (first item) and counts up to list.length - 1.
  //
  //  Inside the loop:
  //    list[i]             — the current item (one object)
  //    list[i].name        — the name property of that item
  //    list[i].category    — the category property
  //    list[i].description — the description property
  //
  //  For each item, you will:
  //    1. Create a new <div> element
  //    2. Give it the CSS class "item-card"
  //    3. Set its innerHTML to show the item's properties
  //    4. Append it to the container
  //
  //  TODO 4a: Fill in the loop condition — what should i count up to?
  //  TODO 4b: Fill in the three property accesses inside innerHTML
  //  TODO 4c: Fill in the appendChild call

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


  // ── Update the result count ──────────────────────────────────
  //
  //  After building the cards, update the result count paragraph
  //  to show how many items are currently displayed.
  //
  //  list.length gives you the number of items in the list
  //  that was passed into this function (already filtered).
  //
  //  TODO 5a: Fill in the id of the result count element
  //  TODO 5b: Fill in what gives you the number of items shown

  document.getElementById("count").textContent =   // TODO 5a
    items.length + " items shown";                         // TODO 5b — what holds the count?
}


// ============================================================
//  PART 3 — THE FILTER FUNCTION
//
//  This function runs every time the user picks a category
//  from the dropdown menu. The HTML calls it like this:
//    onchange="filterItems(this.value)"
//  where this.value is the value of the selected <option>.
//
//  A switch statement checks one value against multiple cases.
//  It is cleaner than a long if/else chain when you know
//  exactly which values to expect.
//
//  Structure:
//    switch (someValue) {
//      case "exact match":
//        // code for this case
//        break;
//      case "another match":
//        // code for this case
//        break;
//      default:
//        // runs if nothing matched
//    }
//
//  IMPORTANT: Every case needs a break statement at the end.
//  Without break, JavaScript falls through and runs the next
//  case too — which is almost never what you want.
//
//  In this function:
//    - Each case matches one of your category values
//    - Inside each case, build a filtered array by looping
//      through items and collecting only the matching ones
//    - Then call renderItems() with that filtered array
//    - The empty string "" case ("All") passes the full array
//
//  TODO 6a: Fill in the parameter name in the function signature
//           (the word in the parentheses — this is what receives
//           the selected category value from the dropdown)
//  TODO 6b: Fill in the switch target — what value are you switching on?
//  TODO 6c: Add a case for each of your categories
//  TODO 6d: Inside each case, build a filtered array and call renderItems
//  TODO 6e: Fill in the default case
// ============================================================

function filterItems(Topic) {  // TODO 6a — name the parameter

  switch (Topic) {             // TODO 6b — what are you switching on?

    case "":
      // Empty string means the user selected "All"
      // Pass the full items array — no filtering needed
     renderItems(items);
     break;

    case "Audio":              // TODO 6c — your first category value (must match <option> value)
      // Build a filtered list for this category
      //
      // How filtering works:
      //   1. Start with an empty array
      //   2. Loop through all items
      //   3. If the item's category matches this case, add it to the array
      //   4. Pass the result to renderItems()
      //
      // The push() method adds an item to the end of an array:
      //   myArray.push(someValue)
      //
      // TODO 6d: Complete the filtering logic for this case

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


// ============================================================
//  PART 4 — RUN ON LOAD
//
//  When the page first loads, the dropdown shows "All"
//  but nothing is rendered yet — because the filter function
//  only runs when the user changes the dropdown.
//
//  This line calls filterItems with an empty string ""
//  so all items appear immediately when the page opens.
//
//  No changes needed here. But be ready to explain in your
//  presentation: WHY does this line need to be at the bottom
//  of this file, after the functions above are defined?
// ============================================================

filterItems("");
