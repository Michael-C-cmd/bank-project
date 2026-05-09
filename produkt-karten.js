/* 1.Aufgabe: Hover-Effekt:
Wähle alle Produktkarten aus (querySelectorAll).
Füge einen mouseover-Listener hinzu, der die Hintergrundfarbe ändert (z. B. style.backgroundColor = "var(--sparda-brightBlue)").
Bonus: Setze die Farbe mit mouseout zurück.
*/

/* 2.Aufgabe: Button-Interaktion:
Füge jedem "Mehr erfahren"-Button einen click-Listener hinzu.
Bei Klick: Skaliere die Karte (style.transform = "scale(1.05)").
Bonus: Ändere den Button-Text auf "Weniger erfahren" und setze die Skalierung zurück.
*/

const productCard = document.querySelectorAll(".products__card");
console.log(productCard);

const productBtns = document.querySelectorAll(".products__card__button");
console.log(productBtns);

productCard.forEach((product) => {
  product.addEventListener("mouseover", () => {
    product.style.backgroundColor = "var(--sparda-darkBlue)";
    product.style.color = "white";
    productBtns.forEach((button) => {
      button.addEventListener("click", () => {
        product.style.transform = "scale(1.05)";
        button.textContent = "Weniger erfahren";
        button.addEventListener("click", () => {
          product.style.transform = "scale(1.0)";
          button.textContent = "Mehr erfahren";
        });
      });
    });
  });
  product.addEventListener("mouseout", () => {
    product.style.backgroundColor = "var(--sparda-brightBlue)";
    product.style.color = "black";
  });
});

/* 1.Aufgabe: Wenn ich die Mouse in dem <div> Element bewege, wird trotzdem immer 
zwischen "mouse over" und "mouse out" gewechselt. Warum?
Es ändert sich jedoch nichts an dem style von dem <div>
*/

/* 2.Aufgabe: Wenn ich mehrere Buttons anclicke, dann wird richtigerweise
das <div> Element von mehreren skaliert und der Text auf "Weniger erfahren"
umgewandelt, jedoch beim click auf "weniger erfahren" werden alle auf die
urpsrüngliche "scale(1.0)" zurückgesetzt.
Diesen Bug möchte ich noch fixen!
*/
