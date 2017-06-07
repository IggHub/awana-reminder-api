Rails.application.routes.draw do
  root "hello_world#index"
  get 'hello_world', to: 'hello_world#index'
  scope :api do
    resources :workers, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :show]
    resources :schedules, only: [:index, :show, :create, :update, :destroy]
    resources :texts, only: [:index, :create]
    resources :rosters, only: [:index, :create]
    #resources :sms, only: :create
  end
  post '/text_it' => 'schedules#text_dat_message'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
