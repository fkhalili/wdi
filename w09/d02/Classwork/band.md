## Band.io

Dave Grohl, Fritz, and Maria have had it up to here with the lousy concert management apps out there, and have enlisted your help in building a Rails app so that their friends and former-colleagues can effectively manage their schedules.

#### Exercise Objectives
  - implement active record relationships
  - gain additional experience using the following:
    - [migrations](http://api.rubyonrails.org/classes/ActiveRecord/Migration.html)
    - [mass assignment with strong params](http://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters)
    - [form helpers](http://api.rubyonrails.org/classes/ActionView/Helpers/FormHelper.html)
    - [link helpers](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html)
    - [asset helpers](http://api.rubyonrails.org/classes/ActionView/Helpers/AssetUrlHelper.html)
    - [partials to keep your views DRY](http://api.rubyonrails.org/classes/ActionView/PartialRenderer.html)

#### Models

A __Venue__ can have many events, as well as many bands (through events), and has the following attributes:

- `name` (mandatory)
- `city` (mandatory)
- `state` (mandatory)
- `family_friendly` (defaults to false)

An __Event__ belongs to a venue __and__ a band, and has the following attributes:

- `date` (mandatory)
- `alcohol_served` (defaults to true)

A __Band__ has many events, and the following attributes:

- `name` (unique and mandatory)
- `genre` (mandatory)
- `explicit_lyrics` (defaults to false)

#### Behavioral Specs

- The root path should provide links to:
  - a listing of all venues
  - a form to create a venue
  - a form to create a band (independent of venue)
  - a form for searching all events (across all venues) that occurred on a particular date (look into the [html 'date' input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input))

- A venue should be able to:
  - create an event, choosing from a list of all bands
    - __Note:__ if the venue is family friendly, only kid-friendly bands should be listed as options.
- A venue should __not__ be able to:
  - create an event on a date that conflicts with another of its scheduled events

#### Bonus

- Don't allow a band to be scheduled on 3 consecutive nights unless all 3 nights take place at the same venue
- Allow an event to have many bands, like a festival
- Events that takes place in Utah venues can't serve alcohol
- Make it pretty
