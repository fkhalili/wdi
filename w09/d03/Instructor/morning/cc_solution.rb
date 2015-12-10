require 'pry'

def valid?(number)
  # starting at second to last number, double every other number going backwards
  reversed_number_array = number.to_s.reverse.split("")
  #  duoble every one!
  doubled_digits = reversed_number_array.map.with_index do | num, index| 
    # check if index is odd or even
    if index.odd?
      (num.to_i * 2).to_s
    else
      num
    end
  end
  all_the_single_digits = doubled_digits.join.split('')
  # convert all our numbers to integers, then add them up
  sum = all_the_single_digits.map {|num| num.to_i}.reduce(:+)
  # add up all the numbers?
  sum % 10 == 0
end
binding.pry