class Calculator

	def add(num1, num2)
		return num1 + num2
	end

	def subtract(num1, num2)
		return num1 - num2
	end

	def multiply(num1, num2)
		return num1 * num2
	end

	def divide(num1, num2)
		return "You can't divide by 0!" if num2 == 0
		return num1 / num2
	end

end