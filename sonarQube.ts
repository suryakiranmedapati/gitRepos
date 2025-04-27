// bad-code.ts

function calculateTotal(price, quantity) {
    const taxRate = 0.08;
    const shipping = 5.99;
    const discount = 0;
  
    let total = price * quantity;
    total = total + (total * taxRate);
    total = total + shipping;
    total = total - discount;
  
    if (price > 100) {
      if (quantity > 10) {
        if (shipping > 0) {
          console.log("High order value with multiple items and shipping included");
        }
      }
    }
  
    const unusedVariable = "I am not used";
  
    return total;
  }
  
  function calculateTotalAgain(price, quantity) {
    const taxRate = 0.08;
    const shipping = 5.99;
    const discount = 0;
  
    let total = price * quantity;
    total = total + (total * taxRate);
    total = total + shipping;
    total = total - discount;
  
    return total;
  }
  
  calculateTotal(120, 15);
  