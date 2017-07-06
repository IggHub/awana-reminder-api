Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome/contact'
  get 'welcome/help'

  get 'drawer', to: "drawer#index"
  get 'scorer', to: 'drawer#scorer'
  get 'reminder', to: 'drawer#reminder'
  get 'scheduler', to: 'drawer#scheduler'

  post '/text_it' => 'schedules#text_dat_message'

  devise_for :users

  scope :api do
    resources :workers, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :show]
    resources :schedules, only: [:index, :show, :create, :update, :destroy]
    resources :students, only: [:index]
    resources :scores, only: [:index]
    resources :texts, only: [:index, :create]
    resources :rosters, only: [:index, :create]
  end
end
