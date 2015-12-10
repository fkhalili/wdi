require 'pry'

numbers = [5, 2, 12, 7, 56, 42, 34]

# Define method to take array as an argument
def bubble_sort(array)

# Have highest number end up on the right
# Step through our list until it's sorted, then stop
  sorted = false
  i = array.length - 1

  while !sorted
    puts "not yet sorted"
    sorted = true
    i.times do |index|
      if array[index] > array[index+1]
        # switch em!
        # greater = array[j]
        # lesser = array[j+1]
        # array[j] = lesser
        # array[j+1] = greater

        #  Parallel assignment
        array[index], array[index+1] = array[index+1], array[index]
        sorted = false
      end
    end
  end
  array
end

# bubble_sort(numbers)

binding.pry