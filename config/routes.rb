Rails.application.routes.draw do
  get 'students/index'

  get 'students/create'

  get 'students/update'

  get 'students/destroy'

  root 'welcome#index'
  get 'welcome/contact'
  get 'welcome/help'

  get 'drawer', to: "drawer#index"
  get 'scorer', to: 'drawer#scorer'
  get 'reminder', to: 'drawer#reminder'

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
