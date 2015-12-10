json.array!(@posts) do |post|
  json.extract! post, :id, :title, :context, :author
  json.url post_url(post, format: :json)
end
