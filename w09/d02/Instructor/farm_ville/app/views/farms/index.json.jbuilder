json.array!(@farms) do |farm|
  json.extract! farm, :id, :name, :location
  json.url farm_url(farm, format: :json)
end
