<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Medical Billing System</title>

<style>
    body {
        background-color: #f0f8ff; 
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
    }

    .container {
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        color: #2c3e50;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th {
        background-color: #2980b9;
        color: #ffffff;
        padding: 10px;
        text-align: center;
        border: 1px solid #ddd;
    }
    
    td {
        padding: 10px;
        text-align: center;
        border: 1px solid #ddd;
        background-color: #ecf0f1;
    }

    input[type="number"], input[type="text"] {
        width: 100%;
        padding: 8px;
        margin: 5px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type="submit"] {
        width: 100%;
        padding: 12px;
        background-color: #27ae60;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    input[type="submit"]:hover {
        background-color: #218c53;
    }

    label {
        text-align: right;
        display: block;
        margin-bottom: 4px;
    }

</style>
</head>
<body>

<div class="container">
    <h2>Medical Billing System</h2>
    <form onsubmit="return calculateTotal()">
      <table>
        <tr>
          <th>S.No</th>
          <th>Item</th>
          <th>Unit Cost (Rs)</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>1</td>
          <td>erithrosin</td>
          <td>58</td>
          <td>
            <input type="number" name="quantity1" id="quantity1" min="1" max="20" required>
          </td>
          <td><input type="text" name="total1" readonly></td>
        </tr>
        <tr>
          <td>2</td>
          <td>feramcin</td>
          <td>46</td>
          <td>
            <input type="number" name="quantity2" id="quantity2" min="1" max="20" required>
          </td>
          <td><input type="text" name="total2" readonly></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Oximycin</td>
          <td>1090</td>
          <td>
            <input type="number" name="quantity3" id="quantity3" min="1" max="20" required>
          </td>
          <td><input type="text" name="total3" readonly></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="3"><label for="total">Total:</label></td>
          <td><input type="text" name="total" readonly></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="3"><label for="gst">GST at 15%:</label></td>
          <td><input type="text" name="gst" readonly></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="3"><label for="grandTotal">Grand Total Rs.:</label></td>
          <td><input type="text" name="grandTotal" readonly></td>
        </tr>
      </table>
      <input type="submit" value="Update Grand Total">
    </form>
  </div>
  
  <script>
    function calculateTotal() {
        var unitCost1 = 58, unitCost2 = 46, unitCost3 = 1090;

        var quantity1 = parseFloat(document.getElementById("quantity1").value);
        var quantity2 = parseFloat(document.getElementById("quantity2").value);
        var quantity3 = parseFloat(document.getElementById("quantity3").value);

        if (quantity1 < 1 || quantity1 > 20 || quantity2 < 1 || quantity2 > 20 || quantity3 < 1 || quantity3 > 20) {
            alert("Quantity should be between 1 and 20 for each item.");
            return false;
        }

        var total1 = quantity1 * unitCost1;
        var total2 = quantity2 * unitCost2;
        var total3 = quantity3 * unitCost3;
        var total = total1 + total2 + total3;

        document.getElementsByName("total1")[0].value = total1.toFixed(2);
        document.getElementsByName("total2")[0].value = total2.toFixed(2);
        document.getElementsByName("total3")[0].value = total3.toFixed(2);
        document.getElementsByName("total")[0].value = total.toFixed(2);

        var gst = total * 0.15;
        document.getElementsByName("gst")[0].value = gst.toFixed(2);

        var grandTotal = total + gst;
        document.getElementsByName("grandTotal")[0].value = grandTotal.toFixed(2);

        return false;
    }
  </script>

</body>
</html>

