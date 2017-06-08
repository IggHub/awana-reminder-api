class AppController < ApplicationController
  layout "app"

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
