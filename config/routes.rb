Rails.application.routes.draw do
  scope :api do
    resources :workers, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :show]
    resources :schedules, only: [:index, :show, :create, :update, :destroy]
    post '/texts/send_text' => 'schedules#send_text'

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
