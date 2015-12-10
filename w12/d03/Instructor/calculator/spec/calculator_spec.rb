require_relative "../models/calculator"

describe Calculator do

	describe "#add" do
		it "should add 2 numbers" do
			expect(subject.add(2, 2)).to eq 4
		end
	end

	describe "#subtract" do
		it "should subtract 2 numbers" do
			expect(subject.subtract(4, 2)).to eq 2
		end
	end

	describe "#multiply" do
		it "should multiply 2 numbers" do
			expect(subject.multiply(2, 5)).to eq 10
		end
	end

	describe "#divide" do
		it "should divide 2 numbers" do
			expect(subject.divide(10, 5)).to eq 2
		end

		it "should protect from 0 as a divisor" do
			expect(subject.divide(5, 0)).to eq "You can't divide by 0!"
		end
	end

end