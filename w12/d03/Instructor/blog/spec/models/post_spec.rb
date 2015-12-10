require 'rails_helper'

describe Post do
	
	it "should be invalid without an author" do
		expect(subject).to be_invalid
		expect(subject.errors[:author]).to eq ["can't be blank"]
	end
	it "should be invalid with blank content" do
		subject[:author] = "Paul"
		expect(subject).to be_invalid
		expect(subject.errors[:content]).to eq ["can't be blank"]
	end
	it "should not have content longer than 500 characters" do
		subject[:author] = "Paul"
		subject[:content] = "z" * 501
		expect(subject).to be_invalid
		expect(subject.errors[:content]).to eq ["is too long (maximum is 500 characters)"]
	end

	it "should not allow duplicate titles to be persisted" do
		post1 = Post.create(author: "Paul", title: "My Post", content: "hello world")
		expect(Post.count).to eq 1
		post2 = Post.create(author: "Swap", title: "My Post", content: "Where in the world is Swap")
		expect(post2).to be_invalid
		expect(post2.errors[:title]).to eq ["has already been taken"]
		expect(Post.count).to eq 1

	end

end