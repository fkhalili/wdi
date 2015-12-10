# Defining my Definition class!
class Definition

# Takes a term's name and a definition for it.
  def initialize(term, definition)
    @term = term
    @definition = definition
  end

# Getters. Nothing more needed.
  def term
    @term
  end

  def definition
    @definition
  end

end
