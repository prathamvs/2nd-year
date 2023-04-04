var num1 = "";
		var num2 = "";
		var operator = "";
		var result = document.getElementById("result");
		
		function numClick(num) {
			if (operator === "") {
				num1 += num;
				result.value = num1;
			} else {
				num2 += num;
				result.value = num2;
			}
		}
		
		function opClick(op) {
			if (num1 !== "") {
				operator = op;
				result.value = "";
			}
		}
		
		function clearClick() {
			num1 = "";
			num2 = "";
			operator = "";
			result.value = "";
		}
		
		function equalsClick() {
			if (num1 !== "" && num2 !== "" && operator !== "") {
				var n1 = parseInt(num1);
				var n2 = parseInt(num2);
				var res;
				switch (operator) {
					case "+":
						res = n1 + n2;
						break;
					case "-":
						res = n1 - n2;
						break;
					case "*":
						res = n1 * n2;
						break;
					case "/":
						res = n1 / n2;
						break;
				}
				result.value = res;
			}
		}