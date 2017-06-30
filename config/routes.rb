Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome/drawer'
  get 'welcome/contact'
  get 'welcome/help'

  get 'reminder', to: 'reminder#index'

  post '/text_it' => 'schedules#text_dat_message'

  devise_for :users

  scope :api do
    resources :workers, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :show]
    resources :schedules, only: [:index, :show, :create, :update, :destroy]
    resources :texts, only: [:index, :create]
    resources :rosters, only: [:index, :create]
  end
end
