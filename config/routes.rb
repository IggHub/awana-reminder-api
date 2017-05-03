Rails.application.routes.draw do
  scope :api do
    resources :workers, only: [:index, :show]
    resources :users, only: [:index, :show]
    resources :schedules, only: [:index, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
